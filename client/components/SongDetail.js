import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import getSong from '../queries/getSong';


class SongDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Song Detail</h3>

      </div>
    );
  }
}

export default graphql(getSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
