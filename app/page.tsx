import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

const categorias = [
  { nome: "Canecas", icon: "☕", descricao: "Canecas personalizadas para presente ou uso diário" },
  { nome: "Camisetas", icon: "👕", descricao: "Estampas exclusivas com sua arte ou logotipo" },
  { nome: "Relógios de Parede", icon: "🕐", descricao: "Relógios únicos, cortados e gravados a laser" },
  { nome: "Chaveiros", icon: "🔑", descricao: "Chaveiros em acrílico, MDF, ou impressão 3D" },
  { nome: "Sinalização", icon: "🪧", descricao: "Placas, totens e identificações para empresas" },
  { nome: "Brindes", icon: "🎁", descricao: "Brindes corporativos e presentes personalizados" },
  { nome: "Miniaturas 3D", icon: "🖨️", descricao: "Peças únicas criadas com impressão 3D" },
];

const galeria = [
  { src: "/images/produtos/produto1.jpg", alt: "Produto personalizado 1" },
  { src: "/images/produtos/produto2.jpg", alt: "Produto personalizado 2" },
  { src: "/images/produtos/produto3.jpg", alt: "Produto personalizado 3" },
  { src: "/images/produtos/produto4.jpg", alt: "Produto personalizado 4" },
  { src: "/images/produtos/produto5.jpg", alt: "Produto personalizado 5" },
  { src: "/images/produtos/produto6.jpg", alt: "Produto personalizado 6" },
  { src: "/images/produtos/produto7.jpg", alt: "Produto personalizado 7" },
  { src: "/images/produtos/produto8.jpg", alt: "Produto personalizado 8" },
  { src: "/images/produtos/produto9.jpg", alt: "Produto personalizado 9" },
  { src: "/images/produtos/produto10.jpg", alt: "Produto personalizado 10" },
  { src: "/images/produtos/chaveiros.png", alt: "Chaveiros personalizados" },
  { src: "/images/produtos/cantil.jpg", alt: "Cantil personalizado" },
  { src: "/images/produtos/chopp.png", alt: "Copo de chopp personalizado" },
  { src: "/images/produtos/garrafa.png", alt: "Garrafa personalizada" },
  { src: "/images/produtos/caixa-pascoa.png", alt: "Caixa de Páscoa personalizada" },
];

const diferenciais = [
  { titulo: "Impressão 3D", descricao: "Criamos peças únicas camada por camada com alta precisão.", icon: "🖨️" },
  { titulo: "Gravação a Laser", descricao: "Gravação e corte a laser em madeira, acrílico, couro e mais.", icon: "⚡" },
  { titulo: "Sublimação", descricao: "Cores vibrantes e duráveis em tecidos e superfícies rígidas.", icon: "🎨" },
];

export default function Home() {
  return (
    <>
      <section id="inicio" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, var(--primary) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p style={{ color: "var(--primary)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em" }} className="uppercase mb-3">
              Personalização sob medida
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformamos suas
              <span style={{ color: "var(--primary)" }}> ideias</span> em
              <span style={{ color: "var(--primary)" }}> produtos</span> únicos
            </h1>
            <p style={{ color: "#aaa" }} className="text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Impressão 3D, gravação a laser e sublimação para criar o presente perfeito ou a identidade visual da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="#galeria"
                style={{ background: "var(--primary)", color: "#0f0f0f" }}
                className="px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity text-center"
              >
                Ver Produtos
              </Link>
              <Link
                href="#orcamento"
                style={{ border: "1px solid var(--primary)", color: "var(--primary)" }}
                className="px-6 py-3 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity text-center"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div
              className="rounded-3xl overflow-hidden flex items-center justify-center p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", width: 260, height: 260 }}
            >
              <Image src="/images/logo.png" alt="" width={200} height={200} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {diferenciais.map((d) => (
            <div key={d.titulo} className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <span className="text-3xl">{d.icon}</span>
              <div>
                <h3 className="font-bold text-base mb-1">{d.titulo}</h3>
                <p style={{ color: "#888" }} className="text-sm">{d.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="categorias" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Nossas <span style={{ color: "var(--primary)" }}>Categorias</span>
            </h2>
            <p style={{ color: "#888" }} className="text-sm">Clique em uma categoria para solicitar o seu produto personalizado</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorias.map((cat) => (
              <Link
                key={cat.nome}
                href="#orcamento"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center hover:scale-105 transition-transform"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="font-semibold text-sm">{cat.nome}</span>
                <span style={{ color: "#777" }} className="text-xs leading-relaxed">{cat.descricao}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Nossa <span style={{ color: "var(--primary)" }}>Galeria</span>
            </h2>
            <p style={{ color: "#888" }} className="text-sm">Alguns dos produtos que já personalizamos</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {galeria.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group"
                style={{ background: "var(--surface-2)" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
