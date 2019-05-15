
import ApiClient from '../ApiClient';
import LoyaltyCardsDTOAccount from './LoyaltyCardsDTOAccount';

/**
 * The LoyaltyCardsProductModel model module.
 * @module model/LoyaltyCardsProductModel
 */
export default class LoyaltyCardsProductModel {
    /**
     * Constructs a new <code>LoyaltyCardsProductModel</code>.
     * @alias module:model/LoyaltyCardsProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>LoyaltyCardsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardsProductModel} The populated <code>LoyaltyCardsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyCardsProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = LoyaltyCardsDTOAccount.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of loyalty card
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of loyalty card
     * @member {String} id
     */
    id = undefined;

    /**
     * Loyalty card account
     * @member {module:model/LoyaltyCardsDTOAccount} account
     */
    account = undefined;

    /**
     * Loyalty card number
     * @member {String} cardnumber
     */
    cardnumber = undefined;

    /**
     * Creation date
     * @member {String} created
     */
    created = undefined;

}
