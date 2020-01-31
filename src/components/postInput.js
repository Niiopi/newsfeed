import React, { Component } from "react";

export class postInput extends Component {
  state = {
    userName: "",
    msgContent: ""
  };

  submitDefault = e => {
    e.preventDefault();
    if (this.state.msgContent === "") {
      return;
    } else {
      this.props.addPost(this.state.userName, this.state.msgContent);
    }
    this.setState({
      msgContent: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitDefault}>
          <div style={userContainer}>
            <select
              style={userList}
              onChange={e => this.setState({ userName: e.target.value })}
            >
              {this.props.user.map(element => (
                <option key={element.entryId} value={element.name}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
          <div style={textContainer}>
            <textarea
              rows="6"
              cols="50"
              style={textStyle}
              placeholder="What is on your mind ...?"
              onChange={e => this.setState({ msgContent: e.target.value })}
              value={this.state.msgContent}
            ></textarea>
          </div>
          <div style={btnContainer}>
            <button>Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const userContainer = {
  textAlign: "right",
  padding: "7px 0px",
  borderBottom: "1px solid darkgray",
  backgroundColor: "#4267B2"
};

const userList = {
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#4267B2",
  color: "white",
  marginRight: "15px"
};

const textContainer = {
  maxWidth: "100%",
};

const textStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  border: "none",
  resize: "none",
  fontSize: "10px"
};

const btnContainer = {
  textAlign: "right",
  padding: "7px 0px",
  marginBottom: "25px"
};

export default postInput;
