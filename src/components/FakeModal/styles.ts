import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  background-color: ${({ theme }) => theme.produto.base.white};
  padding-left: 24px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 24px;
`;
