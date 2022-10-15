import 'styled-components'
import { themDefault } from '../styles/themeDefault'


declare module 'styled-components' {
    type ThemeType = typeof themDefault;
    export interface DefaulTheme extends ThemeType { }
}
