import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.produto.base.gray_7};
`;
export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.produto.green.green_dark
}))``;