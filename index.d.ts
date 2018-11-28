import react,{ Component } from 'react'
import { TextInputProperties } from 'react-native'


type Props = {
    customKeyboardType: string,
} & TextInputProperties


export class CustomTextInput extends Component<Props> {}
