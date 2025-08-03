# Personalized Parenting Platform

---

## **Technical Document:**

*Name of Website: PeaPodPulse.com: The modern pulse on parenthood! Your tech-driven, personalized guide for the parenting journey.*

### **1.0 Project Description & General Requirements**

This document outlines the technical and functional specifications for a new web platform, a personalized guide for individuals and couples on their journey through conception, pregnancy, and early parenthood. The platform will serve as a supportive, trustworthy resource similar to BabyCenter or The Bump, but with a strong emphasis on a modern, clean UI and a deeply personalized user experience from the moment of registration.

**Core Objectives:**

- **Personalization:** Deliver content, tools, and notifications tailored to the user's specific stage (e.g., trying to conceive, pregnant, parent of a newborn).
- **User Engagement:** Foster a sense of progress and support through trackers, milestone updates, and timely advice.
- **Content Authority:** Provide a comprehensive library of expert-vetted articles, guides, tools, and **impartial product reviews**.
- **Seamless Experience:** Offer a clean, intuitive, and reassuring user interface that is fully responsive.

**General Requirements:**

- **User Authentication:** Users must be able to register and log in using their Google account via Socialite.
- **Personalized Onboarding:** The registration process must capture the user's current life stage and relevant data (e.g., due date, baby's birth date) to customize their dashboard immediately.
- **Dynamic Dashboard:** Logged-in users will have a personalized dashboard with a vertical menu, showing stage-relevant information, trackers, and content.
- **Public Content:** Non-authenticated users can browse general articles, tools, and product reviews, with clear calls-to-action (CTAs) to register for a personalized experience.
- **Email Notifications:** The system will send automated weekly/daily emails with updates and tips based on the user's stage.
- **Admin Panel:** A secure admin area for content management (articles, reviews), user analytics, and site administration.
- **Performance & SEO:** The site must be fast, secure, and optimized for search engines.

### **2.0 Technical Specifications**

- **Frontend Framework:** Next.js 15+ (App Router) using React and TypeScript.
    - Provides Server-Side Rendering (SSR) and Static Site Generation (SSG) for superior SEO and performance
- **Styling:** Tailwind CSS with Shadcn/ui for pre-built, accessible components.
- **Animations:** Framer Motion for subtle, engaging UI animations.
- **Backend Logic:** Next.js API Routes.
- **Database:** PostgreSQL hosted on Supabase.
- **ORM:** Prisma.
- **Authentication:** NextAuth.js (v5).
- **File Storage:** Amazon S3.
- **Email Service:** Resend.
- **Deployment:** Vercel.
- **Admin Panel:** Built as a protected route group within the Next.js application (e.g., `/admin`). The UI will use a WYSIWYG editor like Tiptap for a rich blog-editing experience.

### **3.0 Navigation Architecture: Menus & User Context**

The platform's navigation is designed to adapt to the user's context, serving two primary states: discovery (for non-authenticated visitors) and management (for authenticated users). The goal is to reduce cognitive load by presenting the most relevant information based on the user's current relationship with the platform.

### **3.1 Mega Menu: Public Discovery (Non-Authenticated Users)**

For new or logged-out users, the primary navigation will utilize a full-featured mega menu. This component is designed for exploration, allowing potential users to quickly grasp the breadth and depth of the platform's content.

- **Behavior:** The mega menu appears upon hovering over a top-level navigation link. It is organized into logical columns to prevent overwhelming the user.
- **Structure:**
    - **Logo:** Positioned on the far left.
    - **Top-Level Navigation Links:**
        - **Trying to Conceive:** A comprehensive guide for the start of the journey.
            - *Column 1: Learn the Basics:* Understanding Your Cycle, Fertility 101, Preconception Health & Diet.
            - *Column 2: Planning & Tools:* Ovulation Calculator, Fertility Window Calculator, Due Date Calculator, Health Checklists.
            - *Column 3: Common Challenges:* PCOS, Endometriosis, Male Factor Infertility, When to See a Doctor.
            - *Column 4: Support:* Community Forum, Success Stories, Expert Q&As.
        - **Pregnancy:** Content structured chronologically and topically.
            - *Column 1: Your Journey by Trimester:* 1st Trimester, 2nd Trimester, 3rd Trimester.
            - *Column 2: Health & Wellness:* Nutrition & Diet, Safe Exercise, Mental Health, Common Symptoms.
            - *Column 3: Preparing for Baby:* Fetal Development, Nursery Planning, Baby Names, Baby Shower Ideas.
            - *Column 4: The Final Stages:* Labor & Delivery, Postpartum Recovery, Breastfeeding Essentials, Kick Counter Tool.
        - **Baby & Toddler:** A guide to early parenthood, segmented by age for relevance.
            - *Column 1: Baby's First Year (By Age):* Newborn (0-3 Mos), 4-6 Months, 7-9 Months, 10-12 Months.
            - *Column 2: Toddler Years (By Age):* 12-18 Months, 18-24 Months, 2-3 Years.
            - *Column 3: Core Topics:* Feeding & Nutrition, Sleep Schedules, Development Milestones, Health & Safety.
            - *Column 4: Activities & Care:* Play Ideas, Potty Training, Discipline, Childcare Options.
        - **Gear & Reviews:** Impartial reviews and guides to help parents make informed decisions.
            - *Column 1: Nursery & Home:* Cribs, Bassinets, Monitors, Changing Tables, Rockers.
            - *Column 2: On the Go:* Car Seats, Strollers, Baby Carriers, Travel Cribs, Diaper Bags.
            - *Column 3: Feeding Essentials:* Bottles, High Chairs, Breast Pumps, Sterilizers.
            - *Column 4: For Mom:* Maternity Wear, Postpartum Care, Nursing Bras.
    - **Calls-to-Action (CTA):**
        - **Primary CTA:** A prominent "Register for Free" button.
        - **Secondary Link:** A standard "Log In" link.

