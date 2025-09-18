import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MetodologiaPage from './pages/metodologiaPage.jsx';
import NossosMateriaisPage from './pages/nossosMateriaisPage.jsx'; // Nome corrigido

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/metodologia" element={<MetodologiaPage />} />
        <Route path="/materiais" element={<NossosMateriaisPage />} /> {/* Nome corrigido */}
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

function NotFoundPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>
    </div>
  );
}

export default App;