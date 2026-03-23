"use client";
import { useState } from "react";

const categorias = [
  "Canecas",
  "Camisetas",
  "Relógios de Parede",
  "Chaveiros",
  "Sinalização",
  "Brindes",
  "Miniaturas 3D",
  "Outro",
];

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", categoria: "", mensagem: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", email: "", telefone: "", categoria: "", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "8px",
    padding: "10px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <section id="orcamento" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Solicite um <span style={{ color: "var(--primary)" }}>Orçamento</span>
          </h2>
          <p style={{ color: "#888" }} className="text-sm">
            Preencha o formulário e entraremos em contato para criar o produto perfeito para você.
          </p>
        </div>

        {status === "success" ? (
          <div style={{ background: "var(--surface-2)", border: "1px solid var(--primary)", borderRadius: "12px" }} className="p-8 text-center">
            <div style={{ color: "var(--primary)" }} className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Mensagem enviada!</h3>
            <p style={{ color: "#aaa" }} className="text-sm">Entraremos em contato em breve com seu orçamento personalizado.</p>
            <button
              onClick={() => setStatus("idle")}
              style={{ background: "var(--primary)", color: "#0f0f0f" }}
              className="mt-6 px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Enviar outro
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px" }}
            className="p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label style={{ color: "#aaa", fontSize: "12px" }}>Nome *</label>
                <input style={inputStyle} name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" />
              </div>
              <div className="flex flex-col gap-1">
                <label style={{ color: "#aaa", fontSize: "12px" }}>Telefone / WhatsApp</label>
                <input style={inputStyle} name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: "#aaa", fontSize: "12px" }}>E-mail *</label>
              <input style={inputStyle} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" />
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: "#aaa", fontSize: "12px" }}>Categoria do produto</label>
              <select style={inputStyle} name="categoria" value={form.categoria} onChange={handleChange}>
                <option value="">Selecione uma categoria</option>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label style={{ color: "#aaa", fontSize: "12px" }}>Mensagem *</label>
              <textarea
                style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
                placeholder="Descreva o que você precisa, quantidade, personalização desejada..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ background: "var(--primary)", color: "#0f0f0f" }}
              className="mt-2 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar Solicitação"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
