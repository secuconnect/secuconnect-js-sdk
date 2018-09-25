
import ApiClient from '../ApiClient';





/**
* The DocumentUploadsDTOContent model module.
* @module model/DocumentUploadsDTOContent
* @version 2.0.0
*/
export default class DocumentUploadsDTOContent {
    /**
    * Constructs a new <code>DocumentUploadsDTOContent</code>.
    * @alias module:model/DocumentUploadsDTOContent
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DocumentUploadsDTOContent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentUploadsDTOContent} obj Optional instance to populate.
    * @return {module:model/DocumentUploadsDTOContent} The populated <code>DocumentUploadsDTOContent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentUploadsDTOContent();

            
            
            

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }

    /**
    * Content
    * @member {String} content
    */
    content = undefined;








}


