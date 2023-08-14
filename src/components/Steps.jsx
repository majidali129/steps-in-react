import { useState } from "react";
import "../index.css";
import Message from "./Message";
import Number from "./Number";
import Button from "../ui/Button";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((st) => st - 1);
  }

  function handleNext() {
    if (step < 3) setStep((st) => st + 1);
  }

  function hadleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h3>
        <span className="close" onClick={hadleOpen}>
          X
        </span>
      </h3>

      {isOpen && (
        <main className="steps">
          <Number step={step} />
          <Message step={step} />

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </main>
      )}
    </>
  );
};

export default Steps;
