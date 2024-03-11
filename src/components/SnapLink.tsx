export default function SnapLink({ label, id }: { label: string; id: string }) {
    function scrollTo() {
        const section = document.querySelector(`#${id}`)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <p className="text-[18px] hover:text-red duration-300 cursor-pointer" onClick={scrollTo}>
            {label}
        </p>
    )
}
