import React from 'react';

// Обновим тип пропсов, чтобы включить name, value, и onChange
type InputProps = {
    text: string;
    type?: string; // 'input' (по умолчанию) или 'area'
    name: string; // Имя поля, используемое для идентификации в форме
    value: string; // Текущее значение поля
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Обработчик изменений
};

function InputComponent({ text, type = 'input', name, value, onChange }: InputProps) {
    const commonClasses = 'w-full border-2 border-main-orange rounded-xl py-2 px-3 ';

    return (
        <div>
            {/* Связываем label с input/textarea через htmlFor и name */}
            <label htmlFor={name} className="m-2 font-light text-[20px] block leading-5">
                {text}
            </label>
            {type === 'area' ? (
                <textarea
                    id={name} // Добавляем id для связи с label
                    name={name} // ОБЯЗАТЕЛЬНО: Передаем name
                    value={value} // ОБЯЗАТЕЛЬНО: Передаем value для управляемого компонента
                    onChange={onChange} // ОБЯЗАТЕЛЬНО: Передаем onChange
                    className={`${commonClasses} text-[20px] h-52`}
                />
            ) : (
                <input
                    id={name} // Добавляем id для связи с label
                    type="text" // Можно оставить type="text" или сделать его пропсом при необходимости
                    name={name} // ОБЯЗАТЕЛЬНО: Передаем name
                    value={value} // ОБЯЗАТЕЛЬНО: Передаем value для управляемого компонента
                    onChange={onChange} // ОБЯЗАТЕЛЬНО: Передаем onChange
                    className={`${commonClasses} text-2xl`}
                />
            )}
        </div>
    );
}

export default InputComponent;