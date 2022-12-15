import { HtmlHTMLAttributes } from "react";
import styles from "./style.module.scss";

export const InfiniteLoopSlider = ({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: any;
}) => {
  return (
    <div
      className={styles.loop__slider}
      style={duration}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};
