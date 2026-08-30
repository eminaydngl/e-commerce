import AboutHero from "../components/About/AboutHero";
import FreeTrialSection from "../components/About/FreeTrialSection";
import TeamSection from "../components/Team/TeamSection"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function AboutPage(){
    const team = [
        {
            name: "Emre",
            profession: "Project Manager",
            image: "/images/team/person2.jpeg",
        },
        {
            name: "Emin",
            profession: "Full Stack Developer",
            image: "/images/team/person1.jpeg",
        },
        {
            name: "Musa Selim",
            profession: "industrial engineer",
            image: "/images/team/person3.jpeg",
        },
        {
            name: "Emre",
            profession: "Project Manager",
            image: "/images/team/person2.jpeg",
        },
        {
            name: "Emin",
            profession: "Full Stack Developer",
            image: "/images/team/person1.jpeg",
        },
        {
            name: "Musa Selim",
            profession: "industrial engineer",
            image: "/images/team/person3.jpeg",
        },
        {
            name: "Emre",
            profession: "Project Manager",
            image: "/images/team/person2.jpeg",
        },
        {
            name: "Emin",
            profession: "Full Stack Developer",
            image: "/images/team/person1.jpeg",
        },
        {
            name: "Musa Selim",
            profession: "industrial engineer",
            image: "/images/team/person3.jpeg",
        },
        {
            name: "Emre",
            profession: "Project Manager",
            image: "/images/team/person2.jpeg",
        },
        {
            name: "Emin",
            profession: "Full Stack Developer",
            image: "/images/team/person1.jpeg",
        },
        {
            name: "Musa Selim",
            profession: "industrial engineer",
            image: "/images/team/person3.jpeg",
        },
    ];
    return (
        <>
        <Header />
        <AboutHero />
        <TeamSection  team={team}/>
        <FreeTrialSection />
        <Footer />
        </>
    )
}

export default AboutPage