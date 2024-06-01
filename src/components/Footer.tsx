import MyImage from "../assets/grayscale-cv-symbol.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={MyImage} width="1100px" height="500px" />
    </div>
  );
}
