import React from 'react'
import { connect } from 'react-redux'
import { toggleTabs } from '../actions'

const ToggleTab = ({ dispatch }) => {
    return (
        <div>
            <button
                onClick={e => {
                    e.preventDefault()
                    dispatch(toggleTabs())
                }}>
                Toggle Tabs
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    toggleTab: state.toggleTab
})

// const mapDispatchToProps = dispatch => ({
//     toggleTabs: () => dispatch(toggleTabs())
// })

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(ToggleTab)
