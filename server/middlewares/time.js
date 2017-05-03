module.exports = function TimeMiddleware(opts={}) {
  return async function (ctx, next) {
    ctx.state.times = {}
    ctx.state.durations = {}
    ctx.time = time
    ctx.timeEnd = timeEnd
    await next()
  }

  function time(label) {
    if (this.state.times[label]) {
      this.log.warn("time() called for previously used label %s", label)
    }
    this.state.times[label] = new Date()
    return this.state.times[label]
  }

  function timeEnd(label) {
    let startTime = this.state.times[label]
    if (!startTime) {
      this.log.warn("timeEnd() called without time() for label %s", label)
    }
    let durationMs = new Date() - (startTime || 0)
    return {
      label, durationMs, msg: `#${label} took ${durationMs} ms`
    }
  }
}
