import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsIconTextExample extends Component {
  constructor(props) {
    super(props);}
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Login2') }>
              <Icon name="add" />
              <Text>Input</Text>
            </Button>
            <Button vertical >
              <Icon name="eye" />
              <Text>View</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Edit</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

