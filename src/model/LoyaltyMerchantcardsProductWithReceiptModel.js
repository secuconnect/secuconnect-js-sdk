
import ApiClient from '../ApiClient';
import LoyaltyCardgroupsProductModel from './LoyaltyCardgroupsProductModel';
import LoyaltyCardsProductModel from './LoyaltyCardsProductModel';
import LoyaltyCustomersProductModel from './LoyaltyCustomersProductModel';
import LoyaltyMerchantcardsDTOPaymentContainer from './LoyaltyMerchantcardsDTOPaymentContainer';
import LoyaltyMerchantcardsProductModel from './LoyaltyMerchantcardsProductModel';
import ProductInstanceUID from './ProductInstanceUID';
import ReceiptType from './ReceiptType';
import ReceiptTypeValue from './ReceiptTypeValue';





/**
* The LoyaltyMerchantcardsProductWithReceiptModel model module.
* @module model/LoyaltyMerchantcardsProductWithReceiptModel
*/
export default class LoyaltyMerchantcardsProductWithReceiptModel {
    /**
    * Constructs a new <code>LoyaltyMerchantcardsProductWithReceiptModel</code>.
    * @alias module:model/LoyaltyMerchantcardsProductWithReceiptModel
    * @class
    * @implements module:model/LoyaltyMerchantcardsProductModel
    */

    constructor() {
        

        
        LoyaltyMerchantcardsProductModel.call(this);

        

        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsProductWithReceiptModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsProductWithReceiptModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsProductWithReceiptModel} The populated <code>LoyaltyMerchantcardsProductWithReceiptModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsProductWithReceiptModel();

            
            
            LoyaltyMerchantcardsProductModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('receipt_header')) {
                obj['receipt_header'] = ApiClient.convertToType(data['receipt_header'], [ReceiptType]);
            }
            if (data.hasOwnProperty('receipt')) {
                obj['receipt'] = ApiClient.convertToType(data['receipt'], [ReceiptTypeValue]);
            }
        }
        return obj;
    }

    /**
    * Receipt header
    * @member {Array.<module:model/ReceiptType>} receipt_header
    */
    receipt_header = undefined;
    /**
    * Receipt
    * @member {Array.<module:model/ReceiptTypeValue>} receipt
    */
    receipt = undefined;


    // Implement LoyaltyMerchantcardsProductModel interface:
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


