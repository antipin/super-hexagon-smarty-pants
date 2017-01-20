(function(global) {

    const app = Object.create(null)

    app.init = function() {

        const socket = io()
        const allowedKeys = [ 'ArrowLeft', 'ArrowRight' ]
        let currentKey = null
        const buttonsMap = {
            'ArrowLeft': document.querySelector('.controller__button_left'),
            'ArrowRight': document.querySelector('.controller__button_right'),
        }

        socket.on('key', (message) => {

            console.log('accept: ', message)

        })

        document.addEventListener('keydown', (event) => {

            if (allowedKeys.includes(event.key) === true && currentKey !== event.key) {

                currentKey = event.key

                buttonsMap['ArrowLeft'].classList.remove('controller__button_is-active')
                buttonsMap['ArrowRight'].classList.remove('controller__button_is-active')
                buttonsMap[event.key].classList.add('controller__button_is-active')

                socket.emit('keydown', { key: event.key })

            }

        })

        document.addEventListener('keyup', (event) => {

            if (allowedKeys.includes(event.key) === true && currentKey === event.key) {

                currentKey = null

                buttonsMap['ArrowLeft'].classList.remove('controller__button_is-active')
                buttonsMap['ArrowRight'].classList.remove('controller__button_is-active')

                socket.emit('keyup', { key: event.key })

            }

        })

    }

    global.app = app
    global.onload = app.init

}(window))
