import "../index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Message = ({ step }) => {
  //   console.log(step);
  return (
    <div className="message">
      Step {step} <p>{messages[step - 1]}</p>
    </div>
  );
};

export default Message;
