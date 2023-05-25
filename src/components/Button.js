const Button = (props) => {
  return (
    <button type={props.type} className={`block bg-blue-500 rounded-lg text-white font-semibold text-xl py-1.5 hover:bg-blue-600 ${props.bgColor}`}>{props.text}</button>
  );
}
 
export default Button;