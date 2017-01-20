import { compose, logger, hapi } from 'appi'
import { staticFilesServer } from './modules'

const env = {}

/**
 * Initializes application.
 * @returns {App} App instance
 */
export async function composeApp() {

    return await compose([
        {
            component: env,
            name: 'env',
            deps: [],
        },
        {
            component: logger,
            deps: [ env ],
        },
        {
            component: hapi,
            deps: [ logger, env ],
        },
        {
            component: staticFilesServer,
            deps: [ hapi, logger ],
        },
    ])

}


