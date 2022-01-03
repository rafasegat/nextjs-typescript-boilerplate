import React, { FC } from "react";
import Row from "../Layout/Row";
import Column from "../Layout/Column";

const Footer: FC = () => {
  return (
    <footer className="text-center py-10">
      <Row alignItemsCenter>
        <Column>
          <p className="text-sm flex items-center justify-center">
            Designed and coded with{" "}
            <span className="pl-1 pr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.715"
                height="15.5"
                viewBox="0 0 17.715 15.5"
              >
                <path
                  d="M15.994,3.308a4.731,4.731,0,0,0-6.456.471l-.682.7-.682-.7a4.731,4.731,0,0,0-6.456-.471A4.968,4.968,0,0,0,1.377,10.5l6.695,6.913a1.085,1.085,0,0,0,1.567,0L16.333,10.5a4.965,4.965,0,0,0-.339-7.193Z"
                  transform="translate(0.001 -2.248)"
                  fill="#f49d85"
                />
              </svg>
            </span>
            by Merve and Raf
          </p>
        </Column>
      </Row>
    </footer>
  );
};

export default Footer;
