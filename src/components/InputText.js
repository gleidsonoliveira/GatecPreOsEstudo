import React from 'react';
//import { View, TextInput } from 'react-native';
import { Input } from '../pages/login/styles';

const InputText = props => 
{
    return (
        <Input
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            blurOnSubmit={false}
            secureTextEntry={props.secureTextEntry}
        />
    );
};
export default InputText;