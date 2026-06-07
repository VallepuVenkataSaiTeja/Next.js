# What is Next.js?

**Next.js** is an open-source React framework created by a company called Vercel.

If React is a library for building user interfaces, Next.js is the full infrastructure built on top of it. It provides production-ready features like routing, optimization, and data fetching out of the box, allowing you to build full-stack web applications without manually configuring build tools.

---

### Why Use Next.js? (The Core Benefits)

Traditionally, React apps run entirely in the browser (Client-Side Rendering). This means the browser downloads a blank HTML file and a giant JavaScript file, and then executes the JavaScript to build the page.

Next.js changes this by introducing server-side capabilities, solving three major problems:

1. **Better SEO (Search Engine Optimization):** Because traditional React sends an empty HTML shell, search engine bots sometimes struggle to crawl the content. Next.js can pre-render pages on the server, sending fully formed HTML to the browser so Google can index your site instantly.
2. **Faster Initial Load Times:** Instead of waiting for a massive JavaScript file to download and run, users see the fully rendered page almost immediately.
3. **True Full-Stack Development:** Next.js includes "API Routes," allowing you to write backend Node.js code (like connecting to a database or handling authentication) right inside the same project.

---

### Next.js vs. React: What's the Difference?

The easiest way to understand the difference is: **React is a library, whereas Next.js is a framework that uses React.**

Here is a breakdown of how they compare across key categories:

| Feature | React (CRA / Vite) | Next.js |
| --- | --- | --- |
| **What is it?** | A JavaScript **library** for building UI components. | A Full-Stack **framework** built around React. |
| **Rendering** | **Client-Side Rendering (CSR).** The browser does all the work to display the page. | **Multi-strategy.** Supports Server-Side Rendering (SSR), Static Site Generation (SSG), and CSR. |
| **Routing** | No built-in router. You must install and configure a third-party tool like `react-router-dom`. | **Built-in File-System Routing.** Drop a file into the `app/` folder (e.g., `app/about/page.js`), and it automatically becomes a URL route (`/about`). |
| **Data Fetching** | Usually happens in the browser via `useEffect` hooks, leading to loading spinners while data loads. | Can fetch data directly on the server before sending the page to the user, eliminating client-side loading states. |
| **Performance** | Performance can degrade as the app grows and the JavaScript bundle size gets larger. | Includes automatic image optimization, font optimization, and code-splitting out of the box. |
| **Backend Capabilities** | Frontend only. You need a separate backend (like Node.js/Express, Python, or Firebase) to handle API requests. | Full-stack. You can build frontend pages and backend API endpoints in the exact same codebase. |

### Summary: Which one should you choose?

