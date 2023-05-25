import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const RecoverPassword = () => {
  return (
    <main className="w-[90%] max-w-[720px] mx-auto">
      <Logo />
      <p className="text-center text-2xl">Recupero Password</p>
      <section className="mt-32">
        <form className="max-w-[420px] mx-auto flex flex-col gap-14">
          <FormInput type="email" placeholder="email" />
          <Button text="Invia" />
        </form>
      </section>
      <section className="mt-8">
        <Link
          to="/"
          className="block text-center text-md uppercase font-semibold text-gray-700 hover:text-gray-600"
        >
          Indietro
        </Link>
      </section>
    </main>
  );
};

export default RecoverPassword;
