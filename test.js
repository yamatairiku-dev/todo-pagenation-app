'use strict'

const ITEM_PER_PAGE = 10;
const PAGETATION_COLS = 6;

// 総合レコード数を仮設定
const itemNum = 100;

const currentPage = 6

// 総ページ数
const pageCount = Math.ceil(itemNum / ITEM_PER_PAGE);

const pagenation = getPagination(PAGETATION_COLS, pageCount, currentPage)

console.log(pagenation)

function getPagination(PAGETATION_COLS, pageCount, currentPage) {
  const offset = pageCount - PAGETATION_COLS
  const PAGETATION_COLS_CENTER = Math.ceil( PAGETATION_COLS / 2 )
  let pageNumArr = new Array(PAGETATION_COLS)
  let pagePre = null
  let pageNext = null
  let pagenation = {}
  let activeCol = ''

  if (offset <= 0) {
    for (let i=1; i<=PAGETATION_COLS; i++) {
      pageNumArr[i-1] = i
    }
    activeCol = currentPage
    return pagenation = {pagePre, currentPage, pageNext, activeCol, pageNumArr}
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
  activeCol = pageNumArr.indexOf(currentPage) + 1

  return pagenation = {pagePre, currentPage, pageNext, activeCol, pageNumArr}
}