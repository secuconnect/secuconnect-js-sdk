
import ApiClient from '../ApiClient';

/**
 * The SmartDeviceUserPin model module.
 * @module model/SmartDeviceUserPin
 */
export default class SmartDeviceUserPin {
    /**
     * Constructs a new <code>SmartDeviceUserPin</code>.
     * @alias module:model/SmartDeviceUserPin
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDeviceUserPin</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDeviceUserPin} obj Optional instance to populate.
    * @return {module:model/SmartDeviceUserPin} The populated <code>SmartDeviceUserPin</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDeviceUserPin();
            
            
            
            if (data.hasOwnProperty('user_pin')) {
                obj['user_pin'] = ApiClient.convertToType(data['user_pin'], 'String');
            }
        }
        return obj;
    }

    /**
     * user code from authentication response
     * @member {String} user_pin
     */
    user_pin = undefined;

}
