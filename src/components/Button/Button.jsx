import "./_Button.scss";

export default function Button({ label, isActive, onClick }) {
  return (
    <button
      className={`button ${isActive ? "button--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
