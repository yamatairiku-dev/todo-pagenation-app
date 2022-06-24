'use strict'

module.exports = function getPagination(PAGETATION_COLS, pageCount, currentPage) {
  const offset = pageCount - PAGETATION_COLS
  const PAGETATION_COLS_CENTER = Math.ceil( PAGETATION_COLS / 2 )
  let pageNumArr = new Array(PAGETATION_COLS)
  let pagePre = null
  let pageNext = null
  let pagenation = {}

  if (offset <= 0) {
    for (let i=1; i<=pageCount; i++) {
      pageNumArr[i-1] = i
    }
    return pagenation = {pagePre, currentPage, pageNext, pageNumArr}
  }

  if (currentPage <= PAGETATION_COLS_CENTER) {
    for (let i=1; i<=PAGETATION_COLS; i++) {
      pageNumArr[i-1] = i
    }
    pageNext = currentPage + 1
    currentPage != 1 ? pagePre = currentPage - 1 : null
  } else if (pageCount - currentPage < PAGETATION_COLS_CENTER) {
    for (let i=1; i<=PAGETATION_COLS; i++) {
      pageNumArr[i-1] = i + offset
    }
    pagePre = currentPage - 1
    currentPage != pageCount ? pageNext = currentPage + 1 : null
  } else {
    for (let i=1; i<=PAGETATION_COLS; i++) {
      pageNumArr[i-1] = i + currentPage - PAGETATION_COLS_CENTER
    }
    pagePre = currentPage - 1
    pageNext = currentPage + 1
  }
  return pagenation = {pagePre, currentPage, pageNext, pageNumArr}
}