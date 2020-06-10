import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>contact</h1>
        <div className="contact_static">
           <p></p> styles with static css
        </div>
      </>
    );
  }
}

/*
<div style = {{ color: 'red'}}>
  Hello react
</div>

<div className="jsxStyle">
  styles with
</div>

<style jsx>
{
  `
  .jsxStyled {
  color: blue
  }
 `
}
</style>




*/