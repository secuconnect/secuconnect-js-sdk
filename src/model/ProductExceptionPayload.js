
import ApiClient from '../ApiClient';





/**
* The ProductExceptionPayload model module.
* @module model/ProductExceptionPayload
*/
export default class ProductExceptionPayload {
    /**
    * Constructs a new <code>ProductExceptionPayload</code>.
    * Payload of exceptions returned by API
    * @alias module:model/ProductExceptionPayload
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProductExceptionPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProductExceptionPayload} obj Optional instance to populate.
    * @return {module:model/ProductExceptionPayload} The populated <code>ProductExceptionPayload</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductExceptionPayload();

            
            
            

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('error_details')) {
                obj['error_details'] = ApiClient.convertToType(data['error_details'], 'String');
            }
            if (data.hasOwnProperty('error_user')) {
                obj['error_user'] = ApiClient.convertToType(data['error_user'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('supportId')) {
                obj['supportId'] = ApiClient.convertToType(data['supportId'], 'String');
            }
        }
        return obj;
    }

    /**
    * Request status (always equals to 'error')
    * @member {String} status
    */
    status = undefined;
    /**
    * Error type identifier
    * @member {String} error
    */
    error = undefined;
    /**
    * Error details
    * @member {String} error_details
    */
    error_details = undefined;
    /**
    * Error details in German
    * @member {String} error_user
    */
    error_user = undefined;
    /**
    * HTTP code corresponding to error
    * @member {String} code
    */
    code = undefined;
    /**
    * ID by which support team can relate error with action(s) that caused it
    * @member {String} supportId
    */
    supportId = undefined;








}


