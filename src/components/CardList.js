import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    //to have multiple lines in a return state rap in ()
  return (
      //jsx ensure to rap the js in a div
    <div>
      {
        //robots.map is used to iterate over robot array
        //use a unique while iterating to uniquely identify each item
        //javascript in jsx
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;
