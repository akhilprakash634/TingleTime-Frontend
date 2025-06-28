import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import styles from './AdminDashboard.module.css';

function DialogueList() {
  const [dialogues, setDialogues] = useState([]);

  const fetchDialogues = async () => {
    const querySnapshot = await getDocs(collection(db, "dialogues"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDialogues(items);
  };

  useEffect(() => {
    fetchDialogues();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this dialogue?")) {
      await deleteDoc(doc(db, "dialogues", id));
      fetchDialogues();
    }
  };

  return (
    <div>
      <h2>All Dialogues</h2>
      {dialogues.length === 0 && <p>No dialogues found.</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Character</th>
            <th>Audio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dialogues.map((item) => (
            <tr key={item.id}>
              <td>{item.movie}</td>
              <td>{item.character}</td>
              <td>
                <audio controls src={item.audioUrl}></audio>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DialogueList;
