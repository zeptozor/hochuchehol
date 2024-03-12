import H2 from '@/components/H2'

export default function Requirements() {
    return (
        <div className="w-full flex justify-center bg-lightgray">
            <div className="max-w-[1500px] w-full">
                <div className="w-full md:px-[100px] sm:px-[40px] px-[20px] py-[40px]" id="requirements">
                    <H2>Требования к месту:</H2>
                    <div className="w-full flex sm:flex-row flex-col mt-[20px] gap-[20px]">
                        <div className="sm:w-[50%] w-full flex flex-col gap-[20px] justify-center">
                            <div className="w-full flex gap-[10px] items-center">
                                <svg fill="red" viewBox="0 0 256 256" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
                                </svg>
                                <p className="text-[18px]">Нам нужно самое проходимое место. Готовы платить больше других. Лучше всего нам вместе выбрать локацию.</p>
                            </div>
                            <div className="w-full flex gap-[24px] items-center">
                                <div className="min-w-[10px] min-h-[10px] rounded-full bg-red"></div>
                                <p className="text-[18px]">Наша продукция относится к импульсивной покупке, и востребована каждым человеком без исключения. Трафик для нас - самое важное.</p>
                            </div>
                            <div className="w-full flex gap-[24px] items-center">
                                <div className="min-w-[10px] min-h-[10px] rounded-full bg-red"></div>
                                <p className="text-[18px]">Примером хорошего места могут быть быть: входная группа, площадь перед продуктовым гипермаркетом, место на первом этажже возле эскалаторов</p>
                            </div>
                            <div className="w-full flex gap-[10px] items-center">
                                <svg stroke="red" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3zm-10 3a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-3a1 1 0 0 1 .883 -.993l.117 -.007h3zm9 5a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -.883 .993l-.117 .007h-3a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 .883 -.993l.117 -.007z"
                                        strokeWidth="0"
                                        fill="red"
                                    ></path>
                                </svg>
                                <p className="text-[18px]">Площадь от 11 до 15 квм</p>
                            </div>
                            <div className="w-full flex gap-[10px] items-center">
                                <svg fill="red" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"></path>
                                </svg>
                                <p className="text-[18px]">Электричество</p>
                            </div>
                        </div>
                        <div className="sm:w-[50%] w-full flex items-center justify-center">
                            <img src="dot.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
