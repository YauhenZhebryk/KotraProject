import { useEffect, useState } from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom';


type Review = {
	id: string;
	name: string;
	phone?: string;
	description: string;
	rate: number;
	createdAt: string;
};

function CommentsSection() {
	const [reviews, setReviews] = useState<Review[] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const tryFetch = async (url: string) => {
			const r = await fetch(url);
			const ct = r.headers.get('content-type') || '';
			return { res: r, contentType: ct };
		};

		const fetchReviews = async () => {
			setLoading(true);
			try {
				const { res, contentType } = await tryFetch('/api/reviews');

						if (contentType.includes('text/html')) {
							try {
						const fallback = await tryFetch('http://localhost:5000/api/reviews');
						const fRes = fallback.res;
						const fCt = fallback.contentType;
						if (fRes.ok && fCt.includes('application/json')) {
							const data = await fRes.json();
							setReviews(Array.isArray(data.reviews) ? data.reviews : []);
							return;
						}
						const fText = await fRes.text();
						throw new Error('Backend fallback failed: ' + (fText || 'no response'));
					} catch (inner) {
								console.error('CommentsSection: backend fallback error', inner);
								throw new Error('Dev server returned HTML and backend fallback failed.');
					}
				}

				if (!res.ok) {
					const text = await res.text();
					throw new Error(text || 'Failed to fetch reviews');
				}

				if (!contentType.includes('application/json')) {
					const text = await res.text();
					throw new Error(text || 'Server returned non-JSON response');
				}

				const data = await res.json();
				setReviews(Array.isArray(data.reviews) ? data.reviews : []);
					} catch (err: unknown) {
						console.error('CommentsSection: failed to load reviews', err);
						setError(err instanceof Error ? err.message : String(err));
						setReviews([]);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, []);

		const pickRandom = (arr: Review[], n: number) => {
		const copy = arr.slice();
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copy[i], copy[j]] = [copy[j], copy[i]];
		}
		return copy.slice(0, n);
	};

	const goodReviews = reviews && reviews.length > 0 ? reviews.filter(r => Number(r.rate) >= 4) : [];
	const shown = goodReviews.length > 0 ? pickRandom(goodReviews, 3) : null;

	return (
		<div className="my-16 lg:my-72 space-y-10">
			<div className="flex gap-2.5 flex-col lg:grid lg:grid-cols-3 lg:flex-row">
				{loading && (
					<p>Загрузка отзывов...</p>
				)}

				{!loading && shown && shown.map((r) => (
					<Comment key={r.id} name={r.name} rate={r.rate} text={r.description} data={new Date(r.createdAt).toLocaleDateString()} />
				))}

				{!loading && (!shown || shown.length === 0) && (
					<>
						<Comment name="Николай" rate={5} text='Отличное место для отдыха! Тихая природа, уютный дом и шикарная баня. Провели здесь выходные — перезагрузились на 100%. Обязательно вернёмся!' data='14.06.2024' />
						<Comment name="Виктория" rate={5} text='Приезжали компанией — всем очень понравилось. Территория ухоженная, вокруг лес и свежий воздух. Рекомендуем!' data='14.06.2024' />
						<Comment name="Kirill" rate={5} text='Усадьба выше всех ожиданий: чисто, красиво и очень атмосферно.' data='14.06.2024' />
					</>
				)}
			</div>
				<div className="flex flex-col lg:flex-row gap-4 justify-center text-xl">
                <Link
                    to='/reviews'
                    className="cursor-pointer w-full lg:w-1/2 border-2 text-main-text border-main-orange hover:bg-footer-bg transition rounded-xl bg-main-bg px-2 py-3 text-2xl font-[100] text-center"
                >
                    Все отзывы
                </Link>

                <Link
                    to='/review'
                    className="cursor-pointer w-full lg:w-1/2 hover:opacity-90 transition rounded-xl bg-main-orange text-button-text px-2 py-3 text-2xl font-[100] text-center"
                >
                    Оставить отзыв
                </Link>
            </div>
			{error && (
							<div className='flex flex-row items-center'>
								<div className='m-2 text-red-500'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
									</svg>
								</div>
								<span>{error}</span>
							</div>
						)}
		</div>
	)
}

export default CommentsSection