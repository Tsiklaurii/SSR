
export default function SingleProductLayout({ children }: LayoutProps<"/dashboard/product/[id]">) {
    return (
        <div className="min-h-full flex flex-col">
            <h1>Single Product Layout</h1>
            {children}
        </div>
    );
}