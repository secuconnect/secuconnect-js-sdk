
import ApiClient from '../ApiClient';
import BankAccountDescriptor from './BankAccountDescriptor';





/**
* The LoyaltyCustomersPaymentContainerModel model module.
* @module model/LoyaltyCustomersPaymentContainerModel
* @version 2.0.0
*/
export default class LoyaltyCustomersPaymentContainerModel {
    /**
    * Constructs a new <code>LoyaltyCustomersPaymentContainerModel</code>.
    * @alias module:model/LoyaltyCustomersPaymentContainerModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCustomersPaymentContainerModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersPaymentContainerModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersPaymentContainerModel} The populated <code>LoyaltyCustomersPaymentContainerModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersPaymentContainerModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('payment_information')) {
                obj['payment_information'] = BankAccountDescriptor.constructFromObject(data['payment_information']);
            }
            if (data.hasOwnProperty('last_usage')) {
                obj['last_usage'] = ApiClient.convertToType(data['last_usage'], 'Date');
            }
        }
        return obj;
    }

    /**
    * LoyaltyCustomersPaymentContainerModel
    * @member {String} object
    */
    object = undefined;
    /**
    * LoyaltyCustomersPaymentContainerModel
    * @member {String} id
    */
    id = undefined;
    /**
    * LoyaltyCustomersPaymentContainerModel
    * @member {String} type
    */
    type = undefined;
    /**
    * Payment instrument data
    * @member {module:model/BankAccountDescriptor} payment_information
    */
    payment_information = undefined;
    /**
    * Last Usage date
    * @member {Date} last_usage
    */
    last_usage = undefined;








}


