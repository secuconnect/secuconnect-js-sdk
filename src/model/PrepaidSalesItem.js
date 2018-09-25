
import ApiClient from '../ApiClient';





/**
* The PrepaidSalesItem model module.
* @module model/PrepaidSalesItem
* @version 2.0.0
*/
export default class PrepaidSalesItem {
    /**
    * Constructs a new <code>PrepaidSalesItem</code>.
    * @alias module:model/PrepaidSalesItem
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PrepaidSalesItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesItem} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesItem} The populated <code>PrepaidSalesItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidSalesItem();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Object of item
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of item
    * @member {String} id
    */
    id = undefined;
    /**
    * Item description
    * @member {String} description
    */
    description = undefined;
    /**
    * Item logo
    * @member {String} logo
    */
    logo = undefined;
    /**
    * Item type
    * @member {String} type
    */
    type = undefined;








}


