import { StompFactory } from "../StompClient";
import { Environments } from "../StompGlobals";

export default class StompSmartTransactionsApi {

    constructor(authenticator, stompClient = null, environment = Environments.BROWSER) {
        this.destination = ["/exchange/connect.api/api:", ":Smart.Transactions"];
        this.authenticator = authenticator;

        if (stompClient != null && stompClient instanceof StompClient) {
            this.stompClient = stompClient;
            this.connected = this.stompClient.connect();
        } else {
            this.connected = new Promise((resolve) => {
                this.authenticator.getToken().then((token) => {
                    this.stompClient = StompFactory.getInstance(token.access_token, environment);
                    this.stompClient.connect()
                        .then((connectedFrame) => {
                            if (connectedFrame) {
                                resolve(connectedFrame);
                            } else {
                                reject('Connection error');
                            }
                        });
                });
            });
        }
    }

    getConnectedStompClient() {
        return this.connected.then(() => {
            return this.stompClient;
        });
    }

    addTransaction(smartTransactionProperties) {
        this.connected.then(() => {
            this.stompClient.sendMessage(
                this.destination[0] + 'add' + this.destination[1],
                JSON.stringify({
                    'data': smartTransactionProperties}
                )
            );
        });
    }

    updateTransaction(smartTransactionId, smartTransactionProperties) {
        this.connected.then( () => {
            this.stompClient.sendMessage(
                this.destination[0] + 'update' + this.destination[1],
                JSON.stringify({
                    'pid': smartTransactionId,
                    'data': smartTransactionProperties
                })
            );
        });
    }

    startTransaction(smartTransactionId, paymentMethod) {
        this.connected.then( () => {
            this.stompClient.sendMessage(
                this.destination[0] + 'add' + this.destination[1] + '.Start',
                JSON.stringify({
                    'pid': smartTransactionId,
                    'sid': paymentMethod
                })
            );
        });
    }

    preTransaction(smartTransactionId) {
        this.connected.then( () => {
            this.stompClient.sendMessage(
                this.destination[0] + 'add' + this.destination[1] + '.Pretransaction',
                JSON.stringify({
                    'pid': smartTransactionId
                })
            );
        });
    }
}
