import MyImage from "../assets/react.svg";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <img src={MyImage} width="auto" height="auto" />
    </div>
  );
}
