import React from "react";
import "./tag.scss";
interface ITagProps {
  children: React.ReactNode;
}
const Tag = (props: ITagProps) => {
  return <div className="tag">{props.children}</div>;
};

export default Tag;
