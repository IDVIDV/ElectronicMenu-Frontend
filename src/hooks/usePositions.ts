import { useState } from "react";
import { api } from "~/api";
import { GetPositionsRequest, PositionPage } from "~/types";

export const usePositions = ( initialPositionsPage: PositionPage) => {
  const [positionsPage, setPositionPage] = useState(initialPositionsPage);
  
  const refetch = async (params: GetPositionsRequest) => {
    try {
      const response = await api.position.getPositions(params);
      setPositionPage(response.data);
    } catch {
    }
  };
  return { positionsPage, refetch };
};