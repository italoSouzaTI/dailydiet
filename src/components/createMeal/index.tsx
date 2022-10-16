import React from 'react';
import Buttons from '../../components/Buttons';

import {
    Container,
    Label
} from './styles';

type CreateMeal = {
    onPress: () => void;
}
const CreateMeal: React.FC<CreateMeal> = ({ onPress }) => {
    return (
        <Container>
            <Label>Refeições</Label>
            <Buttons.ButtonPlus
                onPress={onPress} />
        </Container>
    );
}

export default CreateMeal;