import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PresencaChart = () => {
  // Dados do gráfico de presença
  const data = {
    labels: ['Falta', 'Presença'],
    datasets: [
      {
        label: 'Presença',
        data: [6.3, 93.7], // Percentuais de falta e presença
        backgroundColor: ['#90ee90', '#333'], // Verde claro e preto
        borderWidth: 0, // Sem bordas ao redor das fatias
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Para ajustar ao container
    plugins: {
      legend: {
        display: false, // Remove a legenda
      },
      tooltip: {
        enabled: false, // Desativa o tooltip ao passar o mouse
      },
    },
    cutout: '55%', // Cria o efeito "donut"
  };

  return (
    <div style={styles.divGrafico2}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

// Estilos da div .grafico2
const styles = {
  divGrafico2: {

    marginTop: '5%',
    padding: '2%',
    height: '70%',
  },
};

export default PresencaChart;
