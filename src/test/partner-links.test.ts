import { describe, expect, it } from 'vitest';
import { partners, partnerProfiles } from '@/lib/company';

describe('Footer partner strip', () => {
  it('shows Forerunner Edge alongside the other partners', () => {
    expect(partners.map(partner => partner.name)).toContain('Forerunner Edge');
  });

  it('links every footer partner to its own section on the Our Partners page', () => {
    const sectionIds = partnerProfiles.map(partner => partner.slug);
    for (const partner of partners) {
      expect(partner.slug, `${partner.name} has no section link`).toBeTruthy();
      expect(sectionIds, `${partner.name} footer link has no matching section`).toContain(partner.slug);
    }
    expect(new Set(partners.map(partner => partner.slug)).size).toBe(partners.length);
  });
});
