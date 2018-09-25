
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionProductDTOSubscription model module.
* @module model/SecupayTransactionProductDTOSubscription
*/
export default class SecupayTransactionProductDTOSubscription {
    /**
    * Constructs a new <code>SecupayTransactionProductDTOSubscription</code>.
    * Recurring payments
    * @alias module:model/SecupayTransactionProductDTOSubscription
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOSubscription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOSubscription} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOSubscription} The populated <code>SecupayTransactionProductDTOSubscription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductDTOSubscription();

            
            
            

            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The purpose of the subscription
    * @member {String} purpose
    */
    purpose = undefined;
    /**
    * Id of subscription, if exists
    * @member {Number} id
    */
    id = undefined;








}


