import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartContainer,
  ProductList,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  AmountContainer,
  AmountText,
  ProductSubtotal,
  ProductTotal,
  ProductTotalText,
  ProductTotalPrice,
  SubmitButton,
  SubmitButtonText,
} from './styles';

function Cart({ cart, removeFromCart }) {
  function renderItem({ item }) {
    return (
      <Product>
        <ProductInfo>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductDetails>
          <Icon
            name="delete-forever"
            size={24}
            color="#7159c1"
            onPress={() => removeFromCart(item.id)}
          />
        </ProductInfo>
        <ProductAmount>
          <AmountContainer>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            <AmountText>{item.amount}</AmountText>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </AmountContainer>
          <ProductSubtotal>539,70</ProductSubtotal>
        </ProductAmount>
      </Product>
    );
  }

  return (
    <Container>
      <CartContainer>
        <ProductList
          data={cart}
          keyExtractor={product => product.id}
          renderItem={renderItem}
        />
        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalPrice>1619,10</ProductTotalPrice>
        </ProductTotal>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
