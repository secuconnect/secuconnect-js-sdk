
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';





/**
* The SmartTransactionsMerchant model module.
* @module model/SmartTransactionsMerchant
*/
export default class SmartTransactionsMerchant {
    /**
    * Constructs a new <code>SmartTransactionsMerchant</code>.
    * @alias module:model/SmartTransactionsMerchant
    * @class
    * @implements module:model/ProductInstanceUID
    */

    constructor() {
        

        
        ProductInstanceUID.call(this);

        

        
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

            
            
            ProductInstanceUID.constructFromObject(data, obj);

            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
        }
        return obj;
    }

    /**
    * Company name
    * @member {String} companyname
    */
    companyname = undefined;


    // Implement ProductInstanceUID interface:
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







}


