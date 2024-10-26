import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FaltasChart = () => {
  // Dados do gráfico
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Faltas',
        data: [0, 1, 0, 2, 0, 5, 1, 2],
        backgroundColor: '#90ee90', // Cor verde claro das barras
        borderRadius: 5, // Borda arredondada
        barThickness: 40, // Espessura da barra
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Remove a legenda "Faltas"
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove a grid vertical
        },
      },
      y: {
        ticks: {
          beginAtZero: true, // Iniciar do zero no eixo Y
          stepSize: 1, // Incremento de 1 no eixo Y
        },
        grid: {
          display: false, // Remove a grid horizontal
        },
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  );
};

const styles = {
  chartContainer: {
    marginTop: '15%',
    padding: '2%',
    height: '100%', // Altura total da div pai
  },
};

export default FaltasChart;