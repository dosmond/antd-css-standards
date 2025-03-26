import { Card } from "antd";
import "./PlainFeatureCard.css";

interface PlainFeatureCardProps {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}

export const PlainFeatureCard = ({
  title,
  children,
  highlight,
}: PlainFeatureCardProps) => {
  return (
    <Card className="feature-card">
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        {children}
        {highlight && <div className="feature-card-highlight">{highlight}</div>}
      </div>
    </Card>
  );
};
