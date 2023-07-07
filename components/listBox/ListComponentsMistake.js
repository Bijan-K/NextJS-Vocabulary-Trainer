export default function ListComponentsMistake({ word, itemIndex }) {
  const clickHandler = () => {
    window
      .open(`https://www.google.com/search?q=define+${word}`, '_blank')
      .focus();
  };

  return (
    <button
      onClick={clickHandler}
      className="text-red-400   p-3 text-center border-b-2 mx-5 "
    >
      {word}
    </button>
  );
}
