import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { nome, email, telefone, categoria, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Mandavê Site <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      reply_to: email,
      subject: `Novo orçamento: ${categoria || "Produto"} — ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #e8a217; margin-bottom: 4px;">Nova solicitação de orçamento</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">Recebida pelo site Mandavê Personalizados</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <table style="width: 100%; font-size: 14px; color: #333;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 130px;">Nome</td><td>${nome}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">E-mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Telefone</td><td>${telefone || "Não informado"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Categoria</td><td>${categoria || "Não informada"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <p style="font-size: 14px; font-weight: bold; color: #333; margin-bottom: 6px;">Mensagem:</p>
          <p style="font-size: 14px; color: #555; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">${mensagem.replace(/\n/g, "<br/>")}</p>
          <p style="font-size: 12px; color: #aaa; margin-top: 20px;">Responda diretamente para este e-mail — o reply-to já está configurado para ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
