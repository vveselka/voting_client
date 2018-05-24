export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action, 1, 2);
  }

  return next(action);
};
