
import ApiClient from '../ApiClient';
import LoyaltyStoregroupsDTOStoresAddressComponents from './LoyaltyStoregroupsDTOStoresAddressComponents';





/**
* The LoyaltyDTOStore model module.
* @module model/LoyaltyDTOStore
* @version 2.0.0
*/
export default class LoyaltyDTOStore {
    /**
    * Constructs a new <code>LoyaltyDTOStore</code>.
    * @alias module:model/LoyaltyDTOStore
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyDTOStore</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyDTOStore} obj Optional instance to populate.
    * @return {module:model/LoyaltyDTOStore} The populated <code>LoyaltyDTOStore</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyDTOStore();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address_components')) {
                obj['address_components'] = ApiClient.convertToType(data['address_components'], [LoyaltyStoregroupsDTOStoresAddressComponents]);
            }
            if (data.hasOwnProperty('address_formatted')) {
                obj['address_formatted'] = ApiClient.convertToType(data['address_formatted'], 'String');
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
        }
        return obj;
    }

    /**
    * LoyaltyDTOStore
    * @member {String} object
    */
    object = undefined;
    /**
    * LoyaltyDTOStore
    * @member {String} id
    */
    id = undefined;
    /**
    * LoyaltyDTOStore
    * @member {Array.<module:model/LoyaltyStoregroupsDTOStoresAddressComponents>} address_components
    */
    address_components = undefined;
    /**
    * Address formatted
    * @member {String} address_formatted
    */
    address_formatted = undefined;
    /**
    * Geometry
    * @member {String} geometry
    */
    geometry = undefined;
    /**
    * Name
    * @member {String} name
    */
    name = undefined;
    /**
    * Raw name
    * @member {String} name_raw
    */
    name_raw = undefined;








}


