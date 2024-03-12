import SnapLink from '@/components/SnapLink'

export default function Nav() {
    function scrollTo() {
        const section = document.querySelector(`#hero`)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <div className="w-full flex justify-center bg-white sticky top-0 z-10 shadow-md">
            <div className="max-w-[1500px] w-full">
                <div className="w-full md:px-[100px] md:py-[20px] sm:px-[40px] px-[20px] py-[10px] flex justify-between items-center md:gap-[20px] gap-[50px]">
                    <p className="font-semibold text-[20px] hover:text-red duration-300 cursor-pointer" onClick={scrollTo}>
                        #ХочуЧехол
                    </p>
                    <div className="sm:flex hidden justify-end md:gap-[20px] gap-[10px]">
                        <SnapLink label="Выгоды сотрудничества" id="advantages" />
                        <SnapLink label="Целевая аудитория" id="audience" />
                        <SnapLink label="Чем мы лучше конкурентов" id="whyus" />
                        <SnapLink label="Требования к месту" id="requirements" />
                    </div>
                </div>
            </div>
        </div>
    )
}
