import "./styles.css";
import { useState } from "react";

export const GenerateconditionalSatate = () => {
  const [title] = useState(() => {
    console.log(document?.body);
    return document.body.innerText || "dummy title";
  });
  console.log(title, " title");
  return <p className="title">{title}</p>;
};
