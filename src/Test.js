import React, { useEffect, useState } from "react";

const Test = () => {
  const [theme, setTheme] = useState("white-theme");
  console.log(theme);
  const toggleTheme = () => {
    if (theme === "white-theme") {
      setTheme("black-theme");
    } else if (theme === "black-theme") {
      setTheme("white-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <h2>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available
      </h2>
      <button className="btn btn-primary" onClick={toggleTheme}></button>
    </div>
  );
};

export default Test;
