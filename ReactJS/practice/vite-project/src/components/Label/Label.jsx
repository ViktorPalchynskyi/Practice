import React from "react";
import { WithContext } from "../../hoc/with-context";

export const Label = ({ contextValue }) => {
  return <div>Label {contextValue}</div>;
};

export const LabelWithContext = WithContext(Label);