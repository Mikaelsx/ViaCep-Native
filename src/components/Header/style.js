import styled from "styled-components";
import { StyleSheet } from "react-native";

export const HeaderContainer = styled.View`
background-color: #FECC2B;
height: 20%;
flex-direction: row;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 10px #00000030;
/* border-bottom-left-radius: 18px;
border-bottom-right-radius: 18px; */
border-radius: 0px 0px 15px 15px;

/* 

SOMBRA PARA ANDROID

shadow-color: 'black';
shadow-opacity: 0,26;
shadow-offset: 20px 20px;
shadow-radius: 10px;
elevation: 1; 

*/
`

export const HeaderContent = styled.SafeAreaView`
margin-top: 30px;
`

export const TextHeader = styled.Text`
/* align-Self: center; */
font-size: 24px;
color: #333E33;
font-family: 'Roboto_500Medium';
`