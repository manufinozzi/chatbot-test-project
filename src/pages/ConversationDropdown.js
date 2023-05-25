import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserChat from "../components/UserChat";
import { useState } from "react";

const ConversationDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="max-w-[720px] h-screen mx-auto relative">
      {menuOpen && (
        <div className="absolute bg-gray-500 w-full h-screen bg-opacity-80" onClick={() => setMenuOpen(false)}></div>
      )}
      <Header icon={faEllipsis} heading="chat" dropdown={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <nav className="absolute top-12 left-4 w-48">
          <li className="list-none bg-blue-600 text-white px-3 py-2 hover:bg-blue-400">Modifica profilo</li>
          <li className="list-none bg-blue-600 text-white px-3 py-2 hover:bg-blue-400">Logout</li>
        </nav>
      )}
      <div className="w-[90%] max-w-[420px] mx-auto mt-6">
        <SearchBar />
      </div>
      <section className="w-[90%] max-w-[420px] mx-auto my-6 flex flex-col gap-6">
        <UserChat 
          userImage="bg-man-profile-picture" 
          username="Alessandro Rossi" 
          message="Ciao, come stai?" 
          date="09:13 AM" />
        <UserChat 
          userImage="bg-woman-profile-picture" 
          username="Giulia Ferrari" 
          message="Ciao Ale, bene e tu?" 
          date="09:19 AM" />
      </section>
    </main>
  );
}
 
export default ConversationDropdown;