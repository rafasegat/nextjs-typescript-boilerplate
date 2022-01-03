import React from "react";
import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

// Layout
import Container from "components/Layout/Container";

type Props = {
  hasContainer: boolean;
  hasTopSpacing: boolean;
  children: React.ReactElement;
};

export default function defaultLayout({
  hasContainer = true,
  hasTopSpacing = true,
  children,
}: Partial<Props>) {
  return (
    <>
      <Head />
      <Header />
      <main
        className={`main-default-layout ${
          hasTopSpacing ? "has-top-spacing" : ""
        }`}
      >
        {hasContainer ? (
          <Container className="size-930">{children}</Container>
        ) : (
          children
        )}
      </main>
      <Footer />
    </>
  );
}
