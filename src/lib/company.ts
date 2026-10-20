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
  { name: 'Danica Freitag', role: 'Executive Assistant to the CEO', short: 'EA·CEO', image: ea.url, description: 'Danica supports the Office of the Chief Executive Officer, coordinating the day-to-day priorities that keep the company’s leadership agenda moving.' },
  { name: 'Goisemang Jessica Sizeze', role: 'Executive Assistant to the CCO', short: 'EA·CCO', image: '/jessica-sizeze.jpeg', description: 'Goisemang Jessica supports the Office of the Chief Commercial Officer, keeping buyer engagement, partnership pipelines, and commercial administration moving in step.' },
];
export const partners = [
  { name: 'Royal Heritage Projects', image: '/partner-royal-heritage.png', caption: false },
  { name: 'Ankh Group', image: '/partner-ankh-group.png', caption: true },
  { name: 'Afrocore Commodities', image: '/partner-afrocore.png', caption: true },
];
export const partnerIntroduction = 'At Nexus Logistica, we believe strong results come from strong relationships. We work alongside trusted partners across logistics, finance, media, recruitment and sustainability, which lets us deliver more value, with greater reach and reliability, to every client we serve.';
export const partnerProfiles = [
  {
    name: 'Ankh Group', image: '/partner-ankh-group.png', category: 'Diversified capabilities',
    description: 'Ankh Group is a diversified group of companies whose subsidiaries cover logistics, finance, media and environmental sustainability. Together they form a strong network of capability behind the work we do.',
    subsidiaries: [
      { name: 'Ankh Distributors', category: 'Logistics & distribution', description: 'Ankh Distributors is the group’s logistics and distribution arm. It moves and supplies general commodities and goods, and it provides trucks and heavy-duty equipment, along with a wide range of supplies for industry and commerce. Its reach and operational strength support the reliable movement of goods across the region.' },
      { name: 'Ankh Wealth', category: 'Finance & commerce', description: 'Ankh Wealth brings financial and commercial expertise to the group. It specialises in power brokerage and mediation, finance and consultancy, and it trades in gold, diamonds and other commodities. Its experience in structuring and facilitating complex transactions makes it a valuable partner on large-scale projects.' },
      { name: 'Ankh Reflections', category: 'Creative & digital', description: 'Ankh Reflections is the group’s creative and digital house. It offers media, advertising and marketing, arts and entertainment, and app and website development, as well as hosting. From brand storytelling to digital infrastructure, it helps businesses connect with their audiences.' },
      { name: 'Black Whole Waste Management', category: 'Environmental sustainability', description: 'Black Whole Waste Management is committed to turning waste into opportunity. It focuses on recycling, manufacturing through waste and generating energy through waste, with the aim of revitalising the eco-system and building a cleaner, more sustainable future.' },
    ],
  },
  { name: 'Royal Heritage Projects', image: '/partner-royal-heritage.png', category: 'Consulting & organisational systems', description: 'Royal Heritage Projects is our trusted consulting partner for recruitment and organisational systems. They advise us on recruitment and help us develop our Standard Operating Procedures (SOPs), procurement processes and procedures, tendering processes and recruitment procedures. They also support us with the procurement of our office supplies. Their guidance helps us keep Nexus Logistica structured, compliant and efficient as we grow.', subsidiaries: [] },
  { name: 'Forerunner Edge', image: undefined, category: 'Media & brand communications', description: 'Forerunner Edge is our media partner. They help us tell the Nexus Logistica story, supporting us with media for our website, our advertising and other brand communications. Their creative and technical skills keep our public presence professional, consistent and engaging.', subsidiaries: [] },
];
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | Nexus Logistica` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Nexus Logistica` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}