* **Choose React (standalone, using tools like Vite)** if you are building a dashboard behind a login screen where SEO doesn't matter, or if you want absolute control over your build configuration and architecture.
* **Choose Next.js** if you are building a public-facing website (e'-commerce, blog, marketing site) where SEO, speed, and social media sharing are critical, or if you want a complete, opinionated setup that saves you from configuring routing and optimization yourself.



---


# How to install and set up a Next.js application ?

The easiest and most recommended way to install and set up a Next.js application is by using **`create-next-app`**, an official command-line tool that automatically sets up everything you need.

Here is the step-by-step guide to installing Next.js:

### Prerequisites

Before you start, make sure you have **Node.js** installed on your computer. You will need Node.js version **18.17.0 or later**.

* You can check your version by running `node -v` in your terminal.
* If you don't have it, download it from [nodejs.org](https://nodejs.org/).

---

### Step 1: Run the Installation Command

Open your terminal (or command prompt), navigate to the folder where you want to create your project, and run the following command:

```bash
npx create-next-app@latest

```

### Step 2: Answer the Configuration Prompts

The installer will walk you through a series of prompts to configure your project. For a standard, modern Next.js setup, here are the recommended choices:

1. **What is your project named?** `my-next-app` *(or whatever you want to name it)*
2. **Would you like to use TypeScript?** `Yes` *(Recommended for better error checking)*
3. **Would you like to use ESLint?** `Yes`
4. **Would you like to use Tailwind CSS?** `Yes` *(Great for built-in styling)*
5. **Would you like to use `src/` directory?** `Yes` *(Keeps your project organized)*
6. **Would you like to use App Router? (recommended)** `Yes` *(This is the modern, feature-rich Next.js routing system)*
7. **Would you like to customize the default import alias (@/*)?** `No`

Once you answer the final prompt, the tool will automatically download and install all the necessary packages (`next`, `react`, `react-dom`, etc.).

### Step 3: Navigate to Your Project Folder

Once the installation finishes, move into your newly created project directory:

```bash
cd my-next-app

```

### Step 4: Start the Development Server

To see your Next.js application running locally, start the development server by running:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

### Step 5: Open in Your Browser

Open your browser and navigate to:
**`http://localhost:3000`**

You should see the default Next.js welcome page. You can now open the project folder in your favorite code editor (like VS Code) and start editing files inside the `src/app/` directory!



---

# Project Structure

When you create a new Next.js application using the recommended prompts (using TypeScript, the `src/` directory, and the **App Router**), Next.js generates a clean, standardized folder structure.

Here is a breakdown of what the files and folders do in a modern Next.js project.

### The Visual Directory Tree

```text
my-next-app/
├── .next/                  # Automatically generated build output
├── node_modules/           # Installed dependencies
├── public/                 # Static assets (images, fonts, favicons)
│   ├── next.svg
│   └── vercel.svg
├── src/
│   └── app/                # The core of your application (App Router)
│       ├── favicon.ico
│       ├── layout.tsx      # Root layout (shared UI like navbar/footer)
│       ├── page.tsx        # Home page component (corresponds to "/")
│       ├── globals.css     # Global CSS rules (and Tailwind setup)
│       └── about/          # Example of a new route ("/about")
│           └── page.tsx    # The page component for /about
├── .eslintrc.json          # Configuration for code linting
├── .gitignore              # Files to ignore in Git
├── next.config.mjs         # Custom configuration for Next.js features
├── package.json            # Project dependencies and script commands
├── postcss.config.mjs      # Configuration for Tailwind/PostCSS
├── tailwind.config.ts      # Tailwind CSS styling configuration
├── tsconfig.json           # TypeScript configuration settings
└── README.md               # Project documentation

```

---

### Core Folders and Files Explained

#### 1. The `src/app/` Directory (The Most Important Folder)

Next.js uses a **file-system based router**. This means that the structure of your folders inside `src/app/` directly dictates the URLs of your website.

* `layout.tsx` (Root Layout): This file wraps your entire application. Any HTML defined here (like a Navbar, Footer, or global font configurations) will persist across all pages.
* `page.tsx` (Main Page): This is the UI for the root route (`/`). When someone visits your homepage, this is what they see.
* `globals.css`: This file contains your global CSS rules. If you selected Tailwind CSS during setup, this is where Tailwind's directives (`@tailwind base;`, etc.) are imported.

#### 2. Creating New Routes

To create a new page, you simply add a folder inside `app/`, and put a `page.tsx` file inside it.

* `src/app/about/page.tsx` automatically creates the route **`yourdomain.com/about`**.
* `src/app/contact/page.tsx` automatically creates the route **`yourdomain.com/contact`**.

#### 3. Special Files Inside `app/`

Next.js provides built-in special files that you can drop into any route folder to handle specific UI states seamlessly:

* `loading.tsx`: An automatic loading UI template for when data is fetching.
* `error.tsx`: An automatic error boundary UI template if something crashes in that specific route.
* `not-found.tsx`: The UI that will be shown if a route doesn’t exist (404 page).

#### 4. The `public/` Folder

This folder is used for static files that do not change, such as images, SVG icons, robots.txt, or custom fonts. Any file in this folder can be referenced directly from the root URL. For example, an image at `public/logo.png` can be used in your code as `<img src="/logo.png" />`.

#### 5. Root Configuration Files

* `next.config.mjs`: This is where you configure advanced Next.js settings, like setting up image optimization domains, redirects, or environment variables.
* `package.json`: Contains lists of the tools and libraries your project needs (like `react`, `next`, `tailwindcss`) and terminal commands (`npm run dev` to start developing, `npm run build` to prepare for production).



---

# React Server Components (RSC)

**React Server Components (RSC)** represent a fundamental shift in how we build web applications with React. Introduced as the default architecture in Next.js (via the App Router), RSC allows you to split your components into two distinct environments: the **Server** and the **Client**.

Before RSC, *all* React components were "Client Components"—meaning they were sent to the browser and executed there, regardless of whether they needed to be interactive.

---

### The Big Idea: Server vs. Client Components

With the new architecture, components are Server Components by default. If you want a component to be a Client Component, you must explicitly opt-in by writing `"use client"` at the very top of the file.

Here is how they differ and when to use which:

| Feature | Server Components (Default) | Client Components (`"use client"`) |
| --- | --- | --- |
| **Where it runs** | Runs **only on the build server** or backend server. Never touches the browser. | Rendered on the server first (prerendered), then fully executed/hydrated in the browser. |
| **Bundle Size** | **0% impact.** The JavaScript code for the component stays on the server. | The JavaScript code is sent to the browser, adding to your page's bundle size. |
| **Data Fetching** | Can be `async`. You can fetch data directly from databases or internal APIs using `await`. | Uses traditional hooks like `useEffect` or libraries like TanStack Query (`useQuery`). |
| **Security** | Safe for secure data (API keys, database tokens, backend logic). | Unsafe for secrets, as all code is visible to the user in the browser source. |
| **Interactivity** | **No interactivity.** Cannot use hooks (`useState`, `useEffect`) or browser APIs (like `window`). | **Full interactivity.** Can use hooks, event listeners (`onClick`), and browser APIs. |

---

### Why React Server Components? (The Benefits)

1. **Massive Performance Boost (Zero Bundle Size):** If you use a heavy npm package (like a Markdown parser or date-formatting library) inside a Server Component, that package stays on the server. Only the generated HTML text is sent to the browser. This dramatically shrinks the amount of JavaScript the user has to download.
2. **Direct Backend Access:**
Because they run on the server, Server Components can talk directly to your database, read files from the file system, or hit internal microservices without needing an intermediate API layer.
3. **Better SEO and Perceived Speed:**
The server computes the component and sends HTML directly to the browser. The user sees a fully formed page immediately, rather than waiting for JavaScript to load and render content.

---

### How They Work Together (The Mental Model)

Think of your Next.js application as a tree of components.

* The **Server Components** act as the skeleton/shell of your app. They handle layout, data fetching, and static content.
* The **Client Components** are small "islands" of interactivity dropped into that skeleton where needed.

#### Code Example: A Product Page

Imagine a page that displays product details (static/data-driven) but has an "Add to Cart" button (interactive).

**1. The Server Component (`page.tsx`)**
This component handles the secure database fetch and doesn't send any JS code for itself to the client.

```tsx
// src/app/product/[id]/page.tsx
import { db } from '@/lib/db';
import AddToCartButton from '@/components/AddToCartButton';

// Server Components can be async!
export default async function ProductPage({ params }) {
  // Fetching data directly from database on the server
  const product = await db.product.findUnique({ id: params.id });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl">${product.price}</p>
      
      {/* We pass static data down into a Client Component */}
      <AddToCartButton productId={product.id} />
    </div>
  );
}

