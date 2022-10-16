import styled from 'styled-components/native';


export const Container = styled.View`
  margin-top: 40px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.font.size.size_16}px;
    font-family: ${({ theme }) => theme.font.regular};
`;
