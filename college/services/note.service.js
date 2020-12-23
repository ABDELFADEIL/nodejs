const Note = require('../models').Note;

async function average() {
    try {
      const notes = await Note.findAll({
          attributes: ['note']
      })
        let notesArray = [];
        const avergageNote = notes.reduce((a, b)=> (a + b) / notes.length);
      return avergageNote;
    }catch (e) {
        console.log(e)
    }

    module.exports = { average }
}