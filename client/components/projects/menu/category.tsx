interface CategoryProps {
  allCategory: string[];
  selectCategory: (category: string) => void;
}

const Category = ({ allCategory, selectCategory }: CategoryProps) => {
  return (
    <div className='flex justify-between w-96 mx-auto text-gold'>
      {allCategory.map((category, index) => {
        return (
          <button
            key={index}
            className='capitalize text-lg font-semibold tracking-wider hover:text-white hover:bg-gold duration-500 px-2 py-1 rounded'
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
