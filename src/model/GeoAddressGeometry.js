
import ApiClient from '../ApiClient';





/**
* The GeoAddressGeometry model module.
* @module model/GeoAddressGeometry
*/
export default class GeoAddressGeometry {
    /**
    * Constructs a new <code>GeoAddressGeometry</code>.
    * Geometry
    * @alias module:model/GeoAddressGeometry
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GeoAddressGeometry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeoAddressGeometry} obj Optional instance to populate.
    * @return {module:model/GeoAddressGeometry} The populated <code>GeoAddressGeometry</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoAddressGeometry();

            
            
            

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'String');
            }
            if (data.hasOwnProperty('lon')) {
                obj['lon'] = ApiClient.convertToType(data['lon'], 'String');
            }
        }
        return obj;
    }

    /**
    * latitude
    * @member {String} lat
    */
    lat = undefined;
    /**
    * longitude
    * @member {String} lon
    */
    lon = undefined;








}


