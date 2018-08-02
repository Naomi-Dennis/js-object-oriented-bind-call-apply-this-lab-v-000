function justInvoke(callback){
    return callback.call(window)
}
function setThisWithCall(callback, scope, value){
  return callback.call(scope, value)
}
function setThisWithApply(callback, scope, args){
  return callback.apply(scope, args)
}
function returnNewFunctionOf(callback){
  return ((..args) => { callback["fred"]["name"] = args[0] }).bind(this)
}
