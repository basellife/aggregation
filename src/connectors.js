import _ from 'lodash';
// add this import at the top
import fetch from 'node-fetch';

var person = {fname:"John", lname:"Doe", age:25}; 
const Countries = 
  {shortName:"ae",Name:"United Arab Emirates"}
  /*
  ['ar', 'Argentina'],
  ['at', 'Austria'],
  ['au', 'Australia'],
  ['be', 'Belgium'],
  ['bg', 'Bulgaria'],
  ['br', 'Brasil'],
  ['ca', 'Canada'],
  ['ch','Switzerland'],
  ['cn', 'China'],
  ['co', 'Columbia'],
  ['cu', 'Cuba'],
  ['cz ', 'Czech Republic'],
  ['de', 'Germany'],
  ['eg', 'Egypt'],
  ['fr', 'France'],
  ['gb', 'United Kingdom'],
  ['gr','Greece'],
  ['hk', 'Hong Kong'],
  ['hu', 'Hungary'],
  ['id', 'India'],
  ['ie', 'Ireland'],
  ['il', 'Israel'],
  ['in', 'India'],
  ['it', 'Italy'],
  ['jp', 'Japan'],
  ['kr', 'Korea'],
  ['lt', 'Lithuania'],
  ['lv', 'Latvia'],
  ['ma', 'Morroco'],
  ['mx', 'Mexico'],
  ['my', 'Malaysia'],
  ['ng', 'Nigeria'],
  ['nl', 'Netherlands'],
  ['no', 'Norway'],
  ['nz', 'New Zealand'],
  ['ph', 'Phiippines'],
  ['pl', 'Poland'],
  ['pt', 'Portugal'],
  ['ro', 'Romania'],
  ['rs', 'Serbia'],
  ['ru', 'Russian Federation'],
  ['sa', 'Saudi Arabia'],
  ['se', 'Sweden'],
  ['sg', 'Singapore'],
  ['si', 'Slovenia'],
  ['sk', 'Slovakia'],
  ['th', 'Thailand'],
  ['tr', 'Turkey'],
  ['tw', 'Taiwan'],
  ['ua', 'Ukraine'],
  ['us', 'Usa'],
  ['ve', 'Venezuela'],
  ['za', 'Zambia']
  ];*/

const Categories  = [
  'business',
  'entertainment',
  'general health',
  'science',
'sports',
  'technology'
];
const DataSources  = [
  'usa today',
  'reddit',
  'fox news',
  'bbc',
'nbc',
  'cnet'
];


export {  Countries, Categories, DataSources };
