Prompt Manager | Clean Architecture & Full Testing
O Prompt Manager é um projeto de aprendizagem focado em Arquitetura de Software e Testes, desenvolvido com foco em alta qualidade de código, seguindo os princípios de Clean Architecture, SOLID e uma cultura rigorosa de automação de testes.

🛠️ Stack Tecnológica
Framework: Next.js 15 (App Router & Server Actions)
Linguagem: TypeScript
Persistência: PostgreSQL & Prisma ORM
UI/UX: Tailwind CSS & Shadcn/UI
Testes: Jest, React Testing Library e Playwright
Padronização: ESLint, Prettier e Lefthook (Git Hooks)

🏗️ Arquitetura e Design de Software
A aplicação foi estruturada para ser independente de frameworks e ferramentas externas na sua camada central.

Principais Padrões Utilizados:

Clean Architecture: Separação clara entre Domínio, Casos de Uso e Infraestrutura.
Repository Pattern: Desacoplamento da camada de dados.
Use Cases (Interactors): Lógica de negócio isolada e testável.
DTOs (Data Transfer Objects): Tipagem rigorosa para entrada e saída de dados.

📂 Estrutura de Pastas

src/
├── app/                  # Camada de Framework (Rotas e Server Components)
│   ├── actions/          # Server Actions (Orquestração entre UI e Use Cases)
│   └── [id]/             # Rotas dinâmicas da aplicação
├── core/                 # Camada de Domínio (O coração da aplicação - Independente)
│   ├── application/      # Casos de Uso (Create, Update, Delete, Search)
│   └── domain/           # Entidades e Interfaces (Contracts)
├── infra/                # Camada de Infraestrutura (Implementações externas)
│   └── repository/       # Implementação do Repositório com Prisma ORM
├── components/           # Camada de Apresentação (UI Reutilizável)
│   ├── prompts/          # Componentes de negócio (Formulários, Listas)
│   └── ui/               # Componentes base (Shadcn/UI/Sonner)
├── tests/                # Suíte de Testes Unitários e de Integração (Jest)
└── lib/                  # Configurações globais e utilitários (Prisma Client, etc)

Qualidade e Cobertura de Testes
Este projeto foi desenvolvido com foco em TDD (Test Driven Development), alcançando a marca de 100% de cobertura nas camadas lógicas.

📊 Relatório de Coverage (Jest)

Camada	Stmts	Branch	Funcs	Lines
Use Cases (Core)	100%	100%	100%	100%
Actions	100%	100%	100%	100%
Repositories	100%	100%	100%	100%

Tipos de Testes Implementados:
Unitários: Validação isolada de Use Cases e Entidades.
Integração: Testes de Repositórios Prisma e Server Actions.
E2E (End-to-End): Fluxos completos simulados no Chromium, Firefox e Webkit via Playwright.

