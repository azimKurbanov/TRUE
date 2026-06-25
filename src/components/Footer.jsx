const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-12 mt-[3635px]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-3 gap-16">
          
          <div>
            <h3 className="font-bold uppercase text-sm mb-5">
              Каталог товаров
            </h3>

            <ul className="space-y-2 text-[11px] uppercase text-white/80">
              <li><a href="#">Кардио тренажеры</a></li>
              <li><a href="#">Composite Strength</a></li>
              <li><a href="#">True Stretch</a></li>
              <li><a href="#">Сайклинг</a></li>
              <li><a href="#">Групповые тренировки</a></li>
              <li><a href="#">Силовые тренажеры</a></li>
              <li><a href="#">Консоли</a></li>
            </ul>

            <p className="mt-5 text-[11px] font-bold">
              © TRUE FITNESS
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase text-sm mb-5">
              Контакты
            </h3>

            <ul className="space-y-2 text-[11px] uppercase text-white/80">
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase text-sm leading-5">
              Подписаться на новости
              <br />
              и акции
            </h3>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
