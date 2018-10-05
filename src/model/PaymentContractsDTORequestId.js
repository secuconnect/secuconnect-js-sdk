
import ApiClient from '../ApiClient';
import Contact from './Contact';
import PaymentContractsDTOIFrameOpts from './PaymentContractsDTOIFrameOpts';
import PaymentInformation from './PaymentInformation';





/**
* The PaymentContractsDTORequestId model module.
* @module model/PaymentContractsDTORequestId
*/
export default class PaymentContractsDTORequestId {
    /**
    * Constructs a new <code>PaymentContractsDTORequestId</code>.
    * @alias module:model/PaymentContractsDTORequestId
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsDTORequestId</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTORequestId} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTORequestId} The populated <code>PaymentContractsDTORequestId</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsDTORequestId();

            
            
            

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('payout_account')) {
                obj['payout_account'] = PaymentInformation.constructFromObject(data['payout_account']);
            }
            if (data.hasOwnProperty('iframe_opts')) {
                obj['iframe_opts'] = PaymentContractsDTOIFrameOpts.constructFromObject(data['iframe_opts']);
            }
            if (data.hasOwnProperty('payin_account')) {
                obj['payin_account'] = ApiClient.convertToType(data['payin_account'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Contact
    * @member {module:model/Contact} contact
    */
    contact = undefined;
    /**
    * Name of the project (must be unique)
    * @member {String} project
    */
    project = undefined;
    /**
    * Merchants bank account for the payout
    * @member {module:model/PaymentInformation} payout_account
    */
    payout_account = undefined;
    /**
    * IFrame opts
    * @member {module:model/PaymentContractsDTOIFrameOpts} iframe_opts
    */
    iframe_opts = undefined;
    /**
    * Pay in account
    * @member {Boolean} payin_account
    * @default false
    */
    payin_account = false;








}


