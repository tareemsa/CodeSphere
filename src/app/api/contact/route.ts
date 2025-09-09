import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // 🔹 هون ممكن تبعت ايميل باستخدام nodemailer / resend / smtp
    console.log("📩 رسالة جديدة:", { name, email, message });

    return NextResponse.json({ success: true, message: "تم إرسال الرسالة بنجاح ✅" });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "حدث خطأ غير متوقع" },
      { status: 500 }
    );
  }
}
