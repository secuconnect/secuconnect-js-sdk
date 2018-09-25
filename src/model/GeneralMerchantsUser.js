
import ApiClient from '../ApiClient';
import GeoAddress from './GeoAddress';





/**
* The GeneralMerchantsUser model module.
* @module model/GeneralMerchantsUser
*/
export default class GeneralMerchantsUser {
    /**
    * Constructs a new <code>GeneralMerchantsUser</code>.
    * @alias module:model/GeneralMerchantsUser
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsUser} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsUser} The populated <code>GeneralMerchantsUser</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsUser();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], [GeoAddress]);
            }
        }
        return obj;
    }

    /**
    * Object of general merchant user
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of general merchant user
    * @member {String} id
    */
    id = undefined;
    /**
    * Name of general merchant user
    * @member {String} name
    */
    name = undefined;
    /**
    * Company name of general merchant user
    * @member {String} companyname
    */
    companyname = undefined;
    /**
    * Address of general merchant user
    * @member {Array.<module:model/GeoAddress>} address
    */
    address = undefined;








}


