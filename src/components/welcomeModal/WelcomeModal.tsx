import { useEffect, useRef } from 'react';

type WelcomeModalProps = {
  handleWelcomeModalClose: () => void;
};

const WelcomeModal = ({
  handleWelcomeModalClose
}: WelcomeModalProps) => {

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={modalRef} className='fixed p-4 text-center bg-red-300 backdrop:bg-black/50 backdrop-blur-sm rounded-lg'>
      <section className='container flex flex-col p-4 bg-white gap-4'>
        <h2 className="font-bold text-center">Email Sign In</h2>
        <form className="flex flex-col gap-4">
          <label className="sr-only">Email</label>
          <input required className="p-2" placeholder="Email"/>
          <label className="sr-only">Password</label>
          <input required className="p-2" placeholder="Password"/>
          <button type="submit" className="bg-green-300 rounded-lg">Sign In</button>
        </form>
        <h2 className="font-bold text-center">Be a Guest</h2>
        <form className="flex flex-col gap-4">
          <label className="sr-only">Your guest name</label>
          <input required className="p-2" placeholder="Your guest name" />
          <button type="submit" className="bg-green-300 rounded-lg">Try it out</button>
        </form>
        <button>Need to create an account?</button>
      </section>  
      <button onClick={handleWelcomeModalClose}>Close me</button>
    </dialog>
  )
}

export default WelcomeModal;