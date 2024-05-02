import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface State {
    counter: number,

    resetCounter: () => void,
    setCounter: (value: number) => void,
}

export const counterStore = create<State>()(
    persist(
        (set, get) => ({
            counter: 0,

            setCounter: (value:number = 1) => {
                let {counter: currentCounter} = get();
                set({counter: (currentCounter+value)});
            },

            resetCounter: () => {
                set({counter: 0});
            }

        }),
        {
            name: 'counter'
        }

    )
);


