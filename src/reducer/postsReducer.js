import postService from '../services/postService'

const reducer = (state = [],action) => {
    switch(action.type){
        case 'INIT_POSTS' : {
            return action.data
        }
        default : return state
    }
}

export const initPosts = () => {
    return async dispatch => {
        try{
            const posts = await postService.getAllPosts()
            dispatch({
                type : 'INIT_POSTS',
                data : posts
            })
        }catch(err){
            console.log('something went wrong')
        }
    }
} 

export default reducer