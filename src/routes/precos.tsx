import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, CheckCircle2, ArrowRight, MapPin, Clock, ArrowLeft } from "lucide-react";
import cursoChantilly from "../../public/images/curso-chantilly.jpg";
import cursoPastaAmericana from "../../public/images/curso-pasta-americana.jpg";
import cursoAndares from "../../public/images/curso-andares.jpg";
import cursoArtistico from "../../public/images/curso-artistico.jpg";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Tabela de Preços | Pablo Bolos Decorados" },
      {
        name: "description",
        content:
          "Conheça os cursos presenciais Pablo Bolos Decorados: chantilly a partir de R$ 399,00, pasta americana, bolos de andares e bolos artísticos. Aulas práticas em Belford Roxo.",
      },
      { property: "og:title", content: "Tabela de Preços | Pablo Bolos Decorados" },
      {
        property: "og:description",
        content:
          "Cursos presenciais de decoração de bolos em Belford Roxo a partir de R$ 399,00. Vagas limitadas!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrecosPage,
});

const whatsappNumber = "552166787998";
const phoneDisplay = "(21) 6678-7998";

const cursos = [
  {
    nome: "Bolos Decorados com Chantilly",
    preco: "R$ 399,00",
    imagem: cursoChantilly,
    alt: "Bolo decorado com chantilly e frutas vermelhas",
    destaque: true,
    itens: [
      "Cobertura lisa e perfeita com chantininho",
      "Rosetas, babados e bicos de confeitar",
      "Ideal para iniciantes",
    ],
  },
  {
    nome: "Bolos com Pasta Americana",
    preco: "R$ 499,00",
    imagem: cursoPastaAmericana,
    alt: "Bolo coberto com pasta americana rosa e flores de açúcar",
    itens: [
      "Cobertura lisa com pasta americana",
      "Modelagem de flores e laços de açúcar",
      "Acabamento profissional para festas",
    ],
  },
  {
    nome: "Bolos de Andares",
    preco: "R$ 599,00",
    imagem: cursoAndares,
    alt: "Bolo de três andares com flores naturais",
    itens: [
      "Montagem estruturada e estável",
      "Técnicas para casamentos e eventos",
      "Transporte e finalização no local",
    ],
  },
  {
    nome: "Bolos Artísticos",
    preco: "R$ 699,00",
    imagem: cursoArtistico,
    alt: "Bolo artístico pintado à mão com buttercream colorido",
    itens: [
      "Pintura à mão e espátula (palette knife)",
      "Escultura e design autoral",
      "Portfólio para cobrar mais caro",
    ],
  },
];

function whatsappLinkPara(curso: string, preco: string) {
  const msg = encodeURIComponent(
    `Olá! Quero me inscrever no curso "${curso}" (${preco}) do Pablo Bolos Decorados.`
  );
  return `https://wa.me/${whatsappNumber}?text=${msg}`;
}

function PrecosPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <Cake className="size-6 shrink-0 text-primary" />
            <span className="truncate text-lg font-bold text-foreground sm:text-xl">
              Pablo Bolos Decorados
            </span>
          </Link>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 text-sm font-bold text-primary hover:bg-primary/10"
          >
            <Link to="/">
              <ArrowLeft className="mr-1 size-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl">
            TABELA DE <span className="text-primary">PREÇOS</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Escolha o curso ideal para o seu momento. Todos presenciais, práticos e com diploma
            profissional incluso.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" /> Aulas de 3 horas, Seg a Sex, 8h às 17h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" /> Rua Jorge Julio Costa dos Santos — Belford
              Roxo
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 [&>*]:min-w-0">
            {cursos.map((curso) => (
              <Card
                key={curso.nome}
                className={`overflow-hidden bg-card shadow-glow-card transition-all hover:-translate-y-1 ${
                  curso.destaque
                    ? "border-primary/50 ring-1 ring-primary/30"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={curso.imagem}
                    alt={curso.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  {curso.destaque && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-glow-primary">
                      Mais procurado
                    </span>
                  )}
                </div>
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2 className="text-xl font-black leading-tight text-card-foreground">
                      {curso.nome}
                    </h2>
                    <p className="text-3xl font-black leading-none text-primary">{curso.preco}</p>
                  </div>
                  <ul className="space-y-2">
                    {curso.itens.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="mt-2 w-full whitespace-normal rounded-full bg-primary font-bold text-primary-foreground shadow-glow-primary transition-all hover:scale-[1.02]"
                  >
                    <a
                      href={whatsappLinkPara(curso.nome, curso.preco)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      QUERO ESTE CURSO
                      <ArrowRight className="ml-2 size-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ficou com dúvida sobre qual curso escolher? Fale comigo no WhatsApp:{" "}
              <a
                href={whatsappLinkPara("uma dúvida sobre os cursos", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-sm font-semibold text-destructive">
              Vagas limitadas por turma!
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/30 py-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pablo Bolos Decorados. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
