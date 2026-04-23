import { connectDB } from "../../lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ message: "MongoDB Connected Successfully 🚀" });
  } catch (error) {
    console.log(error); // 👈 IMPORTANT
    return Response.json({ error: error.message });
  }
}