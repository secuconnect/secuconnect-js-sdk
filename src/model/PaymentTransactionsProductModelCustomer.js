
import ApiClient from '../ApiClient';





/**
* The PaymentTransactionsProductModelCustomer model module.
* @module model/PaymentTransactionsProductModelCustomer
*/
export default class PaymentTransactionsProductModelCustomer {
    /**
    * Constructs a new <code>PaymentTransactionsProductModelCustomer</code>.
    * PaymentTransactionsProductModel
    * @alias module:model/PaymentTransactionsProductModelCustomer
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentTransactionsProductModelCustomer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsProductModelCustomer} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsProductModelCustomer} The populated <code>PaymentTransactionsProductModelCustomer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsProductModelCustomer();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('companyname')) {
                obj['companyname'] = ApiClient.convertToType(data['companyname'], 'String');
            }
            if (data.hasOwnProperty('salutation')) {
                obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
        }
        return obj;
    }

    /**
    * Customer type name
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of customer
    * @member {String} id
    */
    id = undefined;
    /**
    * Customer company name
    * @member {String} companyname
    */
    companyname = undefined;
    /**
    * Customer salutation
    * @member {String} salutation
    */
    salutation = undefined;
    /**
    * Customer title
    * @member {String} title
    */
    title = undefined;
    /**
    * Customer forename
    * @member {String} forename
    */
    forename = undefined;
    /**
    * Customer surname
    * @member {String} surname
    */
    surname = undefined;








}


