import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DesignColumns from "shared/components/layouts/DesignColumns";
import TitleBarPush from "shared/components/molecules/TitleBarPush";

import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";

const icons = [
  {
    element: <MdPlaylistAdd />,
  },
  {
    element: <BsThreeDots />,
  },
];

const Lists: FC<RouteComponentProps> = () => {
  return (
    <DesignColumns>
      <TitleBarPush title="Lists" subtitle="@AychoBilly" icons={icons} />
    </DesignColumns>
  );
};

export default Lists;
