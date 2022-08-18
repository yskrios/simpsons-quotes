import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Section: FC<Props> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
