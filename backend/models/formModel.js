import  Mongoose  from "mongoose";

const formSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: Number, required: true},
    message: {type: String, required: true},
});

const Form = Mongoose.model("Form", formSchema);

export default Form;
