import React, { useState } from 'react';
import InputComponent from './InputComponent';
import MainButton from './MainButton'; 

function ReservationForm() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		description: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch('URL_ВАШЕГО_БЭКЭНДА', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Данные успешно отправлены');
				setFormData({
                    name: '',
                    phone: '',
                    description: ''
                });
			} else {
				console.error('Ошибка при отправке данных');
			}
		} catch (error) {
			console.error('Произошла ошибка:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 flex-col mb-6 py-4">
			<InputComponent
                text="Имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
			<InputComponent
                text="Телефон"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
			<InputComponent
                text="Описание заявки"
                type="area"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
			<MainButton text="Отправить" type="submit" />
		</form>
	);
}

export default ReservationForm;