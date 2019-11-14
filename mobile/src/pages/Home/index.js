import React, { Component } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  ProductsList,
  Product,
  ProductPrice,
  AddButton,
  ProductImage,
  ProductTitle,
  AmountCart,
  AmountCartText,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  renderItem = ({ item }) => {
    return (
      <Product>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
          <AmountCart>
            <Icon name="add-shopping-cart" size={16} color="#fff" />
            <AmountCartText>1</AmountCartText>
          </AmountCart>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductsList
          data={products}
          keyExtractor={product => product.id}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}
