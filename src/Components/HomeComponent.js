import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class NavbarComponent extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive">
        <Menu.Item
          name="Teteo"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />

        <Menu.Item position="right">
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu>
    );
  }
}
