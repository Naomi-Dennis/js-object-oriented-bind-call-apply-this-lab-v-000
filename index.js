function justInvoke(callback){
    return callback.call(window)
}
function setThisWithCall(callback, scope, value){
  return callback.call(scope, value)
}
