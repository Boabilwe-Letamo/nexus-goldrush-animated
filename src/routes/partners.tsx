import { createFileRoute } from '@tanstack/react-router';
import { ContactBand } from '@/components/SiteShell';
import { pageHead, partnerIntroduction, partnerProfiles } from '@/lib/company';

export const Route = createFileRoute('/partners')({
  head: () => pageHead('Our Partners', 'Meet Nexus Logistica’s partners: Ankh Group and its four subsidiaries, Royal Heritage Projects, Afrocore Commodities, and Forerunner Edge.'),
  component: Partners,
});

function Partners() {
  return <main>
    <section className="page-intro"><div className="container"><span className="eyebrow">Shared expertise. Stronger connections.</span><h1>Our partners.</h1><p>{partnerIntroduction}</p></div></section>
    {partnerProfiles.map((partner, index) => <section className="partner-profile" key={partner.name} aria-labelledby={`partner-${index}`}>
      <div className="container">
        <div className="partner-profile-heading">
          <div className="partner-identity">{partner.image && <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" />}<span className="eyebrow">{partner.category}</span><h2 id={`partner-${index}`}>{partner.name}</h2></div>
          <p>{partner.description}</p>
        </div>
        {partner.subsidiaries.length > 0 && <div className="partner-subsidiaries"><span className="eyebrow">Part of Ankh Group</span><div className="subsidiary-grid">{partner.subsidiaries.map((company, i) => <article key={company.name}><span className="subsidiary-number">0{i + 1}</span><span className="eyebrow">{company.category}</span><h3>{company.name}</h3><p>{company.description}</p></article>)}</div></div>}
      </div>
    </section>)}
    <ContactBand />
  </main>;
}