
import ApiClient from '../ApiClient';





/**
* The GeneralStoresDTOType model module.
* @module model/GeneralStoresDTOType
* @version 2.0.0
*/
export default class GeneralStoresDTOType {
    /**
    * Constructs a new <code>GeneralStoresDTOType</code>.
    * @alias module:model/GeneralStoresDTOType
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralStoresDTOType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresDTOType} obj Optional instance to populate.
    * @return {module:model/GeneralStoresDTOType} The populated <code>GeneralStoresDTOType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralStoresDTOType();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Type
    * @member {String} type
    */
    type = undefined;








}


