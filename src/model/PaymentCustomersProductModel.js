
import ApiClient from '../ApiClient';
import Contact from './Contact';
import ProductInstanceUID from './ProductInstanceUID';





/**
* The PaymentCustomersProductModel model module.
* @module model/PaymentCustomersProductModel
* @version 2.0.0
*/
export default class PaymentCustomersProductModel {
    /**
    * Constructs a new <code>PaymentCustomersProductModel</code>.
    * @alias module:model/PaymentCustomersProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentCustomersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentCustomersProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentCustomersProductModel} The populated <code>PaymentCustomersProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentCustomersProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ProductInstanceUID.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Object of payment customer
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of payment customer
    * @member {String} id
    */
    id = undefined;
    /**
    * Payment contract
    * @member {module:model/ProductInstanceUID} contract
    */
    contract = undefined;
    /**
    * Customer contact info
    * @member {module:model/Contact} contact
    */
    contact = undefined;
    /**
    * Created at date
    * @member {Date} created
    */
    created = undefined;
    /**
    * Updated at date
    * @member {Date} updated
    */
    updated = undefined;








}


