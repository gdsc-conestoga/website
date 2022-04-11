const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()

exports.makeAdmin = functions.https.onRequest((request, response) => {
  const { uid } = request.query
  admin.auth().setCustomUserClaims(uid, { 'admin': true })
  response.sendStatus(200);
});
