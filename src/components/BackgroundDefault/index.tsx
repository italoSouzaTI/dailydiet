import React, { ReactNode } from 'react';


import { Container } from './styles';

type backgroudProps = {
    children: ReactNode
}

const BackgroundDefault: React.FC<backgroudProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default BackgroundDefault;