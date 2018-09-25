
import ApiClient from '../ApiClient';
import DocumentUploadsBaseProductModel from './DocumentUploadsBaseProductModel';





/**
* The DocumentUploadsProductModel model module.
* @module model/DocumentUploadsProductModel
* @version 2.0.0
*/
export default class DocumentUploadsProductModel {
    /**
    * Constructs a new <code>DocumentUploadsProductModel</code>.
    * @alias module:model/DocumentUploadsProductModel
    * @class
    * @implements module:model/DocumentUploadsBaseProductModel
    */

    constructor() {
        

        
        DocumentUploadsBaseProductModel.call(this);

        

        
    }

    /**
    * Constructs a <code>DocumentUploadsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentUploadsProductModel} obj Optional instance to populate.
    * @return {module:model/DocumentUploadsProductModel} The populated <code>DocumentUploadsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentUploadsProductModel();

            
            
            DocumentUploadsBaseProductModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Type
    * @member {String} type
    */
    type = undefined;
    /**
    * Name
    * @member {String} name
    */
    name = undefined;
    /**
    * Size
    * @member {Number} size
    */
    size = undefined;


    // Implement DocumentUploadsBaseProductModel interface:
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


