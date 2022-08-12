import { Chart } from "react-google-charts";
import _ from "loadsh";
export default function fundo({ children: fundo = null }) {
  //função para gerar a base de dados do gráfico de performance do fundo
  function performance(id) {
    let rel = fundo.relatorio.filter((item) => {
      return item.investmentId === id;
    });
    const result = _.orderBy(rel, ["month", "year"], ["asc", "desc"]);
    const data = [
      ["mês", "valor"],
      ..._.map(result, (value) => {
        return [value.month, value.value];
      }),
    ];
    return data;
  }
  //função para gerar a base de dados do gráfico de rendimento do fundo
  function rendimento(report) {
    let performance = _.map(report, (item) => {
      return item[1];
    });
    let valor = _.drop(performance);
    let rend = [0];
    for (var i = 1; i < 12; i++) {
      rend.push(((valor[i] - valor[i - 1]) / valor[i - 1]) * 100);
    }
    const rends = [
      ["mês", "rendimento"],
      ..._.map(rend, (value, key) => {
        return [key + 1, value];
      }),
    ];
    return rends;
  }
  //função para gerar a rentabilidade anual do fundo
  function retorno(report) {
    let performance = _.map(report, (item) => {
      return item[1];
    });
    let valor = _.drop(performance);
    let retorno = valor[11] - valor[1];
    return retorno;
  }
  //Configurações dos charts
  const options = {
    chart: {
      title: "Performance do Fundo",
      subtitle: "Valor x Mês em 2020",
    },
  };
  const options2 = {
    chart: {
      title: "Rendimento do Fundo",
      subtitle: "Valor x Mês em 2020",
    },
  };
  if (!fundo) {
    return <div>Sem Fundos</div>;
  }
  return (
    <div fundoid={fundo.id} className="border p-3 border-gray-light m-2">
      {fundo.description}
      <h1 className="text-center">
        Rentabilidade Anual: R${retorno(performance(fundo.id)).toFixed(2)}
      </h1>
      <div className="m-4">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={performance(fundo.id)}
          options={options}
        />
      </div>
      <div className="m-4">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={rendimento(performance(fundo.id))}
          options={options2}
        />
      </div>
    </div>
  );
}
