import User from "../model/userModel.js";

export const getUser = async (req, res)=> {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (e) {
    console.log(e.message)
  }
}

export const getUserById = async (req, res)=> {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (e) {
    console.log(e.message)
  }
}

export const createUser = async (req, res)=> {
  try {
    await User.create(req.body);
    res.status(201).json({msg: "user created"});
  } catch (e) {
    console.log(e.message)
  }
}

export const updateUser = async (req, res)=> {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({msg: "user updated"});
  } catch (e) {
    console.log(e.message)
  }
}

export const deleteUser = async (req, res)=> {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({msg: "user deleted"});
  } catch (e) {
    console.log(e.message)
  }
}