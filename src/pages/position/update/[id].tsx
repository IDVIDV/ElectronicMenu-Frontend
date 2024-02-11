import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { api } from "~/api";
import { Position } from "~/types";
import { CreateOrUpdatePositionRequest } from "~/types";
import { useForm } from "react-hook-form";

type PositionUpdatePageProps = {
    position: Position
}

export const PositionUpdatePage = ({position} : PositionUpdatePageProps) => {  
  const router = useRouter();

  const updatePosition = (newPosition: CreateOrUpdatePositionRequest) => {
    api.position.updatePosition(position.id, newPosition);
    router.replace("/");
  }

  const {
    register,
    handleSubmit,
  } = useForm<CreateOrUpdatePositionRequest>()

  return (
    <form className="flex flex-col gap-5 bg-white p-5 rounded" 
      onSubmit={handleSubmit(updatePosition)}
    >
      <input 
        className = "border border-black rounded p-2"
        type="string"
        placeholder="Название"
        defaultValue={position?.positionName} 
        {...register("positionName", {required: true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="string"
        placeholder="Ссылка на картинку"
        defaultValue={position?.imgLink} 
        {...register("imgLink")} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Цена"
        defaultValue={position?.price} 
        {...register("price", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Вес"
        defaultValue={position?.weight} 
        {...register("weight", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Калории"
        defaultValue={position?.calories} 
        {...register("calories", {required:true, min:1, valueAsNumber:true})} 
      />
      <input 
        className = "border border-black rounded p-2"
        type="number"
        placeholder="Для веганов?"
        defaultValue={position?.isVegan} 
        {...register("isVegan", {required:true, min:0, max:1, valueAsNumber:true})} 
      />
      <input
        className = "border border-black rounded p-2" 
        type="string"
        placeholder="Калории"
        defaultValue={position?.ingridients} 
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

export default PositionUpdatePage;

export const getServerSideProps: GetServerSideProps<PositionUpdatePageProps> = async (ctx) => {
  const { params } = ctx;
  const idStr = params?.id;

  if (typeof idStr !== "string") {
    return {
      notFound: true,
    };
  }

  const id = Number.parseInt(idStr);

  if (Number.isNaN(id)) {
    return {
      notFound: true,
    };
  }

  const response = await api.position.getPositionById(id);

  return { props: { position: response.data } };
}