import React, { useContext } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";


import { SafeArea } from "../../../components/utility/safe-area.component";

export const TitleImage = styled(Image)`
   flex : 0.6

`
export const TextTi = styled(Text)`
   padding: 20px 0px 0px 20px;
   font-size: ${(props) => props.theme.fontSizes.body}
`

export const TextT = styled(Text)`
   padding: 20px 0px 0px 20px;
   font-size: ${(props) => props.theme.fontSizes.button}
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0px 25px 60px;
`;
   
export const SignScreen = ({navigation}) => {
  return (
    <SafeArea style={{ flex: 1}}>
    <Image style={{flex: 0.6}} source={{uri: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1392&q=80'}}/>
      <View style={{ flex: 0.3}}>
      <TextTi>KEEP IN TOUCH WITH THE PEOPLE OF PERCENTAGE</TextTi>
      <TextT>Sign in or register with your Percentage email</TextT>
      </View>
    <Section style={{ flex: 0.1}}>
      <Spacer position="right" size='xxlarge'>
        <TouchableOpacity onPress={() =>
              navigation.navigate("RegisterScreen")
            }>
      <Text >REGISTER</Text>
      </TouchableOpacity>
      </Spacer> 
      <Spacer position='left' size='xxlarge'>
        <TouchableOpacity onPress={() =>
              navigation.navigate("SignInScreen")
            }>
      <Text>SIGN IN</Text>
      </TouchableOpacity>
      </Spacer>
      </Section>
    </SafeArea>
  )
}