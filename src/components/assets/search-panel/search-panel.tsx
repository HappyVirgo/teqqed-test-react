import { ChangeEvent, useState } from 'react'
import { LoadingSpinner } from '../../'

import classes from './search-panel.module.scss'
import SearchIcon from '../../../assets/img/icon/search.svg'

type SearchPanelProps = {
  loading?: boolean
  onSearch?: (searchTxt: string) => void
}

export const SearchPanel = ({ loading, onSearch }: SearchPanelProps) => {
  const [searchText, setSearchText] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchText)
  }

  return (
    <div className={classes.searchPanel}>
      <form onSubmit={onSubmitHandler}>
        <img src={SearchIcon} alt={''} className={classes.searchIcon} />
        <input type="text" name="searchTxt" value={searchText} placeholder="Plaats, buurt, adres, etc." onChange={onChangeHandler} />
        <button type="submit" className={loading ? classes.loading : ''}>
          {
            loading ? <LoadingSpinner /> : <span>Search</span>
          }
        </button>
      </form>
    </div>
  )
}