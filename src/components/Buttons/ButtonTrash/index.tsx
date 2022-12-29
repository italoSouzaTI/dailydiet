import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Label,
} from './styles';

type ButtonProps = TouchableOpacityProps & {
    label?: string
}

const ButtonTrash: React.FC<ButtonProps> = ({
    label,
    ...rest
}) => {
    return (
        <Container
            {...rest}
        >
            <Icon
                label="trash-2"
            />

            <Label>{label ?? 'Excluir refeição'}</Label>
        </Container>
    );
}

export default ButtonTrash;