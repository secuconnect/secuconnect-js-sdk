
import ApiClient from '../ApiClient';





/**
 * The SmartTransactionsMerchant model module.
 * @module model/SmartTransactionsMerchant
 */
export default class SmartTransactionsMerchant {
    /**
     * Constructs a new <code>SmartTransactionsMerchant</code>.
     * @alias module:model/SmartTransactionsMerchant
     * @class
     */

    constructor() {








    }

    /**
     * Constructs a <code>SmartTransactionsMerchant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartTransactionsMerchant} obj Optional instance to populate.
     * @return {module:model/SmartTransactionsMerchant} The populated <code>SmartTransactionsMerchant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsMerchant();





            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object type of instance
     * @member {String} object
     */
    object = undefined;
    /**
     * ID of instance
     * @member {String} id
     */
    id = undefined;
    /**
     * Company name
     * @member {String} companyname
     */
    companyname = undefined;








}


