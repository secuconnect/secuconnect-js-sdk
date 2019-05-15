
import ApiClient from '../ApiClient';

/**
 * The PaymentTransactionsShippingUrl model module.
 * @module model/PaymentTransactionsShippingUrl
 */
export default class PaymentTransactionsShippingUrl {
    /**
     * Constructs a new <code>PaymentTransactionsShippingUrl</code>.
     * @alias module:model/PaymentTransactionsShippingUrl
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentTransactionsShippingUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsShippingUrl} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsShippingUrl} The populated <code>PaymentTransactionsShippingUrl</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsShippingUrl();
            
            
            
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * The url of the shipping information form
     * @member {String} url
     */
    url = undefined;

}
