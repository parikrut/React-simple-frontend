import React from "react";

function useMenuColor() {
  const [selectedColor, setSelectedColor] = React.useState("#1FE1E9");
  const [menuBackground, setMenuBackground] = React.useState("#1FE1E9");

  React.useEffect(() => {
    const test = () => {
      const offset = window.pageYOffset;
      if (offset >= window.innerHeight) console.log("over");
      console.log(offset);
    };
    window.addEventListener("scroll", test);
    return () => window.removeEventListener("scroll", test);
  }, []);
  return { selectedColor, menuBackground };
}

export default useMenuColor;
