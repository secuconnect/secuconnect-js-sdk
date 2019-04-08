
import ApiClient from '../ApiClient';

/**
 * The PaymentInformation model module.
 * @module model/PaymentInformation
 */
export default class PaymentInformation {
    /**
     * Constructs a new <code>PaymentInformation</code>.
     * Payment information
     * @alias module:model/PaymentInformation
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentInformation} obj Optional instance to populate.
    * @return {module:model/PaymentInformation} The populated <code>PaymentInformation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentInformation();
            
            
            
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('bankname')) {
                obj['bankname'] = ApiClient.convertToType(data['bankname'], 'String');
            }
        }
        return obj;
    }

    /**
     * IBAN
     * @member {String} iban
     */
    iban = undefined;

    /**
     * BIC
     * @member {String} bic
     */
    bic = undefined;

    /**
     * Owner
     * @member {String} owner
     */
    owner = undefined;

    /**
     * Bank name
     * @member {String} bankname
     */
    bankname = undefined;

}
