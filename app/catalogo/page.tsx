"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { modelos, produtos, temas } from "../data/modelos";

export default function CatalogoPage() {
  const [produtoAtivo, setProdutoAtivo] = useState("Todos");
  const [temaAtivo, setTemaAtivo] = useState("Todos");
  const [modeloSelecionado, setModeloSelecionado] = useState<string | null>(null);

  const filtrados = modelos.filter((m) => {
    const porProduto = produtoAtivo === "Todos" || m.produto === produtoAtivo;
    const porTema = temaAtivo === "Todos" || m.tema === temaAtivo;
    return porProduto && porTema;
  });

  const filterBtn = (ativo: boolean) => ({
    background: ativo ? "var(--primary)" : "var(--surface-2)",
    color: ativo ? "#0f0f0f" : "var(--foreground)",
    border: `1px solid ${ativo ? "var(--primary)" : "var(--border)"}`,
    borderRadius: "999px",
    padding: "6px 16px",
    fontSize: "13px",
    fontWeight: ativo ? "700" : "500",
    cursor: "pointer",
    transition: "all 0.15s",
  } as React.CSSProperties);

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-10">
          <Link href="/" style={{ color: "var(--primary)", fontSize: "13px" }} className="hover:opacity-70 transition-opacity">
            ← Voltar ao início
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2" style={{ color: "var(--foreground)" }}>
            Catálogo de <span style={{ color: "var(--primary)" }}>Modelos</span>
          </h1>
          <p style={{ color: "#888" }} className="text-sm">
            Escolha um modelo e solicite seu orçamento com ele já selecionado.
          </p>
        </div>

        <div className="mb-6">
          <p style={{ color: "#aaa", fontSize: "12px", marginBottom: "8px" }}>PRODUTO</p>
          <div className="flex flex-wrap gap-2">
            {produtos.map((p) => (
              <button key={p} style={filterBtn(produtoAtivo === p)} onClick={() => setProdutoAtivo(p)}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p style={{ color: "#aaa", fontSize: "12px", marginBottom: "8px" }}>TEMA</p>
          <div className="flex flex-wrap gap-2">
            {temas.map((t) => (
              <button key={t} style={filterBtn(temaAtivo === t)} onClick={() => setTemaAtivo(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtrados.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px" }}
          >
            <span style={{ fontSize: "48px" }}>🖼️</span>
            <p className="mt-4 font-semibold" style={{ color: "var(--foreground)" }}>
              Modelos em breve
            </p>
            <p style={{ color: "#888", fontSize: "13px" }} className="mt-1 max-w-xs">
              Estamos organizando as artes. Em breve você poderá visualizar e escolher os modelos disponíveis.
            </p>
            <Link
              href="/#orcamento"
              style={{ background: "var(--primary)", color: "#0f0f0f" }}
              className="mt-6 px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtrados.map((modelo) => {
              const selecionado = modeloSelecionado === modelo.id;
              return (
                <div
                  key={modelo.id}
                  onClick={() => setModeloSelecionado(selecionado ? null : modelo.id)}
                  style={{
                    background: "var(--surface)",
                    border: `2px solid ${selecionado ? "var(--primary)" : "var(--border)"}`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.15s",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
                    <Image
                      src={modelo.imagem}
                      alt={modelo.nome}
                      fill
                      className="object-cover"
                    />
                    {selecionado && (
                      <div
                        style={{ position: "absolute", top: 8, right: 8, background: "var(--primary)", color: "#0f0f0f", borderRadius: "999px", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "bold" }}
                      >
                        ✓
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "10px 12px" }}>
                    <p style={{ fontSize: "13px", fontWeight: "600", color: "var(--foreground)" }}>{modelo.nome}</p>
                    <p style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>{modelo.produto} · {modelo.tema}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {modeloSelecionado && (
          <div
            style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "var(--surface)", border: "1px solid var(--primary)", borderRadius: "16px", padding: "14px 24px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", zIndex: 100 }}
          >
            <span style={{ color: "var(--foreground)", fontSize: "13px" }}>
              Modelo selecionado ✓
            </span>
            <Link
              href={`/#orcamento?modelo=${encodeURIComponent(modeloSelecionado)}`}
              style={{ background: "var(--primary)", color: "#0f0f0f" }}
              className="px-5 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Solicitar este modelo
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
