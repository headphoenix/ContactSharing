import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
// import { ActivityIndicator, Colors } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Section, ProductTitle, MiddleContainer, GStart, ProductName } from "./launchscreen.styles";

   
export const RegisterScreen = ({navigation}) => {
    return (
        <SafeArea>
           <Text>I am Register</Text>
        </SafeArea>
    )
}