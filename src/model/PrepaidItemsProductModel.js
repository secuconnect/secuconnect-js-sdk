
import ApiClient from '../ApiClient';
import ItemGroup from './ItemGroup';

/**
 * The PrepaidItemsProductModel model module.
 * @module model/PrepaidItemsProductModel
 */
export default class PrepaidItemsProductModel {
    /**
     * Constructs a new <code>PrepaidItemsProductModel</code>.
     * @alias module:model/PrepaidItemsProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidItemsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidItemsProductModel} obj Optional instance to populate.
    * @return {module:model/PrepaidItemsProductModel} The populated <code>PrepaidItemsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidItemsProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('retail_price')) {
                obj['retail_price'] = ApiClient.convertToType(data['retail_price'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('vtc_id')) {
                obj['vtc_id'] = ApiClient.convertToType(data['vtc_id'], 'String');
            }
            if (data.hasOwnProperty('itemgroup')) {
                obj['itemgroup'] = ItemGroup.constructFromObject(data['itemgroup']);
            }
            if (data.hasOwnProperty('stock_limit_max')) {
                obj['stock_limit_max'] = ApiClient.convertToType(data['stock_limit_max'], 'Number');
            }
            if (data.hasOwnProperty('stock_limit_min')) {
                obj['stock_limit_min'] = ApiClient.convertToType(data['stock_limit_min'], 'Number');
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of prepaid item
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of prepaid item
     * @member {String} id
     */
    id = undefined;

    /**
     * Retail price
     * @member {Number} retail_price
     */
    retail_price = undefined;

    /**
     * Currency
     * @member {String} currency
     */
    currency = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Logo
     * @member {String} logo
     */
    logo = undefined;

    /**
     * Commission
     * @member {Number} commission
     */
    commission = undefined;

    /**
     * Vtc id
     * @member {String} vtc_id
     */
    vtc_id = undefined;

    /**
     * Item group
     * @member {module:model/ItemGroup} itemgroup
     */
    itemgroup = undefined;

    /**
     * Stock limit max
     * @member {Number} stock_limit_max
     */
    stock_limit_max = undefined;

    /**
     * Stock limit min
     * @member {Number} stock_limit_min
     */
    stock_limit_min = undefined;

    /**
     * Taxable
     * @member {Boolean} taxable
     */
    taxable = undefined;

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

}
