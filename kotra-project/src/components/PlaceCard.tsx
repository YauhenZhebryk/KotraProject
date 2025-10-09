type Choice = 'l' | 'r';

function PlaceCard({text, img, choice} : {text : string; img : string; choice : Choice}) {
   if (choice === 'l'){      
    return (    
          <button className="relative cursor-pointer w-full rounded-xl bg-main-bg pl-2 text-6xl h-42 mb-4">
      
      <div className="left-0 relative z-10 flex">
        <span className="text-main-text font-light text-4xl w-1/2">
          {text}
        </span>
      </div>

      <div className="absolute top-0 right-0 w-3/4 h-full bg-cover bg-center rounded-xl" 
      style={{ backgroundImage: `url(${img})` }}></div>
      
      <div className="absolute top-0 right-0 w-3/4 h-full
      bg-gradient-to-r from-main-bg/100 to-transparent"></div>
      
      </button>
      )}
  else {
    return( <button className="relative cursor-pointer w-full rounded-xl bg-main-bg pr-2 text-6xl h-42 mb-4">
      
      <div className="right-0 relative z-10 flex w-full justify-end">
        <span className="text-main-text font-light text-4xl w-2/3">
          {text}
        </span>
      </div>

      <div className="absolute top-0 left-0 w-3/4 h-full bg-cover bg-center rounded-xl" 
      style={{ backgroundImage: `url(${img})` }}></div>
      
      <div className="absolute top-0 left-0 w-3/4 h-full
      bg-gradient-to-l from-main-bg/100 to-transparent"></div>
      
      </button>
    )}
}

export default PlaceCard