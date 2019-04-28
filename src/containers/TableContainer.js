import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchParcels } from "../actions/fetchParcels";

export class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allParcels: []
    };
  }

  componentWillMount() {
    this.props.fetchParcels();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.allParcels.length > 0) {
      this.setState({ allParcels: newProps.allParcels });
    }
  }

  render() {
    return this.state.allParcels.map(order => {
      return (
        <Table.Body key={order.order_id}>
          <Table.Row>
            <Table.Cell>{order.created_at}</Table.Cell>
            <Table.Cell>{order.parcel}</Table.Cell>
            <Table.Cell>{order.order_id}</Table.Cell>
            <Table.Cell>{order.weight}</Table.Cell>
            <Table.Cell>{order.price}</Table.Cell>
            <Table.Cell>{order.receiver}</Table.Cell>
            <Table.Cell>{order.pickup_location}</Table.Cell>
            <Table.Cell>{order.destination}</Table.Cell>
            <Table.Cell>{order.current_location}</Table.Cell>
            <Table.Cell>{order.status}</Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
  }
}

export const mapStateToProps = state => {
  return { ...state, allParcels: state.allParcels };
};

export const mapDispatchToProps = dispatch => {
  return {
    fetchParcels: function() {
      dispatch(fetchParcels());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
