
import ApiClient from '../ApiClient';
import Contact from './Contact';
import LoyaltyCustomersPaymentContainerModel from './LoyaltyCustomersPaymentContainerModel';
import ProductInstanceUID from './ProductInstanceUID';





/**
* The LoyaltyCustomersProductModel model module.
* @module model/LoyaltyCustomersProductModel
* @version 2.0.0
*/
export default class LoyaltyCustomersProductModel {
    /**
    * Constructs a new <code>LoyaltyCustomersProductModel</code>.
    * @alias module:model/LoyaltyCustomersProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyCustomersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersProductModel} The populated <code>LoyaltyCustomersProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCustomersProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('merchant_contact')) {
                obj['merchant_contact'] = Contact.constructFromObject(data['merchant_contact']);
            }
            if (data.hasOwnProperty('account_contact')) {
                obj['account_contact'] = Contact.constructFromObject(data['account_contact']);
            }
            if (data.hasOwnProperty('payment_container')) {
                obj['payment_container'] = ApiClient.convertToType(data['payment_container'], [LoyaltyCustomersPaymentContainerModel]);
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('days_until_birthday')) {
                obj['days_until_birthday'] = ApiClient.convertToType(data['days_until_birthday'], 'Number');
            }
            if (data.hasOwnProperty('customernumber')) {
                obj['customernumber'] = ApiClient.convertToType(data['customernumber'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Object of loyalty customer
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of loyalty customer
    * @member {String} id
    */
    id = undefined;
    /**
    * merchant
    * @member {module:model/ProductInstanceUID} merchant
    */
    merchant = undefined;
    /**
    * Contact
    * @member {module:model/Contact} contact
    */
    contact = undefined;
    /**
    * merchant contact
    * @member {module:model/Contact} merchant_contact
    */
    merchant_contact = undefined;
    /**
    * merchant contact
    * @member {module:model/Contact} account_contact
    */
    account_contact = undefined;
    /**
    * payment container
    * @member {Array.<module:model/LoyaltyCustomersPaymentContainerModel>} payment_container
    */
    payment_container = undefined;
    /**
    * Age
    * @member {Number} age
    */
    age = undefined;
    /**
    * Number of days until birthday
    * @member {Number} days_until_birthday
    */
    days_until_birthday = undefined;
    /**
    * Customer number
    * @member {String} customernumber
    */
    customernumber = undefined;
    /**
    * Customer number
    * @member {String} note
    */
    note = undefined;
    /**
    * Creation date
    * @member {Date} created
    */
    created = undefined;








}


