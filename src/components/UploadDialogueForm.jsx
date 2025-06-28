import { useState } from "react";
import axios from "axios";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from './AdminDashboard.module.css';

function UploadDialogueForm() {
  const [file, setFile] = useState(null);
  const [movie, setMovie] = useState("");
  const [character, setCharacter] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !movie || !character) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/generate-presigned-url",
        {
          fileName: file.name,
          contentType: file.type || "audio/mpeg",
        }
      );

      const { uploadUrl, fileUrl } = res.data;

      await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type || "audio/mpeg",
        },
        body: file,
      });

      await addDoc(collection(db, "dialogues"), {
        audioUrl: fileUrl,
        movie: movie,
        character: character,
        createdAt: serverTimestamp(),
      });

      setStatus("Upload successful!");
      setMovie("");
      setCharacter("");
      setFile(null);

    } catch (error) {
      console.error(error);
      setStatus("Upload failed.");
    }
  };

  return (
    <div>
      <h2>Upload New Dialogue</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Movie Name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <input
          type="text"
          placeholder="Character Name"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
}

export default UploadDialogueForm;
