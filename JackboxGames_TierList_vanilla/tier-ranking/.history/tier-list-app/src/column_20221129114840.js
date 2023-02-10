import React from 'react';
import styled from 'styled-components';

export default class column extends React.Component {
  render() {
    return this.props.column.title;
  }
}