export default {
  common: {
    general: 'Üldinfo',
    pictures: 'Pildid',
    noValue: ' - ',
    title: 'Eesti Geokogude Portaal',
    previous: 'Eelmine',
    next: 'Järgmine',
    links: 'Lingid',
    search: 'Otsing',
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
    latitude: 'Laiuskraad',
    longitude: 'Pikkuskraad',
    depth: 'Sügavus',
    elevation: 'Kõrgus',
    coordx: 'X',
    coordy: 'Y',
    epsg: 'EPSG',
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
    drillcoreBoxesTitle: 'Puursüdamikukastid',
    localityDescriptions: 'Kirjeldused',
    localityReferences: 'Kirjandus',
    attachments: 'Failid',
    samples: 'Proovid',
    analyses: 'Analüüsid',
    specimens: 'Eksemplarid',
  },
  drillcoreBox: {
    id: 'ID',
    drillcore: 'Puursüdamik',
    nr: 'Kast nr. {number}',
    depthStart: 'Algus (m)',
    depthEnd: 'Lõpp (m)',
    depthOther: 'Sügavus info',
    stratigraphyBaseFree: 'Strat. algus tekst',
    stratigraphyTopFree: 'Strat. lõpp tekst',
    stratigraphyTop: 'Strat. algus',
    stratigraphyBase: 'Strat. lõpp',
    remarks: 'Lisainfo',
  },
  localityDescription: {
    stratigraphy: 'Stratigraafia',
    depthBase: 'Kuni (m)',
    depthTop: 'Alates (m)',
    rock: 'Kivi',
    description: 'Kirjeldus',
    author: 'Autor',
  },
  localityReference: {
    reference: 'Kirje',
    remarks: 'Lisainfo',
    pages: 'Leheküljed',
    referenceTitle: 'Pealkiri',
  },
  attachment: {
    author: 'Autor',
    description: 'Kirjeldus',
  },
  samples: {
    id: 'ID',
    number: 'Number',
    depth: 'Sügavus',
    depthInterval: 'Sügavuse intervall',
    stratigraphy: 'Stratigraafia',
    collector: 'Koguja',
    dateCollected: 'Kogumise aeg',
  },
  analysis: {
    id: 'ID',
    sampleNumber: 'Proovi number',
    depth: 'Sügavus',
    depthInterval: 'Sügavus kuni',
    method: 'Metoodika',
    methodDetails: 'Metoodika detailid',
    analysedBy: 'Isik/Asutus',
    date: 'Date',
  },
  specimen: {
    id: 'ID',
    number: 'Number',
    depth: 'Sügavus',
    depthInterval: 'Sügavus intervall',
    fossilGroup: 'Fossiili grupp',
    kind: 'Tüüp',
    stratigraphy: 'Stratigraafia',
    taxon: 'Takson',
  },
  footerPreliminary: '2021 GRIS: Geoloogia portaal (testversioon).',
  footer:
    'Siin leiduvad materjalid on enamasti kasutamiseks {0} litsentsi alusel, kui pole näidatud teisiti. Portaal on osaks {1} teadustaristust ning infosüsteemist {2}, majutab {3}. Tarkvara on loodud kasutades {4}, raamistikku ning kättesaadav {5}.',
  footerLinks: {
    kik: 'Keskkonnainvesteeringute Keskus',
    natarc: 'Loodusteaduslikud arhiivid ja infovõrgustik (NATARC)',
    el: 'Euroopa Liit',
  },
}
