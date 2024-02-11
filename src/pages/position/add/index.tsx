import { useRouter } from "next/router";
import { api } from "~/api";
import { CreateOrUpdatePositionRequest } from "~/types";
import { useForm } from "react-hook-form";

export const PositionAddPage = () => {  
  const router = useRouter();

  const addPosition = (newPosition: CreateOrUpdatePositionRequest) => {
    api.position.addPosition(newPosition);
    router.replace("/");
  }

  const {
    register,
    handleSubmit,
  } = useForm<CreateOrUpdatePositionRequest>()

  return (
    <form className="flex flex-col gap-5 bg-white p-5 rounded" 
      onSubmit={handleSubmit(addPosition)}
    >
      <input 
        className = "border border-black rounded p-2"
        type="string"
        placeholder="Название"
        {...register("positionName", {required: true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="string"
        placeholder="Ссылка на картинку"
        {...register("imgLink")} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Цена"
        {...register("price", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Вес"
        {...register("weight", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Калории" 
        {...register("calories", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Для веганов?"
        {...register("isVegan", {required:true, min:0, max:1, valueAsNumber:true})} 
      />
      <input
        className = "border border-black rounded p-2" 
        type="string"
        placeholder="Калории"
        {...register("ingridients")} 
      />
      <input 
        className = "mx-auto border border-black rounded p-1 bg-green-600"
        type="submit" 
        value="Сохранить изменения"
      />
    </form>
  )
}

export default PositionAddPage;