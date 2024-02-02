import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm, Form } from "./style";

export function Home() {

  const[cep, setCep] = useState('09330390');
  const[logradouro, setLogradouro] = useState('');
  const[bairro, setBairro] = useState('');
  const[cidade, setCidade] = useState('');
  const[estado, setEstado] = useState('');
  const[uf, setUf] = useState('');


  return (
<ScrollForm>

  <ContainerForm>
      <BoxInput
        textLabel='informar CEP:'
        placeholder='Cep...'
        editable={true}
        keyType='numeric'
        maxLength={9}
        fieldValue={cep}
        onChangeText={tx => {setCep(tx)}}
      />
      <BoxInput
        textLabel='Logradouro'
        placeholder='Logradouro...'
        keyType='default'
        maxLength={9}
        fieldValue={logradouro}
      />
      <BoxInput
        textLabel='Bairro'
        placeholder='Bairro...'
        keyType='default'
        maxLength={9}
        fieldValue={bairro}
      />
      <BoxInput
        textLabel='Cidade'
        placeholder='Cidade...'
        keyType='default'
        maxLength={9}
        fieldValue={cidade}
      />

    <Form>

      <BoxInput
        fieldWidth={70}
        textLabel='Estado'
        placeholder='Estado...'
        keyType='default'
        maxLength={9}
        fieldValue={estado}
      />
      <BoxInput
        fieldWidth={20}
        textLabel='UF'
        placeholder='UF'
        keyType='default'
        maxLength={9}
        fieldValue={uf}
      />

    </Form>
  </ContainerForm>

</ScrollForm>
  );
}