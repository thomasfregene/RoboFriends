import React, { Component } from "react";
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";

import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots)
  } 
}
//to use state the component should be a class that extends react component
//states are usually defined in the parent component
class App extends Component {
  //react lifecycle
  componentDidMount() {
   this.props.onRequestRobots();
  }

 

  render() {
    //destructuring this.state
    const {searchField, onSearchChange,robots, isPending} = this.props;
    //to connect the search to the cardlist(state management)
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    //using teanry
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

//connect is a higher other function i.e it returns another function
export default connect(mapStateToProps, mapDispatchToProps) (App);
