
import ApiClient from '../ApiClient';





/**
* The LoyaltyMerchantcardsDTOLock model module.
* @module model/LoyaltyMerchantcardsDTOLock
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsDTOLock {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOLock</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOLock
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOLock</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOLock} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOLock} The populated <code>LoyaltyMerchantcardsDTOLock</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOLock();

            
            
            

            if (data.hasOwnProperty('lock_status')) {
                obj['lock_status'] = ApiClient.convertToType(data['lock_status'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }

    /**
    * Lock status
    * @member {String} lock_status
    */
    lock_status = undefined;
    /**
    * Lock reason
    * @member {String} reason
    */
    reason = undefined;
    /**
    * Lock note
    * @member {String} note
    */
    note = undefined;








}


