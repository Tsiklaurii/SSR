
export default function DashLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="min-h-full flex flex-col">
            <h1>Dashboard Layout</h1>
            {children}
        </div>
    );
}