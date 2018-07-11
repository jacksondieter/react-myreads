import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    listBooks:[],
    searchBooks:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({listBooks:books})
    })
  }

  render() {
    return (
      <div>

      <Route exact path="/" render={() => (  
          <MainPage
          books={this.state.listBooks}
          />
        )}

      />
        
      <Route path="/search" render={({history}) => (
          <SearchBooks
          books={this.state.searchBooks}
          />
        )}  />
      </div>
    )
  }
}

export default BooksApp
