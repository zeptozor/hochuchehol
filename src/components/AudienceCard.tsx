export default function AudienceCard({ photo, label, percentage, mb }: { photo: string; label: string; percentage: string; mb: number }) {
    return (
        <div className="flex flex-col gap-[20px] items-center">
            <div className="w-[350px] min-h-[400px] rounded-br-full rounded-bl-full flex items-end overflow-clip relative">
                <img className="w-[350px] absolute" style={{ marginBottom: mb }} src={photo} alt="man" />
                <div className="w-[350px] h-[350px] bg-red rounded-full"></div>
            </div>
            <div className="flex gap-[5px] text-[20px]">
                <p>{label}</p>
                <p className="text-red">{percentage}</p>
            </div>
        </div>
    )
}
