
import ApiClient from '../ApiClient';
import PrepaidItemsProductModel from './PrepaidItemsProductModel';





/**
* The PrepaidItemsList model module.
* @module model/PrepaidItemsList
*/
export default class PrepaidItemsList {
    /**
    * Constructs a new <code>PrepaidItemsList</code>.
    * @alias module:model/PrepaidItemsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PrepaidItemsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidItemsList} obj Optional instance to populate.
    * @return {module:model/PrepaidItemsList} The populated <code>PrepaidItemsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidItemsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PrepaidItemsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing prepaid items
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Prepaid/Items
    * @member {Array.<module:model/PrepaidItemsProductModel>} data
    */
    data = undefined;








}


