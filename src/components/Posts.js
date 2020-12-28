import React from 'react'
import {useSelector} from 'react-redux'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Posts  = () => {
    const posts = useSelector(state => {
        if(state.filter === '') return state.posts
        else return state.posts.filter(post => post.title.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1)
    })
    return(
    <div>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => {
              return(
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td><Link to={`/details/${post.id}`}>details</Link></td>
                </tr>
              )
            })
          }
        </tbody>
        </Table>
    </div>
    )
}


export default Posts