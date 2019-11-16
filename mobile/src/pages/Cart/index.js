import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

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
            <ProductPrice>{item.priceFormatted}</ProductPrice>
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
            <Icon
              name="remove-circle-outline"
              size={20}
              color="#7159c1"
              onPress={() => decrement(item)}
            />
            <AmountText>{item.amount}</AmountText>
            <Icon
              name="add-circle-outline"
              size={20}
              color="#7159c1"
              onPress={() => increment(item)}
            />
          </AmountContainer>
          <ProductSubtotal>{item.subtotal}</ProductSubtotal>
        </ProductAmount>
      </Product>
    );
  }

  function renderFooter() {
    return (
      <>
        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalPrice>{total}</ProductTotalPrice>
        </ProductTotal>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </>
    );
  }

  return (
    <Container>
      <CartContainer>
        <ProductList
          data={cart}
          keyExtractor={product => product.id}
          renderItem={renderItem}
          ListFooterComponent={() => renderFooter()}
        />
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
