import { useState } from 'react';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserData from '../Users.json';
import UserChat from '../components/UserChat';

const ConversationSearch = () => {
  const [filteredUser, setFilteredUser] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = UserData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredUser([]);
    } else {
      setFilteredUser(newFilter);
    }
  };

  return (
    <main className="max-w-[720px] mx-auto">
      <Header icon={faEllipsis} heading="chat" />
      <div className="w-[90%] max-w-[420px] mx-auto my-8">
        <SearchBar filteredSearch={handleFilter} />
          {filteredUser.length !== 0 ? (
            <div className='my-6'>
              {filteredUser.map((value, key) => {
                if (value.name === "Alessandro Rossi") {
                  return <UserChat
                    styles="my-6"
                    userImage="bg-man-profile-picture"
                    username="Alessandro Rossi"
                    message="Ciao, come stai?"
                    date="09:13 AM"
                    key={key} />;
                } else if (value.name === "Giulia Ferrari") {
                  return <UserChat
                    styles="my-6"
                    userImage="bg-woman-profile-picture"
                    username="Giulia Ferrari"
                    message="Ciao Ale, bene e tu?"
                    date="09:19 AM"
                    key={key} />
                } else {
                  return (
                    <p className="my-16 text-center text-gray-400">Nessun risultato trovato...</p>
                  )
                }
              })}
            </div>
          ) : (
            <p className="my-16 text-center text-gray-400">Nessun risultato trovato...</p>
          )}
      </div>
    </main>
  );
}
 
export default ConversationSearch;