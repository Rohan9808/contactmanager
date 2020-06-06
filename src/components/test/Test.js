import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  //ajax calls , https requests goes in this function
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  //   //checks whether state is updated or not
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   //checks whether state is updated or not
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
