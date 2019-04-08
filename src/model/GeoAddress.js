
import ApiClient from '../ApiClient';
import AddressComponents from './AddressComponents';
import GeoAddressGeometry from './GeoAddressGeometry';

/**
 * The GeoAddress model module.
 * @module model/GeoAddress
 */
export default class GeoAddress {
    /**
     * Constructs a new <code>GeoAddress</code>.
     * @alias module:model/GeoAddress
     * @class
     */

    constructor() {
        
    }

    /**
    * Constructs a <code>GeoAddress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeoAddress} obj Optional instance to populate.
    * @return {module:model/GeoAddress} The populated <code>GeoAddress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoAddress();
            
            
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address_components')) {
                obj['address_components'] = AddressComponents.constructFromObject(data['address_components']);
            }
            if (data.hasOwnProperty('address_formatted')) {
                obj['address_formatted'] = ApiClient.convertToType(data['address_formatted'], 'String');
            }
            if (data.hasOwnProperty('geometry')) {
                obj['geometry'] = GeoAddressGeometry.constructFromObject(data['geometry']);
            }
        }
        return obj;
    }

    /**
     * Address type
     * @member {String} type
     */
    type = undefined;

    /**
     * Address components
     * @member {module:model/AddressComponents} address_components
     */
    address_components = undefined;

    /**
     * Address formatted
     * @member {String} address_formatted
     */
    address_formatted = undefined;

    /**
     * @member {module:model/GeoAddressGeometry} geometry
     */
    geometry = undefined;

}
