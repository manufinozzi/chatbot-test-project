import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import RecoverPassword from './pages/RecoverPassword';
import NotFound from './pages/NotFound';
import EditProfile from './pages/EditProfile';
import Conversation from './pages/Conversation';
import Chat from './pages/Chat';
import Status from './pages/Status';
import Profile from './pages/Profile';
import ConversationSearch from './pages/ConversationSearch';
import ConversationDelete from './pages/ConversationDelete';
import ConversationDropdown from './pages/ConversationDropdown';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/registration' exact element={<Registration />} />
        <Route path='/recover-password' element={<RecoverPassword />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/conversation' exact element={<Conversation />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/status' element={<Status />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/conversation-search' exact element={<ConversationSearch />} />
        <Route path='/conversation-delete' exact element={<ConversationDelete />} />
        <Route path='/conversation-dropdown' exact element={<ConversationDropdown />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
