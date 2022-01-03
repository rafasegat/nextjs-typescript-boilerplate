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
      <ul className="social-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/merve-yarim-137273177/"
            target="_blank"
          >
            <BaseIcon icon="LinkedIn" width="18.47" height="17.64" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/merveyarm/" target="_blank">
            <BaseIcon icon="Instagram" width="21.807" height="21.207" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/merveyarm" target="_blank">
            <BaseIcon icon="Behance" width="25.937" height="16.523" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/Merve-Yarim" target="_blank">
            <BaseIcon icon="Dribbble" width="21.211" height="21.207" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
