
import ApiClient from '../ApiClient';
import LoyaltyCardgroupsProductModel from './LoyaltyCardgroupsProductModel';
import LoyaltyCardsProductModel from './LoyaltyCardsProductModel';
import LoyaltyCustomersProductModel from './LoyaltyCustomersProductModel';
import LoyaltyMerchantcardsDTOPaymentContainer from './LoyaltyMerchantcardsDTOPaymentContainer';
import ProductInstanceUID from './ProductInstanceUID';





/**
* The LoyaltyMerchantcardsProductModel model module.
* @module model/LoyaltyMerchantcardsProductModel
* @version 2.0.0
*/
export default class LoyaltyMerchantcardsProductModel {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsProductModel</code>.
    * @alias module:model/LoyaltyMerchantcardsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsProductModel} The populated <code>LoyaltyMerchantcardsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = LoyaltyCardsProductModel.constructFromObject(data['card']);
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('created_for_merchant')) {
                obj['created_for_merchant'] = ProductInstanceUID.constructFromObject(data['created_for_merchant']);
            }
            if (data.hasOwnProperty('created_for_store')) {
                obj['created_for_store'] = ProductInstanceUID.constructFromObject(data['created_for_store']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = LoyaltyCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cardgroup')) {
                obj['cardgroup'] = LoyaltyCardgroupsProductModel.constructFromObject(data['cardgroup']);
            }
            if (data.hasOwnProperty('payment_container')) {
                obj['payment_container'] = LoyaltyMerchantcardsDTOPaymentContainer.constructFromObject(data['payment_container']);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('bonus_balance')) {
                obj['bonus_balance'] = ApiClient.convertToType(data['bonus_balance'], 'Number');
            }
            if (data.hasOwnProperty('cash_balance')) {
                obj['cash_balance'] = ApiClient.convertToType(data['cash_balance'], 'Number');
            }
            if (data.hasOwnProperty('stock_status')) {
                obj['stock_status'] = ApiClient.convertToType(data['stock_status'], 'String');
            }
            if (data.hasOwnProperty('lock_status')) {
                obj['lock_status'] = ApiClient.convertToType(data['lock_status'], 'String');
            }
            if (data.hasOwnProperty('last_usage')) {
                obj['last_usage'] = ApiClient.convertToType(data['last_usage'], 'Date');
            }
            if (data.hasOwnProperty('last_charge')) {
                obj['last_charge'] = ApiClient.convertToType(data['last_charge'], 'Date');
            }
            if (data.hasOwnProperty('is_base_card')) {
                obj['is_base_card'] = ApiClient.convertToType(data['is_base_card'], 'Boolean');
            }
            if (data.hasOwnProperty('passcode')) {
                obj['passcode'] = ApiClient.convertToType(data['passcode'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Object of loyalty merchant card
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of loyalty merchant card
    * @member {String} id
    */
    id = undefined;
    /**
    * Id of loyalty store group
    * @member {module:model/LoyaltyCardsProductModel} card
    */
    card = undefined;
    /**
    * Current merchant id
    * @member {module:model/ProductInstanceUID} merchant
    */
    merchant = undefined;
    /**
    * Merchant id, that loyalty merchant card object was created for
    * @member {module:model/ProductInstanceUID} created_for_merchant
    */
    created_for_merchant = undefined;
    /**
    * Store id, that loyalty merchant card object was created for
    * @member {module:model/ProductInstanceUID} created_for_store
    */
    created_for_store = undefined;
    /**
    * Loyalty merchant card customer
    * @member {module:model/LoyaltyCustomersProductModel} customer
    */
    customer = undefined;
    /**
    * Loyalty merchant card card group
    * @member {module:model/LoyaltyCardgroupsProductModel} cardgroup
    */
    cardgroup = undefined;
    /**
    * Loyalty merchant card payment container
    * @member {module:model/LoyaltyMerchantcardsDTOPaymentContainer} payment_container
    */
    payment_container = undefined;
    /**
    * Loyalty merchant card balance
    * @member {Number} balance
    */
    balance = undefined;
    /**
    * Loyalty merchant card points
    * @member {Number} points
    */
    points = undefined;
    /**
    * Loyalty merchant card bonus balance
    * @member {Number} bonus_balance
    */
    bonus_balance = undefined;
    /**
    * Loyalty merchant card cash balance
    * @member {Number} cash_balance
    */
    cash_balance = undefined;
    /**
    * Loyalty merchant card stock status
    * @member {String} stock_status
    */
    stock_status = undefined;
    /**
    * Loyalty merchant card lock status
    * @member {String} lock_status
    */
    lock_status = undefined;
    /**
    * Loyalty merchant card last usage
    * @member {Date} last_usage
    */
    last_usage = undefined;
    /**
    * Loyalty merchant card last charge
    * @member {Date} last_charge
    */
    last_charge = undefined;
    /**
    * Information whether loyalty merchant card is base card
    * @member {Boolean} is_base_card
    */
    is_base_card = undefined;
    /**
    * Loyalty merchant card passcode
    * @member {Number} passcode
    */
    passcode = undefined;








}


