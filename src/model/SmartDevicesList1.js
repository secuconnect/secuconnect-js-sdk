
import ApiClient from '../ApiClient';
import SmartDevicesProductModel from './SmartDevicesProductModel';





/**
* The SmartDevicesList1 model module.
* @module model/SmartDevicesList1
* @version 2.0.0
*/
export default class SmartDevicesList1 {
    /**
    * Constructs a new <code>SmartDevicesList1</code>.
    * @alias module:model/SmartDevicesList1
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDevicesList1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesList1} obj Optional instance to populate.
    * @return {module:model/SmartDevicesList1} The populated <code>SmartDevicesList1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesList1();

            
            
            

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
    * GET Smart/Devices/{smartDeviceId}/routing/type/{type}
    * @member {Array.<module:model/SmartDevicesProductModel>} data
    */
    data = undefined;








}


