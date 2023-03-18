import { AiOutlineShareAlt } from "react-icons/ai";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img src={photo} alt={prompt} className="w-full h-auto object-cover rounded-xl" />
      <div className="m-2 p-4 hidden absolute bottom-0 left-0 right-0 bg-[#10131f] rounded-md group-hover:flex flex-col max-h-[94.5%]">
        <p className="text-white text-base overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-[#545958] flex justify-center items-center">
              <p className="text-white text-xs font-bold">{name[0]}</p>
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage(_id, photo)}>
            <AiOutlineShareAlt className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
