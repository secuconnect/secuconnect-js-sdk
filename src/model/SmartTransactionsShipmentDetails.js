
import ApiClient from '../ApiClient';

/**
 * The SmartTransactionsShipmentDetails model module.
 * @module model/SmartTransactionsShipmentDetails
 */
export default class SmartTransactionsShipmentDetails {
    /**
     * Constructs a new <code>SmartTransactionsShipmentDetails</code>.
     * @alias module:model/SmartTransactionsShipmentDetails
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartTransactionsShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsShipmentDetails} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsShipmentDetails} The populated <code>SmartTransactionsShipmentDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartTransactionsShipmentDetails();
            
            
            
            if (data.hasOwnProperty('shipped_at')) {
                obj['shipped_at'] = ApiClient.convertToType(data['shipped_at'], 'String');
            }
            if (data.hasOwnProperty('shipped_by')) {
                obj['shipped_by'] = ApiClient.convertToType(data['shipped_by'], 'String');
            }
            if (data.hasOwnProperty('tracking_code')) {
                obj['tracking_code'] = ApiClient.convertToType(data['tracking_code'], 'String');
            }
            if (data.hasOwnProperty('invoice_number')) {
                obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Shipment Date
     * @member {String} shipped_at
     */
    shipped_at = undefined;

    /**
     * Parcel Provider
     * @member {String} shipped_by
     */
    shipped_by = undefined;

    /**
     * Tracking Code
     * @member {String} tracking_code
     */
    tracking_code = undefined;

    /**
     * Invoice Number
     * @member {String} invoice_number
     */
    invoice_number = undefined;

}
