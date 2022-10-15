import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/Logo.png'

import {
    ContainerHeader,
    ContainerLogo,
    ContainerImage
} from './styles';

const Header: React.FC = () => {
    return (
        <ContainerHeader>
            <ContainerLogo
                source={Logo}
            />
            <ContainerImage
                source={{
                    uri: "https://avatars.githubusercontent.com/u/52186505?v=4"
                }}
            />

        </ContainerHeader>
    );
}

export default Header;