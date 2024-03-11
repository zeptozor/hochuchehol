export default function AudienceBulletPoint({ children }: { children: string }) {
    return (
        <div className="w-full flex gap-[10px] items-center">
            <div className="min-w-[10px] min-h-[10px] rounded-full bg-red"></div>
            <p className="text-[18px]">{children}</p>
        </div>
    )
}
