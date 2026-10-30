import { ICat } from "@/app/interfaces/cat.interface";
import { getCats } from "@/services/getCats";
import Image from "next/image";
import { notFound } from "next/navigation";

export const instant = false;

interface CatPageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateMetadata() {
    const cats: ICat[] = await getCats();

    return cats.map((cat) => ({
        slug: cat.id.toString()
    }));
}

const fetchCat = async (id: string) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    if (res.status === 404) notFound();
    if (!res.ok) throw new Error(`Failed to fetch cat: ${res.status}`);
    return res.json();
}

export default async function CatPage({ params }: CatPageProps) {
    const { id } = await params;
    const cat = await fetchCat(id);

    return (
        <div key={id} className="relative w-75 h-75">
            <Image src={cat.url} alt={cat.url} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
        </div>
    )

}