### **3.2 Vertical Dashboard Menu: Personalized Management (Authenticated Users)**

Upon logging in, the user experience shifts from exploration to management. To create a clean, intuitive, and familiar interface, the navigation for authenticated users is split into two primary components: a persistent top horizontal bar for global navigation and account management, and a dynamic, contextual vertical sidebar for stage-specific tools and trackers.

**3.2.1 Top Navigation Bar (Authenticated)**

This bar remains fixed at the top of the viewport, providing constant access to the platform's main areas and user account functions.

- **Structure:**
    - **Logo:** Positioned on the far left, linking back to the user's personalized Dashboard.
    - **Dashboard:** The first navigation link. This is the primary landing page for the user, showing their personalized widgets and summaries.
    - **Content Hubs:** The top-level links from the public mega menu (`Trying to Conceive`, `Pregnancy`, `Baby & Toddler`, `Gear & Reviews`) remain visible. This allows logged-in users to seamlessly browse the full content library without needing to log out or navigate to a separate "browse" page. Hovering over these links can still trigger the mega menu for easy exploration.
    - **User Avatar Dropdown:** On the far right, the user's profile picture or initial is displayed. Clicking this avatar reveals a dropdown menu with the following options:
        - **👤 My Profile:** Navigates to the page for managing personal details and journey stage.
        - **⚙️ Settings:** Manage notification preferences and other site settings.
        - **❓ Help & Support:** Access FAQs and contact information.
        - **🚪 Log Out:** Ends the user's session.

This structure centralizes account-related actions under the user avatar, a common and easily understood design pattern, while keeping primary content areas accessible.

**3.2.2 Contextual Vertical Sidebar (Personalized Management)**

This sidebar, positioned on the left, is the user's dynamic toolkit. Its content changes entirely based on the user's declared life stage, providing direct access to the most relevant trackers, plans, and resources. It is designed to be collapsible to maximize screen real estate.

- **Structure:** The menu is organized with clear headings and nested sub-items for clarity.
- **Dynamic Modules (Examples):**
    - **If stage = 'TRYING_TO_CONCEIVE':**
        - **My Journey**
            - 🌸 Cycle Tracker
            - ✅ Conception Plan
        - **Health & Wellness**
            - 🥗 Fertility Diet Planner
            - 🏃‍♀️ Preconception Workouts
            - 🧠 Mental Health & Stress
        - **Resources**
            - 💬 Expert Q&A
            - 👩‍⚕️ Find a Specialist
    - **If stage = 'PREGNANT':**
        - **My Pregnancy**
            - 🤰 Week-by-Week Guide
            - 📅 Due Date Countdown
        - **Trackers & Tools**
            - 👣 Kick Counter
            - ⚖️ Weight Tracker
            - 🗓️ Appointment Log
        - **Health & Wellness**
            - 🍎 Pregnancy Nutrition
            - 💪 Safe Workouts
            - 🧘‍♀️ Prenatal Meditation
        - **Preparation**
            - 📋 Hospital Bag Checklist
            - 🍼 Baby Registry Builder
    - **If stage = 'NEW_PARENT':**
        - **My Baby**
            - 👶 Development Milestones
            - 📊 Growth Chart
        - **Daily Logs**
            - 🍼 Feeding Log
            - 😴 Sleep Log
            - diaper Diaper Log
        - **Parenting Support**
            - 💖 Postpartum Health
            - 📚 Sleep Training Guides
            - 🩺 Find a Pediatrician
        - **Activities & Play**
            - 🧸 Age-Appropriate Play Ideas
            - 🧩 Milestone Activities

