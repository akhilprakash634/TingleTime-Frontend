import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import bubbleImg from '../assets/vite.svg'; // temp placeholder image

function HomePage() {
  return (
    <div className={styles.container}>
      <h1>TingleTime</h1>
      <p>Pop. Squish. Relax.</p>
      <div className={styles.gamesGrid}>
        <div className={styles.gameCard}>
          <img src={bubbleImg} alt="Bubble Wrap" />
          <h3>Bubble Wrap Popper</h3>
          <Link to="/bubblewrap">
            <button>Play Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
