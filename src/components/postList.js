import React, { Component } from "react";

export class postList extends Component {
  render() {
    return (
      <div>
        {this.props.entry.map(element => (
          <div key={element.entryId}>
            <div style={likeContainer}>Likes: {element.like}</div>
            <img src={element.photo}></img>
            <p>{element.date}</p>
            <p>{element.time}</p>
            <p>{element.name}</p>
            <p>{element.message}</p>
            <div>
              <p
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

const likeContainer = {
  textAlign: "right",
  fontSize: '8px',
}


export default postList;
