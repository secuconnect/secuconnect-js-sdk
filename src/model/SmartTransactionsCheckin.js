
import ApiClient from '../ApiClient';





/**
* The SmartTransactionsCheckin model module.
* @module model/SmartTransactionsCheckin
* @version 2.0.0
*/
export default class SmartTransactionsCheckin {
    /**
    * Constructs a new <code>SmartTransactionsCheckin</code>.
    * @alias module:model/SmartTransactionsCheckin
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartTransactionsCheckin</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsCheckin} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsCheckin} The populated <code>SmartTransactionsCheckin</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsCheckin();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
    * Object of smart transaction check in
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of smart transaction check in
    * @member {String} id
    */
    id = undefined;
    /**
    * Email
    * @member {String} email
    */
    email = undefined;








}


