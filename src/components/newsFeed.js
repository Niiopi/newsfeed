import React, { Component } from "react";
import PostInput from "./postInput";
import PostList from "./postList";
import moment from "moment"

let counter = 14;

export class newsFeed extends Component {
  state = {
    user: [
      {
        name: "Choose User",
        id: 0
      },
      {
        name: "Antony",
        id: 1,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZP4FXzsfjjQ%2Fmaxresdefault.jpg&f=1&nofb=1"
      },
      {
        name: "Pikachu",
        id: 2,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpIRJy5hFU4c%2Fmaxresdefault.jpg&f=1&nofb=1"
      },
      {
        name: "Shazam",
        id: 3,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fispeakcomics.files.wordpress.com%2F2013%2F02%2F14_injusticeconceptart03.jpg&f=1&nofb=1"
      }
    ],

    entry: [
      {
        entryId: 10,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZP4FXzsfjjQ%2Fmaxresdefault.jpg&f=1&nofb=1",
        name: "Antony",
        date: "12/25/2019",
        time: "2:30 PM",
        message: "Merry Christmas!",
        like: 0
      },
      {
        entryId: 11,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fispeakcomics.files.wordpress.com%2F2013%2F02%2F14_injusticeconceptart03.jpg&f=1&nofb=1",
        name: "Shazam",
        date: "11/22/2019",
        time: "6:30 PM",
        message: "Shaaazzaammm!!",
        like: 0
      },
      {
        entryId: 12,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpIRJy5hFU4c%2Fmaxresdefault.jpg&f=1&nofb=1",
        name: "Pikachu",
        date: "11/15/2019",
        time: "11:17 AM",
        message: "Pika Pika!",
        like: 0
      },
      {
        entryId: 13,
        photo:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZP4FXzsfjjQ%2Fmaxresdefault.jpg&f=1&nofb=1",
        name: "Antony",
        date: "10/31/2019",
        time: "7:15 PM",
        message: "Happy Halloween",
        like: 0
      }
    ]
  };

  addPost = (name, newMsg) => {
    let entryPost = {};
    this.state.user.map(element => {
      if (element.name === name) {
        entryPost = {
          entryId: counter++,
          photo: element.photo,
          name: element.name,
          date: moment().calendar(),
          message: newMsg,
          like: 0
        };
      }
    });
    let updatedMsg = [entryPost, ...this.state.entry];
    this.setState({ entry: updatedMsg });
  };

  addLike = PostId => {
    this.state.entry.map(element => {
      if (parseInt(PostId) === element.entryId) {
        element.like = element.like + 1;
      }
    });
    let postCopy = [...this.state.entry];
    this.setState({ entry: postCopy });
  };

  render() {
    return (
      <div>
        <PostInput user={this.state.user} addPost={this.addPost} />
        <PostList entry={this.state.entry} addLike={this.addLike} />
      </div>
    );
  }
}

export default newsFeed;
