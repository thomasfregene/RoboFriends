import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

//to use state the component should be a class that extends react component
//states are usually defined in the parent component
class App extends Component {
  //state cna be used by defining it within a constructor
  constructor() {
      super()
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event)=>{
      //to updatestate
      this.setState({searchfield: event.target.value})
      //to connect the search to the cardlist
      const filteredRobots = this.state.robots.filter(robots=>{
          return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots); 
  }

  render() {
    return (
      <div className="tc">
        <h2>RoboFriends</h2>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
