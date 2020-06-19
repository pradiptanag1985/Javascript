import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'

class Library extends Component {
    static defaultProps = {
      books : [
        {"title" : "Def", "author" : "auth", "pages":1000}
      ]
    }
  
    state = {open: true, 
            freeBookmark : true, 
            hiring : true,
            data : [],
            loading : false
          }
  
    componentDidMount() {
      console.log("Component mounted!!!")
      this.setState({loading : true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading:false}))
    }
  
    componentDidUpdate() {
      console.log("Update done!!!")
    }
    
    toggleState = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
    render() {
      console.log(this.state)
      const { books } = this.props
      return(
        <div>
          {this.state.hiring ? <Hiring/> : <NotHiring/> }
  
          {this.state.loading
          ? "Loading....."
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                    <h4>{product.name}</h4>
                    <img alt={product.name} src={product.image} height={100}/>
                  </div>
                )
              })}
            </div>
          }
          <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
          {books.map(
            (book, i) => 
            <Book
              key ={i}
              title = {book.title} 
              author = {book.author} 
              pages =  {book.pages}
              freeBookmark = {this.state.freeBookmark} />
          )}
          <button onClick={this.toggleState}>Change State</button>
        </div>
      )
    }
  }

  Library.propTypes = {
    books : PropTypes.array
  }
  
  Book.propTypes = {
    title : PropTypes.string,
    author : PropTypes.string,
    pages : PropTypes.number,
    freeBookmark : PropTypes.bool
  }

export default Library