import Link from "next/link";
import { Position } from "~/types/Position";

type PositionCardProps = {
  position : Position;
}

export const PositionCard = ({position} : PositionCardProps) => {
  return (
    <Link href={`/position/${position.id}`}>
      <div className="w-full bg-white rounded border border-[#111111] my-4 p-5 text-xl flex flex-row justify-stretch gap-10">
          <div className="h-48 w-48 grow-0 shrink-0 flex place-content-center">
              <img className="h-fit w-fit" src={position.imgLink} alt="Здесь должна быть картинка"/>
          </div>
          <div className="grow flex flex-col justify-evenly">
              <div className="mx-auto max-w-5xl font-bold text-5xl italic">{position.positionName}</div>
              <div className="flex">
                  <div className="basis-1/3 text-2xl">
                      <div>Калории: {position.calories}</div>
                      <div>Вес: {position.weight} г</div>
                  </div>
                  <div className="grow flex items-center justify-center italic text-5xl text-center font-bold">
                      {position.price}р
                  </div>
              </div>
          </div>
      </div>
    </Link>
  );
}