**3.2.3 Stage Management and Automation**

To ensure content remains relevant, the platform provides both manual and automated methods for managing the user's life stage. This is a cornerstone of the personalization engine.

- **Manual Stage Updates:** On the `👤 My Profile` page, users have full control to:
    - Change their primary stage (e.g., from `TRYING_TO_CONCEIVE` to `PREGNANT`).
    - Update key dates (e.g., correct a due date, enter an official birth date). This action immediately reconfigures the dashboard and dynamic menu modules.
- **Automated Stage Progression:** The system intelligently progresses the user's stage to create a seamless experience.
    - **Logic:** A server-side check runs upon user login, comparing the current date to the user's stored `dueDate`.
    - **Example Scenario:**
        1. A user's stage is `PREGNANT` with a `dueDate` of `2025-10-15`.
        2. When the user logs in on or after `2025-10-15`, the system automatically transitions their stage to `NEW_PARENT`.
        3. The baby's `birthDate` is provisionally set to the `dueDate`.
        4. A prominent notification appears on their dashboard prompting them to "Confirm your baby's arrival!" This leads them to a simple form to update the official birth date, time, weight, and length, further personalizing their experience.

---

## 4.0 Website Architecture & Page Definitions

The platform's architecture is built upon the Next.js 15 App Router, creating a clear separation between public-facing content and the secure, authenticated user application. This structure leverages specific Next.js rendering strategies—Static Site Generation (SSG) for content-heavy public pages to maximize SEO and performance, and Server-Side Rendering (SSR) or Client-Side Rendering (CSR) for dynamic, personalized user-facing pages.

---

### 4.1 Public-Facing Pages (Optimized for Discovery & SEO)

These routes are designed to be highly performant, indexable by search engines, and serve as the primary acquisition funnels for new users. They will be generated as static pages at build time where possible.

- **Homepage**
    - **Route:** `app/page.tsx`
    - **Rendering Strategy:** SSG with Incremental Static Revalidation (ISR) to keep dynamic sections like "Featured Articles" fresh without requiring a full rebuild.
    - **Purpose:** To serve as the primary marketing and entry page, communicating the platform's value proposition and driving user registration.
    - **Key Components & Data Flow:**
        - **Hero Section:** A static component with a clear headline and a primary "Register for Free" CTA (`<Button>` from Shadcn/ui).
        - **Featured Content:** Server components that fetch a limited set of recent articles and popular tools from the database via Prisma during the static generation process.
        - **Testimonials & Value Props:** Static components hardcoded into the page for maximum performance.
- **Article Detail Page**
    - **Route:** `app/blog/[category]/[slug]/page.tsx`
    - **Rendering Strategy:** SSG. The `generateStaticParams` function will be used to pre-render a page for every article in the database at build time.
    - **Purpose:** To display a single, shareable, and SEO-optimized article.
    - **Key Components & Data Flow:**
        - The page will receive `category` and `slug` from the URL `params`. A server component will use these to fetch the specific article's content, metadata, and author information via a Prisma query.
        - The main content body will be rendered from the HTML generated by the Tiptap editor.
        - **Schema & SEO:** The `generateMetadata` function will dynamically create `<title>` and `<meta>` tags. The page will be embedded with `Article` JSON-LD schema markup.
- **Article Category Page**
    - **Route:** `app/blog/[category]/page.tsx`
    - **Rendering Strategy:** SSG. `generateStaticParams` will pre-render a page for each content category (e.g., 'pregnancy', 'nutrition').
    - **Purpose:** To act as a hub for a specific topic, listing all relevant articles.
    - **Key Components & Data Flow:**
        - The page receives the `category` param and fetches all articles belonging to it.
        - A grid or list of article preview cards (`<Card>` from Shadcn/ui), each linking to the corresponding detail page.
        - Includes client-side components for optional filtering or sorting.
- **Tool Pages**
    - **Route:** `app/tools/[tool-name]/page.tsx` (e.g., `app/tools/ovulation-calculator/page.tsx`)
    - **Rendering Strategy:** SSG.
    - **Purpose:** To provide a standalone, interactive tool that serves as an evergreen content asset to attract organic search traffic.
    - **Key Components & Data Flow:**
        - The main calculator interface will be a Client Component (`'use client'`) to handle user input and state changes.
        - A prominent CTA will encourage users to "Register to save your results," linking them to the registration page.
