import { ICat } from "@/app/interfaces/cat.interface";
import { getCats } from "@/services/getCats";
import Image from "next/image";
import Link from "next/link";

export const instant = false;

export default async function CatsPage() {
    const cats: ICat[] = await getCats();

    return (
        <div className="flex flex-wrap place-content-around gap-3 width-full">
            {cats.map(({ url, id }) => (
                <Link href={`/ssr/cats/${id}`} key={id}>
                    <div key={id} className="relative w-75 h-75">
                        <Image src={url} alt={url} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                    </div>
                </Link>
            ))}
        </div>
    )
}
