import "./_Header.scss";

import Form from "../Form/Form";

export default function Header({ setCity }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__title">
          <h1>
            Weather<span>.</span>
          </h1>
          <p>Real-time forecast dashboard</p>
        </div>
        <Form className="header__form" setCity={setCity} />
      </div>
    </header>
  );
}
