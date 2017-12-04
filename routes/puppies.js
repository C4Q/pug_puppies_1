var express = require('express');
var router = express.Router();

var db = require('../db/queries');


function getAllPuppies(req, res, next){
  db.getAllPuppies()
  .then((data) => {
    console.log('data: ', data)
    res.render('puppyList', { puppies: data });
  })
  .catch((err) => {
    return next(err);
  });
}
// REQUEST GET /puppies/add

router.get('/', getAllPuppies)

// GET puppies/add

router.get('/add', (req, res, next) => {
  res.render('addPuppy');
});

router.get('/:id', (req, res, next) => {
  db.getSinglePuppy(req.params.id)
    .then((data) => {
      res.render('puppy', { puppy: data });
    })
    .catch((err) => {
      return next(err);
    });
});

router.get('/edit/:id', (req, res, next) => {
  db.getSinglePuppy(req.params.id)
  .then((data) => {
    console.log(data)
    res.render('editPuppy', { puppy: data });
  })
  .catch((err) => {
    return next(err);
  });
})


router.post('/edit/:id', (req, res, next) => {
  const { name, breed, age, sex, imageurl } = req.body
  db.updatePuppy(req.params.id, name, breed, age, sex, imageurl)
    .then(() => {
      getAllPuppies(req, res, next)
    })
    .catch((err) => {
      return next(err);
    });
});


router.post('/delete/:id', (req, res, next) => {
  db.removePuppy(req.params.id)
    .then(() => {
      getAllPuppies(req, res, next)
    })
    .catch((err) => {
      return next(err);
    });
});

router.post('/', (req, res, next) => {
  const { name, breed, age, sex, imageURL } = req.body;
  db.createPuppy(name, breed, age, sex, imageURL)
    .then(() => {
      res.json({
        status: 'success',
        message: 'Inserted one puppy'
      });
    })
    .catch((err) => {
      console.log(err)
      return next(err);
    });
});


router.delete('/:id', (req, res, next) => {
  db.removePuppy(req.params.id)
    .then(function (result) {
      /* jshint ignore:start */
      res.json({
        status: 'success',
        message: `Removed ${result.rowCount} puppy`
      });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
});


module.exports = router;