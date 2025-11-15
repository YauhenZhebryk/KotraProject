// function Stars({currentRate}: {currentRate: number}) {

// 	const Star = ({number, currentRate} : {number: number; currentRate: number}) => {
// 		return (
// 			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${number <= currentRate ? "text-main-orange" : "text-nostar"} stroke-main-orange`}>
// 				<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
// 			</svg>
// 		);
// 	};

// 	return (
// 		<span className="flex gap-1.5 justify-start">
// 			<Star number={1} currentRate={currentRate}/>
// 			<Star number={2} currentRate={currentRate}/>
// 			<Star number={3} currentRate={currentRate}/>
// 			<Star number={4} currentRate={currentRate}/>
// 			<Star number={5} currentRate={currentRate}/>
// 		</span>
// 	);
// }

// export default Stars


// function Stars({
//     currentRate,
//     onRate,
// }: {
//     currentRate: number;
//     onRate: (num: number) => void;
// }) {

//     const Star = ({
//         number,
//         currentRate,
//         onRate,
//     }: {
//         number: number;
//         currentRate: number;
//         onRate: (num: number) => void;
//     }) => {
//         return (
//             <button
//                 type="button"
//                 onClick={() => onRate(number)}
//                 className="p-0 m-0"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className={`size-7 cursor-pointer transition-all ${
//                         number <= currentRate ? "text-main-orange" : "text-nostar"
//                     } stroke-main-orange`}
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//                     />
//                 </svg>
//             </button>
//         );
//     };

//     return (
//         <span className="flex gap-1.5 justify-start">
//             <Star number={1} currentRate={currentRate} onRate={onRate} />
//             <Star number={2} currentRate={currentRate} onRate={onRate} />
//             <Star number={3} currentRate={currentRate} onRate={onRate} />
//             <Star number={4} currentRate={currentRate} onRate={onRate} />
//             <Star number={5} currentRate={currentRate} onRate={onRate} />
//         </span>
//     );
// }

// export default Stars;


import React, { useState } from "react";

type StarsProps = {
  currentRate: number;
  onRate: (value: number) => void;
};

function Stars({ currentRate, onRate }: StarsProps) {
  const [hoverRate, setHoverRate] = useState<number | null>(null);

  const Star = ({ number }: { number: number }) => {
    const isFilled = hoverRate !== null ? number <= hoverRate : number <= currentRate;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onMouseEnter={() => setHoverRate(number)}
        onMouseLeave={() => setHoverRate(null)}
        onClick={() => onRate(number)}
        className={`size-10 cursor-pointer transition-all duration-200
          ${isFilled ? "text-main-orange scale-110" : "text-nostar scale-100"}
          hover:scale-125
        `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    );
  };

  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} number={n} />
      ))}
    </div>
  );
}

export default Stars;
