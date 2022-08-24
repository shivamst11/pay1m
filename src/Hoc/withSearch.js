/**
 * @format
 * @author Shivam Tripathi
 * @description Search Filter Hoc
 */

import React from 'react';
const withSearch = (WrappedComponent, data) => {
  class WithSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: data,
      };
    }

    onChangeText = txt => {
      this.setState({
        list: data.filter(item =>
          item.name.toLowerCase().includes(txt.toLowerCase()),
        ),
      });
    };

    render() {
      return (
        <WrappedComponent
          list={this.state.list}
          onChangeText={this.onChangeText}
        />
      );
    }
  }

  return WithSearch;
};

export default withSearch;
