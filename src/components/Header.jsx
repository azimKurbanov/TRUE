import Logo from '../assets/logo.png'
import Flag from '../assets/flag.png'

const Muhammad = () => {
  return (
    <div className='bg-white'>
      <header className='h-[200px] mt-[0px] bg-white'>
        <div className='flex justify-center items-center mb-[30px]'>
          <img src={Logo} alt="Logo" />
          <div className='flex flex-col justify-center items-start ml-[100px]'>
            <div className='flex justify-center items-center gap-[100px] mb-[30px]'>
              <div>
                <img src={Flag} alt="Flag" />
              </div>
              <div>
                <p className='text-[#000000] text-[12px]'>+998 (90)-606-66-66</p>
              </div>
            </div>
            <button className='bg-[#01AEE7] w-[238px] h-[36px] text-[#FFFFFF] text-[15px] font-[700] cursor-pointer'>ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
        <hr></hr>
        <nav className='flex justify-center items-center mt-[15px]'>
          <ul className='flex justify-center items-center gap-[100px] text-[15px] text-[#000000] font-[700]'>
              <li><a href="#">О БРЕНДЕ</a></li>
              <li><a href="#">ПРОДУКЦИИ</a></li>
              <li><a href="#">ПРЕИМУЩЕСТВА</a></li>
              <li><a href="#">ОТКРЫТЬ КЛУБ</a></li>
              <li><a href="#">КОНТАКТЫ  </a></li>
          </ul>
        </nav>
      </header> 

    </div>
  )
}

export default Muhammad
