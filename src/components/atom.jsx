import { atom } from 'recoil';

export const habitsState = atom({
    key: 'habitsState', // unique ID (with respect to other atoms/selectors)
    default: [{id: 1, name: 'Reading', count: 0}], // default value (aka initial value)
});