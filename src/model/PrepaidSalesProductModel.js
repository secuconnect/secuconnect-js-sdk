
import ApiClient from '../ApiClient';
import ItemGroup from './ItemGroup';
import PrepaidSalesItem from './PrepaidSalesItem';
import PrepaidSalesSmartDevice from './PrepaidSalesSmartDevice';
import ProductInstanceUID from './ProductInstanceUID';
import Store from './Store';

/**
 * The PrepaidSalesProductModel model module.
 * @module model/PrepaidSalesProductModel
 */
export default class PrepaidSalesProductModel {
    /**
     * Constructs a new <code>PrepaidSalesProductModel</code>.
     * @alias module:model/PrepaidSalesProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidSalesProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesProductModel} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesProductModel} The populated <code>PrepaidSalesProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidSalesProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ProductInstanceUID.constructFromObject(data['stock']);
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = PrepaidSalesItem.constructFromObject(data['item']);
            }
            if (data.hasOwnProperty('itemgroup')) {
                obj['itemgroup'] = ItemGroup.constructFromObject(data['itemgroup']);
            }
            if (data.hasOwnProperty('smart_device')) {
                obj['smart_device'] = PrepaidSalesSmartDevice.constructFromObject(data['smart_device']);
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = Store.constructFromObject(data['store']);
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ProductInstanceUID.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('demo')) {
                obj['demo'] = ApiClient.convertToType(data['demo'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('commission_currency')) {
                obj['commission_currency'] = ApiClient.convertToType(data['commission_currency'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
            }
            if (data.hasOwnProperty('expire_date')) {
                obj['expire_date'] = ApiClient.convertToType(data['expire_date'], 'String');
            }
            if (data.hasOwnProperty('provider_delivery_number')) {
                obj['provider_delivery_number'] = ApiClient.convertToType(data['provider_delivery_number'], 'String');
            }
            if (data.hasOwnProperty('receipt_header')) {
                obj['receipt_header'] = ApiClient.convertToType(data['receipt_header'], 'String');
            }
            if (data.hasOwnProperty('receipt_customer')) {
                obj['receipt_customer'] = ApiClient.convertToType(data['receipt_customer'], 'String');
            }
            if (data.hasOwnProperty('receipt_zvt')) {
                obj['receipt_zvt'] = ApiClient.convertToType(data['receipt_zvt'], 'String');
            }
            if (data.hasOwnProperty('receipt_dealer')) {
                obj['receipt_dealer'] = ApiClient.convertToType(data['receipt_dealer'], 'String');
            }
            if (data.hasOwnProperty('vtc_tid')) {
                obj['vtc_tid'] = ApiClient.convertToType(data['vtc_tid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of prepaid sale
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of prepaid sale
     * @member {String} id
     */
    id = undefined;

    /**
     * Status
     * @member {String} status
     */
    status = undefined;

    /**
     * Prepaid stock
     * @member {module:model/ProductInstanceUID} stock
     */
    stock = undefined;

    /**
     * Prepaid item
     * @member {module:model/PrepaidSalesItem} item
     */
    item = undefined;

    /**
     * Prepaid item group
     * @member {module:model/ItemGroup} itemgroup
     */
    itemgroup = undefined;

    /**
     * Smart device
     * @member {module:model/PrepaidSalesSmartDevice} smart_device
     */
    smart_device = undefined;

    /**
     * General merchant
     * @member {module:model/ProductInstanceUID} merchant
     */
    merchant = undefined;

    /**
     * General store
     * @member {module:model/Store} store
     */
    store = undefined;

    /**
     * Prepaid contract
     * @member {module:model/ProductInstanceUID} contract
     */
    contract = undefined;

    /**
     * Prepaid sale creation date
     * @member {String} created
     */
    created = undefined;

    /**
     * Demo
     * @member {Boolean} demo
     */
    demo = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Amount
     * @member {Number} amount
     */
    amount = undefined;

    /**
     * Currency
     * @member {String} currency
     */
    currency = undefined;

    /**
     * Commission
     * @member {Number} commission
     */
    commission = undefined;

    /**
     * Commission currency
     * @member {String} commission_currency
     */
    commission_currency = undefined;

    /**
     * Code
     * @member {String} code
     */
    code = undefined;

    /**
     * Serial
     * @member {String} serial
     */
    serial = undefined;

    /**
     * Card number
     * @member {String} cardnumber
     */
    cardnumber = undefined;

    /**
     * Expire date
     * @member {String} expire_date
     */
    expire_date = undefined;

    /**
     * Provider delivery number
     * @member {String} provider_delivery_number
     */
    provider_delivery_number = undefined;

    /**
     * Receipt header
     * @member {String} receipt_header
     */
    receipt_header = undefined;

    /**
     * Receipt customer
     * @member {String} receipt_customer
     */
    receipt_customer = undefined;

    /**
     * Receipt zvt
     * @member {String} receipt_zvt
     */
    receipt_zvt = undefined;

    /**
     * Receipt dealer
     * @member {String} receipt_dealer
     */
    receipt_dealer = undefined;

    /**
     * Vtc tid
     * @member {String} vtc_tid
     */
    vtc_tid = undefined;

}
