import React from "react";
import { useSelector } from "react-redux";

import { Characters } from "./characters";
import { Loading } from "./loading";

export const Main = (props) => {
  const isSiteLoading = useSelector((state) => state.loadingStatus.isLoading);
  return (
    <div>
      {isSiteLoading ? <Loading /> : ""}
      <Characters />
    </div>
  );
};
