
import ApiClient from '../ApiClient';

/**
 * The SmartDevicesDTOSecubaseConfig model module.
 * @module model/SmartDevicesDTOSecubaseConfig
 */
export default class SmartDevicesDTOSecubaseConfig {
    /**
     * Constructs a new <code>SmartDevicesDTOSecubaseConfig</code>.
     * @alias module:model/SmartDevicesDTOSecubaseConfig
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesDTOSecubaseConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTOSecubaseConfig} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTOSecubaseConfig} The populated <code>SmartDevicesDTOSecubaseConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesDTOSecubaseConfig();
            
            
            
            if (data.hasOwnProperty('secubaseVersion')) {
                obj['secubaseVersion'] = ApiClient.convertToType(data['secubaseVersion'], 'String');
            }
            if (data.hasOwnProperty('baseVersion')) {
                obj['baseVersion'] = ApiClient.convertToType(data['baseVersion'], 'String');
            }
            if (data.hasOwnProperty('oaiVersion')) {
                obj['oaiVersion'] = ApiClient.convertToType(data['oaiVersion'], 'String');
            }
        }
        return obj;
    }

    /**
     * Secubase version
     * @member {String} secubaseVersion
     */
    secubaseVersion = undefined;

    /**
     * Base version
     * @member {String} baseVersion
     */
    baseVersion = undefined;

    /**
     * Oai version
     * @member {String} oaiVersion
     */
    oaiVersion = undefined;

}
