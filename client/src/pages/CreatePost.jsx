import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    console.log("Handle submit");
  };

  const handleChange = (e) => {
    console.log("Handle change");
  };

  const handleSurpriseMe = () => {
    console.log("Hanlde surprise me");
  };

  return (
    <section className="max-w-7xl mx-auto bg-red-200">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Imagine to reality</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Bring what you have in mind to reality</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
        <div className="flex flex-col gap-5">
          <FormField labelName="Your name" type="text" name="name" placeholder="John Doe" value={form.name} handleChange={handleChange} />
          <FormField labelName="Prompt" type="text" name="prompt" placeholder="John Doe on a space suit" value={form.prompt} handleChange={handleChange} isSurpriseMe handleSurpriseMe={handleSurpriseMe} />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
