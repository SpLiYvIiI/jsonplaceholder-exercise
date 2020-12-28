import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import postService from '../services/postService'



const Comments = ({id}) => {
    const [comments,setComments] = useState([])
    useEffect(()=>{
        postService.getPostComments(id).then(data =>{
            setComments(data)
        }).catch(err => {
            console.log('something went wrong')
        })
    },[id])
    return(
    <div>
        
        {comments.map(comment => {
            return(
            <Card key={comment.id}>
                <Card.Header>By : {comment.email}</Card.Header>
                <Card.Body>
                    <Card.Title>Name : {comment.name}</Card.Title>
                    <Card.Text>
                    {comment.body}
                    </Card.Text>
                </Card.Body>
            </Card>
            )
        })}
    </div>)
}

export default Comments