import { transporter } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json()
    if (!data.name || !data.email || !data.message || !data.query) {
        return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
    }
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "New Client on Deqube",
            text: "New Client",
            html: `<div>${data.name}</div><div>${data.email}</div><div>${data.message}</div><div>${data.query}</div>`
        });
        console.log("Message sent: %s", info.messageId);
        return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
    }
}