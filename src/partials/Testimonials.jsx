import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function Testimonials() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleReturnToFirstQuestion = () => {
    setCurrentQuestion(1);
  };

  // Datos para la primera pregunta
  const dataFirstQuestion = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        label: 'Responses',
        data: [19, 11],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#e57373'],
        borderWidth: 1,
      },
    ],
  };

  // Datos para la segunda pregunta
  const dataSecondQuestion = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        label: 'Responses',
        data: [9, 21],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#e57373'],
        borderWidth: 1,
      },
    ],
  };

  // Datos para la tercera pregunta
  const dataThirdQuestion = {
    labels: [
      'Atención al cliente y marketing',
      'Atención al Cliente y Soporte Técnico',
      'Ventas',
      'Todas',
      'Atención al cliente y ventas',
      'Soporte técnico',
      'Atención al cliente',
      'Desconozco chatbot',
      'Marketing',
      'Soporte',
      'Ventas y para respuestas al cliente',
    ],
    datasets: [
      {
        label: 'Responses',
        data: [2, 4, 5, 2, 2, 2, 3, 2, 2, 2, 1, 2],
        backgroundColor: [
          '#4caf50', '#f44336', '#ffeb3b', '#2196f3', '#ff9800', '#9c27b0',
          '#00bcd4', '#8bc34a', '#cddc39', '#ff5722', '#795548', '#607d8b',
          '#e91e63', '#03a9f4', '#009688', '#673ab7'
        ],
        hoverBackgroundColor: [
          '#66bb6a', '#e57373', '#fff176', '#64b5f6', '#ffb74d', '#ba68c8',
          '#4dd0e1', '#aed581', '#dce775', '#ff8a65', '#a1887f', '#90a4ae',
          '#f06292', '#4fc3f7', '#26a69a', '#9575cd'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Datos para la cuarta pregunta
  const dataFourthQuestion = {
    labels: ['0$', '2$', '5$', '10$'],
    datasets: [
      {
        label: 'Responses',
        data: [3, 9, 13, 5],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3'],
        hoverBackgroundColor: ['#66bb6a', '#e57373', '#ffb74d', '#64b5f6'],
        borderWidth: 1,
      },
    ],
  };

  const optionsPie = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Responses: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Price',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <section className="relative" id='encuestas'>
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4">
              {currentQuestion === 1 && '¿Tienes experiencia utilizando un chatbot?'}
              {currentQuestion === 2 && '¿Has utilizado un chatbot previamente en su empresa?'}
              {currentQuestion === 3 && '¿En qué áreas de su negocio cree que un chatbot podría ser más útil?'}
              {currentQuestion === 4 && '¿Cuánto estaría dispuesto a pagar por un servicio de chatbot durante 24 horas? En la escala del 1 al 10 seleccione su opción'}
            </h2>
          </div>

          {/* Chart */}
          <div className={`mt-8 max-w-3xl mx-auto chart-container ${currentQuestion === 3 ? 'mb-32' : ''}`}>
            {currentQuestion === 1 && <Pie data={dataFirstQuestion} options={optionsPie} />}
            {currentQuestion === 2 && <Pie data={dataSecondQuestion} options={optionsPie} />}
            {currentQuestion === 3 && <Pie data={dataThirdQuestion} options={optionsPie} />}
            {currentQuestion === 4 && <Bar data={dataFourthQuestion} options={optionsBar} />}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 text-center">
            {currentQuestion === 4 && (
              <>
                <button 
                  className="bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-700 mr-4"
                  onClick={handlePreviousQuestion}
                >
                  Pregunta Anterior
                </button>
                <button 
                  className="bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-700"
                  onClick={handleReturnToFirstQuestion}
                >
                  Regresar al Inicio
                </button>
              </>
            )}
            {currentQuestion < 4 && (
              <>
                {currentQuestion > 1 && (
                  <button 
                    className="bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-700 mr-4"
                    onClick={handlePreviousQuestion}
                  >
                    Pregunta Anterior
                  </button>
                )}
                {currentQuestion < 4 && (
                  <button 
                    className="bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-700"
                    onClick={handleNextQuestion}
                  >
                    Siguiente Pregunta
                  </button>
                )}
              </>
            )}
          </div>

        </div>
      </div>
      
      {/* CSS Styles */}
      <style jsx>{`
        .chart-container {
          width: 50%; /* Adjust width as needed */
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
