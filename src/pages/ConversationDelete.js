import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserChat from "../components/UserChat";

const ConversationDelete = () => {
  return (
    <main className="max-w-[720px] mx-auto">
      <Header icon={faEllipsis} heading="chat" />
      <div className="w-[90%] max-w-[420px] mx-auto mt-8">
        <SearchBar />
      </div>
      <section className="w-[90%] max-w-[420px] mx-auto my-10 flex flex-col gap-6">
        <UserChat userImage="bg-man-profile-picture" username="Alessandro Rossi" message="Ciao, come stai?" date="09:13 AM" />
        <div className="relative">
          <UserChat userImage="bg-woman-profile-picture" username="Giulia Ferrari" message="Ciao Ale, bene e tu?" date="09:19 AM" styles="-ml-16" />
          <button className="bg-red-500 w-44 h-16 text-white absolute top-0 right-0 rounded-l-xl">Elimina conversazione</button>
        </div>
      </section>
    </main>
  );
}
 
export default ConversationDelete;