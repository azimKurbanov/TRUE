import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Flag from '../assets/flag.png'

const Header = () => {
  return (
    <div className='bg-white'>
      <header className='h-[200px] mt-[0px] bg-white'>
        <div className='flex justify-center items-center mb-[30px]'>
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <div className='flex flex-col justify-center items-start ml-[100px]'>
            <div className='flex justify-center items-center gap-[100px] mb-[30px]'>
              <div>
                <img src={Flag} alt="Flag" />
              </div>
              <div>
                <p className='text-[#000000] text-[12px]'>+998 (90)-606-66-66</p>
              </div>
            </div>
            <NavLink to="/open-club">
              <button className='bg-[#01AEE7] w-[238px] h-[36px] text-[#FFFFFF] text-[15px] font-[700] cursor-pointer'>ОСТАВИТЬ ЗАЯВКУ</button>
            </NavLink>
          </div>
        </div>
        <hr />
        <nav className='flex justify-center items-center mt-[15px]'>
          <ul className='flex justify-center items-center gap-[100px] text-[15px] text-[#000000] font-[700]'>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'text-[#01AEE7]' : ''}>
                ГЛАВНАЯ
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#01AEE7]' : ''}>
                О БРЕНДЕ
              </NavLink>
            </li>
            <li>
              <NavLink to="/advantages" className={({ isActive }) => isActive ? 'text-[#01AEE7]' : ''}>
                ПРЕИМУЩЕСТВА
              </NavLink>
            </li>
            <li>
              <NavLink to="/open-club" className={({ isActive }) => isActive ? 'text-[#01AEE7]' : ''}>
                ОТКРЫТЬ КЛУБ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? 'text-[#01AEE7]' : ''}>
                КОНТАКТЫ
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
