import React from "react";
import error404 from "../img/404.png";
import "../style/404ComponentStyles.css";
export default function NotFoundComponent() {
  return (
    <div>
      <img className="error404" alt="Not Found" src={error404} />
    </div>
  );
}
