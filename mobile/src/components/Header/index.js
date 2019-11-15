import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, ShoppingBasket, ItemCount } from './styles';

function Header({ cartSize, navigation }) {
  return (
    <Container>
      <Logo />
      <ShoppingBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemCount>{cartSize}</ItemCount>
      </ShoppingBasket>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
