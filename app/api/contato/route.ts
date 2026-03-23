import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, telefone, categoria, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
    }

    console.log("Novo orçamento recebido:", { nome, email, telefone, categoria, mensagem });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
