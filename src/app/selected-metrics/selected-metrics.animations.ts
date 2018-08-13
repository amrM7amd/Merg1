import { trigger, state, style, transition, animate } from "@angular/animations";

export let elevate = trigger('elevate', [
    state('hovered', style({
        boxShadow: '0 3px 6px 0 grey',
        borderRadius: '2px',
        backgroundColor: 'white',
        border: 'solid 1px #ebebeb'
    })),
    transition('* => hovered', [
        animate('120ms')
    ]),
    transition('hovered => *', [
        animate('120ms')
    ])
]);