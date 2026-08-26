import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  BookOpen,
  Star,
  Users,
  Cake,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import heroCake from "../../public/images/hero-cake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pablo Bolos Decorados | Curso Presencial - Apenas R$ 1,99" },
      {
        name: "description",
        content:
          "Aprenda a decorar bolos no curso presencial Pablo Bolos Decorados. 3 horas de aula prática em Belford Roxo. Vagas limitadas por apenas R$ 1,99.",
      },
      { property: "og:title", content: "Pablo Bolos Decorados | Curso Presencial - Apenas R$ 1,99" },
      {
        property: "og:description",
        content:
          "Aprenda a decorar bolos e transforme sua paixão em renda. Curso presencial prático em Belford Roxo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--d2fff2dc-0076-4f4b-b3d8-4b9979b0c1d2.lovable.app/images/hero-cake.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--d2fff2dc-0076-4f4b-b3d8-4b9979b0c1d2.lovable.app/images/hero-cake.jpg" },
    ],
  }),
  component: Index,
});

const whatsappNumber = "5521999999999";
const whatsappMessage = encodeURIComponent(
  "Olá! Quero garantir minha vaga no curso Pablo Bolos Decorados por R$ 1,99."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function scrollToInscricao() {
  const element = document.getElementById("inscricao");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function PriceTag({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl md:text-7xl",
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Investimento
      </span>
      <span
        className={`font-black leading-none tracking-tight text-primary ${sizeClasses[size]}`}
      >
        R$ 1,99
      </span>
    </div>
  );
}

function CtaButton({
  children,
  size = "lg",
  className,
}: {
  children: React.ReactNode;
  size?: "default" | "lg" | "xl";
  className?: string;
}) {
  const sizeClasses = {
    default: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg md:text-xl",
    xl: "h-16 px-10 text-xl md:text-2xl",
  };

  return (
    <Button
      asChild
      size="lg"
      className={`group relative overflow-hidden rounded-full bg-primary font-bold text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-primary/80 active:scale-[0.98] ${sizeClasses[size]} ${className || ""}`}
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Cake className="size-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Pablo Bolos Decorados</span>
        </div>
        <Button
          onClick={scrollToInscricao}
          className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow-primary transition-all hover:scale-[1.02] hover:bg-primary/90 sm:px-6"
        >
          Quero Me Inscrever
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.929_0.013_255.508/0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="size-4" />
              Curso Presencial Prático
            </div>

            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              APRENDA A DECORAR BOLOS E TRANSFORME SUA{" "}
              <span className="text-primary">PAIXÃO EM RENDA</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Curso Presencial Prático — Para iniciantes e quem quer profissionalizar
            </p>

            <div className="mt-8">
              <PriceTag size="xl" />
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <CtaButton size="xl">GARANTIR MINHA VAGA AGORA</CtaButton>
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-destructive lg:justify-start">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-destructive" />
              </span>
              Vagas limitadas!
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-glow-card ring-1 ring-border/50">
              <img
                src={heroCake}
                alt="Bolo decorado com flores de buttercream em fundo escuro"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-border/50 bg-card p-4 shadow-glow-card md:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="size-6 fill-primary text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avaliação das alunas</p>
                  <p className="text-lg font-bold text-card-foreground">4.9/5 estrelas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnSection() {
  const items = [
    "Cobertura perfeita com chantininho e buttercream",
    "Técnicas de bico de confeitar: rosetas, babados e flores",
    "Decoração com pasta americana e topper artesanal",
    "Coloração correta dos cremes e massas",
    "Montagem de bolo de andar simples e estável",
    "Dicas para vender seus bolos e faturar desde o primeiro mês",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
            O QUE VOCÊ VAI APRENDER
          </h2>
          <p className="mt-3 text-muted-foreground">
            Conteúdo prático para você sair decorando já na primeira aula
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle2 className="size-5 text-primary" />
                </div>
                <p className="text-base font-medium leading-relaxed text-card-foreground">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  const infos = [
    {
      icon: BookOpen,
      label: "Nome do curso",
      value: "Pablo Bolos Decorados",
    },
    {
      icon: Clock,
      label: "Carga horária",
      value: "3 horas",
    },
    {
      icon: Calendar,
      label: "Dias e horários",
      value: "Segunda a Sexta, das 8h às 17h",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Jorge Julio Costa dos Santos — Belford Roxo",
    },
  ];

  return (
    <section className="border-y border-border/30 bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
            INFORMAÇÕES DO CURSO
          </h2>
          <p className="mt-3 text-muted-foreground">Tudo pronto para você começar imediatamente</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infos.map((info, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 bg-card text-center shadow-glow-card"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <info.icon className="size-7 text-primary" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {info.label}
                </p>
                <p className="mt-2 text-lg font-bold leading-tight text-card-foreground">
                  {info.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-primary/20 bg-primary/5 text-center shadow-glow-primary">
          <CardContent className="flex flex-col items-center gap-4 p-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Valor do curso
              </p>
              <p className="text-4xl font-black text-primary md:text-5xl">R$ 1,99</p>
            </div>
            <CtaButton size="lg">QUERO FAZER O CURSO AGORA</CtaButton>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    {
      title: "Iniciantes",
      description: "Nunca decorou um bolo? Aqui você aprende do zero com passo a passo simples.",
    },
    {
      title: "Donas de casa",
      description: "Quer fazer bolos lindos para a família ou começar a vender para vizinhos.",
    },
    {
      title: "Quer renda extra",
      description: "Aprenda uma habilidade valiosa que pode virar uma fonte de renda rápida.",
    },
    {
      title: "Confeiteiras",
      description: "Quer profissionalizar suas técnicas e cobrar mais caro pelos seus bolos.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
            PARA QUEM É ESTE CURSO
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="size-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{audience.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Clara",
      role: "Aluna de março",
      text: "Nunca imaginei que em menos de 1 mês já estaria vendendo meus primeiros bolos. O curso é muito prático e o Pablo explica super bem!",
      result: "Já faturei R$ 800",
    },
    {
      name: "Mariana Souza",
      role: "Aluna de abril",
      text: "Paguei apenas R$ 1,99 e aprendi técnicas que mudaram minha confeitaria. Hoje já tenho encomendas toda semana.",
      result: "Renda extra toda semana",
    },
    {
      name: "Juliana Mendes",
      role: "Aluna de maio",
      text: "A aula é 100% prática, saí de lá com um bolo lindo nas mãos e muita confiança para começar a vender.",
      result: "Primeira venda em 10 dias",
    },
  ];

  return (
    <section className="border-y border-border/30 bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
            O QUE AS ALUNAS DIZEM
          </h2>
          <p className="mt-3 text-muted-foreground">Resultados reais de quem já fez o curso</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-border/50 bg-card shadow-glow-card"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-card-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 rounded-lg bg-primary/10 p-3 text-center">
                  <p className="text-sm font-bold text-primary">{testimonial.result}</p>
                </div>
                <div className="mt-4 border-t border-border/50 pt-4">
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="inscricao" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.929_0.013_255.508/0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          NÃO PERCA ESSA OPORTUNIDADE
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Vagas limitadas por turma — Aprendizado prático e garantido
        </p>

        <div className="mt-8">
          <PriceTag size="lg" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton size="xl">QUERO FAZER O CURSO AGORA</CtaButton>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-destructive">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-destructive" />
          </span>
          Últimas vagas disponíveis!
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <Cake className="size-5 text-primary" />
          <span className="text-lg font-bold text-foreground">Pablo Bolos Decorados</span>
        </div>
        <p className="mt-3 text-3xl font-black text-primary">R$ 1,99</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Rua Jorge Julio Costa dos Santos — Belford Roxo
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pablo Bolos Decorados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <LearnSection />
        <InfoSection />
        <AudienceSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
