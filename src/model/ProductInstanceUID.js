
import ApiClient from '../ApiClient';





/**
* The ProductInstanceUID model module.
* @module model/ProductInstanceUID
*/
export default class ProductInstanceUID {
    /**
    * Constructs a new <code>ProductInstanceUID</code>.
    * Product name and instance id, uniquely identifying instance of Product
    * @alias module:model/ProductInstanceUID
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProductInstanceUID</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductInstanceUID} obj Optional instance to populate.
    * @return {module:model/ProductInstanceUID} The populated <code>ProductInstanceUID</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInstanceUID();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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








}


