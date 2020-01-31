import React, { Component } from "react";

export class postList extends Component {
  render() {
    return (
      <div>
        <div style={postsHeader}>Posts</div>
        {this.props.entry.map(element => (
          <div key={element.entryId}>
            <div style={likeContainer}>
              <i class="far fa-thumbs-up"></i>
              {element.like}
            </div>
            <div>
              <div style={imgContainer}>
                <img src={element.photo}></img>
                <p style={nameStyle}>{element.name}</p>
              </div>
              <div style={dateStyle}>
                <p>{element.date}</p>
                <p>{element.time}</p>
              </div>
              <div>
                <p>{element.message}</p>
              </div>
            </div>
            <div style={intStyle}>
              <p
                style={likeStyle}
                data-id={element.entryId}
                onClick={e => this.props.addLike(e.target.dataset.id)}
              >
                Like
              </p>
              <p>Share</p>
              <p>Comment</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const postsHeader = {
  padding: "10px 0px",
  backgroundColor: "#4267B2",
  color: "white",
  fontsize: "15px",
  fontWeight: "bold"
}

const likeContainer = {
  textAlign: "right",
  fontSize: "8px",
  borderTop: "2px solid darkgray",
  padding: "3px 15px"
};

const dateStyle = {
  fontSize: "8px",
  paddingLeft: "35px",
  marginBottom: "15px"
};

const imgContainer = {
  display: "flex",
  height: "17px"
};

const nameStyle = {
  marginTop: "0px",
  paddingLeft: "7px",
  marginBottom: "0px",
  fontWeight: "bold",
  fontSize: "11px"
};

const intStyle = {
  display: "flex",
  justifyContent: "space-around",
  fontSize: "10px",
  color: "blue",
  borderTop: "1px solid lightgray",
  fontWeight: "bold"
};

const likeStyle = {
  cursor: "pointer"
};

export default postList;