- **Gear & Review Pages**
    - **Review Listing Page Route:** `app/reviews/[category]/page.tsx`
    - **Review Detail Page Route:** `app/reviews/[category]/[product-slug]/page.tsx`
    - **Rendering Strategy:** SSG, following the same `generateStaticParams` pattern as the blog.
    - **Purpose:** To provide authoritative, filterable directories and in-depth reviews of products.
    - **Key Components & Data Flow:**
        - **Listing Page:** Features robust filtering and sorting Client Components that operate on the initially loaded static data.
        - **Detail Page:** Displays structured data (specs, pros, cons, ratings) fetched via Prisma. Implements `Product` and `Review` JSON-LD schema markup for rich snippets.
- **Authentication Pages**
    - **Route:** `app/auth/signin/page.tsx` (and other routes handled by NextAuth.js)
    - **Rendering Strategy:** SSR or CSR.
    - **Purpose:** To provide a simple and secure interface for user login and registration.
    - **Key Components & Data Flow:** The page will primarily feature a "Continue with Google" button. The entire flow is managed by NextAuth.js and its Google Provider configuration.

---

### 4.2 Authenticated Application Routes (Personalized Experience)

These routes are protected and require a valid user session. They form the core application and are rendered dynamically based on user-specific data.

- **Onboarding Wizard**
    - **Route:** `app/welcome/page.tsx`
    - **Rendering Strategy:** CSR (`'use client'`).
    - **Purpose:** A mandatory, one-time setup form for newly registered users to provide the initial data for personalization. A middleware (`middleware.ts`) will redirect first-time users to this page.
    - **Key Components & Data Flow:**
        - A multi-step form built with `react-hook-form` and Zod for validation.
        - On submission, the form data is sent to a dedicated API Route (`app/api/user/onboard/route.ts`) which updates the user's record in the PostgreSQL database via Prisma.
- **Personalized Dashboard**
    - **Route:** `app/dashboard/page.tsx`
    - **Rendering Strategy:** SSR. This ensures the personalized content is present in the initial HTML payload, preventing layout shifts or content flashes.
    - **Purpose:** The user's primary landing page, offering a dynamic, at-a-glance summary of their journey.
    - **Key Components & Data Flow:**
        - The main page is a Server Component that fetches the user's session data via NextAuth.js `auth()` helper.
        - Based on the user's `stage` and key dates (`dueDate`, `birthDate`), it queries the database for relevant data.
        - This data is then passed as props to a modular grid of widgets:
            - `WeeklySummaryWidget`: Displays text like "Your baby is the size of a lemon!"
            - `RelevantArticlesWidget`: Shows 2-3 articles tagged for the user's specific week.
            - `ChecklistWidget`: Displays personalized to-do items.
            - `TrackerQuickAccessWidget`: Provides direct links to full-page trackers.
- **Tracker Pages**
    - **Route:** `app/trackers/[tracker-name]/page.tsx` (e.g., `app/trackers/kick-counter/page.tsx`)
    - **Rendering Strategy:** CSR (`'use client'`). These pages are highly interactive and stateful.
    - **Purpose:** To provide a full-page, dedicated interface for data entry and visualization for a specific tracker.
    - **Key Components & Data Flow:**
        - The client component fetches historical data from a protected API route (e.g., `app/api/trackers/kick-counter/route.ts`).
        - It uses a data-fetching library like SWR or React Query to handle state, caching, and mutations (POSTing new entries).
        - Data is visualized using a charting library like `Recharts`.
- **Profile and Settings**
    - **Route:** `app/profile/page.tsx`
    - **Rendering Strategy:** CSR (`'use client'`).
    - **Purpose:** A centralized hub for all account and journey management.
    - **Key Components & Data Flow:**
        - Uses Shadcn's `<Tabs>` to separate concerns:
            - **Account:** Form to update name/email.
            - **My Journey:** The interface for **Stage Management**. Allows users to change their `stage` and update key dates. Submitting this form calls an API route that reconfigures the user's profile and triggers the dashboard/menu updates.
            - **Notifications:** Toggles for managing email preferences. Each change calls a specific API route to update user settings.

---

### 4.3 Admin Panel (Protected Route Group)

This section is only accessible to users with an `ADMIN` role. Access control will be enforced in a layout file for the entire group.

- **Route Group & Layout:** `app/(admin)/admin/layout.tsx`
    - This layout file will contain the logic to verify the user's session and role. If the user is not an admin, it will redirect them to the dashboard or an "unauthorized" page. This layout also includes the shared admin sidebar navigation.
- **Admin Dashboard**
    - **Route:** `app/(admin)/admin/page.tsx`
    - **Rendering Strategy:** SSR.
    - **Purpose:** An overview of key site metrics.
    - **Data Flow:** The server component will make several parallel Prisma queries to fetch user counts, content stats, etc., and pass them to display components.
