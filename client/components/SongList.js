import React, { Component } from 'react';
import gql from 'graphql-tag';
// Help bond query to component
import { graphql } from 'react-apollo';

class SongList extends Component {
  // Create li for each song
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      );
    });
  }

  render() {
    // Wait until data loaded before attempting list render
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.renderSongs()}
      </div>
    );
  }
}

// Define query for component
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

// Bond query to component
// Returns function thats called by SongList
export default graphql(query)(SongList);
