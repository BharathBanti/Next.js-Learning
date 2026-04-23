import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req){
  try{
    // 1. connect to DB
    await connectDB();

    // 2. Get data from request body
    const body = await req.json();

    // 3. Create new user in DB
    const newUser = await User.create(body);

    // 4. Send response
    return Response.json({
      message: "User created Successfully",
      data: newUser,
    })
  }
  catch(error){
    return Response.json({
      error: "Failed to create user",
      details: error.message,
    });
  }
}

export async function GET(){
  try{
    // 1. Connect DB
    await connectDB();

    // 2. Fetch all users
    const users = await User.find();

    // 3. Send Response
    return Response.json({
      success: true,
      data: users,
    })
  }
  catch(error){
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}