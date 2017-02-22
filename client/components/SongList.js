import React, { Component } from 'react';
import gql from 'graphql-tag';
// Help bond query to component
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    console.log(this.props);

    return (
      <div>SongList</div>
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
