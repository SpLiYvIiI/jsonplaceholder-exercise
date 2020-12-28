import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {initPosts} from './reducer/postsReducer'
import {Container,Navbar} from 'react-bootstrap'
import Posts from './components/Posts'
import Post from './components/Post'
import Filter from './components/Filter'
import {
  Switch, Route, BrowserRouter as Router,Link
} from "react-router-dom"

const App =  () =>{
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(initPosts())
  },[dispatch])
  return (
    <div>
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand >posts-app</Navbar.Brand>
    <Link to={`/`}>Home</Link>
    </Navbar>
    <Switch>
    <Route path="/details/:id">
      <Post />
    </Route>
    <Container>
    <Route path="/">
    <Filter />
    <Posts />
    </Route>
    </Container>
    </Switch>
    </Router>
    </div>
  )
}

export default App;
