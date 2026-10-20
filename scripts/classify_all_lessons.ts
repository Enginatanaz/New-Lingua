import { getFullCurriculumLessons } from '../src/data/curriculumData';

const lessons = getFullCurriculumLessons();
console.log(`Analyzing all ${lessons.length} lessons for domain categorization...`);

interface RuleMatch {
  domain: string;
  count: number;
  sampleTitles: string[];
}

const domains: Record<string, RuleMatch> = {};

function recordDomain(d: string, title: string) {
  if (!domains[d]) {
    domains[d] = { domain: d, count: 0, sampleTitles: [] };
  }
  domains[d].count++;
  if (domains[d].sampleTitles.length < 3) {
    domains[d].sampleTitles.push(title);
  }
}

for (const l of lessons) {
  const t = l.title.toLowerCase();
  const m = l.moduleName.toLowerCase();
  const full = `${t} ${m} ${(l.subtopic || '').toLowerCase()}`;

  if (full.includes('saat') || full.includes('what time') || full.includes('zaman ifade') || full.includes('günler, aylar') || full.includes('tarih')) {
    recordDomain('time_and_dates', l.title);
  } else if (full.includes('meslek') || full.includes('çalışma alan') || full.includes('job') || full.includes('profession') || full.includes('occupation')) {
    recordDomain('jobs_and_professions', l.title);
  } else if (full.includes('zamir') || full.includes('pronoun') || full.includes('kişi zamir') || full.includes('iyelik')) {
    recordDomain('pronouns_and_possession', l.title);
  } else if (full.includes('to be') || full.includes('am / is / are') || full.includes('am, is, are') || full.includes('olmak fiili')) {
    recordDomain('to_be_copula', l.title);
  } else if (full.includes('there is') || full.includes('there are') || full.includes('varlık bildirimi')) {
    recordDomain('there_is_are', l.title);
  } else if (full.includes('edat') || full.includes('preposition') || full.includes('konum edat') || full.includes('yer edat')) {
    recordDomain('prepositions_place_direction', l.title);
  } else if (full.includes('present simple') || full.includes('geniş zaman') || full.includes('rutin') || full.includes('alışkanlık')) {
    recordDomain('present_simple', l.title);
  } else if (full.includes('present continuous') || full.includes('şimdiki zaman') || full.includes('anlık eylem')) {
    recordDomain('present_continuous', l.title);
  } else if (full.includes('past continuous') || full.includes('geçmişte süregelen') || full.includes('when & while') || full.includes('when vs while') || full.includes('when / while')) {
    recordDomain('past_continuous', l.title);
  } else if (full.includes('past simple') || full.includes('geçmiş zaman') || full.includes('düzenli ve düzensiz') || full.includes('did yardımcı')) {
    recordDomain('past_simple', l.title);
  } else if (full.includes('present perfect continuous') || full.includes('süreç ve etki') || full.includes('for/since') || full.includes('for & since')) {
    recordDomain('present_perfect_continuous', l.title);
  } else if (full.includes('present perfect') || full.includes('deneyimler') || full.includes('yaşam olayları') || full.includes('ever, never')) {
    recordDomain('present_perfect', l.title);
  } else if (full.includes('going to') || full.includes('will') || full.includes('gelecek plan') || full.includes('tahmin')) {
    recordDomain('future_forms', l.title);
  } else if (full.includes('conditional') || full.includes('koşul') || full.includes('şart')) {
    recordDomain('conditionals', l.title);
  } else if (full.includes('passive') || full.includes('edilgen')) {
    recordDomain('passive_voice', l.title);
  } else if (full.includes('reported speech') || full.includes('dolaylı anlatım') || full.includes('indirect question') || full.includes('dolaylı soru')) {
    recordDomain('reported_and_indirect', l.title);
  } else if (full.includes('relative clause') || full.includes('ilgi cümlecik') || full.includes('defining') || full.includes('non-defining')) {
    recordDomain('relative_clauses', l.title);
  } else if (full.includes('modal') || full.includes('can & can') || full.includes('must') || full.includes('should') || full.includes('have to') || full.includes('may, might')) {
    recordDomain('modals', l.title);
  } else if (full.includes('comparative') || full.includes('superlative') || full.includes('karşılaştırma') || full.includes('üstünlük')) {
    recordDomain('comparison', l.title);
  } else if (full.includes('inversion') || full.includes('devrik') || full.includes('vurgu strateji') || full.includes('cleft') || full.includes('fronting')) {
    recordDomain('inversion_and_cleft', l.title);
  } else if (full.includes('subjunctive') || full.includes('istek kipi') || full.includes('yalın fiil zorunluluğu')) {
    recordDomain('subjunctive_mood', l.title);
  } else if (full.includes('hedging') || full.includes('akademik mesafelenme') || full.includes('yumuşatma') || full.includes('stance')) {
    recordDomain('hedging_and_stance', l.title);
  } else if (full.includes('phrasal verb') || full.includes('deyimsel') || full.includes('idiom') || full.includes('collocation') || full.includes('kollokasyon')) {
    recordDomain('idioms_and_collocations', l.title);
  } else if (full.includes('tanışma') || full.includes('nezaket') || full.includes('alfabe') || full.includes('spelling') || full.includes('sosyal') || full.includes('restoran') || full.includes('seyahat') || full.includes('yol tarifi') || full.includes('mülakat') || full.includes('e-posta') || full.includes('iletişim') || full.includes('tartışma') || full.includes('sunum') || full.includes('hitabet') || full.includes('üslup') || full.includes('ironi') || full.includes('hukuk') || full.includes('finans')) {
    recordDomain('functional_and_discourse', l.title);
  } else if (full.includes('yiyecek') || full.includes('içecek') || full.includes('miktar') || full.includes('renk') || full.includes('duygu') || full.includes('hava') || full.includes('evim') || full.includes('oda') || full.includes('nesne')) {
    recordDomain('vocabulary_thematic', l.title);
  } else {
    recordDomain('unclassified', l.title);
  }
}

console.log('\n--- DOMAIN DISTRIBUTION ACROSS 488 LESSONS ---');
Object.values(domains).sort((a, b) => b.count - a.count).forEach(d => {
  console.log(`• ${d.domain.padEnd(30)}: ${d.count.toString().padStart(3)} lessons | e.g.: ${d.sampleTitles.join(' | ')}`);
});
