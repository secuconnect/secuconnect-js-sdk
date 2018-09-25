
import ApiClient from '../ApiClient';
import AddressComponents from './AddressComponents';
import AssignedBy from './AssignedBy';
import InvitedBy from './InvitedBy';
import OpenHours from './OpenHours';
import ProductInstanceUID from './ProductInstanceUID';





/**
* The GeneralStoresProductModel model module.
* @module model/GeneralStoresProductModel
*/
export default class GeneralStoresProductModel {
    /**
    * Constructs a new <code>GeneralStoresProductModel</code>.
    * @alias module:model/GeneralStoresProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralStoresProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresProductModel} obj Optional instance to populate.
    * @return {module:model/GeneralStoresProductModel} The populated <code>GeneralStoresProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralStoresProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('id_old')) {
                obj['id_old'] = ApiClient.convertToType(data['id_old'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('facebook_id')) {
                obj['facebook_id'] = ApiClient.convertToType(data['facebook_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('address_components')) {
                obj['address_components'] = ApiClient.convertToType(data['address_components'], [AddressComponents]);
            }
            if (data.hasOwnProperty('address_formatted')) {
                obj['address_formatted'] = ApiClient.convertToType(data['address_formatted'], 'String');
            }
            if (data.hasOwnProperty('phone_number_formatted')) {
                obj['phone_number_formatted'] = ApiClient.convertToType(data['phone_number_formatted'], 'String');
            }
            if (data.hasOwnProperty('geometry')) {
                obj['geometry'] = ApiClient.convertToType(data['geometry'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('name_raw')) {
                obj['name_raw'] = ApiClient.convertToType(data['name_raw'], 'String');
            }
            if (data.hasOwnProperty('photo_main')) {
                obj['photo_main'] = ApiClient.convertToType(data['photo_main'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], ['String']);
            }
            if (data.hasOwnProperty('category_main')) {
                obj['category_main'] = ApiClient.convertToType(data['category_main'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('url_googleplus')) {
                obj['url_googleplus'] = ApiClient.convertToType(data['url_googleplus'], 'String');
            }
            if (data.hasOwnProperty('url_website')) {
                obj['url_website'] = ApiClient.convertToType(data['url_website'], 'String');
            }
            if (data.hasOwnProperty('open_hours')) {
                obj['open_hours'] = ApiClient.convertToType(data['open_hours'], [OpenHours]);
            }
            if (data.hasOwnProperty('open_now')) {
                obj['open_now'] = ApiClient.convertToType(data['open_now'], 'Boolean');
            }
            if (data.hasOwnProperty('open_time')) {
                obj['open_time'] = ApiClient.convertToType(data['open_time'], 'String');
            }
            if (data.hasOwnProperty('utc_offset')) {
                obj['utc_offset'] = ApiClient.convertToType(data['utc_offset'], 'String');
            }
            if (data.hasOwnProperty('assigned_by')) {
                obj['assigned_by'] = ApiClient.convertToType(data['assigned_by'], [AssignedBy]);
            }
            if (data.hasOwnProperty('invited_by')) {
                obj['invited_by'] = ApiClient.convertToType(data['invited_by'], [InvitedBy]);
            }
            if (data.hasOwnProperty('has_beacon')) {
                obj['has_beacon'] = ApiClient.convertToType(data['has_beacon'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Object of general store
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of general store
    * @member {String} id
    */
    id = undefined;
    /**
    * Old id of general store
    * @member {String} id_old
    */
    id_old = undefined;
    /**
    * General merchant of general store
    * @member {module:model/ProductInstanceUID} merchant
    */
    merchant = undefined;
    /**
    * Facebook id
    * @member {String} facebook_id
    */
    facebook_id = undefined;
    /**
    * Source
    * @member {String} source
    */
    source = undefined;
    /**
    * Key
    * @member {String} key
    */
    key = undefined;
    /**
    * Hash
    * @member {String} hash
    */
    hash = undefined;
    /**
    * Address components
    * @member {Array.<module:model/AddressComponents>} address_components
    */
    address_components = undefined;
    /**
    * General store formatted address
    * @member {String} address_formatted
    */
    address_formatted = undefined;
    /**
    * General store formatted phone number
    * @member {String} phone_number_formatted
    */
    phone_number_formatted = undefined;
    /**
    * General store geometry
    * @member {String} geometry
    */
    geometry = undefined;
    /**
    * General store name
    * @member {String} name
    */
    name = undefined;
    /**
    * General store raw name
    * @member {String} name_raw
    */
    name_raw = undefined;
    /**
    * General store main photo
    * @member {String} photo_main
    */
    photo_main = undefined;
    /**
    * General store photos
    * @member {Array.<String>} photo
    */
    photo = undefined;
    /**
    * General store main category
    * @member {String} category_main
    */
    category_main = undefined;
    /**
    * General store category
    * @member {String} category
    */
    category = undefined;
    /**
    * Url to general store google plus
    * @member {String} url_googleplus
    */
    url_googleplus = undefined;
    /**
    * Url to general store website
    * @member {String} url_website
    */
    url_website = undefined;
    /**
    * Open hours in every day
    * @member {Array.<module:model/OpenHours>} open_hours
    */
    open_hours = undefined;
    /**
    * Open now
    * @member {Boolean} open_now
    */
    open_now = undefined;
    /**
    * Open time
    * @member {String} open_time
    */
    open_time = undefined;
    /**
    * Utc offset
    * @member {String} utc_offset
    */
    utc_offset = undefined;
    /**
    * Assigned by
    * @member {Array.<module:model/AssignedBy>} assigned_by
    */
    assigned_by = undefined;
    /**
    * Invited by
    * @member {Array.<module:model/InvitedBy>} invited_by
    */
    invited_by = undefined;
    /**
    * Has beacon
    * @member {Boolean} has_beacon
    */
    has_beacon = undefined;








}


