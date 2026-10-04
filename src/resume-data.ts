export type Skill = {
  name: string;
  level: "S" | "A" | "B" | "C";
  years: string;
  category: "language" | "frontend" | "backend" | "database" | "cloud" | "devops";
  note: string;
  current?: boolean;
  priority: number;
};

export type Experience = {
  no: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  achievements: Achievement[];
  technologies: string[];
  featured?: boolean;
};

export type Achievement =
  | string
  | {
      summary: string;
      details: string[];
    };

export type CareerEntry = {
  period: string;
  organization: string;
  description: string;
};

export const resume = {
  updatedAt: "2026-10",
  person: {
    nameJa: "竹内 陽祐",
    nameEn: "Takeuchi Yosuke",
    location: "東京都",
    github: "yosuke0517",
    title: "TypeScript / React / Next.js を軸に、FE/BE一貫開発と開発体験改善を進めるWebエンジニア"
  },
  highlights: [
    "直近案件ではFEリードとして、作業者に依存しないコード品質を担保するための規約・自動化整備と、テスティングトロフィーを意識したカバレッジ拡充を推進。",
    "直近はモノレポ構成でFE/BE一貫開発。DB設計、バックエンド開発、フロントエンド実装まで担当。",
    "TypeScript、React / Next.js、Vue / Nuxt.js を用いたSPA・業務Webアプリ開発が主領域。",
    "UI/UX仮説、プロトタイプ、ABテストを通じた改善と、パフォーマンス課題の解決を得意とする。",
    "Biome、ESLint、cspell、Git Hooks、LLM向けルール整備により、品質と開発速度を両立。",
    "Clean Architecture / DDD-lite を現場規模に合わせて調整し、変更に強い設計へ落とし込む。"
  ],
  strengths: [
    {
      title: "TypeScriptを軸とした課題解決",
      body: "技術情報の収集から技術的意思決定、設計、開発、保守までを通して行う。抽象的なビジネス課題を具体的な技術施策へ分解し、実装まで推進する。"
    },
    {
      title: "開発体験とチーム文化の改善",
      body: "自動フォーマット、import整理、typo検知、レビュー観点の整備など、チーム全体の品質を上げる仕組みを導入する。"
    },
    {
      title: "変更に強く保守しやすい設計",
      body: "単一責任、疎結合、ドメイン語彙に基づく命名を重視し、将来の仕様変更に耐えやすい構造を作る。"
    },
    {
      title: "AI活用を前提にした品質管理",
      body: "LLMの出力を鵜呑みにせず、Claude Hooksなどの物理的な制約でプロジェクト固有ルールを強制する。"
    }
  ],
  skills: [
    { name: "TypeScript", level: "A", years: "6年", category: "language", note: "現在業務で最も使用。strictな型設定、型推論を活かしたAPI/フォーム/スキーマ設計、ランタイムバリデーションとの接続が可能。", current: true, priority: 1 },
    { name: "Next.js", level: "A", years: "4年", category: "frontend", note: "App Router、Server Components、Server Actions、oRPCを使ったフルスタック開発経験。", current: true, priority: 2 },
    { name: "React", level: "A", years: "4年", category: "frontend", note: "グロース開発、Redux、Hooksの利用経験。", current: true, priority: 3 },
    { name: "Go", level: "B", years: "2年", category: "language", note: "直近案件でAPI設計・実装、GraphQL、goroutineを活用。", current: true, priority: 4 },
    { name: "Docker", level: "A", years: "3年", category: "devops", note: "開発環境構築で日常的に使用。", current: true, priority: 5 },
    { name: "JavaScript", level: "A", years: "6年", category: "language", note: "フロントエンド、Node.jsでのバックエンド開発で使用。", priority: 10 },
    { name: "HTML/CSS(SCSS)", level: "A", years: "6年", category: "frontend", note: "BEM、FLOCSSでの設計経験。Tailwind CSSも利用。", priority: 11 },
    { name: "Nuxt.js", level: "A", years: "5年", category: "frontend", note: "Nuxt 2/3、Vuex、Pinia。複数の新規・グロース案件で経験。", priority: 12 },
    { name: "Vue.js", level: "A", years: "5年", category: "frontend", note: "最も経験豊富なフレームワークの一つ。", priority: 13 },
    { name: "Hono.js", level: "B", years: "2年", category: "backend", note: "型安全なAPIルーティングとミドルウェア設計。", current: true, priority: 14 },
    { name: "Express", level: "B", years: "2年", category: "backend", note: "Node.jsでのAPI開発、WebSocket実装経験。", priority: 15 },
    { name: "Ruby on Rails", level: "B", years: "2年", category: "backend", note: "API開発、Cognito認証フロー実装で利用。", priority: 16 },
    { name: "MySQL", level: "B", years: "3年", category: "database", note: "インデックス設定やクエリ改善の経験。", current: true, priority: 17 },
    { name: "Firestore", level: "B", years: "2年", category: "database", note: "NoSQL設計、リアルタイム更新機能で利用。", priority: 18 },
    { name: "AWS", level: "B", years: "2年", category: "cloud", note: "Cognito、ALB、S3、CloudFront、Lambda、Route 53、SESの利用経験。", current: true, priority: 19 },
    { name: "GitHub Actions", level: "B", years: "2年", category: "devops", note: "CI/CD、GitHub Pagesデプロイ、Slack通知などの運用経験。", current: true, priority: 20 }
  ] satisfies Skill[],
  education: [
    {
      period: "2012/04〜2017/03",
      organization: "サイバー大学 IT総合学部",
      description: "卒業"
    }
  ] satisfies CareerEntry[],
  employmentHistory: [
    {
      period: "2009/04〜2017/04",
      organization: "株式会社豊田自動織機",
      description: "機械加工部門で品質管理業務に従事（非IT職）。"
    },
    {
      period: "2017/12〜2018/12",
      organization: "株式会社日本オーエー研究所",
      description: "SESとして、東京メトロ管制管理システムやパスポート管理システムのWeb開発・保守に従事。"
    },
    {
      period: "2019/01〜2021/03",
      organization: "株式会社ROSSO",
      description: "SESとして、電通デジタル社内の予算・財務管理Webシステムを中心に開発・保守に従事。"
    }
  ] satisfies CareerEntry[],
  experiences: [
    {
      no: "14",
      title: "HR管理Webアプリ開発支援",
      period: "2026/1〜",
      role: "FEリード・BE/FE開発メンバー",
      summary: "採用関連システムのリニューアルにおいて、フロントエンド設計・開発基盤整備・バックエンド実装を支援。",
      achievements: [
        {
          summary: "FEリードとして、Next.js / Turborepoによるモノレポ構成と、共通UI、APIクライアント、認証、テスト基盤などの横断領域を設計・整備。",
          details: [
            "複数アプリで利用するUI、型定義、APIクライアント、認証処理を共通パッケージとして分離し、変更箇所と責務を明確化。",
            "Testing Libraryのユーティリティ、jest-dom、MSWのライフサイクル、Vitestのカバレッジ設定を共通パッケージへ集約し、アプリごとのテスト環境差異を抑制。",
            "未提供APIをMSWで段階的に代替できる仕組みを用意し、バックエンドのリリースを待たずにフロントエンド開発を進められる構成を整備。"
          ]
        },
        {
          summary: "作業者や利用するLLMに依存しないコード品質を目指し、実装規約・レビュー観点・エージェント実行手順を体系化。",
          details: [
            "プロジェクト構成、React / Next.js、フォーム、データ取得、UIコンポーネント、命名、TypeScript、テストなどの判断基準を文書化。",
            "編集対象に応じた規約を読み込める構成とし、Claude CodeとCodexの双方へ同じ方針が伝わるよう同期・整合性チェックを自動化。",
            "レビュー対応を検知するhookと学習スキルを整備し、再発性のある指摘を抽出して、人の承認後に規約・スキル・hookへ還元する継続改善フローを構築。",
            "PR差分を役割別に並列レビューし、重複排除や横断的な不整合確認を行うAIレビューをCIへ組み込み。"
          ]
        },
        {
          summary: "テスティングトロフィーを意識し、ユーザー操作に近い結合テストを中心としたテスト戦略とカバレッジ改善を推進。",
          details: [
            "Vitest / Testing Library / Storybook / MSWを組み合わせ、フォーム入力、バリデーション、API通信、結果表示までを一連の振る舞いとして検証。",
            "Storybookのストーリーをテストでも再利用し、表示状態の定義と自動テストの二重管理を抑制。",
            "PRごとに変更対象プロジェクトのカバレッジを計測し、ベースブランチとの差分とプロジェクト別サマリを確認できるCIを整備。",
            "pre-commitで静的解析、pre-pushで重複コードと未使用コードを検出し、レビュー前に機械的な品質問題を除去。"
          ]
        },
        {
          summary: "Go製バックエンドではDDD + Clean Architectureを採用し、依存方向と責務境界が明確な構成を実装。",
          details: [
            "domain / application / adapter / infrastructureへ責務を分離し、CQRS、Repositoryインターフェース、DIを導入。",
            "コード量とのトレードオフはあるものの、ドメインロジックを外部I/Oから分離することで、ユースケース単位のテストと変更影響範囲の把握を容易にした。"
          ]
        }
      ],
      technologies: ["Next.js", "React", "TypeScript", "Go", "Turborepo", "Vitest", "Testing Library", "Storybook", "MSW", "GitHub Actions"],
      featured: true
    },
    {
      no: "13",
      title: "在庫管理Webアプリ開発支援",
      period: "2025/8〜2025/12",
      role: "BE/FE開発メンバー",
      summary: "美容機器製造業向けの在庫・倉庫管理システム。要求、発注、納品、取引先、倉庫情報を扱う業務Webアプリケーション。",
      achievements: [
        "DDD-lite + Clean Architectureを採用。純粋なDDDをそのまま導入すると抽象化レイヤーと学習コストが大きく、小規模チームでは開発速度を落とすため、実用的なエッセンスに絞った。",
        "複雑な在庫管理ドメインに対し、納期と学習コストを踏まえて軽量DDDを採用。部品番号、トレース番号、倉庫IDなど同じ文字列に見える識別子をブランド型で区別し、型レベルで誤代入を抑止した。",
        "構成部品の自己参照・循環参照チェックなど、業務不整合が起きやすい処理をUseCase / Serviceに集約。DBアクセスはUseCase / Query単位で整理し、変更時に追いやすい構造を優先した。",
        "要求、発注、入庫、倉庫、取引先、部品、構成部品などの業務用語を型名・テーブル名・変数名に反映し、biz側との会話とコードの対応を追いやすくした。",
        "一方で、Repositoryインターフェース、リッチなAggregate Root、Value Objectのクラス化、Domain Eventsは当時の複雑度とチーム学習コストに対して重いと判断し、必要になった段階で追加できる余地を残した。",
        "AppContext / TxAppContextによるDIとトランザクション境界を設計。",
        "Next.js 15-16 App Router、Server Components、Server Actions、Conform、Zodで画面とフォームを実装。",
        "Hono.js + Drizzle ORM + neverthrowで型安全なAPIと関数型エラーハンドリングを導入。",
        "Biome、Husky、pnpm workspacesで開発体験とコード品質を整備。"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Hono.js", "Drizzle ORM", "MySQL", "AWS SES", "S3", "Biome", "Vitest"]
    },
    {
      no: "12",
      title: "レジャー施設サブスク開発支援",
      period: "2024/08〜2025/07",
      role: "フロントエンドリード・API開発",
      summary: "レジャー施設向けサブスクリプションサービスの新規開発。",
      achievements: [
        "フロントエンド技術選定、認証フロー設計、データベース設計を担当。",
        "BFF + Cookieセッション方式を採用し、HttpOnly Cookieでセッション管理。",
        "Next.js App Router、bulletproof-reactを参考にしたfeaturesベースの構成を導入。",
        "cspell、ESLintによる命名規則とimport順の自動化で保守性を向上。",
        "Ruby on RailsでAPI実装、AWS Cognitoのカスタム認証を利用した登録後即時認証を実装。"
      ],
      technologies: ["Next.js", "TypeScript", "Ruby on Rails", "AWS Cognito"]
    },
    {
      no: "11",
      title: "マッチングアプリ開発支援",
      period: "2024/04〜2024/07",
      role: "開発メンバー（フロントエンド/バックエンド）",
      summary: "既存サービスをLaravelからNext.jsへフルリプレイス。",
      achievements: ["イベント画面のDB設計からフロントエンド実装までを一貫して担当。"],
      technologies: ["Next.js Pages Router", "TypeScript", "Cloud Functions", "Firestore"]
    },
    {
      no: "10",
      title: "会計管理ソフト開発支援",
      period: "2023/03〜2024/03",
      role: "フルスタック開発メンバー",
      summary: "Nuxt 2からNuxt 3への大規模アップデートと、Go + Clean Architectureを用いたAPI開発。",
      achievements: [
        "非対応UIライブラリのコンポーネント約20種をTailwind CSSで再実装。",
        "Vue 3標準のComposition APIへ置換し、多数の破壊的変更に対応。",
        "GraphQLリゾルバー、DataLoaderによるN+1問題解決、goroutineによるバッチ高速化を実装。"
      ],
      technologies: ["Nuxt.js 3", "TypeScript", "Go", "GraphQL", "MySQL"]
    },
    {
      no: "9",
      title: "多言語ブログアプリ新規開発",
      period: "2022/03〜2022/12",
      role: "フロントエンド開発メンバー",
      summary: "インバウンド観光客向け多言語CMSの新規開発。",
      achievements: [
        "Nuxt.js 3とscript setup構文の採用を提案し、Vue 2特有の記述からの脱却を推進。",
        "状態管理にPiniaを採用。",
        "WebSocket、Operational Transformation、ShareDB、MongoDBを用いた共同編集機能の設計を主導。"
      ],
      technologies: ["Nuxt.js 3", "TypeScript", "Pinia", "PHP Laravel", "MySQL"]
    },
    {
      no: "8",
      title: "エンジニア向けダイレクトマッチングサービス開発",
      period: "2022/01〜現在",
      role: "フロントエンド開発メンバー",
      summary: "levtech-direct.jp のグロース開発およびNuxt.jsからNext.jsへのリプレイス。",
      achievements: [
        "新機能開発、パフォーマンス問題の解消、継続監視用チェックリストを作成。",
        "レビュー観点テンプレートを整備し、チームの生産性向上に貢献。"
      ],
      technologies: ["Nuxt.js", "Next.js", "React", "TypeScript", "PHP Laravel", "MySQL"]
    },
    {
      no: "7-1",
      title: "過去プロジェクト概要",
      period: "2017/12〜2021/11",
      role: "フロントエンド/バックエンド開発メンバー",
      summary: "タスク管理ツール、賃貸物件検索サイト、スマートフォン機種変更補助アプリ、予算管理アプリ、公共システム保守などを経験。",
      achievements: [
        "賃貸物件検索サイトではUI/UX改善施策により画面遷移率10%向上に貢献。",
        "Nuxt.js、Vue.js、Java、MySQL、Storybook、Jestを中心に新規開発と保守を経験。",
        "公共系SIer案件でJava、JavaScript、C#を用いた開発を経験し、見積もりとタスク管理の基礎を習得。"
      ],
      technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Node.js", "WebSocket", "MongoDB", "Java", "C#", "MySQL", "PostgreSQL", "Redis"]
    }
  ] satisfies Experience[],
  personalProjects: {
    title: "Skill Compass — エンジニア向け学習アプリ",
    url: "https://github.com/yosuke0517/skill-compass",
    summary: "実務ケースを使った学習と日々の回答・成長記録を扱う個人開発。Web画面、API、DB、外部サービス連携、デプロイ手順と品質検証を設計・実装。",
    achievements: [
      "Next.js / TypeScriptをOpenNext経由でCloudflare Workersへ配置する構成を整備。Drizzle ORM + D1で学習データを管理し、Podcast音声の保存にはR2を利用。",
      "WebとMCPから学習機能を利用できるようにし、OAuth認可コードフロー（PKCE S256）とBearer認証を実装。認証したユーザーに紐づけて学習記録を扱い、MCPに公開する操作を限定。",
      "Xの技術ニュース取得、GeminiによるPodcast台本・音声生成を統合。生成処理の状態と音声チャンクを管理し、外部APIや音声保存の処理を分離。",
      "Vitestで認証・他ユーザーの回答へのアクセス拒否・Workersの実行環境制約を検証するテストを整備。PlaywrightのE2Eと、stagingで検証したコミットを指定して本番へ反映するGitHub Actionsの手順を用意。"
    ]
  }
};
