
import ApiClient from '../ApiClient';
import SmartDeviceProductsEnabled from './SmartDeviceProductsEnabled';
import SmartDeviceProductsPrepaid from './SmartDeviceProductsPrepaid';





/**
* The SmartDevicesProducts model module.
* @module model/SmartDevicesProducts
* @version 2.0.0
*/
export default class SmartDevicesProducts {
    /**
    * Constructs a new <code>SmartDevicesProducts</code>.
    * @alias module:model/SmartDevicesProducts
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDevicesProducts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesProducts} obj Optional instance to populate.
    * @return {module:model/SmartDevicesProducts} The populated <code>SmartDevicesProducts</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesProducts();

            
            
            

            if (data.hasOwnProperty('loyalty')) {
                obj['loyalty'] = SmartDeviceProductsEnabled.constructFromObject(data['loyalty']);
            }
            if (data.hasOwnProperty('smart')) {
                obj['smart'] = SmartDeviceProductsEnabled.constructFromObject(data['smart']);
            }
            if (data.hasOwnProperty('cashreg')) {
                obj['cashreg'] = SmartDeviceProductsEnabled.constructFromObject(data['cashreg']);
            }
            if (data.hasOwnProperty('collect')) {
                obj['collect'] = SmartDeviceProductsEnabled.constructFromObject(data['collect']);
            }
            if (data.hasOwnProperty('showcase')) {
                obj['showcase'] = SmartDeviceProductsEnabled.constructFromObject(data['showcase']);
            }
            if (data.hasOwnProperty('vtm')) {
                obj['vtm'] = SmartDeviceProductsEnabled.constructFromObject(data['vtm']);
            }
            if (data.hasOwnProperty('prepaid')) {
                obj['prepaid'] = SmartDeviceProductsPrepaid.constructFromObject(data['prepaid']);
            }
        }
        return obj;
    }

    /**
    * Loyalty
    * @member {module:model/SmartDeviceProductsEnabled} loyalty
    */
    loyalty = undefined;
    /**
    * Smart
    * @member {module:model/SmartDeviceProductsEnabled} smart
    */
    smart = undefined;
    /**
    * Cashreg
    * @member {module:model/SmartDeviceProductsEnabled} cashreg
    */
    cashreg = undefined;
    /**
    * Collect
    * @member {module:model/SmartDeviceProductsEnabled} collect
    */
    collect = undefined;
    /**
    * Showcase
    * @member {module:model/SmartDeviceProductsEnabled} showcase
    */
    showcase = undefined;
    /**
    * Vtm
    * @member {module:model/SmartDeviceProductsEnabled} vtm
    */
    vtm = undefined;
    /**
    * Prepaid
    * @member {module:model/SmartDeviceProductsPrepaid} prepaid
    */
    prepaid = undefined;








}


