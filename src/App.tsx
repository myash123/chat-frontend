import './input.css';
import { useState } from 'react';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import AppRouter from './routes/router';

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true)
  const handleWelcomeModalClose = () => {
    setIsWelcomeModalOpen(_prevState => false);
  }
  return (
    <div className={`flex w-full h-full p-2 bg-blue-500`}>
      {isWelcomeModalOpen && <WelcomeModal handleWelcomeModalClose={handleWelcomeModalClose} />}
      <AppRouter />
    </div>
  )
}

export default App;
