import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, ShoppingBasket, ItemCount } from './styles';

function Header({ cart, navigation }) {
  return (
    <Container>
      <Logo />
      <ShoppingBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemCount>{cart.length}</ItemCount>
      </ShoppingBasket>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
