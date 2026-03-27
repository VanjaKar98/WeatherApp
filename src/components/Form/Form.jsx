import "./_Form.scss";

function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default function Form({ className, setCity }) {
  const debounceSearchHandler = debounce((e) => {
    const value = e.target.value;
    if (value) {
      e.target.value = "";
      setCity(value);
    }
  });

  return (
    <form
      className={`form ${className || ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Search city..."
        onInput={(e) => debounceSearchHandler(e)}
      />
    </form>
  );
}
