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

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      let responseJson = await Api.signIn(emailField, passwordField);

      if (responseJson.token) {
        alert('DEU CERTO!');
      } else {
        alert('E-mail e/ou senha incorretos!');
      }
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <Text style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>
        Faça seu logon
      </Text>

      <InputArea>
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
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
