
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionDTOExternalInvoicePdf model module.
* @module model/SecupayTransactionDTOExternalInvoicePdf
* @version 2.0.0
*/
export default class SecupayTransactionDTOExternalInvoicePdf {
    /**
    * Constructs a new <code>SecupayTransactionDTOExternalInvoicePdf</code>.
    * @alias module:model/SecupayTransactionDTOExternalInvoicePdf
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionDTOExternalInvoicePdf</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionDTOExternalInvoicePdf} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionDTOExternalInvoicePdf} The populated <code>SecupayTransactionDTOExternalInvoicePdf</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionDTOExternalInvoicePdf();

            
            
            

            if (data.hasOwnProperty('update_existing')) {
                obj['update_existing'] = ApiClient.convertToType(data['update_existing'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Update existing invoice PDF
    * @member {Boolean} update_existing
    */
    update_existing = undefined;








}


