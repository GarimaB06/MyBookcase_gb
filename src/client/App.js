// import React from 'react'
import BookContainer from './components/BookContainer.jsx'
import Header from './components/Header.jsx'
import React, { useState } from 'react'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import './stylesheets/styles.scss'

import { useSelector, useDispatch } from 'react-redux'
import { setBooks } from './redux/bookSlice'
import { setUser } from './redux/userSlice'

//defining string keywords to determine the state of our app
export const CURRENT_SCREEN_MAP = {
  login: 'login',
  createUser: 'createUser',
  bookContainer: 'bookContainer',
}

const App = () => {
  //setting the current state to be login
  // const [currentScreen, setCurrentScreen] = useState(CURRENT_SCREEN_MAP.login)
  const [currentScreen, setCurrentScreen] = useState(CURRENT_SCREEN_MAP.login)

  const dispatch = useDispatch()
  // const setBooks = () => {dispatch(setBooks())};
  const initState = useSelector((state) => state.book.bookData)
  // console.log('app')

  return (
    // <div>
    //   <Header />
    //   <BookContainer />
    // </div>

    <div className="app-page">
      {/* if the current screen state is createUser, we render the createUser component*/}
      {currentScreen === CURRENT_SCREEN_MAP.createUser && (
        <CreateUser setCurrentScreen={setCurrentScreen} />
      )}
      {/* if the current screen state is login, we render the login component*/}
      {currentScreen === CURRENT_SCREEN_MAP.login && (
        <Login
          setCurrentScreen={setCurrentScreen}
          setBooks={(pl) => dispatch(setBooks(pl))}
          setUser={(pl) => dispatch(setUser(pl))}
        />
      )}
      {/* if the current screen state in dashboard, we render the dashboard component */}
      {currentScreen === CURRENT_SCREEN_MAP.bookContainer && (
        <BookContainer setCurrentScreen={setCurrentScreen} />
      )}
      <footer className="footer"></footer>
    </div>
  )
}

export default App
