
import ApiClient from '../ApiClient';





/**
* The SmartDevicesDTOPrepaidTid model module.
* @module model/SmartDevicesDTOPrepaidTid
* @version 2.0.0
*/
export default class SmartDevicesDTOPrepaidTid {
    /**
    * Constructs a new <code>SmartDevicesDTOPrepaidTid</code>.
    * @alias module:model/SmartDevicesDTOPrepaidTid
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SmartDevicesDTOPrepaidTid</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartDevicesDTOPrepaidTid} obj Optional instance to populate.
    * @return {module:model/SmartDevicesDTOPrepaidTid} The populated <code>SmartDevicesDTOPrepaidTid</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartDevicesDTOPrepaidTid();

            
            
            

            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'String');
            }
            if (data.hasOwnProperty('force')) {
                obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Tid
    * @member {String} tid
    */
    tid = undefined;
    /**
    * Force
    * @member {Boolean} force
    */
    force = undefined;








}


