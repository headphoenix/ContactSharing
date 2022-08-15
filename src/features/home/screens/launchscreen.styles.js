import styled from "styled-components/native";
import { Text } from "react-native";

export const ProductName = styled(Text)`
  margin-left: -82px;
  font-size: ${(props) => props.theme.fontSizes.title}
`;

export const ProductTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5}
  font-weight: ${(props) => props.theme.fontWeights.bold}
`;

export const MiddleContainer = styled.View`
  position: absolute;
  top: 45%;
  left: 50%;
`;

export const TitleContainer = styled.View`
  padding: 100px
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 80px;
  margin-Top: 40px
`;

export const GStart = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body}
  margin-Top: 200px
  margin-left: 50px
`;