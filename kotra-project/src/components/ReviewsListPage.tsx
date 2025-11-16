import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Comment from './Comment';

type Review = {
  id: string;
  name: string;
  phone: string;
  description: string;
  rate: number;
  createdAt: string;
};

function ReviewsListPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        // First try same-origin API. In dev setups this can return the Vite index.html
        // (text/html) if the backend isn't running or a proxy isn't configured.
        const tryFetch = async (url: string) => {
          const r = await fetch(url);
          const ct = r.headers.get('content-type') || '';
          return { res: r, contentType: ct };
        };

        const { res, contentType } = await tryFetch('/api/reviews');

        // If the dev server served HTML (index.html), try backend fallback on localhost:5000
        if (contentType.includes('text/html')) {
          // read a short snippet for diagnostics (don't show full HTML)
          const text = await res.text();
          const snippet = text ? text.slice(0, 300) : '';

          // Attempt backend direct host (common local backend port in this project)
          try {
            const fallback = await tryFetch('http://localhost:5000/api/reviews');
            const fRes = fallback.res;
            const fCt = fallback.contentType;
            if (fRes.ok && fCt.includes('application/json')) {
              const data = await fRes.json();
              if (data && Array.isArray(data.reviews)) {
                setReviews(data.reviews);
                return;
              }
              setReviews([]);
              return;
            }

            // fallback failed: get short error text
            const fText = await fRes.text();
            throw new Error(
              `Dev server returned HTML (likely index.html). Tried backend at http://localhost:5000 but it also failed. Backend response snippet: ${fText
                .slice(0, 300)
                .replace(/\s+/g, ' ')}. Original HTML snippet: ${snippet.replace(/\s+/g, ' ')}'`
            );
          } catch (innerErr) {
            // Surface a friendly message rather than raw HTML
            const innerMsg = innerErr instanceof Error ? innerErr.message : String(innerErr);
            throw new Error(
              'Server returned HTML (index.html). This usually means the backend is not running or Vite is not proxying /api. ' +
                innerMsg
            );
          }
        }

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || 'Failed to load reviews');
        }

        if (!contentType.includes('application/json')) {
          const text = await res.text();
          throw new Error(text || 'Server returned non-JSON response');
        }

        const data = await res.json();
        if (data && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        } else {
          setReviews([]);
        }
      } catch (err: unknown) {
        console.error('Error fetching reviews', err);
        const message = err instanceof Error ? err.message : String(err);
        // Keep the error concise for the UI. If it's long HTML, truncate to first 300 chars.
        const short = message.length > 600 ? message.slice(0, 600) + '…' : message;
        setError(short || 'Ошибка при загрузке отзывов');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <Header />
      <main className="lg:max-w-6xl m-auto lg:px-5 px-4 py-8">
        <h1 className="text-3xl mb-6">Отзывы</h1>

        {loading && <p>Загрузка отзывов...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && (
          <div className="grid gap-6">
            {reviews.length === 0 && <p>Пока нет отзывов.</p>}
            {reviews.map((r) => (
              <Comment
                key={r.id}
                name={r.name}
                text={r.description}
                rate={r.rate}
                data={new Date(r.createdAt).toLocaleString()}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ReviewsListPage;
