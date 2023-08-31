import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function AddListButton() {
  const { data, setData } = useContext(WordsContext);

  const [buttonSize, setButtonSize] = useState(40);
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file.type === 'text/plain') {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContent(event.target.result.split('\n'));
        setData({ ...data, [fileName]: fileContent });
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a .txt file.');
    }
  };

  const hoverEffect = () => {
    buttonSize == 40 ? setButtonSize(48) : setButtonSize(40);
  };

  return (
    <div className="fixed text-center bottom-4 right-5 w-32 h-32 rounded-md bg-slate-800 grid grid-cols-1 place-items-center">
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