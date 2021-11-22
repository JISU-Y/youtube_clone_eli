import React, { useRef } from "react"
import styles from "./Search_header.module.css"

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef()

  const handelSearch = () => {
    const value = inputRef.current.value
    onSearch(value)
    inputRef.current.value = ""
  }

  const onClick = () => {
    handelSearch()
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") handelSearch()
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  )
}

export default SearchHeader
