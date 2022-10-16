import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Container } from './styles';

type FakeModalProps = {
    children: ReactNode
}
const FakeModal: React.FC<FakeModalProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default FakeModal;