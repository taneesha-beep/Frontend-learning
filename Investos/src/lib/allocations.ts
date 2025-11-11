import { Persona } from '../data/personas';

export type Allocation = { label:string; pct:number };

export function getAllocation(p: Persona): Allocation[] {
  switch(p){
    case 'Cautious Koala':   return [ {label:'Debt/FDs', pct:70}, {label:'Large-cap Equity', pct:20}, {label:'Gold', pct:10} ];
    case 'Steady Stallion':  return [ {label:'Dividend/Value Equity', pct:60}, {label:'Debt', pct:25}, {label:'Gold', pct:15} ];
    case 'Balanced Barista': return [ {label:'Broad Equity Index', pct:50}, {label:'Debt', pct:30}, {label:'Gold', pct:20} ];
    case 'Bold Bull':        return [ {label:'Growth Equity', pct:70}, {label:'International Equity', pct:20}, {label:'Gold', pct:10} ];
    case 'Global Falcon':    return [ {label:'International Equity', pct:50}, {label:'Large-cap Equity', pct:30}, {label:'Gold', pct:20} ];
  }
}
