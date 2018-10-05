
import ApiClient from '../ApiClient';





/**
* The PaymentContractsDTOIFrameOpts model module.
* @module model/PaymentContractsDTOIFrameOpts
*/
export default class PaymentContractsDTOIFrameOpts {
    /**
    * Constructs a new <code>PaymentContractsDTOIFrameOpts</code>.
    * @alias module:model/PaymentContractsDTOIFrameOpts
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsDTOIFrameOpts</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsDTOIFrameOpts} obj Optional instance to populate.
    * @return {module:model/PaymentContractsDTOIFrameOpts} The populated <code>PaymentContractsDTOIFrameOpts</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsDTOIFrameOpts();

            
            
            

            if (data.hasOwnProperty('show_basket')) {
                obj['show_basket'] = ApiClient.convertToType(data['show_basket'], 'Boolean');
            }
            if (data.hasOwnProperty('basket_title')) {
                obj['basket_title'] = ApiClient.convertToType(data['basket_title'], 'String');
            }
            if (data.hasOwnProperty('submit_button_title')) {
                obj['submit_button_title'] = ApiClient.convertToType(data['submit_button_title'], 'String');
            }
            if (data.hasOwnProperty('logo_base64')) {
                obj['logo_base64'] = ApiClient.convertToType(data['logo_base64'], 'String');
            }
            if (data.hasOwnProperty('cession')) {
                obj['cession'] = ApiClient.convertToType(data['cession'], 'String');
            }
        }
        return obj;
    }

    /**
    * Display the basket items to the customer during the checkout
    * @member {Boolean} show_basket
    */
    show_basket = undefined;
    /**
    * Default headline of the checkout page
    * @member {String} basket_title
    */
    basket_title = undefined;
    /**
    * Default naming of the Submit-Button
    * @member {String} submit_button_title
    */
    submit_button_title = undefined;
    /**
    * Logo base64-enconded
    * @member {String} logo_base64
    */
    logo_base64 = undefined;
    /**
    * Cession ('formal', 'personal')
    * @member {String} cession
    * @default 'personal'
    */
    cession = 'personal';








}


