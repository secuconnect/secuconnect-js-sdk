
import ApiClient from '../ApiClient';

/**
 * The PrepaidSalesSmartDevice model module.
 * @module model/PrepaidSalesSmartDevice
 */
export default class PrepaidSalesSmartDevice {
    /**
     * Constructs a new <code>PrepaidSalesSmartDevice</code>.
     * @alias module:model/PrepaidSalesSmartDevice
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PrepaidSalesSmartDevice</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesSmartDevice} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesSmartDevice} The populated <code>PrepaidSalesSmartDevice</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepaidSalesSmartDevice();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('vendor_uid')) {
                obj['vendor_uid'] = ApiClient.convertToType(data['vendor_uid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Object of smart device
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of smart device
     * @member {String} id
     */
    id = undefined;

    /**
     * Smart device description
     * @member {String} description
     */
    description = undefined;

    /**
     * Smart device vendor uid
     * @member {String} vendor_uid
     */
    vendor_uid = undefined;

}
