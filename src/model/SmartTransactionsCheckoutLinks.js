
import ApiClient from '../ApiClient';

/**
 * The SmartTransactionsCheckoutLinks model module.
 * @module model/SmartTransactionsCheckoutLinks
 */
export default class SmartTransactionsCheckoutLinks {
    /**
     * Constructs a new <code>SmartTransactionsCheckoutLinks</code>.
     * @alias module:model/SmartTransactionsCheckoutLinks
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsCheckoutLinks</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsCheckoutLinks} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsCheckoutLinks} The populated <code>SmartTransactionsCheckoutLinks</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsCheckoutLinks();
            
            
            
            if (data.hasOwnProperty('url_success')) {
                obj['url_success'] = ApiClient.convertToType(data['url_success'], 'String');
            }
            if (data.hasOwnProperty('url_failure')) {
                obj['url_failure'] = ApiClient.convertToType(data['url_failure'], 'String');
            }
            if (data.hasOwnProperty('url_abort')) {
                obj['url_abort'] = ApiClient.convertToType(data['url_abort'], 'String');
            }
            if (data.hasOwnProperty('url_error')) {
                obj['url_error'] = ApiClient.convertToType(data['url_error'], 'String');
            }
            if (data.hasOwnProperty('url_checkout')) {
                obj['url_checkout'] = ApiClient.convertToType(data['url_checkout'], 'String');
            }
        }
        return obj;
    }

    /**
     * Success URL
     * @member {String} url_success
     */
    url_success = undefined;

    /**
     * Failure URL
     * @member {String} url_failure
     */
    url_failure = undefined;

    /**
     * Abort URL
     * @member {String} url_abort
     */
    url_abort = undefined;

    /**
     * Error URL
     * @member {String} url_error
     */
    url_error = undefined;

    /**
     * Smart Checkout URL
     * @member {String} url_checkout
     */
    url_checkout = undefined;

}
