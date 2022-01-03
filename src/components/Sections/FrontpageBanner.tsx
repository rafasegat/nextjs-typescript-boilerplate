import React, { FC } from "react";
import Container from "../Layout/Container";
import Column from "../Layout/Column";
import Row from "../Layout/Row";

const FrontpageBanner: FC = () => {
  return (
    <>
      <div className="frontpage-banner relative">
        <Container>
          <Row alignItemsCenter>
            <Column size="w-1/2">
              <div
                className="merve-image h-screen relative"
                style={{
                  background:
                    "url(../images/merve.png) no-repeat bottom center",
                }}
              />
              <img
                src="../images/merve.png"
                className="absolute bottom-0 md:hidden"
                style={{ left: "0", width: "200px" }}
              />
            </Column>
            <Column size="w-1/2">
              <h1 className="mt-20 ">Hey it's Merve...</h1>
              <div className="hidden md:block">
                <p className="mb-8">
                  UI/UX Designer
                  <br />
                  Graphic Designer
                  <br />
                  Illustrator
                </p>
                <p className="max-w-xs">
                  It’s more than just name. <br />
                  Come over and discover what is gonna happen here.
                </p>
              </div>
            </Column>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FrontpageBanner;
