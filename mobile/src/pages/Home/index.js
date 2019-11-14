import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductPrice,
  AddButton,
  ProductImage,
  ProductTitle,
  AmountCart,
  AmountCartText,
  AddButtonText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://images-americanas.b2w.io/produtos/01/00/sku/24994/7/24994745_1GG.jpg',
          }}
        />
        <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
        <ProductPrice>129,90</ProductPrice>
        <AddButton>
          <AmountCart>
            <Icon name="add-shopping-cart" size={16} color="#fff" />
            <AmountCartText>1</AmountCartText>
          </AmountCart>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    </Container>
  );
}
