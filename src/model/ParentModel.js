
import ApiClient from '../ApiClient';





/**
* The ParentModel model module.
* @module model/ParentModel
*/
export default class ParentModel {
    /**
    * Constructs a new <code>ParentModel</code>.
    * @alias module:model/ParentModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ParentModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ParentModel} obj Optional instance to populate.
    * @return {module:model/ParentModel} The populated <code>ParentModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParentModel();

            
            
            

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
    * Object of parent
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of parent
    * @member {String} id
    */
    id = undefined;
    /**
    * Type of parent
    * @member {String} type
    */
    type = undefined;








}


