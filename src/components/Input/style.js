import styled from "styled-components";

export const InputText = styled.TextInput`
border: 2px solid #A1A1A1;
text-align: left;
padding: 20px;
border-radius: 10px;
margin-top: 10px;
width: 100px;
font-size: 18px;
font-family: 'Roboto_500Medium';

${props => props.editable && css`
    background-color: #F6F6F6;
`}
`