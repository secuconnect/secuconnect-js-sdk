
import ApiClient from '../ApiClient';





/**
* The DayTime model module.
* @module model/DayTime
* @version 2.0.0
*/
export default class DayTime {
    /**
    * Constructs a new <code>DayTime</code>.
    * Day and time
    * @alias module:model/DayTime
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DayTime</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DayTime} obj Optional instance to populate.
    * @return {module:model/DayTime} The populated <code>DayTime</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DayTime();

            
            
            

            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
        }
        return obj;
    }

    /**
    * Day
    * @member {Number} day
    */
    day = undefined;
    /**
    * Time
    * @member {String} time
    */
    time = undefined;








}


