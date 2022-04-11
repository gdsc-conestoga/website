const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()

exports.makeAdmin = functions.firestore
    .document('admins/{uid}')
    .onWrite(async (change, context) => {
  const docCreated = !change.before.exists
  const docDeleted = !change.after.exists
  const { uid } = context.params
  try {
    if (docCreated || docDeleted) {
      await admin.auth().setCustomUserClaims(uid, { 'admin': docCreated })
      functions.logger.log(`User ${uid} is now ${docCreated ? 'an admin' : 'a regular user'}`)
    }
  } catch (e) {
    functions.logger.log(`Something went wrong while updating an admin (${uid}): ${e.message}`, e)
  } finally {
    return null
  }
});

