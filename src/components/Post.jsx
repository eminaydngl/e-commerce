import { Clock, TrendingUp } from 'lucide-react'
function Post() {
    return (
        <>
            <div className="flex flex-col w-2xs">
                <img src="https://picsum.photos/id/64/400/500" alt="" className="aspect-square w-full object-cover" />
                <div className="flex flex-col gap-3 m-6 mb-8">
                    <div className="flex gap-4">
                        <a href="#" className="text-xs font-normal text-brand-gray hover:text-brand-blue ">Google</a>
                        <a href="#" className="text-xs font-normal text-brand-gray hover:text-brand-blue">Trending</a>
                        <a href="#" className="text-xs font-normal text-brand-gray hover:text-brand-blue">New</a>
                    </div>

                    <h4 className="text-xl font-normal">Loudest à la Madison #1
                        (L'integral)</h4>

                    <p className="text-xl font-normal">We focus on ergonomics and meeting
                        you where you work. It's only a
                        keystroke away.</p>

                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-2 text-xs">
                            <Clock size={16} className='text-brand-blue'/>
                            22 April 2021
                        </p>
                        <p className="flex items-center gap-2 text-xs">
                            <TrendingUp size={16} className='text-brand-teal'/>
                            10 Comments
                        </p>
                    </div>
                </div>

                <div>
                    <h6 className="font-bold text-brand-gray text-sm m-6">Learn More</h6>

                </div>


            </div>
        </>
    )
}

export default Post