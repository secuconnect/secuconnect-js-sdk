
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionExternalInvoicePdfDocument model module.
* @module model/SecupayTransactionExternalInvoicePdfDocument
*/
export default class SecupayTransactionExternalInvoicePdfDocument {
    /**
    * Constructs a new <code>SecupayTransactionExternalInvoicePdfDocument</code>.
    * Information about the saved document
    * @alias module:model/SecupayTransactionExternalInvoicePdfDocument
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionExternalInvoicePdfDocument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionExternalInvoicePdfDocument} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionExternalInvoicePdfDocument} The populated <code>SecupayTransactionExternalInvoicePdfDocument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionExternalInvoicePdfDocument();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Document File ID
    * @member {String} id
    */
    id = undefined;
    /**
    * The MIME Type
    * @member {String} mime_type
    */
    mime_type = undefined;
    /**
    * The file name
    * @member {String} name
    */
    name = undefined;
    /**
    * The size of the file in bytes
    * @member {Number} size
    */
    size = undefined;
    /**
    * The download-url to this file
    * @member {String} url
    */
    url = undefined;








}


