import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BubbleWrapGame from './components/BubbleWrapGame';
import AdminPage from './components/AdminDashboard'; // Assuming you have an AdminPage component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bubblewrap" element={<BubbleWrapGame />} />
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
  );
}

export default App;
