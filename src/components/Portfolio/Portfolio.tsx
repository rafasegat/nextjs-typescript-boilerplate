import React, { FC, useState } from "react";
import Column from "components/Layout/Column";
import Row from "components/Layout/Row";
import PortfolioMenu from "components/Portfolio/PortfolioMenu";
import PortfolioItems from "components/Portfolio/PortfolioItems";

const listItems: string[] = [
  "UI/UX Design",
  "Branding",
  "Illustrations",
  "Tattoo",
];

const Portfolio: FC = () => {
  const [portfolioSelected, setPortfolioSelected] =
    useState<string>("UI/UX Design");
  return (
    <div className="portfolio">
      <Row alignItemsCenter>
        <Column size="w-full">
          <PortfolioMenu
            listItems={listItems}
            setPortfolioSelected={(item) => setPortfolioSelected(item)}
          />
        </Column>
      </Row>
    </div>
  );
};

export default Portfolio;
