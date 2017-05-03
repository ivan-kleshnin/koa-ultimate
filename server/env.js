let {env} = process

let abort = (field) => { throw Error("process.env." + field + " is not set") }

// TODO tcomb validation

env.NODE_ENV || abort("NODE_ENV")
env.LOG_LEVEL || abort("LOG_LEVEL")
