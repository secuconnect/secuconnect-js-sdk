
import ApiClient from '../ApiClient';
import DayTime from './DayTime';





/**
* The OpenHours model module.
* @module model/OpenHours
*/
export default class OpenHours {
    /**
    * Constructs a new <code>OpenHours</code>.
    * Open hours
    * @alias module:model/OpenHours
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OpenHours</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OpenHours} obj Optional instance to populate.
    * @return {module:model/OpenHours} The populated <code>OpenHours</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenHours();

            
            
            

            if (data.hasOwnProperty('open')) {
                obj['open'] = DayTime.constructFromObject(data['open']);
            }
            if (data.hasOwnProperty('close')) {
                obj['close'] = DayTime.constructFromObject(data['close']);
            }
        }
        return obj;
    }

    /**
    * Open
    * @member {module:model/DayTime} open
    */
    open = undefined;
    /**
    * Close
    * @member {module:model/DayTime} close
    */
    close = undefined;








}


