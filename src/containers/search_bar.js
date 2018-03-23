import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; // get the action creator

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    //bring this out into the main class
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    //It is this statement that makes this component a container.
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }
  render(){
    return (
    <form onSubmit={this.onFormSubmit} className="input-group">
      <input 
      placeholder="Get a five day forcast in your favourite cities"
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange}
      />
      <span className='input-group-btn'>
      <button type="submit" className="btn btn-secondary">Search</button>
      </span>
    </form>
    );
  }
}

// Hook up action creator fetchweather into our container
function mapDispatchToProps(dispatch){
  //Make sure that the action creater flows down into the middleware and then the reducers.
  return bindActionCreators({fetchWeather}, dispatch);
}
// whenever we map dispatch to the props of our container we always put it in as the
// second parameter.
// When we map state to props we put it in as the first parameter
// This container dosen't care about state so we pass in null here.
// The end goal here is it allows us to call the action creater.
//we can now write this.props.fetchweather.
export default connect(null, mapDispatchToProps)(SearchBar);



