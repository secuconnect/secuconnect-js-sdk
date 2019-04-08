
import ApiClient from '../ApiClient';

/**
 * The BankAccountDescriptor model module.
 * @module model/BankAccountDescriptor
 */
export default class BankAccountDescriptor {
    /**
     * Constructs a new <code>BankAccountDescriptor</code>.
     * Bank account data like owner, iban, bic and bank name
     * @alias module:model/BankAccountDescriptor
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>BankAccountDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BankAccountDescriptor} obj Optional instance to populate.
    * @return {module:model/BankAccountDescriptor} The populated <code>BankAccountDescriptor</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankAccountDescriptor();
            
            
            
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
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
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

    /**
     * Purpose
     * @member {String} purpose
     */
    purpose = undefined;

}
