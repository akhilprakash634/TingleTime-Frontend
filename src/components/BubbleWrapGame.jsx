import { useState } from 'react';
import Bubble from './Bubble';
import styles from './BubbleWrapGame.module.css';

function BubbleWrapGame() {
  const rows = 8;
  const cols = 10;

  const [poppedArray, setPoppedArray] = useState(
    Array(rows * cols).fill(false)
  );

  const handlePop = (index) => {
    const newArray = [...poppedArray];
    newArray[index] = true;
    setPoppedArray(newArray);
  };

  const resetGrid = () => {
    setPoppedArray(Array(rows * cols).fill(false));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Bubble Wrap Popper</h2>
      <button onClick={resetGrid} className={styles.resetButton}>
        Reset
      </button>
      <div className={styles.grid}>
        {poppedArray.map((isPopped, i) => (
          <Bubble
            key={i}
            popped={isPopped}
            onPop={() => handlePop(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default BubbleWrapGame;
