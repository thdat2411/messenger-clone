import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const { email, name, password } = body;
        if (!email || !password || !name) {
            return new NextResponse('Missing info', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    } catch (err: any) {
        return new NextResponse(err.message, { status: 500 });
    }

}