import { useEffect, useRef, useState } from "react"

const SurveyModal = () => {

  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const [formData, setFormData] = useState({
    politicalLeaning: "",
    moonLanding: "",
    mediaTrust: "",
    climateChange: false,
    newWorldOrder: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(formData);
    modalRef.current?.close();
  }

  return (
    <dialog ref={modalRef} className='fixed p-4 text-center bg-red-300 backdrop:bg-black/50 backdrop-blur-sm rounded-lg'>
    <section className='container flex flex-col p-4 bg-white gap-4'>
      <h2 className="font-bold text-center">Who do you want to talk to?</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="mb-4">
        <label className="font-semibold">What is your political leaning?</label>
        <div className="flex flex-col mt-2 space-y-2">
          <label>
            <input type="radio" name="politicalLeaning" value="left" onChange={handleChange} />
            <span className="ml-2">Liberal / Left</span>
          </label>
          <label>
            <input type="radio" name="politicalLeaning" value="right" onChange={handleChange} />
            <span className="ml-2">Conservative / Right</span>
          </label>
          <label>
            <input type="radio" name="politicalLeaning" value="centrist" onChange={handleChange} />
            <span className="ml-2">Centrist</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-semibold">Do you believe the moon landing was real?</label>
        <div className="flex flex-col mt-2 space-y-2">
          <label>
            <input type="radio" name="moonLanding" value="real" onChange={handleChange} />
            <span className="ml-2">Yes, it happened</span>
          </label>
          <label>
            <input type="radio" name="moonLanding" value="fake" onChange={handleChange} />
            <span className="ml-2">No, it was faked</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-semibold">How much do you trust mainstream media?</label>
        <div className="flex flex-col mt-2 space-y-2">
          <label>
            <input type="radio" name="mediaTrust" value="high" onChange={handleChange} />
            <span className="ml-2">I trust it completely</span>
          </label>
          <label>
            <input type="radio" name="mediaTrust" value="low" onChange={handleChange} />
            <span className="ml-2">I think it’s biased/manipulative</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-semibold">Do you believe human activity causes climate change?</label>
        <div className="mt-2">
          <input type="checkbox" name="climateChange" onChange={handleChange} />
          <span className="ml-2">Yes, it is primarily caused by human activity</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-semibold">Do you believe in a "New World Order" controlling global events?</label>
        <div className="mt-2">
          <input type="checkbox" name="newWorldOrder" onChange={handleChange} />
          <span className="ml-2">Yes, a hidden elite controls world affairs</span>
        </div>
      </div>
      <button type="submit">Start chatting</button>
      </form>
    </section>  
  </dialog>
  )
}

export default SurveyModal;