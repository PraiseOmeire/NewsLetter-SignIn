import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as IconSuccess } from "../assets/images/iconSuccess.svg";
import styles from "./Success.module.css";

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate(-1);
  };

  return (
    <div className={styles.successForm}>
      <div className={styles.contentText}>
        <IconSuccess />

        <p className={styles.successText}> Thanks for subscribing </p>
        <p className={styles.mail}>
          a confirmation mail has been sent to <b>{location.state} </b> Please
          open it and click the button inside to confirm your subscription.
        </p>

        <button className={styles.dismissButton} onClick={handleDismiss}>
          Cool
        </button>
      </div>
    </div>
  );
}
