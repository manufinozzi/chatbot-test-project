import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';

const Profile = () => {
  return (
    <main className="max-w-[720px] mx-auto">
      <Header icon={faEllipsis} heading="profilo" />
      <div className="w-full max-w-[420px] mx-auto">
        <div className="w-44 h-44 mx-auto my-12 rounded-full bg-man-profile-picture bg-cover flex justify-center items-center"></div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xl font-semibold">Alessandro Rossi</p>
          <p className="text-sm">Sviluppatore web</p>
          <p className="mt-6">alerossi@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
 
export default Profile;