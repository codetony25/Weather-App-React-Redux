import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search-bar';
import ForcastList from '../containers/forcast-list';
import Fade from 'react-addons-css-transition-group';

export default class App extends Component {
  render() {
    return (
      <div>
      <Fade transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
				<SearchBar />
				<ForcastList />
			</Fade>
     	</div>
    );
  }
}