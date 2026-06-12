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



# Dynamic Routes in Next.js

Dynamic routes allow you to create pages whose URL contains variable values, such as user IDs, blog post slugs, product IDs, etc.

---

## 1. Creating a Dynamic Route

In the App Router, create a folder using square brackets:

```txt
app/
  blog/
    [slug]/
      page.tsx
```

Here, `[slug]` is a dynamic segment.

### URLs Matched

```txt
/blog/hello-world
/blog/nextjs-routing
/blog/my-first-post
```

---

## 2. Accessing Route Parameters

### App Router (Next.js 13+)

```tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return <h1>Post: {slug}</h1>;
}
```

For:

```txt
/blog/hello-world
```

`slug` will be:

```js
"hello-world"
```

---

## 3. Multiple Dynamic Segments

Folder structure:

```txt
app/
  shop/
    [category]/
      [productId]/
        page.tsx
```

Matches:

```txt
/shop/electronics/123
/shop/books/456
```

Parameters:

```js
{
  category: "electronics",
  productId: "123"
}
```

Example:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{
    category: string;
    productId: string;
  }>;
}) {
  const { category, productId } = await params;

  return (
    <>
      <h1>Category: {category}</h1>
      <h2>Product: {productId}</h2>
    </>
  );
}
```

---

## 4. Generating Static Pages

If you know the possible route values beforehand, use `generateStaticParams`.

```tsx
export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "post-3" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return <div>{slug}</div>;
}
```

Next.js pre-renders these pages at build time.

---

## 5. Dynamic Routes vs Catch-All Routes

### Dynamic Route

```txt
app/blog/[slug]/page.tsx
```

Matches:

```txt
/blog/post-1
```

Does not match:

```txt
/blog/post-1/comments
```

---

### Catch-All Route

```txt
app/blog/[...slug]/page.tsx
```

Matches:

```txt
/blog/post-1
/blog/post-1/comments
/blog/post-1/comments/replies
```

Parameters:

```js
{
  slug: ["post-1", "comments", "replies"]
}
```

---

## 6. Reading Params in Client Components

Use `useParams()`.

```tsx
"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return <p>{params.slug}</p>;
}
```

For:

```txt
/blog/nextjs
```

Output:

```txt
nextjs
```

---

### Quick Comparison

| Route Type         | Folder Name       | Example URL            | Params                            |
| ------------------ | ----------------- | ---------------------- | --------------------------------- |
| Static             | `about`           | `/about`               | None                              |
| Dynamic            | `[id]`            | `/users/42`            | `{ id: "42" }`                    |
| Multiple Dynamic   | `[category]/[id]` | `/shop/books/10`       | `{ category: "books", id: "10" }` |
| Catch-All          | `[...slug]`       | `/docs/api/auth`       | `{ slug: ["api", "auth"] }`       |
| Optional Catch-All | `[[...slug]]`     | `/docs` or `/docs/api` | `{ slug: undefined }` or array    |

A simple rule: **`[param]` captures one URL segment, while `[...param]` captures all remaining segments as an array.**





---




# Nested Dynamic Routing in Next.js

**Nested dynamic routing** means having dynamic segments at multiple levels of the URL hierarchy.

For example:

```txt
/products/electronics/123
/products/books/456
```

Here:

* `electronics` / `books` → category
* `123` / `456` → product ID

---

## Folder Structure

```txt
app/
└── products/
    └── [category]/
        └── [productId]/
            └── page.tsx
```

### URL

```txt
/products/electronics/123
```

### Params

```js
{
  category: "electronics",
  productId: "123"
}
```

---

## Accessing Nested Params

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{
    category: string;
    productId: string;
  }>;
}) {
  const { category, productId } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Product ID: {productId}</h2>
    </div>
  );
}
```

Visiting:

```txt
/products/electronics/123
```

renders:

```txt
Category: electronics
Product ID: 123
```

---

## Deeper Nesting

You can keep nesting as much as needed.

```txt
app/
└── company/
    └── [department]/
        └── [team]/
            └── [employeeId]/
                └── page.tsx
```

URL:

```txt
/company/engineering/frontend/101
```

Params:

```js
{
  department: "engineering",
  team: "frontend",
  employeeId: "101"
}
```

---

## Nested Layouts with Dynamic Routes

One powerful feature of the App Router is that layouts can access parent route params.

Structure:

```txt
app/
└── products/
    └── [category]/
        ├── layout.tsx
        └── [productId]/
            └── page.tsx
```

### Category Layout

```tsx
export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <>
      <h1>{category.toUpperCase()}</h1>
      {children}
    </>
  );
}
```

For:

```txt
/products/electronics/123
```

The layout receives:

```js
{
  category: "electronics"
}
```

and wraps all product pages in that category.

---

## Dynamic + Static Segments

You can mix static and dynamic folders.

```txt
app/
└── blog/
    └── [slug]/
        └── comments/
            └── [commentId]/
                └── page.tsx
```

Matches:

```txt
/blog/nextjs-routing/comments/25
```

Params:

```js
{
  slug: "nextjs-routing",
  commentId: "25"
}
```

---

## Real-World Example: E-commerce

```txt
app/
└── shop/
    └── [category]/
        └── [subcategory]/
            └── [productId]/
                └── page.tsx
```

URL:

```txt
/shop/electronics/laptops/123
```

Params:

```js
{
  category: "electronics",
  subcategory: "laptops",
  productId: "123"
}
```

This is nested dynamic routing because multiple levels of the route tree are dynamic.

---

## Nested Dynamic Route vs Catch-All

### Nested Dynamic

```txt
app/shop/[category]/[productId]/page.tsx
```

Only matches:

```txt
/shop/electronics/123
```

---

### Catch-All

```txt
app/shop/[...slug]/page.tsx
```

Matches:

```txt
/shop/electronics
/shop/electronics/laptops
/shop/electronics/laptops/123
```

and returns:

```js
{
  slug: ["electronics", "laptops", "123"]
}
```

### Rule of Thumb

Use **nested dynamic routes** when each URL segment has a specific meaning:

```txt
/users/[userId]/posts/[postId]
```

Use **catch-all routes** when you don't know how many segments you'll receive:

```txt
/docs/[...slug]
```




---




# catch-all segment

In **Next.js App Router**, a **catch-all segment** lets a route match **any number of URL segments**.

### Basic Syntax

Create a folder with `[...]`:

```txt
app/
  docs/
    [...slug]/
      page.tsx
```

The folder name `[...]` indicates a catch-all route.

### Example URLs

For:

```txt
app/docs/[...slug]/page.tsx
```

These URLs will match:

```txt
/ docs/a
/ docs/a/b
/ docs/a/b/c
```

and `params.slug` will be:

```js
// /docs/a
{ slug: ["a"] }

// /docs/a/b
{ slug: ["a", "b"] }

// /docs/a/b/c
{ slug: ["a", "b", "c"] }
```

### Accessing the Parameters

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;

  return (
    <div>
      {slug.join(" / ")}
    </div>
  );
}
```

---

## Optional Catch-All Segments

If you want the route to also match the parent path itself, use double brackets:

```txt
app/docs/[[...slug]]/page.tsx
```

Now these URLs match:

```txt
/docs
/docs/a
/docs/a/b
/docs/a/b/c
```

The values become:

```js
// /docs
{ slug: undefined }

// /docs/a
{ slug: ["a"] }

// /docs/a/b
{ slug: ["a", "b"] }
```

---

## Catch-All vs Dynamic Segments

### Dynamic Segment

```txt
app/blog/[id]/page.tsx
```

Matches:

```txt
/blog/123
```

Does **not** match:

```txt
/blog/123/comments
```

---

### Catch-All Segment

```txt
app/blog/[...slug]/page.tsx
```

Matches:

```txt
/blog/123
/blog/123/comments
/blog/123/comments/replies
```

---

## Common Use Cases

### Documentation Sites

```txt
/docs/getting-started
/docs/api/auth/login
/docs/guides/deployment/vercel
```

Route:

```txt
app/docs/[...slug]/page.tsx
```

---

### Category Hierarchies

```txt
/shop/electronics
/shop/electronics/laptops
/shop/electronics/laptops/gaming
```

Route:

```txt
app/shop/[...categories]/page.tsx
```

---

### CMS-Driven Pages

```txt
/about
/company/team
/company/history
```

Route:

```txt
app/[[...slug]]/page.tsx
```

You can look up content based on the slug array and render the appropriate page.

---

## Route Priority

Next.js prefers **more specific routes** over catch-all routes.

Example:

```txt
app/
  docs/
    page.tsx
    api/
      page.tsx
    [...slug]/
      page.tsx
```

Requests resolve as:

```txt
/docs      -> docs/page.tsx
/docs/api  -> docs/api/page.tsx
/docs/xyz  -> docs/[...slug]/page.tsx
```

The catch-all route acts as a fallback after more specific matches are checked.

### Summary

| Route Type         | Syntax        | Matches               |
| ------------------ | ------------- | --------------------- |
| Dynamic            | `[id]`        | One segment           |
| Catch-all          | `[...slug]`   | One or more segments  |
| Optional catch-all | `[[...slug]]` | Zero or more segments |

Think of `[id]` as matching **exactly one path part**, while `[...slug]` matches **the rest of the path as an array**.




---




# `not-found.tsx` in Next.js (App Router)

Next.js provides a special file called `not-found.tsx` to render a **404 page** when content doesn't exist.

---

## Basic Setup

Create:

```txt
app/
├── not-found.tsx
├── page.tsx
```

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}
```

