import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function TeamSection( { team } ) {
    

    return (
        <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center">

            <div className="text-center max-w-xl mb-16">

                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Meet Our Team</h1>

                <p className="text-sm text-brand-gray">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>

            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">

                {team.map((member, index) => (

                    <div key={index} className="flex flex-col items-center">

                        <div className="w-full aspect-square mb-6 overflow-hidden">

                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover" 
                            />

                        </div>

                        <h3 className="font-bold text-sm text-brand-dark mb-1">{member.name}</h3>

                        <p className="text-sm text-brand-gray mb-4">{member.profession}</p>

                        <div className="flex gap-4 text-brand-blue">

                            <a href="#" className="hover:opacity-70 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:opacity-70 transition"><FaInstagram /></a>
                            <a href="#" className="hover:opacity-70 transition"><FaTwitter /></a>

                        </div>

                    </div>
                ))}
                
            </div>

        </section>
    );
}

export default TeamSection;