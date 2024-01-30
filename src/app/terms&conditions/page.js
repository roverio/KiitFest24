import { TERMS_AND_CONDITIONS } from "@/constants"
import Image from "next/image"
import { GrDocumentText } from "react-icons/gr";


const Termsandcondition = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-about-background pb-4">
    <div className="w-[50vw] h-[100vh] fixed left-0 bottom-0">
        <Image
          src="/Assets/stars.png"
          alt="bg image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-[50vw] h-[100vh] fixed right-0 top-0">
        <Image
          src="/Assets/stars.png"
          alt="bg image"
          fill
          priority
          className="object-cover"
        />
      </div>
        <div className='flex flex-col justify-between h-full w-full  blur-[0.1px] text-white'>
            <div>      
                <div className='text-center text-xl font-semibold md:font-normal md:text-4xl tracking-[1.62px] md:tracking-[4.32px] mt-20'>
                    TERMS AND CONDITIONS
                </div>
                <div className='relative mt-3 max-w-[1391px] w-11/12 backdrop-blur-2xl border-[1px] rounded-[21px] bg-about-details-section border-[#130C5C] py-9 md:py-14 px-4 md:px-9 mx-auto'>
                {TERMS_AND_CONDITIONS.map((item, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-base">{item.description}</p>
                  </div>
                ))}
                <div className="absolute rounded-full -top-8 right-20 h-16 w-16 bg-[#0d0a30] border flex justify-center items-center">
                <GrDocumentText className="w-7 h-7"/>
                </div>
                </div>  
            </div>     
        </div>     
    </div>
  )
}

export default Termsandcondition