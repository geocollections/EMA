export default {
  title: 'Eesti Maapõue Andmebaas',
  landing: {
    drillcores: 'Puursüdamikud ({number})',
    localities: 'Lokaliteedid ({number})',
    sites: 'Uuringupunktid ({number})',
    samples: 'Proovid ({number})',
    analyses: 'Analüüsid ({number})',
    preparations: 'Preparaadid ({number})',
  },
  common: {
    general: 'Üldinfo',
    pictures: 'Pildid',
    noValue: '-',
    title: 'Eesti Geokogude Portaal',
    previous: 'Eelmine',
    next: 'Järgmine',
    links: 'Lingid',
    search: 'Otsing',
    small: 'Väike',
    medium: 'Keskmine',
    large: 'Suur',
    original: 'Originaal',
    linkToEdit: 'Muuda kirjet',
  },
  link: {
    sarvAPI: 'Avalik API',
    github: 'GitHub',
    fossils: 'Baltoskandia fossiilid',
    sarvDOI: 'SARV-DOI teadusandmete repositoorium',
    eurocore: 'EUROCORE puursüdamike portaal',
    chitinozoa: 'Kitiinikute andmebaas',
    turvas: 'Turbauuringute andmebaas',
    geokirjandus: 'Eesti maapõue kirjandus',
    geokogud: 'Geokogude portaal',
  },
  locality: {
    locality: 'Lokaliteet',
    country: 'Riik',
    countryFormat: '{name}',
    latitude: 'Lat',
    longitude: 'Long',
    depth: 'Sügavus',
    elevation: 'Kõrgus',
    coordx: 'X (m)',
    coordy: 'Y (m)',
    epsg: 'EPSG',
    name: 'Nimi',
    type: 'Tüüp',
    parish: 'Vald',
    settlement: 'Asutusüksus',
    coordinateMethod: 'Koord. meetod',
    coordinateAgent: 'Koord. määraja',
    locationRemarks: 'Asukoha kirjeldus',
    stratigraphyTop: 'Strat. algus',
    stratigraphyBase: 'Strat. lõpp',
    remarks: 'Lisainfo',
    map: 'Kaart',
    synonyms: 'Sünonüümid ({number})',
    specimens: 'Eksemplarid ({number})',
    references: 'Kirjandus ({number})',
    attachments: 'Failid ({number})',
    samples: 'Proovid ({number})',
    stratotypes: 'Stratotüübid ({number})',
    coordinateSystem: 'Kordinaatsüsteem',
    coordinateX: 'X',
    coordinateY: 'Y',
    coordinatePrecision: 'Koordinaatide täpsus',
    descriptions: 'Kirjeldused ({number})',
    drillcore: 'Puursüdamik',
    drillcoreBoxes: 'Kastid ({number})',
  },
  localitySynonym: {
    synonym: 'Sünonüüm',
    pages: 'Leheküljed',
    reference: 'Viide',
    remarks: 'Lisainfo',
  },
  drillcore: {
    id: 'ID',
    name: 'Nimi',
    boxes: 'Südamikukaste',
    depository: 'Hoidla',
    remarks: 'Lisainfo',
    storage: 'Hoiukoht',
    driller: 'Puurija',
    year: 'Puurimise aasta',
    metersInBox: 'Meetreid kastis',
    boxNumbers: 'Kastinumbrid',
    drillcoreBoxesTitle: 'Kastid ({number})',
    localityDescriptions: 'Kirjeldused ({number})',
    localityReferences: 'Kirjandus ({number})',
    attachments: 'Failid ({number})',
    samples: 'Proovid ({number})',
    analyses: 'Analüüsid ({number})',
    specimens: 'Eksemplarid ({number})',
    depth: 'Sügavus',
  },
  drillcoreBox: {
    id: 'ID',
    drillcore: 'Puursüdamik',
    nr: 'Kast nr {number}',
    depthStart: 'Algus (m)',
    depthEnd: 'Lõpp (m)',
    depthOther: 'Muud sügavused',
    stratigraphyBaseFree: 'Strat. algus (tekst)',
    stratigraphyTopFree: 'Strat. lõpp (tekst)',
    stratigraphyTop: 'Strat. algus',
    stratigraphyBase: 'Strat. lõpp',
    remarks: 'Lisainfo',
    diameter: 'Diameeter',
    author: 'Foto autor',
    date: 'Foto kuupäev',
  },
  localityDescription: {
    stratigraphy: 'Stratigraafia',
    depthBase: 'Kuni (m)',
    depthTop: 'Alates (m)',
    thickness: 'Paksus (m)',
    rock: 'Kivim',
    description: 'Kirjeldus',
    author: 'Autor',
  },
  localityReference: {
    reference: 'Kirje',
    remarks: 'Lisainfo',
    pages: 'Lk',
    referenceTitle: 'Pealkiri',
  },
  sampleReference: {
    reference: 'Reference',
    remarks: 'Remarks',
    pages: 'Pages',
    referenceTitle: 'Pealkiri',
  },
  attachment: {
    author: 'Autor',
    description: 'Kirjeldus',
    file: 'Fail',
  },
  analysis: {
    id: 'ID',
    sampleNumber: 'Proovi nr',
    depth: 'Sügavus',
    depthInterval: 'Süg. kuni',
    method: 'Metoodika',
    methodDetails: 'Met. detailid',
    analysedBy: 'Isik/asutus',
    date: 'Aeg',
    thickness: 'Paksus',
    title: 'Analüüs ID: {id}',
    remarks: 'Lisainfo',
    reference: 'Viide',
    dataset: 'Andmekogu',
    locality: 'Lokaliteet',
    stratigraphy: 'Stratigraafia',
    stratigraphyAndLithostratigraphy: 'Stratigraafia | Litostratigraafia',
    lab: 'Lab',
    lithostratigraphy: 'Litostratigraafia',
    results: 'Tulemused ({number})',
    attachments: 'Failid ({number})',
  },
  analysisResult: {
    parameter: 'Parameeter',
    value: 'Väärtus',
    valueText: 'Tekst',
    valueError: 'Viga',
  },
  specimen: {
    id: 'ID',
    number: 'Nr',
    depth: 'Sügavus',
    depthInterval: 'Süg. kuni',
    fossilGroup: 'Fossiilirühm',
    kind: 'Tüüp',
    stratigraphy: 'Stratigraafia',
    taxon: 'Takson',
    thickness: 'Paksus',
    image: 'Pilt',
  },
  stratotype: {
    stratigraphy: 'Stratigraafia',
    type: 'Tüüp',
    depthTop: 'Alates (m)',
    depthBase: 'Kuni (m)',
    reference: 'Viide',
    remarks: 'Lisainfo',
  },
  area: {
    id: 'ID',
    name: 'Nimi',
    areaType: 'Ala tüüp',
    maakond: 'Maakond',
    areaHa: 'Ala (ha)',
    depositAreaHa: 'Maardla (ha)',
    description: 'Iseloomustus',
    egf: 'EGF',
    maardla: 'Maardla (viide registrisse)',
    eelis: 'Looduskaitse (viide registrisse)',
    text1: 'Turbaala plaan',
    maardlaLink: 'Maardla info Maa-ameti geoportaalis',
    sites: 'Uuringupunktid ({number})',
    localityReferences: 'Kirjandus ({number})',
  },
  site: {
    id: 'ID',
    name: 'Nimi',
    area: 'Ala',
    areaText1: 'Turbaala plaan',
    coordx: 'X (L-EST, m)',
    coordy: 'Y (L-EST, m)',
    elevation: 'Z (m)',
    depth: 'Sügavus / paksus (m)',
    description: 'Arvamus',
    elevationAccuracy: 'Kõrguse täpsus',
    locality: 'Asukoht',
    attachments: 'Failid ({number})',
    samples: 'Proovid ({number})',
    localityDescriptions: 'Kirjeldused ({number})',
    localityReferences: 'Kirjandus ({number})',
    project: 'Projekt',
    latitude: 'Lat',
    longitude: 'Long',
  },
  sample: {
    id: 'ID',
    name: 'Name',
    area: 'Area',
    areaText1: 'Peat area plan',
    coordx: 'X (L-EST, m)',
    coordy: 'Y (L-EST, m)',
    elevation: 'Z (m)',
    depth: 'Depth / thickness (m)',
    description: 'Description',
    elevationAccuracy: 'Elevation accuracy',
    locality: 'Location',
    number: 'Nr',
    depthInterval: 'Süg. kuni',
    stratigraphy: 'Stratigraafia',
    collector: 'Koguja',
    dateCollected: 'Kogumise aeg',
    thickness: 'Paksus',
    palaeontology: 'Paleontoloogia',
    owner: 'Omanik',
    database: 'Asutus',
    numberAdditional: 'Vana number',
    numberField: 'Välinumber',
    lithostratigraphy: 'Litostratigraafia',
    stratigraphyFree: 'Stratigraafia vaba',
    stratigraphyBed: 'Kiht',
    agentCollected: 'Koguja',
    mass: 'Mass',
    samplePurpose: 'Proovi eesmärk',
    rock: 'Rock',
    classificationRock: 'Materjal',
    fossils: 'Fauna',
    remarks: 'Lisainfo',
    localityFree: 'Lokaliteet vaba',
    attachments: 'Attachments ({number})',
    analyses: 'Analüüsid ({number})',
    preparations: 'Preparaadid ({number})',
    taxa: 'Taksonid ({number})',
    sampleReferences: 'Kirjandus ({number})',
  },
  preparation: {
    id: 'ID',
    preparation_number: 'Prep. number',
    locality: 'Lokaliteet',
    depth: 'Sügavus',
    stratigraphy: 'Stratigraafia | Litostratigraafia',
    agent: 'Coll.',
    mass: 'Kaal',
    taxon: 'Fossiil rühm',
    storage: 'Hoiukoht',
    remarks: 'Lisainfo',
  },
  taxon: {
    taxon: 'Takson',
    name: 'Takson, txt',
    frequency: 'Arvukus',
    agent_identified: 'Det.',
    date_identified: 'Det. aeg',
    extra: 'Ekstra',
    remarks: 'Lisainfo',
  },
  infinite: {
    noMore: '',
    error: '',
    retry: 'Proovi uuesti',
  },
  gestureHandling: {
    touch: 'Kasuta kahte näppu kaardi liigutamiseks',
    scroll: 'Kasuta ctrl + scroll kaardi suumimiseks',
    scrollMac: 'Kasuta \u2318 + scroll kaardi suumimiseks',
  },
  table: {
    itemsPerPage: 'Ridade arv:',
    noData: 'Andmeid ei leitud',
  },
  footerPreliminary: '2021 | EMA: Eesti Maapõue Andmebaas',
  footer:
    'Siin leiduvad materjalid on enamasti kasutamiseks {0} litsentsi alusel, kui pole näidatud teisiti. Portaal on osaks {1} teadustaristust ning infosüsteemist {2}, majutab {3}. Tarkvara on loodud kasutades {4}, raamistikku ning kättesaadav {5}.',
  footerLinks: {
    sarv: 'Geoloogia infosüsteem SARV',
    natarc: 'Loodusteaduslikud arhiivid ja infovõrgustik (NATARC)',
    el: 'Euroopa Liit',
  },
}
