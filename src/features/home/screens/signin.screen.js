import React, { useContext } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form,
    FormGroup,
    Input,
    Label,
    Switch
  } from 'react-native-clean-form'


export const Butt = styled(TouchableOpacity)`
background-color: #ff0066;
padding: 10px 10px 10px 10px;
flex:1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Text1 = styled(Text)`
color: #313131; padding: 10px; paddingTop: 20px;
`

export const Background = styled.View`
  background-color: black;
`;
   
export const SignInScreen = ({navigation}) => {
    return (
            <Background style={{ flex: 1}}>
            <Image style={{ flex: 0.45}} source={{uri: 'https://images.unsplash.com/photo-1544140708-514b7837e6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'}} />
            <Form style={{ flex: 0.55}}>
              <Spacer position="top" size='xxlarge'>
       <FieldsContainer style={{padding: 10, paddingTop: 20}}>
        <FormGroup border={false}>
          <Label>Email</Label>
          <Input placeholder="joan.shay@sparrow.com"  />
        </FormGroup>
        <FormGroup border={false}>
          <Label>Password</Label>
        <Input secureTextEntry={true} placeholder="Enter a password"  />
        </FormGroup>
        <ActionsContainer>
      <Butt>
        <Text style={{color: 'white'}}>SIGN IN</Text>
      </Butt>
    </ActionsContainer>
    <TouchableOpacity>
    <Text1>Forgot? Reset Password</Text1>
   </TouchableOpacity>
    </FieldsContainer>
    </Spacer>
   </Form>
    </Background>

    )
}