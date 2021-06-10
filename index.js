const receivesAFunction = (callBack) => {
    return callBack()
}

const returnsANamedFunction = () => {
    const family = () => {
        return "Sara, Isaiah, and Nora"
    } 
    return family
}


const returnsAnAnonymousFunction = () => {
    return function() {'Who is this?'}
}
