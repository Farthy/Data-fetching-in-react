import React from "react";
import { useQuery } from "react-query";
import { getDog } from "./Fetchers";


function Dog1() {
  const { data } = useQuery("dog", getDog());

  return <img alt="" src={data?.url} width={100} />;
}

export default Dog1;