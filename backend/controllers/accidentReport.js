const accidentReport = require("./../models/AccidentReport");

module.exports = {
  createReport: async (req, res) => {
    try {
      // create model
      await accidentReport.create({
        employee: req.body.employee,
        whatHappen: req.body.whatHappen,
        whereHappen: req.body.whereHappen,
      });
      // log
      console.log("Report has been created");
      // redirect
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
};
