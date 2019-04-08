import React, { Component } from "react";
import Calendar from "./Components/Calendar";

class App extends Component {
  render() {
    return (
      <div className="container calender-box">
        <div className="row">
          <div className="col text-center">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