This becomes your custom 404 page.

---

## Triggering a Not Found Page

Import `notFound()` from `next/navigation`:

```tsx
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}
```

If the product doesn't exist:

```txt
/products/999
```

Next.js renders `not-found.tsx`.

---

## Dynamic Route Example

Folder structure:

```txt
app/
└── products/
    └── [id]/
        └── page.tsx
```

```tsx
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const validProducts = ["1", "2", "3"];

  if (!validProducts.includes(id)) {
    notFound();
  }

  return <h1>Product {id}</h1>;
}
```

### Result

```txt
/products/1   ✅ Product page
/products/99  ❌ Shows not-found.tsx
```

---

## Route-Specific Not Found Pages

You can create a `not-found.tsx` inside a route segment.

```txt
app/
├── not-found.tsx
└── blog/
    ├── not-found.tsx
    └── [slug]/
        └── page.tsx
```

When `notFound()` is called inside `/blog`, Next.js uses:

```txt
app/blog/not-found.tsx
```

instead of the root one.

Example:

```tsx
// app/blog/not-found.tsx
export default function BlogNotFound() {
  return <h1>Blog post not found</h1>;
}
```

---

## Add a Link Back Home

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>

      <Link href="/">
        Go Home
      </Link>
    </div>
  );
}
```

---

## `notFound()` vs `redirect()`

### `notFound()`

```tsx
import { notFound } from "next/navigation";

if (!user) {
  notFound();
}
```

Result:

```txt
404 Page
```

---

### `redirect()`

```tsx
import { redirect } from "next/navigation";

if (!user) {
  redirect("/login");
}
```

Result:

```txt
User is sent to /login
```

---

## App Router vs Pages Router

### App Router

```txt
app/not-found.tsx
```

Uses:

```tsx
import { notFound } from "next/navigation";
```

---

### Pages Router (older)

```txt
pages/404.js
```

Example:

```tsx
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

---

### Common Interview Question

**Q:** Why call `notFound()` instead of returning JSX?

Because `notFound()` immediately stops rendering and tells Next.js to return a proper **404 HTTP status code** and render the nearest `not-found.tsx`.

```tsx
if (!data) {
  notFound();
}
```

This is the recommended approach for handling missing resources in the App Router.




---




# File Colocation in Next.js

**File colocation** means keeping files that belong to a route or feature **next to each other in the same folder**, instead of placing everything in separate global folders.

The App Router in Next.js is designed around this idea.

---

## Example

Suppose you have a product page.

```txt id="j8q1m9"
app/
└── products/
    └── [id]/
        ├── page.tsx
        ├── loading.tsx
        ├── error.tsx
        ├── not-found.tsx
        ├── ProductDetails.tsx
        ├── ProductReviews.tsx
        └── styles.module.css
```

All files related to the product route are colocated in the same folder.

---

## Why Colocation?

Without colocation, you might have:

```txt id="vr9gbt"
components/
├── ProductDetails.tsx
├── ProductReviews.tsx

styles/
├── product.module.css

pages/
├── products/
│   └── [id].tsx
```

As the application grows, finding related files becomes harder.

With colocation:

```txt id="6nvvj8"
app/
└── products/
    └── [id]/
```

everything for that route lives together.

---

## What Gets Exposed as Routes?

Only special files create routes:

```txt id="fjlwmv"
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
template.tsx
default.tsx
```

Regular files are ignored by the router.

Example:

```txt id="cn96hl"
app/
└── dashboard/
    ├── page.tsx
    ├── Chart.tsx
    ├── Table.tsx
    └── utils.ts
```

Only:

```txt id="34j9o4"
/dashboard
```

becomes a route.

`Chart.tsx`, `Table.tsx`, and `utils.ts` are private implementation files.

---

## Private Folders

You can use folders starting with `_` to indicate internal-only code.

```txt id="h6bpzs"
app/
└── dashboard/
    ├── page.tsx
    └── _components/
        ├── Chart.tsx
        └── Table.tsx
```

Usage:

```tsx id="bwn3xb"
import Chart from "./_components/Chart";

export default function DashboardPage() {
  return <Chart />;
}
```

The `_components` folder does not affect routing.

---

## Route Groups + Colocation

You can organize files without changing the URL.

```txt id="yd3of7"
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
```

URLs:

```txt id="kfxr16"
/about
/contact
```

The `(marketing)` folder is only for organization.

---

## Real-World Example

```txt id="vkg4wj"
app/
└── blog/
    └── [slug]/
        ├── page.tsx
        ├── loading.tsx
        ├── error.tsx
        ├── not-found.tsx
        ├── BlogContent.tsx
        ├── BlogComments.tsx
        └── actions.ts
```

Benefits:

* Easier navigation
* Related files stay together
* Better scalability
* Less context switching

---

## Interview Answer

**What is file colocation in Next.js?**

> File colocation is the practice of keeping route-specific components, styles, utilities, loading states, error boundaries, and other related files in the same route folder. In the App Router, Next.js only treats special files such as `page.tsx`, `layout.tsx`, and `loading.tsx` as routing files, while other colocated files remain private and can be used by that route. This improves maintainability and organization.




---




# Private Folders in Next.js

A **private folder** is a folder whose name starts with an underscore (`_`).

```txt id="a8d2r1"
app/
└── dashboard/
    ├── page.tsx
    └── _components/
        ├── Chart.tsx
        └── Table.tsx
```

Next.js **ignores private folders when creating routes**.

---

## Why Use Private Folders?

Private folders help organize route-specific code without affecting the URL structure.

Example:

```txt id="d4m7k9"
app/
└── dashboard/
    ├── page.tsx
    ├── _components/
    ├── _hooks/
    ├── _lib/
    └── _types/
```

This makes it clear that these folders contain internal implementation details.

---

## Example

### Folder Structure

```txt id="r2n8v5"
app/
└── dashboard/
    ├── page.tsx
    └── _components/
        └── UserCard.tsx
```

### Component

```tsx id="f6p1w3"
// app/dashboard/_components/UserCard.tsx

export default function UserCard() {
  return <div>User Card</div>;
}
```

### Page

```tsx id="u9c4e7"
import UserCard from "./_components/UserCard";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserCard />
    </div>
  );
}
```

URL:

```txt id="k1x7b2"
/dashboard
```

There is **no route** for `_components`.

---

## What Happens Without `_`?

If you create:

```txt id="m5q9z4"
app/
└── dashboard/
    └── components/
        └── UserCard.tsx
```

Next.js won't automatically make `components` a route because it doesn't contain `page.tsx`.

However, using `_components` communicates that the folder is meant only for internal use and should never become part of the routing structure.

---

## Common Pattern

```txt id="n3w6h8"
app/
└── products/
    └── [id]/
        ├── page.tsx
        ├── loading.tsx
        ├── error.tsx
        ├── _components/
        │   ├── ProductInfo.tsx
        │   └── ProductReviews.tsx
        ├── _lib/
        │   └── getProduct.ts
        └── _types/
            └── product.ts
```

This keeps everything related to the product route together.

---

## Escaping an Underscore

What if you actually want a URL segment that starts with `_`?

Use URL encoding:

```txt id="q8j2v6"
app/
└── %5Fsettings/
    └── page.tsx
```

`%5F` is the URL-encoded form of `_`.

Resulting URL:

```txt id="z7r4m1"
/_settings
```

---

## Private Folder vs Route Group

### Private Folder

```txt id="y5k8c3"
app/
└── dashboard/
    └── _components/
```

* For internal organization.
* Not part of routing.
* Usually stores components, hooks, utilities, etc.

---

### Route Group

```txt id="v2n7p9"
app/
└── (admin)/
    └── dashboard/
        └── page.tsx
```

URL:

```txt id="e4m1s6"
/dashboard
```

* Organizes routes.
* Can share layouts among grouped routes.
* Folder name is omitted from the URL.

---

## Interview Answer

**What are private folders in Next.js?**

> Private folders are folders whose names start with an underscore (`_`). Next.js ignores them for routing purposes, allowing developers to colocate route-specific components, hooks, utilities, and other implementation files alongside a route without affecting the URL structure. They are mainly used for organization and maintainability.




---




# Route Groups in Next.js

**Route Groups** allow you to organize routes into folders **without affecting the URL path**.

A route group folder is wrapped in parentheses:

```txt id="f9k2m7"
(marketing)
(admin)
(shop)
```

---

## Basic Example

Folder structure:

```txt id="a3v8p1"
app/
└── (marketing)/
    ├── about/
    │   └── page.tsx
    └── contact/
        └── page.tsx
```

Generated URLs:

```txt id="r6n4w2"
/about
/contact
```

Notice that `(marketing)` does **not** appear in the URL.

---

## Why Use Route Groups?

As applications grow, you may want to organize routes by feature, team, or layout without changing URLs.

Without route groups:

```txt id="m8q5t3"
app/
├── about/
├── contact/
├── dashboard/
├── settings/
```

With route groups:

```txt id="j1c7k9"
app/
├── (marketing)/
│   ├── about/
│   └── contact/
│
└── (dashboard)/
    ├── dashboard/
    └── settings/
```

