'use client';

import { counterStore } from '@/store';


export default function CounterPage() {

    // const [counter, setCounter] = useState<number>(initialValue);
    const { counter, setCounter, resetCounter } = counterStore();

    // const onChangeCounter = (value: number) => {
    //     setCounter(c => c+value);
    // };

    return (
        <div className='flex flex-col gap-5'>
            <section className="flex bg-slate-200 border-4 border-purple-900 rounded-lg">
                <button className="w-20 h-14 text-2xl font-semibold rounded-l-md transition-all  active:bg-slate-500 border-r-4 border-purple-900" onClick={() => setCounter(-1)}> - </button>
                <div className='min-w-16 m-0 text-center pt-[1.5px] flex justify-center items-center text-2xl'>
                    <p>{counter}</p>
                </div>
                <button className="w-20 h-14 text-2xl font-semibold rounded-r-md transition-all  active:bg-slate-500 border-l-4 border-purple-900" onClick={() => setCounter(-1)}> + </button>
            </section>

            <button onClick={resetCounter} className='bg-purple-200 rounded-md py-2 font-semibold transition-all  active:bg-slate-500'>Reset counter</button>
        </div>
    );
}