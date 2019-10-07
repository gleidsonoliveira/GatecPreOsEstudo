import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage, Image, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base'

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

const messages = [
  { id: 1, name: 'Diego Fernandes', avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/120px-Un1.svg.png', last_message: 'Lorem ipsum', time: '07/10/2019' },
  { id: 2, name: 'Claudio Orlandi', avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/120px-Deux.svg.png', last_message: 'Lorem ipsum', time: '07/10/2019' },
  { id: 3, name: 'Claudio Orlandi', avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/120px-Trois.svg.png', last_message: 'Lorem ipsum', time: '07/10/2019' },
  { id: 4, name: 'Claudio Orlandi', avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/120px-Quatre.svg.png', last_message: 'Lorem ipsum', time: '07/10/2019' },
  { id: 5, name: 'Claudio Orlandi', avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cinq.svg/120px-Cinq.svg.png', last_message: 'Lorem ipsum', time: '07/10/2019' },
];

const Messages = ({ messages }) => (
  <Fragment>
    <List>
      {messages.map(message => (
        <ListItem avatar key={message.id}>
          <Left>
            <Thumbnail source={{ uri: message.avatar_url }} />
          </Left>
          <Body>
            <Text>{message.name}</Text>
            <Text note>{message.last_message}</Text>
          </Body>
          <Right>
            <Text note> Date da Os: {message.time}</Text>
          </Right>
        </ListItem>
      ))}
    </List>

    <Fab direction="up" position="bottomRight" style={{ backgroundColor: "#7159C1" }}>
      <Icon type="FontAwesome" name="plus" />
    </Fab>
  </Fragment>
);

export default class MainScreen extends Component {
  //Ocultar o Header que vem por padrão nas telas da Stack do React Navigation
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
            <Left>
              <Thumbnail small source={{ uri: logo_url }} />
            </Left>
            <Body>
              <Title>Ordens de Serviço</Title>
            </Body>
          </Header>
          <View style={styles.container}>
            <Tabs>
              <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="list" /></TabHeading>}>
                <Messages messages={messages} />
              </Tab>
              <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
                {/* <Notification /> */}
              </Tab>
              <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
                <Messages messages={messages} />
              </Tab>
            </Tabs>
          </View></ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: {
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  }, contentContainer: {
    paddingVertical: 0
  }
});