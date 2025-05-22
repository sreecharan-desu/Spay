import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async function(){
    const response = await getServerSession();
    if(response){
    return NextResponse.json({
        response
    })
    }else{
        return NextResponse.json({
        msg : "Not signedin"
    })
    }

}