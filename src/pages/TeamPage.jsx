import TeamSection from "../components/Team/TeamSection"
import Header from "../layout/Header"
function TeamPage(){
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
    ];
    return (
        <>
        <Header />
        <TeamSection team={team}/>
        </>
    )
}

export default TeamPage