URLs remain:

```txt id="p4x6h8"
/about
/contact
/dashboard
/settings
```

---

## Using Different Layouts

One of the most common uses of route groups is applying different layouts to different sections of the app.

### Folder Structure

```txt id="w2n9d5"
app/
├── (marketing)/
│   ├── layout.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
└── (dashboard)/
    ├── layout.tsx
    ├── dashboard/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

---

### Marketing Layout

```tsx id="g7m3q1"
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Marketing Navbar</header>
      {children}
    </>
  );
}
```

---

### Dashboard Layout

```tsx id="u5r8k4"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>Sidebar</aside>
      {children}
    </>
  );
}
```

Result:

```txt id="z9b2c6"
/about      -> Marketing Layout
/contact    -> Marketing Layout

/dashboard  -> Dashboard Layout
/settings   -> Dashboard Layout
```

---

## Multiple Root Layouts

Route groups can be used to create separate root layouts.

```txt id="e4t7y1"
app/
├── (shop)/
│   ├── layout.tsx
│   └── products/
│       └── page.tsx
│
└── (admin)/
    ├── layout.tsx
    └── dashboard/
        └── page.tsx
```

This allows the shop and admin sections to have completely different UI structures.

---

## Important Rule

You cannot have two routes resolving to the same URL.

❌ Invalid:

```txt id="h6k1v8"
app/
├── (marketing)/
│   └── about/
│       └── page.tsx

└── (admin)/
    └── about/
        └── page.tsx
```

Both would generate:

```txt id="n3p5w7"
/about
```

Next.js throws a build error because the routes conflict.

---

## Route Groups vs Private Folders

### Route Group

```txt id="s8q4m2"
(marketing)
```

* Organizes routes.
* Can have layouts.
* Removed from URL.
* Used for route structure.

---

### Private Folder

```txt id="d5r7k1"
_components
```

* Organizes code.
* Not used for routing.
* Typically stores components, hooks, utilities.

---

## Real-World Example

```txt id="c2v9n6"
app/
├── (public)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   └── contact/
│
├── (auth)/
│   ├── layout.tsx
│   ├── login/
│   └── register/
│
└── (dashboard)/
    ├── layout.tsx
    ├── dashboard/
    ├── settings/
    └── analytics/
```

URLs:

```txt id="m1x8b4"
/
/about
/contact

/login
/register

/dashboard
/settings
/analytics
```

Each section can have its own layout while keeping clean URLs.

---

### Interview Answer

> Route Groups are folders wrapped in parentheses, such as `(marketing)` or `(dashboard)`. They help organize routes and apply different layouts without affecting the URL structure. The folder name is omitted from the generated route, making route groups useful for separating application sections like public pages, authentication pages, and dashboards while maintaining clean URLs.




---




# `Layout` :

Layouts are one of the core concepts of the Next.js App Router.

A **layout is a shared UI wrapper** that persists across navigation within a route segment.

---

# What is a Layout?

Suppose every page should have:

* Header
* Navigation
* Footer

Instead of repeating them in every page:

```tsx
<HomePage />
<AboutPage />
<ContactPage />
```

you put them in a layout.

```text
Header
  ↓
Page Content
  ↓
Footer
```

---

# Root Layout

Every App Router application must have:

```text
app/
└── layout.tsx
```

Example:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
```

`children` represents the current page or nested layout.

---

# Example Structure

```text
app/
├── layout.tsx
├── page.tsx
└── about/
    └── page.tsx
```

Root layout:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Header</header>

        {children}

        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

---

## Visiting `/`

Page:

```tsx
export default function Home() {
  return <h1>Home Page</h1>;
}
```

Rendered:

```text
Header

Home Page

Footer
```

---

## Visiting `/about`

Page:

```tsx
export default function About() {
  return <h1>About Page</h1>;
}
```

Rendered:

```text
Header

About Page

Footer
```

Same layout, different page.

---

# Nested Layouts

You can create layouts inside route segments.

```text
app/
├── layout.tsx
├── page.tsx
└── dashboard/
    ├── layout.tsx
    └── page.tsx
```

---

## Root Layout

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Main Header</header>

        {children}
      </body>
    </html>
  );
}
```

---

## Dashboard Layout

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Dashboard Sidebar</aside>

      {children}
    </div>
  );
}
```

---

## Visiting `/dashboard`

Rendered:

```text
Main Header

Dashboard Sidebar

Dashboard Page
```

Layout nesting happens automatically.

---

# Layout Nesting Tree

Structure:

```text
app/
├── layout.tsx
└── dashboard/
    ├── layout.tsx
    └── analytics/
        └── page.tsx
```

Tree:

```text
RootLayout
    ↓
DashboardLayout
    ↓
AnalyticsPage
```

Render order:

```text
RootLayout
 └── DashboardLayout
      └── AnalyticsPage
```

---

# Why Layouts Are Special

Unlike pages, layouts **persist** during navigation.

Example:

```text
/dashboard
```

Navigate to:

```text
/dashboard/analytics
```

Next.js does NOT remount:

```text
DashboardLayout
```

Only the child content changes.

---

# State Persistence

Layout:

```tsx
"use client";

import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      {children}
    </>
  );
}
```

Click:

```text
5
```

Navigate:

```text
/dashboard/settings
```

Still:

```text
5
```

Because the layout was not remounted.

---

# Layout vs Template

### Layout

```text
Persists
Keeps state
Does not remount
```

### Template

```text
Remounts every navigation
Resets state
Effects run again
```

Example:

```text
layout.tsx
```

Counter stays:

```text
5 → 5
```

Navigate.

Example:

```text
template.tsx
```

Counter resets:

```text
5 → 0
```

---

# Layout and Metadata

Layouts can define metadata.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
};
```

Child pages inherit it.

---

# Layout and Error Boundaries

```text
dashboard/
├── layout.tsx
├── error.tsx
└── page.tsx
```

`dashboard/error.tsx` catches:

```text
dashboard/page.tsx
dashboard/template.tsx
dashboard/loading.tsx
nested routes
```

but NOT:

```text
dashboard/layout.tsx
```

because the layout is above its own error boundary.

---

# Layout and Loading UI

```text
dashboard/
├── layout.tsx
├── loading.tsx
└── page.tsx
```

When dashboard content loads slowly:

```text
loading.tsx
```

appears while the layout remains visible.

---

# Interview Answer

> A layout in Next.js App Router is a shared UI wrapper that persists across route navigation. Layouts can be nested, receive `children` as props, preserve state between navigations, share UI like headers and sidebars, define metadata, and serve as the structural foundation for loading states, error boundaries, and parallel routes.





---




# `Nested layouts` :

Nested layouts are simply **layouts inside other layouts**.

Each route segment can have its own `layout.tsx`, and Next.js automatically nests them together.

---

# Example Structure

```text
app/
├── layout.tsx
├── page.tsx
│
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    │
    └── analytics/
        └── page.tsx
```

---

# Root Layout

`app/layout.tsx`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Main Header</header>

        {children}
      </body>
    </html>
  );
}
```

---

# Dashboard Layout

`app/dashboard/layout.tsx`

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Dashboard Sidebar</aside>

      {children}
    </div>
  );
}
```

---

# Dashboard Page

`app/dashboard/page.tsx`

```tsx
export default function DashboardPage() {
  return <h1>Dashboard Home</h1>;
}
```

---

## Visiting `/dashboard`

Render tree:

```text
RootLayout
    ↓
DashboardLayout
    ↓
DashboardPage
```

UI:

```text
Main Header

Dashboard Sidebar

Dashboard Home
```

---

# Deeper Nesting

Add another layout:

```text
app/
└── dashboard/
    ├── layout.tsx
    │
    └── analytics/
        ├── layout.tsx
        └── page.tsx
```

---

## Analytics Layout

```tsx
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Analytics Navigation</h2>

      {children}
    </div>
  );
}
```

---

## Analytics Page

```tsx
export default function AnalyticsPage() {
  return <h1>Analytics Data</h1>;
}
```

---

## Visiting `/dashboard/analytics`

Render tree:

```text
RootLayout
    ↓
DashboardLayout
    ↓
AnalyticsLayout
    ↓
AnalyticsPage
```

UI:

```text
Main Header

Dashboard Sidebar

Analytics Navigation

Analytics Data
```

---

# Visualizing the Nesting

Think of layouts wrapping each other like boxes:

```text
Root Layout
┌──────────────────────────┐
│ Header                   │
│                          │
│ Dashboard Layout         │
│ ┌──────────────────────┐ │
│ │ Sidebar              │ │
│ │                      │ │
│ │ Analytics Layout     │ │
│ │ ┌──────────────────┐ │ │
│ │ │ Analytics Page   │ │ │
│ │ └──────────────────┘ │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

---

# Navigation Behavior

Suppose you're on:

```text
/dashboard
```

and navigate to:

```text
/dashboard/analytics
```

### What remounts?

```text
RootLayout         ❌ stays mounted
DashboardLayout    ❌ stays mounted
AnalyticsPage      ✅ changes
```

If `analytics/layout.tsx` exists:

```text
AnalyticsLayout    ✅ mounts
AnalyticsPage      ✅ mounts
```

---

# State Persistence Example

```tsx
"use client";

import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      {children}
    </>
  );
}
```

Click:

