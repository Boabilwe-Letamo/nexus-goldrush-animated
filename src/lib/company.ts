const ceo = { url: '/ceo.png' };
const coo = { url: '/coo.jpeg' };
const cco = { url: '/cco.png' };
const ea = { url: '/danica-freitag.jpeg' };
const mining = { url: '/mining-logistics.jpeg' };
const fleet = { url: '/logistics-fleet.jpeg' };
import { Truck, FileCheck2, Pickaxe, Leaf } from 'lucide-react';

export const solutions = [
  { title: 'Integrated logistics', number: '01', icon: Truck, description: 'Multi-modal transport management connecting production zones to consumer markets across SADC.', detail: 'Regional freight and transport management across road, rail, and air. We connect infrastructure, industry, and innovation to move cargo safely and efficiently.', image: fleet.url },
  { title: 'Trade facilitation', number: '02', icon: FileCheck2, description: 'Smarter customs pre-clearance. Seamless compliance. Fewer barriers to regional trade.', detail: 'Customs pre-clearance and regulatory partnerships help reduce border delays and enhance compliance for faster, cleaner trade flows.', image: fleet.url },
  { title: 'Mining & industrial', number: '03', icon: Pickaxe, description: 'Purpose-built mine-to-market pathways for Africa’s resources and industrial supply chains.', detail: 'Specialist support for Botswana’s extractive industries, with mine-to-market logistics pathways, bulk transport consulting, and audit integrity.', image: mining.url },
  { title: 'Sustainable supply chains', number: '04', icon: Leaf, description: 'Carbon-conscious routing and responsible operations that create long-term value.', detail: 'Technology-driven supply chain optimisation supported by carbon-conscious routing, community integration, fair employment, and transparent reporting.', image: mining.url },
];
export const leaders = [
  { name: 'Boabilwe Larona Letamo', role: 'Co-Founder & Chief Executive Officer', short: 'CEO', image: ceo.url, description: 'Boabilwe provides strategic leadership and vision, scaling the company’s continental footprint, forming institutional partnerships, and aligning logistics innovation with national development priorities.' },
  { name: 'Juandré Versfeld', role: 'Co-Founder & Chief Operating Officer', short: 'COO', image: coo.url, description: 'Juandré oversees daily operations, project execution, and systems management. His focus is operational excellence, process discipline, cross-border trade, and regional network growth.' },
  { name: 'Nelson Molefhe', role: 'Chief Commercial Officer', short: 'CCO', image: cco.url, description: 'Nelson leads buyer acquisition, commodity brokerage, strategic partnerships, and transaction development. His commercial network connects operational capacity to sustained regional trade volume.' },
  { name: 'Danica Freitag', role: 'Executive Assistant to the CEO', short: 'EA', image: ea.url, description: 'Danica supports the Office of the Chief Executive Officer, coordinating the day-to-day priorities that keep the company’s leadership agenda moving.' },
];
export const partners = [
  { name: 'Royal Heritage Projects', image: '/partner-royal-heritage.png', caption: false },
  { name: 'Ankh Group', image: '/partner-ankh-group.png', caption: true },
  { name: 'Afrocore Commodities', image: '/partner-afrocore.png', caption: true },
];
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Nexus Logistica` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Nexus Logistica` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}