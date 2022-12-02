import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import { Line } from 'react-chartjs-2';
import { useRef } from 'react';

export default function Home() {
  const lineChart = useRef(null);

  function generateYouTubeGrowthData(viewsPerDay, totalDays) {
    var totalViewsArrays = [viewsPerDay];

    for (var i = 1; i < totalDays; i++) {
      var videoCount = i + 1;
      var totalViews = totalViewsArrays[i - 1] + videoCount * viewsPerDay; // 10 + 20
      totalViewsArrays.push(totalViews);
    }

    return totalViewsArrays;
  }

  console.log(generateYouTubeGrowthData(10, 20));

  function renderChart() {
    const chart = lineChart.current;
    console.log('Rendering.....');
    var totalDays = parseInt(document.getElementById('totalDays').value);
    var viewsPerDay = parseInt(document.getElementById('viewsPerDay').value);
    console.log(totalDays, viewsPerDay);

    chart.data = {
      labels: [...Array(totalDays).keys()],
      datasets: [{ data: generateYouTubeGrowthData(viewsPerDay, totalDays) }],
    };

    chart.update();
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'YouTube Growth Over Time With Daily Uploads',
        color: 'white',
        font: {
          size: 18,
        },
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: 'lightblue',
        fill: 'start',
        backgroundColor: 'lightblue',
      },
      point: {
        radius: 10,
        hitRadius: 10,
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          color: 'white',
        },
      },
      y: {
        display: true,
        ticks: {
          color: 'white',
        },
      },
    },
  };

  var defaultData = {
    labels: [...Array(100).keys()],
    datasets: [{ data: generateYouTubeGrowthData(10, 100) }],
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Line
          data={defaultData}
          width={100}
          height={40}
          options={options}
          ref={lineChart}
        />
        <h3>My Daily Uploads will get</h3>
        <input
          id="viewsPerDay"
          type="number"
          defaultValue={10}
          onChange={renderChart}
        />
        <h3>Views Per Day Over</h3>
        <input
          id="totalDays"
          type="number"
          defaultValue={100}
          onChange={renderChart}
        />
        <h3>Days</h3>
      </main>
    </div>
  );
}
