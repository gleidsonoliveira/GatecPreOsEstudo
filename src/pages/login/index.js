import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import InputText from '../../components/InputText'

//Styles
import { Container, Logo, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText, } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class login extends Component {
    //Ocultar o Header que vem por padrão nas telas da Stack do React Navigation
    static navigationOptions = { header: null };

    static propTypes = { navigation: PropTypes.shape({navigate: PropTypes.func,dispatch: PropTypes.func}).isRequired };

    state = { username: "Gleidson Guilherme", password: "090809", error: '' }

    handleLogin = () => 
    {
        if (this.state.username.length === 0 || this.state.password.length === 0) 
        {
          this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        }
        else if (this.state.username.length <= 10)
        {
            this.setState({error:'Usuário informado   Por favor entre com um usuário válido!'}, () => false);
        }
        else 
        {
            try 
            {
                this.props.navigation.navigate('MainScreen')
            } 
            catch (_err) 
            {
            this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
            }
        }
    }

    render() {
        return (
            <Container>
                <StatusBar hidden></StatusBar>
                <Logo source={require('../../images/loginLogo.png')} resizeMode="contain" />

                <InputText
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={false}
                />

                <InputText
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />

                {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

                <Button onPress={this.handleLogin}>
                    <ButtonText>
                       Entrar
                    </ButtonText>
                </Button>

                <SignUpLink>
                    <SignUpLinkText>Version: 0.00.1</SignUpLinkText>
                </SignUpLink>
            </Container>
        );
    }
}