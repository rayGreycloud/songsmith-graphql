import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/getSong';


class SongDetail extends Component {
  render() {
    return (
      <div><h3>Song Detail</h3></div>
    );
  }
}

export default graphql(query)(SongDetail);
