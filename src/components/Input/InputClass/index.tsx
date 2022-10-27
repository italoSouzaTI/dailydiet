import React from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    Label,
    ContainerInput
} from './styles';

type InputClassProps = TextInputProps & {
    label: string
}
const InputClass: React.FC<InputClassProps> = ({ label, ...rest }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <ContainerInput
                {...rest}
            />
        </Container>
    );
}

export default InputClass;