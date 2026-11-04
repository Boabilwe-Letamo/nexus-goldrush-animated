import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { connectivity } from '@/lib/company';

describe('Home page Africa interconnectivity section', () => {
  it('names Africa’s interconnectivity as the section’s subject', () => {
    expect(connectivity.eyebrow).toBe('Africa’s interconnectivity');
    expect(connectivity.note).toContain('African Continental Free Trade Area');
  });

  it('lists real African corridors, each with the economies it links', () => {
    const names = connectivity.corridors.map(corridor => corridor.name);
    expect(names).toContain('North–South Corridor');
    expect(names).toContain('Kazungula');
    for (const corridor of connectivity.corridors) {
      expect(corridor.line, `${corridor.name} names no economies`).toContain('·');
      expect(corridor.detail.length).toBeGreaterThan(20);
    }
  });

  it('is wired into the home route', () => {
    const source = readFileSync(fileURLToPath(new URL('../routes/index.tsx', import.meta.url)), 'utf8');
    expect(source).toMatch(/import \{[^}]*connectivity[^}]*\} from '@\/lib\/company'/);
    expect(source).toContain('id="interconnectivity"');
    expect(source).toContain('connectivity.corridors');
  });
});