```text
Count: 10
```

Navigate:

```text
/dashboard
→ /dashboard/analytics
```

Still:

```text
Count: 10
```

because `DashboardLayout` remains mounted.

---

# Metadata Inheritance

Root layout:

```tsx
export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
};
```

Analytics page:

```tsx
export const metadata = {
  title: "Analytics",
};
```

Result:

```html
<title>Analytics | My App</title>
```

Metadata flows through nested layouts.

---

# Error Handling in Nested Layouts

Structure:

```text
dashboard/
├── layout.tsx
├── error.tsx
└── analytics/
    └── page.tsx
```

If Analytics page throws:

```tsx
throw new Error("Analytics crashed");
```

`dashboard/error.tsx` catches it.

Error lookup:

```text
analytics/error.tsx ?
       ↓
dashboard/error.tsx ✅
       ↓
app/error.tsx
```

Nearest boundary wins.

---

# Interview Definition

> Nested layouts are layouts defined at different route segments. Next.js composes them hierarchically, so parent layouts wrap child layouts and pages. They persist across navigation, allow shared UI at different levels of the application, and enable route-specific metadata, loading states, and error boundaries.





---




# `Multiple Root Layouts` :

Multiple Root Layouts in Next.js are created using **Route Groups**.

They allow different sections of your app to have completely different root layouts.

---

# Why Do We Need Multiple Root Layouts?

Imagine a website with:

### Public Site

```text
/
about
contact
```

Layout:

```text
Header
Content
Footer
```

---

### Admin Dashboard

```text
/admin
/admin/users
/admin/settings
```

Layout:

```text
Sidebar
Topbar
Content
```

You don't want the public header/footer inside the admin section.

---

# Route Groups

Create route groups using parentheses:

```text
(groupName)
```

Example:

```text
app/
├── (marketing)/
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       └── page.tsx
│
└── (admin)/
    ├── layout.tsx
    ├── admin/
    │   └── page.tsx
```

Notice:

```text
(marketing)
(admin)
```

These folders do **not** appear in the URL.

---

# URLs

Structure:

```text
(marketing)/page.tsx
```

URL:

```text
/
```

Structure:

```text
(marketing)/about/page.tsx
```

URL:

```text
/about
```

Structure:

```text
(admin)/admin/page.tsx
```

URL:

```text
/admin
```

The route group name is ignored in the URL.

---

# Marketing Root Layout

```tsx
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Marketing Header</header>

        {children}

        <footer>Marketing Footer</footer>
      </body>
    </html>
  );
}
```

---

# Admin Root Layout

```tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <aside>Admin Sidebar</aside>

        {children}
      </body>
    </html>
  );
}
```

---

# Result

Visiting:

```text
/
```

Shows:

```text
Marketing Header

Home Page

Marketing Footer
```

---

Visiting:

```text
/admin
```

Shows:

```text
Admin Sidebar

Admin Dashboard
```

Completely different layout tree.

---

# Folder Structure for Multiple Root Layouts

```text
app/
├── (shop)/
│   ├── layout.tsx
│   ├── page.tsx
│   └── products/
│       └── page.tsx
│
└── (admin)/
    ├── layout.tsx
    └── dashboard/
        └── page.tsx
```

Each group has its own root layout.

---

# Important Rule

When using multiple root layouts, you typically **do not have a top-level `app/layout.tsx`**.

Instead:

```text
app/
├── (shop)/layout.tsx
└── (admin)/layout.tsx
```

Each group becomes its own root layout.

---

# Full Page Reloads

This is an important interview question.

Navigate from:

```text
/
```

to:

```text
/admin
```

Next.js performs a **full page load**, not a client-side layout transition.

Why?

Because you're switching between two different root layout trees.

```text
Marketing Root Layout
        ↓
Admin Root Layout
```

The entire React tree changes.

---

# Root Layout vs Nested Layout

### Nested Layout

```text
app/layout.tsx
dashboard/layout.tsx
```

Navigation:

```text
/dashboard
→ /dashboard/users
```

✅ Client-side transition
✅ State preserved

---

### Multiple Root Layouts

```text
(marketing)/layout.tsx
(admin)/layout.tsx
```

Navigation:

```text
/
→ /admin
```

❌ Full page reload
❌ State reset

---

# Real-World Example

```text
app/
├── (public)/
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       └── page.tsx
│
├── (auth)/
│   ├── layout.tsx
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
│
└── (admin)/
    ├── layout.tsx
    └── dashboard/
        └── page.tsx
```

You can have:

* Public website layout
* Authentication layout
* Admin dashboard layout

all in the same Next.js application.

---

## Interview Answer

> Multiple Root Layouts are created using Route Groups. Each route group contains its own `layout.tsx` and acts as an independent root layout. Route group names do not affect the URL. Navigating between different root layouts causes a full page reload because Next.js must switch between entirely different layout trees.





---




# Metadata :

Routing and Metadata are closely related in the Next.js App Router because each route can define its own SEO metadata.

---

# What is Metadata?

Metadata is information placed inside the HTML `<head>`.

Examples:

```html
<title>About Us</title>

<meta
  name="description"
  content="Learn more about us"
/>
```

Used for:

* SEO
* Browser tab title
* Social sharing
* Search engine previews

---

# Static Metadata

For a route:

```text
app/
└── about/
    └── page.tsx
```

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About our company",
};

export default function About() {
  return <h1>About Page</h1>;
}
```

Visiting:

```text
/about
```

Produces:

```html
<title>About</title>

<meta
  name="description"
  content="About our company"
/>
```

---

# Root Metadata

In the root layout:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
  description: "My Website",
};
```

This metadata is inherited by routes.

---

# Metadata Templates

Root layout:

```tsx
export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
};
```

Page:

```tsx
export const metadata = {
  title: "About",
};
```

Result:

```html
<title>About | My App</title>
```

---

# Dynamic Route Metadata

Structure:

```text
app/
└── blogs/
    └── [id]/
        └── page.tsx
```

URL:

```text
/blogs/5
```

Use `generateMetadata()`:

```tsx
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Blog ${id}`,
  };
}
```

Visiting:

```text
/blogs/5
```

Produces:

```html
<title>Blog 5</title>
```

---

# Metadata with Data Fetching

```tsx
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { id } = await params;

  const blog = await fetch(
    `https://api.example.com/blogs/${id}`
  ).then((res) => res.json());

  return {
    title: blog.title,
    description: blog.description,
  };
}
```

SEO data can come from a database or API.

---

# Nested Route Metadata

Structure:

```text
app/
├── layout.tsx
└── dashboard/
    ├── layout.tsx
    └── analytics/
        └── page.tsx
```

Metadata is merged from parent to child routes.

Example:

Root:

```tsx
export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
};
```

Analytics page:

```tsx
export const metadata = {
  title: "Analytics",
};
```

Result:

```html
<title>Analytics | My App</title>
```

---

# Absolute Titles

Sometimes you don't want the template.

```tsx
export const metadata = {
  title: {
    absolute: "Login",
  },
};
```

Result:

```html
<title>Login</title>
```

Not:

```html
<title>Login | My App</title>
```

---

# File-Based Metadata

Next.js also supports special files.

```text
app/
├── favicon.ico
├── icon.png
├── apple-icon.png
└── opengraph-image.png
```

These automatically become metadata.

Examples:

* favicon
* app icons
* Open Graph images
* Twitter images

---

# Metadata and Routing

Think of each route having its own metadata.

```text
/                 → Home metadata
/about            → About metadata
/blogs            → Blogs metadata
/blogs/1          → Blog 1 metadata
/blogs/2          → Blog 2 metadata
```

When navigation occurs, Next.js updates the document head automatically.

---

# Static vs Dynamic Metadata

### Static

```tsx
export const metadata = {
  title: "About",
};
```

Known at build time.

---

### Dynamic

```tsx
export async function generateMetadata() {
  return {
    title: "Blog 5",
  };
}
```

Computed at request/render time.

---

# Interview Answer

> In the Next.js App Router, metadata is defined per route using either the `metadata` export for static metadata or `generateMetadata()` for dynamic metadata. Metadata is inherited and merged through nested layouts, allowing each route to customize titles, descriptions, Open Graph tags, and other SEO information while Next.js automatically updates the document head during navigation.





---




# `meta titie` :

In the Next.js App Router (`app` directory), you can set the page title in two main ways.

## Static Metadata

For a fixed title:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is a blog page",
};

export default function Page() {
  return <h1>Blog Page</h1>;
}
```

---

## Dynamic Metadata

For dynamic routes such as `app/blog/[id]/page.tsx`:

```tsx
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Blog ${id}`,
    description: `Viewing blog ${id}`,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { id } = await params;

  return <h1>Blog {id}</h1>;
}
```

When visiting:

```
/blog/1
```

the browser tab title becomes:

```
Blog 1
```

---

## Global Title Template

In `app/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
};
```

Then a page with:

```tsx
export const metadata = {
  title: "Blog",
};
```

will render:

```
Blog | My Website
```

while pages without a title use:

```
My Website
```

This title is automatically inserted into the HTML `<title>` tag by Next.js, so you usually don't need to use `<Head>` manually in the App Router.





---




# `Global Title Template` :

A **Global Title Template** in Next.js lets you define a consistent format for page titles across your entire application.

Instead of manually writing:

```text
Home | My Website
About | My Website
Blog | My Website
Contact | My Website
```

for every page, you define the format once in `app/layout.tsx`.

---

## Step 1: Configure the Template

In your root layout:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### What does this mean?

* `default`: Used when a page doesn't provide its own title.
* `template`: Used when a page provides a title.
* `%s`: Placeholder that gets replaced by the page title.

---

## Step 2: Define Titles in Pages

### Home Page

```tsx
export const metadata = {
  title: "Home",
};

