
export default function ProductLayout({ children }: LayoutProps<"/dashboard/product">) {
    return (
        <div className="min-h-full flex flex-col">
            <h1>Product Layout</h1>
            {children}
        </div>
    );
}