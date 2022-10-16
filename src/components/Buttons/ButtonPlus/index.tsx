import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Label,
} from '../styles';

type ButtonProps = TouchableOpacityProps & {}

const ButtonPlus: React.FC<ButtonProps> = ({
    ...rest
}) => {
    return (
        <Container
            {...rest}
        >
            <Icon
                name="plus"
            />
            <Label>Nova refeição</Label>
        </Container>
    );
}

export default ButtonPlus;