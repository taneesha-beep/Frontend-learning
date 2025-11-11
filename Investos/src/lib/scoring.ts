import { Question, Trait } from '../data/questions';
import { Persona } from '../data/personas';

const PRIORS: Record<Trait, number> = { RT:50, RC:50, LA:50, LQ:50, KD:50 };
const clamp = (x:number)=> Math.max(0, Math.min(100, x));

export function scoreTraits(answers:number[], questions:Question[]){
  const t = { ...PRIORS };
  answers.forEach((choiceIdx, qi)=>{
    if (choiceIdx < 0) return;
    const w = questions[qi].choices[choiceIdx].w;
    Object.entries(w).forEach(([k,v])=>{ t[k as Trait] += v ?? 0; });
  });
  (Object.keys(t) as Trait[]).forEach(k=> t[k]=clamp(t[k]));
  return t;
}

function riskScore(t:Record<Trait, number>){
  const raw = 0.45*t.RT + 0.25*t.RC + 0.15*t.KD - 0.10*t.LA - 0.05*t.LQ;
  return clamp(raw);
}

export function inferPersona(t:Record<Trait, number>): Persona {
  const risk = riskScore(t);
  const intlBias = (t.KD>=65 && t.RT>=60);
  if (risk < 35) return 'Cautious Koala';
  if (risk < 55) return 'Steady Stallion';
  if (risk < 70) return 'Balanced Barista';
  if (risk < 85) return intlBias? 'Global Falcon' : 'Bold Bull';
  return intlBias? 'Global Falcon' : 'Bold Bull';
}

export function confidence(t:Record<Trait,number>){
  const r = riskScore(t);
  const bounds = [35,55,70,85];
  const d = Math.min(...bounds.map(b=> Math.abs(r-b)));
  return Math.max(0.5, Math.min(0.95, d/50 + 0.5));
}

export function analyze(answers:number[], questions:Question[]){
  const traits = scoreTraits(answers, questions);
  const persona = inferPersona(traits);
  return { traits, persona, confidence: confidence(traits) };
}
