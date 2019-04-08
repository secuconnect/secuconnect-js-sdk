
import ApiClient from '../ApiClient';
import ProductInstanceUID from './ProductInstanceUID';
import SmartRoutingsAssign from './SmartRoutingsAssign';
import Store from './Store';

/**
 * The SmartRoutingsProductModel model module.
 * @module model/SmartRoutingsProductModel
 */
export default class SmartRoutingsProductModel {
    /**
     * Constructs a new <code>SmartRoutingsProductModel</code>.
     * @alias module:model/SmartRoutingsProductModel
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>SmartRoutingsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsProductModel} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsProductModel} The populated <code>SmartRoutingsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartRoutingsProductModel();
            
            
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('merchant')) {
                obj['merchant'] = ProductInstanceUID.constructFromObject(data['merchant']);
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = Store.constructFromObject(data['store']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('assign')) {
                obj['assign'] = ApiClient.convertToType(data['assign'], [SmartRoutingsAssign]);
            }
        }
        return obj;
    }

    /**
     * Object of smart routing
     * @member {String} object
     */
    object = undefined;

    /**
     * Id of smart routing
     * @member {String} id
     */
    id = undefined;

    /**
     * Merchant
     * @member {module:model/ProductInstanceUID} merchant
     */
    merchant = undefined;

    /**
     * Store
     * @member {module:model/Store} store
     */
    store = undefined;

    /**
     * Created at date
     * @member {String} created
     */
    created = undefined;

    /**
     * Updated at date
     * @member {String} updated
     */
    updated = undefined;

    /**
     * Description
     * @member {String} description
     */
    description = undefined;

    /**
     * Assign
     * @member {Array.<module:model/SmartRoutingsAssign>} assign
     */
    assign = undefined;

}
