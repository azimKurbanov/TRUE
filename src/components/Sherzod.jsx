import React from 'react'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'
import img7 from '../assets/img-7.png'
import img8 from '../assets/img-8.png'
import img9 from '../assets/img-9.png'

const Sherzod = () => {
    return (
        <div>
            <div className="bg-blue-600">
                <p className="text-2xl font-bold text-center text-yellow-200">НАШИ ПРЕИМУЩЕСТВА</p>
                <h2 className="text-xl font-bold text-center text-white pt-[50px]">ПРЕИМУЩЕСТВА TRUE FITNESS</h2>
                <h3 className="text-lg text-center font-bold text-white pt-[50px] pb-[20px]">
                    Благодаря которым мы являемся мировым лидером в производстве фитнес- <br />
                    оборудования
                </h3>
            </div>

            <div className='flex justify-between gap-[30px]'>
                <div className="flex justify-start pt-[50px] ">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img1} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ</p>
                            <p className="mt-4">
                                Наши тренажеры имеют самые <br />
                                совершенные характеристики в классе, от <br />
                                более мощных технических показателей <br />
                                до расширенных функциональных <br />
                                возможностей
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img2} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Высокая надежность оборудования</p>
                            <p className="mt-4">
                                Высокое качество тренажеров - это <br />
                                визитная карточка TRUE. Кроме того, TRUE <br />
                                предоставляет до 5 лет полной гарантии <br />
                                на кардио тренажеры.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img3} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Низкая стоимость владения</p>
                            <p className="mt-4">
                                Тренажеры способны выдерживать <br />
                                серьезную эксплуатационную нагрузку, <br />
                                сохраняя минимальные затраты на сервис, что обеспечивает минимальную <br />
                                стоимость владения
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img4} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Качественный и оперативный сервис</p>
                            <p className="mt-4">
                                Оборудование должно работать  <br />
                                бесперебойно, поэтому мы уделяем <br />
                                особое внимание наличию всех <br />
                                необходимых запчастей и высокой <br />
                                срочности технического реагирования
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="flex justify-between gap-[30px]">
                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img5} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Цены ниже, чем у аналогов</p>
                            <p className="mt-4">
                                Стоимость тренажеров вас приятно удивит. <br />
                                Несмотря на то, что мы полностью <br />
                                превосходим конкурентов, наши цены ниже.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img6} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Совершенная производительность</p>
                            <p className="mt-4">
                                Тренажеры TRUE обеспечивают <br />
                                непревзойденный уровень тренировок, <br />
                                для достижения самых высоких <br />
                                результатов
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img7} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Абсолютные лидеры по количеству инноваций</p>
                            <p className="mt-4">
                                Наши тренажеры имеют самые <br />
                                совершенные характеристики в классе, от <br />
                                более мощных технических показателей <br />
                                до расширенных функциональных <br />
                                возможностей
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pt-[50px]">
                    <div className="w-full max-w-[440px] rounded-[24px] bg-white shadow-xl overflow-hidden">
                        <img src={img8} alt="True fitness" className="w-full h-auto object-cover shadow-lg" />
                        <div className="p-8 text-left">
                            <p className="text-lg font-bold text-blue">Максимальное удобство и функциональность</p>
                            <p className="mt-4">
                                Компания TRUE продумывает все <br />
                                технические нюансы и делает тренажеры <br />
                                максимально удобными и функциональными
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Блок с img9 + эксклюзивное предложение (в самом конце) */}
            <div className="relative mt-10">
                <img
                    src={img9}
                    alt="Fitness"
                    className="w-full h-[700px] object-cover"
                />

                {/* Затемнения */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Эксклюзивное предложение */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/20 w-[92%] h-[86%] flex flex-col items-center justify-center">

                        <p className="text-[#FFF500] text-xs font-bold mb-2">
                            TRUE FITNESS
                        </p>

                        <h1 className="text-white text-[58px] font-bold leading-none">
                            Получите
                        </h1>

                        <h1 className="text-[#00B7FF] text-[58px] font-bold leading-none">
                            ЭКСКЛЮЗИВНОЕ
                        </h1>

                        <h1 className="text-[#00B7FF] text-[58px] font-bold leading-none">
                            ПРЕДЛОЖЕНИЕ
                        </h1>

                        <h1 className="text-white text-[58px] font-bold leading-none">
                            НА
                        </h1>

                        <h1 className="text-white text-[58px] font-bold leading-none">
                            ТРЕНАЖЕРЫ
                            <span className="text-[#00B7FF]"> TRUE FITNESS</span>
                        </h1>

                        <p className="text-[#FFF500] text-sm font-semibold mt-4">
                            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
                        </p>

                        <div className="flex items-center gap-4 mt-12 w-[90%] max-w-[1200px]">
                            <input
                                type="text"
                                placeholder="ИМЯ"
                                className="bg-white h-[55px] w-full px-4 font-semibold outline-none"
                            />

                            <input
                                type="text"
                                placeholder="+998 (99)-999-99-99"
                                className="bg-white h-[55px] w-full px-4 font-semibold outline-none"
                            />

                            <input
                                type="email"
                                placeholder="E-MAIL"
                                className="bg-white h-[55px] w-full px-4 font-semibold outline-none"
                            />

                            <button className="bg-[#00B7FF] text-white font-bold h-[55px] px-12 hover:bg-sky-600 transition">
                                ОТПРАВИТЬ
                            </button>
                        </div>

                        <p className="text-white text-[12px] text-center mt-6 max-w-[800px] font-semibold">
                            НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ
                            ДАННЫХ И СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sherzod