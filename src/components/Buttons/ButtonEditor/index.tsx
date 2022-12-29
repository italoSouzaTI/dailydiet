import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Label,
} from '../styles';

type ButtonProps = TouchableOpacityProps & {
    nameIcon?: string
    color?: string
}

const ButtonEditor: React.FC<ButtonProps> = ({
    ...rest
}) => {
    return (
        <Container
            {...rest}
        >
            <Icon
                name="edit-3"
            />

            <Label>Editar refeição</Label>
        </Container>
    );
}

export default ButtonEditor;