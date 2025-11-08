import MainButton from "./MainButton"
import Comment from "./Comment"
import { div } from "framer-motion/client";

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
);


function CommentSection() {
	return (
		<div className="my-72 space-y-10">
			<div className="flex gap-2.5 flex-col lg:flex-row">
				<Comment name="Николай" rate={4} text='Отличное заведение, обслуживание на высшем уровне!' data='14.06.2024'></Comment>
				<Comment name="Виктория" rate={1} text='Отличное заведение, обслуживание на высшем уровне!' data='14.06.2024'></Comment>
				<Comment name="Kirill" rate={2} text='Отличное заведение, обслуживание на высшем уровне!' data='14.06.2024'></Comment>
			</div>
			<div>
				<MainButton linkto='/review' text='Оставить отзыв' image={<Svg />} />
			</div>
		</div>
	)
}

export default CommentSection