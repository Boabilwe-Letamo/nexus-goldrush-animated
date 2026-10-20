import { describe, expect, it } from 'vitest';
import { partnerProfiles } from '@/lib/company';

describe('Partner company hierarchy', () => {
  for (const name of ['Ankh Wealth', 'Ankh Distributors', 'Ankh Reflections', 'Black Whole Waste Management']) {
    it(`${name} belongs to Ankh Group, not the top-level partners`, () => {
      const group = partnerProfiles.find(partner => partner.name === 'Ankh Group');
      expect(group?.subsidiaries.map(company => company.name)).toContain(name);
      expect(partnerProfiles.map(partner => partner.name)).not.toContain(name);
    });
  }

  it('Afrocore Commodities is its own partner, listed for commodity movement in Zimbabwe', () => {
    const afrocore = partnerProfiles.find(partner => partner.name === 'Afrocore Commodities');
    expect(afrocore?.category).toContain('Commodities');
    expect(afrocore?.description).toContain('Zimbabwe');
    expect(afrocore?.image).toBe('/partner-afrocore.png');
    const group = partnerProfiles.find(partner => partner.name === 'Ankh Group');
    expect(group?.subsidiaries.map(company => company.name)).not.toContain('Afrocore Commodities');
  });
});