```

**2. The Client Component (`AddToCartButton.tsx`)**
Because this button needs a click listener and state, we declare it as a client component using `"use client"`.

```tsx
// src/components/AddToCartButton.tsx
'use client'; // This directive opts this file into the Client

import { useState } from 'react';

export default function AddToCartButton({ productId }) {
  const [isAdded, setIsAdded] = useState(false);

  function handleAdd() {
    setIsAdded(true);
    // Logic to update shopping cart
  }

  return (
    <button 
      onClick={handleAdd}
      className="bg-blue-500 text-white p-2 rounded"
    >
      {isAdded ? 'Added to Cart! ✅' : 'Add to Cart'}
    </button>
  );
}

```

### Golden Rule of Component Nesting

You can import a **Client Component into a Server Component** (as shown above). However, you *cannot* directly import a Server Component into a Client Component. If a Client Component needs to display a Server Component, you must pass the Server Component down as a `children` prop.



---



# Routing

In Next.js, **Routing** is entirely file-system based. This means you don’t need to write a centralized routes configuration file (like you would with `react-router-dom`). Instead, the structure of your folders inside the `src/app/` directory automatically determines your website's URLs.

Next.js uses the **App Router**, which is built on top of React Server Components and supports layouts, nested routing, and loading states out of the box.

---

### 1. Basic Routing (Defining Routes)

Every route in Next.js is a **folder** inside `src/app/`. A route is not accessible to the public until you place a special file named **`page.tsx`** (or `.js`, `.jsx`) inside that folder.

Here is how folders translate into URLs:

| Folder Path | Resulting URL | Component File |
| --- | --- | --- |
| `src/app/` | `yourdomain.com/` (Home) | `app/page.tsx` |
| `src/app/about/` | `yourdomain.com/about` | `app/about/page.tsx` |
| `src/app/blog/` | `yourdomain.com/blog` | `app/blog/page.tsx` |

If you create a folder named `app/contact/` but forget to put a `page.tsx` inside it, visiting `/contact` will throw a 404 error.

---

### 2. Nested Routing

You can create hierarchy by nesting folders inside folders.

For example, if you want a dashboard with an analytics page:

* Create folder: `src/app/dashboard/`
* Inside it, create another folder: `src/app/dashboard/analytics/`
* Place `page.tsx` inside `analytics/`.

The resulting URL will automatically be: **`yourdomain.com/dashboard/analytics`**.

---

### 3. Dynamic Routes (Slugs)

When building blogs, e-commerce stores, or user profiles, you don't know the exact URL segments ahead of time (e.g., `/blog/how-to-code` vs `/blog/travel-tips`).

Next.js handles this using **Dynamic Segments** by wrapping a folder name in square brackets: **`[folderName]`**.

* Create folder: `src/app/blog/[slug]/page.tsx`
* This matches URLs like `/blog/hello-world`, `/blog/react-tips`, etc.

Inside the `page.tsx` file, you can access the dynamic portion of the URL via the `params` prop:

```tsx
// src/app/blog/[slug]/page.tsx

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug; // "hello-world" if visiting /blog/hello-world
  
  return <h1>Viewing Blog Post: {slug}</h1>;
}

