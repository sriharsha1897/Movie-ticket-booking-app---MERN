const router = require('express').Router();
const Seats = require('../models/Seats');

router.get('/', async (req, res) => {
  try {
    const seats = await Seats.find();
    res.status(200).json(seats);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/add', async (req, res) => {
  const addSeats = new Seats(req.body);
  try {
    const saveSeats = await addSeats.save();
    res.status(200).json(saveSeats);
  } catch (err) {
    res.status(500).json(err);
  }
});

// insert many
router.post('/insertmany', async (req, res) => {
  try {
    const multiUser = await Seats.insertMany(req.body);
    res.status(200).json(multiUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id/:user', async (req, res) => {
  // console.log(req.params.user);
  const user = await Seats.findById(req.params.id);
  try {
    if (!user.isReserved) {
      const updateSeat = await Seats.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            isReserved: true,
            name: req.params.user,
          },
        },
        { new: true }
      );
      res.status(200).json(updateSeat);
    } else {
      res.status(200).json('its already booked');
      console.log('its already booked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch('/updateAll', async (req, res) => {
  try {
    const updateAll = await Seats.updateMany(
      { isReserved: true },
      { $set: { isReserved: false, name: '' } }
    );
    res.status(200).json(updateAll);
  } catch (err) {
    res.status(500).json('Error' + err);
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const deleteAll = await Seats.deleteMany();
    res.status(200).json(deleteAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
