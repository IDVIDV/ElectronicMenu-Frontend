import { DropDown } from ".";

type SortProps = {
    sortField: string,
    sortDirection: boolean,
    onSortFieldChanged: (sortField: string) => void;
    onSortDirectionChanged: (sortDirection: boolean) => void;
}

export const Sort = ({
    sortField,
    sortDirection,
    onSortFieldChanged,
    onSortDirectionChanged
}: SortProps) => {

  const getFieldText = (value: string) => {
    switch (value) {
      case "PositionName":
          return "Название";
      case "Price":
        return "Цена";
      case "Weight":
        return "Вес";
      default:
        return "Название";
    }
  }

  const selectedSortFieldChanged = (value: string) => {
    switch(value) {
      case "Название":
        return onSortFieldChanged("PositionName");
      case "Цена":
        return onSortFieldChanged("Price");
      case "Вес":
        return onSortFieldChanged("Weight");
      default:
        return onSortFieldChanged("PositionName");
    }
  }

  const selectedSortDirectionChanged = (value: string) => {
    switch(value) {
      case "По возрастанию":
        return onSortDirectionChanged(false);
      case "По убыванию":
        return onSortDirectionChanged(true);
      default:
        return onSortDirectionChanged(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <DropDown
        selectedOption={getFieldText(sortField)}
        options={["Название", "Цена", "Вес"]}
        onSelectedChange={selectedSortFieldChanged}
      />
      <DropDown
        selectedOption={sortDirection ? "По убыванию" : "По возрастанию"}
        options={["По возрастанию", "По убыванию"]}
        onSelectedChange={selectedSortDirectionChanged}
      />
    </div>
  );
}