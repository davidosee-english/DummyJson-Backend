import axios from "axios"

// Variables 
const BASE_URL = process.env.BASE_URL


// Get the list of user from the external API
const getUsersFromDummyJSON = async () => {
  try {
        return await axios.get(`${BASE_URL}/users`,
        { 
          headers: { 
          'Content-Type': 'application/json'
          } 
        }
      )
  } 
  catch (err) {
    const error = new Error(err)
    return error
  }
}

// Get the list of user from the external API
const getSingleUserFromDummyJSON = async (user_id) => {
    try {
          return await axios.get(`${BASE_URL}/users/${user_id}`,
          { 
            headers: { 
            'Content-Type': 'application/json'
            } 
          }
        )
    } 
    catch (err) {
      const error = new Error(err)
      return error
    }
  }








// @desc Return firstname and lastname from list of users 
// @route GET  : /api/names
const GetUsersNames = async (req, res, next) => 
{
    // List of users
    const response = await getUsersFromDummyJSON()

    // Catching Axios errors
    if (response.status != 200)
    {
        const err = new Error("Could not get users from DummyJSON")
        err.status = 400
        next(err)
    }

    const users = response.data?.users
    res.status(200).json(users)
}



// @desc Return firstname and lastname from list of users 
// @route GET  : /api/names/:id
const GetSingleUserName = async (req, res, next) => 
{
    // Grabbing the id from our API endpoint 
    const {id} = req.params

    // List of users
    const response = await getSingleUserFromDummyJSON(id)

    // Catching Axios errors
    if (response.status != 200)
    {
        const err = new Error("Could not get a single user from DummyJSON")
        err.status = 400
        next(err)
    }

    const single_user = response?.data
    res.status(200).json(single_user)
    
}


export {GetUsersNames, GetSingleUserName}


