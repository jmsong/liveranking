import React, { Component } from "react";
import { ListItem, ErrorBoundary } from "./";

export class List extends Component {
  render() {
    var streamers = !this.props.streamers
      ? []
      : this.props.streamers.map((streamer, index) => {
          return (
            <ListItem
              key={streamer.userID}
              index={index + 1}
              id={streamer.userID}
              avatar_url={streamer.picture}
              name={streamer.displayName}
              score={streamer.score}
            />
          );
        });

    return (
      <div>
        <ErrorBoundary>{streamers}</ErrorBoundary>
      </div>
    );
  }
}

export default List;