- **Content Management (Articles & Reviews)**
    - **Routes:** `app/(admin)/admin/content/articles/page.tsx`, `app/(admin)/admin/content/reviews/page.tsx`
    - **Rendering Strategy:** SSR for the lists, CSR for the create/edit forms.
    - **Key Components & Data Flow:**
        - The main pages use Shadcn's `<DataTable>` component to display all content items, fetched on the server.
        - The "Create New" and "Edit" buttons link to a form page (e.g., `.../articles/[id]/edit`) which is a client component.
        - This form includes the **Tiptap WYSIWYG editor** and fields for all metadata. On submit, it calls a protected API route (`app/api/admin/content/route.ts`) to perform the CUD operation.
- **User Management**
    - **Route:** `app/(admin)/admin/users/page.tsx`
    - **Purpose:** To view, search, and manage user roles.
    - **Data Flow:** Similar to content management, using a server-rendered `<DataTable>` with client-side controls to trigger API calls for role changes.
- **Media Library**
    - **Route:** `app/(admin)/admin/media/page.tsx`
    - **Purpose:** An interface for managing assets in Amazon S3.
    - **Data Flow:** The page will interact with an API route that lists bucket contents. Uploads will be handled by getting a secure, pre-signed URL from an API route and uploading the file directly to S3 from the client.

---

### **5.0 UI/UX Design & Feel**

- **Vibe:** Reassuring, supportive, modern, and clean. The design should feel like a trustworthy friend—knowledgeable but approachable.
- **Color Palette:** Soft, muted pastels (e.g., dusty rose, baby blue, mint green) paired with warm, off-white backgrounds and dark gray text for readability. A single, energetic but gentle accent color (e.g., coral or teal) for CTAs.
- **Typography:** A clean, friendly sans-serif font like Nunito Sans or Poppins for all text. Font sizes should be generous to ensure readability.
- **Layout:** Spacious, using a consistent grid system and ample white space. Content will be presented in cards to create a clean, organized look. The design will be mobile-first and fully responsive.
- **Imagery:** Use high-quality, authentic photography and custom illustrations that reflect diversity and real-life parenting moments. Avoid generic or sterile stock photos.
- **Animations:** Use subtle animations (e.g., fade-ins on scroll via AOS) to guide the user's attention and make the interface feel responsive and alive without being distracting.

### **6.0 SEO & Security**

**6.1 Search Engine Optimization (SEO)**

- **Technical SEO:**
    - Leverage Next.js SSG for article, review, and category pages for instant load times and optimal crawlability.
    - Use SSR for the user dashboard to ensure it's not indexed.
    - Dynamically generate `<title>` and `<meta name="description">` for all content pages using the Next.js Metadata API.
    - Auto-generate `sitemap.xml` and a proper `robots.txt` file.
- **Content SEO:**
    - Enforce proper heading structure (`<h1>`, `<h2>`, etc.) in the admin blog and review editors.
    - Implement Schema Markup (Article, Product, Review, FAQPage, HowTo) to provide rich results in Google Search.
    - Use clean, human-readable URLs (e.g., `/pregnancy/nutrition/what-to-eat-first-trimester` or `/reviews/strollers/best-jogging-stroller-2025`).

**6.2 Security**

- **Authentication:** NextAuth.js will handle secure cookie-based session management, password hashing (if email/password login is added later), and CSRF protection.
- **Data Validation:** All user input, both from the client-side and API routes, must be strictly validated on the server-side using a library like Zod.
- **API Security:** Implement rate limiting on API endpoints to prevent abuse and brute-force attacks.
- **Permissions:** A robust Role-Based Access Control (RBAC) system will be implemented. Only users with the `ADMIN` role can access the `/admin` routes.
- **Secrets Management:** All API keys, database credentials, and other secrets will be stored exclusively in environment variables (`.env.local`) and never exposed to the client.

### **7.0 Development Strategy**

The project will be broken down into nine distinct phases. The strategy is to build the application from the inside out: starting with the foundational setup and data structure, moving to core functionalities like authentication and content management, then building the public-facing and personalized user interfaces, and finally layering in advanced features and polish.

### **7.1 Current Project Structure**

