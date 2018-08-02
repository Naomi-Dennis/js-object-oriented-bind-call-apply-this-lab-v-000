function justInvoke(callback){
    return callback.bind(window)
}
