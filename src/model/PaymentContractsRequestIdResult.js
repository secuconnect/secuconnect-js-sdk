
import ApiClient from '../ApiClient';
import PaymentContractsProductModel from './PaymentContractsProductModel';
import PaymentInformation from './PaymentInformation';





/**
* The PaymentContractsRequestIdResult model module.
* @module model/PaymentContractsRequestIdResult
*/
export default class PaymentContractsRequestIdResult {
    /**
    * Constructs a new <code>PaymentContractsRequestIdResult</code>.
    * @alias module:model/PaymentContractsRequestIdResult
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsRequestIdResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsRequestIdResult} obj Optional instance to populate.
    * @return {module:model/PaymentContractsRequestIdResult} The populated <code>PaymentContractsRequestIdResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsRequestIdResult();

            
            
            

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = PaymentContractsProductModel.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('apikey')) {
                obj['apikey'] = ApiClient.convertToType(data['apikey'], 'String');
            }
            if (data.hasOwnProperty('payin_account')) {
                obj['payin_account'] = PaymentInformation.constructFromObject(data['payin_account']);
            }
        }
        return obj;
    }

    /**
    * The payment contract object
    * @member {module:model/PaymentContractsProductModel} contract
    */
    contract = undefined;
    /**
    * Returns the apikey of the created merchant
    * @member {String} apikey
    */
    apikey = undefined;
    /**
    * The bank account you can use for pay in.
    * @member {module:model/PaymentInformation} payin_account
    */
    payin_account = undefined;








}


