/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({
      msg: "Name, email, and password are required.",
      success: false,
    }, { status: 400 });
  }

  const hashedPw = await bcrypt.hash(password, 4);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPw,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return NextResponse.json({
      user,
      msg: "User created successfully",
      success: true,
    });
  } catch (e: any) {
    // Check for unique constraint failure
    if (e.code === 'P2002' && e.meta?.target?.includes('email')) {
      return NextResponse.json({
        msg: "Email already exists. Please use a different email.",
        success: false,
      }, { status: 409 }); // Conflict
    }

    return NextResponse.json({
      error: e.message || "Unknown error",
      msg: "Failed to create user",
      success: false,
    }, { status: 500 });
  }
};
