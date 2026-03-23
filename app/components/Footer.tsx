import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }} className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Mandavê Personalizados" width={44} height={44} className="object-contain" />
              <span style={{ color: "var(--primary)" }} className="font-bold text-base">Mandavê Personalizados</span>
            </div>
            <p style={{ color: "#888" }} className="text-sm leading-relaxed">
              Personalizamos os seus momentos com qualidade e criatividade. Impressão 3D, gravação a laser, sublimação e muito mais.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 style={{ color: "var(--primary)" }} className="font-semibold text-sm uppercase tracking-wider">Navegação</h3>
            {[
              { label: "Início", href: "#inicio" },
              { label: "Categorias", href: "#categorias" },
              { label: "Galeria", href: "#galeria" },
              { label: "Solicitar Orçamento", href: "#orcamento" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ color: "#aaa" }} className="text-sm hover:opacity-70 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 style={{ color: "var(--primary)" }} className="font-semibold text-sm uppercase tracking-wider">Contato</h3>
            <p style={{ color: "#aaa" }} className="text-sm">Entre em contato para solicitar um orçamento personalizado.</p>
            <Link
              href="#orcamento"
              style={{ background: "var(--primary)", color: "#0f0f0f" }}
              className="mt-2 inline-block px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity w-fit"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", color: "#555" }} className="mt-10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Mandavê Personalizados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
