import React from "react";
import { AvailableSnacks, SnacksSummary } from "components/snacks";

export const Snacks = () => {
  return (
    <div>
      <SnacksSummary />
      <AvailableSnacks />
    </div>
  );
};