```
PeaPodPulse/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts        # NextAuth.js API route handlers
│   ├── auth/
│   │   └── signin/
│   │       └── page.tsx           # Google OAuth sign-in page
│   ├── dashboard/
│   │   └── page.tsx               # Protected user dashboard
│   ├── globals.css                # Global Tailwind CSS styles with shadcn/ui variables
│   ├── layout.tsx                 # Root layout with temporary auth header
│   └── page.tsx                   # Homepage component
├── components/
│   ├── auth/
│   │   └── auth-buttons.tsx       # Reusable authentication UI components
│   └── ui/
│       └── button.tsx             # shadcn/ui button component
├── lib/
│   ├── prisma.ts                  # Prisma client configuration
│   └── utils.ts                   # Utility functions (cn helper)
├── prisma/
│   └── schema.prisma              # Complete database schema with all models
├── types/
│   └── next-auth.d.ts             # NextAuth.js TypeScript type extensions
├── auth.config.ts                 # NextAuth.js provider configuration
├── auth.ts                        # NextAuth.js main configuration with callbacks
├── middleware.ts                  # Route protection and authentication middleware
├── node_modules/                  # Dependencies (auto-generated)
├── .env.example                   # Environment variables template (committed)
├── .env.local                     # Local environment variables with credentials (gitignored)
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore patterns
├── CLAUDE.md                      # Project instructions and guidelines
├── components.json                # shadcn/ui configuration
├── next.config.js                 # Next.js configuration
├── next-env.d.ts                  # Next.js TypeScript declarations
├── package.json                   # Project dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration for Tailwind
├── README.md                      # Project documentation and setup instructions  
├── tailwind.config.ts             # Tailwind CSS configuration with shadcn/ui setup
├── TechnicalDocument.md           # Complete project specifications
└── tsconfig.json                  # TypeScript configuration
```

---

## **Phase 1: Project Scaffolding & Foundational Setup**

**Goal:** Initialize the project with all the required technologies and establish the basic folder structure and database connection. This phase creates a stable, empty canvas.

- **Task 1.1: Initialize Next.js Project.** ✅ **COMPLETED**
    - Create a new Next.js 15+ project using the App Router.
    - Configure it with **TypeScript** and **Tailwind CSS**.
    - **Implementation Notes:**
        - Created Next.js 15.4.5 project with App Router structure
        - TypeScript configured with strict mode and Next.js optimizations
        - Tailwind CSS configured with PostCSS and Autoprefixer
        - Basic app structure created with layout.tsx and page.tsx
        - Project successfully builds and compiles without errors
- **Task 1.2: Install Core Dependencies.** ✅ **COMPLETED**
    - Add all primary npm packages: `prisma`, `next-auth@5`, `@next-auth/prisma-adapter`, `zod`, `react-hook-form`, `shadcn-ui`, `framer-motion`, `resend`, `tiptap`.
    - **Implementation Notes:**
        - Installed all core dependencies including Prisma, NextAuth.js v5 beta, Zod, React Hook Form, Framer Motion, Resend, and Tiptap
        - Added shadcn/ui dependencies: tailwindcss-animate, class-variance-authority, clsx, tailwind-merge, lucide-react
- **Task 1.3: Configure Core Tools.** ✅ **COMPLETED**
    - Initialize **Shadcn/ui** by running `npx shadcn-ui@latest init`.
    - Set up the basic **Prisma** configuration (`schema.prisma`).
    - Create a `.env.local` file for environment variables.
    - **Implementation Notes:**
        - Manually configured shadcn/ui with proper Tailwind config, CSS variables, and component utilities
        - Created components.json for shadcn/ui configuration
        - Set up Prisma with basic schema including NextAuth.js models and UserProfile
        - Created .env.local template with all required environment variables
        - Added lib/utils.ts for utility functions and lib/prisma.ts for database client
- **Task 1.4: Establish Database Connection.** ✅ **COMPLETED**
    - Add the Supabase **PostgreSQL** connection URL to the `.env.local` file.
    - Ensure Prisma can connect to the database using `prisma db pull` or a similar command.
    - **Implementation Notes:**
        - Created Prisma schema with User, Account, Session models for NextAuth.js
        - Added UserProfile model with stage tracking (TRYING_TO_CONCEIVE, PREGNANT, NEW_PARENT)
        - Generated Prisma client successfully
        - Ready for database connection once real Supabase credentials are provided

---

## **Phase 2: Data Modeling & Core Authentication**

**Goal:** Define the entire data structure of the application and implement the fundamental user authentication flow.

- **Task 2.1: Define Prisma Schema.** ✅ **COMPLETED**
    - In `schema.prisma`, define all required models based on the technical document:
        - `User`, `Account`, `Session`, `VerificationToken` (for NextAuth.js).
        - `Article`, `Review`, `ProductCategory`, `Author`.
        - User-specific models to store personalization data (e.g., `UserProfile` with fields for `stage`, `dueDate`, `birthDate`).
        - Tracker models like `KickCountEntry`, `WeightEntry`, `FeedingLog`, etc.
    - Run `prisma generate` and `prisma db push` to sync the schema with the database.
    - **Implementation Notes:**
        - Expanded Prisma schema with comprehensive data models including:
            - Content models: `Author`, `Category`, `Article`, `Review`, `ProductCategory`, `Tag`
            - User tracking models: `KickCountEntry`, `WeightEntry`, `FeedingLog`, `SleepLog`, `DiaperLog`
            - Many-to-many relationships for article tags using `ArticleTag` join table
            - Enums for user stages, feeding types, weight units, etc.
            - Proper foreign key relationships with cascade delete where appropriate
        - Successfully generated Prisma client and pushed schema to PostgreSQL database
