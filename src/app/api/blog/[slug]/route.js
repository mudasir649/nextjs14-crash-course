import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async({params}) => {
    const { slug } = params;
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get post.");
    }
}


export const DELETE = async ({ params }) => {
    try {
        const { slug } = params;
        connectToDb();
        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted.")
    } catch (error) {
        
    }
}