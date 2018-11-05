import Printer from "./Printer";

export default class ImitationDevicePrinter extends Printer {
    /**
     * Function to print user code for imitation device from an obtained token.
     *
     * @param token
     */
    printUserCode(token) {
        if (token.user_code === undefined || token.verification_url === undefined) {
            console.log('Something went wrong. Please try to obtain user code again.');
        } else {
            console.log(
                'Your user code is: ' + token.user_code + '\n' +
                'Your verification url is: ' + token.verification_url + '\n'
            );
        }
    }
}
