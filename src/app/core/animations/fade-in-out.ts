import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeInOut = trigger('slideAnimation', [
  state(
    '*',
    style({
      transform: '{{translateValue}}',
    }),
    { params: { translateValue: 'translateX(0)' } },
  ),
  transition('* => *', [animate('500ms ease-in-out')]),
]);
