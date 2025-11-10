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
							<span className='red-500 p-2 border border-red-500 rounded-xl'>{errorMessage}</span>
						) : <></>}
        </div>
    );
}

export default InputComponent;