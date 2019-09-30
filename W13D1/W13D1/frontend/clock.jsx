import React from 'react';

class Clock extends React.Component{

constructor(props){
  super(props);
  this.state = {date: new Date()};

  this.tick = this.tick.bind(this);
}

tick() {
  this.setState({date: new Date()});
}

componentDidMount() {
  this.clock = setInterval(this.tick, 1000);
}

componentWillUnmount(){
  clearInterval(this.clock);
}

render(){
  
  return <div class = "clock-holder">
      <h1>Clock</h1>
      <div class="clock">
        <p>Time:</p>
        <p>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()} </p> 
      </div>
      <div class="date">
        <p>Date:</p>
        <p>{this.state.date.toString().slice(0, 15)} </p> 
      </div>
    </div>
}

};






export default Clock;