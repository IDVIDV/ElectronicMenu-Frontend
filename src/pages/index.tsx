import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/api";
import { Filter, Pagination, PositionCard, Sort } from "~/components";
import { usePositions } from "~/hooks";
import { PositionPage } from "~/types";

type HomeProps = {
  positionsPage : PositionPage
}

export const Home = ({positionsPage : initialPositionsPage} : HomeProps) => {
  const { positionsPage, refetch } = usePositions(initialPositionsPage);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [minWeight, setMinWeight] = useState<number | "">("");
  const [maxWeight, setMaxWeight] = useState<number | "">("");
  const [minCalories, setMinCalories] = useState<number | "">("");
  const [maxCalories, setMaxCalories] = useState<number | "">("");
  const [page, setPage] = useState(initialPositionsPage.page);
  const [sortField, setSortField] = useState("PositionName");
  const [sortDirection, setSortDirection] = useState(false);

  const constructRequest = (page?: number) => {
    return {
      Page: page ?? 1,
      PageSize: 5,

      SortField: sortField,
      SortDirection: sortDirection,

      MinPrice: minPrice == "" ? undefined : minPrice,
      MaxPrice: maxPrice == "" ? undefined : maxPrice,
      MinWeight: minWeight == "" ? undefined : minWeight,
      MaxWeight: maxWeight == "" ? undefined : maxWeight,
      MinCalories: minCalories == "" ? undefined : minCalories,
      MaxCalories: maxCalories == "" ? undefined : maxCalories,
    }
  }

  const filterButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPage(1);
    refetch(constructRequest());
  }

  const pageChanged = (page: number) => {
    setPage(page);
    refetch(constructRequest(page))
  }

  return (
    <>
      <Head>
        <title>EM</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <div className="flex rounded-lg bg-neutral-700">
          <div className="basis-1/2">
            <Filter
              minPrice={minPrice}
              maxPrice={maxPrice}
              minWeight={minWeight}
              maxWeight={maxWeight}
              minCalories={minCalories}
              maxCalories={maxCalories}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onMinWeightChange={setMinWeight}
              onMaxWeightChange={setMaxWeight}
              onMinCaloriesChange={setMinCalories}
              onMaxCaloriesChange={setMaxCalories}
            />
          </div>
          <div className="basis-1/2 flex flex-col gap-2 pr-3">
            <Sort
              sortField={sortField}
              sortDirection={sortDirection}
              onSortFieldChanged={setSortField}
              onSortDirectionChanged={setSortDirection}
            />
            <button className="bg-[#900d0d] px-4 rounded text-white text-lg font-bold" 
              onClick={filterButtonClicked}>Отфильтровать
            </button>
          </div>
        </div>
        <div>
            {positionsPage.positions.map((p) => (<PositionCard key={p.id} position={p}/>))}
            <Link href="/position/add">
              <div className="w-full flex justify-center bg-white rounded border border-[#111111] my-4 p-5 text-5xl">
                  +
              </div>
            </Link>
        </div>
        <Pagination
          page={page}
          onPageChanged={pageChanged}
        />
      </main>
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async() => {
  const response = await api.position.getPositions({
    Page: 1,
    PageSize: 5,

    SortField: "PositionName",
    SortDirection: false,
  });

  return { props: { positionsPage: response.data}};
};