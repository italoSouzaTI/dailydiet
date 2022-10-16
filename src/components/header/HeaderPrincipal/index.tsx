import React from 'react';
import Logo from '../../../assets/Logo.png'

import {
    ContainerHeader,
    ContainerLogo,
    ContainerImage
} from './styles';

const HeaderPrincipal: React.FC = () => {
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

export default HeaderPrincipal;