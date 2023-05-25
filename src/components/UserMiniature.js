const UserMiniature = (props) => {
  return (
    <div className={`w-14 h-14 mx-auto rounded-full ${props.userImage} bg-cover`}></div>
  );
}
 
export default UserMiniature;