```

---

### 4. Layouts and Templates

One of the most powerful features of Next.js routing is the ability to share UI between pages using a **`layout.tsx`** file. Layouts preserve state, remain interactive, and do not re-render when navigating between sibling routes.

* **Root Layout (`src/app/layout.tsx`):** Applies to your entire application. This is where you define your `<html>`, `<body>`, and global layout UI (like your primary Navigation Bar and Footer).
* **Nested Layouts:** You can add a `layout.tsx` inside any subfolder to apply layouts exclusively to that specific route section.

For example, a dashboard layout:

```tsx
// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children, // This automatically injects the active page or sub-layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white">Dashboard Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

```

Any page inside `/dashboard` (like `/dashboard/analytics` or `/dashboard/settings`) will now automatically render inside this sidebar structure.

---

### 5. Client-Side Navigation

To navigate between routes, you should **never** use standard HTML `<a>` tags. Traditional `<a>` tags force the browser to do a full-page reload, wiping out your application's state and slowing things down.

Instead, Next.js provides two main ways to handle transitions:

#### A. The `<Link>` Component

This is the standard approach for UI-based navigation. It pre-fetches the page in the background as it enters the viewport, making transitions near-instant.

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}

```

#### B. The `useRouter` Hook (Programmatic Navigation)

If you need to redirect a user programmatically (e.g., after clicking a submit button or completing an event), use the `useRouter` hook from `next/navigation`. Note that this requires a Client Component (`"use client"`).

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = () => {
    // Authenticate user logic here...
    router.push('/dashboard'); // Programmatically navigate
  };

  return <button onClick={handleLogin}>Log In</button>;
}

```



---