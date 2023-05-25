import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const EditProfile = () => {
  return (
    <main className="max-w-[720px] mx-auto pb-6">
      <Header icon={faChevronUp} heading="impostazioni" />
      <div className="w-full max-w-[420px] mx-auto">
        <div className="w-44 h-44 mx-auto mt-12 rounded-full bg-man-profile-picture bg-cover flex justify-center items-center">
          <FontAwesomeIcon icon={faCamera} style={{color: "#E2E2E2",}} className="text-4xl" />
        </div>
        <form className="w-[90%] mx-auto flex flex-col gap-4 mt-8">
          <label htmlFor="name" className="text-lg font-bold">
            Name
          </label>
          <FormInput type="text" name="name" />
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <FormInput type="" name="email" />
          <label htmlFor="bio" className="text-lg font-bold">
            Bio
          </label>
          <textarea className="bg-gray-300 rounded-lg p-2" name="bio" rows="5"></textarea>
          <Button text="Salva" />
          <Button text="Elimina account" bgColor="bg-red-500 hover:bg-red-600" />
        </form>
      </div>
    </main>
  );
};

export default EditProfile;
