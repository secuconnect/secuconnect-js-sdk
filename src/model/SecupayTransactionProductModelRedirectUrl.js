
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionProductModelRedirectUrl model module.
* @module model/SecupayTransactionProductModelRedirectUrl
* @version 2.0.0
*/
export default class SecupayTransactionProductModelRedirectUrl {
    /**
    * Constructs a new <code>SecupayTransactionProductModelRedirectUrl</code>.
    * A list of redirect urls used for the payment checkout page
    * @alias module:model/SecupayTransactionProductModelRedirectUrl
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductModelRedirectUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModelRedirectUrl} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModelRedirectUrl} The populated <code>SecupayTransactionProductModelRedirectUrl</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductModelRedirectUrl();

            
            
            

            if (data.hasOwnProperty('iframe_url')) {
                obj['iframe_url'] = ApiClient.convertToType(data['iframe_url'], 'String');
            }
            if (data.hasOwnProperty('url_success')) {
                obj['url_success'] = ApiClient.convertToType(data['url_success'], 'String');
            }
            if (data.hasOwnProperty('url_failure')) {
                obj['url_failure'] = ApiClient.convertToType(data['url_failure'], 'String');
            }
            if (data.hasOwnProperty('url_push')) {
                obj['url_push'] = ApiClient.convertToType(data['url_push'], 'String');
            }
        }
        return obj;
    }

    /**
    * The url of the payment checkout iframe
    * @member {String} iframe_url
    */
    iframe_url = undefined;
    /**
    * After successfully entering the cash data of the payer is returned to this page.
    * @member {String} url_success
    */
    url_success = undefined;
    /**
    * After canceling or on errors the payer will be redirected to this page and can select there an another payment method.
    * @member {String} url_failure
    */
    url_failure = undefined;
    /**
    * The secupay system will be send status change notifications to this URL.
    * @member {String} url_push
    */
    url_push = undefined;








}


