import { trigger, transition, style, query, animateChild, group, animate, state } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	state('*', style({position: 'relative', width: '100%'}) ),
	transition('* => *', [
		query(':enter', [style({ opacity: 0 })], {
		  optional: true,
		}),
		query(
		  ':leave',
		  [
			style({ opacity: 1 }),
			animate('0.3s', style({ opacity: 0, position: 'absolute' })),
		  ],
		  { optional: true }
		),
		query(
		  ':enter',
		  [
			style({ opacity: 0 }),
			animate('0.3s', style({ opacity: 1})),
		  ],
		  { optional: true }
		),
	  ]),
]);


