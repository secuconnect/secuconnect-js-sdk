
import ApiClient from '../ApiClient';
import PaymentCustomersProductModel from './PaymentCustomersProductModel';





/**
* The PaymentCustomersList model module.
* @module model/PaymentCustomersList
*/
export default class PaymentCustomersList {
    /**
    * Constructs a new <code>PaymentCustomersList</code>.
    * @alias module:model/PaymentCustomersList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentCustomersList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersList} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersList} The populated <code>PaymentCustomersList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentCustomersList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentCustomersProductModel]);
            }
        }
        return obj;
    }

    /**
    * Number of existing payment customers
    * @member {Number} count
    */
    count = undefined;
    /**
    * GET Payment/Customers
    * @member {Array.<module:model/PaymentCustomersProductModel>} data
    */
    data = undefined;








}