- **Task 2.2: Implement NextAuth.js.** ✅ **COMPLETED**
    - Set up the NextAuth.js configuration (`auth.config.ts` and `auth.ts`).
    - Configure the **Google Provider** using credentials stored in `.env.local`.
    - Use the **Prisma Adapter** to link NextAuth.js to your database.
    - **Implementation Notes:**
        - Created NextAuth.js v5 configuration with Google OAuth provider
        - Implemented Prisma adapter for database session management
        - Added JWT strategy with role-based access control
        - Created API route handlers in `app/api/auth/[...nextauth]/route.ts`
        - Implemented middleware for route protection (`middleware.ts`)
        - Added TypeScript type extensions for NextAuth in `types/next-auth.d.ts`
        - Fixed OAuth configuration issues: resolved redirect_uri_mismatch and server errors
        - Implemented proper database session strategy with Prisma adapter
- **Task 2.3: Create Basic Authentication UI.** ✅ **COMPLETED**
    - Build a simple sign-in page (`app/auth/signin/page.tsx`) with a "Sign in with Google" button.
    - Add "Log In" and "Log Out" buttons to a temporary global header to test the complete authentication cycle.
    - **Implementation Notes:**
        - Created attractive sign-in page with Google OAuth button and branded styling
        - Implemented reusable `AuthButtons` component for header authentication controls
        - Added temporary header in root layout for testing authentication flow
        - Created basic dashboard page (`app/dashboard/page.tsx`) for authenticated users
        - Resolved OAuth issues: redirect URI configuration and server authentication errors
        - Successfully tested complete authentication cycle with working Google OAuth flow

---

## **Phase 3: Public Shell & Static Content Architecture**

**Goal:** Build the non-authenticated user-facing components and page layouts. This phase focuses on the "discovery" experience.

- **Task 3.1: Create the Main Public Layout.**
    - Develop the root layout (`app/layout.tsx`) that includes the main font (Poppins/Nunito Sans) and background colors.
- **Task 3.2: Build the Public Mega Menu.**
    - Create the full **Mega Menu** component as described in section 3.1.
    - Use static data for now. The component should be interactive on hover.
    - Add the "Register for Free" and "Log In" CTAs.
- **Task 3.3: Implement the Public Homepage.**
    - Build the static sections of the homepage (`app/page.tsx`) as described in section 4.1 (Hero, Testimonials, etc.).
    - Use Shadcn/ui components for layout elements like `<Card>`.
- **Task 3.4: Set Up Static Route Structures.**
    - Create the file-based routing structure for all public content:
        - `app/blog/[category]/[slug]/page.tsx`
        - `app/reviews/[category]/[product-slug]/page.tsx`
        - `app/tools/[tool-name]/page.tsx`
    - These pages can be simple placeholders for now.

---

## **Phase 4: Admin Panel & Content Management**

**Goal:** Create the secure area for administrators to manage all site content. This is crucial for populating the site in the next phase.

- **Task 4.1: Establish Admin Route Group & Security.**
    - Create the `app/(admin)/admin` route group.
    - In its `layout.tsx`, implement the security check to ensure only users with an `ADMIN` role can access it. Redirect all others.
- **Task 4.2: Build Article Management.**
    - Create the article list page (`.../content/articles/page.tsx`) using Shadcn's `<DataTable>`.
    - Build the create/edit article form page (`.../articles/[id]/edit`).
    - Integrate the **Tiptap WYSIWYG editor** into the form for the main content body.
    - Develop the protected API route (`app/api/admin/content/articles/route.ts`) to handle create, update, and delete operations.
- **Task 4.3: Build Review Management.**
    - Repeat the process from Task 4.2 for product reviews, including all necessary metadata fields (ratings, pros, cons, specs).

---

## **Phase 5: Populating Public Pages with Dynamic Data**

**Goal:** Connect the public-facing pages built in Phase 3 to the database, making them fully functional and SEO-ready.

- **Task 5.1: Implement Article Detail & Listing Pages.**
    - In `app/blog/[category]/[slug]/page.tsx`, use `generateStaticParams` to create a page for each article. Fetch and render the article content from the database.
    - Implement the `generateMetadata` function for dynamic SEO tags.
    - Do the same for the category listing pages (`app/blog/[category]/page.tsx`).
- **Task 5.2: Implement Review Detail & Listing Pages.**
    - Follow the same SSG pattern as above for the review pages (`app/reviews/...`).
    - Implement `Product` and `Review` JSON-LD schema markup on the detail page.
