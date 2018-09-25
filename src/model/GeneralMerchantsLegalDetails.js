
import ApiClient from '../ApiClient';





/**
* The GeneralMerchantsLegalDetails model module.
* @module model/GeneralMerchantsLegalDetails
* @version 2.0.0
*/
export default class GeneralMerchantsLegalDetails {
    /**
    * Constructs a new <code>GeneralMerchantsLegalDetails</code>.
    * @alias module:model/GeneralMerchantsLegalDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsLegalDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsLegalDetails} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsLegalDetails} The populated <code>GeneralMerchantsLegalDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsLegalDetails();

            
            
            

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
    * Url
    * @member {String} url
    */
    url = undefined;
    /**
    * Type
    * @member {String} type
    */
    type = undefined;
    /**
    * Content type
    * @member {String} content_type
    */
    content_type = undefined;
    /**
    * Language
    * @member {String} language
    */
    language = undefined;








}


