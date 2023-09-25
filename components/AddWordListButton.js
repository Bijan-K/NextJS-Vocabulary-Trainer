import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function AddListButton() {
  const { data, setData, setCurrentListName, saveWords, setSaveWords } =
    useContext(WordsContext);

  const [buttonSize, setButtonSize] = useState(40);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    let FileName = file.name.split('.txt')[0];
    let FileContent;
    const reader = new FileReader();
    reader.onload = (event) => {
      FileContent = event.target.result.split('\n');
      setData({ ...data, [FileName]: FileContent });
      setCurrentListName(FileName);
    };
    reader.readAsText(file);
  };

  const hoverEffect = () => {
    buttonSize == 40 ? setButtonSize(48) : setButtonSize(40);
  };

  return (
    <div className="fixed text-center top-4 right-4 landscape:top-auto landscape:bottom-5 landscape:right-5 w-20 h-20 landscape:w-32 landscape:h-32 rounded-md bg-slate-800 grid grid-cols-1 place-items-center">
      <button
        onClick={() => document.getElementById('fileInput').click()}
        onMouseLeave={hoverEffect}
        onMouseEnter={hoverEffect}
        className="w-5/6 h-5/6 border-4 border-white border-dashed rounded-md grid grid-cols-1 place-items-center"
      >
        <HiPlus size={buttonSize} />
      </button>
      <input
        id="fileInput"
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
}
