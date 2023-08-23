import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ReactComponent as DesktopIllustration } from "../assets/images/desktopIllustration.svg";
import { ReactComponent as IconList } from "../assets/images/icon-list.svg";
import styles from "../App.module.css";

function Form() {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    if (email) {
      setIsValid(false);
    }
    e.preventDefault();
    navigate("/Success", { state: email });
  };

  const emailChange = (event) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setIsValid(isValid);
    if (isValid) {
      setEmail(event.target.value);
    }
  };

  return (
    <div className={styles.formbody}>
      <div className={styles.formText}>
        <h3 className={styles.headerText}>Stay updated!</h3>
        <p className={styles.subHeaderText}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={styles.iconLists}>
          {" "}
          <li>
            <IconList className={styles.listIcon} />
            Product discovery and building what matters{" "}
          </li>
          <li>
            {" "}
            <IconList className={styles.listIcon} /> Measuring to ensure updates
            are a success
          </li>{" "}
          <li>
            {" "}
            <IconList className={styles.listIcon} />
            And much more!
          </li>
        </ul>{" "}
        <form onSubmit={onSubmit}>
          <label for="input" className={styles.emailText}>
            Email address:{" "}
            {!isValid ? (
              <span className={styles.emailError}>
                Please, enter valid Email{" "}
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            placeholder="email@company.com"
            type="email"
            id="email"
            name="email"
            // value={email}
            onChange={emailChange}
            className={!isValid ? styles.emailErrorInput : styles.emailInput}
          />
          <button className={styles.button} type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div>
        <DesktopIllustration className={styles.desktopSvg} />
      </div>
    </div>
  );
}

export default Form;
