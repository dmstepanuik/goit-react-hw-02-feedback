import React, { Component } from 'react';

export default class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  //   property1 = 'property1';
  //   property2 = 'property2';
  //   static classProp1 = 'classProp1';
  //   static classArrow = () => console.log('I am  a classArrow');
  //   static classFoo() {}
  //   constructor() {
  //     super();
  //     Feedback.classArrow();
  //     this.prop3 = 'prop3';
  //   }
  //   foo = () => console.log('I am a foo');
  render() {
    return;
    <div>
      <h2>Please leave feedback</h2>
      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good</span>
          <span>Neutral</span>
        </li>
        <li>
          <span> </span>
          <span></span>
        </li>
        <li>
          <span> </span>
          <span></span>
        </li>
      </ul>
    </div>;
  }
}
