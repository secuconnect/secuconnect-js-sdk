
import ApiClient from '../ApiClient';
import PaymentInformation from './PaymentInformation';





/**
* The LoyaltyMerchantcardsDTOPaymentContainer model module.
* @module model/LoyaltyMerchantcardsDTOPaymentContainer
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsDTOPaymentContainer {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsDTOPaymentContainer</code>.
    * @alias module:model/LoyaltyMerchantcardsDTOPaymentContainer
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOPaymentContainer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOPaymentContainer} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOPaymentContainer} The populated <code>LoyaltyMerchantcardsDTOPaymentContainer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOPaymentContainer();

            
            
            

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
                obj['payment_information'] = PaymentInformation.constructFromObject(data['payment_information']);
            }
        }
        return obj;
    }

    /**
    * Object of payment container
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of payment container
    * @member {String} id
    */
    id = undefined;
    /**
    * Type of payment container
    * @member {String} type
    */
    type = undefined;
    /**
    * Payment information
    * @member {module:model/PaymentInformation} payment_information
    */
    payment_information = undefined;








}


