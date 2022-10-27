import React from 'react';
import Buttons from '../../components/Buttons';

import {
    Container,
    Label
} from './styles';

type CreateMeal = {
    click: () => void;
}
const CreateMeal: React.FC<CreateMeal> = ({ click }) => {
    return (
        <Container>
            <Label>Refeições</Label>
            <Buttons.ButtonPlus
                onPress={click} />
        </Container>
    );
}

export default CreateMeal;