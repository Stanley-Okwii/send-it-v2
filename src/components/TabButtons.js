import React from 'react'
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'


const TabButtons = ({ onClickLogIn, onClickSignUp }) => (
    <Button.Group>
        <Button icon='sign-in' onClick={() => onClickLogIn()}
            content='Sign In' />
        <Button icon='user plus' onClick={() => onClickSignUp()
        }
            content='Sign Up' />
    </Button.Group>
)

TabButtons.propTypes = {
    onClickSignUp: PropTypes.func.isRequired,
    onClickLogIn: PropTypes.func.isRequired
}

export default TabButtons
