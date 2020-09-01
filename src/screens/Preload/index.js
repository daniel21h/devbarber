import React, {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg';

import {Container, LoadingIcon} from './styles';
import api from '../../services/api';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        let response = await api.checkToken(token);

        if (response.token) {
          await AsyncStorage.setItem('token', response.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.avatar,
            },
          });
        }

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, [navigation, userDispatch]);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};
