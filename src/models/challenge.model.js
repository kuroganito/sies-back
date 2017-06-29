// challenge-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const challenge = new mongooseClient.Schema({
    name: { type: String, required: true },
    description: { type: String },
    starts: { type: number, default: 0 },
    comment: { type: String },
    recurrent: { type: Boolean },
    type: { type: String },
    diamonds: { type: Number,default:0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('challenge', challenge);
};
