import { describe, expect, it } from 'vitest';
import { partnerProfiles } from '@/lib/company';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

describe('Partner company hierarchy', () => {
  for (const name of ['Ankh Wealth', 'Ankh Distributors', 'Ankh Reflections', 'Black Whole Waste Management']) {
    it(`${name} belongs to Ankh Group, not the top-level partners`, () => {
      const group = partnerProfiles.find(partner => partner.name === 'Ankh Group');
      expect(group?.subsidiaries.map(company => company.name)).toContain(name);
      expect(partnerProfiles.map(partner => partner.name)).not.toContain(name);
    });
  }

  it('Orenza Commodities is its own partner, listed for commodity movement in Zimbabwe', () => {
    const orenza = partnerProfiles.find(partner => partner.name === 'Orenza Commodities');
    expect(orenza?.category).toContain('Commodities');
    expect(orenza?.description).toContain('Zimbabwe');
    expect(orenza?.image).toBe('/partner-afrocore.png');
    const group = partnerProfiles.find(partner => partner.name === 'Ankh Group');
    expect(group?.subsidiaries.map(company => company.name)).not.toContain('Orenza Commodities');
  });

  it('every partner shows a logo file that ships with the site', () => {
    for (const partner of partnerProfiles) {
      const image = partner.image;
      expect(image, `${partner.name} has no logo`).toBeTruthy();
      expect(existsSync(join(process.cwd(), 'public', (image ?? '').replace(/^\//, ''))), `${partner.name} logo file missing`).toBe(true);
    }
  });
});