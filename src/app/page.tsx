import CounterPage from '@/components/Counter';

export default function Home() {
    return (
        <main className="flex bg-gradient-to-br from-purple-700 to-purple-500 min-h-screen flex-col items-center p-24 gap-20">
            <h1 className="text-5xl font-bold underline ">Counter App</h1>
            <CounterPage />
        </main>
    );
}
