import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Bot,
  MenuIcon,
  CreditCard,
  Users,
  ChefHat,
  MessageCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  Heart,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IAMenuLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">IA Menu</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
              Como Funciona
            </Link>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  🤖 Assistente IA direto no WhatsApp
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Peça pelo{" "}
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mr-4">
                    WhatsApp
                  </span>
                  com IA
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Converse com nosso assitente inteligente direto no WhatsApp do restaurante. Tire dúvidas sobre o
                  cardápio, receba recomendações personalizadas e faça seu pedido, tudo sem baixar apps ou criar
                  contas.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Respostas rápidas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Sem cadastros</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Direto no WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/placeholder.jpg?height=600&width=400"
                alt="Interface do WhatsApp com IA Menu"
                width={400}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Funcionalidades
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tudo no WhatsApp que você já usa</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Nosso assistente de IA funciona direto no WhatsApp do restaurante. Nada de baixar apps ou criar contas, use o
              que você já tem no celular.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Direto no WhatsApp</CardTitle>
                <CardDescription>
                  Converse com a IA usando o WhatsApp do restaurante. Sem apps para baixar, sem cadastros complicados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <MenuIcon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Entende Todo o Cardápio</CardTitle>
                <CardDescription>
                  IA que conhece cada prato, ingrediente e preparo. Pergunte qualquer coisa sobre o menu e receba
                  respostas detalhadas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <ChefHat className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Recomendações Inteligentes</CardTitle>
                <CardDescription>
                  Receba sugestões personalizadas baseadas no seu gosto, restrições alimentares e combinações perfeitas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Pedido Instantâneo</CardTitle>
                <CardDescription>
                  Faça seu pedido e pague tudo na mesma conversa. Rápido, seguro e sem complicações.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Como Funciona
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simples como mandar uma mensagem</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Três passos simples no WhatsApp do restaurante. Sem complicação e sem cadastros.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Abra o WhatsApp</h3>
              <p className="text-muted-foreground">
                Mande uma mensagem para o WhatsApp do restaurante. Nossa IA responde na hora e te ajuda com o cardápio.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-md max-w-sm mx-auto">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Restaurante Bella Vista</span>
                </div>
                <div className="bg-gray-100 rounded-lg py-2 px-4 text-sm text-start">
                  "Olá! Sou o assistente IA do restaurante. Como posso te ajudar hoje?"
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Converse & Descubra</h3>
              <p className="text-muted-foreground">
                Pergunte sobre pratos, ingredientes ou peça recomendações. A IA conhece tudo e sugere o melhor para
                você.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-md max-w-sm mx-auto">
                <div className="space-y-2 text-sm">
                  <div className="bg-green-900 text-white rounded-lg py-2 px-4 ml-10 text-start">
                    "Tenho alergia a camarão. O que vocês recomendam?"
                  </div>
                  <div className="bg-gray-100 rounded-lg py-2 px-4 mr-10 text-start">
                    "Perfeito! Recomendo nosso salmão grelhado com risotto de limão siciliano. É seguro para você e
                    combina perfeitamente com um vinho branco."
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Peça & Pague</h3>
              <p className="text-muted-foreground">
                Confirme seu pedido e pague tudo na mesma conversa. Seguro, rápido e sem sair do WhatsApp.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-md max-w-sm mx-auto">
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-100 rounded-lg py-2 px-4 mr-8 text-start">
                    "Pedido confirmado! Total: R$ 45,90. Clique aqui para pagar com PIX ou cartão."
                  </div>
                  <div className="bg-green-100 rounded-lg p-2 text-center">
                    <CreditCard className="w-4 h-4 mx-auto mb-1" />
                    "Pagamento Seguro"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  Para Você
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">Peça sem complicação</h2>
                <p className="text-xl text-muted-foreground">
                  Esqueça apps complicados e cadastros demorados. Use o WhatsApp que você já tem e peça com a ajuda da
                  IA.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">Sem Apps para Baixar</h3>
                    <p className="text-muted-foreground">
                      Use o WhatsApp que você já tem. Nada de ocupar espaço no celular com mais um app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">Recomendações Personalizadas</h3>
                    <p className="text-muted-foreground">
                      A IA aprende suas preferências e sempre sugere pratos que você vai amar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">Rápido como uma Mensagem</h3>
                    <p className="text-muted-foreground">
                      Tire dúvidas, faça pedidos e pague em segundos. Tudo na velocidade do WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                  Para Restaurantes
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">Venda mais, trabalhe menos</h2>
                <p className="text-xl text-muted-foreground">
                  Atenda clientes direto pelo WhatsApp, aumente o ticket médio e reduza a carga da sua equipe.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">Aumente o Faturamento</h3>
                    <p className="text-muted-foreground">
                      IA que sugere acompanhamentos e bebidas aumenta o ticket médio em até 35%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">WhatsApp Business</h3>
                    <p className="text-muted-foreground">
                      Integração total com seu WhatsApp Business. Clientes já conhecem e confiam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="w-11/12">
                    <h3 className="font-semibold">Atendimento rápido</h3>
                    <p className="text-muted-foreground">
                      IA responde rapidamente tirando dúvidas básicas e liberando sua equipe para focar no que mais importa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pronto para revolucionar seus pedidos?</h2>
            <p className="text-xl text-muted-foreground">
              Junte-se a nós e venha vender mais pelo WhatsApp com a ajuda da nossa IA. Seus clientes vão amar a praticidade!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                  <span>Respostas rápidas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                  <span>Sem cadastros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                  <span>Direto no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">IA Menu</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Assistente de IA que funciona direto no WhatsApp do restaurante. Tire dúvidas sobre o cardápio e faça seu pedido. Sem complicação, só praticidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    Como Funciona
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IA Menu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
