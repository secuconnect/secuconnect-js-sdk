
import ApiClient from '../ApiClient';





/**
* The ProductInstanceID model module.
* @module model/ProductInstanceID
*/
export default class ProductInstanceID {
    /**
    * Constructs a new <code>ProductInstanceID</code>.
    * Product instance id, uniquely identifying instance of Product
    * @alias module:model/ProductInstanceID
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProductInstanceID</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductInstanceID} obj Optional instance to populate.
    * @return {module:model/ProductInstanceID} The populated <code>ProductInstanceID</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInstanceID();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * ID of instance
    * @member {String} id
    */
    id = undefined;








}


