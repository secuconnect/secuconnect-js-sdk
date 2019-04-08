
import ApiClient from '../ApiClient';

/**
 * The SmartDevicesDTO model module.
 * @module model/SmartDevicesDTO
 */
export default class SmartDevicesDTO {
    /**
     * Constructs a new <code>SmartDevicesDTO</code>.
     * @alias module:model/SmartDevicesDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTO} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTO} The populated <code>SmartDevicesDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesDTO();
            
            
            
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ApiClient.convertToType(data['merchant'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], 'String');
            }
            if (data.hasOwnProperty('terminal')) {
                obj['terminal'] = ApiClient.convertToType(data['terminal'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('vendor_uid')) {
                obj['vendor_uid'] = ApiClient.convertToType(data['vendor_uid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], ['String']);
            }
            if (data.hasOwnProperty('base_version')) {
                obj['base_version'] = ApiClient.convertToType(data['base_version'], 'String');
            }
            if (data.hasOwnProperty('terminal_type')) {
                obj['terminal_type'] = ApiClient.convertToType(data['terminal_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Merchant
     * @member {String} merchant
     */
    merchant = undefined;

    /**
     * Store
     * @member {String} store
     */
    store = undefined;

    /**
     * Terminal
     * @member {String} terminal
     */
    terminal = undefined;

    /**
     * Vendor
     * @member {String} vendor
     */
    vendor = undefined;

    /**
     * Vendor uid
     * @member {String} vendor_uid
     */
    vendor_uid = undefined;

    /**
     * Type
     * @member {String} type
     */
    type = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Products
     * @member {Array.<String>} products
     */
    products = undefined;

    /**
     * Base version
     * @member {String} base_version
     */
    base_version = undefined;

    /**
     * Terminal type
     * @member {String} terminal_type
     */
    terminal_type = undefined;

}
