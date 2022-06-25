'use strict'

const models = require('./models')
const getPagination = require('./getPagenation')
const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))

app.get('/name/:name', (req, res) => {
  res.render('index', { name: req.params.name })
})

//ToDo一覧の取得
app.get('/todos', (req, res, next) => {
  const ITEM_PER_PAGE = 10;   //1ページあたりの行数を設定
  const PAGETATION_COLS = 5;  //ページネーションの列数を設定
  const page = !req.query.page ? 1: Number(req.query.page);  //クエリは文字列として扱われる
  models.Todo.getPage(ITEM_PER_PAGE, page).then(todoList => {
    //アイテム数
    const itemNum = todoList['count'];
    //総ページ数
    const pageCount = Math.ceil(itemNum / ITEM_PER_PAGE);
    //ページネーションを取得
    const pagenation = getPagination(PAGETATION_COLS, pageCount, page)
    console.log(pagenation) //ページネーションの確認

    res.render('todos',{todos: todoList.rows, pagenation : pagenation, itemNum: itemNum, itemPerPage: ITEM_PER_PAGE})
  }, next)
})

//ToDoの完了・未完了更新
app.put('/todos/:id/completed', (req, res, next) => {
  const id = req.params.id
  const refererUrl = req.headers.referer
  const update = { 
    completed: true
  }
  models.Todo.mod(id, update).then((id) => {
    res.redirect(refererUrl), next})
})
app.delete('/todos/:id/completed', (req, res, next) => {
  const id = req.params.id
  const refererUrl = req.headers.referer
  const update = { 
    completed: false
  }
  models.Todo.mod(id, update).then((id) => {
    res.redirect(refererUrl), next})
})

//ToDoの削除
app.delete('/todos/:id', (req, res, next) => {
  const id = req.params.id
  const refererUrl = req.headers.referer
  models.Todo.remove(id).then((id) => res.redirect(refererUrl), next)
})

app.get('/', (req, res) => res.render('index'))

// エラーハンドリングミドルウェア
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).json({ error: err.message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))