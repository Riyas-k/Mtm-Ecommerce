import User from "../models/userSchema.js";

export const checkEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Exist = await User.findOne({ Email: email });
      if (Exist) {
        resolve({ status: true });
      } else {
        resolve({ status: false });
      }
    } catch (error) {
      console.log(error);
    }
  });
};
export const getSignUp = (email, name, phone, hashPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newData = new User({
        Name: name,
        Email: email,
        PhoneNo: phone,
        Password: hashPassword,
      });
      await newData.save().then(() => {
        resolve({status:true});
      });
    } catch (error) {
      console.log(error);
    }
  });
};

export const getUser = (email)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let data = await User.findOne({Email:email})
            resolve(data)
        } catch (error) {
            console.log(error);
        }
    })
}