
import ApiClient from '../ApiClient';
import SmartDevicesSecubaseConfigLogging from './SmartDevicesSecubaseConfigLogging';





/**
* The SmartDevicesSecubaseConfig model module.
* @module model/SmartDevicesSecubaseConfig
* @version 2.0.0
*/
export default class SmartDevicesSecubaseConfig {
    /**
    * Constructs a new <code>SmartDevicesSecubaseConfig</code>.
    * @alias module:model/SmartDevicesSecubaseConfig
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfig} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfig} The populated <code>SmartDevicesSecubaseConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesSecubaseConfig();

            
            
            

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], ['String']);
            }
            if (data.hasOwnProperty('logging')) {
                obj['logging'] = SmartDevicesSecubaseConfigLogging.constructFromObject(data['logging']);
            }
        }
        return obj;
    }

    /**
    * Apps
    * @member {Array.<String>} apps
    */
    apps = undefined;
    /**
    * Logging
    * @member {module:model/SmartDevicesSecubaseConfigLogging} logging
    */
    logging = undefined;








}


