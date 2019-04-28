import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";

import ParcelTable from "./Table";
import MenuBar from "./MenuBar";
import AddParcel from "../containers/AddParcel";

import "semantic-ui-css/semantic.min.css";

import "../css/App.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "add",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Container style={{ marginTop: "3em" }}>
        <MenuBar />
        <Menu secondary pointing>
          <Menu.Item
            name="add"
            active={activeItem === "add"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="View all"
            active={activeItem === "View all"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {this.renderSelection()}
      </Container>
    );
  }

  renderSelection = () => {
    const { activeItem } = this.state;
    if (activeItem === "View all") {
      return <ParcelTable />;
    }
    if (activeItem === "add") {
      return (
        <AddParcel/>
      );
    }
  };
}
export default Home;
