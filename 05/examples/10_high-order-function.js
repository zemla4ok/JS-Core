function myBind(func, context) {
  return function() {
    return func.apply(context);
  }
}