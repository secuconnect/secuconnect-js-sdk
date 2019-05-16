import { Environments } from "../StompGlobals";
import BrowserSocket from "../socket/BrowserSocket";
import NodeSocket from "../socket/NodeSocket";

export default class SocketProvider {

    constructor(host, port, vhost, debugMode) {
        this.host = host;
        this.port = port;
        this.vhost = vhost;
        this.debugMode = debugMode;
    }

    createSocket(env) {
		switch (env) {
			case Environments.NODE:
				return new NodeSocket(this.host, this.port, this.vhost, this.debugMode);
			default: // defaults to browser env
				return new BrowserSocket(this.host, this.port, this.vhost, this.debugMode);
		}
    }
}