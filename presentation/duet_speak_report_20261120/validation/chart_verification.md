# Chart verification receipts

Authoritative data: Word §3.1–3.4, PRETRAINED_MODEL_TOURNAMENT_REPORT, MULTIPA_COMPETITION_SCORER_REPORT and P25_FROZEN_MINI_VALIDATION_REPORT.

- verify-charts: 15_alignment_results.svg | object=alignment-outcomes | type=stacked-bar | mode=decomposable-calc | scale=0–68 from native axis declaration (hidden ticks) | calc=ran×3 cumulative 58,62,68 | widths=996.2353,1064.9412,1168 | differences=996.2353,68.7059,103.0588 | svg=unchanged
- verify-charts: 16_asr.svg | object=asr-wer | type=bar | mode=direct-calc | scale=0–10 from ticks | calc=ran | widths=401.6,695.2,704.8; slot y=241,346,451 height48 | plot declaration repaired to match category slots; data marks unchanged
- verify-charts: 17_development.svg | object=development-mae | type=bar | mode=direct-calc | scale=0–1 from ticks | calc=ran | widths=336.32,392.96,470.48; slot y=241,346,451 height48 | plot declaration repaired; data marks unchanged
- verify-charts: 18_mini_validation.svg | object=mini-mae | type=bar | mode=direct-calc | scale=0–1 from ticks | calc=ran | widths=348.8,410.64,562.16; slot y=225,315,405 height44 | plot declaration repaired; data marks unchanged

One receipt per planned quantitative chart. Bar lengths start at zero. Precision retained in labels; data geometry uses full precision. The development and P2.5 charts have the same MAE domain, but different sample/design and no time-trend claim. Cumulative stacked lengths were separately calculated on a single-category frame so the full-height stack is verified.
