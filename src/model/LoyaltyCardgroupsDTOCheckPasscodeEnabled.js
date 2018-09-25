
import ApiClient from '../ApiClient';





/**
* The LoyaltyCardgroupsDTOCheckPasscodeEnabled model module.
* @module model/LoyaltyCardgroupsDTOCheckPasscodeEnabled
* @version 2.0.0
*/
export default class LoyaltyCardgroupsDTOCheckPasscodeEnabled {
    /**
    * Constructs a new <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code>.
    * @alias module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} The populated <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardgroupsDTOCheckPasscodeEnabled();

            
            
            

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
            }
        }
        return obj;
    }

    /**
    * Action type
    * @member {String} action
    */
    action = undefined;
    /**
    * Secucard number
    * @member {String} cardnumber
    */
    cardnumber = undefined;








}


