import User from "../models/user.js"


export async function getAllUser(req,res){
    const getAllUser=await User.find();
    if(!getAllUser){
        return res.status(400).json({
            msg:"There are no users"
        })
    }
    return res.status(200).json(getAllUser);
}


export async function getUserById(req,res){
     try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error fetching user" });
    }
}

export async function createUser(req,res){
    const {firstName,lastName,email,phone}=req.body;
    if(!firstName||!lastName||!email||!phone){
        return res.status(401).json({
            msg:"All feilds are required"
        });
    }
    //console.log(req.body)
    const user=await User.create({
        firstName,
        lastName,
        email,
        phone
    })
    return res.status(201).json({
        msg:"User created Succesfully",
        user
    });
}

export async function updateUser(req,res){
    const {lastName}=req.body;
    const {id}=req.params;
    const user=await User.findByIdAndUpdate(id,{lastName},{new :true});

    if (!user) {
        return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
        msg:"user updated succesfully",
        user
    })
}



export async function deleteUser(req,res){
    const id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}






