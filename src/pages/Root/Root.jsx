import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Main />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
