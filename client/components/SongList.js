import React, { Component } from 'react';
import gql from 'graphql-tag';
// Help bond query to component
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  // Create li for each song
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
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
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link> 
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
