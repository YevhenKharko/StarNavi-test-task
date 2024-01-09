import style from './CellsList.module.scss';

export const CellsList = () => {
  return (
    <div className={style.container}>
      <h2>Hover Squares</h2>
      <ul className={style.list}>
        <li>row 2 col 1</li>
        <li>row 2 col 2</li>
        <li>row 2 col 3</li>
      </ul>
    </div>
  )
}