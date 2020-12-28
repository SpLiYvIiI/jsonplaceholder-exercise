import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import {setSearchBy} from '../reducer/filterRerducer'
import {useDispatch,useSelector} from 'react-redux'



const Filter = () => {
    const dispatch = useDispatch();
    const searchVal = useSelector(state => state.filter) 
    return(
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text>Search posts by title</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder={"Enter Title"} onChange={({target})=>{dispatch(setSearchBy(target.value))}} value={searchVal}/>
    </InputGroup>
    )
}


export default Filter