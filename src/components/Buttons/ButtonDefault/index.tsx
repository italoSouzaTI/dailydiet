import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Label,
} from '../styles';

type ButtonProps = TouchableOpacityProps & {
    label: string
}

const ButtonDefault: React.FC<ButtonProps> = ({
    label,
    ...rest
}) => {
    return (
        <Container
            {...rest}
        >
            <Label>{label}</Label>
        </Container>
    );
}

export default ButtonDefault;