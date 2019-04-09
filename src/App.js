import React, { Component } from "react";
import Calendar from "./Components/Calendar";

class App extends Component {
  render() {
    return (
      <div className="container calender-box">
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
