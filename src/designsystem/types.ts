import { CSSProperties } from 'react';

export type PaddingsShortcuts = {
  $pt?: CSSProperties['paddingTop'];
  $pr?: CSSProperties['paddingRight'];
  $pb?: CSSProperties['paddingBottom'];
  $pl?: CSSProperties['paddingLeft'];
};

export type MarginsShortcuts = {
  $mt?: CSSProperties['marginTop'];
  $mr?: CSSProperties['marginRight'];
  $mb?: CSSProperties['marginBottom'];
  $ml?: CSSProperties['marginLeft'];
};

export type ObjectWithId<U> = U extends { id: string } ? U : never;
