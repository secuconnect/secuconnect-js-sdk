
import ApiClient from '../ApiClient';





/**
* The ItemGroup model module.
* @module model/ItemGroup
*/
export default class ItemGroup {
    /**
    * Constructs a new <code>ItemGroup</code>.
    * @alias module:model/ItemGroup
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ItemGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemGroup} obj Optional instance to populate.
    * @return {module:model/ItemGroup} The populated <code>ItemGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemGroup();

            
            
            

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
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Object of item group
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of item group
    * @member {String} id
    */
    id = undefined;
    /**
    * Description
    * @member {String} description
    */
    description = undefined;
    /**
    * Logo
    * @member {String} logo
    */
    logo = undefined;
    /**
    * Enabled
    * @member {Boolean} enabled
    */
    enabled = undefined;








}


