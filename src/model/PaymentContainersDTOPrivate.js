
import ApiClient from '../ApiClient';





/**
* The PaymentContainersDTOPrivate model module.
* @module model/PaymentContainersDTOPrivate
* @version 2.0.0
*/
export default class PaymentContainersDTOPrivate {
    /**
    * Constructs a new <code>PaymentContainersDTOPrivate</code>.
    * 
    * @alias module:model/PaymentContainersDTOPrivate
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContainersDTOPrivate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersDTOPrivate} obj Optional instance to populate.
    * @return {module:model/PaymentContainersDTOPrivate} The populated <code>PaymentContainersDTOPrivate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainersDTOPrivate();

            
            
            

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
        }
        return obj;
    }

    /**
    * PaymentContainersDTO
    * @member {String} owner
    */
    owner = undefined;
    /**
    * PaymentContainersDTO
    * @member {String} iban
    */
    iban = undefined;
    /**
    * PaymentContainersDTO
    * @member {String} bic
    */
    bic = undefined;








}


