// INDEX SIGNATURES
// When we don't know the property names for an object -- eg. API/external data

// Example: Not sure what object key name will be
interface SolarEclipse {
  // Create index signature to define variable property name of each typed member
  // `latitude` name is only there as a human-readable name
  [latitude: string]: boolean;
}

const solarEclipseCoords: SolarEclipse = {
  '40.712776': true,
  '41.203323': true,
  '40.417286': false,
};

// INDEX SIGNATURE SYNTAX
// [propertyName: propertyType]: valueType
