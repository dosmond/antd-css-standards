import { Card } from "antd";
import "./ConflictingCard2.css";

interface ConflictingCard2Props {
  title: string;
  children: React.ReactNode;
  highlight?: string;
}

export const ConflictingCard2 = ({
  title,
  children,
  highlight,
}: ConflictingCard2Props) => {
  return (
    <Card className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {children}
        {highlight && <div className="card-highlight">{highlight}</div>}
      </div>
    </Card>
  );
};
