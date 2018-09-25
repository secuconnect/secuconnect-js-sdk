
import ApiClient from '../ApiClient';
import Contact from './Contact';





/**
* The PaymentCustomersDTO model module.
* @module model/PaymentCustomersDTO
* @version 2.0.0
*/
export default class PaymentCustomersDTO {
    /**
    * Constructs a new <code>PaymentCustomersDTO</code>.
    * @alias module:model/PaymentCustomersDTO
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentCustomersDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersDTO} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersDTO} The populated <code>PaymentCustomersDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentCustomersDTO();

            
            
            

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
        }
        return obj;
    }

    /**
    * PaymentCustomersDTO
    * @member {module:model/Contact} contact
    */
    contact = undefined;








}


