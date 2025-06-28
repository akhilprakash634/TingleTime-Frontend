import styles from './AdminDashboard.module.css';
import UploadDialogueForm from './UploadDialogueForm';
import DialogueList from './DialogueList';

function AdminDashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>Admin Dashboard</h1>

      <div className={styles.section}>
        <UploadDialogueForm />
      </div>

      <div className={styles.section}> 
        <DialogueList />
      </div>
    </div>
  );
}

export default AdminDashboard;
