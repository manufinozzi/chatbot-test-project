import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
  return (
    <nav className="grid grid-cols-3 px-4 py-6 bg-gray-300 md:rounded-b-xl">
      <button onClick={props.dropdown} className="justify-self-start">
        <FontAwesomeIcon icon={props.icon} className='text-2xl' />
      </button>
      <p className="text-xl text-center uppercase font-semibold text-gray-700">{props.heading}</p>
    </nav>
  );
}
 
export default Header;