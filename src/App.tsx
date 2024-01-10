import { useEffect, useState } from 'react';

import { Loader } from './components/Loader';
import { Field } from './components/Field';
import { Select } from './components/Select';
import { StartButton } from './components/StartButton';
import { CellsList } from './components/CellsList';

import { ResponseType } from './types/ResponseType';
import { getData } from './utils/getData';

import style from './App.module.scss';

export const App = () => {
  const [selectedMode, setSelectedMode] = useState<ResponseType>({ name: '', field: 0, id: '' });
  const [isStarted, setIsStarted] = useState(false);
  const [data, setData] = useState<ResponseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCells, setHoveredCells] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setHoveredCells([]);
  }, [selectedMode]);

  const handleCellHoverChange = (cellIndex: number, isHovered: boolean) => {
    if (isHovered) {
      setHoveredCells((prevHoveredCells) => [...prevHoveredCells, cellIndex]);
    } else {
      setHoveredCells((prevHoveredCells) =>
        prevHoveredCells.filter((index) => index !== cellIndex)
      );
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={style.container}>
      <h1 className={style.header}>StarNavi: Test Task</h1>
      <Select
        setSelectedMode={setSelectedMode}
        data={data}
      />
      <StartButton setIsStarted={setIsStarted} />
      <CellsList
        hoveredCells={hoveredCells}
        selectedMode={selectedMode}
      />
      {isStarted && selectedMode.id !== '' && (
        <Field
          selectedMode={selectedMode}
          onCellHoverChange={handleCellHoverChange}
        />
      )}
    </div>
  );
};
