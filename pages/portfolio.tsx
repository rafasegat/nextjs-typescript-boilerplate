import React, { ReactElement } from "react";
import DefaultLayout from "components/PageLayout/DefaultLayout/DefaultLayout";

export default function PagePortfolio() {
  return (
    <div className="page-portfolio">
      <h1 className="mb-10">Portfolio</h1>
      Portfolio here...
    </div>
  );
}

PagePortfolio.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