export default function Home() {
  return <h1>Home</h1>;
}
```

Browser tab title:

```text
Home | My Website
```

---

### About Page

```tsx
export const metadata = {
  title: "About",
};

export default function About() {
  return <h1>About</h1>;
}
```

Browser tab title:

```text
About | My Website
```

---

### Page Without a Title

```tsx
export default function Contact() {
  return <h1>Contact</h1>;
}
```

Browser tab title:

```text
My Website
```

because Next.js falls back to:

```tsx
default: "My Website"
```

---

## Dynamic Pages

For a blog route:

```tsx
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Blog ${id}`,
  };
}
```

For `/blog/5`, the final title becomes:

```text
Blog 5 | My Website
```

Next.js takes:

```text
Blog 5
```

and inserts it into:

```text
%s | My Website
```

---

## Nested Layouts Can Have Their Own Templates

You can also define a different template for a section of your app.

Example:

```tsx
// app/admin/layout.tsx

export const metadata = {
  title: {
    template: "%s | Admin Panel",
  },
};
```

Then:

```tsx
// app/admin/users/page.tsx

export const metadata = {
  title: "Users",
};
```

Produces:

```text
Users | Admin Panel
```

instead of:

```text
Users | My Website
```

This is useful when different sections (Admin, Dashboard, Store, Blog) need their own branding.




---



# `meta title ` :

If you're asking **what kinds of title metadata settings exist in Next.js**, there are several options beyond just a simple string.

## 1. Simple Title

```tsx
export const metadata = {
  title: "Home",
};
```

Result:

```html
<title>Home</title>
```

---

## 2. Default Title

Used when a page doesn't specify its own title.

```tsx
export const metadata = {
  title: {
    default: "My Website",
  },
};
```

If a page has no title:

```html
<title>My Website</title>
```

---

## 3. Template Title

Adds a common suffix or prefix to all page titles.

```tsx
export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
};
```

Page:

```tsx
export const metadata = {
  title: "Blog",
};
```

Result:

```html
<title>Blog | My Website</title>
```

Here `%s` is replaced with the page title.

---

## 4. Absolute Title

Sometimes you want to ignore the parent layout template.

```tsx
export const metadata = {
  title: {
    absolute: "Login",
  },
};
```

Even if the root layout has:

```tsx
template: "%s | My Website"
```

the result will be:

```html
<title>Login</title>
```

not:

```html
<title>Login | My Website</title>
```

---

## Hierarchy Example

```tsx
// app/layout.tsx
export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
};
```

### Page 1

```tsx
export const metadata = {
  title: "About",
};
```

Result:

```html
<title>About | My Website</title>
```

### Page 2

```tsx
export const metadata = {
  title: {
    absolute: "Login",
  },
};
```

Result:

```html
<title>Login</title>
```

### Page 3 (No title)

```tsx
export default function Page() {}
```

Result:

```html
<title>My Website</title>
```

### Summary

| Type             | Purpose                           |        |
| ---------------- | --------------------------------- | ------ |
| `title: "Home"`  | Simple page title                 |        |
| `title.default`  | Fallback title                    |        |
| `title.template` | Common format (`%s                | Site`) |
| `title.absolute` | Ignore parent template completely |        |

These are the main title-related metadata configurations available in the Next.js App Router.






---




# `Link` :

In Next.js, the **`Link` component** is used for client-side navigation between pages. It prevents a full page reload and makes navigation faster.

## Basic Navigation

```tsx id="xmkxvb"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">About Page</Link>
    </div>
  );
}
```

When the user clicks the link, Next.js navigates to `/about` without reloading the browser.

---

## Navigation with Dynamic Routes

Suppose you have:

```text id="vkt0n0"
app/
 └─ blog/
     └─ [id]/
         └─ page.tsx
```

Navigate to a specific blog:

```tsx id="7jmkpn"
<Link href="/blog/1">Blog 1</Link>
```

Or dynamically:

```tsx id="vjbf0t"
const id = 5;

<Link href={`/blog/${id}`}>Blog 5</Link>
```

---

## Multiple Links

```tsx id="qcdl7i"
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
```

---

## Styling Links

```tsx id="b6r0rh"
<Link
  href="/about"
  className="text-blue-500 hover:underline"
>
  About
</Link>
```

---

## Opening in a New Tab

For external websites, use a normal anchor tag:

```tsx id="i8w0xg"
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Website
</a>
```

`Link` is mainly intended for internal Next.js routes.

---

## Programmatic Navigation

If navigation happens after a button click or form submission, use `useRouter()`.

```tsx id="2spvgh"
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      Go to About
    </button>
  );
}
```

Common methods:

```tsx id="bd9hwz"
router.push("/about");      // Navigate
router.replace("/about");   // Replace current history entry
router.back();              // Go back
router.forward();           // Go forward
router.refresh();           // Refresh server data
```

### When to Use What?

| Situation                       | Use                                   |
| ------------------------------- | ------------------------------------- |
| Navigation via text/menu links  | `Link`                                |
| Navigation after a button click | `router.push()`                       |
| Redirect after form submission  | `router.push()` or `router.replace()` |
| Dynamic URLs                    | `Link href={\`/blog/${id}`}`          |

For most navigation in headers, sidebars, and menus, prefer **`Link`** because it gives Next.js prefetching and faster page transitions.





---




# `replace` :

### `router.replace()` in Next.js

`replace()` navigates to a new page **without adding a new entry to the browser history**.

```tsx id="k0qjlwm"
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button onClick={() => router.replace("/dashboard")}>
      Go to Dashboard
    </button>
  );
}
```

---

## Difference Between `push()` and `replace()`

### `push()`

```tsx id="6krvwea"
router.push("/dashboard");
```

History:

```text id="3ax7e0q"
Home → Dashboard
```

Pressing the browser Back button:

```text id="cqg56ca"
Dashboard → Home
```

because a new history entry was added.

---

### `replace()`

```tsx id="f6vww2j"
router.replace("/dashboard");
```

History:

```text id="jcc9g2f"
Home (replaced by Dashboard)
```

Pressing Back:

```text id="i04flzt"
Does not return to Home
```

because the current entry was replaced.

---

## Common Use Cases

### Login Redirect

After login, users usually shouldn't go back to the login page.

```tsx id="y7ljhpn"
router.replace("/dashboard");
```

Instead of:

```tsx id="6eb4vwi"
router.push("/dashboard");
```

---

### Redirecting Invalid URLs

```tsx id="4y8k6hu"
router.replace("/404");
```

---

### Changing Query Parameters

```tsx id="5s6vjlwm"
router.replace("/products?page=2");
```

Updates the URL without cluttering browser history.

---

## Example

```tsx id="6lmywhg"
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // login logic
    router.replace("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

After login:

```text id="ifjlwmq"
Login → Dashboard
```

and the user can't go back to the login page using the browser Back button.

### Quick Summary

| Method                     | Adds History Entry? | Back Button Returns? |
| -------------------------- | ------------------- | -------------------- |
| `router.push("/about")`    | ✅ Yes               | ✅ Yes                |
| `router.replace("/about")` | ❌ No                | ❌ No                 |

Use **`push()`** for normal navigation and **`replace()`** when the previous page should no longer be reachable through browser history.





---




# `active links` :

An **active link** is a navigation link that looks different when the user is currently on that page.

In the Next.js App Router, use `usePathname()` from `next/navigation`.

### Example

```tsx id="u9cl48"
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "text-red-500" : ""}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? "text-red-500" : ""}
      >
        About
      </Link>

      <Link
        href="/blogs"
        className={pathname === "/blogs" ? "text-red-500" : ""}
      >
        Blogs
      </Link>
    </nav>
  );
}
```

When the URL is:

```text
/about
```

the About link gets the active class.

---

## Reusable Active Link Component

```tsx id="s0j7i1"
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ActiveLink({
  href,
  children,
}: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "font-bold text-blue-500" : ""}
    >
      {children}
    </Link>
  );
}
```

Usage:

```tsx id="l77ltj"
<ActiveLink href="/">Home</ActiveLink>
<ActiveLink href="/about">About</ActiveLink>
<ActiveLink href="/blogs">Blogs</ActiveLink>
```

---

## For Nested Routes

If you're on:

```text
/blogs/1
```

and want the Blogs menu item to stay active:

```tsx id="v3d0jv"
const isActive = pathname.startsWith("/blogs");
```

Example:

```tsx id="y3clcr"
<Link
  href="/blogs"
  className={
    pathname.startsWith("/blogs")
      ? "text-blue-500 font-bold"
      : ""
  }
>
  Blogs
</Link>
```

This will be active for:

```text
/blogs
/blogs/1
/blogs/2
/blogs/100
```

which is often the desired behavior for navigation menus.




---




# `params and searchparams` :

In Next.js App Router, **`params`** and **`searchParams`** are different things:

| Feature     | `params`                 | `searchParams`       |
| ----------- | ------------------------ | -------------------- |
| Source      | Dynamic route segments   | Query string         |
| URL Example | `/blogs/123`             | `/blogs?sort=latest` |
| Value       | `{ id: "123" }`          | `{ sort: "latest" }` |
| Defined By  | Folder names like `[id]` | URL query parameters |

---

## 1. `params`

Used for **dynamic routes**.

Folder structure:

```text
app/
└── blogs/
    └── [id]/
        └── page.tsx
```

URL:

```text
/blogs/123
```

Page:

```tsx
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  return <h1>Blog {id}</h1>;
}
```

Result:

```text
Blog 123
```

Here:

```tsx
params = {
  id: "123"
}
```

---

## 2. `searchParams`

Used for query strings.

URL:

```text
/blogs?sort=latest&page=2
```

Page:

```tsx
type Props = {
  searchParams: Promise<{
    sort?: string;
    page?: string;
  }>;
};

export default async function BlogsPage({
  searchParams,
}: Props) {
  const { sort, page } = await searchParams;

  return (
    <>
      <p>Sort: {sort}</p>
      <p>Page: {page}</p>
    </>
  );
}
```

Result:

```text
Sort: latest
Page: 2
```

---

## Using Both Together

URL:

```text
/blogs/123?comment=true
```

Folder:

```text
app/blogs/[id]/page.tsx
```

Page:

```tsx
type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ comment?: string }>;
};

export default async function BlogPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { comment } = await searchParams;

  return (
    <>
      <h1>Blog {id}</h1>
      <p>Comment Mode: {comment}</p>
    </>
  );
}
```

For:

```text
/blogs/123?comment=true
```

you get:

```tsx
params = {
  id: "123"
}

searchParams = {
  comment: "true"
}
```

---

## Client Components

In client components, use hooks instead.

### Get route params

```tsx
"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return <p>{params.id}</p>;
}
```

### Get query params

```tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");

  return <p>{sort}</p>;
}
```

---

### Example URLs

```text
/blogs/10
```

```tsx
params = { id: "10" }
searchParams = {}
```

---

```text
/blogs/10?sort=latest
```

```tsx
params = { id: "10" }
searchParams = { sort: "latest" }
```

A simple way to remember it:

* **`params` → comes from the path** (`/blogs/10`)
* **`searchParams` → comes from the query string** (`?sort=latest&page=2`)





---




# `Programmatic navigation` :

**Programmatic navigation** means navigating through code instead of clicking a `<Link>`.

In Next.js App Router, use the `useRouter()` hook from `next/navigation`.

---

## Basic Example

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      Go to About
    </button>
  );
}
```

When the button is clicked, the user is navigated to `/about`.

---

## `router.push()`

Adds a new entry to browser history.

```tsx
router.push("/about");
```

History:

```text
Home → About
```

The browser Back button returns to Home.

---

## `router.replace()`

Replaces the current history entry.

```tsx
router.replace("/dashboard");
```

History:

```text
Login → Dashboard
```

The Login page is replaced, so Back won't return to it.

Common after login/logout flows.

---

## Dynamic Routes

Navigate to a dynamic page:

```tsx
router.push(`/blogs/${id}`);
```

Example:

```tsx
const id = 5;

