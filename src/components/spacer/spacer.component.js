import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  xsmall: 0.5,
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
  xxlarge: 5,
  xxxlarge: 6,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({variant}) => variant};
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return ( 
        <SpacerView variant={variant}>{children}</SpacerView>
    )
}

// styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};