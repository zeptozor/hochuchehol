export default function HeroContact({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-[5px]">
            <svg fill="red" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                {children}
            </svg>
            <p>{label}</p>
        </div>
    )
}
