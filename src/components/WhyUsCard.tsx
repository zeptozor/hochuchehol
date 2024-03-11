export default function WhyUsCard({ heading, label, align }: { heading: string; label: string; align: 'end' | 'start' }) {
    return (
        <div className="w-full h-full flex flex-col gap-[10px] p-[20px] group duration-300 hover:bg-red" style={{ textAlign: align }}>
            <p className="font-semibold text-[18px] group-hover:text-white duration-100">{heading}</p>
            <p className="group-hover:text-white duration-100">{label}</p>
        </div>
    )
}
