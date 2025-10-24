import React, { useEffect, useState } from "react";
import Section1 from "../Experience/Section1";
import Scrollinitiation from "../Experience/Scrollinitiation"

const UniverseScroll = () => {
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const tl = setTimeout(() => {
      setIsFirst(false);
    }, 3000);

    return () => {
      clearTimeout(tl);
    };
  }, []);
  return isFirst ? <Section1 /> : <Scrollinitiation />;
};

export default UniverseScroll;
