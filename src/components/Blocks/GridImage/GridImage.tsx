import React, { FC } from "react";

type TypeList = {
  image: string;
  imgClass?: string;
};

type Props = {
  list: TypeList[];
  noMargin: boolean;
};

const defaultProps: Props = {
  list: [{ image: "", imgClass: "" }],
  noMargin: false,
};

const GridImage: FC<Props> = ({ list, noMargin }: Props) => {
  return (
    <div className={`grid-image ${noMargin ? "no-margin" : "has-margin"}`}>
      <div className="flex flex-row items-center justify-between p-0 flex-wrap justify-center">
        {list.map((item) => {
          return (
            <img
              src={`../images/${item.image}`}
              className={`mb-8 ${item.imgClass}`}
            />
          );
        })}
      </div>
    </div>
  );
};

GridImage.defaultProps = defaultProps;
export default GridImage;
