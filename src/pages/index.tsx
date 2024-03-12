import Advantages from '@/modules/Advantages'
import Audience from '@/modules/Audience'
import Hero from '@/modules/Hero'
import Nav from '@/modules/Nav'
import Requirements from '@/modules/Requirements'
import WhyUs from '@/modules/WhyUs'

export default function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <Advantages />
            <Audience />
            <WhyUs />
            <Requirements />
        </div>
    )
}
