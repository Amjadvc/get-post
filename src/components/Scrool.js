import React, { useEffect } from "react";

export default function Scroll({
  className,
  handleScroll,
  handleClick,
  showButton,
  children,
}) {
  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <div>
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      </div>
    )
  );
}
