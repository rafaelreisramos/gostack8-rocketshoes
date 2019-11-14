import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* flex: 1; */
  padding: 30px 20px;
  background: #141419;
  margin-top: 20px;
`;

export const ProductsList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin-right: 15px;
`;

export const Product = styled.View`
  width: 220px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 21px;
  margin: 5px 0 10px;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  margin-top: auto;

  background: #7159c1;
  height: 42px;
  border-radius: 4px;
`;

export const AmountCart = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;

  background: rgba(0, 0, 0, 0.1);
`;

export const AmountCartText = styled.Text`
  font-size: 14px;
  color: #fff;

  margin-left: 5px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;

  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;
