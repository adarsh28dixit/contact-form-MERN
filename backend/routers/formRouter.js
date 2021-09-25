import express from 'express'
import Form from '../models/formModel.js';

const formRouter = express.Router();

formRouter.post('/submit', async(req, res)=>{
    const user = new Form({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        message: req.body.message,
    });
    const createdForm = await user.save();
    res.send({
        _id: createdForm._id,
        name: createdForm.name,
        email: createdForm.email,
        mobile: createdForm.mobile,
        message: createdForm.message,
    })
});

export default formRouter;