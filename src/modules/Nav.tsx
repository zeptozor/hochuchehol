import SnapLink from '@/components/SnapLink'

export default function Nav() {
    function scrollTo() {
        const section = document.querySelector(`#hero`)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <div className="w-full px-[100px] py-[20px] flex justify-between items-center gap-[20px] bg-white sticky top-0 z-10 shadow-md">
            <p className="font-semibold text-[20px] hover:text-red duration-300 cursor-pointer" onClick={scrollTo}>
                #ХочуЧехол
            </p>
            <div className="flex gap-[20px]">
                <SnapLink label="Выгоды сотрудничества" id="advantages" />
                <SnapLink label="Целевая аудитория" id="audience" />
                <SnapLink label="Чем мы лучше конкурентов" id="whyus" />
                <SnapLink label="Требования к месту" id="requirements" />
            </div>
        </div>
    )
}
