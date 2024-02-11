import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/api";
import { Position } from "~/types"

type PositionPageProps = {
    position: Position;
}

const PositionPage = ({position} : PositionPageProps) => {  
  const router = useRouter();

  const deletePosition = (event: React.MouseEvent<HTMLButtonElement>) => {
    api.position.deletePosition(position.id);
    router.replace("/");
  }

  return (
    <>
      <Head>
        <title>{position.positionName}</title>
      </Head> 
        <div className="flex flex-col gap-3 my-1 w-full border border-black rounded-lg min-h-screen bg-white p-3 text-xl">
          <div className="flex justify-around">
              <img className="shrink-0 size-96" src={position.imgLink} alt="Здесь должна быть картинка"></img>
          </div>
          <div className="grow flex flex-col px-6">
            <div className="text-6xl font-bold text-center">{position.positionName}</div>
            <div className="text-3xl grow flex flex-col gap-5">
              <div>Цена: {position.price}</div>
              <div>Калории на 100г: {position.calories}</div>
              <div>Вес: {position.weight} г</div>
              <div>Для веганов?: {position.isVegan == 1 ? "Да" : "Нет"}</div>
              <div className="grow">Состав: {position.ingridients}</div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
              <Link className="basis-1/2 h-full bg-blue-700 text-[#ffdbc5] p-2 text-2xl text-center rounded-lg" href={"/position/update/" + position.id}>Изменить</Link>
              <button className="basis-1/2 h-full bg-red-500 text-[#ffdbc5] p-2 text-2xl rounded-lg" onClick={deletePosition}>
                Удалить
              </button>
          </div>
        </div>
    </>
  );
}

export default PositionPage;

export const getServerSideProps: GetServerSideProps<PositionPageProps> = async (ctx) => {
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