import React from "react";
// import '../../styles/common.scss';
import styles from '../../styles/Footer.module.css';

function Footer(props) {
  return (
    <div className={props.cartModal ? styles.cartFooter : ""} >
      <p>{props.text}</p>
    </div>
  );
}

export default Footer;