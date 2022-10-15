import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({ theme }) => theme.produto.base.gray_7};
    padding-left: 24px;
    padding-right: 24px;
`;
