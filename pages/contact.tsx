import React, { ReactElement } from "react";
import DefaultLayout from "components/PageLayout/DefaultLayout/DefaultLayout";

export default function PageContact() {
  return (
    <div className="contact">
      <h1 className="mb-10">Contact</h1>
    </div>
  );
}

PageContact.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
