import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserChat from "../components/UserChat";

const Conversation = () => {
  return (
    <main className="max-w-[720px] mx-auto">
      <Header icon={faEllipsis} heading="chat" />
      <div className="w-[90%] max-w-[420px] mx-auto">
        <p className="bg-green-400 text-white my-5 p-2 rounded-lg">Controlla la tua posta per completare la registrazione ed iniziare ad utilizzare chatbot! :)</p>
        <SearchBar />
      </div>
      <section className="w-[90%] max-w-[420px] mx-auto my-10 flex flex-col gap-6">
        <Link to="/chat">
          <UserChat 
            userImage="bg-man-profile-picture" 
            username="Alessandro Rossi" 
            message="Ciao, come stai?" 
            date="09:13 AM" />
        </Link>
        <UserChat 
          userImage="bg-woman-profile-picture" 
          username="Giulia Ferrari" 
          message="Ciao Ale, bene e tu?" 
          date="09:19 AM" />
      </section>
    </main>
  );
};

export default Conversation;
