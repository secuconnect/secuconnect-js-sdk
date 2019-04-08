
import ApiClient from '../ApiClient';
import LoyaltyMerchantcardsProductModel from './LoyaltyMerchantcardsProductModel';

/**
 * The SmartTransactionsIdent model module.
 * @module model/SmartTransactionsIdent
 */
export default class SmartTransactionsIdent {
    /**
     * Constructs a new <code>SmartTransactionsIdent</code>.
     * @alias module:model/SmartTransactionsIdent
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsIdent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsIdent} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsIdent} The populated <code>SmartTransactionsIdent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsIdent();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
            if (data.hasOwnProperty('merchantcard')) {
                obj['merchantcard'] = LoyaltyMerchantcardsProductModel.constructFromObject(data['merchantcard']);
            }
        }
        return obj;
    }

    /**
     * Object of smart transaction ident
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of smart transaction ident
     * @member {String} id
     */
    id = undefined;

    /**
     * Prefix
     * @member {String} prefix
     */
    prefix = undefined;

    /**
     * Name
     * @member {String} name
     */
    name = undefined;

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

    /**
     * Value
     * @member {String} value
     */
    value = undefined;

    /**
     * Valid
     * @member {Boolean} valid
     */
    valid = undefined;

    /**
     * Loyalty merchant card
     * @member {module:model/LoyaltyMerchantcardsProductModel} merchantcard
     */
    merchantcard = undefined;

}
