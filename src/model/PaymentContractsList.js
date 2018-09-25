
import ApiClient from '../ApiClient';
import PaymentContractsProductModel from './PaymentContractsProductModel';





/**
* The PaymentContractsList model module.
* @module model/PaymentContractsList
* @version 2.0.0
*/
export default class PaymentContractsList {
    /**
    * Constructs a new <code>PaymentContractsList</code>.
    * @alias module:model/PaymentContractsList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsList} obj Optional instance to populate.
    * @return {module:model/PaymentContractsList} The populated <code>PaymentContractsList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentContractsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing payment contracts
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Payment/Contracts
    * @member {Array.<module:model/PaymentContractsProductModel>} data
    */
    data = undefined;








}


