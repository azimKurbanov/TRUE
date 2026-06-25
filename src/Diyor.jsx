import React, { useState } from 'react';

const TrueClubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    openType: '',
    launchTime: '',
    services: [],
    comment: '',
  });
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 9);
    setFormData((prev) => ({ ...prev, phone: digits }));
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Заявка:', formData);
    alert('Заявка успешно отправлена!');
  };

  const openTypeOptions = [
    'Фитнес Студия',
    'Фитнес Клуб',
    'Домашний Спортзал',
    'Тренажерный Зал В Отеле, Санатории',
    'Корпоративный Спортзал',
  ];

  const launchTimeOptions = [
    'До 3 месяцев',
    '3–6 месяцев',
    '6–12 месяцев',
    'Более 1 года',
    'Ещё не определился',
  ];

  const serviceOptions = [
    { label: 'Консультация', val: 'consultation' },
    { label: 'Подбор Оборудования', val: 'equipment' },
    { label: 'Расстановка Тренажеров На Плане', val: 'layout' },
    { label: 'Лизинг', val: 'leasing' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Верхняя секция — белый фон с изображением */}
      <div className="bg-white flex justify-center items-center py-6 px-4">
        <img
          src="/src/assets/back.png"
          alt="План фитнес-клуба"
          className="max-w-full w-[420px] object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div style="width:420px;height:260px;background:linear-gradient(135deg,#e8f4f8,#cce8f4);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#888;font-size:14px;">
                3D план помещения
              </div>`;
          }}
        />
      </div>

      {/* Нижняя секция — серый фон с формой */}
      <div className="bg-[#ebebeb] px-6 py-8">
        <div className="max-w-sm mx-auto">

          <h2 className="text-center text-[15px] font-bold text-black mb-6 tracking-wide">
            ОТПРАВИТЬ ЗАЯВКУ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Имя */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1 tracking-wide">
                ВАШЕ ИМЯ
              </label>
              <input
                type="text"
                name="name"
                placeholder="ИМЯ"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent pb-1 text-[12px] text-gray-500 outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1 tracking-wide">
                E-MAIL:
              </label>
              <input
                type="email"
                name="email"
                placeholder="E-MAIL:"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent pb-1 text-[12px] text-gray-500 outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Телефон */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1 tracking-wide">
                НОМЕР ТЕЛЕФОНА
              </label>
              <div className="flex items-center gap-2 border-b border-gray-400 pb-1">
                <img
                  src="https://flagcdn.com/w20/uz.png"
                  alt="UZ"
                  className="w-5 h-3 object-cover"
                />
                <span className="text-[12px] font-semibold text-gray-700">+998</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(99)-999-99-99"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="flex-1 bg-transparent text-[12px] text-gray-500 outline-none placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Город */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1 tracking-wide">
                ГОРОД
              </label>
              <input
                type="text"
                name="city"
                placeholder="ГОРОД"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent pb-1 text-[12px] text-gray-500 outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Хотите открыть */}
            <div>
              <p className="text-[11px] font-semibold text-gray-700 mb-1 tracking-wide">
                ХОТИТЕ ОТКРЫТЬ:
              </p>
              <div className="space-y-[3px]">
                {openTypeOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="openType"
                      value={opt}
                      checked={formData.openType === opt}
                      onChange={handleChange}
                      className="w-3 h-3 accent-[#0099cc]"
                    />
                    <span className="text-[11px] text-gray-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Срок запуска */}
            <div>
              <p className="text-[11px] font-semibold text-gray-700 mb-1 tracking-wide">
                ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:
              </p>
              <div className="space-y-[3px]">
                {launchTimeOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="launchTime"
                      value={opt}
                      checked={formData.launchTime === opt}
                      onChange={handleChange}
                      className="w-3 h-3 accent-[#0099cc]"
                    />
                    <span className="text-[11px] text-gray-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Услуги */}
            <div>
              <p className="text-[11px] font-semibold text-gray-700 mb-1 tracking-wide">
                КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:
              </p>
              <div className="space-y-[3px]">
                {serviceOptions.map((s) => (
                  <label key={s.val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={s.val}
                      checked={formData.services.includes(s.val)}
                      onChange={handleChange}
                      className="w-3 h-3 accent-[#0099cc]"
                    />
                    <span className="text-[11px] text-gray-600">{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Загрузить план */}
            <div>
              <p className="text-[11px] font-semibold text-gray-700 mb-2 tracking-wide">
                ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ
              </p>
              <label className="cursor-pointer bg-[#0099cc] hover:bg-[#007aaa] text-white text-[11px] font-semibold px-4 py-[6px] rounded-sm inline-block transition tracking-wide">
                ADD FILES
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              {fileName && (
                <p className="mt-1 text-[10px] text-gray-500">Выбран: {fileName}</p>
              )}
            </div>

            {/* Комментарий */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1 tracking-wide">
                КОММЕНТАРИЙ
              </label>
              <div className="border-b border-gray-400 pb-1">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent text-[12px] text-gray-500 outline-none resize-none placeholder-gray-400"
                />
              </div>
            </div>

            {/* Кнопка отправки */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[#0099cc] hover:bg-[#007aaa] text-white text-[12px] font-semibold px-10 py-[7px] rounded-sm transition tracking-widest"
              >
                ОТПРАВИТЬ
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default TrueClubForm;