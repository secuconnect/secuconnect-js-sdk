
import ApiClient from '../ApiClient';
import BankAccountDescriptor from './BankAccountDescriptor';
import PaymentContainerMandate from './PaymentContainerMandate';
import PaymentContractsProductModel from './PaymentContractsProductModel';
import PaymentCustomersProductModel from './PaymentCustomersProductModel';
import ProductInstanceUID from './ProductInstanceUID';

/**
 * The PaymentContainersProductModel model module.
 * @module model/PaymentContainersProductModel
 */
export default class PaymentContainersProductModel {
    /**
     * Constructs a new <code>PaymentContainersProductModel</code>.
     * @alias module:model/PaymentContainersProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentContainersProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersProductModel} obj Optional instance to populate.
    * @return {module:model/PaymentContainersProductModel} The populated <code>PaymentContainersProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainersProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = PaymentContractsProductModel.constructFromObject(data['contract']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = PaymentCustomersProductModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('assign')) {
                obj['assign'] = ProductInstanceUID.constructFromObject(data['assign']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = BankAccountDescriptor.constructFromObject(data['public']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = BankAccountDescriptor.constructFromObject(data['private']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
            if (data.hasOwnProperty('mandate')) {
                obj['mandate'] = PaymentContainerMandate.constructFromObject(data['mandate']);
            }
        }
        return obj;
    }

    /**
     * Object of payment container
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of payment container
     * @member {String} id
     */
    id = undefined;

    /**
     * Payment container contract
     * @member {module:model/PaymentContractsProductModel} contract
     */
    contract = undefined;

    /**
     * Payment container customer
     * @member {module:model/PaymentCustomersProductModel} customer
     */
    customer = undefined;

    /**
     * Assign to
     * @member {module:model/ProductInstanceUID} assign
     */
    assign = undefined;

    /**
     * Type of payment container
     * @member {String} type
     */
    type = undefined;

    /**
     * Public payment instrument data
     * @member {module:model/BankAccountDescriptor} public
     */
    public = undefined;

    /**
     * Private payment instrument data
     * @member {module:model/BankAccountDescriptor} private
     */
    private = undefined;

    /**
     * Creation date
     * @member {String} created
     */
    created = undefined;

    /**
     * Last update date
     * @member {String} updated
     */
    updated = undefined;

    /**
     * Payment container mandate
     * @member {module:model/PaymentContainerMandate} mandate
     */
    mandate = undefined;

}
