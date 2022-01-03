import React, { FC } from "react";
import Button from "components/Button/Button";
import styles from "./Portfolio.module.scss";
// import Slider from "react-slick";

// const settings = {
//   dots: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 10,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 765,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       },
//     },
//   ],
// };

type Props = {
  listItems: string[];
  setPortfolioSelected: (item: string) => void;
};

const PortfolioMenu: FC<Props> = ({
  listItems,
  setPortfolioSelected,
}: Props) => {
  return <div className={styles.component}>vfdvdfvdf</div>;
};

export default PortfolioMenu;
