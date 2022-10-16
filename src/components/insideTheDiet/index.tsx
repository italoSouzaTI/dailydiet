import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    ContainerInfo,
    ContainerIcon,
    Label,
    SubLabel
} from './styles';

interface InsideTheDietProps extends TouchableOpacityProps {
    label: string;
    subLabel: string;
    colorInside: boolean
}

const InsideTheDiet: React.FC<InsideTheDietProps> = ({
    label,
    subLabel,
    colorInside = true,
    ...rest
}) => {
    return (
        <Container
            colorInside={colorInside}
            {...rest}
        >
            <ContainerInfo>
                <ContainerIcon
                    colorInside={colorInside}
                    name="arrow-up-right"
                />
                <Label>{label}</Label>
                <SubLabel>{subLabel}</SubLabel>
            </ContainerInfo>
        </Container>
    );
}

export default InsideTheDiet;