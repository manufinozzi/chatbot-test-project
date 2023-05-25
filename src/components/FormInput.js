const FormInput = (props) => {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} name={props.name} className={`block bg-gray-300 rounded-lg placeholder:text-center placeholder:text-gray-700 placeholder:font-bold p-2 ${props.messageStyles}`}/>
    </>
  );
}
 
export default FormInput;