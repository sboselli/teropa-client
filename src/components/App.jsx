import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Terminator', 'Blow');
const tally = Map({'Terminator': 5, 'Blow': 4});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});