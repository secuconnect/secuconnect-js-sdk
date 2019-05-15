
import ApiClient from '../ApiClient';

/**
 * The LoyaltyMerchantcardsDTOTransaction model module.
 * @module model/LoyaltyMerchantcardsDTOTransaction
 */
export default class LoyaltyMerchantcardsDTOTransaction {
    /**
     * Constructs a new <code>LoyaltyMerchantcardsDTOTransaction</code>.
     * @alias module:model/LoyaltyMerchantcardsDTOTransaction
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyMerchantcardsDTOTransaction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyMerchantcardsDTOTransaction} obj Optional instance to populate.
    * @return {module:model/LoyaltyMerchantcardsDTOTransaction} The populated <code>LoyaltyMerchantcardsDTOTransaction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyMerchantcardsDTOTransaction();
            
            
            
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('terminal_id')) {
                obj['terminal_id'] = ApiClient.convertToType(data['terminal_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], 'String');
            }
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'Number');
            }
            if (data.hasOwnProperty('bonus_amount')) {
                obj['bonus_amount'] = ApiClient.convertToType(data['bonus_amount'], 'Number');
            }
            if (data.hasOwnProperty('amount_split_allowed')) {
                obj['amount_split_allowed'] = ApiClient.convertToType(data['amount_split_allowed'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Action
     * @member {String} action
     */
    action = undefined;

    /**
     * Terminal id
     * @member {String} terminal_id
     */
    terminal_id = undefined;

    /**
     * Amount
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Tid
     * @member {String} tid
     */
    tid = undefined;

    /**
     * Store id
     * @member {String} store
     */
    store = undefined;

    /**
     * Card number
     * @member {Number} cardnumber
     */
    cardnumber = undefined;

    /**
     * Bonus amount
     * @member {Number} bonus_amount
     */
    bonus_amount = undefined;

    /**
     * Amount split allowed
     * @member {String} amount_split_allowed
     */
    amount_split_allowed = undefined;

    /**
     * Merchant id
     * @member {String} merchant_id
     */
    merchant_id = undefined;

}
