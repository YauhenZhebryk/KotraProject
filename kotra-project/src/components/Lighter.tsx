type LighterProps = {
	position?:string;
	size?:string;
};

function Lighter({position = '', size = '450'} : LighterProps) {
	const lighterStyle = {
		width: `${size}px`,
		height: `${size}px`,
	};

	return (
		<div
			style={lighterStyle}
			className={`absolute bg-main-orange/20 rounded-full blur-3xl ${position}`}
		></div>
	);
}

export default Lighter;