type FilterProps = {
  minPrice: number | "";
  maxPrice: number | "";
  minWeight: number | "";
  maxWeight: number | "";
  minCalories: number | "";
  maxCalories: number | "";
  onMinPriceChange: (value: number | "") => void;
  onMaxPriceChange: (value: number | "") => void;
  onMinWeightChange: (value: number | "") => void;
  onMaxWeightChange: (value: number | "") => void;
  onMinCaloriesChange: (value: number | "") => void;
  onMaxCaloriesChange: (value: number | "") => void;
}

export const Filter = ({
  minPrice,
  maxPrice,
  minWeight,
  maxWeight,
  minCalories,
  maxCalories,
  onMinPriceChange, 
  onMaxPriceChange,
  onMinWeightChange,
  onMaxWeightChange,
  onMinCaloriesChange,
  onMaxCaloriesChange,
} : FilterProps) => {

  const changedMinPrice = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMinPriceChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }

  const changedMaxPrice = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMaxPriceChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }

  const changedMinWeight = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMinWeightChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }

  const changedMaxWeight = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMaxWeightChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }

  const changedMinCalories = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMinCaloriesChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }

  const changedMaxCalories = (event : React.ChangeEvent<HTMLInputElement>) => {
    onMaxCaloriesChange(event.target.value == "" ? "" : event.target.valueAsNumber);
  }


  return (
    <section className="flex flex-wrap gap-2 p-3">
      <input className="grow pl-2 rounded-lg" placeholder="Минимальная цена"
        type="number"
        min={0}
        value={minPrice}
        onChange={changedMinPrice}
      />
      <input className="grow pl-2 rounded-lg" placeholder="Максимальная цена"
        type="number"
        min={0}
        value={maxPrice}
        onChange={changedMaxPrice}
      />
      <input className="grow  pl-2 rounded-lg" placeholder="Минимальный вес"
        type="number"
        min={0}
        value={minWeight}
        onChange={changedMinWeight}
      />
      <input className="grow pl-2 rounded-lg" placeholder="Максимальный вес"
        type="number"
        min={0}
        value={maxWeight}
        onChange={changedMaxWeight}
      />
      <input className="grow pl-2 rounded-lg" placeholder="Минимум калорий"
        type="number"
        min={0}
        value={minCalories}
        onChange={changedMinCalories}
      />
      <input className="grow pl-2 rounded-lg" placeholder="Максимум калорий"
        type="number"
        min={0}
        value={maxCalories}
        onChange={changedMaxCalories}
      />
    </section>
  );
};