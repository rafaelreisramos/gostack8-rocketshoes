import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

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
        <AddButton onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Home);
