import React, { useState } from 'react';
import InputComponent from './InputComponent';
import MainButton from './MainButton';

type FormData = {
  name: string;
  phone: string;
  description: string;
};

// Добавим тип для статуса, чтобы различать успех, ошибку и загрузку
type StatusType = 'idle' | 'loading' | 'success' | 'error';

function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    description: ''
  });

  const [message, setMessage] = useState<string | null>(null); // Текст сообщения
  const [statusType, setStatusType] = useState<StatusType>('idle'); // Тип сообщения для стилизации
	const [messageType, setMessageType] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (message && statusType === 'error') {
      setMessage(null);
			setMessageType(null);
      setStatusType('idle');
    }
  };

  const validate = () => {
    if (!formData.name.trim() || formData.name.length < 2){
			setMessageType('name')
      return 'Введите корректное имя (не менее 2 символов)';
		}
    if (!formData.phone.trim() || !/^\+?\d{7,15}$/.test(formData.phone)){
			setMessageType('phone')
      return 'Введите корректный номер телефона (например, +79XXXXXXXXX)';
		}
    if (!formData.description.trim() || formData.description.length < 5){
			setMessageType('description');
      return 'Введите описание заявки (не менее 5 символов)';
		}
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setMessage(error);
      setStatusType('error'); // Устанавливаем тип "ошибка"
      return;
    }

    setMessage('Отправляем данные...');
    setStatusType('loading');

    try {
      const response = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Заявка успешно отправлена!');
        setStatusType('success'); // Устанавливаем тип "успех"
        setFormData({
          name: '',
          phone: '',
          description: ''
        });
      } else {
        const data = await response.json();
        setMessage(`❌ Ошибка: ${data.message || 'Не удалось отправить'}`);
        setStatusType('error');
      }
    } catch (error) {
      setMessage('❌ Произошла ошибка при соединении с сервером. Попробуйте позже.');
      setStatusType('error'); 
      console.error(error);
    }
  };

  const getStatusClass = (type: StatusType) => {
    switch (type) {
      case 'error':  return 'status-error'; // Если используете обычный CSS
        return 'bg-red-100 text-red-700 border border-red-700'; // Если используете Tailwind CSS
      case 'success':
        return 'status-success'; // Если используете обычный CSS
        // return 'bg-green-100 text-green-700 border border-green-700'; // Если используете Tailwind CSS
      case 'loading':
        return 'status-info'; // Если используете обычный CSS
        // return 'bg-blue-100 text-blue-700 border border-blue-700'; // Если используете Tailwind CSS
      default:
        return '';
    }
  };

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 flex-col mb-6 py-4">
			<InputComponent
                text="Имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
								errorMessage={messageType === 'name' ? message : null}
            />
			<InputComponent
                text="Телефон"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
								errorMessage={messageType === 'phone' ? message : null}
            />
			<InputComponent
                text="Описание заявки"
                type="area"
                name="description"
                value={formData.description}
                onChange={handleChange}
								errorMessage={messageType === 'description' ? message : null}
								
            />
			<MainButton
                text={statusType === 'loading' ? 'Отправка...' : 'Отправить'}
                type="submit"
                disabled={statusType === 'loading'}
            />

            {message && (
                <div className={`status-message ${getStatusClass(statusType)}`}>
                    {message}
                </div>
            )}
		</form>
	);
}

export default ReservationForm;