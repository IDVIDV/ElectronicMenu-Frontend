type PaginationProps = {
    page: number;
    onPageChanged: (value: number) => void;
  };

export const Pagination = ({
  page,
  onPageChanged,
}: PaginationProps) => {
    
  return (
    <div className="flex gap-1 justify-center mt-2">
      <button className="bg-neutral-700 px-10 text-white text-xl text-center rounded-l-xl"
        disabled={page <= 1}
        onClick={() => onPageChanged(page - 1)}
      >
        &#60;
      </button>
      <div className="bg-neutral-700 px-10 text-white text-xl text-center text-xl">
        {page} 
      </div>
      <button className="bg-neutral-700 px-10 text-white text-xl text-center text-xl rounded-r-xl"
        onClick={() => onPageChanged(page + 1)}
      >
        &#62;
      </button>
    </div>
  );
};