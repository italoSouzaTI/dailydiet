import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Label,
} from './styles';

type ButtonProps = TouchableOpacityProps & {}

const ButtonTrash: React.FC<ButtonProps> = ({
    ...rest
}) => {
    return (
        <Container
            {...rest}
        >
            <Icon
                name="trash-2"
            />

            <Label>Excluir refeição</Label>
        </Container>
    );
}

export default ButtonTrash;