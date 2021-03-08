import React from "react";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";
import { theme } from "../../styles/theme";

function MenuContainer({ location }) {
  const [isOpened, setIsOpened] = React.useState(false);
  const [links, setLinks] = React.useState([
    {
      text: "what is it",
      class: "landing",
      path: "/",
      isSelected: true,
    },
    {
      text: "perks",
      class: "perks",
      path: "#perks",
      isSelected: false,
    },
    {
      text: "pricing",
      class: "pricing",
      path: "/pricing",
      isSelected: false,
    },
  ]);
  const [specialColor, setSpecialColor] = React.useState("white");

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  React.useEffect(() => {
    const checkOffset = () => {
      const offset = window.pageYOffset;
      const pathName = location.pathname;

      // For setting select state in landing page
      if (pathName === "/") {
        // A. Use the offset to determine if we are at the "perks" section
        if (offset >= window.innerHeight && offset < window.innerHeight * 2) {
          setLinks((prev) => {
            const newMenuState = prev.map((link) => {
              if (link.class === "perks") {
                link.isSelected = true;
              } else if (link.class === "landing") {
                link.isSelected = false;
              }
              return link;
            });
            return newMenuState;
          });
        } else {
          setLinks((prev) => {
            const newMenuState = prev.map((link) => {
              if (link.class === "perks") {
                link.isSelected = false;
              } else if (link.class === "landing") {
                link.isSelected = true;
              }
              return link;
            });
            return newMenuState;
          });
        }
        // B. Use the offset to determine the special color based on which section we are.
        if (offset < window.innerHeight) {
          setSpecialColor("white");
        } else if (
          offset >= window.innerHeight &&
          offset < window.innerHeight * 2
        ) {
          setSpecialColor(theme.red);
        } else if (
          offset >= window.innerHeight * 2 &&
          offset < window.innerHeight * 3
        ) {
          setSpecialColor(theme.yellow);
        } else if (
          offset >= window.innerHeight * 3 &&
          offset < window.innerHeight * 4
        ) {
          setSpecialColor("white");
        } else if (
          offset >= window.innerHeight * 4 &&
          offset < window.innerHeight * 5
        ) {
          setSpecialColor(theme.blue);
        }
      }
    };
    window.addEventListener("scroll", checkOffset);
    return () => window.removeEventListener("scroll", checkOffset);
  }, []);

  React.useEffect(() => {
    console.log(isOpened);
  }, [isOpened]);
  return (
    <Menu
      isOpened={isOpened}
      handleOpen={handleOpen}
      links={links}
      specialColor={specialColor}
    />
  );
}

export default withRouter(MenuContainer);
