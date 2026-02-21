import { useEffect, useState } from "react";

const useViewPort = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewPort, setViewPort] = useState(() => {
    if (windowWidth <= 640) return "small";
    else if (windowWidth > 640 && windowWidth <= 1024) return "medium";
    else return "large";
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 640) setViewPort("small");
      else if (windowWidth > 640 && windowWidth <= 1024) setViewPort("medium");
      else setViewPort("large");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewPort;
};

export default useViewPort;