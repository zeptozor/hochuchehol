export default function AudienceCard({ photo, label, percentage }: { photo: string; label: string; percentage: string }) {
    return (
        <div className="flex flex-col gap-[20px] items-center">
            <div className="md:w-[350px] w-[200px] md:min-h-[400px] min-h-[250px] rounded-br-full rounded-bl-full flex items-end overflow-clip relative">
                <img className={`md:w-[350px] w-[200px] absolute ${photo == 'chico.png' ? 'md:-mb-[150px] -mb-[90px]' : 'md:-mb-[90px] -mb-[50px]'}`} src={photo} alt="man" />
                <div className="md:w-[350px] w-[200px] md:h-[350px] h-[200px] bg-red rounded-full"></div>
            </div>
            <div className="flex gap-[5px] md:text-[20px] sm:text-[18px]">
                <p>{label}</p>
                <p className="text-red">{percentage}</p>
            </div>
        </div>
    )
}
