import StompClient from "../StompClient";
import ApiClient from "../../ApiClient";
import SmartTransactionsProductModel from "../../model/SmartTransactionsProductModel";
import { ResponseStatus, StompFrameCommands } from "../StompGlobals";

export default class StompSmartTransactionsApi {
    constructor(stompClient) {
        if (stompClient instanceof StompClient) {
            this.destination = ["/exchange/connect.api/api:", ":Smart.Transactions"];
            this.stompClient = stompClient;
            this.connected = this.stompClient.connect();
        } else {
            throw 'StompSmartTransactionsApi requires StompClient class';
        }
    }

    addTransaction(smartTransactionProperties) {
        return new Promise((resolve, reject) => {
            this.connected.then((connectedFrame) => {
                this.stompClient.sendMessage(
                    this.destination[0] + 'add' + this.destination[1],
                    JSON.stringify({
                        'data': smartTransactionProperties}
                    )
                );
    
                this.stompClient.setMessageListener((frame) => {
                    let response = JSON.parse(frame.body);

                    if (response.status === ResponseStatus.ok) {
                        let smartTransaction = ApiClient.convertToType(response.data, SmartTransactionsProductModel);
                        resolve(smartTransaction);
                    } else {
                        reject(response.error_details);
                    }
                });
            });
        });
    }

    updateTransaction(smartTransactionId, smartTransactionProperties) {
        return new Promise((resolve, reject) => {
            this.connected.then( () => {
                this.stompClient.sendMessage(
                    this.destination[0] + 'update' + this.destination[1],
                    JSON.stringify({
                        'pid': smartTransactionId,
                        'data': smartTransactionProperties
                    })
                );
    
                this.stompClient.setMessageListener((frame) => {
                    let response = JSON.parse(frame.body);

                    if (response.status === ResponseStatus.ok) {
                        let smartTransaction = ApiClient.convertToType(response.data, SmartTransactionsProductModel);
                        resolve(smartTransaction);
                    } else {
                        reject(response.error_details);
                    }
                });
            });
        });
    }

    startTransaction(smartTransactionId, paymentMethod) {
        return new Promise((resolve, reject) => {
            this.connected.then( () => {
                this.stompClient.sendMessage(
                    this.destination[0] + 'update' + this.destination[1] + 'Start',
                    JSON.stringify({
                        'pid': smartTransactionId,
                        'sid': paymentMethod
                    })
                );
    
                this.stompClient.setMessageListener((frame) => {
                    let response = JSON.parse(frame.body);

                    if (response.status === ResponseStatus.ok) {
                        let smartTransaction = ApiClient.convertToType(response.data, SmartTransactionsProductModel);
                        resolve(smartTransaction);
                    } else {
                        reject(response.error_details);
                    }
                });
            });
        });
    }

    preTransaction(smartTransactionId) {
        return new Promise((resolve, reject) => {
            this.connected.then( () => {
                this.stompClient.sendMessage(
                    this.destination[0] + 'update' + this.destination[1] + 'Pretransaction',
                    JSON.stringify({
                        'pid': smartTransactionId
                    })
                );
    
                this.stompClient.setMessageListener((frame) => {
                    let response = JSON.parse(frame.body);

                    if (response.status === ResponseStatus.ok) {
                        let smartTransaction = ApiClient.convertToType(response.data, SmartTransactionsProductModel);
                        resolve(smartTransaction);
                    } else {
                        reject(response.error_details);
                    }
                });
            });
        });
    }
}
