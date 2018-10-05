
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionReverseAccrualDTO model module.
* @module model/SecupayTransactionReverseAccrualDTO
*/
export default class SecupayTransactionReverseAccrualDTO {
    /**
    * Constructs a new <code>SecupayTransactionReverseAccrualDTO</code>.
    * @alias module:model/SecupayTransactionReverseAccrualDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionReverseAccrualDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionReverseAccrualDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionReverseAccrualDTO} The populated <code>SecupayTransactionReverseAccrualDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionReverseAccrualDTO();

            
            
            

            if (data.hasOwnProperty('accrual')) {
                obj['accrual'] = ApiClient.convertToType(data['accrual'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Indicates whether the payment is locked for pay-out (TRUE) or not (FALSE).
    * @member {Boolean} accrual
    * @default false
    */
    accrual = false;








}


