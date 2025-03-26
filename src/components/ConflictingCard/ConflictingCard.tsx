import { Card } from "antd";
import "./ConflictingCard.css";

interface ConflictingCardProps {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}

export const ConflictingCard = ({
  title,
  children,
  highlight,
}: ConflictingCardProps) => {
  return (
    <Card className="card">
      <div className="content">
        <h3 className="title">{title}</h3>
        {children}
        {highlight && <div className="highlight">{highlight}</div>}
      </div>
    </Card>
  );
};
