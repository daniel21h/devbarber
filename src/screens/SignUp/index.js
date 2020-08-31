import React, {useState} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Api from '../../services/api';

import SignInput from '../../components/SignInput';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [nameField, setNameField] = useState('');

  const handleSignClick = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let response = await Api.signUp(nameField, emailField, passwordField);

      if (response.token) {
        alert('DEU CERTO!');
      } else {
        alert('Erro: ' + response.error);
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Text style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
        Crie sua conta
      </Text>

      <InputArea>
        <SignInput
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={setNameField}
        />
        <SignInput
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={setEmailField}
        />
        <SignInput
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={setPasswordField}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
