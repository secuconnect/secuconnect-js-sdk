
import ApiClient from '../ApiClient';





/**
* The PaymentTransactionsProductModelMerchant model module.
* @module model/PaymentTransactionsProductModelMerchant
*/
export default class PaymentTransactionsProductModelMerchant {
    /**
    * Constructs a new <code>PaymentTransactionsProductModelMerchant</code>.
    * Merchant information
    * @alias module:model/PaymentTransactionsProductModelMerchant
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModelMerchant</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModelMerchant} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModelMerchant} The populated <code>PaymentTransactionsProductModelMerchant</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsProductModelMerchant();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Type of product
    * @member {String} object
    */
    object = undefined;
    /**
    * Identifier of product
    * @member {String} id
    */
    id = undefined;
    /**
    * Type of merchant
    * @member {String} type
    */
    type = undefined;








}

