import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import { indexRoute } from './apis/index/index.routes'
import session from 'express-session'
import { createClient } from 'redis'
import RedisConnect from 'connect-redis'
import {signupRoute} from './apis/sign-up/signup.route'
import{signinRoute} from './apis/sign-in/signin.route'
import {signOutRoute} from "./apis/sign-out/sign-out.route";

// import ratingRoute from "./apis/rating/rating.route";
import cardRoute from "./apis/card/card.route";
import ratingRoute from "./apis/rating/rating.route";
import listingRoute from './apis/listing/listing.route'
import { messageRoute } from './apis/Message/message.route'
import listingRouter from "./apis/listing/listing.route";
import ratingRouter from "./apis/rating/rating.route";
import {ProfileRoute} from "./apis/Profile/profile.route";
import {ImageUploadRouter} from "./apis/image-upload/image-upload.route";

const redisClient = createClient({ legacyMode: true, socket: { host: process.env.REDIS_HOST } })
redisClient.connect().catch(console.error)
const RedisStore = RedisConnect(session)

// The following class creates the app and instantiates the server
export class App {
    app: Application

    constructor (
        private readonly port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings (): void {
        this.app.set('port', this.port)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares (): void {
        const sessionConfig = {
            store: new RedisStore({ client: redisClient, host: process.env.REDIS_HOST, port: 6379 }),
            saveUninitialized: true,
            secret: process.env.SESSION_SECRET as string,
            resave: false

        }

        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig))
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes (): void {
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/sign-up', signupRoute)
        this.app.use('/apis/sign-in', signinRoute)
        this.app.use('/apis/sign-out', signOutRoute)
        this.app.use('/apis/rating', ratingRouter)
        this.app.use('/apis/listing', listingRouter)
        this.app.use('/apis/message', messageRoute)
        this.app.use('/apis/card', cardRoute)
        this.app.use('/apis/profile', ProfileRoute)
        this.app.use('/apis/image-upload', ImageUploadRouter)
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}