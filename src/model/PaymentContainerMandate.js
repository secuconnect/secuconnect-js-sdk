
import ApiClient from '../ApiClient';





/**
* The PaymentContainerMandate model module.
* @module model/PaymentContainerMandate
*/
export default class PaymentContainerMandate {
    /**
    * Constructs a new <code>PaymentContainerMandate</code>.
    * @alias module:model/PaymentContainerMandate
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContainerMandate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainerMandate} obj Optional instance to populate.
    * @return {module:model/PaymentContainerMandate} The populated <code>PaymentContainerMandate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainerMandate();

            
            
            

            if (data.hasOwnProperty('sepa_mandate_id')) {
                obj['sepa_mandate_id'] = ApiClient.convertToType(data['sepa_mandate_id'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
        }
        return obj;
    }

    /**
    * Sepa mandate id
    * @member {String} sepa_mandate_id
    */
    sepa_mandate_id = undefined;
    /**
    * IBAN
    * @member {String} iban
    */
    iban = undefined;
    /**
    * BIC
    * @member {String} bic
    */
    bic = undefined;
    /**
    * Type
    * @member {String} type
    */
    type = undefined;
    /**
    * Status
    * @member {String} status
    */
    status = undefined;
    /**
    * Identification
    * @member {String} identification
    */
    identification = undefined;








}


