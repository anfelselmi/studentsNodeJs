const mongoose = require('mongoose')
const {  Schema } = mongoose

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  ville: String,
})
// Schema model on va definir la structure de donnés 
// students chnowa 3andou des attributs name type mte3ha email type mte3ha 
module.exports = mongoose.model('Student', schema);