import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UserMiniature from "../components/UserMiniature";
import FormInput from "../components/FormInput";

const Chat = () => {
  return (
    <main className="max-w-[720px] mx-auto h-screen relative">
      <header className="flex justify-between items-center p-6 bg-gray-300 md:rounded-b-xl">
        <FontAwesomeIcon icon={faChevronLeft} />
        <div className="flex gap-4 items-center">
          <p className="text-xl text-center uppercase font-semibold text-gray-700">Alessandro Rossi</p>
          <UserMiniature userImage="bg-man-profile-picture" />
        </div>
      </header>
      <section className="flex flex-col my-2">
        <div className="w-1/2 ml-auto my-2 px-2">
          <p className="bg-gray-200 p-2 rounded-lg">Ehi Bro!</p>
          <p className="pl-3 text-sm text-gray-700">Mar 09:48 Feb 2023</p>
        </div>
        <div className="w-1/2 my-2 px-2">
          <p className="bg-green-400 p-2 rounded-lg">Ehi Bro! Come stai?</p>
          <p className="pl-3 text-sm text-gray-700">Mar 09:50 Feb 2023</p>
        </div>
      </section>
      <footer className="absolute bottom-3 flex w-[90%] mx-3 gap-2">
        <FormInput type="text" placeholder="Scrivi un messaggio..." messageStyles="w-[85%] bg-gray-200 rounded-xl placeholder:font-normal placeholder:text-left" />
        <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}} />
        </div>
      </footer>
    </main>
  );
}
 
export default Chat;