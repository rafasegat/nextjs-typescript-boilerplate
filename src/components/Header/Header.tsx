import React, { FC, useEffect, useRef, useState } from "react";
import Container from "../Layout/Container";
import Row from "../Layout/Row";
import Column from "../Layout/Column";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Header: FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof menuRef?.current?.getBoundingClientRect() === "undefined")
        return;
      const menuFromTop =
        (menuRef?.current?.getBoundingClientRect().top - 20) * -1;
      if (!menuFromTop || typeof menuFromTop === "undefined") return;
      if (menuFromTop > 100) document.body.classList.add("menu-is-fixed");
      else document.body.classList.remove("menu-is-fixed");
    });
  }, []);

  return (
    <header
      ref={menuRef}
      className="container py-5 mx-auto top-header absolute w-full top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="top-header-wrapper">
        <Container>
          <Row alignItemsCenter>
            <Column size="w-1/3 logo">
              <Logo />
            </Column>
            <Column size="w-2/3">
              <Menu />
            </Column>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
