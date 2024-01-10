import { FC } from 'react';
import { StartButtonType } from '../../types/StartButtonType';
import style from './StartButton.module.scss';

export const StartButton: FC<StartButtonType> = ({ setIsStarted }) => {
  const handleClick = () => {
    setIsStarted(true);
  };
  return (
    <button className={style.button} onClick={handleClick}>Start</button>
  )
}