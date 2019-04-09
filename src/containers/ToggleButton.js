import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators}  from 'redux'
// import store from '../store'
import { toggleLogIn, toggleSignUp } from '../actions'
// import TabButtons from '../components/TabButtons'
import { Button } from 'semantic-ui-react';


const TabButtons = ({ dispatch }) => (
    <Button.Group>
        <Button icon='sign-in' onClick={() => dispatch(toggleLogIn())}
            content='Sign In' />
        <Button icon='user plus' onClick={() => dispatch(toggleSignUp())}
            content='Sign Up' />
    </Button.Group>
)

const mapStateToProps = state => ({
    isLogInTab: state.isLogInTab
})

// const mapDispatchToProps = (dispatch) => {
//     return {
//         ...bindActionCreators({ toggleLogIn, toggleSignUp }, dispatch)
//     };
//   }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(TabButtons)
