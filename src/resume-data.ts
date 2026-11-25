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
  updatedAt: "2026-11",
  person: {
    nameJa: "竹内 陽祐",
    nameEn: "Takeuchi Yosuke",
    location: "東京都",
    github: "yosuke0517",
    title: "TypeScript / React / Next.js を軸に、FE/BE一貫開発と開発体験改善を進めるWebエンジニア"
  },
  highlights: [
    "フロントエンドの専門性：Next.js・React・TypeScriptを軸に、App RouterやServer Components、認証、共通UIなどの設計・実装から開発基盤の整備まで担当。",
    "設計と技術選定：Clean ArchitectureやDDDの考え方を踏まえつつ、保守性・納期・チームの習熟度を考慮。必要以上に複雑にせず、プロダクトに合った構成を選択。",
    "AIを活用した開発：CodexやClaude Codeを前提に、パス別に読み込む開発規約（約1.4万行）、Hooks、役割別の並列AIレビューCI、レビュー指摘を規約へ還元する自己改善ループを設計・運用。テスト計画からブラウザ実行、Figmaとのピクセル差分照合までAIで一気通貫に行うQAの仕組みも構築。",
    "継続的な学習：技術動向に加え、CS・データベース・システム設計を日々学習。技術の採用条件やトレードオフを整理し、意思決定の質を高めることを意識。"
  ],
  strengths: [
    {
      title: "TypeScriptを軸とした課題解決",
      body: "技術情報の収集から技術的意思決定、設計、開発、保守までを通して行う。抽象的なビジネス課題を具体的な技術施策へ分解し、実装まで推進する。"
    },
    {
      title: "レビューが資産として積み上がるチームづくり",
      body: "フォーマット、import整理、typo、未使用・重複コードなど機械的に判定できる指摘はhookとCIへ寄せ、人のレビューを設計判断に集中させる。さらに人のレビュー指摘から再発性のあるものをLLMで抽出・一般化し、人の承認を経て開発規約・スキル・hookへ還元する自己改善ループを導入。AIの誤指摘も記録してAIレビューへ反映し、同じ指摘が二度出ないチームを作る。"
    },
    {
      title: "変更に強く保守しやすい設計",
      body: "単一責任、疎結合、ドメイン語彙に基づく命名を重視し、将来の仕様変更に耐えやすい構造を作る。"
    },
    {
      title: "LLMの出力を検証可能にする開発設計",
      body: "LLMの出力を鵜呑みにしない前提で、①編集対象のパスに応じて必要な規約だけを読み込ませるコンテキスト制御、②守らせたい手順をHooksで強制し、スキルごとに使えるツールも絞る決定的な制約、③役割別AIレビュー・カバレッジ差分・VRT・E2Eによる多層の検証を組み合わせる。Claude CodeとCodexで同じ規約が効くよう、共通の入口と整合性チェックを設計。"
    }
  ],
  skills: [
    { name: "TypeScript", level: "A", years: "6年", category: "language", note: "現在業務で最も使用。strictな型設定、型推論を活かしたAPI/フォーム/スキーマ設計、ランタイムバリデーションとの接続が可能。", current: true, priority: 1 },
    { name: "Next.js", level: "A", years: "4年", category: "frontend", note: "App Router、Server Components、Server Actions、useOptimisticを使ったサーバー中心の設計と、フルスタック開発の経験。", current: true, priority: 2 },
    { name: "React", level: "A", years: "4年", category: "frontend", note: "グロース開発、Redux、Hooksの利用経験。", current: true, priority: 3 },
    { name: "Go", level: "B", years: "2年", category: "language", note: "直近案件でAPI設計・実装、GraphQL、goroutineを活用。", current: true, priority: 4 },
    { name: "Docker", level: "A", years: "3年", category: "devops", note: "開発環境構築で日常的に使用。", current: true, priority: 5 },
    { name: "JavaScript", level: "A", years: "6年", category: "language", note: "フロントエンド、Node.jsでのバックエンド開発で使用。", priority: 10 },
    { name: "HTML/CSS", level: "A", years: "6年", category: "frontend", note: "BEM・FLOCSSによるCSS設計（SCSS）、Tailwind CSS、CSS in JS（Emotion）でのスタイリング経験。Radix UI + Tailwind CSSで共通UIライブラリを設計。", priority: 11 },
    { name: "Nuxt.js", level: "A", years: "5年", category: "frontend", note: "Nuxt 2/3、Vuex、Pinia。複数の新規・グロース案件で経験。", priority: 12 },
    { name: "Vue.js", level: "A", years: "5年", category: "frontend", note: "最も経験豊富なフレームワークの一つ。", priority: 13 },
    { name: "Hono.js", level: "B", years: "3年", category: "backend", note: "型安全なAPIルーティングとミドルウェア設計。", current: true, priority: 14 },
    { name: "Express", level: "B", years: "3年", category: "backend", note: "Node.jsでのAPI開発、WebSocket実装経験。", priority: 15 },
    { name: "Ruby on Rails", level: "B", years: "3年", category: "backend", note: "API開発、Cognito認証フロー実装で利用。", priority: 16 },
    { name: "MySQL", level: "B", years: "3年", category: "database", note: "インデックス設定やクエリ改善の経験。", current: true, priority: 17 },
    { name: "Firestore", level: "B", years: "2年", category: "database", note: "NoSQL設計、リアルタイム更新機能で利用。", priority: 18 },
    { name: "AWS", level: "B", years: "2年", category: "cloud", note: "Cognito、ALB、S3、CloudFront、Lambda、Route 53、SESの利用経験。", current: true, priority: 19 },
    { name: "GitHub Actions", level: "B", years: "2年", category: "devops", note: "CI/CD、GitHub Pagesデプロイ、Slack通知などの運用経験。", current: true, priority: 20 },
    { name: "Claude Code / Codex", level: "A", years: "2年", category: "devops", note: "開発規約の設計、Hooks、スキル、AIレビューCI、レビュー指摘を規約へ還元する自己改善ループの構築・運用。", current: true, priority: 6 },
    { name: "Vitest / Testing Library / Storybook", level: "A", years: "3年", category: "frontend", note: "テスティングトロフィーに基づくテスト戦略、MSWを使った結合テスト、ChromaticによるVRT、カバレッジ差分CI、PlaywrightによるE2E。", priority: 21 }
  ] satisfies Skill[],
  education: [
    {
      period: "2012/04〜2017/03",
      organization: "サイバー大学 IT総合学部",
      description: "卒業（豊田自動織機に在職しながら通信制で学位を取得）"
    }
  ] satisfies CareerEntry[],
  employmentHistory: [
    {
      period: "2009/04〜2017/04",
      organization: "株式会社豊田自動織機",
      description: "機械加工部門で品質管理業務に従事（非IT職）。在職中に通信制大学でIT総合学部を修了し、エンジニアへ転身。"
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
    },
    {
      period: "2021/04〜2021/12",
      organization: "フリーランス",
      description: "Webエンジニアとして独立。Nuxt.js / Vue.js / TypeScriptを中心に、業務委託でフロントエンド・バックエンド開発に従事。"
    },
    {
      period: "2022/01〜現在",
      organization: "法人設立（1人法人・代表）",
      description: "法人を設立・運営。Webアプリケーションの受託開発・技術支援に加え、広告代理事業等を展開。営業・見積もり・契約から開発・保守までを一貫して担当。"
    }
  ] satisfies CareerEntry[],
  experiences: [
    {
      no: "14",
      title: "HR管理Webアプリ開発支援",
      period: "2026/01〜",
      role: "FEリード・BE/FE開発メンバー",
      summary: "人材紹介向けCRM（RA / CA / HR / Admin の4アプリ）のリニューアル。モノレポの立ち上げからフロントエンド設計・開発基盤・AI開発基盤の整備、Goによるバックエンド実装までを担当。",
      achievements: [
        {
          summary: "FEリードとして、Next.js / Turborepoによるモノレポ（4アプリ・9パッケージ）を立ち上げ、共通UI、APIクライアント、認証、テスト基盤、VRTなどの横断領域を設計・整備。",
          details: [
            "複数アプリで利用するUI、型定義、APIクライアント、認証処理、環境変数、フィーチャーフラグを共通パッケージとして分離し、変更箇所と責務を明確化。",
            "APIクライアントでvalibotによるレスポンスのランタイム検証を実装。開発・検証環境では例外で即座に検知し、本番ではログに留めて画面を止めない。BE側で増えた未定義のキーも非本番で警告し、FE/BE間の契約のずれを早期に発見。",
            "認証は、HttpOnly Cookieのトークンをもとにサーバー側でセッションを取得する方式。Reactの `cache` でメモ化し、レイアウトや各コンポーネントから呼んでも1リクエストにつきAPI呼び出しは1回に抑えた。Edge Middleware用のエントリを分け、ランタイム制約にも対応。",
            "旧フロントエンドとはbasePathとCookieのpath設計で同一ドメインに共存させ、画面単位の段階的リニューアルを可能にした。",
            "OpenFeature + ConfigCatでフィーチャーフラグ基盤を整備し、セッションAPIのv1/v2切り替えなどを安全にリリース。",
            "StorybookのストーリーをChromaticによるVRTの対象とし、撮るストーリーを明示的に選ぶ方式とTurboSnapで、影響のあるストーリーだけを撮影。全ストーリーを撮ると1行の変更で46件の差分が出ていた状況を解消し、検知精度とスナップショットコストを両立。",
            "Testing Libraryのユーティリティ、jest-dom、MSWのライフサイクル、Vitestのカバレッジ設定を共通パッケージへ集約し、アプリごとのテスト環境差異を抑制。",
            "未提供APIをMSWで段階的に代替できる仕組みを用意し、バックエンドのリリースを待たずにフロントエンド開発を進められる構成を整備。"
          ]
        },
        {
          summary: "標準機能を優先する方針でデータフローをサーバー中心に転換し、TanStack Queryとreact-hook-formを撤去。",
          details: [
            "to BのCRMでは、同じ求職者・求人・取引先を複数の画面で編集・表示するため、キャッシュの無効化漏れによる古い表示の実害が大きい（旧システムで実際にインシデント化）。手動の無効化が12箇所に散っていたRAで、この問題を構造ごと取り除いた。",
            "Server Componentsでのデータ取得 + Server Actions + revalidatePath + useOptimisticを標準の構成とし、クライアントのキャッシュ層と依存ライブラリを削減。データ取得とトークンの扱いをサーバー側に寄せた。",
            "33ファイルの置換を画面群ごとのPRに分けて計画的に実施。移行で得た知見（再検証の例外処理、連打ガード、古い応答の破棄など）は11件の規約として残した。"
          ]
        },
        {
          summary: "作業者や利用するLLMに依存しないコード品質を目指し、AI駆動開発の基盤（規約・Hooks・AIレビュー・自己改善ループ）を設計・構築。",
          details: [
            "AGENTS.mdを共通の入口とし、編集対象のパスに応じて必要な規約だけを読み込むルーター（22ルール）と、規約本体（28ドキュメント・約1.4万行）を設計・執筆。Claude CodeとCodexの双方に同じ方針が届くよう、参照の整合性をCIで自動検査。",
            "人のレビュー指摘をhookで検知し、再発性のある指摘をLLMで抽出・一般化する。反映先（規約／スキル／hook／AI誤指摘リスト）を選び、人の承認と重複チェックを経て還元する自己改善ループを構築。",
            "PRの差分をファイルの役割（8種）ごとに分け、安価なモデルで並列にレビューし、統合モデルで重複排除・誤指摘の棄却・重要度の確定を行うAIレビューをCIに導入。差分に関係する規約だけを埋め込み、入力コストを73%削減。",
            "Claude Code Hooksで、push前のセルフレビューの確認やコンテキスト圧縮前の作業記録を強制。hook自体にもテストを書き、誤検知を抑えた。",
            "テスト計画、ペルソナ別のテストケース作成とレビュー、実ブラウザでの実行、Figmaの書き出しとのピクセル差分照合までを担うQAスキル群を作成し、AIによるQAを一気通貫化。"
          ]
        },
        {
          summary: "テスティングトロフィーを意識し、ユーザー操作に近い結合テストを中心としたテスト戦略を推進。",
          details: [
            "Vitest / Testing Library / Storybook / MSWを組み合わせ、フォーム入力、バリデーション、API通信、結果表示までを一連の振る舞いとして検証。テストファイルは645本で、うち368本を追加。",
            "Storybookのストーリーをテストでも再利用し、表示状態の定義と自動テストの二重管理を抑制。",
            "mainのカバレッジをベースラインとして保存し、PRごとにプロジェクト単位のbefore/after差分を表示するCIを実装。重要なファイルにはしきい値を設定し、カバレッジを下げない運用を定着させた。",
            "旧フロントエンドと新アプリをまたぐE2EをPlaywrightで設計。CI時間を考慮し、ユニットテストとVRTはPR、アプリをまたぐハッピーパスのE2Eはstagingへのデプロイ時に実行するよう役割を分担。",
            "lefthookでpre-commitに静的解析、pre-pushに重複コード（jscpd）と未使用コード（knip、0件で運用）の検出を配置。Renovateは公開から3日経ったバージョンのみ取り込み、サプライチェーンのリスクを低減。"
          ]
        },
        {
          summary: "Go製バックエンドでDDD + Clean Architecture + CQRSの構成のもと、自社求人・取引先の2ドメインをAPIからDBまで縦断して実装。",
          details: [
            "domain / application / adapter / infrastructureへ責務を分離し、CQRS、Repositoryインターフェース、DIを導入。コード量とのトレードオフはあるものの、ドメインロジックを外部I/Oから分離することで、ユースケース単位のテストと変更影響範囲の把握を容易にした。",
            "取引先の集約モデル、リポジトリ、一覧・詳細・作成APIを実装。法人番号のチェックディジット検証をValueObjectに閉じ込め、業務ルールをドメイン層で保証。",
            "自社求人のプレビューPDF生成を、SQS + AWS Batchの非同期ジョブ基盤へ切り出し、APIの応答を即時化。",
            "S3の存在確認をerrgroupで並列化（同時実行数を制限し、エラー時は残りをキャンセル）。gomockとtable-drivenテスト、実DB（txdb）でのRepositoryテストで品質を担保。"
          ]
        }
      ],
      technologies: ["Next.js", "React", "TypeScript", "Go", "Turborepo", "valibot", "Radix UI", "Tailwind CSS", "Vitest", "Testing Library", "Storybook", "Chromatic", "MSW", "Playwright", "OpenFeature", "GitHub Actions", "Claude Code", "Codex"],
      featured: true
    },
    {
      no: "13",
      title: "在庫管理Webアプリ開発支援",
      period: "2025/08〜2025/12",
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
      period: "2022/01〜2026/01",
      role: "フロントエンド開発メンバー（他案件と並行稼働）",
      summary: "levtech-direct.jp のグロース開発と、Nuxt.jsからNext.jsへのリプレイス。約4年にわたり継続参画。",
      achievements: [
        "機能追加を止めずにNuxt.jsからNext.jsへのリプレイスを推進。BE担当・旧画面担当と仕様とAPIの変更を共有しながら、新旧画面を並行して開発。",
        "最も重視したのは、フロントエンドのAPI型と実際のAPIレスポンスのずれを防ぐこと。API定義書が存在しなかったため、BE担当と連携してOpenAPI定義書を整備してもらい、実装と一致する状態を保つ運用にした。",
        "orvalでOpenAPI定義から型定義・API呼び出し・React Queryのフック・MSWのモックを自動生成。手書きの型をなくし、BEの変更が型エラーとしてフロントエンドに即座に伝わる構成にした。モックも定義から生成するため、BEの実装を待たずに画面開発を進められた。",
        "新旧画面はALBのパスベースのルーティングで画面単位に切り替え、リプレイスが済んだ画面から順次リリース。",
        "新機能開発と並行して、パフォーマンス問題を調査・解消。再発を防ぐ継続監視用チェックリストを作成。",
        "レビュー観点テンプレートを整備し、レビューの品質を揃えてチームの生産性向上に貢献。"
      ],
      technologies: ["Nuxt.js", "Next.js", "React", "TypeScript", "orval", "OpenAPI", "React Query", "MSW", "PHP Laravel", "MySQL"]
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
