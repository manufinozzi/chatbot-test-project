import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  return (
    <main className="w-[90%] max-w-[720px] mx-auto">
      <Logo />
      <p className="text-center text-2xl">Login</p>
      <section className="mt-20">
        <form className="max-w-[420px] mx-auto flex flex-col gap-6">
          <FormInput type="email" placeholder="email" />
          <FormInput type="password" placeholder="password" />
          <Link to="/recover-password" className="text-end mb-4">
            <span className="hover:text-gray-600">Password dimenticata?</span>
          </Link>
          <Button type="submit" text="Login" />
        </form>
      </section>
      <section className="mt-12">
        <p className="text-center text-lg text-gray-500">
          Non hai ancora un account?
        </p>
        <Link
          to="/registration"
          className="block text-center text-lg uppercase font-semibold text-gray-700 hover:text-gray-600"
        >
          Registrati
        </Link>
      </section>
    </main>
  );
};

export default Login;
