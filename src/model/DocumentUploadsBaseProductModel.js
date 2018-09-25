
import ApiClient from '../ApiClient';





/**
* The DocumentUploadsBaseProductModel model module.
* @module model/DocumentUploadsBaseProductModel
*/
export default class DocumentUploadsBaseProductModel {
    /**
    * Constructs a new <code>DocumentUploadsBaseProductModel</code>.
    * @alias module:model/DocumentUploadsBaseProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DocumentUploadsBaseProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentUploadsBaseProductModel} obj Optional instance to populate.
    * @return {module:model/DocumentUploadsBaseProductModel} The populated <code>DocumentUploadsBaseProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentUploadsBaseProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Object of document upload
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of document upload
    * @member {String} id
    */
    id = undefined;
    /**
    * Created at date
    * @member {Date} created
    */
    created = undefined;








}


