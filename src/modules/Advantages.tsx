import AdvantageCard from '@/components/AdvantageCard'
import H2 from '@/components/H2'

export default function Advantages() {
    return (
        <div className="w-full px-[100px] py-[40px] flex flex-col gap-[20px]" id="advantages">
            <H2>Выгоды сотрудничества:</H2>
            <div className="grid grid-cols-2 gap-[30px]">
                <AdvantageCard label="Платим арендную плату вовремя. Площади занимаем годами.">
                    <svg stroke="white" fill="white" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z"></path>
                        <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    </svg>
                </AdvantageCard>
                <AdvantageCard label="Можем, умеем, практикуем и успешно соблюдаем стандарты работы в разных ТЦ, в том числе и самых требовательных. Подтверждением служит многолетний опыт работы в ТЦ Мега.">
                    <svg stroke="white" fill="white" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm1.5 4.5h4v-4h-4Zm8.25-5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-2.97-2.53a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.97-2.97a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                </AdvantageCard>
                <AdvantageCard label="Мы - сетевая компания. Заключая с нами договор, вы получите оформленный в едином стиле торговый остров с высочайшими стандартами как на самом острове, так и с покупателями.">
                    <svg stroke="white" fill="white" viewBox="0 0 32 32" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 11 L 11 21 L 13 21 L 13 11 L 11 11 z M 15 11 L 15 13 L 21 13 L 21 11 L 15 11 z M 15 15 L 15 17 L 21 17 L 21 15 L 15 15 z M 15 19 L 15 21 L 21 21 L 21 19 L 15 19 z"></path>
                    </svg>
                </AdvantageCard>
                <AdvantageCard label="Готовы и хотим учавствовать в совместных маркетинговых мероприятиях.">
                    <svg stroke="white" fill="white" viewBox="0 0 32 32" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>
                    </svg>
                </AdvantageCard>
            </div>
            <i className="text-[20px] text-gray mx-auto">С #ХочуЧехол Вы получите трафик и не получите проблем!</i>
        </div>
    )
}
