import ButtonOrange from "./ButtonOrange"

interface HeaderComponentProps {
	text: string
}

function HeaderComponent({text} : HeaderComponentProps) {
	return (
		<>
			<h1>{text}</h1>
			<p className="text-main-orange">text</p>
			<p className="bg-main-bg">text</p>
			<ButtonOrange />
		</>
	)
} 
export default HeaderComponent