import React, { useCallback, useRef, useState } from 'react'
import debounce from "lodash.debounce"
import {AiOutlineSearch} from "react-icons/ai"
import styles from "./Searh.module.css"
import { useDispatch } from 'react-redux'
import { setSearch } from '../../Redux/searching/category.tsx'
import { Container, TextField } from '@mui/material'
 const Search = () => {
 // const search = useSelector(state=>state.filter.search);
  const dispatch = useDispatch()
  const [value,setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClear = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setSearch(""));
    setValue("")
  inputRef.current?.focus()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uptadeSearchValue = useCallback(
    debounce((str:string)=>{
     dispatch(setSearch(str))
    },1000),
    []
  )

  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    uptadeSearchValue(event.target.value)
  }

  return (
    <Container sx={{mb:`1,5rem`}} >
          <>
    <TextField id="standard-basic" fullWidth variant='standard'  value={value} ref={inputRef} onChange={onChangeInput}  className={styles.root} label='Поиск'>
    </TextField>

    </>
    <AiOutlineSearch style={{color:`white`}} className={styles.sea}/>
        {value && <div onClick={onClear}>fesko</div>}
    
        


  </Container>

  )
}
export default Search