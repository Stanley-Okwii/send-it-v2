import React, { Component} from "react";
import { Table } from "semantic-ui-react";
import TableContainer from "../containers/TableContainer";

export class ParcelTable extends Component {
  render() {
    return (
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Parcel</Table.HeaderCell>
            <Table.HeaderCell>Parcel ID</Table.HeaderCell>
            <Table.HeaderCell>Weight(Kgs)</Table.HeaderCell>
            <Table.HeaderCell>Price(Ugx)</Table.HeaderCell>
            <Table.HeaderCell>Recepient</Table.HeaderCell>
            <Table.HeaderCell>Pick up</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Current location</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <TableContainer />

        <Table.Footer fullWidth>
          <Table.Row />
        </Table.Footer>
      </Table>
    );
  }
}

export default ParcelTable;
