import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'

const slides = [one, two, three];

export default function Contacts() {
      const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan ma\'lumot:', form);
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
  };
  return (
    <section className="bg-white">
      <div className="bg-[#00aeef] py-8 text-center text-white">
        <p className="text-sm text-yellow-300">КОНТАКТЫ</p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">
          ШОУ РУМ TRUE В ТАШКЕНТЕ
        </h1>
        <p className="mt-2 text-sm font-semibold">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </p>
      </div>

      <div className="relative bg-gray-100 py-8 pb-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          className="mx-auto max-w-3xl"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Showroom ${i + 1}`}
                className="h-[400px] w-full rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="min-h-[450px] flex-1">
          <iframe
            title="Manzil"
            src="https://www.google.com/maps?q=Tashkent+City+Boulevard+Furkat+2A&output=embed"
            className="h-full min-h-[350px] w-full border-0"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-3 bg-gray-200 p-10">
          <h2 className="text-lg font-bold text-[#00aeef]">
            ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР В УЗБЕКИСТАНЕ - PROWELLNESS
          </h2>
          <p className="text-base font-bold text-gray-800">+998 (90) 606-66-66</p>
          <p className="text-[#00aeef]">info@prowellness.uz</p>
          <p className="text-sm text-gray-700">
            Адрес: Ташкент Сити, Бульвар, ул. Фуркат 2A
          </p>
          <p className="text-sm font-bold text-[#00aeef]">
            ПН-СБ с 9:00-19:00<br />ВС не рабочий
          </p>
        </div>
      </div>

          
          <div className="bg-white px-6 py-10">
  <h2 className="mb-6 text-center text-xl font-bold text-[#00aeef]">
    ОСТАВИТЬ ЗАЯВКУ
  </h2>

  {sent ? (
    <p className="text-center font-semibold text-green-600">
      Спасибо! Мы свяжемся с вами.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={form.name}
        onChange={handleChange}
        required
        className="rounded border border-gray-300 p-3"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={form.phone}
        onChange={handleChange}
        required
        className="rounded border border-gray-300 p-3"
      />
      <textarea
        name="message"
        placeholder="Сообщение"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="rounded border border-gray-300 p-3"
      />
      <button
        type="submit"
        className="rounded bg-[#00aeef] py-3 font-semibold text-white hover:opacity-90"
      >
        Отправить
      </button>
    </form>
  )}
</div>


      {/* Aloqa tugmalari */}
      <div className="bg-white px-6 py-10 text-center">
        <h2 className="mb-6 text-xl font-bold text-[#00aeef]">
          БОГЛАНИШ
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+998906066666"
            className="rounded bg-[#00aeef] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Qo'ng'iroq qilish
          </a>
          <a
            href="https://wa.me/998906066666"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-green-500 px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=Tashkent+City+Boulevard+Furkat+2A"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border-2 border-[#00aeef] px-6 py-3 font-semibold text-[#00aeef] hover:bg-[#00aeef] hover:text-white"
          >
            Yo'l ko'rsatish
          </a>
        </div>
      </div>


      
    </section>
  );
}