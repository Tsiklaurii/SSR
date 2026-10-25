'use client'
import { useParams } from 'next/navigation'

const SingleProductPage = () => {
    const { id } = useParams()

    return (
        <div>singleProductPage {id}</div>
    )
}

export default SingleProductPage