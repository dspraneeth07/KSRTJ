import type { Vertical } from './verticalTypes';
import { vastuVertical } from './vastu';
import { jyotishaVertical } from './jyotisha';
import { numerologyVertical } from './numerology';

/** Every vertical with a built page. Add one here and it gets a route,
 *  a grouped mega-menu column and a fee table — no component changes. */
export const verticals: Vertical[] = [vastuVertical, jyotishaVertical, numerologyVertical];

export const verticalById: Record<string, Vertical | undefined> = Object.fromEntries(
  verticals.map((v) => [v.id, v]),
);
