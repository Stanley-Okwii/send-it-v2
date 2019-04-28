import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

export class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={
          this.handleItemClick
          } />
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={(e, { name }) => {
              this.handleItemClick(e, { name });
              sessionStorage.clear();
              this.props.history.push('/');
            }
            }
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(MenuBar);