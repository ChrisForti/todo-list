import MyImage from "../assets/transparent-cv.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={MyImage} width="60%" height="50%" />
    </div>
  );
}
