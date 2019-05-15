
import ApiClient from '../ApiClient';
import PaymentContainersProductModel from './PaymentContainersProductModel';

/**
 * The PaymentContainersList model module.
 * @module model/PaymentContainersList
 */
export default class PaymentContainersList {
    /**
     * Constructs a new <code>PaymentContainersList</code>.
     * @alias module:model/PaymentContainersList
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaymentContainersList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContainersList} obj Optional instance to populate.
    * @return {module:model/PaymentContainersList} The populated <code>PaymentContainersList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContainersList();
            
            
            
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentContainersProductModel]);
            }
        }
        return obj;
    }

    /**
     * Number of existing payment containers
     * @member {Number} count
     */
    count = undefined;

    /**
     * GET Payment/Containers
     * @member {Array.<module:model/PaymentContainersProductModel>} data
     */
    data = undefined;

}
