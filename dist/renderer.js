const source = $("#wonders-template").html()
const template = Handlebars.compile(source)
const render = (data) => {
    let newHTML = template(data)
    $(``).append(newHTML)
}



















module.exports = renderer