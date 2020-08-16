const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Log');
const validateLogInput = require('../../validation/logs');

router.get('/', (req, res) => {
    Log.find()
        .sort({ date: -1 })
        .then(logs => res.json(logs))
        .catch(err => res.status(404).json({ nologsfound: 'No logs found' }));
});

router.get('/user/:user_id', (req, res) => {
    Log.find({user: req.params.user_id})
        .then(logs => res.json(logs))
        .catch(err =>
            res.status(404).json({ nologsfound: 'No logs found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Log.findById(req.params.id)
        .then(log => res.json(log))
        .catch(err =>
            res.status(404).json({ nologfound: 'No log found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateLogInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newLog = new Log({
        totalCals: req.body.totalCals,
        totalProtein: req.body.totalProtein,
        type: req.body.type,
        grams: req.body.grams,
        user: req.user.id
      });
  
      newLog.save().then(log => res.json(log));
    }
  );

module.exports = router;