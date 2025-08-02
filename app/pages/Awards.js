'use client';
import Card from "../components/card";


export default function Awards(){
    return(
        <div className='w-[90%] mx-auto'>
            <h1 className="flex-1 flex text-5xl font-extrabold mb-2 text-[#cfb991] justify-center text-center">
              Awards
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed text-center mx-auto max-w-4xl">
              Awards and recognitions.
            </p>
            <section className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              <Card className="flex flex-col h-full max-w-lg p-6 bg-muted/50">
                <div className="flex justify-center mb-2">
                  
                </div>
                <h2 className="block text-center font-bold text-xl mb-2">
                  None
                </h2>
                
              </Card>
            </section>
        </div>
    );
}