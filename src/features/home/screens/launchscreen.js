import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
// import { ActivityIndicator, Colors } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Section, ProductTitle, MiddleContainer, GStart, ProductName } from "./launchscreen.styles";

   
export const LaunchScreen = ({navigation}) => {
    return (
        <SafeArea>
            <Section>
            <FontAwesome5 name="percent" size={45} color="black" />
            <ProductTitle>PERCENTAGE</ProductTitle>
            </Section>
        <MiddleContainer>
        <ProductName>P E R C E N T A G E</ProductName>
        <ProductName>  C O N T A C T S</ProductName>
        </MiddleContainer>
        <Section>
         <TouchableOpacity  onPress={() =>
              navigation.navigate("SignScreen")
            }>
        <GStart>GET STARTED</GStart>
        </TouchableOpacity>
        </Section>
        </SafeArea>
    )
}