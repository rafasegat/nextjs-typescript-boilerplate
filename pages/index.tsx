import React, { ReactElement } from "react";
import DefaultLayout from "components/PageLayout/DefaultLayout/DefaultLayout";

export default function Page() {
  return (
    <div className="homepage">
      <h1 className="mb-10">Homepage</h1>
      <p>homepage</p>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
