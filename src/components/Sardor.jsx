import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"
import c8 from "../assets/c8.jpg"

const Sardor = () => {
  return (
    <div>
  
      <div className="bg-[#01AEE7] py-10">
        <h1 className="text-[#FFF500] text-center text-xl font-bold">
          О НАШЕМ БРЕНДЕ
        </h1>

        <h1 className="text-white mt-4 font-bold text-3xl text-center">
          TRUE - СОВЕРШЕННОЕ <br />
          ФИТНЕС-ОБОРУДОВАНИЕ
        </h1>
      </div>

      <div className="relative">
        <img
          src={c1}
          alt="Fitness"
          className="w-full h-[900px] object-cover"
        />

        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white w-[90%] max-w-[1000px] h-[750px] shadow-lg rounded-lg">
          <p className="text-[#01AEE7] text-[22px] text-center mt-[15px]">Это совершенство обеспечивается высококачественными, <br />
           долговечными материалами и технологиями, которые мы используем <br />
            для производстве наших машин. Но оно также создается и благодаря <br />
             нашей преданности клиентам и их потребностям.</p>
             <p className="text-black text-[22px] text-center mt-[15px]">Наша опытная команда предлагает комплексное обслуживание, <br />
              начиная от планирования объекта до технического обслуживания и <br />
               оснащения ваших залов новейшими технологиями. Являясь вашим <br />
                надежным партнером, мы делаем все возможное, чтобы ваше <br />
                 предприятие продолжало эффективно работать годы и годы.</p>
                 <p className="text-black text-[22px] text-center mt-[35px]">Вы можете рассчитывать на нас в предоставлении одних из лучших <br />
                  услуг в отрасли. Мы ориентированы на оптимизацию срока службы <br />
                   вашего фитнес-оборудования. Мы всегда ищем способы расширить <br />
                    сферу взаимодействия с нашими клиентами, будь то предоставление <br />
                     учебных материалов для ваших сотрудников и инструкторов, или <br />
                      разработка технологических решений, отвечающих потребностям <br />
                       современных пользователей.</p>
                       <p className="text-[#01AEE7] text-[22px] text-center mt-[15px]">Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может <br />
                        помочь вашей компании добиться успеха.</p>
        </div>
      </div>
      <div className="bg-[#01AEE7] py-10">
        <h1 className="text-white text-[32px] font-bold text-center">Наши инновации</h1>

        <img src={c2} alt="Innovation" className="w-[350px] h-[350px] mt-[15px] ml-[50px]" />
        <p className="text-white text-[22px] ml-[50px] font-bold mt-[15px]">Тренажер Лестница TRUE <br />
         Palisade</p>
         <p className="text-yellow-300 ml-[50px]">________________________________</p>
         <img src={c3} alt="Innovation" className="w-[350px] h-[350px] mt-[-455px] ml-[666px]" />
         <p className="text-white text-[22px] ml-[666px] font-bold mt-[10px]">Функциональный тренинг с <br />
          Composite Strength</p>
          <p className="text-yellow-300 ml-[666px] mt-[10px]">________________________________</p>


          <img src={c4} alt="Innovation" className="w-[350px] h-[350px] mt-[-455px] ml-[1300px]" />
         <p className="text-white text-[22px] ml-[1300px] font-bold mt-[10px]">Рамы для стрейтчинга TRUE <br />
          Stretch</p>
          <p className="text-yellow-300 ml-[1300px] mt-[10px]">________________________________</p>
          
          <img src={c5} alt="Innovation" className="w-[350px] h-[350px] mt-[10px] ml-[50px]" />
          <p className="text-white text-[22px] ml-[50px] font-bold mt-[10px]">Латеральный тренажер TRUE <br />
           Traverse</p>
                    <p className="text-yellow-300 ml-[50px] mt-[10px]">________________________________</p>
            
            <img src={c6} alt="Innovation" className="w-[350px] h-[350px] mt-[-455px] ml-[666px]" />
            <p className="text-white text-[22px] ml-[666px] font-bold mt-[10px]">Беговая дорожка TRUE <br />
             Alpine Runner</p>
             <p className="text-yellow-300 ml-[666px] mt-[10px]">________________________________</p>

          <img src={c7} alt="Innovation" className="w-[350px] h-[350px] mt-[-455px] ml-[1300px]" />
          <p className="text-white text-[22px] ml-[1300px] font-bold mt-[10px]">Эллиптический тренажер <br />
           TRUE Spectrum</p>
           <p className="text-yellow-300 ml-[1300px] mt-[10px]">________________________________</p>
      </div>

   <div className="relative w-full">

  <img
    src={c8}
    alt="Fitness"
    className="w-full h-[700px] object-cover"
  />


  <div className="absolute inset-0 bg-black/30"></div>


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
  );
};

export default Sardor;