router.push(`/blogs/${id}`);
```

Navigates to:

```text
/blogs/5
```

---

## With Query Parameters

```tsx
router.push("/blogs?sort=latest&page=2");
```

Navigates to:

```text
/blogs?sort=latest&page=2
```

---

## Go Back

```tsx
router.back();
```

Equivalent to clicking the browser Back button.

---

## Go Forward

```tsx
router.forward();
```

Equivalent to clicking the browser Forward button.

---

## Refresh Current Route

```tsx
router.refresh();
```

Refreshes the current route and re-fetches server data without a full browser reload.

Useful when data has changed on the server.

---

## After Form Submission

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async () => {
    // login logic

    router.replace("/dashboard");
  };

  return <button onClick={handleSubmit}>Login</button>;
}
```

---

## `Link` vs `router.push()`

### Use `Link`

```tsx
<Link href="/about">About</Link>
```

For normal navigation menus, headers, sidebars, etc.

### Use `router.push()`

```tsx
<button onClick={() => router.push("/about")}>
  Go
</button>
```

When navigation depends on user actions, API responses, form submissions, conditions, timers, etc.

---

### Summary

| Method                    | Purpose                      |
| ------------------------- | ---------------------------- |
| `router.push("/page")`    | Navigate and keep history    |
| `router.replace("/page")` | Navigate and replace history |
| `router.back()`           | Go to previous page          |
| `router.forward()`        | Go to next page              |
| `router.refresh()`        | Re-fetch current route data  |

`useRouter()` can only be used in **Client Components**, so the file must start with:

```tsx
"use client";
```




----




# `template.tsx` :

In Next.js App Router, a **`template.tsx`** is similar to a layout, but it behaves differently during navigation.

## `layout.tsx` vs `template.tsx`

### `layout.tsx`

* Persists between route navigations.
* Does **not remount** when moving between pages inside the same segment.
* Preserves state.

Example:

```text
app/
├─ layout.tsx
├─ about/page.tsx
└─ contact/page.tsx
```

When navigating:

```text
/about → /contact
```

the layout stays mounted.

---

### `template.tsx`

* Creates a **new instance** on every navigation.
* Remounts each time a child page changes.
* Resets state and reruns effects.

Example:

```text
app/
├─ template.tsx
├─ about/page.tsx
└─ contact/page.tsx
```

When navigating:

```text
/about → /contact
```

the template is recreated.

---

## Example

### `app/template.tsx`

```tsx
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Template Rendered");

  return (
    <div>
      <h1>Template</h1>
      {children}
    </div>
  );
}
```

Every route change inside that segment causes the template to remount.

---

## Why Use a Template?

A common use case is when you want animations or effects to restart on navigation.

```tsx
"use client";

import { useEffect } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Animation started");
  }, []);

  return <>{children}</>;
}
```

Because the template remounts, the effect runs on every page navigation.

With a layout, it would only run once.

---

## State Example

### Layout

```tsx
"use client";

import { useState } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      {children}
    </>
  );
}
```

Navigate between pages:

```text
/about → /contact
```

`count` is preserved.

---

### Template

Put the same code in `template.tsx`.

Navigate:

```text
/about → /contact
```

The component remounts and:

```text
count = 0
```

again.

---

## Route Hierarchy Example

```text
app/
├─ layout.tsx
├─ template.tsx
├─ page.tsx
├─ about/
│  └─ page.tsx
└─ blogs/
   └─ page.tsx
```

Rendering order:

```text
layout
 └─ template
     └─ page
```

The layout persists.

The template remounts when the page changes.

---

## When to Use Which?

### Use `layout.tsx`

* Navigation bars
* Sidebars
* Headers/footers
* Shared state
* Context providers
* Anything that should persist

### Use `template.tsx`

* Page transition animations
* Resetting component state on navigation
* Re-running effects on every route change
* Fresh instances for each page visit

### Quick Rule

* **Layout = persistent wrapper**
* **Template = remounting wrapper**

That's the core difference between `layout.tsx` and `template.tsx` in Next.js.




---



# `loading.tsx` :

In Next.js App Router, a **Loading UI** is created using a special file named `loading.tsx`.

### Folder Structure

```text
app/
├── page.tsx
├── loading.tsx
└── about/
    ├── page.tsx
    └── loading.tsx
```

---

### Root Loading UI

`app/loading.tsx`

```tsx
export default function Loading() {
  return <h2>Loading...</h2>;
}
```

When a page in the `app` segment is loading, Next.js automatically shows this component.

---

### Example with Delayed Data

`app/page.tsx`

```tsx
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Data Loaded";
}

export default async function Home() {
  const data = await getData();

  return <h1>{data}</h1>;
}
```

While waiting 3 seconds, the user sees:

```text
Loading...
```

Then:

```text
Data Loaded
```

---

### Route-Specific Loading

You can also add a loading UI for a specific route:

```text
app/
└── about/
    ├── page.tsx
    └── loading.tsx
```

`app/about/loading.tsx`

```tsx
export default function AboutLoading() {
  return <h2>Loading About Page...</h2>;
}
```

This loading UI appears only for the `/about` route segment.

---

### How It Works Internally

When you navigate:

```text
Home → About
```

Next.js does something conceptually similar to:

```tsx
<Suspense fallback={<AboutLoading />}>
  <AboutPage />
</Suspense>
```

You don't have to write the `Suspense` yourself—Next.js automatically wires it up when it finds a `loading.tsx` file.

---

### Typical Loading UI

Instead of plain text, many apps use skeletons:

```tsx
export default function Loading() {
  return (
    <div>
      <div className="h-6 w-48 bg-gray-300 animate-pulse rounded mb-4" />
      <div className="h-4 w-full bg-gray-300 animate-pulse rounded mb-2" />
      <div className="h-4 w-full bg-gray-300 animate-pulse rounded" />
    </div>
  );
}
```

This gives users immediate feedback while server data is loading.

### Interview Definition

> `loading.tsx` is a special Next.js App Router file that automatically displays a fallback UI while a route segment or its data is being loaded. Next.js wraps the segment in a React Suspense boundary and renders the loading component until the page is ready.





---



