const getFood = function(food) {
    request(`http://www.recipepuppy.com/api/?q=${food}`, function (err,res,bod) {
        console.log(JSON.parse(bod))
        // console.log(err)
        // console.log(res)
    // console.log(res.body)
    return JSON.parse(bod)
    })
    // console.log(request.Response)
    // return request.Response
    
}
const request = require(`request`)
const express = require(`express`)
const router = express.Router()
// const logic = require(`./logic.js`)
router.get(`/sanity`, function (req, res) {
    res.send(`OK`)
})
router.get(`/recipes/:food`, function (req, res) {
    // let test = getFood(req.params.food)
    // console.log(test)
    let food = req.params.food
    request(`http://www.recipepuppy.com/api/?q=${food}`, function (err,result,bod) {
        let data = JSON.parse(bod)
        // console.log(err)
        // console.log(res)
    // console.log(res.body)
    res.send(data)
    })
})


















module.exports = router