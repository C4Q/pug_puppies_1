const pgp = require('pg-promise')({});

const db = pgp("postgres://localhost/puppies");

function getAllPuppies() {
  return db.any('select * from pups ORDER BY id ASC')
}

function getSinglePuppy(id) {
  return db.one('select * from pups where id = $1', [parseInt(id)])
}

function createPuppy(name, breed, age, sex, imageURL) {
  return db.none(
    `insert into pups(name, breed, age, sex, imageurl)
     values($1, $2, $3, $4, $5)`, [name, breed, parseInt(age), sex, imageURL]
  )
}

function updatePuppy(id, name, breed, age, sex, imageurl) {
  return db.none(
    `update pups 
    set name=$2, breed=$3, age=$4, sex=$5, imageurl=$6
    where id=$1`, [id, name, breed, parseInt(age), sex, imageurl]
  )
}

function removePuppy(id) {
  return db.result(`delete from pups where id = ${parseInt(id)}`)
}

module.exports = {
  getAllPuppies,
  getSinglePuppy,
  createPuppy,
  updatePuppy,
  removePuppy
};