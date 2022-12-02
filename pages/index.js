import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
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

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
    </div>
  );
}
