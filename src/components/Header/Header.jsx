import Link from "next/link";


export default function Header(){
    return(
        <>
            <header>
                <div>
                <Link href="/">Home</Link>
                <Link href="/pages/sobre">Sobre</Link>
                </div>
            </header>
        </>
    );
}