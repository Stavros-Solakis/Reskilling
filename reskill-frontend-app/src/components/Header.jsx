import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='my-[67px] w-full flex flex-row flex-wrap items-center justify-between text-center'>
        <Link to="/" className="font-inter text-[20px] font-medium leading-[30px] text-left ">Site Name</Link>
        <nav className='flex flex-row'>
          <ul className='flex items-center font-inter text-[20px] font-medium leading-[30px] text-left'>
            <li className='mr-12'><Link to="/">Page 1</Link></li>
            <li className='mr-12'><Link to="/">Page 2</Link></li>
            <li className='mr-12'><Link to="/">Page 3</Link></li>
          </ul>
          <button className="bg-black text-white px-6 py-[14px] rounded-lg">Button</button>
        </nav>
    </header>
  );
};

export default Header;