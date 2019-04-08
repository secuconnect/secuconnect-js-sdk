
import ApiClient from '../ApiClient';

/**
 * The SecupayTransactionSetShippingInformationDTO model module.
 * @module model/SecupayTransactionSetShippingInformationDTO
 */
export default class SecupayTransactionSetShippingInformationDTO {
    /**
     * Constructs a new <code>SecupayTransactionSetShippingInformationDTO</code>.
     * @alias module:model/SecupayTransactionSetShippingInformationDTO
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SecupayTransactionSetShippingInformationDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionSetShippingInformationDTO} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionSetShippingInformationDTO} The populated <code>SecupayTransactionSetShippingInformationDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionSetShippingInformationDTO();
            
            
            
            if (data.hasOwnProperty('carrier')) {
                obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
            }
            if (data.hasOwnProperty('tracking_id')) {
                obj['tracking_id'] = ApiClient.convertToType(data['tracking_id'], 'String');
            }
            if (data.hasOwnProperty('invoice_number')) {
                obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Shipping provider name
     * @member {String} carrier
     */
    carrier = undefined;

    /**
     * Tracking-ID
     * @member {String} tracking_id
     */
    tracking_id = undefined;

    /**
     * Merchants invoice number
     * @member {String} invoice_number
     */
    invoice_number = undefined;

}
