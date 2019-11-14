import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
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

export default function Cart() {
  return (
    <Container>
      <Product>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://images-americanas.b2w.io/produtos/01/00/sku/24994/7/24994745_1GG.jpg',
            }}
          />
          <ProductDetails>
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>179,90</ProductPrice>
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
        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalPrice>1619,10</ProductTotalPrice>
        </ProductTotal>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </Product>
    </Container>
  );
}
