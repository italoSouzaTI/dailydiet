import React from 'react';
import { TextInputProps } from 'react-native';

import {
    Label,
    ContainerItem,
    ContainerInput
} from './styles';

type InputTwoProps = TextInputProps & {
    label: string
}
const InputMedion: React.FC<InputTwoProps> = ({ label, ...rest }) => {
    return (
        <ContainerItem>
            <Label>{label}</Label>
            <ContainerInput
                {...rest}
            />
        </ContainerItem>
    );
}

export default InputMedion;