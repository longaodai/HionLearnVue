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
    faFacebook,
    faGoogle,
    faTwitter
} from '../../../node_modules/@fortawesome/free-brands-svg-icons'

import {
    faBars,
    faCopyright
} from '../../../node_modules/@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)
library.add(faCopyright)
library.add(faFacebook)
library.add(faGoogle)
library.add(faTwitter)

export default function registerFortAwesome(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)

    return app
}