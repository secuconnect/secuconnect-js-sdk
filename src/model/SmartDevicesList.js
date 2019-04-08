
import ApiClient from '../ApiClient';
import SmartDevicesProductModel from './SmartDevicesProductModel';

/**
 * The SmartDevicesList model module.
 * @module model/SmartDevicesList
 */
export default class SmartDevicesList {
    /**
     * Constructs a new <code>SmartDevicesList</code>.
     * @alias module:model/SmartDevicesList
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartDevicesList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesList} obj Optional instance to populate.
    * @return {module:model/SmartDevicesList} The populated <code>SmartDevicesList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesList();
            
            
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SmartDevicesProductModel]);
            }
        }
        return obj;
    }

    /**
     * Number of existing smart devices
     * @member {Number} count
     */
    count = undefined;

    /**
     * GET Smart/Devices
     * @member {Array.<module:model/SmartDevicesProductModel>} data
     */
    data = undefined;

}
