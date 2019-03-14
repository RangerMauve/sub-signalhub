module.exports = function (instance, prefix) {
  return new SubSignalhub(instance, prefix)
}

class SubSignalhub {
  constructor(instance, prefix) {
    this._instance = instance
    this._prefix = prefix
    this.app = instance.app + this._prefix;
  }

  subscribe(channel) {
    return this._instance.subscribe(this._prefix + channel)
  }

  broadcast(channel, message, cb) {
    return this._instance.broadcast(this._prefix + channel, message, cb)
  }

  close (cb) {
    return this._instance.close(cb)
  }
}
