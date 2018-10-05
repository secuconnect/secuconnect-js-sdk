import StompClient from '../../src/stomp-client/StompClient';
import Environment from '../../src/stomp-client/environment/Environment';

import { EventEmitter } from "events";

describe('Stomp client testing', () => {

    // TODO: Add acquiring token from server
    const token = '...';
    const secureConnection = true;
    const host = 'connect-testing.secupay-ag.de';
    const debugMode = true;

    const reply_to = '/temp-queue/main';
    const correlation_id = '5687785';
    const base_destination = '/exchange/connect.api/api:get:Payment.Customers';
    const content_type = 'application/json';
    const ack = 'client-individual';

    let client = null;

    describe('Stomp on browser environment', async () => {
        const env = (new Environment()).BROWSER;

        beforeAll(() => {
            client = new StompClient(token, secureConnection, host, env, debugMode);
        });

        test('mytest', (done) => {
            client.setConnectedListener((frame) => {
                expect(frame.command).toBe('CONNECTED');
                done();
            });

            client.connect();
        });

        test('mytest', (done) => {
            client.setMessageListener((frame) => {
                expect(frame.command).toBe('MESSAGE');
                done();
            });

            client.sendMessage(base_destination, {
                'content-type': content_type,
                'reply-to': reply_to,
                'user-id': token,
                'correlation-id': correlation_id,
                'ack': ack,
            });
        });
    });

    describe('Stomp on node environment', async () => {
        const env = (new Environment()).NODE;

        beforeAll(() => {
            client = new StompClient(token, secureConnection, host, env, debugMode);
        });

        test('mytest', (done) => {
            client.setConnectedListener((frame) => {
                expect(frame.command).toBe('CONNECTED');
                done();
            });

            client.connect();
        });

        test('mytest', (done) => {
            client.setMessageListener((frame) => {
                expect(frame.command).toBe('MESSAGE');
                done();
            });

            client.sendMessage(base_destination, {
                'content-type': content_type,
                'reply-to': reply_to,
                'user-id': token,
                'correlation-id': correlation_id,
                'ack': ack,
            });
        });
    });
});