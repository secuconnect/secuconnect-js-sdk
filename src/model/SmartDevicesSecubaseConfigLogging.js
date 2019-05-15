
import ApiClient from '../ApiClient';
import SmartDevicesSecubaseConfigLoggingFileNet from './SmartDevicesSecubaseConfigLoggingFileNet';

/**
 * The SmartDevicesSecubaseConfigLogging model module.
 * @module model/SmartDevicesSecubaseConfigLogging
 */
export default class SmartDevicesSecubaseConfigLogging {
    /**
     * Constructs a new <code>SmartDevicesSecubaseConfigLogging</code>.
     * @alias module:model/SmartDevicesSecubaseConfigLogging
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfigLogging</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfigLogging} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfigLogging} The populated <code>SmartDevicesSecubaseConfigLogging</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesSecubaseConfigLogging();
            
            
            
            if (data.hasOwnProperty('secubase')) {
                obj['secubase'] = SmartDevicesSecubaseConfigLoggingFileNet.constructFromObject(data['secubase']);
            }
            if (data.hasOwnProperty('app')) {
                obj['app'] = SmartDevicesSecubaseConfigLoggingFileNet.constructFromObject(data['app']);
            }
        }
        return obj;
    }

    /**
     * Secubase
     * @member {module:model/SmartDevicesSecubaseConfigLoggingFileNet} secubase
     */
    secubase = undefined;

    /**
     * App
     * @member {module:model/SmartDevicesSecubaseConfigLoggingFileNet} app
     */
    app = undefined;

}
