import MyImage from "../assets/transparent-cv.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <a className={styles.footer}>
      <img src={MyImage} width="30px" height="30px" />
    </a>
  );
}
