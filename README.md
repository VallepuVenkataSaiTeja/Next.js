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