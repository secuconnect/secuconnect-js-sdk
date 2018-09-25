
import ApiClient from '../ApiClient';
import AssignedBy from './AssignedBy';
import GeneralMerchantsCheckoutOptions from './GeneralMerchantsCheckoutOptions';
import GeneralMerchantsLegalDetails from './GeneralMerchantsLegalDetails';
import GeneralMerchantsUrls from './GeneralMerchantsUrls';
import GeneralMerchantsUser from './GeneralMerchantsUser';
import InvitedBy from './InvitedBy';
import ParentModel from './ParentModel';





/**
* The GeneralMerchantsProductModel model module.
* @module model/GeneralMerchantsProductModel
*/
export default class GeneralMerchantsProductModel {
    /**
    * Constructs a new <code>GeneralMerchantsProductModel</code>.
    * @alias module:model/GeneralMerchantsProductModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeneralMerchantsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsProductModel} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsProductModel} The populated <code>GeneralMerchantsProductModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralMerchantsProductModel();

            
            
            

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('id_old')) {
                obj['id_old'] = ApiClient.convertToType(data['id_old'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = GeneralMerchantsUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ParentModel.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('assigned_by')) {
                obj['assigned_by'] = ApiClient.convertToType(data['assigned_by'], [AssignedBy]);
            }
            if (data.hasOwnProperty('invited_by')) {
                obj['invited_by'] = ApiClient.convertToType(data['invited_by'], [InvitedBy]);
            }
            if (data.hasOwnProperty('legal_details')) {
                obj['legal_details'] = GeneralMerchantsLegalDetails.constructFromObject(data['legal_details']);
            }
            if (data.hasOwnProperty('checkout_options')) {
                obj['checkout_options'] = GeneralMerchantsCheckoutOptions.constructFromObject(data['checkout_options']);
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = GeneralMerchantsUrls.constructFromObject(data['urls']);
            }
        }
        return obj;
    }

    /**
    * Object of general merchant
    * @member {String} object
    */
    object = undefined;
    /**
    * Id of general merchant
    * @member {String} id
    */
    id = undefined;
    /**
    * Old id of general merchant
    * @member {String} id_old
    */
    id_old = undefined;
    /**
    * Type of general merchant
    * @member {String} type
    */
    type = undefined;
    /**
    * General merchant user
    * @member {module:model/GeneralMerchantsUser} user
    */
    user = undefined;
    /**
    * Parent of general merchant user
    * @member {module:model/ParentModel} parent
    */
    parent = undefined;
    /**
    * Assigned by
    * @member {Array.<module:model/AssignedBy>} assigned_by
    */
    assigned_by = undefined;
    /**
    * Invited by
    * @member {Array.<module:model/InvitedBy>} invited_by
    */
    invited_by = undefined;
    /**
    * Legal details
    * @member {module:model/GeneralMerchantsLegalDetails} legal_details
    */
    legal_details = undefined;
    /**
    * Checkout options
    * @member {module:model/GeneralMerchantsCheckoutOptions} checkout_options
    */
    checkout_options = undefined;
    /**
    * Urls
    * @member {module:model/GeneralMerchantsUrls} urls
    */
    urls = undefined;








}


