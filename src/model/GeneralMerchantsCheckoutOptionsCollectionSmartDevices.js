
import ApiClient from '../ApiClient';
import Store from './Store';

/**
 * The GeneralMerchantsCheckoutOptionsCollectionSmartDevices model module.
 * @module model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices
 */
export default class GeneralMerchantsCheckoutOptionsCollectionSmartDevices {
    /**
     * Constructs a new <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code>.
     * @alias module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} The populated <code>GeneralMerchantsCheckoutOptionsCollectionSmartDevices</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsCheckoutOptionsCollectionSmartDevices();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = Store.constructFromObject(data['store']);
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
     * Description of smart device
     * @member {String} description
     */
    description = undefined;

    /**
     * Store
     * @member {module:model/Store} store
     */
    store = undefined;

}
