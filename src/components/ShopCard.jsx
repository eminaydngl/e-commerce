function ShopCard(){
    return (
        <>
        <section className="py-20 bg-brand-light-gray" data-purpose="editors-pick">

            <div className="container mx-auto px-4">

                <div className="text-center mb-12">

                    <h2 className="text-2xl font-bold mb-2">EDITOR'S PICK</h2>
                    <p className="text-brand-gray text-sm">Problems trying to resolve the conflict between</p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto h-auto md:h-[500px]">
                    <div className="md:col-span-2 relative group overflow-hidden">

                        <img alt="Men's Fashion"
                            className="w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUoYTg25btHnO-AEpddGTrb2m4Y6b9lTE3DQo9HrEidRwQCo3F3GLwvsj5FD-KgR-6ao8qiUxjXMp4f2U1uoXoZp8iS1zCCyL4CZ7_zcXSIwNL_ZusHtxuraK_K6mA2kdFlWQ5fvISSj-YlF5aSQS0gwMuIxMLlT45jSwfGUolP7lx4_isKObC-0lHKJhJj8v4uXgubjDXHVaqHMMK2GEYhXhpiMS-Qn8TOR9y6fO9xmfGp2F3lNE" />

                        <button
                            className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold shadow-md hover:bg-gray-100 uppercase">Men</button>
                    
                    </div>


                    <div className="md:col-span-1 relative group overflow-hidden">
                        
                        <img alt="Women's Fashion"
                            className="w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCICZGkCk9T4FCpcRYgGEAOyiW54g4LwmMxufK99xr0vBVv3r0KHQgVAj0RFXgybzgtB8z_8QbtRoONIL4rum9jkXPCaCVjs6hz1qT8_7qDq32N3uupSGh-hefl6-1A3HUNo0TSQ1AGPNSMc6JH8fqCqpnEGWCpVIbS5eQh-3rWiD-e4tUJ5UfPaCWnqAwfA-vbxwit-EhdTtce2lYuc07lHwdsssaM28Rzprxyf5duLxYl0dKxdmk" />
                        
                        <button
                            className="absolute bottom-6 left-6 bg-white px-8 py-3 font-bold shadow-md hover:bg-gray-100 uppercase">Women</button>
                    </div>


                    <div className="md:col-span-1 flex flex-col gap-4">

                        <div className="relative h-1/2 group overflow-hidden">
                            
                            <img alt="Accessories"
                                className="w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLVcmTp6ve9YgzYqdsEopOY_2Gc_71t97f5bNosk4d5qkRCfkY5tPr2kg_rR7XSHGUj2UthwVqsUdB4AdNMwqVSAyWYU_3CQhKksS1X_1Lw623PlrgU0EOWmO2hnVRzKhDzBXh-Fyo92MOBkWuen9VTUxHt_SoXuuuf68wbcezpDcJlFg0GUG2VBuTVW3QzU0QU-RM5ET5aST0aD-RO8IT8ePO3q1MMd7COnJxlo8mP3Zy1MfsRhY" />
                            
                            <button
                                className="absolute bottom-6 left-6 bg-white px-6 py-2 font-bold shadow-md hover:bg-gray-100 uppercase text-sm">Accessories</button>
                        </div>


                        <div className="relative h-1/2 group overflow-hidden">

                            <img alt="Kids Fashion"
                                className="w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbq6J2cgvkbFbSYcvQHj22XEQ2tvXMx2NFNcpKNj7-iAnn8RdkiNfNKUjXkKMnU2iOc2tlV1CwJQ88SHp0ptuvWZu7jmvADzNUJkpW6Ilc_ntdi7gLud57ZZ2SzGLNxv_KnGsnsB93oNwCL4NvjBe7EMMypATEDTJtXta_nDv8OArw_n2xcxj04OMpVxLaD70y2VNbisbKyLhJdQAyhwjEpmg37NPjkOiVPsd70CZzYoYRNDfWHrQ" />
                            
                            <button
                                className="absolute bottom-6 left-6 bg-white px-8 py-2 font-bold shadow-md hover:bg-gray-100 uppercase text-sm">Kids</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        </>
    )
}

export default ShopCard