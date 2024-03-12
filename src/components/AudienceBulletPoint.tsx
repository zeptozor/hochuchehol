export default function AudienceBulletPoint({ children }: { children: string }) {
    return (
        <div className="w-full flex md:gap-[10px] gap-[5px] items-center">
            <div className="md:min-w-[10px] md:min-h-[10px] min-w-[7px] min-h-[7px] rounded-full bg-red"></div>
            <p className="md:text-[18px]">{children}</p>
        </div>
    )
}
