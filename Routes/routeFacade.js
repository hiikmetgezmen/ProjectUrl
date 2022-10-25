import urlDirectRoute from './urlDirectRoute.js';
import urlRoute from './urlRoute.js';

class facade{
    constructor()
    {
    this.urlDirectRoute = urlDirectRoute;
    this.urlRoute = urlRoute;
    }
}

const facadeMethod = new facade();

export default facadeMethod;