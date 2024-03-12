export default function AdvantageCard({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="w-full shadow-md rounded-[10px] p-[20px] pt-[40px] md:text-[18px] relative">
            <div className="absolute left-[20px] -top-[10px] w-[40px] h-[40px] rounded-[10px] bg-red flex justify-center items-center">{children}</div>
            {label}
        </div>
    )
}
