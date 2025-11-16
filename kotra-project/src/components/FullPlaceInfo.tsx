import DottedLine from './DottedLine'
import { useNavigate } from 'react-router-dom'
import MasonryGrid from './MasonryGrid'

interface FullPlaceInfoProps {
    id : string
    name: string
    info: string
    images?: string[];
}


function FullPlaceInfo({ id, name, info, images = []}: FullPlaceInfoProps) {

    const navigate = useNavigate()

    return (
        <div className='my-8 mx-1'>
            <DottedLine />
            <h2 id={id} className="text-4xl font-medium my-8 text-center">{name}</h2>
            <DottedLine />

            <p className="text-[20px] text-main-text mt-4 leading-7 whitespace-pre-line">{info}</p>

						<MasonryGrid images={images}/>

            <div className="flex flex-col lg:flex-row gap-4 justify-center mt-10 text-xl lg:h-16">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="cursor-pointer w-full lg:w-1/2 px-6 py-2 border-2 text-main-text border-main-orange rounded-lg hover:bg-footer-bg transition"
                >
                    Вернуться к просмотру
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/reservation')}
                    className="cursor-pointer w-full lg:w-1/2 px-6 py-2 bg-main-orange text-button-text rounded-lg hover:opacity-90 transition"
                >
                    Забронируй уже сейчас!
                </button>
            </div>
        </div>
    )
}

export default FullPlaceInfo
