
import ApiClient from '../ApiClient';





/**
* The SmartDevicesDevice model module.
* @module model/SmartDevicesDevice
* @version 2.0.0
*/
export default class SmartDevicesDevice {
    /**
    * Constructs a new <code>SmartDevicesDevice</code>.
    * @alias module:model/SmartDevicesDevice
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDevicesDevice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDevice} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDevice} The populated <code>SmartDevicesDevice</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesDevice();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
        }
        return obj;
    }

    /**
    * Object of device
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of device
    * @member {String} id
    */
    id = undefined;
    /**
    * Serial number
    * @member {String} serial_number
    */
    serial_number = undefined;








}