# `error.tsx` :

In Next.js App Router, error handling is done with a special file called **`error.tsx`**.

---

## Folder Structure

```text
app/
├── page.tsx
├── error.tsx
├── loading.tsx
└── about/
    ├── page.tsx
    └── error.tsx
```

---

## Root Error Handler

`app/error.tsx`

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
```

### Why `"use client"`?

`error.tsx` must be a Client Component because:

* It receives the error object.
* It uses the `reset()` function.
* Users can interact with it (retry button).

---

## Throwing an Error

`app/about/page.tsx`

```tsx
export default function About() {
  throw new Error("Database connection failed");

  return <h1>About Page</h1>;
}
```

Result:

```text
Something went wrong!
Database connection failed
[Try Again]
```

instead of a crash screen.

---

## Route-Specific Error Handling

You can place an `error.tsx` inside a route segment:

```text
app/
└── about/
    ├── page.tsx
    └── error.tsx
```

`app/about/error.tsx`

```tsx
"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h1>About Page Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

This catches errors only within the `/about` segment.

---

## `reset()` Function

Example:

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>

      <button onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
```

When clicked:

```tsx id="0jfwjv"
reset();
```

Next.js tries to re-render the route segment.

Think of it as:

```tsx id="9h8nqf"
// pseudo code
reloadCurrentRoute();
```

without refreshing the entire browser page.

---

## Example with Random Error

`app/about/page.tsx`

```tsx
export default function About() {
  const random = Math.random();

  if (random > 0.5) {
    throw new Error("Random Error Occurred");
  }

  return <h1>About Page Loaded Successfully</h1>;
}
```

Sometimes you'll see:

```text
About Page Loaded Successfully
```

Sometimes:

```text
Random Error Occurred
[Retry]
```

Pressing Retry calls `reset()` and tries again.

---

## `error.tsx` vs `not-found.tsx`

### Error

```tsx
throw new Error("Something broke");
```

Handled by:

```text
error.tsx
```

Example:

```text
Database Error
API Error
Unexpected Exception
```

---

### Not Found

```tsx
import { notFound } from "next/navigation";

notFound();
```

Handled by:

```text
not-found.tsx
```

Example:

```text
Blog ID doesn't exist
Product not found
User not found
```

---

## Loading vs Error vs Not Found

| Situation              | File Used       |
| ---------------------- | --------------- |
| Data is loading        | `loading.tsx`   |
| Unexpected exception   | `error.tsx`     |
| Resource doesn't exist | `not-found.tsx` |

Example flow:

```text
User visits /blogs/101
        │
        ▼
Loading...
        │
        ▼
Check Blog ID
        │
 ┌──────┴──────┐
 │             │
Exists      Doesn't Exist
 │             │
 ▼             ▼
Show Page   notFound()
                │
                ▼
          not-found.tsx
```

If a database call crashes:

```text
Loading...
     │
     ▼
throw Error()
     │
     ▼
error.tsx
```

### Interview Answer

> `error.tsx` is a special App Router file used to catch runtime errors in a route segment. It acts as a React Error Boundary, displays a fallback UI, receives the `error` object and a `reset()` function, and prevents the entire application from crashing when a route throws an exception.





---



# `handling errors in nested layouts` :

Nested error handling is one of the nicest features of the App Router.

Think of `error.tsx` as an **Error Boundary for a route segment**.

---

# Example Structure

```text
app/
├── layout.tsx
├── error.tsx
├── page.tsx
│
└── dashboard/
    ├── layout.tsx
    ├── error.tsx
    ├── page.tsx
    │
    └── analytics/
        └── page.tsx
```

You now have:

* Root Error Boundary → `app/error.tsx`
* Dashboard Error Boundary → `app/dashboard/error.tsx`

---

# Visual Hierarchy

```text
Root Layout
│
├── Root Error Boundary
│
└── Dashboard Layout
      │
      ├── Dashboard Error Boundary
      │
      └── Analytics Page
```

---

# Case 1: Error in Dashboard Page

`app/dashboard/page.tsx`

```tsx id="n1"
export default function Dashboard() {
  throw new Error("Dashboard crashed");
}
```

Next.js looks for the nearest error boundary.

It finds:

```text
app/dashboard/error.tsx
```

So only the dashboard section is replaced.

### Result

```text
Root Layout
│
└── Dashboard Error UI
```

The root layout remains visible.

---

# Case 2: Error in Analytics Page

`app/dashboard/analytics/page.tsx`

```tsx id="n2"
export default function Analytics() {
  throw new Error("Analytics crashed");
}
```

Next.js searches upward:

```text
analytics/
    ❌ no error.tsx

dashboard/
    ✅ error.tsx found
```

So:

```text
dashboard/error.tsx
```

handles the error.

---

# Case 3: No Dashboard Error File

Structure:

```text
app/
├── error.tsx
└── dashboard/
    ├── page.tsx
```

Dashboard throws:

```tsx id="n3"
throw new Error("Dashboard crashed");
```

Search path:

```text
dashboard/
   ❌ no error.tsx

app/
   ✅ error.tsx
```

Root error boundary catches it.

---

# Real Example

## Root Error

`app/error.tsx`

```tsx id="n4"
"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h1>Global Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

---

## Dashboard Error

`app/dashboard/error.tsx`

```tsx id="n5"
"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h1>Dashboard Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

---

## Analytics Page

`app/dashboard/analytics/page.tsx`

```tsx id="n6"
export default function Analytics() {
  throw new Error("Analytics failed");
}
```

Visit:

```text
/dashboard/analytics
```

Output:

```text
Dashboard Error

Analytics failed
```

NOT:

```text
Global Error
```

because the nearest boundary wins.

---

# Error Boundary Bubbling

Just like JavaScript event bubbling, errors bubble upward.

```text
analytics/page.tsx
      │
      ▼
analytics/error.tsx ? ❌
      │
      ▼
dashboard/error.tsx ? ✅
      │
      ▼
STOP
```

If none exists:

```text
dashboard/error.tsx ? ❌
      │
      ▼
app/error.tsx ? ✅
```

---

# Layout Errors

Suppose:

`app/dashboard/layout.tsx`

```tsx id="n7"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Layout crashed");

  return <>{children}</>;
}
```

Question:

**Will `dashboard/error.tsx` catch it?**

### No.

A route segment's `error.tsx` catches errors in its children, not errors in the same layout that owns it.

So:

```text
dashboard/layout.tsx
```

cannot be caught by:

```text
dashboard/error.tsx
```

The error bubbles to the parent boundary:

```text
app/error.tsx
```

---

# Important Rule

Given:

```text
dashboard/
├── layout.tsx
├── error.tsx
└── page.tsx
```

### Error in page.tsx

```text
dashboard/error.tsx
```

handles it.

### Error in layout.tsx

```text
app/error.tsx
```

handles it.

Because the layout sits above its own error boundary.

---

# Test This Yourself

### Structure

```text
app/
├── error.tsx
└── dashboard/
    ├── layout.tsx
    ├── error.tsx
    └── page.tsx
```

### dashboard/layout.tsx

```tsx id="n8"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Layout Error");

  return <>{children}</>;
}
```

### dashboard/error.tsx

```tsx id="n9"
"use client";

export default function Error() {
  return <h1>Dashboard Error</h1>;
}
```

### app/error.tsx

```tsx id="n10"
"use client";

export default function Error() {
  return <h1>Global Error</h1>;
}
```

Visit:

```text
/dashboard
```

You will see:

```text
Global Error
```

not:

```text
Dashboard Error
```

---

# Interview Summary

For a route:

```text
app/dashboard/analytics/page.tsx
```

Next.js catches errors using the **nearest parent `error.tsx`**.

Search order:

```text
analytics/error.tsx
      ↓
dashboard/error.tsx
      ↓
app/error.tsx
```

The first one found handles the error.

A layout's own `error.tsx` does **not** catch errors thrown inside that same layout; those errors are caught by the next parent error boundary.




---



# `handling errors in layouts` :

This is a subtle but very important Next.js App Router concept.

## How `error.tsx` and `layout.tsx` relate

Consider:

```text
app/
├── error.tsx
└── dashboard/
    ├── layout.tsx
    ├── error.tsx
    └── page.tsx
```

### Case 1: Error in `page.tsx`

`app/dashboard/page.tsx`

```tsx
export default function DashboardPage() {
  throw new Error("Page crashed");
}
```

Result:

```text
dashboard/error.tsx
```

handles it.

Reason:

```text
dashboard/layout.tsx
    └── dashboard/error.tsx
            └── dashboard/page.tsx
```

The page is a child of the error boundary.

---

## Case 2: Error in `layout.tsx`

`app/dashboard/layout.tsx`

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Layout crashed");

  return <>{children}</>;
}
```

Now many people expect:

```text
dashboard/error.tsx
```

to catch it.

It does **not**.

Instead:

```text
app/error.tsx
```

catches it.

---

## Why?

Think of the render tree like this:

```text
app/layout.tsx
│
├── app/error.tsx
│
└── dashboard/layout.tsx
      │
      ├── dashboard/error.tsx
      │
      └── dashboard/page.tsx
```

The `dashboard/error.tsx` boundary is created **inside** the dashboard layout.

If the layout itself crashes before rendering its children, the dashboard error boundary never gets a chance to mount.

So Next.js looks for the next parent error boundary:

