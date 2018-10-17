import { Environments } from "../StompGlobals";
import BrowserSocket from "../socket/BrowserSocket";
import NodeSocket from "../socket/NodeSocket";

export default class SocketProvider {

    constructor(host, port, vhost) {
        this.host = host;
        this.port = port;
        this.vhost = vhost;
    }

    createSocket(env) {
		switch (env) {
			case Environments.NODE:
				return new NodeSocket(this.host, this.port, this.vhost);
			default: // defaults to browser env
				return new BrowserSocket(this.host, this.port, this.vhost);
		}
    }
}