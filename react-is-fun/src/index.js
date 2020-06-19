import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Library from './Library'

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
};

/*const title = React.createElement(
  'h1',
  {id : 'title', className : 'header', style : style},
  'Hello World'
);*/



/*ReactDOM.render(
  title,
  document.getElementById('root')
);*/

let skiData = {
  total : 50,
  powder : 20,
  backcountry : 10,
  goal : 100
}

const DayCont=(props) => {

  return (
    <section>
        SkiDay {props.total}
      </section>
  )
}

class Message extends Component {
  render() {
    console.log(this.props);
    return (
      
      <div>
        <h1 style={{color : this.props.color}}> 
          {this.props.msg}
        </h1>
        <p>I'll be back in {this.props.minutes} minutes</p>
      </div>
    )
  }
};

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  render() {
    console.log(this.props);
    const {total} = this.props;
    return (
      <section>
        SkiDay {this.getPercent(total)}
      </section>
    )
  }
};

/*ReactDOM.render(
  <div style = {style}> 
    <h1>Hello World Again</h1>
  </div>,
  document.getElementById('root')
);*/

let bookList = [
  {"title":"NewBook", "author":"Pradipta"},
  {"title":"LatestBook", "author":"Arpita", "pages":100},
  {"title":"BrandNewBook", "author":"Adwitiya", "pages":500},
  {"title":"BrandNew Another Book", "author":"Pallab", "pages":600}
]




class ColorForm extends Component {
  state = { value : ''}
  newColor = e =>
    this.setState({value : e.target.value})

  submit = e => {
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
  }
  render() {
    return(
      <form onSubmit={this.submit}>
        <label>Color: <input type="color" onChange={this.newColor}/></label>
        <button>Submit</button>
      </form>
    )
  }
}



ReactDOM.render(
  //<Message msg="how are you?" age={50} color="blue" minutes={50}/>,
  //<SkiDayCounter 
  //total = {skiData.total}/>,
  <Library books={bookList}/>,
  //<ColorForm/>,
  document.getElementById('root')
);



