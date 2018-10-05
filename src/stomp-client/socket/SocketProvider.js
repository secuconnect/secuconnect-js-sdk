import Environment from "../environment/Environment";
import BrowserSocket from "../socket/BrowserSocket";
import NodeSocket from "../socket/NodeSocket";

export default class SocketProvider {

    constructor(secureConnection, host) {
        this.env = new Environment();
        this.secureConnection = secureConnection;
        this.host = host;
    }

    createSocket(env) {
		switch (env) {
			case this.env.NODE:
				return new NodeSocket(this.secureConnection, this.host, 61614, '');
			default: // defaults to browser env
				return new BrowserSocket(this.secureConnection, this.host, 15671, '/stomp/websocket');
		}
    }
}