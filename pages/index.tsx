import React, { ReactElement } from "react";
import DefaultLayout from "components/PageLayout/DefaultLayout/DefaultLayout";
import Container from "components/Layout/Container";
import Row from "components/Layout/Row";
import Column from "components/Layout/Column";
import FrontpageBanner from "components/Sections/FrontpageBanner";
import GridImage from "components/Blocks/GridImage/GridImage";
import GridImageLink from "components/Blocks/GridImageLink/GridImageLink";
import CTAContact from "components/Blocks/CTAContact/CTAContact";
import Music from "components/Blocks/Music/Music";

export default function Page() {
  return (
    <div className="homepage">
      <FrontpageBanner />
      <div
        className="relative pt-20 md:pt-20 md:mt-0"
        style={{
          background: "url('../images/ground.png') no-repeat top left",
          backgroundSize: "600px",
        }}
      >
        <img src="../images/grass.png" className="grass-image absolute" />
        <Container className="size-930">
          {/* <div className="maintenance"></div> */}
          <Row customClass="block mt-10 mb-10 md:hidden">
            <Column>
              <div>
                <p>
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

          {/* DESCRIPTION */}
          <Row>
            <Column size="hidden md:block md:w-1/2">&nbsp;</Column>
            <Column size="w-full md:w-1/2 md:text-center">
              <h2 className="mb-10">A Little About</h2>
            </Column>
          </Row>
          <Row customClass="pb-16 md:pb-28">
            <Column>
              <div className=" mx-auto">
                <p>An expert designer.</p>
                <p>
                  Specialising in mobile app and website design. This girl has
                  worked with many companies and behalf of agencies for 7+ years
                  to bring their product to reality. When the going gets tough
                  she carries on with her level-headless and positive can-do
                  attitude.
                </p>
                <p>
                  Other than that, this girl spends her free time doing yoga,
                  illustrating & planing her next tattoo…
                </p>
              </div>
            </Column>
          </Row>

          {/* PROJECTS */}
          <Row customClass="pb-10 md:pb-28">
            <Column>
              <GridImage
                list={[
                  {
                    image: "logo-digiground.png",
                    imgClass: "px-0 md:px-5 h-6 md:h-12",
                  },
                  {
                    image: "logo-youchamp.png",
                    imgClass: "px-0 md:px-5 h-5 md:h-10",
                  },
                  {
                    image: "logo-labourmate.png",
                    imgClass: "pr-2 md:px-5 h-4 md:h-8",
                  },
                  {
                    image: "logo-oktion.png",
                    imgClass: "pr-2 h-6 md:px-5 md:h-12",
                  },
                  {
                    image: "logo-id.png",
                    imgClass: "px-0 md:px-5 h-5 md:h-12",
                  },
                  {
                    image: "logo-motza.png",
                    imgClass: "pr-2 md:px-5 h-5 md:h-8",
                  },
                  {
                    image: "logo-piiq.png",
                    imgClass: "px-0 md:px-5 h-5 md:h-8",
                  },
                  {
                    image: "logo-puppi.png",
                    imgClass: "px-0 h-8 md:px-5 md:h-12",
                  },
                  {
                    image: "logo-wear.png",
                    imgClass: "px-0 h-5 md:px-5 h-4 md:h-8",
                  },
                ]}
              />
            </Column>
          </Row>

          {/* AWARDS */}
          <Row margin="pb-10">
            <Column>
              <h2>Awards</h2>
            </Column>
          </Row>
          <Row margin="pb-10 md:pb-28">
            <Column>
              <GridImage
                list={[
                  {
                    image: "awards/award-gooddesign.png",
                    imgClass: "h-8 md:h-16",
                  },
                  {
                    image: "awards/award-creativejam.png",
                    imgClass: "h-8 md:h-16",
                  },
                  { image: "awards/award-c2a.png", imgClass: "h-8 md:h-16" },
                  {
                    image: "awards/award-global.png",
                    imgClass: "h-8 md:h-16",
                  },
                  { image: "awards/award-anz.png", imgClass: "h-8 md:h-16" },
                ]}
                noMargin={true}
              />
            </Column>
          </Row>

          {/* TOOLS */}
          <Row margin="mb-10">
            <Column>
              <h2>Tools</h2>
            </Column>
          </Row>
          <Row margin="pb-10 md:pb-40">
            <Column>
              <GridImageLink
                list={[
                  {
                    title: "Creative Cloud",
                    link: "https://www.adobe.com/au/",
                    image: "tools/Creatice Cloud Icon.png",
                  },
                  {
                    title: "Illustrator",
                    link: "https://www.adobe.com/au/products/illustrator.html",
                    image: "tools/Ai Icon.png",
                  },
                  {
                    title: "Adobe Xd",
                    link: "https://www.adobe.com/au/products/xd.html",
                    image: "tools/Xd Icon.png",
                  },
                  {
                    title: "Photoshop",
                    link: "https://www.adobe.com/au/products/photoshop.html",
                    image: "tools/Ps Icon.png",
                  },
                  {
                    title: "InDesign",
                    link: "https://www.adobe.com/au/products/indesign.html",
                    image: "tools/Id Icon.png",
                  },
                  {
                    title: "Acrobat",
                    link: "https://acrobat.adobe.com/au/en/acrobat.html",
                    image: "tools/Acrobat Icon.png",
                  },
                ]}
              />
            </Column>
          </Row>

          {/* MUSIC */}
          <Music />

          {/* CONTACT */}
          <CTAContact />
        </Container>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout hasContainer={false} hasTopSpacing={false}>
      {page}
    </DefaultLayout>
  );
};
