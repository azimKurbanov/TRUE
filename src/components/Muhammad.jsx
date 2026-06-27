import { useState } from 'react'
import Pause from '../assets/pause.png'
import Line from '../assets/Line 2.png'
import Line2 from '../assets/Rectangle 4.png'
import Arrow from '../assets/Arrow 1.png'
import FitnessSlide1 from '../assets/fitness-slide-1.webp'
import FitnessSlide2 from '../assets/fitness-slide-2.webp'
import FitnessSlide3 from '../assets/fitness-slide-3.webp'
import FitnessSlide4 from '../assets/fitness-slide-4.png'
import FitnessSlide5 from '../assets/fitness-slide-5.png'
import VideoIcon from '../assets/fluent_video-clip-multiple-24-filled.png'
import Headphones from '../assets/headphones.png'
import Kub from '../assets/Kub.png'
import ShowRoom from '../assets/ShowRoom.png'
import Parametr from '../assets/Parametr.png'
import Car from '../assets/Car.png'
import run from '../assets/run.png'
import PhotoFitness from '../assets/photo-fitness.png'

const sliderImages = [
    FitnessSlide1,
    FitnessSlide2,
    FitnessSlide3,
    FitnessSlide4,
    FitnessSlide5,
]

const Muhammad = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <div className="bg-cover bg-center h-[672px] w-full mt-[0px]"
            style={{ backgroundImage: "url('/src/assets/back.png')" }}>
            <div className='justify-center items-center flex flex-col relative top-[120px]'>
                <img className='cursor-pointer' src={Pause}></img>
                <h2 className='text-[#EEEEEE] text-[50px] font-bold'>
                    TRUE FITNESS - ПРЕМИУМ
                    <br />ТРЕНАЖЕРЫ ИЗ США
                </h2>
            </div>
            <section className='bg-[#01AEE7] h-[266px] mt-[340px]'>
                <div className='text-center relative top-[50px] mb-[30px]'>
                    <img className='m-auto' src={Line} alt="" />
                    <h2 className='text-[35px] text-[#FFFFFF] font-[700]'>
                        TRUE - ведущий мировой
                        <br /> производитель премиального фитнес
                        <br />оборудования
                    </h2>
                    <img className='m-auto mt-[10px]' src={Line} alt="" />
                </div>
            </section>
            <section className='bg-white py-[80px]'>
                <div className='mx-auto flex w-[90%] max-w-[1180px] items-center justify-between gap-[60px]'>
                    <div>
                        <h2 className='text-[#000000] text-[60px] font-[700] mb-[30px] leading-[1.05]'>TRUE
                            <br></br><span className='text-[#01AEE7]'>FITNESS</span></h2>
                        <img className='mb-[30px]' src={Line2} alt="" />
                        <p className='text-[#000000] text-[30px] font-[700] mb-[30px]'>Современное и
                            <br /> надежное оборудование для
                            <br /> фитнес-клубов</p>
                        <div className='flex items-center gap-[30px]'>
                            <p className='text-[#01AEE7] text-[30px] font-[700]'>Кардио<br />
                                Тренажеры</p>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img
                            className='h-[430px] w-[560px] object-cover'
                            src={sliderImages[activeSlide]}
                            alt='TRUE FITNESS'
                        />
                        <div className='mt-[24px] flex items-center gap-[14px]'>
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-[13px] w-[13px] rounded-full transition-colors ${activeSlide === index ? 'bg-[#01AEE7]' : 'bg-[#D9D9D9]'
                                        }`}
                                    type='button'
                                    aria-label={`Показать слайд ${index + 1}`}
                                    onClick={() => setActiveSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#F2F2F2] py-[60px]'>
                <div className='mx-auto grid w-[90%] max-w-[1180px] grid-cols-1 gap-[16px] lg:grid-cols-2'>
                    <div className='flex flex-col gap-[16px]'>
                        <div
                            className='relative h-[340px] bg-cover bg-center px-[42px] py-[110px] text-white'
                            style={{ backgroundImage: `url(${FitnessSlide1})` }}
                        >
                            <div className='absolute inset-0 bg-black/35'></div>
                            <div className='relative z-10'>
                                <h2 className='text-[26px] font-[700] uppercase leading-[1.15]'>
                                    Лучшие
                                    <br />характеристики
                                </h2>
                                <div className='mt-[28px] h-[3px] w-[180px] bg-[#E7EA18]'></div>
                                <p className='mt-[30px] max-w-[450px] text-[15px] leading-[1.2]'>
                                    Наши тренажеры имеют самые совершенные характеристики в классе,
                                    от более мощных технических показателей до расширенных функциональных возможностей.
                                </p>
                            </div>
                        </div>

                        <div className='bg-[#01AEE7] px-[42px] py-[28px] text-white'>
                            <h2 className='text-[26px] font-[700] uppercase leading-[1.15]'>
                                Высокое качество и
                                <br />надежность
                            </h2>
                            <div className='mt-[16px] h-[3px] w-[180px] bg-[#E7EA18]'></div>
                            <p className='mt-[18px] max-w-[455px] text-[15px] leading-[1.2]'>
                                Высокое качество тренажеров - это визитная карточка TRUE.
                                Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='bg-[#01AEE7] px-[42px] py-[28px] text-white'>
                            <h2 className='text-[26px] font-[700] uppercase leading-[1.15]'>
                                Низкая стоимость
                                <br />владение
                            </h2>
                            <div className='mt-[16px] h-[3px] w-[180px] bg-[#E7EA18]'></div>
                            <p className='mt-[18px] max-w-[455px] text-[15px] leading-[1.2]'>
                                Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание,
                                так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.
                            </p>
                        </div>

                        <div
                            className='relative h-[340px] bg-cover bg-center px-[42px] py-[110px] text-white'
                            style={{ backgroundImage: `url(${FitnessSlide3})` }}
                        >
                            <div className='absolute inset-0 bg-black/35'></div>
                            <div className='relative z-10'>
                                <h2 className='text-[26px] font-[700] uppercase leading-[1.15]'>
                                    Качественные и
                                    <br />оперативный сервис
                                </h2>
                                <div className='mt-[28px] h-[3px] w-[180px] bg-[#E7EA18]'></div>
                                <p className='mt-[30px] max-w-[450px] text-[15px] leading-[1.2]'>
                                    Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание
                                    наличию всех необходимых запчастей и высокой скорости технического реагирования.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#EEEEEE] h-[1263px]'>
                <h2 className='text-[#01AEE7] text-[30px] font-[700] ml-[200px] relative top-[50px]'>Мы предлагаем
                    <br />
                    полный комплекс услуг</h2>
                <div className='flex justify-around items-center relative'>
                    <div className='flex justify-center items-center gap-[180px] relative top-[-80px]'>
                        <div className='flex justify-center items-center flex-col gap-[80px]'>
                            <div>
                                <img src={Headphones} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700] mb-[10px]'>КОНСАЛТИНГ</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Помогаем в разработке
                                    <br />концепции клуба,
                                    <br />зонировании, оснащении и
                                    <br />расчете финансовых
                                    <br /> показателей.</p>
                            </div>
                            <div>
                                <img src={VideoIcon} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700]'>МОНТАЖ И СЕРВИСНОЕ
                                    <br />ОБСЛУЖИВАНИЕ</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Полный цикл пуско-наладочных
                                    <br />работ, а также сервисного
                                    <br />обслуживания тренажеров.</p>
                            </div>
                            <div>
                                <img src={Kub} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700]'>ПОДБОР ОБОРУДОВАНИЯ
                                    <br /> И 3D ПРОЕКТ</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Помогаем подобрать оборудование,
                                    <br /> сделать расстановку на плане и
                                    <br /> показать 3D визуализацию вашего
                                    <br />    будущего проекта.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center flex-col gap-[150px]'>
                            <div>
                                <img src={ShowRoom} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700]'>ФИРМЕННЫЙ SHOW-ROOM</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Пройдите тест-драйв
                                    <br></br>оборудования перед
                                    <br />приобретением.</p>
                            </div>
                            <div>
                                <img src={Parametr} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700]'>ПОСТАВКА ЗАПЧАСТЕЙ</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Поставка как гарантийных, так и
                                    <br />постгарантийных запчастей.</p>
                            </div>
                            <div>
                                <img src={Car} alt="" />
                                <h2 className='text-[#000000] text-[15px] font-[700]'>Доставка по всему
                                    <br /> Узбекистану</h2>
                                <p className='text-[#000000] text-[15px] font-[400]'>Мы доставляем оборудование
                                    <br /> по всему Узбекистану.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[-90px]'>
                        <img src={run} alt="" />
                    </div>
                </div>
            </section>
            <section
                className="w-full bg-cover bg-center py-[80px] flex items-center justify-center relative mt-[-90px] md:mt-0"
                style={{ backgroundImage: `url(${PhotoFitness})` }}
            >
                <div className="max-w-[530px] w-[90%] bg-white p-[35px] md:p-[50px] shadow-2xl relative z-10">
                    <h2 className="text-[24px] md:text-[30px] font-extrabold uppercase leading-[1.15] text-black">
                        Получите эксклюзивное предложение на тренажеры True Fitness
                    </h2>

                    <p className="text-[#666666] text-[13px] md:text-[14px] mt-4 mb-6">
                        Мы будем рады проконсультировать вас и помочь с подбором оборудования
                    </p>

                    <form className="space-y-[16px]">
                        <input
                            type="text"
                            placeholder="ИМЯ"
                            className="w-full h-[54px] px-[24px] bg-[#F2F2F2] text-black font-semibold placeholder:text-[#9A9A9A] placeholder:font-bold placeholder:text-[14px] outline-none rounded-none"
                        />

                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="w-full h-[54px] px-[24px] bg-[#F2F2F2] text-black font-semibold placeholder:text-[#9A9A9A] placeholder:font-bold placeholder:text-[14px] outline-none rounded-none"
                        />

                        <div className="flex items-center h-[54px] pl-[20px] pr-[24px] bg-[#F2F2F2] rounded-none">
                            <span className="mr-[8px] text-[18px]">🇺🇿</span>
                            <span className="mr-[12px] text-[10px] text-black cursor-pointer">▼</span>
                            <input
                                type="tel"
                                placeholder="+998 (99)-999-99-99"
                                className="flex-1 bg-transparent outline-none text-black font-semibold placeholder:text-[#9A9A9A] placeholder:font-bold placeholder:text-[14px]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-[54px] bg-[#00AEEF] text-white font-bold uppercase hover:bg-sky-600 transition duration-200 cursor-pointer rounded-none"
                        >
                            Отправить
                        </button>
                    </form>

                    <p className="text-[11px] text-[#777777] mt-[24px] leading-[1.4]">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
                        соглашаетесь с политикой конфиденциальности
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Muhammad
