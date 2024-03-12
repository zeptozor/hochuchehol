import H2 from '@/components/H2'
import WhyUsCard from '@/components/WhyUsCard'

export default function WhyUs() {
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1500px] w-full">
                <div className="w-full md:px-[100px] sm:px-[40px] px-[20px] py-[40px]" id="whyus">
                    <H2>Чем мы лучше конкурентов:</H2>
                    <div className="w-full grid grid-cols-2 grid-rows-2 mt-[20px] items-center">
                        <WhyUsCard heading="Супер гарантия" label="В течений 14 дней можно вернуть деньги или получить замену продукции, даже при физической умышленной ее порче" align="end" />
                        <WhyUsCard heading="Собственное производство" label="Часть продукции - это собственное производство - уникальные чехлы" align="start" />
                        <WhyUsCard heading="Бесплатная установка" label="Бесплатная установка стекол и пленок покупателям" align="end" />
                        <WhyUsCard heading="Огромный выбор" label="Очень огромный выбор чехлов не только на айфоны, но и на андроид. На наших точках вмещаются более 15000 единиц продукции, что в 3 раза больше чем у конкурентов" align="start" />
                    </div>
                </div>
            </div>
        </div>
    )
}
