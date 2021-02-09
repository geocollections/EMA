export default {
  common: {
    general: 'General info',
    pictures: 'Pictures',
    noValue: ' - ',
    title: 'Geoscience collections of Estonia',
    previous: 'Previous',
    next: 'Next',
    links: 'Links',
  },
  link: {
    sarvAPI: 'Public API',
    github: 'GitHub',
    fossils: 'Fossils',
    sarvDOI: 'Research data (DOI)',
    eurocore: 'EUROCORE data portal',
    chitinozoa: 'Baltic chitinozoans',
    turvas: 'Peat studies database',
    geokirjandus: 'Geological Literature',
    geokogud: 'Geocollections portal',
  },
  locality: {
    locality: 'Locality',
    country: 'Country',
    countryFormat: '{name} ({iso})',
    latitude: 'Latitude',
    longitude: 'Longitude',
    depth: 'Depth',
    elevation: 'Elevation',
    coordx: 'X',
    coordy: 'Y',
    epsg: 'EPSG',
  },
  drillcore: {
    id: 'ID',
    name: 'Name',
    boxes: 'Boxes',
    depository: 'Depository',
    remarks: 'Remarks',
    storage: 'Storage',
    driller: 'Driller',
    year: 'Drilling year',
    metersInBox: 'Meters in box',
    boxNumbers: 'Box numbers',
    drillcoreBoxesTitle: 'Boxes',
    localityDescriptions: 'Descriptions',
    localityReferences: 'References',
    attachments: 'Attachments',
    samples: 'Samples',
    analyses: 'Analyses',
    specimens: 'Specimens',
  },
  drillcoreBox: {
    id: 'ID',
    drillcore: 'Drillcore',
    nr: 'Box nr. {number}',
    depthStart: 'Start (m)',
    depthEnd: 'End (m)',
    depthOther: 'Depth info',
    stratigraphyBaseFree: 'Strat. base text',
    stratigraphyTopFree: 'Strat. top text',
    stratigraphyTop: 'Strat. top',
    stratigraphyBase: 'Strat. base',
    remarks: 'Remarks',
  },
  localityDescription: {
    stratigraphy: 'Stratigraphy',
    depthBase: 'To (m)',
    depthTop: 'From (m)',
    rock: 'Rock',
    description: 'Description',
    author: 'Author',
  },
  localityReference: {
    reference: 'Reference',
    remarks: 'Remarks',
    pages: 'Pages',
    referenceTitle: 'Pealkiri',
  },
  attachment: {
    author: 'Author',
    description: 'Description',
  },
  samples: {
    id: 'ID',
    number: 'Number',
    depth: 'Depth',
    depthInterval: 'Depth interval',
    stratigraphy: 'Stratigraphy',
    collector: 'Collector',
    dateCollected: 'Date collected',
  },
  analysis: {
    id: 'ID',
    sampleNumber: 'Sample number',
    depth: 'Depth',
    depthInterval: 'Depth interval',
    method: 'Method',
    methodDetails: 'Method details',
    analysedBy: 'Person/Institution',
    date: 'Date',
  },
  specimen: {
    id: 'ID',
    number: 'Number',
    depth: 'Depth',
    depthInterval: 'Depth to',
    fossilGroup: 'Fossil group',
    kind: 'Type',
    stratigraphy: 'Stratigraphy',
    taxon: 'Taxon',
  },
  footerPreliminary: '2021 GRIS: Geology portal (preview version).',
  footer:
    'All materials in the portal are for free usage according to {0} licence, unless indicated otherwise. Portal is part of {1} national research infrastructure and geoscience data platform {2}, hosted by {3}. Built using {4}, available on {5}.',
  footerLinks: {
    kik: 'Environmental Investment Centre',
    natarc: 'Natural history archives and information network“ (NATARC)',
    el: 'European Union',
  },
}
