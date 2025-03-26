import { Card } from "antd";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}

export const FeatureCard = ({
  title,
  children,
  highlight,
}: FeatureCardProps) => {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {children}
        {highlight && <div className={styles.highlight}>{highlight}</div>}
      </div>
    </Card>
  );
};
