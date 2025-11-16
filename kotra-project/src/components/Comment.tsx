import Stars from "./Stars"

function Comment({name, text, rate, data} : {name: string; rate: number; text: string, data: string}) {
	return (
		<div>
			<div className="font-light mb-1 text-2xl ml-3">{name}</div>
			<div className="bg-footer-bg p-4 flex flex-col justrify-start rounded-xl gap-1">
				<Stars currentRate={rate}/>
				<p className="text-[20px]">{text}</p>
				<div className="flex justify-end"><data value={data} className="text-footer-text text-base">{data}</data></div>
			</div>
		
		</div>
	)
}

export default Comment