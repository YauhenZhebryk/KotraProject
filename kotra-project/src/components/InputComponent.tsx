import React from 'react';

type InputProps = {
    text: string;
    type?: string; 
    name: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
		errorMessage?: string | null; 
};

function InputComponent({ text, type = 'input', name, value, onChange, errorMessage }: InputProps) {
    const commonClasses = 'w-full border-2 border-main-orange rounded-xl py-2 px-3 ';

    return (
        <div>
            <label htmlFor={name} className="m-2 font-light text-[20px] block leading-5">
                {text}
            </label>
            {type === 'area' ? (
                <textarea
                    id={name}
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    className={`${commonClasses} text-[20px] h-52`}
                />
            ) : (
                <input
                    id={name} 
                    type="text" 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    className={`${commonClasses} text-2xl`}
                />
            )}
						{errorMessage ? (
							<div className='flex flex-row'>
								<div className='p-2 text-red-500'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
									</svg>
								</div>
								<span>{errorMessage}</span>
							</div>
						) : <></>}
        </div>
    );
}

export default InputComponent;