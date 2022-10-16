import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

import { TourButton } from "./styles";

export const Button = (props: {
  color?: string;
  link: string;
  text: string;
}) => {
  const { color, link, text } = props;

  return (
    <Link href={link}>
      <TourButton color={color}>
        {text} <IoMdArrowRoundForward />
      </TourButton>
    </Link>
  );
};
