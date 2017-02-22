import React, { Component } from 'react';
import gql from 'graphql-tag';
// Help bond query to component
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li>
          {song.title}
        </li>
      );
    });
  }

  render() {
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
      title
    }
  }
`;

// Bond query to component
// Returns function thats called by SongList
export default graphql(query)(SongList);
