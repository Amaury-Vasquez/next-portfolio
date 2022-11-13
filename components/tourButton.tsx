import Link from 'next/link';
import { IoMdArrowRoundForward } from 'react-icons/io';

import styles from 'styles/button.module.scss';

export const TourButton = (props: { link: string; text: string }) => {
  const { link, text } = props;

  return (
    <Link href={link}>
      <a className={styles.tourButton}>
        {text} <IoMdArrowRoundForward />
      </a>
    </Link>
  );
};
