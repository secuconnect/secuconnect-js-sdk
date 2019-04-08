
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';
import SmartDevicesDevice from './SmartDevicesDevice';
import SmartDevicesProducts from './SmartDevicesProducts';
import Store from './Store';

/**
 * The SmartDevicesProductModel model module.
 * @module model/SmartDevicesProductModel
 */
export default class SmartDevicesProductModel {
    /**
     * Constructs a new <code>SmartDevicesProductModel</code>.
     * @alias module:model/SmartDevicesProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesProductModel} obj Optional instance to populate.
    * @return {module:model/SmartDevicesProductModel} The populated <code>SmartDevicesProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = Store.constructFromObject(data['store']);
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
            if (data.hasOwnProperty('device')) {
                obj['device'] = SmartDevicesDevice.constructFromObject(data['device']);
            }
            if (data.hasOwnProperty('routing')) {
                obj['routing'] = ProductInstanceUID.constructFromObject(data['routing']);
            }
            if (data.hasOwnProperty('user_pin')) {
                obj['user_pin'] = ApiClient.convertToType(data['user_pin'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = SmartDevicesProducts.constructFromObject(data['products']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('idle_screen_register')) {
                obj['idle_screen_register'] = ApiClient.convertToType(data['idle_screen_register'], 'String');
            }
            if (data.hasOwnProperty('idle_screen_terminal')) {
                obj['idle_screen_terminal'] = ApiClient.convertToType(data['idle_screen_terminal'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('online')) {
                obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
            }
            if (data.hasOwnProperty('terminal_type')) {
                obj['terminal_type'] = ApiClient.convertToType(data['terminal_type'], 'String');
            }
            if (data.hasOwnProperty('base_version')) {
                obj['base_version'] = ApiClient.convertToType(data['base_version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of smart device
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of smart device
     * @member {String} id
     */
    id = undefined;

    /**
     * Merchant
     * @member {module:model/ProductInstanceUID} merchant
     */
    merchant = undefined;

    /**
     * Store
     * @member {module:model/Store} store
     */
    store = undefined;

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
     * Device
     * @member {module:model/SmartDevicesDevice} device
     */
    device = undefined;

    /**
     * Routing
     * @member {module:model/ProductInstanceUID} routing
     */
    routing = undefined;

    /**
     * User pin
     * @member {String} user_pin
     */
    user_pin = undefined;

    /**
     * Products
     * @member {module:model/SmartDevicesProducts} products
     */
    products = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Idle screen register
     * @member {String} idle_screen_register
     */
    idle_screen_register = undefined;

    /**
     * Idle screen terminal
     * @member {String} idle_screen_terminal
     */
    idle_screen_terminal = undefined;

    /**
     * Created at date
     * @member {String} created
     */
    created = undefined;

    /**
     * Online
     * @member {Boolean} online
     */
    online = undefined;

    /**
     * Terminal type
     * @member {String} terminal_type
     */
    terminal_type = undefined;

    /**
     * Base version
     * @member {String} base_version
     */
    base_version = undefined;

}
