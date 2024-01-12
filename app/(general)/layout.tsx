import { Navbar } from "@/components";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (

        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                <h2 className="text-black text-3xl text-center">Hola Mundo GeneralLayout!</h2>
                {children}
            </main>
        </>
    );
}
