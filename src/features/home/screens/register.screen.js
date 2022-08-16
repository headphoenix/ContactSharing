import React, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
// import { ActivityIndicator, Colors } from "react-native-paper";
import { FontAwesome5 } from '@expo/vector-icons';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Section, ProductTitle, MiddleContainer, GStart, ProductName } from "./launchscreen.styles";


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

  import { AntDesign } from '@expo/vector-icons'; 

  export const Butt = styled(TouchableOpacity)`
background-color: #ff0066;
padding: 10px 10px 10px 10px;
flex:1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Sect = styled.View`
  align-items: center;
  font-color: #ff0066;
  padding-Bottom: 75px;
`;
   
export const RegisterScreen = ({navigation}) => {
    return (
        <>
        <Form>
       <FieldsContainer style={{padding: 5, paddingTop: 20}}>
        <Sect>
       <AntDesign name="user" size={50} color="#ff0066" />
       <Text style={{color: "#ff0066"}}>ADD PROFILE PHOTO</Text>
       </Sect>
        <Fieldset>
        <FormGroup border={false}>
          <Label>Full Name</Label>
          <Input placeholder="Joan Shay"  />
        </FormGroup>
        </Fieldset>
        <Fieldset>
        <FormGroup border={false}>
          <Label>Email</Label>
          <Input placeholder="joan.shay@sparrow.com"  />
        </FormGroup>
        </Fieldset>
        <Fieldset>
        <FormGroup border={false}>
          <Label>Phone Number</Label>
          <Input placeholder="+233 (244) 245 190"  />
        </FormGroup>
        </Fieldset>
        <Fieldset>
        <FormGroup border={false}>
          <Label>Role</Label>
          <Input placeholder="Director of Marketing"  />
        </FormGroup>
        </Fieldset>
        <Fieldset>
        <FormGroup border={false}>
          <Label>Twitter</Label>
          <Input placeholder="@joansays"  />
        </FormGroup>
        </Fieldset>
        <Fieldset>
        <FormGroup border={false}>
          <Label>LinkedIn</Label>
          <Input placeholder="/joan.shay"  />
        </FormGroup>
        </Fieldset>
        <ActionsContainer>
      <Butt>
        <Text style={{color: 'white'}}>R E G I S T E R</Text>
      </Butt>
    </ActionsContainer>
    </FieldsContainer>
   </Form>
    </>

    )
}