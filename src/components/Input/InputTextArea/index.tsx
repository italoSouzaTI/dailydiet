import React from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    Label,
    ContainerInput
} from './styles';
type InputClassProps = TextInputProps & {}
const InputTextArea: React.FC<InputClassProps> = ({ ...rest }) => {
    return (
        <Container>
            <Label>Descrição</Label>
            <ContainerInput
                {...rest}
            />
        </Container>
    );
}

export default InputTextArea;