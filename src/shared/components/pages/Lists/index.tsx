import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DesignColumns from "@templates/DesignColumns";
import TitleBarPush from "@molecules/TitleBarPush";

import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";

const icons = [
  {
    element: MdPlaylistAdd,
  },
  {
    element: BsThreeDots,
  },
];

const Lists: FC<RouteComponentProps> = () => {
  return (
    <DesignColumns>
      <TitleBarPush
        viewIconBack
        title="Lists"
        subtitle="@AychoBilly"
        icons={icons}
      />
    </DesignColumns>
  );
};

export default Lists;
