function InputComponent({text} : {text:string}) {
	return (
		<div>
			<label htmlFor="" className="m-2 font-light text-[20px] block leading-5">{text}</label>
			<input type="text" className="w-full border-2 border-main-orange rounded-xl text-2xl py-2 px-3 " />
		</div>
	)
}

export default InputComponent