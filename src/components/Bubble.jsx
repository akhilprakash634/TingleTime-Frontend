import { motion } from 'framer-motion';
import styles from './Bubble.module.css';
import pop1 from '../assets/pop1.mp3';
import pop2 from '../assets/pop2.mp3';
import pop3 from '../assets/pop3.mp3';
import pop4 from '../assets/pop4.mp3';
import pop5 from '../assets/pop5.mp3';
import pop6 from '../assets/pop6.mp3';

const sounds = [pop1, pop2, pop3, pop4, pop5, pop6];

function Bubble({ popped, onPop }) {
  let handled = false;

  const handlePop = (e) => {
    if (handled) return;
    handled = true;

    if (!popped) {
      const sound = new Audio(
        sounds[Math.floor(Math.random() * sounds.length)]
      );
      sound.currentTime = 0;
      sound.play();
      onPop();
    }

    setTimeout(() => {
      handled = false;
    }, 100);
  };

  return (
    <motion.div
      className={`${styles.bubble} ${popped ? styles.popped : ''}`}
      onClick={handlePop}
      onTouchStart={handlePop}
      animate={{ scale: popped ? 0.8 : 1 }}
      transition={{ duration: 0.2 }}
    ></motion.div>
  );
}

export default Bubble;
