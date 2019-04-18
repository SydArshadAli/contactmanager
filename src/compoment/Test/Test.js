import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  // componentWillMount() {
  //   console.log("ComponentWillMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps");
  // }
  // static getDerivedStateFormProps(nextProps, perState) {
  //   return {
  //     test: "test"
  //   };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>
          <span className="text-danger">{title}</span>
          <p className="text">{body}</p>
        </h1>
      </div>
    );
  }
}

export default Test;
