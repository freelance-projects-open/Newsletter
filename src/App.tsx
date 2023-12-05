import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <div className="h-screen bg-zinc-50 flex flex-col items-center justify-center gap-2">
        <div className="  bg-zinc-200 p-20 flex flex-col gap-2 items-center justify-center rounded sm:p-10">
          <h1 className="text-3xl font-bold ">Newsletter</h1>
          <p>
            Se inscreva na nossa newsletter para ficar por dentro de todas as
            novidades
          </p>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            className="border border-zing-300 shadow-sm rounded h-10 w-96"
          />
          <Button className="bg-blue-500 rounded font-semibold text-white h-10 p-2 hover:bg-blue-600" />
        </div>
      </div>
    </>
  );
}
