import Header from "../components/Header";
import Main from "../components/Main";
import Fundos from "../components/Fundos";
import { data } from "../data";
export default function App() {
  console.log("Teste no console do navegador");
  const allfundos = data[0];
  return (
    <>
      <Header>React Investiments</Header>
      <Main>
        <div>
          <h2 className="text-center">Fundos de Investimentos</h2>
        </div>
        <Fundos>{allfundos}</Fundos>
      </Main>
    </>
  );
}
