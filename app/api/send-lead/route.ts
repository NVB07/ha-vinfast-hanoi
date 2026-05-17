import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "dns";

export async function POST(req: Request) {
    try {
        const { name, phone, car } = await req.json();

        if (!name || !phone || !car) {
            return NextResponse.json({ error: "Thiếu trường thông tin bắt buộc!" }, { status: 400 });
        }

        const port = parseInt(process.env.EMAIL_PORT || "465");
        // For Gmail/SMTP: Port 465 is SSL/TLS (secure: true), Port 587 is STARTTLS (secure: false)
        const isSecure = port === 465;

        // Configure Nodemailer transporter using Environment Variables
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            port: port,
            secure: isSecure,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            // Force IPv4 lookup to prevent ENETUNREACH on IPv6-unsupported networks
            lookup: (hostname: string, options: any, callback: any) => {
                dns.lookup(hostname, { ...options, family: 4 }, callback);
            },
        } as any);

        // Email layout config
        const mailOptions = {
            from: `"Website VinFast Hà Nội" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `🔥 Yêu cầu báo giá mới từ Khách hàng: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); background-color: #ffffff;">
                    <!-- Top header color gradient banner -->
                    <div style="background: linear-gradient(135deg, #0088FF, #0044BB); padding: 25px 20px; text-align: center; color: white;">
                        <h2 style="margin: 0; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px;">YÊU CẦU NHẬN BÁO GIÁ</h2>
                        <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9; letter-spacing: 0.5px;">Hệ thống thu thập Leads Khách hàng VinFast</p>
                    </div>
                    
                    <!-- Content Area -->
                    <div style="padding: 30px; color: #334155;">
                        <p style="font-size: 15px; margin-top: 0; color: #1e293b;">Chào bạn,</p>
                        <p style="font-size: 14px; line-height: 1.6; color: #475569;">Website vừa nhận được một yêu cầu tư vấn báo giá trực tuyến mới từ chiến dịch quảng cáo. Dưới đây là thông tin chi tiết của khách hàng đăng ký:</p>
                        
                        <!-- Specs Grid Table -->
                        <table style="width: 100%; border-collapse: collapse; margin: 25px 0; background-color: #f8fafc; border-radius: 8px; overflow: hidden;">
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 14px 16px; font-weight: bold; color: #64748b; width: 35%; font-size: 13px; text-transform: uppercase; tracking-wider">Khách hàng:</td>
                                <td style="padding: 14px 16px; color: #0f172a; font-weight: bold; font-size: 15px;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 14px 16px; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; tracking-wider">Số điện thoại:</td>
                                <td style="padding: 14px 16px; font-size: 16px;">
                                    <a href="tel:${phone}" style="color: #0088FF; text-decoration: none; font-weight: 800;">${phone}</a>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 14px 16px; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; tracking-wider">Dòng xe chọn:</td>
                                <td style="padding: 14px 16px; color: #ef4444; font-weight: 800; font-size: 15px;">${car}</td>
                            </tr>
                            <tr>
                                <td style="padding: 14px 16px; font-weight: bold; color: #64748b; font-size: 13px; text-transform: uppercase; tracking-wider">Thời gian:</td>
                                <td style="padding: 14px 16px; color: #64748b; font-size: 13px;">${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}</td>
                            </tr>
                        </table>
                        
                        <!-- Call To Action Button -->
                        <div style="text-align: center; margin-top: 30px; margin-bottom: 10px;">
                            <a href="tel:${phone}" style="background-color: #0088FF; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block; box-shadow: 0 4px 10px rgba(0, 136, 255, 0.25); text-transform: uppercase; letter-spacing: 0.5px; transition: background-color 0.2s;">
                                📞 Gọi Ngay Cho Khách Hàng
                                <br></br><span style="font-size: 12px;font-weight: 400;">Nhấn hoặc nhấn giữ để gọi</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Bottom Footer -->
                    <div style="background-color: #f1f5f9; padding: 18px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                        Email được tạo tự động từ hệ thống đăng ký của Website Đại lý VinFast.
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Nodemailer API error:", error);
        return NextResponse.json({ error: error.message || "Không thể gửi email!" }, { status: 500 });
    }
}
