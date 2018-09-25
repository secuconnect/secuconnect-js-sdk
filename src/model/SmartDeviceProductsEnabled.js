
import ApiClient from '../ApiClient';





/**
* The SmartDeviceProductsEnabled model module.
* @module model/SmartDeviceProductsEnabled
* @version 2.0.0
*/
export default class SmartDeviceProductsEnabled {
    /**
    * Constructs a new <code>SmartDeviceProductsEnabled</code>.
    * @alias module:model/SmartDeviceProductsEnabled
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDeviceProductsEnabled</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDeviceProductsEnabled} obj Optional instance to populate.
    * @return {module:model/SmartDeviceProductsEnabled} The populated <code>SmartDeviceProductsEnabled</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDeviceProductsEnabled();

            
            
            

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Enabled
    * @member {Boolean} enabled
    */
    enabled = undefined;








}


