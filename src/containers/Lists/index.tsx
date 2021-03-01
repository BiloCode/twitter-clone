import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DesignColumns from "shared/components/layouts/DesignColumns";
import StatusBar from "shared/components/layouts/StatusBar";

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
      <StatusBar.Push title="Lists" subtitle="@AychoBilly" icons={icons} />
    </DesignColumns>
  );
};

export default Lists;
