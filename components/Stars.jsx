'use client'
import CountUp from "react-countup"

const stars = [
    {
        num: 12,
        text: "Years of experience"
    },
    {
        num: 10,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies Mastered"
    },
    {
        num: 500,
        text: "Code Commits"
    },
]

const Stars = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {
                        stars.map((item, i) => (
                            <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={i}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${item.text.length<15 ? "max-w-[100px]":"max-w-[150px]"}
                                leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Stars