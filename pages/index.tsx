import React, { ReactElement } from "react";
import DefaultLayout from "components/PageLayout/DefaultLayout/DefaultLayout";

export default function Page() {
  return (
    <div className="homepage">
      <h1 className="mb-10">Homepage</h1>
      <p>Here is the content...</p>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
