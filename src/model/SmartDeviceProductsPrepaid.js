
import ApiClient from '../ApiClient';





/**
* The SmartDeviceProductsPrepaid model module.
* @module model/SmartDeviceProductsPrepaid
* @version 2.0.0
*/
export default class SmartDeviceProductsPrepaid {
    /**
    * Constructs a new <code>SmartDeviceProductsPrepaid</code>.
    * @alias module:model/SmartDeviceProductsPrepaid
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDeviceProductsPrepaid</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDeviceProductsPrepaid} obj Optional instance to populate.
    * @return {module:model/SmartDeviceProductsPrepaid} The populated <code>SmartDeviceProductsPrepaid</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDeviceProductsPrepaid();

            
            
            

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('simulate_force')) {
                obj['simulate_force'] = ApiClient.convertToType(data['simulate_force'], 'Boolean');
            }
            if (data.hasOwnProperty('demo_force')) {
                obj['demo_force'] = ApiClient.convertToType(data['demo_force'], 'Boolean');
            }
            if (data.hasOwnProperty('vtc_tid')) {
                obj['vtc_tid'] = ApiClient.convertToType(data['vtc_tid'], 'String');
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
    * Simulate force
    * @member {Boolean} simulate_force
    */
    simulate_force = undefined;
    /**
    * Demo force
    * @member {Boolean} demo_force
    */
    demo_force = undefined;
    /**
    * Vtc tid
    * @member {String} vtc_tid
    */
    vtc_tid = undefined;








}


