import SockerIoServer from 'socket.io'

export async function socketServer(deps) {

    const { hapi, logger } = deps
    const log = logger.getLogger('socket-server')
    const io = new SockerIoServer(hapi.listener)

    io.on('connection', (socket) => {

        log.info('a user connected')

        socket.on('keydown', (message) => {

            log.info('keyDOWN: ', message)

        })

        socket.on('keyup', (message) => {

            log.info('keyUP: ', message)

        })

        socket.on('disconnect', () => {

            log.info('user disconnected')

        })

    })

    log.info('socketServer component successfully inited')

    return io

}

socketServer.componentName = 'socketServer'
