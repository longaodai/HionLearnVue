/* import the fontawesome core */
import {
    library
} from '../../../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
    FontAwesomeIcon
} from '../../../node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret
} from '../../../node_modules/@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

export default function registerFortAwesome(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)

    return app
}