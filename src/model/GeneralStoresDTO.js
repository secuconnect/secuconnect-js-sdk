
import ApiClient from '../ApiClient';
import Address from './Address';
import OpenHours from './OpenHours';





/**
* The GeneralStoresDTO model module.
* @module model/GeneralStoresDTO
* @version 2.0.0
*/
export default class GeneralStoresDTO {
    /**
    * Constructs a new <code>GeneralStoresDTO</code>.
    * @alias module:model/GeneralStoresDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralStoresDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresDTO} obj Optional instance to populate.
    * @return {module:model/GeneralStoresDTO} The populated <code>GeneralStoresDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralStoresDTO();

            
            
            

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('facebook_id')) {
                obj['facebook_id'] = ApiClient.convertToType(data['facebook_id'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('url_website')) {
                obj['url_website'] = ApiClient.convertToType(data['url_website'], 'String');
            }
            if (data.hasOwnProperty('photo_main')) {
                obj['photo_main'] = ApiClient.convertToType(data['photo_main'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], ['String']);
            }
            if (data.hasOwnProperty('open_hours')) {
                obj['open_hours'] = ApiClient.convertToType(data['open_hours'], [OpenHours]);
            }
        }
        return obj;
    }

    /**
    * New address
    * @member {module:model/Address} address
    */
    address = undefined;
    /**
    * New facebook id
    * @member {String} facebook_id
    */
    facebook_id = undefined;
    /**
    * New phone number
    * @member {String} phone
    */
    phone = undefined;
    /**
    * New url to general store website
    * @member {String} url_website
    */
    url_website = undefined;
    /**
    * New main photo
    * @member {String} photo_main
    */
    photo_main = undefined;
    /**
    * New photos
    * @member {Array.<String>} photo
    */
    photo = undefined;
    /**
    * Open hours in every day
    * @member {Array.<module:model/OpenHours>} open_hours
    */
    open_hours = undefined;








}


