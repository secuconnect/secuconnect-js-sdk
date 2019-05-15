
import ApiClient from '../ApiClient';

/**
 * The SmartDevicesSecubaseConfigLoggingFileNet model module.
 * @module model/SmartDevicesSecubaseConfigLoggingFileNet
 */
export default class SmartDevicesSecubaseConfigLoggingFileNet {
    /**
     * Constructs a new <code>SmartDevicesSecubaseConfigLoggingFileNet</code>.
     * @alias module:model/SmartDevicesSecubaseConfigLoggingFileNet
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesSecubaseConfigLoggingFileNet</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesSecubaseConfigLoggingFileNet} obj Optional instance to populate.
    * @return {module:model/SmartDevicesSecubaseConfigLoggingFileNet} The populated <code>SmartDevicesSecubaseConfigLoggingFileNet</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesSecubaseConfigLoggingFileNet();
            
            
            
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], ['String']);
            }
            if (data.hasOwnProperty('net')) {
                obj['net'] = ApiClient.convertToType(data['net'], ['String']);
            }
        }
        return obj;
    }

    /**
     * File
     * @member {Array.<String>} file
     */
    file = undefined;

    /**
     * Net
     * @member {Array.<String>} net
     */
    net = undefined;

}