- **Task 5.3: Build a Standalone Tool.**
    - Implement one of the tools, like the **Ovulation Calculator** (`app/tools/ovulation-calculator/page.tsx`), as a client component.
    - Include a CTA to "Register to save your results."

---

## **Phase 6: The Authenticated User Journey: Onboarding & Dashboard**

**Goal:** Build the core personalized experience for a logged-in user, starting from their first interaction.

- **Task 6.1: Create the Onboarding Wizard.**
    - Implement `middleware.ts` to protect all authenticated routes and redirect new users (e.g., users with `stage = NULL`) to `/welcome`.
    - Build the multi-step onboarding form (`app/welcome/page.tsx`) using **react-hook-form** and **Zod** for validation.
    - Create the API route (`app/api/user/onboard/route.ts`) that updates the user's profile with their selected stage and dates.
- **Task 6.2: Build the Personalized Dashboard.**
    - Develop the dashboard page (`app/dashboard/page.tsx`) as a Server-Side Rendered (SSR) component.
    - Fetch the logged-in user's data (stage, due date, etc.).
    - Conditionally render different widget components based on the user's stage (e.g., `WeeklySummaryWidget`, `RelevantArticlesWidget`).
- **Task 6.3: Implement the Authenticated Top Navigation.**
    - Create the top horizontal navigation bar for authenticated users, including the user avatar dropdown menu (My Profile, Settings, Log Out), as described in section 3.2.1.

---

## **Phase 7: Dynamic Sidebar & Interactive Trackers**

**Goal:** Implement the primary personalized navigation (the vertical sidebar) and build the interactive data-logging tools.

- **Task 7.1: Build the Contextual Vertical Sidebar.**
    - Create the vertical menu component. It should accept the user's `stage` as a prop and dynamically render the appropriate links and modules as defined in section 3.2.2.
- **Task 7.2: Implement a Representative Tracker Page.**
    - Build a full-featured tracker page, like the **Kick Counter** (`/trackers/kick-counter/page.tsx`).
    - This will be a client component ('use client').
    - Use a data-fetching library like SWR or React Query to get historical data and post new entries.
    - Create the necessary API routes (`app/api/trackers/kick-counter/route.ts`) for GET and POST requests.
    - Use a charting library like **Recharts** to visualize the data.
- **Task 7.3: Implement Remaining Trackers.**
    - Following the pattern from Task 7.2, build out the other key trackers (e.g., Feeding Log, Sleep Log, Weight Tracker).

---

## **Phase 8: Advanced Personalization & Automation**

**Goal:** Implement the systems that make the platform feel intelligent and seamless.

- **Task 8.1: Build the Profile & Stage Management Page.**
    - Create the `/profile` page using Shadcn's `<Tabs>`.
    - Build the "My Journey" tab, which allows users to manually change their stage or update key dates.
    - Ensure that submitting this form correctly calls an API to update the user's record and that the UI (dashboard, vertical menu) re-renders with the new context.
- **Task 8.2: Implement Automated Stage Progression.**
    - Create the server-side logic (e.g., in the authenticated layout or dashboard server component) that checks the user's `dueDate` against the current date on login.
    - If the date has passed, automatically transition the stage from `PREGNANT` to `NEW_PARENT`.
    - Implement the notification on the dashboard prompting the user to confirm their baby's details.
- **Task 8.3: Set Up Email Notifications.**
    - Integrate **Resend** for sending transactional emails.
    - Create a few sample email templates (e.g., "Weekly Pregnancy Update").
    - Set up a scheduled task (e.g., a cron job via Vercel Cron Jobs) that queries the user base daily/weekly and sends stage-appropriate email updates.

---

## **Phase 9: Polish, SEO, & Deployment**

**Goal:** Finalize the application by adding UI polish, ensuring all SEO requirements are met, and preparing for production deployment.

- **Task 9.1: Finalize SEO Implementation.**
    - Generate a `sitemap.xml` and `robots.txt`.
    - Double-check that all public pages use the Next.js Metadata API correctly.
    - Validate the implementation of all required Schema.org markup.
- **Task 9.2: Add UI Animations & Polish.**
    - Integrate **Framer Motion** for subtle page transitions and component animations (e.g., fade-ins).
    - Implement comprehensive loading states and user-friendly error messages across the application.
    - Conduct a full review for mobile responsiveness.
- **Task 9.3: Security & Performance Review.**
    - Ensure all API routes have strict Zod validation.
    - Review access control logic for admin and user-protected routes.
    - Analyze page performance using Lighthouse and optimize where necessary.
- **Task 9.4: Deployment.**
    - Configure all production environment variables in **Vercel**.
    - Deploy the application to production.
    - Set up a custom domain.