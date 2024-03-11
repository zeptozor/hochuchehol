import AudienceBulletPoint from '@/components/AudienceBulletPoint'
import AudienceCard from '@/components/AudienceCard'
import H2 from '@/components/H2'
import Link from 'next/link'

export default function Audience() {
    return (
        <div className="w-full px-[100px] bg-lightgray py-[40px] flex flex-col gap-[20px]" id="audience">
            <H2>Широкая целевая аудитория:</H2>
            <div className="w-full flex gap-[30px] items-center">
                <div className="min-w-max flex gap-[20px]">
                    <AudienceCard photo="chico.png" mb={-150} label="Мужчины от 14-50 лет -" percentage="29%" />
                    <AudienceCard photo="megan.png" mb={-90} label="Женщины от 14-60 лет -" percentage="71%" />
                </div>
                <div className="w-full flex flex-col gap-[20px]">
                    <AudienceBulletPoint>Средний чек в Омске: 740 руб / в Москве 1488 руб</AudienceBulletPoint>
                    <AudienceBulletPoint>Количество чеков в месяц: в Омске 1180 / в Москве 1900</AudienceBulletPoint>
                    <AudienceBulletPoint>Россиянин в среднем 6 раз за год меняет чехол, а стекло/пленку около 8 раз в год</AudienceBulletPoint>
                    <Link href="https://хочучехол.рф/#rec393506370" target="_blank" className="font-semibold text-[18px] text-red mt-[20px] ml-[10px]">
                        Прочитать отзывы
                    </Link>
                </div>
            </div>
        </div>
    )
}
