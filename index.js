function invokeFunction(callback){
    return callback.bind(window)
}
