const reducer = (state = '', action) => {
    switch(action.type){
        case 'SEARCH_BY' : return action.data;
        default: return state;
    }
}

export const setSearchBy = (searchBy)=>{
    return ({
        type : 'SEARCH_BY',
        data : searchBy
    })
}

export default reducer