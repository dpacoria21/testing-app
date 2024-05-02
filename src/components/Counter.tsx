'use client';

import { useState } from 'react';

interface Props {
    initialValue: number
}

export default function CounterPage({initialValue}: Props) {

    const [counter, setCounter] = useState<number>(initialValue);

    const onChangeCounter = (value: number) => {
        setCounter(c => c+value);
    };

    return(
        <section className="flex bg-slate-200 border-2 border-slate-900 rounded-lg">
            <button className="w-20 h-14 text-2xl font-semibold rounded-l-md transition-all  active:bg-slate-500 border-r-2 border-slate-900" onClick={() => onChangeCounter(-1)}> - </button>
            <div className='min-w-16 m-0 text-center pt-[1.5px] flex justify-center items-center text-2xl'>
                <p>{counter}</p>
            </div>
            <button className="w-20 h-14 text-2xl font-semibold rounded-r-md transition-all  active:bg-slate-500 border-l-2 border-slate-900" onClick={() => onChangeCounter(1)}> + </button>
        </section>
    );
}