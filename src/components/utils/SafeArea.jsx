import { StatusBar, SafeAreaView, View, useWindowDimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Loading from "../Loading";

const SafeAreaWrapper = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight + 12}px`};
  /* padding-top: 12px; */
  background-color: white;
`;

const SafeArea = ({ children }) => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaWrapper>
      <Loading isLoading={true} />
      {children}
    </SafeAreaWrapper>
  )
}



export default SafeArea;
