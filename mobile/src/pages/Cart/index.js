import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({ cart }) {
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
          <Icon name="delete-forever" size={24} color="#7159c1" />
        </ProductInfo>
        <ProductAmount>
          <AmountContainer>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            <AmountText>3</AmountText>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </AmountContainer>
          <ProductSubtotal>539,70</ProductSubtotal>
        </ProductAmount>
      </Product>
    );
  }

  console.tron.log(cart);

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

export default connect(mapStateToProps)(Cart);
