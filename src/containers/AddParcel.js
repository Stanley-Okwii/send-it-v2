import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";

import { postParcel } from "../../src/actions/parcels";

export class AddParcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: 0,
      price: 0,
      receipient: "",
      pickup: "",
      destination: ""
    };
  }

  onTextChange = (_event, { name, value }) => {
    if (name) {
      if (name === "parcelName") {
        this.setState({ name: value });
      } else if (name === "weight") {
        const pricePerKilogram = 3000;
        const estimatedPrice = Number(value) * pricePerKilogram;
        this.setState({
          weight: value,
          price: estimatedPrice
        });
      } else if (name === "Recipient") {
        this.setState({ receipient: value });
      } else if (name === "Pickup location") {
        this.setState({ pickup: value });
      } else if (name === "destination") {
        this.setState({ destination: value });
      }
    }
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <Form.Input
            name="parcelName"
            label="Parcel Name"
            value={this.state.name}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="weight"
            label="Weight (kg)"
            placeholder="1"
            type="number"
            value={this.state.weight}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="Price"
            label="Price (ugx)"
            placeholder="Estimate delivery cost"
            value={this.state.price}
            readOnly
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="Recipient"
            label="Recipient"
            placeholder="Person to receive delivery"
            value={this.state.receipient}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="Pickup location"
            label="Pickup location"
            placeholder="Pick up location"
            value={this.state.pickup}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            name="destination"
            label="Destination"
            placeholder="Destination"
            value={this.state.destination}
            onChange={this.onTextChange}
          />
        </Form.Field>
        <Button
          id="post-parcel"
          color="teal"
          loading={this.props.loadingParcel}
          onClick={() => {
            const data = {
              destination: this.state.destination,
              parcel: this.state.name,
              pickup_location: this.state.pickup,
              price: this.state.price,
              receiver: this.state.receipient,
              weight: this.state.weight
            };
            this.props.postParcel(data);
          }}
        >
          SAVE
        </Button>
      </Form>
    );
  }
}

export const mapStateToProps = state => {
  return {
    ...state,
    loadingParcel: state.loadingParcel
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    postParcel: function(data) {
      dispatch(postParcel(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddParcel);
