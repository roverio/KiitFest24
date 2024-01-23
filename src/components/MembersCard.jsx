import Image from "next/image"

const MembersCard = ({ src, memberName }) => {
  return (
    <div className="text-white members-card flex flex-col items-center gap-3 py-5 px-5 max-w-60 min-h-[300px] rounded-2xl">
        <Image 
            src={src} 
            alt={memberName} 
            width={200}
            height={250}
            className="object-cover"
        ></Image>
        <h1 className="uppercase font-semibold text-center">{memberName}</h1>
    </div>
  )
}

export default MembersCard