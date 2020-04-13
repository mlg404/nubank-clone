import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png'

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Victor</Title>
      </Top>
      <Feather name="chevron-down" size={20} color="#FFF" />


    </Container>
  );
}
