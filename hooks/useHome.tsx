import { useEffect, useState } from "react";
import { FaReact, FaUserSecret } from "react-icons/fa";

import { What, Who } from "../components/HomePage/styles";
import { useStrings } from "./useStrings";
import { useImageLoad } from "./useImageLoad";

export const useHome = (url: string) => {
  // Constants
  const intro = [
    {
      text: "Hello, welcome to my portfolio, I'm Amaury Vásquez! ",
      element: Who,
      time: 2,
      icon: <FaUserSecret />,
    },
    {
      text: "React frontend developer ",
      element: What,
      time: 2,
      icon: <FaReact />,
    },
  ];

  // State
  const [limit, setLimit] = useState(0);
  const [showImage, setImage] = useState(false);
  const [showButton, setButton] = useState(false);
  const { img, loaded } = useImageLoad(url);
  const { chString } = useStrings();

  // Functions
  const mapMessages = () =>
    intro.slice(0, limit).map((item, i) => (
      <item.element
        len={chString(item.text)}
        key={`typewritermessage${i + item.text}`}
        time={item.time}
      >
        {item.text}
        {item.icon}
      </item.element>
    ));

  // Effects
  useEffect(() => {
    const { length } = intro;
    if (limit < length) {
      const time = limit === 0 ? 0 : intro[limit].time;
      setTimeout(() => {
        setLimit((limit) => limit + 1);
      }, time * 8000);
    } else if (!showImage && limit === length) {
      setTimeout(() => {
        setImage(true);
        setTimeout(() => {
          setButton(true);
        }, 1000);
      }, intro[length - 1].time * 1000);
    }
  }, [limit, showImage, setLimit, setImage, setButton]);

  return { loaded, img, mapMessages, showImage, showButton };
};
