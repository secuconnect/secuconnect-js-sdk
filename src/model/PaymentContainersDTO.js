
import ApiClient from '../ApiClient';
import PaymentContainersDTOCustomer from './PaymentContainersDTOCustomer';
import PaymentContainersDTOPrivate from './PaymentContainersDTOPrivate';

/**
 * The PaymentContainersDTO model module.
 * @module model/PaymentContainersDTO
 */
export default class PaymentContainersDTO {
    /**
     * Constructs a new <code>PaymentContainersDTO</code>.
     * @alias module:model/PaymentContainersDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentContainersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersDTO} obj Optional instance to populate.
    * @return {module:model/PaymentContainersDTO} The populated <code>PaymentContainersDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainersDTO();
            
            
            
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentContainersDTOCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = PaymentContainersDTOPrivate.constructFromObject(data['private']);
            }
        }
        return obj;
    }

    /**
     * @member {module:model/PaymentContainersDTOCustomer} customer
     */
    customer = undefined;

    /**
     * Type of Payment Containers
     * @member {String} type
     */
    type = undefined;

    /**
     * @member {module:model/PaymentContainersDTOPrivate} private
     */
    private = undefined;

}
