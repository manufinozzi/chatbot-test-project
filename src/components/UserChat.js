import UserMiniature from "./UserMiniature";

const UserChat = (props) => {
  return (
    <div className={`flex justify-between items-center ${props.styles}`}>
      <div className="flex gap-3">
        <UserMiniature userImage={props.userImage} />
        <div>
          <h1 className="font-semibold">{props.username}</h1>
          <p className="text-gray-700">{props.message}</p>
        </div>
      </div>
      <div>
        <p className="text-sm">{props.date}</p>
      </div>
    </div>
  );
}

export default UserChat;