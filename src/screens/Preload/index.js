import React, {useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Container, LoadingIcon} from './styles';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        // Validar o token
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <Container>
      <Text>Preload Logo</Text>
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};
