import "./_ErrorPopup.scss";

export default function ErrorPopup({ message }) {
  return (
    <div className="error">
      <span>{message}</span>
    </div>
  );
}
