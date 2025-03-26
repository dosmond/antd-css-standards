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
      <div className="content">
        <h3 className="title">{title}</h3>
        {children}
        {highlight && <div className="highlight">{highlight}</div>}
      </div>
    </Card>
  );
};
