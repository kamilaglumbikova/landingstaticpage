import Image from "next/image";

type Props = {
  team: {
    name: string;
    image: string;
    position: string;
    icons: string[];
  };
};

const TeamItem = ({ team }: Props) => {
  return (
    <div>
        <div className="relative w-[271px] h-[300px] mx-auto">
        <Image src={team.image} fill alt={team.name} />
        </div>
        <div className="flex flex-col mt-5 justify-center items-center text-center">
            <span className="text-heading text-xl font-medium text-left">{team.name}</span>
            <span className="mt-2.5 text-lightGray text-left">{team.position}</span>
            <div className="flex gap-2.5 mt-[15px]">
                {team.icons.map((icon,index) => (
                    <Image src={icon} alt="icon" key={index} width={18} height={18} />
                ))}
            </div>
        </div>
    </div>
  )
};

export default TeamItem;
