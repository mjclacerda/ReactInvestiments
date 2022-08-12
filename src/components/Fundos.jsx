import Fundo from "./Fundo";
export default function fundos({ children: data }) {
  //Função para colocar o relatório de cada fundo dentro de seu objeto
  function relatorio(id) {
    let rel = data.reports.filter((item) => {
      return item.investmentId === id;
    });
    return rel;
  }
  //Fundo com seus respectivos relatórios
  const fundos = data.investments.map((item) => {
    item.relatorio = relatorio(item.id);
    return item;
  });
  return (
    <div>
      {fundos.map((item) => {
        return <Fundo key={item.id}>{item}</Fundo>;
      })}
    </div>
  );
}
