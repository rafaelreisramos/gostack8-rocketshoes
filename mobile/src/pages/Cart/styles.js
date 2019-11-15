import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 30px 20px;
  background: #141419;
  margin-top: 20px;
`;

export const CartContainer = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  padding: 0 10px;
  background: #eee;
  border-radius: 4px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AmountText = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  text-align: center;
  padding: 0 10px;
  margin: 5px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductTotal = styled.View`
  align-items: center;
  margin: 30px 0;
`;

export const ProductTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const ProductTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.6px;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  line-height: 42px;
`;
