
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';

/**
 * The PaymentContractsProductModel model module.
 * @module model/PaymentContractsProductModel
 */
export default class PaymentContractsProductModel {
    /**
     * Constructs a new <code>PaymentContractsProductModel</code>.
     * @alias module:model/PaymentContractsProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentContractsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentContractsProductModel} The populated <code>PaymentContractsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ProductInstanceUID.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of payment contract
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of payment contract
     * @member {String} id
     */
    id = undefined;

    /**
     * Payment contract
     * @member {module:model/ProductInstanceUID} parent
     */
    parent = undefined;

    /**
     * Is this a demo contract
     * @member {Boolean} demo
     */
    demo = undefined;

    /**
     * Created at date
     * @member {String} created
     */
    created = undefined;

    /**
     * Updated at date
     * @member {String} updated
     */
    updated = undefined;

}
