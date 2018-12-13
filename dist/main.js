const source = $("#wonders-template").html()
const template = Handlebars.compile(source)
const express = require(`express`)
const main = express()
const renderer = require(`./renderer`)
main.use(renderer)
$.get(`/recipes/${$(`#food-input`).val()}`,function(res){
    renderer.render(res)
})