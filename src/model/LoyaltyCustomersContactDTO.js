
import ApiClient from '../ApiClient';
import Address from './Address';





/**
* The LoyaltyCustomersContactDTO model module.
* @module model/LoyaltyCustomersContactDTO
*/
export default class LoyaltyCustomersContactDTO {
    /**
    * Constructs a new <code>LoyaltyCustomersContactDTO</code>.
    * @alias module:model/LoyaltyCustomersContactDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCustomersContactDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersContactDTO} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersContactDTO} The populated <code>LoyaltyCustomersContactDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersContactDTO();

            
            
            

            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
        }
        return obj;
    }

    /**
    * Forename
    * @member {String} forename
    */
    forename = undefined;
    /**
    * Surname
    * @member {String} surname
    */
    surname = undefined;
    /**
    * Name
    * @member {String} name
    */
    name = undefined;
    /**
    * Phone
    * @member {String} phone
    */
    phone = undefined;
    /**
    * Address
    * @member {module:model/Address} address
    */
    address = undefined;








}


