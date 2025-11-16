import React, { useState } from 'react';
import InputComponent from './InputComponent';
import MainButton from './MainButton';
import Stars from './Stars';
import Lighter from './Lighter';

type FormData = {
  name: string;
  phone: string;
  description: string;
  rate: number;
};

type StatusType = 'idle' | 'loading' | 'success' | 'error';

function ReviewsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    description: '',
		rate: 0
  });


  const [message, setMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<StatusType>('idle'); 
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

  const handleRate = (value: number) => {
  setFormData(prev => ({ ...prev, rate: value }));

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
      return 'Введите корректный номер телефона (например, +37529*******)';
		}
    if (!formData.description.trim() || formData.description.length < 5){
			setMessageType('description');
      return 'Введите описание заявки (не менее 5 символов)';
		}
	if (formData.rate < 1 || formData.rate > 5) {
  			setMessageType('rate');
  		return 'Пожалуйста, поставьте оценку от 1 до 5';
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
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Отзыв успешно отправлен!');
        setStatusType('success'); // Устанавливаем тип "успех"
        setFormData({
          name: '',
          phone: '',
          description: '',
			  	rate: 0
        });
      } else {
        const contentType = response.headers.get('content-type') || '';
        let errorText = 'Не удалось отправить';
        if (contentType.includes('application/json')) {
          const data = await response.json();
          errorText = data?.message || errorText;
        } else {
          // try to read text (could be HTML page)
          const text = await response.text();
          errorText = text || errorText;
        }
        setMessage(`❌ Ошибка: ${errorText}`);
        setStatusType('error');
      }
    } catch (error) {
      setMessage('❌ Произошла ошибка при соединении с сервером. Попробуйте позже.');
      setStatusType('error'); 
      console.error(error);
    }
  };



	return (
		<div>
			<h1 className="text-center mt-4 text-4xl lg:mt-16 mb-6">Оставить отзыв</h1>
				<form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="relative w-full bg-footer-bg rounded-xl p-3 lg:p-6 lg:col-start-2 lg:row-start-1 lg:flex lg:items-center  ">
						 <Lighter position="top-[-180px] left-70" size="440"/> 
                        <p className="text-[20px] text-main-text leading-7 ">
                            Мы ценим ваше мнение и будем благодарны, если вы поделитесь своими впечатлениями! Ваш отзыв поможет другим пользователям сделать правильный выбор, а нам — улучшать качество сервиса и развиваться дальше!
                        </p>
                        {/* <span className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 w-9 h-9 flex items-center justify-center bg-main-orange text-button-text rounded-full text-[20px] font-medium">
                            ?
                        </span> */}
                    </div>

                    <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
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
                    </div>

                    <div className="col-span-1 lg:col-span-2">
						<div className='mb-5'>
							<span className="block text-[20px] p-2 text-main-text">
								Оценка</span>
							<Stars currentRate={formData.rate} onRate={handleRate} />
							{messageType === "rate" && (
								<p className="text-sm mt-1">{message}</p>
							)}
						</div>
                        <InputComponent
									text="Отзыв"
									type="area"
									name="description"
									value={formData.description}
									onChange={handleChange}
									errorMessage={messageType === 'description' ? message : null}
									
							/>
                        <div className="mt-4">
                            <MainButton
									text={statusType === 'loading' ? 'Отправка...' : 'Подтвердить'}
									type="submit"
									disabled={statusType === 'loading'}
							/>
                        </div>
                    </div>
                </form>
		</div>

	

	);
}

export default ReviewsForm;