import { useState } from "react";
import cn from "classnames";
import styles from "./DynamicCard.module.css";

interface DynamicCardProps {
  title: string;
  children: React.ReactNode;
}

export function DynamicCard({ title, children }: DynamicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div
      className={cn(styles.card, {
        [styles.hovered]: isHovered,
        [styles.selected]: isSelected,
        [styles.highlighted]: isHighlighted,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsSelected(!isSelected)}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
      <button
        className={styles.toggleButton}
        onClick={(e) => {
          e.stopPropagation();
          setIsHighlighted(!isHighlighted);
        }}
      >
        {isHighlighted ? "Remove Highlight" : "Add Highlight"}
      </button>
    </div>
  );
}
