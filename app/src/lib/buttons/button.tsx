import React from "react";
import { primaryButtonStyle } from "./button";

type Props = {
  children: React.ReactNode;
};

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return <button style={primaryButtonStyle}>{children}</button>;
};
