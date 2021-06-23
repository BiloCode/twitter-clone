import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DesignColumns from "shared/components/layouts/DesignColumns";
import TitleBar from "shared/components/layouts/TitleBar";

import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";

const Lists: FC<RouteComponentProps> = () => {
  const icons = [
    {
      element: <MdPlaylistAdd />,
    },
    {
      element: <BsThreeDots />,
    },
  ];

  return (
    <DesignColumns>
      <TitleBar.Push title="Lists" subtitle="@AychoBilly" icons={icons} />
    </DesignColumns>
  );
};

export default Lists;
