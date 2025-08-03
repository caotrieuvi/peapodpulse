# PeaPodPulse

**The modern pulse on parenthood!** Your tech-driven, personalized guide for the parenting journey.

## Tech Stack

- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js v5
- **Email:** Resend
- **File Storage:** AWS S3
- **Deployment:** Vercel

## Development Setup

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/caotrieuvi/peapodpulse.git
   cd peapodpulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local with your actual values
   nano .env.local
   ```

4. **Database Setup:**
   ```bash
   # Create PostgreSQL database and user
   createdb peapodpulse
   
   # Push the schema to your database
   npx prisma db push
   
   # Generate Prisma client
   npx prisma generate
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random secret for NextAuth.js
- `NEXTAUTH_URL` - Your app URL (http://localhost:3000 for development)
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` - Google OAuth credentials
- `RESEND_API_KEY` - Resend email service API key
- AWS S3 credentials for file uploads

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                    # Utility functions and configurations
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── .env.example           # Environment variables template
```

## Development Phases

This project is being developed in 9 phases:

- ✅ **Phase 1:** Project Scaffolding & Foundational Setup
- 🔄 **Phase 2:** Data Modeling & Core Authentication
- ⏳ **Phase 3:** Public Shell & Static Content Architecture
- ⏳ **Phase 4:** Admin Panel & Content Management
- ⏳ **Phase 5:** Populating Public Pages with Dynamic Data
- ⏳ **Phase 6:** The Authenticated User Journey: Onboarding & Dashboard
- ⏳ **Phase 7:** Dynamic Sidebar & Interactive Trackers
- ⏳ **Phase 8:** Advanced Personalization & Automation
- ⏳ **Phase 9:** Polish, SEO, & Deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.