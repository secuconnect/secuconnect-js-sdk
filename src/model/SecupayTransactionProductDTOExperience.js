
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionProductDTOExperience model module.
* @module model/SecupayTransactionProductDTOExperience
*/
export default class SecupayTransactionProductDTOExperience {
    /**
    * Constructs a new <code>SecupayTransactionProductDTOExperience</code>.
    * Customer experience score
    * @alias module:model/SecupayTransactionProductDTOExperience
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOExperience</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOExperience} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOExperience} The populated <code>SecupayTransactionProductDTOExperience</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductDTOExperience();

            
            
            

            if (data.hasOwnProperty('positive')) {
                obj['positive'] = ApiClient.convertToType(data['positive'], 'Number');
            }
            if (data.hasOwnProperty('negative')) {
                obj['negative'] = ApiClient.convertToType(data['negative'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Score of positive experience (paid orders)
    * @member {Number} positive
    */
    positive = undefined;
    /**
    * Score of negative experience (open/unpaid orders)
    * @member {Number} negative
    */
    negative = undefined;








}


