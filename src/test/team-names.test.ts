import { describe, expect, it } from 'vitest';
import { leaders } from '@/lib/company';

describe('Executive assistant names', () => {
  it('lists the CCO’s assistant as Jessica Sizeze, without the first name Goisemang', () => {
    const jessica = leaders.find(leader => leader.short === 'EA·CCO');
    expect(jessica?.name).toBe('Jessica Sizeze');
    expect(jessica?.description.startsWith('Jessica')).toBe(true);
  });
});
