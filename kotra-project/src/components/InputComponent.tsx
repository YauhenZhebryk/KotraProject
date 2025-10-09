type InputProps = {
	text: string;
	type?: string;
}

function InputComponent({text, type = 'input'} : InputProps) {
	const commonClasses = 'w-full border-2 border-main-orange rounded-xl py-2 px-3 ';

	return (
		<div>
			<label htmlFor="" className="m-2 font-light text-[20px] block leading-5">{text}</label>
			{type==='area' ? 
			(<textarea className={`${commonClasses} text-[20px] h-52`} />)
			:
			(<input type="text" className={`${commonClasses} text-2xl`} />)
			}
			
		</div>
	)
}

export default InputComponent