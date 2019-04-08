
import ApiClient from '../ApiClient';
import GeneralMerchantsCheckoutOptionsCollectionSmartDevices from './GeneralMerchantsCheckoutOptionsCollectionSmartDevices';

/**
 * The GeneralMerchantsCheckoutOptionsCollection model module.
 * @module model/GeneralMerchantsCheckoutOptionsCollection
 */
export default class GeneralMerchantsCheckoutOptionsCollection {
    /**
     * Constructs a new <code>GeneralMerchantsCheckoutOptionsCollection</code>.
     * @alias module:model/GeneralMerchantsCheckoutOptionsCollection
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeneralMerchantsCheckoutOptionsCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsCheckoutOptionsCollection} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsCheckoutOptionsCollection} The populated <code>GeneralMerchantsCheckoutOptionsCollection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsCheckoutOptionsCollection();
            
            
            
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('smart_devices')) {
                obj['smart_devices'] = GeneralMerchantsCheckoutOptionsCollectionSmartDevices.constructFromObject(data['smart_devices']);
            }
        }
        return obj;
    }

    /**
     * Enabled
     * @member {Boolean} enabled
     */
    enabled = undefined;

    /**
     * Smart devices
     * @member {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices} smart_devices
     */
    smart_devices = undefined;

}
