import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm, Form } from "./style";
import Api from "../../api/api";

export function Home() {

  const[cep, setCep] = useState('');
  const[logradouro, setLogradouro] = useState('');
  const[bairro, setBairro] = useState('');
  const[localidade, setLocalidade] = useState('');
  const[estado, setEstado] = useState(''); // NÃO ESTÁ FUNCIONANDO
  const[uf, setUf] = useState('');

  async function buscarCep(){
    if (cep == "") {
      alert.alert("Cep")
      setCep("")
    }

    try {
      const response = await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      console.log(response)
    } catch (error) {
      console.log("Erro" + error)
    }
  }
  

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
        onBlur={buscarCep()}
        onChangeText={tx => {setCep(tx)}}
      />
      <BoxInput
        textLabel='Logradouro'
        placeholder='Logradouro...'
        keyType='default'
        maxLength={100}
        fieldValue={logradouro}
      />
      <BoxInput
        textLabel='Bairro'
        placeholder='Bairro...'
        keyType='default'
        maxLength={100}
        fieldValue={bairro}
      />
      <BoxInput
        textLabel='Cidade'
        placeholder='Cidade...'
        keyType='default'
        maxLength={100}
        fieldValue={localidade}
      />

    <Form>

      <BoxInput
        fieldWidth={70}
        textLabel='Estado'
        placeholder='NÃO ESTÁ FUNCIONANDO...'
        keyType='default'
        maxLength={100}
        fieldValue={estado}
      />
      <BoxInput
        fieldWidth={20}
        textLabel='UF'
        placeholder='UF'
        keyType='default'
        maxLength={100}
        fieldValue={uf}
      />

    </Form>
  </ContainerForm>

</ScrollForm>
  );
}