import "./Line.css";
import { ReactNode } from "react";

const Line = ({ children }: {children: ReactNode}) => {
  return (
    <div className="line-title">
      <div className="line" />
      {children}
    </div>
  );
};

export default Line;
