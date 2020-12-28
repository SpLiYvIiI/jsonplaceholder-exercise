import React from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import Comments from './Comments'
import {Card,Container} from 'react-bootstrap'



const Post = () => {
    const id = parseInt(useParams().id) 
    const posts = useSelector(state => state.posts)
    const post = posts.find(s => s.id === id)
    if(!post) return null
    else{
    return(
        <Container fluid>
        <div>
            <Card>
                <Card.Header>Post Number {post.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Title : {post.title}</Card.Title>
                    <Card.Text>
                    {post.body}
                    </Card.Text>
                </Card.Body>
            </Card>
            <h2 style={{textAlign: "center"}}>Comments</h2>
            <Comments id = {id}/>
        </div>
        </Container>
    )
    }
}

export default Post