
import ApiClient from '../ApiClient';





/**
* The PaymentContainersDTOCustomer model module.
* @module model/PaymentContainersDTOCustomer
* @version 2.0.0
*/
export default class PaymentContainersDTOCustomer {
    /**
    * Constructs a new <code>PaymentContainersDTOCustomer</code>.
    * The customer of this payment container
    * @alias module:model/PaymentContainersDTOCustomer
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContainersDTOCustomer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersDTOCustomer} obj Optional instance to populate.
    * @return {module:model/PaymentContainersDTOCustomer} The populated <code>PaymentContainersDTOCustomer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainersDTOCustomer();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * Customer identifier
    * @member {String} id
    */
    id = undefined;








}


