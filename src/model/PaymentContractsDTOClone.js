
import ApiClient from '../ApiClient';
import PaymentInformation from './PaymentInformation';

/**
 * The PaymentContractsDTOClone model module.
 * @module model/PaymentContractsDTOClone
 */
export default class PaymentContractsDTOClone {
    /**
     * Constructs a new <code>PaymentContractsDTOClone</code>.
     * @alias module:model/PaymentContractsDTOClone
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentContractsDTOClone</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTOClone} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTOClone} The populated <code>PaymentContractsDTOClone</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsDTOClone();
            
            
            
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('payment_data')) {
                obj['payment_data'] = PaymentInformation.constructFromObject(data['payment_data']);
            }
            if (data.hasOwnProperty('payin_account')) {
                obj['payin_account'] = ApiClient.convertToType(data['payin_account'], 'Boolean');
            }
            if (data.hasOwnProperty('url_push')) {
                obj['url_push'] = ApiClient.convertToType(data['url_push'], 'String');
            }
        }
        return obj;
    }

    /**
     * Name of the project (must be unique)
     * @member {String} project
     */
    project = undefined;

    /**
     * Merchants bank account for the payout
     * @member {module:model/PaymentInformation} payment_data
     */
    payment_data = undefined;

    /**
     * Pay in account
     * @member {Boolean} payin_account
     * @default false
     */
    payin_account = false;

    /**
     * The default URL where your service listen for push notifications of the secuconnect service
     * @member {String} url_push
     */
    url_push = undefined;

}
