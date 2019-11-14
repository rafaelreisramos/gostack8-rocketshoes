import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const ShoppingBasket = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  font-size: 12px;
  background: #7159c1;
  color: #fff;

  line-height: 18px;
  width: 18px;
  border-radius: 9px;

  text-align: center;

  position: absolute;
  top: -9px;
  right: -9px;
  overflow: hidden;
`;
