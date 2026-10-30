'use client'

import { ICat } from "@/app/interfaces/cat.interface";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CatsPage() {
    const [cats, setCats] = useState<ICat[]>([]);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${process.env.CAT_API}`);
                const data = await res.json();
                setCats(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchCats();
    }, []);
    console.log(cats)

    return (
        <div className="flex flex-wrap place-content-around gap-3 width-full">
            {cats.map(({ url, id }) => (
                <div key={id} className="relative w-75 h-75">
                    <Image src={url} alt={url} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                </div>
            ))}
        </div>
    )
}
