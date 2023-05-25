import { Link } from "react-router-dom";

const Status = () => {
  return (
    <main className="w-[90%] max-w-[720px] mx-auto">
      <div className="mt-32 flex flex-col justify-center gap-10">
        <div className="w-24 h-24 bg-green-400 mx-auto rounded-full"></div>
        <h1 className="text-2xl text-center font-bold">Registrazione avvenuta con successo!</h1>
        <p className="text-center font-semibold">Controlla la tua casella email per verificare la tua registrazione</p>
        <Link to="/" className="block text-center text-md uppercase font-semibold text-gray-700 hover:text-gray-600">Indietro</Link>
      </div>
    </main>
  );
}
 
export default Status;