```text
dashboard/layout.tsx throws
        ↓
dashboard/error.tsx not mounted yet
        ↓
app/error.tsx catches
```

---

# Easy Rule

### Error thrown in:

```text
dashboard/page.tsx
dashboard/loading.tsx
dashboard/template.tsx
dashboard/analytics/page.tsx
```

✅ Caught by:

```text
dashboard/error.tsx
```

---

### Error thrown in:

```text
dashboard/layout.tsx
```

❌ Not caught by:

```text
dashboard/error.tsx
```

✅ Caught by:

```text
app/error.tsx
```

---

# Test It Yourself

### Structure

```text
app/
├── error.tsx
└── dashboard/
    ├── layout.tsx
    ├── error.tsx
    └── page.tsx
```

### Root Error

`app/error.tsx`

```tsx
"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h1>Global Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

### Dashboard Error

`app/dashboard/error.tsx`

```tsx
"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div>
      <h1>Dashboard Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

### Dashboard Layout

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Dashboard Layout Failed");

  return <>{children}</>;
}
```

Visit:

```text
/dashboard
```

Output:

```text
Global Error
Dashboard Layout Failed
```

You will **not** see:

```text
Dashboard Error
```

---

# How to Handle Layout Errors Locally?

Create a parent route group or parent segment with its own error boundary.

Example:

```text
app/
├── error.tsx
└── (admin)/
    ├── error.tsx
    └── dashboard/
        ├── layout.tsx
        └── page.tsx
```

Now if `dashboard/layout.tsx` crashes:

```text
(admin)/error.tsx
```

can catch it, because it is a parent boundary.

---

## Interview Answer

> A route segment's `error.tsx` catches errors from its child pages and nested segments, but it does not catch errors thrown inside its own `layout.tsx`. If a layout throws an error, the error bubbles to the nearest parent error boundary, because the segment's error boundary is rendered inside the layout and cannot catch failures that occur before it mounts.




---




# `global-error.tsx` :

Exactly. For errors in the **root layout**, Next.js provides **`global-error.tsx`**.

## Why `global-error.tsx` exists

`app/error.tsx` cannot catch errors from `app/layout.tsx` because the root layout must render before `error.tsx` can be mounted.

To handle errors that occur in the root layout or root template, Next.js uses:

```text
app/
├── layout.tsx
├── error.tsx
└── global-error.tsx
```

---

## Example

### `app/layout.tsx`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Root layout crashed");

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### `app/global-error.tsx`

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </body>
    </html>
  );
}
```

Notice that `global-error.tsx` must include its own:

```tsx
<html>
<body>
```

because it replaces the entire root layout.

---

## Difference Between `error.tsx` and `global-error.tsx`

| File               | Catches                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `error.tsx`        | Errors in pages, templates, and nested route segments                                    |
| `global-error.tsx` | Errors in the root layout (`app/layout.tsx`) and errors that escape all other boundaries |

---

## Interview Answer

> `app/error.tsx` does not catch errors thrown in `app/layout.tsx` because it is rendered inside the root layout. To handle root layout failures, Next.js provides `app/global-error.tsx`, which replaces the entire application UI and therefore must render its own `<html>` and `<body>` tags.




---



# `Parallel Routes` :

Parallel Routes are one of the more advanced features in the Next.js App Router.

They let you render **multiple route segments side-by-side in the same layout**, independently of each other.

---

# The Problem They Solve

Imagine a dashboard:

```text
--------------------------------
| Sidebar | Main Content       |
|          |                   |
|          |                   |
--------------------------------
```

Without parallel routes, you'd usually render everything through a single page.

But what if you want:

* Sidebar to have its own navigation
* Main content to change independently
* Modal to open as a route
* Different sections to load separately

That's where Parallel Routes help.

---

# Slot Syntax (`@folder`)

Parallel routes are created using folders that start with `@`.

Example:

```text
app/
└── dashboard/
    ├── layout.tsx
    ├── @analytics/
    │   └── page.tsx
    └── @team/
        └── page.tsx
```

Notice:

```text
@analytics
@team
```

These are called **slots**.

---

# Layout Receives Slots as Props

`dashboard/layout.tsx`

```tsx
export default function DashboardLayout({
  analytics,
  team,
}: {
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      <div>{analytics}</div>
      <div>{team}</div>
    </div>
  );
}
```

Next.js automatically passes the slot content.

---

# Example

### Analytics Page

```tsx
// app/dashboard/@analytics/page.tsx

export default function Analytics() {
  return <h1>Analytics Data</h1>;
}
```

### Team Page

```tsx
// app/dashboard/@team/page.tsx

export default function Team() {
  return <h1>Team Members</h1>;
}
```

Rendered:

```text
Analytics Data
Team Members
```

Both appear simultaneously.

---

# Visual Structure

```text
app/
└── dashboard/
    ├── layout.tsx
    ├── @analytics/
    │   └── page.tsx
    └── @team/
        └── page.tsx
```

Layout:

```tsx
<div className="grid grid-cols-2">
  <div>{analytics}</div>
  <div>{team}</div>
</div>
```

Output:

```text
----------------------------------
| Analytics Data | Team Members |
----------------------------------
```

---

# `default.tsx`

What happens if a slot doesn't have an active route?

You provide a fallback:

```text
@analytics/
└── default.tsx
```

```tsx
export default function DefaultAnalytics() {
  return <h1>No Analytics Selected</h1>;
}
```

This is similar to a fallback UI for that slot.

---

# Parallel Routes + Loading

Each slot can have its own loading state.

```text
@analytics/
├── page.tsx
└── loading.tsx

@team/
├── page.tsx
└── loading.tsx
```

Analytics can load while Team is already visible.

---

# Parallel Routes + Error Handling

Each slot can have its own error boundary.

```text
@analytics/
├── page.tsx
└── error.tsx
```

If Analytics crashes:

```text
Analytics Error
```

can show while Team remains visible.

---

# Most Common Real-World Use: Modals

Structure:

```text
app/
├── page.tsx
└── @modal/
    └── login/
        └── page.tsx
```

URL:

```text
/login
```

Instead of navigating away, Next.js can render:

```text
Home Page
    +
Login Modal
```

using Parallel Routes and Intercepting Routes together.

This is how many modern apps implement URL-driven modals.

---

# Important Rule

A slot folder:

```text
@analytics
```

does **not** affect the URL.

URL remains:

```text
/dashboard
```

not:

```text
/analytics
```

The `@` folders are layout slots, not URL segments.

---

# Interview Definition

> Parallel Routes allow multiple pages or route segments to be rendered simultaneously within the same layout using named slots (`@folder`). The layout receives each slot as a prop, enabling independent loading, error handling, and rendering of different UI regions such as dashboards, sidebars, and modals.




---



# `hierarchy` :

If you want to understand the **hierarchy (which wraps which)**, think of it as a tree from top → bottom.

For a route like `/dashboard/analytics`:

```text
global-error.tsx
    │
    ▼
layout.tsx (Root Layout)
    │
    ├── metadata
    ├── template.tsx
    │
    ▼
dashboard/layout.tsx
    │
    ├── metadata
    ├── dashboard/template.tsx
    │
    ▼
analytics/layout.tsx
    │
    ▼
loading.tsx (shown temporarily if needed)
    │
    ▼
error.tsx (catches errors below it)
    │
    ▼
page.tsx
```

---

A more visual representation:

```html
<global-error>
    <root-layout>

        <root-template>

            <dashboard-layout>

                <dashboard-template>

                    <analytics-layout>

                        <error-boundary>

                            <loading-fallback>

                                <page />

                            </loading-fallback>

                        </error-boundary>

                    </analytics-layout>

                </dashboard-template>

            </dashboard-layout>

        </root-template>

    </root-layout>
</global-error>
```

---

### Where each file sits

```html
<global-error.tsx>

    <layout.tsx>

        <template.tsx>

            <error.tsx>

                <loading.tsx>

                    <page.tsx />

                </loading.tsx>

            </error.tsx>

        </template.tsx>

    </layout.tsx>

</global-error.tsx>
```

---

### What each one does

```html
<global-error>  <!-- catches root layout crashes -->

    <layout>     <!-- persistent UI -->

        <template>  <!-- remounts every navigation -->

            <error> <!-- catches runtime errors -->

                <loading> <!-- temporary loading UI -->

                    <page /> <!-- actual route content -->

                </loading>

            </error>

        </template>

    </layout>

</global-error>
```

---

### Example with nested layouts

Folder:

```text
app/
├── layout.tsx
│
└── dashboard/
    ├── layout.tsx
    │
    └── analytics/
        └── page.tsx
```

Render tree:

```html
<root-layout>

    <dashboard-layout>

        <analytics-page />

    </dashboard-layout>

</root-layout>
```

If templates exist:

```html
<root-layout>

    <root-template>

        <dashboard-layout>

            <dashboard-template>

                <analytics-page />

            </dashboard-template>

        </dashboard-layout>

    </root-template>

</root-layout>
```

The easiest rule to remember is:

```text
GlobalError
   └── Layout
         └── Template
               └── Error
                     └── Loading
                           └── Page
```

and for nested routes:

```text
Root Layout
   └── Child Layout
         └── Child Layout
               └── Page
```

Everything ultimately wraps the `page.tsx`, which is always the innermost route content.

