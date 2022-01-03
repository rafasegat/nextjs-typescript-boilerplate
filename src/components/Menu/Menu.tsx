import React, { FC } from "react";
import Link from "next/link";
import BaseIcon from "../Icons/BaseIcon";
import Button from "components/Button/Button";

const Menu: FC = () => {
  return (
    <div className="menu flex item-center justify-end">
      <div className="action-menu flex justify-end md:hidden">
        <Button
          customClass="btn-open-menu"
          onClick={() => {
            document.body.classList.add("menu-is-open");
          }}
        >
          <BaseIcon icon="MenuBar" width="30" height="20" />
        </Button>
        <Button
          customClass="btn-close-menu"
          onClick={() => {
            document.body.classList.remove("menu-is-open");
          }}
        >
          <BaseIcon icon="MenuBar" />
        </Button>
      </div>
      <ul className="main-menu pr-5 flex">
        <li className="pl-10 hover:text-tacao">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="pl-10 hover:text-tacao">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className="pl-10 hover:text-tacao">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
