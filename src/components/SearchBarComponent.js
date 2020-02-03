import React, { Component } from 'react';

export default class SearchBarComponent extends Component {

  handleChange = (evt) => {
    this.props.handleOnChange(evt.target.value)
  }

  render() {

    return (
    <div className="ui input fluid"> 
        <input onChange={this.handleChange} autoComplete="off" placeholder="Search Term" type="text" name="searchTerm"/>
    </div>
    );
  }
}
