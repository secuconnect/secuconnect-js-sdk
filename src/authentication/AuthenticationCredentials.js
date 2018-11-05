export default class AuthenticationCredentials {
    getCredentials() {
        return this.credentials;
    }

    setCredentials(credentials) {
        this.credentials = credentials;
    }

    getUniqueKey() {
    }
}

AuthenticationCredentials.credentials = {};