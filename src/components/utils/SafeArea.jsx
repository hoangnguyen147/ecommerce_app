import { StatusBar, SafeAreaView } from "react-native";

import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight + 12}px`};
  /* padding-top: 12px; */
  background-color: white;
`;

export default SafeArea;
