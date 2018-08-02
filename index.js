function justInvoke(callback){
    return callback.call(window)
}
function setThisWithCall(callback, arg){
  return callback.call(window, arg)
}
