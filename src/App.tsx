import './input.css';
import { useState } from 'react';
import WelcomeModal from './components/welcomeModal/WelcomeModal';
import AppRouter from './routes/router';

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true)
  const handleWelcomeModalClose = () => {
    setIsWelcomeModalOpen(_prevState => false);
  }
  return (
    <div className={`flex justify-center items-center w-screen h-screen bg-blue-500`}>
      {isWelcomeModalOpen && <WelcomeModal handleWelcomeModalClose={handleWelcomeModalClose}></WelcomeModal>}
      <AppRouter />
    </div>
  )
}

export default App;
