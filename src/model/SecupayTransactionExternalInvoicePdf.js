
import ApiClient from '../ApiClient';
import SecupayTransactionExternalInvoicePdfDocument from './SecupayTransactionExternalInvoicePdfDocument';





/**
* The SecupayTransactionExternalInvoicePdf model module.
* @module model/SecupayTransactionExternalInvoicePdf
*/
export default class SecupayTransactionExternalInvoicePdf {
    /**
    * Constructs a new <code>SecupayTransactionExternalInvoicePdf</code>.
    * @alias module:model/SecupayTransactionExternalInvoicePdf
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionExternalInvoicePdf</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionExternalInvoicePdf} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionExternalInvoicePdf} The populated <code>SecupayTransactionExternalInvoicePdf</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionExternalInvoicePdf();

            
            
            

            if (data.hasOwnProperty('document')) {
                obj['document'] = SecupayTransactionExternalInvoicePdfDocument.constructFromObject(data['document']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SecupayTransactionExternalInvoicePdfDocument} document
    */
    document = undefined;








}


