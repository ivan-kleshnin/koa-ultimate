let R = require("ramda")
let KoaPassport = require("koa-passport")
let {BasicStrategy} = require("passport-http")
let LocalStrategy = require("passport-local")
let GitHubStrategy = require("passport-github2")
// let FacebookStrategy = require("passport-facebook")
// let TwitterStrategy = require("passport-twitter")
let db = require("./db")
let {env} = process

KoaPassport.serializeUser((user, done) => {
  console.log("@ serializeUser")
  done(null, user.id)
})

KoaPassport.deserializeUser((req, id, done) => {
  console.log("@ deserializeUser", id)
  let user = R.find(R.whereEq({id}), db.users)
  done(null, user)
})

KoaPassport.use(new BasicStrategy(
  (username, password, done) => {
    console.log("@ BasicStrategy")
    let user = R.find(R.whereEq({username, password}), db.users)
    return done(null, user)
  }
))

KoaPassport.use(new LocalStrategy(
  (username, password, done) => {
    console.log("@ LocalStrategy")
    let user = R.find(R.whereEq({username, password}), db.users)
    return done(null, user)
  }
))

// TODO add profile unification
KoaPassport.use(new GitHubStrategy({
    clientID: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback", // TODO real URL
  },
  (accessToken, refreshToken, profile, done) => {
    profile.id = String(profile.id)
    let user = R.find(R.whereEq({id: profile.id}), db.users)
    if (!user) {
      user = profile
      db.users.push(user)
    }
    return done(null, user)
  }
))

// The same as GitHubStrategy because all use OAuth-2
// KoaPassport.use(new FacebookStrategy({
//     clientID: env.FACEBOOK_CLIENT_ID,
//     clientSecret: env.FACEBOOK_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback", // TODO real URL
//   },
//   (accessToken, refreshToken, profile, done) => {
//     return done(null, profile)
//   }
// ))
//
// KoaPassport.use(new TwitterStrategy({
//     consumerKey: env.TWITTER_CONSUMER_KEY,
//     consumerSecret: env.TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://localhost:3000/auth/twitter/callback", // TODO real URL
//   },
//   (accessToken, refreshToken, profile, done) => {
//     return done(null, profile)
//   }
// ))
