import React, { Component } from "react";
import axios from "axios";
import Contcat from "./compoment/contacts/Contcat";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case "UPDATE_CONTCAT":
      return {
        ...state,
        contacts: state.contacts.map(contcat =>
          contcat.id === action.payload.id
            ? (contcat = action.payload)
            : contcat
        )
      };

    default:
      return state;
  }
};
export default class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });

    // .then(res => this.setState({ contacts: res.data }));
  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
