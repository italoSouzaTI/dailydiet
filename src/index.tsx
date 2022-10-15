import React from 'react';
import { StatusBar } from 'react-native';
import Loading from './components/Loading';
import { themDefault } from './styles/themeDefault'
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';


const App: React.FC = () => {
    const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
    return (
        <>
            <ThemeProvider theme={themDefault}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                {fontsLoaded ? <Routes /> : <Loading />}
            </ThemeProvider>
        </>
    );
}

export default App;