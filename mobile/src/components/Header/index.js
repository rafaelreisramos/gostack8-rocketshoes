import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, ShoppingBasket, ItemCount } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <ShoppingBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemCount>10</ItemCount>
      </ShoppingBasket>
    </Container>
  );
}
