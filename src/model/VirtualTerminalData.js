
import ApiClient from '../ApiClient';





/**
* The VirtualTerminalData model module.
* @module model/VirtualTerminalData
*/
export default class VirtualTerminalData {
    /**
    * Constructs a new <code>VirtualTerminalData</code>.
    * @alias module:model/VirtualTerminalData
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>VirtualTerminalData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VirtualTerminalData} obj Optional instance to populate.
    * @return {module:model/VirtualTerminalData} The populated <code>VirtualTerminalData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualTerminalData();

            
            
            

            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], Object);
            }
            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
            }
            if (data.hasOwnProperty('gift_terminal')) {
                obj['gift_terminal'] = ApiClient.convertToType(data['gift_terminal'], 'Number');
            }
            if (data.hasOwnProperty('amount_split_enabled')) {
                obj['amount_split_enabled'] = ApiClient.convertToType(data['amount_split_enabled'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Store
    * @member {Object} store
    */
    store = undefined;
    /**
    * Terminal id
    * @member {String} tid
    */
    tid = undefined;
    /**
    * Actions
    * @member {Array.<String>} actions
    */
    actions = undefined;
    /**
    * Gift terminal
    * @member {Number} gift_terminal
    */
    gift_terminal = undefined;
    /**
    * Amount split enabled
    * @member {Number} amount_split_enabled
    */
    amount_split_enabled = undefined;








}


