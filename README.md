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




---




# `Unmatched Parallel Route Slots` :

This is one of the trickiest App Router concepts, so let's build it step by step.

## First: What is a Parallel Route Slot?

Suppose you have:

```text
app/
└── dashboard/
    ├── layout.tsx
    ├── @team/
    │   └── page.tsx
    └── @analytics/
        └── page.tsx
```

The layout receives both slots:

```tsx
export default function DashboardLayout({
  team,
  analytics,
}: {
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      <div>{team}</div>
      <div>{analytics}</div>
    </>
  );
}
```

Think of it as:

```html
<DashboardLayout>
    <TeamSlot />
    <AnalyticsSlot />
</DashboardLayout>
```

---

## What Happens During Normal Navigation?

Next.js knows what content belongs in each slot.

```text
/dashboard
```

renders:

```html
<DashboardLayout>
    <TeamPage />
    <AnalyticsPage />
</DashboardLayout>
```

Everything is matched.

---

# The Problem: Page Refresh

Imagine you're on a route where only one slot is active.

Example structure:

```text
app/
└── dashboard/
    ├── layout.tsx
    ├── @team/
    │   └── page.tsx
    └── @analytics/
        └── views/
            └── page.tsx
```

You navigate to:

```text
/dashboard/views
```

The Analytics slot has content:

```html
<AnalyticsViewsPage />
```

But what should the Team slot show?

After a full page refresh, Next.js only knows the URL:

```text
/dashboard/views
```

The URL does **not** tell Next.js what should be inside the Team slot.

So the Team slot becomes **unmatched**.

---

## Unmatched Slot

An unmatched slot means:

> Next.js cannot determine what component should render in that parallel route slot for the current URL.

Visual:

```html
<DashboardLayout>

    <TeamSlot>
        ????
    </TeamSlot>

    <AnalyticsSlot>
        <AnalyticsViewsPage />
    </AnalyticsSlot>

</DashboardLayout>
```

The `????` is the unmatched slot.

---

## How Next.js Solves It

Create:

```text
app/
└── dashboard/
    └── @team/
        └── default.tsx
```

```tsx
export default function Default() {
  return <h2>Select a team</h2>;
}
```

Now when the slot is unmatched:

```html
<DashboardLayout>

    <TeamSlot>
        <Default />
    </TeamSlot>

    <AnalyticsSlot>
        <AnalyticsViewsPage />
    </AnalyticsSlot>

</DashboardLayout>
```

---

## Why `default.tsx` Exists

Its job is:

> Provide fallback content when a parallel route slot has no matching route.

Think:

```text
Slot matched?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
page.tsx   default.tsx
```

---

## Real Example: Dashboard

Imagine:

```text
app/
└── dashboard/
    ├── layout.tsx
    ├── @notifications/
    │   ├── page.tsx
    │   └── default.tsx
    │
    └── @revenue/
        ├── page.tsx
        └── default.tsx
```

Layout:

```tsx
export default function Layout({
  notifications,
  revenue,
}: {
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      {notifications}
      {revenue}
    </>
  );
}
```

Refreshing a URL may leave one slot without a matching route.

Next.js then renders:

```tsx
@notifications/default.tsx
```

or

```tsx
@revenue/default.tsx
```

instead of crashing.

---

## Easy Mental Model

Think of parallel slots as independent mini-pages:

```html
<Layout>

    <SlotA />
    <SlotB />
    <SlotC />

</Layout>
```

When Next.js can't determine what belongs in a slot:

```html
<SlotA />
<SlotB />
?????
```

it renders:

```html
<SlotA />
<SlotB />
<Default />
```

using that slot's `default.tsx`.

---

### One-Line Definition

> An unmatched parallel route slot occurs when Next.js cannot determine what content should be rendered in a slot for the current URL (often after a refresh or direct navigation). In that case, Next.js renders the slot's `default.tsx` as fallback content.




---




# `conditional routes` :

In Next.js, **"conditional routes"** is not an official routing feature like layouts or parallel routes. Usually people mean:

> Showing or allowing different routes/pages based on a condition.

For example:

* User logged in → show Dashboard
* User not logged in → show Login
* Admin → access Admin page
* Normal user → redirect elsewhere

---

## 1. Conditional Rendering Inside a Route

```tsx id="cond1"
export default function Dashboard() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <h1>Dashboard</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
}
```

URL:

```text id="cond2"
/dashboard
```

The route exists, but the content changes based on a condition.

---

## 2. Conditional Redirects

Server Component:

```tsx id="cond3"
import { redirect } from "next/navigation";

export default function Dashboard() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}
```

Flow:

```text id="cond4"
/dashboard
      │
      ▼
Logged In?
   │
 ┌─┴─┐
 │   │
Yes  No
 │   │
 ▼   ▼
Dashboard  /login
```

---

## 3. Role-Based Routes

```tsx id="cond5"
import { redirect } from "next/navigation";

export default function AdminPage() {
  const role = "user";

  if (role !== "admin") {
    redirect("/");
  }

  return <h1>Admin Panel</h1>;
}
```

Only admins can access the route.

---

## 4. Middleware-Based Conditional Routing

Using `middleware.ts`:

```text id="cond6"
middleware.ts
```

```ts id="cond7"
import { NextResponse } from "next/server";

export function middleware() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}
```

Runs before the route is rendered.

Flow:

```text id="cond8"
Request
   │
   ▼
Middleware
   │
 ┌─┴─┐
 │   │
Allow Redirect
 │      │
 ▼      ▼
Page   Login
```

---

## 5. Conditional Route Groups

Structure:

```text id="cond9"
app/
├── (public)/
│   ├── page.tsx
│   └── about/
│       └── page.tsx
│
└── (admin)/
    └── admin/
        └── page.tsx
```

You can conditionally allow access to the admin group using middleware or authentication checks.

---

## 6. Conditional Dynamic Routes

```tsx id="cond10"
import { notFound } from "next/navigation";

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (Number(id) > 100) {
    notFound();
  }

  return <h1>Blog {id}</h1>;
}
```

Condition:

```text id="cond11"
id <= 100  → Show page
id > 100   → 404
```

---

## Mental Model

```text id="cond12"
User requests route
        │
        ▼
   Condition Check
        │
   ┌────┼────┐
   │    │    │
   ▼    ▼    ▼
Render Redirect 404
Page    Page
```

### Common Interview Answer

> Conditional routing in Next.js means controlling access or navigation based on conditions such as authentication, user roles, feature flags, or route parameters. It is typically implemented using conditional rendering, `redirect()`, `notFound()`, or `middleware.ts` rather than a dedicated routing feature called "conditional routes".




---




# `Intercepting Route` :

**Intercepting Routes** are used when you want to:

> Show a route's content **inside the current page** (often as a modal) instead of performing a full page navigation.

This is one of the main use cases combined with **Parallel Routes**.

---

# Problem Without Intercepting Routes

Suppose you have:

```text
/feed
/photo/1
```

Normal navigation:

```text
/feed
   │
click photo
   │
   ▼
/photo/1
```

The entire page changes.

---

# Desired Behavior

You're on:

```text
/feed
```

and click a photo.

Instead of leaving the feed:

```html
<FeedPage />

<PhotoModal />
```

appears on top.

URL becomes:

```text
/photo/1
```

but visually you're still on the feed page with a modal.

---

# Folder Structure

Example:

```text
app/
├── feed/
│   └── page.tsx
│
├── photo/
│   └── [id]/
│       └── page.tsx
│
└── @modal/
    └── (.)photo/
        └── [id]/
            └── page.tsx
```

Notice:

```text
(.)photo
```

This is an **intercepting route**.

---

# What Does `(.)` Mean?

```text
(.)      = same level
(..)     = one level up
(..)(..) = two levels up
(...)    = from app root
```

Think of it like filesystem navigation:

```text
.   current folder
..  parent folder
```

but applied to routes.

---

# Example Flow

You are on:

```text
/feed
```

Click:

```tsx
<Link href="/photo/1">
  Open Photo
</Link>
```

---

## Client Navigation

Next.js intercepts:

```text
/photo/1
```

and renders:

```html
<FeedPage />

<Modal>
    <PhotoPage />
</Modal>
```

URL:

```text
/photo/1
```

Page:

```text
Feed still visible
Photo opens in modal
```

---

## Browser Refresh

Now refresh:

```text
/photo/1
```

Next.js cannot keep the previous `/feed` page.

So it renders the real route:

```text
app/photo/[id]/page.tsx
```

Result:

```html
<PhotoPage />
```

Full page.

---

# Visual Comparison

### Client Navigation

```text
/feed
   │
click photo
   │
   ▼
/photo/1
```

Rendered:

```html
<FeedPage />

<Modal>
   <PhotoPage />
</Modal>
```

---

### Hard Refresh

```text
/photo/1
```

Rendered:

```html
<PhotoPage />
```

No modal.

---

# Why Use It?

Common examples:

### Instagram

```text
/feed
```

Click post:

```text
/post/123
```

Shows:

```text
Feed + Modal
```

Refresh:

```text
/post/123
```

Shows:

```text
Full Post Page
```

---

### E-commerce

```text
/products
```

Click product:

```text
/product/10
```

Modal preview.

Refresh:

```text
/product/10
```

Full product page.

---

# Intercepting Route Matchers

### `(.)`

Same level

```text
@modal/(.)photo/[id]
```

Intercept:

```text
photo/[id]
```

---

### `(..)`

One level up

```text
(..)settings
```

Intercept route from parent segment.

---

### `(..)(..)`

Two levels up

```text
(..)(..)profile
```

Go up two segments.

---

### `(...)`

From app root

```text
(...)login
```

Intercept:

```text
app/login
```

from anywhere.

---

# Typical Structure with Parallel Routes

```text
app/
├── feed/
│   └── page.tsx
│
├── photo/
│   └── [id]/
│       └── page.tsx
│
└── @modal/
    ├── default.tsx
    │
    └── (.)photo/
        └── [id]/
            └── page.tsx
```

Hierarchy:

```html
<Layout>

    <FeedPage />

    <ModalSlot>
        <PhotoModal />
    </ModalSlot>

</Layout>
```

---

# Mental Model

Normal route:

```text
/feed
    ↓
/photo/1
```

Intercepted route:

```text
/feed
    ↓
/photo/1

Feed stays visible
Photo appears in modal
```

---

### One-Line Definition

> Intercepting Routes allow Next.js to render a route inside the current UI context (commonly a modal) during client-side navigation, while still preserving the route's own URL and allowing it to render as a normal page on direct visits or refreshes.




---




Let's build the **smallest working Intercepting Routes example** so you can actually test it and see the difference.

---

# Goal

We want:

```text
/feed
```

Show a list of photos.

When clicking a photo:

```text
/photo/1
```

instead of leaving the feed page, open a modal.

But if we refresh:

```text
/photo/1
```

we should see a full page.

---

# Step 1: Create Folder Structure

```text
app/
│
├── layout.tsx
│
├── feed/
│   └── page.tsx
│
├── photo/
│   └── [id]/
│       └── page.tsx
│
└── @modal/
    ├── default.tsx
    │
    └── (.)photo/
        └── [id]/
            └── page.tsx
```

---

# Step 2: Root Layout

`app/layout.tsx`

```tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}

        {modal}
      </body>
    </html>
  );
}
```

Notice:

```tsx
modal
```

comes from:

```text
@modal
```

slot.

---

# Step 3: Feed Page

`app/feed/page.tsx`

```tsx
import Link from "next/link";

export default function FeedPage() {
  return (
    <div>
      <h1>Feed Page</h1>

      <Link href="/photo/1">
        Open Photo 1
      </Link>
    </div>
  );
}
```

---

# Step 4: Real Photo Page

`app/photo/[id]/page.tsx`

```tsx
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>FULL PAGE PHOTO {id}</h1>
    </div>
  );
}
```

This is what appears on refresh/direct visit.

---

# Step 5: Default Modal

`app/@modal/default.tsx`

```tsx
export default function Default() {
  return null;
}
```

Without this file, unmatched modal slots cause errors.

---

# Step 6: Intercepted Route

`app/@modal/(.)photo/[id]/page.tsx`

```tsx
export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          margin: "100px auto",
          width: "300px",
        }}
      >
        <h2>MODAL PHOTO {id}</h2>
      </div>
    </div>
  );
}
```

---

# What Happens?

## Visit Feed

```text
/feed
```

Screen:

```text
Feed Page

Open Photo 1
```

---

## Click Link

```text
/photo/1
```

URL changes to:

```text
/photo/1
```

BUT screen becomes:

```text
Feed Page

+----------------+
| MODAL PHOTO 1 |
+----------------+
```

Feed remains visible.

---

## Refresh Browser

Press:

```text
F5
```

while on:

```text
/photo/1
```

Now Next.js loads:

```text
app/photo/[id]/page.tsx
```

Screen:

```text
FULL PAGE PHOTO 1
```

Modal disappears.

---

# Why?

Because intercepting routes only work during:

```text
Client-side navigation
```

using:

```tsx
<Link />
```

or:

```tsx
router.push()
```

After refresh, Next.js only knows:

```text
/photo/1
```

so it renders the real route.

---

# Visual Flow

### Normal Route

```text
/feed
   │
click
   ▼
/photo/1
```

renders:

```text
FULL PAGE PHOTO 1
```

---

### Intercepted Route

```text
/feed
   │
click
   ▼
/photo/1
```

renders:

```text
Feed Page

Modal Photo 1
```

---

# What Does `(.)` Mean?

```text
(.)photo
```

means:

> Intercept the route `photo` from the same level.

Other matchers:

```text
(.)       same level
(..)      parent level
(..)(..)  two levels up
(...)     root app folder
```

---

# The One Thing to Remember

Without intercepting routes:

```text
/feed
  ↓
/photo/1

Feed disappears
```

With intercepting routes:

```text
/feed
  ↓
/photo/1

Feed stays
Photo opens as modal
```

That's the entire purpose of Intercepting Routes. They are mainly used for **modals, previews, drawers, and overlays** while keeping a shareable URL.




---




# `Route Handlers` :

In **Next.js**, **Route Handlers** let you create backend API endpoints directly inside your application using the **App Router** (`app/` directory). They replace many use cases that were previously handled by API Routes in the Pages Router.

## What are Route Handlers?

A route handler is a file named `route.js` or `route.ts` inside the `app` directory that responds to HTTP requests.

Example:

```plaintext
app/
└── api/
    └── users/
        └── route.ts
```

```ts
// app/api/users/route.ts

export async function GET() {
  return Response.json({
    message: "Hello from Next.js Route Handler",
  });
}
```

Request:

```http
GET /api/users
```

Response:

```json
{
  "message": "Hello from Next.js Route Handler"
}
```

---

## Supported HTTP Methods

You can export functions matching HTTP methods:

```ts
export async function GET() {}
export async function POST() {}
export async function PUT() {}
export async function PATCH() {}
export async function DELETE() {}
export async function HEAD() {}
export async function OPTIONS() {}
```

Example:

```ts
export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    received: body,
  });
}
```

---

## Reading Request Data

### Query Parameters

```ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");

  return Response.json({ page });
}
```

Request:

```http
GET /api/users?page=2
```

Response:

```json
{
  "page": "2"
}
```

---

### Request Body

```ts
export async function POST(request: Request) {
  const body = await request.json();

  return Response.json(body);
}
```

For form data:

```ts
export async function POST(request: Request) {
  const formData = await request.formData();

  return Response.json({
    name: formData.get("name"),
  });
}
```

---

## Dynamic Route Handlers

Create dynamic segments just like pages.

Folder structure:

```plaintext
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

```ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    userId: id,
  });
}
```

Request:

```http
GET /api/users/123
```

Response:

```json
{
  "userId": "123"
}
```

---

## Returning Custom Status Codes

```ts
export async function GET() {
  return Response.json(
    { error: "Not Found" },
    { status: 404 }
  );
}
```

Or:

```ts
return new Response("Unauthorized", {
  status: 401,
});
```

---

## Using NextRequest and NextResponse

Next.js provides enhanced request/response objects.

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
  });
}
```

Benefits:

* Cookie helpers
* URL helpers
* Redirect helpers
* Rewrite helpers

---

## Working with Cookies

### Read Cookies

```ts
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return Response.json({ token });
}
```

### Set Cookies

```ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("token", "abc123");

  return response;
}
```

---

## Redirects

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    new URL("/login", "http://localhost:3000")
  );
}
```

---

## Access Headers

```ts
import { headers } from "next/headers";

export async function GET() {
  const headerStore = await headers();

  return Response.json({
    userAgent: headerStore.get("user-agent"),
  });
}
```

---

## Route Parameters + Query Parameters

```ts
// /api/products/[id]?lang=en

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { searchParams } = new URL(request.url);

  return Response.json({
    id,
    lang: searchParams.get("lang"),
  });
}
```

---

## Edge Runtime

Route handlers can run on the Edge Runtime.

```ts
export const runtime = "edge";

export async function GET() {
  return Response.json({
    runtime: "edge",
  });
}
```

Advantages:

* Lower latency
* Global execution near users

Limitations:

* Not all Node.js APIs are available

---

## Database Example

Using Prisma:

```ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}
```

Create a user:

```ts
export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json(user, {
    status: 201,
  });
}
```

---

## Route Handlers vs Server Actions

| Route Handlers            | Server Actions                           |
| ------------------------- | ---------------------------------------- |
| Public HTTP endpoint      | Invoked from React components/forms      |
| Used by external clients  | Usually internal application logic       |
| Supports all HTTP methods | Typically form submissions and mutations |
| Acts like a REST API      | Acts like a server-side function         |
| Accessible via URL        | Not directly accessible via URL          |

Use **Route Handlers** when:

* Building APIs
* Supporting mobile apps
* Creating webhooks
* Integrating third-party services
* Exposing endpoints to external clients

Use **Server Actions** when:

* Handling form submissions
* Performing internal mutations
* Avoiding extra API layers between UI and server

---

## Common Folder Structure

```plaintext
app/
├── api/
│   ├── users/
│   │   ├── route.ts
│   │   └── [id]/
│   │       └── route.ts
│   └── auth/
│       └── login/
│           └── route.ts
├── page.tsx
└── layout.tsx
```

A common pattern in production is:

```plaintext
app/api/users/route.ts        // GET all users, POST create user
app/api/users/[id]/route.ts   // GET, PUT, DELETE single user
```

This gives you a REST-style API while keeping frontend and backend code in the same Next.js project.





---





# `GET request` :

A **GET request** in a Next.js Route Handler is used to **retrieve data** from the server.

### Basic GET Route Handler

```ts
// app/api/users/route.ts

export async function GET() {
  return Response.json({
    message: "Users fetched successfully",
  });
}
```

When you visit:

```plaintext
http://localhost:3000/api/users
```

Response:

```json
{
  "message": "Users fetched successfully"
}
```

---

### GET Request with Query Parameters

URL:

```plaintext
/api/users?page=1&limit=10
```

Route handler:

```ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  return Response.json({
    page,
    limit,
  });
}
```

Response:

```json
{
  "page": "1",
  "limit": "10"
}
```

---

### GET Request with Dynamic Route

Folder structure:

```plaintext
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

```ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    userId: id,
  });
}
```

Request:

```plaintext
/api/users/123
```

Response:

```json
{
  "userId": "123"
}
```

---

### Fetching Data from a Database

```ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}
```

---

### Calling the GET API from a Client Component

```tsx
"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

### Using `NextRequest`

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");

  return NextResponse.json({
    greeting: `Hello ${name}`,
  });
}
```

Request:

```plaintext
/api/users?name=John
```

Response:

```json
{
  "greeting": "Hello John"
}
```

### GET vs POST

| GET                            | POST                      |
| ------------------------------ | ------------------------- |
| Retrieves data                 | Creates/sends data        |
| Data sent via URL query params | Data sent in request body |
| Should not modify data         | Usually modifies data     |
| Can be cached                  | Typically not cached      |

Example:

```http
GET /api/users
```

Fetches users.

```http
POST /api/users
```

Creates a new user.

A common REST pattern is:

```ts
// GET all users
GET /api/users

// GET one user
GET /api/users/123
```

where the `GET` handler only reads and returns data without changing anything on the server.





---




# `POST request` :

A **POST request** in Next.js Route Handlers is used to **send data to the server**, typically for creating new records such as users, products, posts, etc.

## Basic POST Route Handler

```ts
// app/api/users/route.ts

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    message: "User created",
    data: body,
  });
}
```

### Client Request

```js
fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com",
  }),
});
```

### Response

```json
{
  "message": "User created",
  "data": {
    "name": "John",
    "email": "john@example.com"
  }
}
```

---

## Creating a Database Record

Using Prisma:

```ts
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json(user, {
    status: 201,
  });
}
```

`201 Created` is the standard status code for successful resource creation.

---

## Validation Example

```ts
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name) {
    return Response.json(
      { error: "Name is required" },
      { status: 400 }
    );
  }

  return Response.json(
    { message: "Success" },
    { status: 201 }
  );
}
```

---

## Using NextRequest and NextResponse

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json({
    received: body,
  });
}
```

---

## Handling Form Data

HTML Form:

```html
<form method="POST">
  <input name="name" />
  <button type="submit">Submit</button>
</form>
```

Route Handler:

```ts
export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name");

  return Response.json({
    name,
  });
}
```

---

## GET and POST in the Same Route

```ts
// app/api/users/route.ts

export async function GET() {
  return Response.json({
    message: "Get all users",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    message: "User created",
    user: body,
  });
}
```

Now:

```http
GET /api/users
```

returns users, and

```http
POST /api/users
```

creates a new user.

---

## Real-World Example

```ts
// app/api/todos/route.ts

let todos = [];

export async function POST(request: Request) {
  const todo = await request.json();

  todos.push(todo);

  return Response.json(
    {
      message: "Todo added",
      todo,
    },
    {
      status: 201,
    }
  );
}
```

Client:

```js
await fetch("/api/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Learn Next.js Route Handlers",
  }),
});
```

### HTTP Methods Quick Summary

| Method | Purpose                      |
| ------ | ---------------------------- |
| GET    | Fetch data                   |
| POST   | Create new data              |
| PUT    | Replace existing data        |
| PATCH  | Update part of existing data |
| DELETE | Remove data                  |

A common REST API structure is:

```http
GET    /api/users       -> Get all users
GET    /api/users/1     -> Get user 1
POST   /api/users       -> Create user
PUT    /api/users/1     -> Replace user 1
PATCH  /api/users/1     -> Update user 1
DELETE /api/users/1     -> Delete user 1
```





---





# `Dynamic Route Handlers` :

**Dynamic Route Handlers** in Next.js allow you to create API endpoints with dynamic URL segments, similar to dynamic pages.

## Folder Structure

Suppose you want to handle requests like:

```plaintext
/api/users/123
/api/users/456
```

Create:

```plaintext
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

Here, `[id]` is a dynamic segment.

---

## GET Example

```ts
// app/api/users/[id]/route.ts

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    userId: id,
  });
}
```

Request:

```http
GET /api/users/123
```

Response:

```json
{
  "userId": "123"
}
```

---

## Database Example

```ts
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return Response.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return Response.json(user);
}
```

---

## Dynamic POST Example

Although POST is usually used on a collection route (`/api/users`), you can still access route parameters:

```ts
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  return Response.json({
    userId: id,
    data: body,
  });
}
```

---

## Multiple Dynamic Segments

Folder structure:

```plaintext
app/
└── api/
    └── users/
        └── [userId]/
            └── posts/
                └── [postId]/
                    └── route.ts
```

URL:

```plaintext
/api/users/10/posts/25
```

Handler:

```ts
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      userId: string;
      postId: string;
    }>;
  }
) {
  const { userId, postId } = await params;

  return Response.json({
    userId,
    postId,
  });
}
```

Response:

```json
{
  "userId": "10",
  "postId": "25"
}
```

---

## Catch-All Routes

To match:

```plaintext
/api/docs/a
/api/docs/a/b
/api/docs/a/b/c
```

Use:

```plaintext
app/api/docs/[...slug]/route.ts
```

```ts
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string[] }>;
  }
) {
  const { slug } = await params;

  return Response.json({
    path: slug,
  });
}
```

Request:

```http
GET /api/docs/nextjs/routing/handlers
```

Response:

```json
{
  "path": ["nextjs", "routing", "handlers"]
}
```

---

## Optional Catch-All Routes

Folder:

```plaintext
app/api/docs/[[...slug]]/route.ts
```

Matches:

```plaintext
/api/docs
/api/docs/a
/api/docs/a/b
```

Handler:

```ts
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug?: string[] }>;
  }
) {
  const { slug } = await params;

  return Response.json({
    slug,
  });
}
```

---

## Dynamic Route + Query Parameters

Request:

```http
GET /api/users/123?role=admin
```

```ts
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { searchParams } = new URL(request.url);

  const role = searchParams.get("role");

  return Response.json({
    id,
    role,
  });
}
```

Response:

```json
{
  "id": "123",
  "role": "admin"
}
```

### Summary

| Route Folder              | URL Example            | `params` Value                 |
| ------------------------- | ---------------------- | ------------------------------ |
| `[id]`                    | `/api/users/1`         | `{ id: "1" }`                  |
| `[userId]/posts/[postId]` | `/api/users/1/posts/5` | `{ userId: "1", postId: "5" }` |
| `[...slug]`               | `/api/docs/a/b`        | `{ slug: ["a", "b"] }`         |
| `[[...slug]]`             | `/api/docs`            | `{ slug: undefined }`          |

Dynamic route handlers are commonly used for resource-specific APIs such as:

```plaintext
/api/users/[id]
/api/products/[id]
/api/orders/[orderId]
/api/blog/[slug]
```

where the route parameter identifies the specific resource being requested.




---




# `PATCH request` :

A **PATCH request** in Next.js Route Handlers is used to **partially update an existing resource** (unlike PUT, which replaces the whole resource).

---

## Basic PATCH Route Handler

Example: updating a user’s name or email.

```ts
// app/api/users/[id]/route.ts

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  return Response.json({
    message: "User updated partially",
    userId: id,
    updatedFields: body,
  });
}
```

---

## Example Request

```http
PATCH /api/users/123
Content-Type: application/json

{
  "name": "Updated Name"
}
```

---

## Example Response

```json
{
  "message": "User updated partially",
  "userId": "123",
  "updatedFields": {
    "name": "Updated Name"
  }
}
```

---

## PATCH with Database (Prisma Example)

```ts
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id },
    data: body, // only update provided fields
  });

  return Response.json(updatedUser);
}
```

---

## PATCH with Validation

```ts
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  if (!body || Object.keys(body).length === 0) {
    return Response.json(
      { error: "No fields provided to update" },
      { status: 400 }
    );
  }

  return Response.json({
    message: "Valid update request",
    id,
    body,
  });
}
```

---

## PATCH vs PUT

| Feature | PATCH                         | PUT                      |
| ------- | ----------------------------- | ------------------------ |
| Purpose | Partial update                | Full replacement         |
| Payload | Only changed fields           | Entire resource          |
| Risk    | Low (updates selected fields) | Higher (overwrites data) |
| Example | Update only `name`            | Replace full user object |

---

## Real-World Example

### Updating a Todo Status

```ts
// app/api/todos/[id]/route.ts

let todos = [
  { id: "1", task: "Learn Next.js", done: false },
];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, ...body } : todo
  );

  return Response.json({
    message: "Todo updated",
    todos,
  });
}
```

Request:

```http
PATCH /api/todos/1
Content-Type: application/json

{
  "done": true
}
```

Response:

```json
{
  "message": "Todo updated",
  "todos": [
    {
      "id": "1",
      "task": "Learn Next.js",
      "done": true
    }
  ]
}
```

---

## When to Use PATCH

Use PATCH when:

* You want to update **only specific fields**
* You don’t want to send full object data
* You are modifying existing records (e.g., profile update, status change)




---




# `DELETE request` :

A **DELETE request** in Next.js Route Handlers is used to **remove a resource** from the server, such as deleting a user, post, or product.

---

## Basic DELETE Route Handler

Example: deleting a user by ID

```ts id="v7h8k2"
// app/api/users/[id]/route.ts

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    message: "User deleted successfully",
    userId: id,
  });
}
```

---

## Example Request

```http id="kq3m9d"
DELETE /api/users/123
```

No request body is usually needed.

---

## Example Response

```json id="p1x8rt"
{
  "message": "User deleted successfully",
  "userId": "123"
}
```

---

## DELETE with Database (Prisma Example)

```ts id="z9wq2k"
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.user.delete({
    where: { id },
  });

  return Response.json(
    {
      message: "User deleted",
      id,
    },
    { status: 200 }
  );
}
```

---

## DELETE with Error Handling

```ts id="xk2p9a"
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const deleted = await prisma.user.delete({
      where: { id },
    });

    return Response.json({
      message: "Deleted successfully",
      deleted,
    });
  } catch (error) {
    return Response.json(
      { error: "User not found or already deleted" },
      { status: 404 }
    );
  }
}
```

---

## Client-Side DELETE Request

```ts id="c7v2lm"
await fetch("/api/users/123", {
  method: "DELETE",
});
```

---

## Real-World Example: Delete Todo

```ts id="q8n3sd"
// app/api/todos/[id]/route.ts

let todos = [
  { id: "1", task: "Learn Next.js", done: false },
  { id: "2", task: "Build API", done: true },
];

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  todos = todos.filter((todo) => todo.id !== id);

  return Response.json({
    message: "Todo deleted",
    todos,
  });
}
```

Request:

```http id="h1k4pw"
DELETE /api/todos/1
```

Response:

```json id="r9d2ax"
{
  "message": "Todo deleted",
  "todos": [
    {
      "id": "2",
      "task": "Build API",
      "done": true
    }
  ]
}
```

---

## DELETE vs Other Methods

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Read data             |
| POST   | Create new data       |
| PATCH  | Partially update data |
| PUT    | Replace full data     |
| DELETE | Remove data           |

---

## When to Use DELETE

Use DELETE when:

* Removing a user account
* Deleting posts, comments, products
* Clearing records from a database
* Removing items from a list (cart, todo, etc.)

---

## Common REST Pattern

```http id="m3x9ld"
GET    /api/users        → fetch all users
POST   /api/users        → create user
GET    /api/users/123    → fetch single user
PATCH  /api/users/123    → update user
DELETE /api/users/123    → delete user
```




---




# `URL query parameters` :

**URL query parameters** are the part of a URL used to pass **optional data** to a route in the form of key–value pairs.

They come after the `?` in a URL.

---

## Basic Example

```plaintext
/api/users?page=2&limit=10
```

Here:

* `page = 2`
* `limit = 10`

These are called **query parameters**.

---

## Reading Query Parameters in Next.js Route Handlers

In **Next.js App Router (Route Handlers)**, you read query params using `request.url`.

### Example

```ts id="q1x8ab"
// app/api/users/route.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  return Response.json({
    page,
    limit,
  });
}
```

---

## Request Example

```http id="k2v9mn"
GET /api/users?page=1&limit=5
```

---

## Response Example

```json id="z8x3qp"
{
  "page": "1",
  "limit": "5"
}
```

👉 Note: Query parameters are always returned as **strings**.

---

## Using Query Params with Default Values

```ts id="d4m2kl"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  return Response.json({
    page,
    limit,
  });
}
```

---

## Converting Query Params to Numbers

```ts id="p9r2sd"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  return Response.json({
    page,
    limit,
  });
}
```

---

## Using `NextRequest` (Cleaner Way)

```ts id="n8k3lm"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const search = request.nextUrl.searchParams.get("search");

  return NextResponse.json({
    page,
    search,
  });
}
```

---

## Real-World Example: Filtering Users

```ts id="f2x9pq"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const role = searchParams.get("role");
  const active = searchParams.get("active");

  let users = [
    { id: 1, name: "A", role: "admin", active: true },
    { id: 2, name: "B", role: "user", active: false },
  ];

  if (role) {
    users = users.filter((u) => u.role === role);
  }

  if (active) {
    users = users.filter((u) => String(u.active) === active);
  }

  return Response.json(users);
}
```

---

## Common Use Cases

Query parameters are used for:

* Pagination (`page`, `limit`)
* Searching (`search=phone`)
* Filtering (`role=admin`)
* Sorting (`sort=asc`)
* Feature flags (`debug=true`)

---

## Query Params vs Route Params

| Type         | Example             | Purpose                    |
| ------------ | ------------------- | -------------------------- |
| Query Params | `/api/users?page=1` | Optional filters/settings  |
| Route Params | `/api/users/123`    | Identify specific resource |

---

## Summary

* Appear after `?` in URL
* Format: `key=value&key2=value2`
* Read using `new URL(request.url).searchParams`
* Always strings (convert if needed)
* Used for filtering, pagination, searching

---

If you want, I can next explain **how query params work in Next.js pages (useSearchParams hook in client components)** or give a **real API pagination example with database**.





---





# `headers in route handlers` :

In **Next.js Route Handlers**, **headers** are used to read and send metadata about the HTTP request/response (like auth tokens, content type, user agent, etc.).

They are very important for things like **authentication, caching, and API communication**.

---

# 1. Reading Request Headers

## Option 1: Using `headers()` (Recommended in App Router)

```ts id="a1b2c3"
import { headers } from "next/headers";

export async function GET() {
  const headerStore = await headers();

  const userAgent = headerStore.get("user-agent");
  const auth = headerStore.get("authorization");

  return Response.json({
    userAgent,
    auth,
  });
}
```

---

## Option 2: Using `NextRequest`

```ts id="d4e5f6"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");

  return NextResponse.json({
    auth,
  });
}
```

---

# 2. Common Request Headers

| Header          | Purpose                             |
| --------------- | ----------------------------------- |
| `authorization` | Auth token (JWT, Bearer token)      |
| `content-type`  | Type of data sent (JSON, form-data) |
| `user-agent`    | Browser/device info                 |
| `cookie`        | Stored cookies                      |
| `accept`        | Expected response format            |

---

# 3. Example: Authentication Header

```ts id="g7h8i9"
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return Response.json(
      { error: "No token provided" },
      { status: 401 }
    );
  }

  return Response.json({
    message: "Authenticated",
  });
}
```

---

# 4. Sending Custom Response Headers

## Using `Response`

```ts id="j1k2l3"
export async function GET() {
  return new Response("Hello", {
    headers: {
      "x-custom-header": "my-value",
    },
  });
}
```

---

## Using `NextResponse`

```ts id="m4n5o6"
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: "Success",
  });

  response.headers.set("x-powered-by", "Next.js");

  return response;
}
```

---

# 5. Setting Common Response Headers

## Content-Type

```ts id="p7q8r9"
export async function GET() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

---

## CORS Headers (Important for APIs)

```ts id="s1t2u3"
export async function GET() {
  return new Response("OK", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
    },
  });
}
```

---

# 6. Real-World Example: Token Check + Response Header

```ts id="v4w5x6"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.headers.get("authorization");

  if (token !== "my-secret-token") {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    message: "Access granted",
  });

  response.headers.set("x-auth-status", "valid");

  return response;
}
```

---

# 7. Headers vs Query Params vs Body

| Type         | Used for                             |
| ------------ | ------------------------------------ |
| Headers      | Metadata (auth, device info, tokens) |
| Query Params | Filtering & search (`?page=1`)       |
| Body         | Actual data (POST, PATCH content)    |

---

# 8. When to Use Headers

Use headers for:

* Authentication (`Bearer token`)
* API keys
* Device/browser info
* Content negotiation
* CORS configuration
* Custom metadata

---

# Summary

* Read headers using `headers()` or `request.headers`
* Set response headers using `Response` or `NextResponse`
* Common use case: authentication and API control
* Headers carry **metadata**, not main data




---





# `cookies in route handlers` :

In **Next.js Route Handlers**, **cookies** let you store small pieces of data on the client and read/write them on the server (like authentication tokens, preferences, sessions).

They are commonly used for **login sessions, JWT storage, and user settings**.

---

# 1. Reading Cookies (Server-side)

## Using `cookies()` (App Router recommended)

```ts id="a1b2c3"
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return Response.json({
    token: token?.value || null,
  });
}
```

---

## Example Request Cookie

```http id="k9m2pq"
Cookie: token=abc123
```

---

# 2. Setting Cookies

## Using `NextResponse`

```ts id="x7y8z9"
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Cookie set",
  });

  response.cookies.set("token", "abc123");

  return response;
}
```

---

## Cookie Options (Important)

```ts id="m2n3o4"
response.cookies.set("token", "abc123", {
  httpOnly: true,      // cannot be accessed by JS (secure)
  secure: true,        // only HTTPS
  path: "/",           // available site-wide
  maxAge: 60 * 60,     // 1 hour
});
```

---

# 3. Deleting Cookies

```ts id="p5q6r7"
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    message: "Logged out",
  });

  response.cookies.delete("token");

  return response;
}
```

---

# 4. Reading Cookies in Route Handler (Alternative way)

```ts id="s8t9u0"
export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie");

  return Response.json({
    cookies: cookieHeader,
  });
}
```

(Manual parsing needed here, so `cookies()` is preferred.)

---

# 5. Real-World Example: Login API

## POST login → set cookie

```ts id="v1w2x3"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // fake authentication
  if (body.email === "test@example.com") {
    const response = NextResponse.json({
      message: "Login successful",
    });

    response.cookies.set("token", "secure-jwt-token", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
```

---

## GET protected route → read cookie

```ts id="y4z5a6"
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return Response.json({
    message: "Protected data access granted",
  });
}
```

---

# 6. Cookie vs Local Storage

| Feature              | Cookies         | Local Storage |
| -------------------- | --------------- | ------------- |
| Accessible on server | ✅ Yes           | ❌ No          |
| Secure (httpOnly)    | ✅ Yes           | ❌ No          |
| Sent with requests   | ✅ Automatically | ❌ No          |
| Storage size         | Small (~4KB)    | Larger        |

👉 Cookies are better for **auth/session management**.

---

# 7. Important Cookie Flags

| Flag       | Meaning                     |
| ---------- | --------------------------- |
| `httpOnly` | Prevents JS access (secure) |
| `secure`   | Works only on HTTPS         |
| `sameSite` | Prevents CSRF attacks       |
| `maxAge`   | Expiry time                 |

Example:

```ts id="b7c8d9"
response.cookies.set("token", "abc123", {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
});
```

---

# 8. Summary

* Use `cookies()` to **read cookies**
* Use `NextResponse.cookies.set()` to **set cookies**
* Use `.delete()` to remove cookies
* Best for authentication and sessions
* Safer than localStorage for sensitive data





---





# `redirects in route handlers` :

In **Next.js Route Handlers**, **redirects** let you send the user (or client) to another URL from the server side. This is commonly used after login, form submission, authentication checks, or API flows.

---

# 1. Basic Redirect using `NextResponse.redirect()`

```ts id="a1b2c3"
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
}
```

👉 When user hits this route, they are redirected to `/login`.

---

# 2. Redirect using Request URL (Dynamic-safe way)

This is the **recommended approach** because it works in production automatically.

```ts id="d4e5f6"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL("/dashboard", request.url);

  return NextResponse.redirect(url);
}
```

---

# 3. Redirect after POST (Very Common Use Case)

Example: after form submission or login

```ts id="g7h8i9"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.email === "test@example.com") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
```

---

# 4. Redirect with External URL

You can also redirect outside your app:

```ts id="j1k2l3"
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://google.com");
}
```

---

# 5. Redirect with Status Codes

You can control redirect type:

| Code | Meaning                      |
| ---- | ---------------------------- |
| 307  | Temporary redirect (default) |
| 308  | Permanent redirect           |

```ts id="m4n5o6"
return NextResponse.redirect(
  new URL("/new-page", request.url),
  308
);
```

---

# 6. Authentication Redirect Example

```ts id="p7q8r9"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.json({
    message: "You are authenticated",
  });
}
```

---

# 7. Redirect with Cookies (Login Flow)

```ts id="s1t2u3"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const response = NextResponse.redirect(
    new URL("/dashboard", request.url)
  );

  response.cookies.set("token", "abc123", {
    httpOnly: true,
    path: "/",
  });

  return response;
}
```

---

# 8. Redirect vs Rewrite

| Feature                       | Redirect          | Rewrite                    |
| ----------------------------- | ----------------- | -------------------------- |
| URL changes in browser        | ✅ Yes             | ❌ No                       |
| Server handles route silently | ❌ No              | ✅ Yes                      |
| SEO impact                    | Yes               | No                         |
| Use case                      | login, navigation | proxying, internal routing |

---

# 9. Real-World Example: Protected Route

```ts id="v9w0x1"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.json({
    message: "Welcome to dashboard",
  });
}
```

---

# 10. Summary

* Use `NextResponse.redirect()` in Route Handlers
* Always prefer `new URL(path, request.url)` for safety
* Common use cases:

  * Login → dashboard
  * Auth protection
  * Form submission flow
* Default status: `307 Temporary Redirect`





---





# `caching in route handlers` :

In **Next.js Route Handlers**, **caching** controls whether responses from your API routes are stored and reused instead of being recomputed on every request. It’s important for **performance, speed, and reducing database load**.

---

# 1. Default Caching Behavior

In **Route Handlers (`app/api/.../route.ts`)**:

* **GET requests are cacheable by default in some cases (especially with fetch caching)**
* But most API Route Handlers behave as **dynamic (no cache)** unless you explicitly opt in

So in practice:

> Route Handlers are usually **not cached unless you configure them**

---

# 2. Force No Cache (Dynamic Response)

Use this when data must always be fresh.

```ts id="a1b2c3"
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    time: new Date().toISOString(),
  });
}
```

👉 Every request runs fresh.

---

# 3. Force Static (Enable Caching)

Use when data rarely changes.

```ts id="d4e5f6"
export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    message: "Static data",
  });
}
```

👉 Next.js may cache this response.

---

# 4. Revalidate (ISR-style caching)

This is the most practical caching option.

```ts id="g7h8i9"
export const revalidate = 60; // seconds

export async function GET() {
  return Response.json({
    time: new Date().toISOString(),
  });
}
```

### How it works:

* Cached for 60 seconds
* After that, Next.js regenerates it on next request

---

# 5. Per-Request Cache Control Headers

You can control caching like traditional HTTP APIs.

```ts id="j1k2l3"
export async function GET() {
  return new Response(JSON.stringify({ hello: "world" }), {
    headers: {
      "Cache-Control": "public, max-age=60",
    },
  });
}
```

### Common Cache-Control values:

| Value        | Meaning                |
| ------------ | ---------------------- |
| `no-store`   | Never cache            |
| `no-cache`   | Always revalidate      |
| `public`     | Cache allowed anywhere |
| `max-age=60` | Cache for 60 seconds   |

---

# 6. Disable Caching Completely

```ts id="m4n5o6"
export async function GET() {
  return new Response(JSON.stringify({ time: Date.now() }), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
```

👉 Always fetch fresh data.

---

# 7. Fetch-level Caching inside Route Handlers

If you call external APIs:

```ts id="p7q8r9"
export async function GET() {
  const res = await fetch("https://api.example.com/data", {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();

  return Response.json(data);
}
```

👉 This caches the **fetch result**, not the route itself.

---

# 8. Tags-based Caching (Advanced)

Useful for invalidating groups of data.

### Fetch with tag:

```ts id="s1t2u3"
await fetch("https://api.example.com/users", {
  next: {
    tags: ["users"],
  },
});
```

### Revalidate manually:

```ts id="v4w5x6"
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("users");

  return Response.json({ message: "Cache cleared" });
}
```

---

# 9. Real-World Example: Cached Users API

```ts id="y7z8a9"
export const revalidate = 30;

export async function GET() {
  const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  return Response.json(users);
}
```

👉 Cached for 30 seconds → good for dashboards.

---

# 10. When to Use What

| Scenario                           | Best Choice                  |
| ---------------------------------- | ---------------------------- |
| Live data (auth, dashboard stats)  | `no-store` / `force-dynamic` |
| Semi-static data (blogs, products) | `revalidate = 60`            |
| Rarely changing data               | `force-static`               |
| External API optimization          | fetch `revalidate` + tags    |

---

# 11. Key Mental Model

Think of caching in Route Handlers as 3 layers:

1. **Route-level caching** (`dynamic`, `revalidate`)
2. **HTTP caching** (`Cache-Control`)
3. **Fetch caching** (`next.revalidate`, `tags`)

---

# Summary

* Route Handlers are dynamic by default
* Use `revalidate` for controlled caching
* Use `no-store` for always-fresh data
* Use fetch-level caching for external APIs
* Use tags for smart invalidation





---





# `Middleware` :

In **Next.js**, **Middleware** is code that runs **before a request is completed**, allowing you to **intercept, modify, or redirect requests**.

It’s commonly used for:

* Authentication checks
* Redirects
* Route protection
* Localization
* Logging
* A/B testing

---

# 1. Where Middleware lives

You create a file at the project root:

```plaintext id="a1b2c3"
middleware.ts
```

---

# 2. Basic Middleware Example

```ts id="d4e5f6"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
```

👉 This simply allows all requests through.

---

# 3. Redirect Example (Very Common)

Redirect users from `/` to `/login`

```ts id="g7h8i9"
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

# 4. Protect Routes (Authentication Example)

```ts id="j1k2l3"
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

👉 This protects `/dashboard` routes.

---

# 5. Middleware Matching (Config)

You can control which routes run middleware using `config`.

```ts id="m4n5o6"
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
```

👉 Middleware only runs for:

* `/dashboard`
* `/dashboard/settings`
* `/profile`
* etc.

---

# 6. Modifying Requests

You can add headers before request continues.

```ts id="p7q8r9"
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-custom-header", "hello");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
```

---

# 7. Locale-based Routing Example

Redirect users based on language

```ts id="s1t2u3"
export function middleware(request: NextRequest) {
  const locale = request.headers.get("accept-language");

  if (locale?.startsWith("fr")) {
    return NextResponse.redirect(new URL("/fr", request.url));
  }

  return NextResponse.next();
}
```

---

# 8. Logging Requests

```ts id="v4w5x6"
export function middleware(request: NextRequest) {
  console.log("Request made to:", request.nextUrl.pathname);

  return NextResponse.next();
}
```

---

# 9. Middleware vs Route Handler

| Feature                    | Middleware      | Route Handler |
| -------------------------- | --------------- | ------------- |
| Runs before request        | ✅               | ❌             |
| Access to request/response | Limited         | Full          |
| Modify response body       | ❌               | ✅             |
| Use case                   | auth, redirects | API logic     |
| Runs on Edge               | ✅               | Optional      |

---

# 10. Real-World Auth Flow

```ts id="y7z8a9"
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage = request.nextUrl.pathname === "/login";
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  // Redirect logged-in users away from login
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect dashboard
  if (isDashboard && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

# 11. Key Concepts to Remember

* Middleware runs **before route handlers**
* It runs on the **Edge runtime (fast, global)**
* It cannot access database directly (no Node APIs)
* It can:

  * redirect
  * rewrite
  * modify headers
  * block requests

---

# 12. Common Use Cases

* 🔐 Authentication protection
* 🌍 Localization routing
* 🚦 A/B testing
* 🧭 Redirect old URLs
* 🧾 Request logging
* 🛡 Security headers injection

---

# Summary

Middleware is your **request gatekeeper**:

> It decides what happens BEFORE your API or page runs.





---





# `rendering` :

In **Next.js**, **rendering** means how and when your UI (pages/components) is generated and sent to the browser. It controls whether content is built **on the server, at build time, or in the browser**.

Next.js supports several rendering strategies.

---

# 1. Client-Side Rendering (CSR)

### What it means:

The page is rendered **in the browser using JavaScript**.

### Example:

```tsx id="a1b2c3"
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### How it works:

* Browser loads empty page
* JavaScript runs
* Data is fetched
* UI appears

### Pros:

* Interactive apps
* Good for dashboards

### Cons:

* Slower initial load
* Bad SEO for content pages

---

# 2. Server-Side Rendering (SSR)

### What it means:

Page is rendered **on the server for every request**.

### In App Router:

```tsx id="d4e5f6"
export default async function Page() {
  const res = await fetch("https://api.example.com/users", {
    cache: "no-store",
  });

  const data = await res.json();

  return <div>{JSON.stringify(data)}</div>;
}
```

### How it works:

* Request comes in
* Server fetches data
* HTML is generated
* Sent to browser

### Pros:

* Good SEO
* Always fresh data

### Cons:

* Slower than static
* Server load increases

---

# 3. Static Site Generation (SSG)

### What it means:

Page is generated **once at build time**.

### Example:

```tsx id="g7h8i9"
export default async function Page() {
  const res = await fetch("https://api.example.com/users", {
    cache: "force-cache",
  });

  const data = await res.json();

  return <div>{JSON.stringify(data)}</div>;
}
```

### How it works:

* Built during `next build`
* Served as static HTML

### Pros:

* Very fast
* CDN-friendly
* Great SEO

### Cons:

* Data may become outdated

---

# 4. Incremental Static Regeneration (ISR)

### What it means:

Static pages that **update after a time interval**.

```tsx id="j1k2l3"
export const revalidate = 60;

export default async function Page() {
  const res = await fetch("https://api.example.com/users");
  const data = await res.json();

  return <div>{JSON.stringify(data)}</div>;
}
```

### How it works:

* Page is cached
* After 60 seconds → regenerates in background

### Pros:

* Fast + fresh balance
* Great for blogs/products

---

# 5. Rendering in App Router (Modern Next.js)

Next.js decides rendering automatically based on caching:

| Fetch Option        | Rendering Type |
| ------------------- | -------------- |
| `cache: "no-store"` | SSR            |
| `force-cache`       | SSG            |
| `revalidate`        | ISR            |

---

# 6. Server Components vs Client Components

## Server Component (default)

```tsx id="m4n5o6"
export default async function Page() {
  return <h1>Server Rendered</h1>;
}
```

* Runs on server
* No hooks
* Faster

---

## Client Component

```tsx id="p7q8r9"
"use client";

export default function Page() {
  return <button onClick={() => alert("Hi")}>Click</button>;
}
```

* Runs in browser
* Interactive
* Uses hooks

---

# 7. Rendering Flow in Next.js

```
Request → Server Component → Fetch Data → Render HTML → Browser loads → Hydration (if client components exist)
```

---

# 8. Hydration (Important Concept)

Hydration means:

> React attaches interactivity to server-rendered HTML in the browser.

Example:

* Server sends HTML
* Browser loads it
* React makes buttons clickable

---

# 9. Choosing Rendering Strategy

| Use Case       | Best Rendering |
| -------------- | -------------- |
| Blog           | SSG / ISR      |
| Dashboard      | CSR / SSR      |
| Real-time data | SSR            |
| Landing page   | SSG            |
| E-commerce     | ISR            |

---

# 10. Real-World Example Combination

A modern Next.js app often mixes:

* Landing page → SSG
* Product page → ISR
* Dashboard → SSR/CSR
* API → Route Handlers

---

# Summary

Next.js rendering types:

* **CSR** → Browser renders UI
* **SSR** → Server renders per request
* **SSG** → Build-time rendering
* **ISR** → Static + auto updates
* **Server Components** → Default server rendering
* **Client Components** → Interactive UI





---





# `Rendering` :

Rendering in **Next.js** is the process of generating HTML for your pages and components. Next.js supports several rendering strategies, allowing you to choose the best approach based on performance, SEO, and data freshness requirements.

## Why Rendering Matters

Browsers ultimately display HTML. The key question is:

> **Where and when is the HTML generated?**

Different rendering methods answer this differently.

---

## 1. Client-Side Rendering (CSR)

With CSR, the server sends a minimal HTML page and JavaScript. The browser runs the JavaScript and builds the UI.

### Flow

1. Browser requests page.
2. Server sends HTML + JS bundle.
3. Browser downloads JS.
4. React renders the page in the browser.

```jsx
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Pros

* Interactive applications.
* Less server work.
* Good for dashboards and authenticated apps.

### Cons

* Slower initial load.
* Poorer SEO if content depends on JavaScript.

---

## 2. Server-Side Rendering (SSR)

The server generates HTML on every request.

### Flow

1. Browser requests page.
2. Server fetches data.
3. Server renders HTML.
4. Browser receives ready-to-display HTML.
5. React hydrates the page.

### Example (App Router)

```jsx
async function getUsers() {
  const res = await fetch("https://api.example.com/users", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Using:

```js
cache: "no-store"
```

forces fresh data on every request.

### Pros

* Excellent SEO.
* Always up-to-date data.
* Fast first paint.

### Cons

* More server load.
* Slightly slower response times than static pages.

---

## 3. Static Site Generation (SSG)

Pages are generated at build time.

### Flow

1. Run `next build`.
2. HTML is generated once.
3. Users receive prebuilt HTML.

### Example

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts"
  );

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

By default, Next.js may statically render if data is cacheable.

### Pros

* Extremely fast.
* Excellent SEO.
* Low server cost.

### Cons

* Content can become stale.

---

## 4. Incremental Static Regeneration (ISR)

ISR combines static generation with periodic updates.

### Example

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}
```

This means:

* Generate page initially.
* Cache it.
* After 60 seconds, regenerate in the background.

### Pros

* Fast like SSG.
* Data stays reasonably fresh.
* Scales very well.

### Cons

* Content isn't updated instantly.

---

## 5. React Server Components (RSC)

In the Next.js App Router, components are **Server Components by default**.

Example:

```jsx
export default async function Page() {
  const data = await fetch(
    "https://api.example.com/data"
  ).then(res => res.json());

  return <h1>{data.title}</h1>;
}
```

### Characteristics

* Run only on the server.
* JavaScript is not sent to the browser.
* Can directly access databases and backend APIs.
* Reduce bundle size.

---

## 6. Client Components

Add `"use client"` at the top.

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Use Client Components when you need:

* State (`useState`)
* Effects (`useEffect`)
* Event handlers (`onClick`)
* Browser APIs

---

## 7. Hydration

Hydration is the process where React attaches JavaScript behavior to server-rendered HTML.

### Before Hydration

```html
<button>Click Me</button>
```

The button appears but isn't interactive.

### After Hydration

React connects:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

Now the button responds to clicks.

---

## Rendering Strategies at a Glance

| Strategy | Generated When       | SEO       | Data Freshness            | Speed               |
| -------- | -------------------- | --------- | ------------------------- | ------------------- |
| CSR      | Browser              | Low       | Fresh                     | Slower initial load |
| SSR      | Every request        | Excellent | Always fresh              | Good                |
| SSG      | Build time           | Excellent | Static                    | Very fast           |
| ISR      | Build + revalidation | Excellent | Periodically updated      | Very fast           |
| RSC      | Server               | Excellent | Depends on fetch strategy | Fast                |

---

## Practical Rule of Thumb

* **Blog, marketing pages, documentation** → SSG or ISR
* **News feeds, stock prices, frequently changing data** → SSR
* **Admin dashboards, highly interactive apps** → CSR or Client Components
* **Most App Router pages** → Server Components + selective Client Components

In modern Next.js (App Router), a common pattern is:

```text
Server Component
    ↓
Fetch data on server
    ↓
Send HTML to browser
    ↓
Client Components hydrate only where interactivity is needed
```

This hybrid approach is one of the biggest performance advantages of Next.js compared to a traditional React SPA.





---




# `Client-Side Rendering (CSR)` :

## Client-Side Rendering (CSR) in Next.js

**Client-Side Rendering (CSR)** means that the browser is responsible for rendering the page content using JavaScript after the initial page load.

Instead of receiving fully rendered HTML from the server, the browser receives a mostly empty HTML file and a JavaScript bundle. React then runs in the browser, fetches data if needed, and builds the UI.

---

## How CSR Works

Imagine a page that displays a list of users.

### Step 1: User requests the page

```
GET /users
```

### Step 2: Server responds

The server sends:

```html
<html>
  <body>
    <div id="root"></div>
    <script src="app.js"></script>
  </body>
</html>
```

Notice that the page content is not present yet.

---

### Step 3: Browser downloads JavaScript

```text
Browser
   ↓
Download React
   ↓
Download App JS
   ↓
Execute JS
```

---

### Step 4: React renders UI

React creates the HTML dynamically:

```html
<div id="root">
  <h1>Users</h1>
  <ul>
    <li>John</li>
    <li>Alice</li>
  </ul>
</div>
```

Now the user sees the content.

---

## CSR Example in Next.js

A Client Component uses `"use client"`.

```jsx
"use client";

import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### What happens?

1. Component loads.
2. `useEffect` runs in browser.
3. API call is made.
4. State updates.
5. React re-renders UI.

---

## Visualization

```text
User opens page
        │
        ▼
Server sends HTML + JS
        │
        ▼
Browser downloads JS
        │
        ▼
React starts
        │
        ▼
Fetch data
        │
        ▼
Render UI
```

---

## Advantages of CSR

### 1. Rich Interactivity

Great for:

* Dashboards
* Chat applications
* Social media feeds
* Admin panels

Example:

```jsx
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

No page reload is needed.

---

### 2. Reduced Server Work

The server mainly serves static files.

```text
Server
   ↓
HTML + JS
```

The browser does the rendering work.

---

### 3. Fast Subsequent Navigation

After JavaScript loads once:

```text
Page A → Page B → Page C
```

Navigation often feels instant because React updates the UI without full page reloads.

---

## Disadvantages of CSR

### 1. Slower Initial Load

Before users see content:

```text
Download JS
   ↓
Execute JS
   ↓
Fetch Data
   ↓
Render UI
```

This can delay the first meaningful display.

---

### 2. SEO Challenges

Search engines may not immediately see content if it's rendered only after JavaScript runs.

Example:

Initial HTML:

```html
<div id="root"></div>
```

A crawler that doesn't execute JavaScript well may see an empty page.

---

### 3. Larger JavaScript Bundles

More client-side logic means more code sent to the browser.

```text
More JS
   ↓
Longer download
   ↓
Longer execution
```

---

## CSR vs SSR

| Feature            | CSR          | SSR                       |
| ------------------ | ------------ | ------------------------- |
| Rendering Location | Browser      | Server                    |
| Initial HTML       | Mostly empty | Fully rendered            |
| SEO                | Weaker       | Strong                    |
| First Load         | Slower       | Faster                    |
| Interactivity      | Excellent    | Excellent after hydration |
| Server Load        | Lower        | Higher                    |

---

## When to Use CSR

Use CSR when:

✅ Page requires lots of user interaction
✅ Content is user-specific
✅ SEO is not important
✅ Data changes frequently

Examples:

* Email clients
* Project management tools
* Internal company dashboards
* Chat apps

---

## CSR in Modern Next.js

In the App Router, pages are **Server Components by default**. You should use CSR only where needed by creating **Client Components**:

```jsx
"use client";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
```

A common pattern is:

```text
Server Component
    │
    ├── Fetch data on server
    │
    └── Client Component
            │
            ├── useState
            ├── useEffect
            └── Event handlers
```

This gives you the SEO and performance benefits of server rendering while keeping interactive parts client-side.





---





# `Server-Side Rendering (SSR)` :

# Server-Side Rendering (SSR) in Next.js

**Server-Side Rendering (SSR)** means the HTML for a page is generated on the **server for every request** and then sent to the browser.

Unlike Client-Side Rendering (CSR), where the browser builds the page using JavaScript, SSR sends a fully rendered page immediately.

---

## How SSR Works

Suppose a user visits `/users`.

### Step 1: Browser requests page

```text
GET /users
```

### Step 2: Server fetches data

```text
Server
   ↓
Database/API
   ↓
Get users data
```

### Step 3: Server renders HTML

```html
<h1>Users</h1>
<ul>
  <li>John</li>
  <li>Alice</li>
</ul>
```

### Step 4: Browser receives ready HTML

The content appears immediately.

### Step 5: Hydration

React attaches event handlers and makes the page interactive.

```text
Request
   ↓
Server fetches data
   ↓
Server renders HTML
   ↓
Browser receives HTML
   ↓
Hydration
```

---

## SSR Example in Next.js (App Router)

```jsx
async function getUsers() {
  const res = await fetch(
    "https://api.example.com/users",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Why is this SSR?

```js
cache: "no-store"
```

tells Next.js:

> "Don't use cached data. Fetch fresh data for every request."

Therefore the page is rendered on the server each time someone visits.

---

## Visualization

### Client-Side Rendering (CSR)

```text
Request
   ↓
Empty HTML
   ↓
Download JS
   ↓
Fetch Data
   ↓
Render UI
```

### Server-Side Rendering (SSR)

```text
Request
   ↓
Fetch Data
   ↓
Render HTML on Server
   ↓
Send Ready HTML
   ↓
Hydration
```

---

## Example: News Website

Suppose a news article changes every minute.

With SSR:

```text
User A visits
   ↓
Server fetches latest article
   ↓
HTML generated

User B visits later
   ↓
Server fetches newest article
   ↓
New HTML generated
```

Every visitor gets fresh content.

---

## Benefits of SSR

### 1. Better SEO

Search engines receive complete HTML.

```html
<h1>Latest News</h1>
<p>Breaking story...</p>
```

No need to execute JavaScript first.

---

### 2. Faster Initial Page Display

The browser receives content immediately.

```text
Request
   ↓
Ready HTML
   ↓
Display
```

Users see meaningful content sooner.

---

### 3. Fresh Data

Since rendering happens on every request:

```text
Request 1 → Fresh Data
Request 2 → Fresh Data
Request 3 → Fresh Data
```

Data stays up to date.

---

## Drawbacks of SSR

### 1. More Server Work

Every request requires:

```text
Fetch Data
   ↓
Render HTML
   ↓
Send Response
```

This increases server load.

---

### 2. Slower Response Time Than Static Pages

Because rendering occurs on each request:

```text
User Request
   ↓
Server Processing
   ↓
Response
```

Static pages can be served instantly from cache/CDN.

---

### 3. Expensive for High Traffic

A million visitors means:

```text
1,000,000 Requests
      ↓
1,000,000 Renders
```

Unless caching is used.

---

## SSR vs CSR Example

### CSR

Browser receives:

```html
<div id="root"></div>
```

Then JavaScript fetches data and renders.

---

### SSR

Browser receives:

```html
<h1>Users</h1>
<ul>
  <li>John</li>
  <li>Alice</li>
</ul>
```

Content is already present.

---

## SSR vs SSG

| Feature        | SSR           | SSG        |
| -------------- | ------------- | ---------- |
| Render Time    | Every request | Build time |
| Data Freshness | Always fresh  | Static     |
| SEO            | Excellent     | Excellent  |
| Performance    | Good          | Excellent  |
| Server Load    | Higher        | Lower      |

---

## When to Use SSR

Use SSR when:

✅ Data changes frequently
✅ SEO is important
✅ Users need fresh content on every request

Examples:

* News websites
* Weather dashboards
* Stock market pages
* Live sports updates
* Personalized pages

---

## Hydration After SSR

Even though the server renders HTML, React still needs to make the page interactive.

Server sends:

```html
<button>Like</button>
```

After hydration:

```jsx
<button onClick={handleLike}>
  Like
</button>
```

Now the button responds to user actions.

---

## In Modern Next.js

With the App Router, Server Components are the default. To force SSR for a page, fetch data without caching:

```jsx
await fetch(url, {
  cache: "no-store",
});
```

or

```jsx
export const dynamic = "force-dynamic";
```

This tells Next.js to render the page on the server for every request.

### Mental Model

```text
Browser Request
        ↓
Next.js Server
        ↓
Fetch Data
        ↓
Generate HTML
        ↓
Send HTML
        ↓
Hydrate React
        ↓
Interactive Page
```

So, **SSR = generate HTML on the server for each request, send ready-to-display content to the browser, then hydrate it for interactivity.**





---





# `Static Site Generation (SSG)` :

# Static Site Generation (SSG) in Next.js

**Static Site Generation (SSG)** means that HTML pages are generated **once at build time** (`next build`) and then served to users as static files.

Instead of generating HTML on every request (SSR), Next.js creates the page ahead of time.

---

## How SSG Works

Suppose you have a blog page.

### Build Time

When you run:

```bash
next build
```

Next.js:

1. Fetches the data.
2. Generates HTML.
3. Saves the HTML as a static file.

```text
Build
   ↓
Fetch Data
   ↓
Generate HTML
   ↓
Store Static HTML
```

---

### Request Time

When a user visits the page:

```text
User Request
      ↓
CDN/Server
      ↓
Send Pre-built HTML
```

No database queries or server rendering are needed.

---

## Example

### Page Component

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts"
  );

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

If Next.js determines that the data can be cached, it may generate this page statically during the build.

---

## Visualization

### SSG

```text
Build Time
──────────
Fetch Data
    ↓
Generate HTML
    ↓
Save HTML

Request Time
────────────
User Request
    ↓
Serve HTML
```

### SSR

```text
Every Request
─────────────
User Request
    ↓
Fetch Data
    ↓
Generate HTML
    ↓
Send Response
```

The key difference:

* **SSG:** Render once during build.
* **SSR:** Render on every request.

---

## Example: Blog Website

Imagine you have 100 blog posts.

During build:

```text
Post 1 → HTML Generated
Post 2 → HTML Generated
Post 3 → HTML Generated
...
Post 100 → HTML Generated
```

All pages are ready before users visit.

When a visitor opens a post:

```text
Request
   ↓
Serve Static HTML
```

Very fast.

---

## Benefits of SSG

### 1. Extremely Fast

Since HTML already exists:

```text
Request
   ↓
Serve File
```

No server rendering is required.

---

### 2. Excellent SEO

Search engines receive fully rendered HTML.

```html
<h1>How to Learn Next.js</h1>
<p>...</p>
```

This is ideal for indexing.

---

### 3. Low Server Cost

The server doesn't need to:

```text
Fetch Data
Render HTML
```

for every request.

Static files can often be served directly from a CDN.

---

### 4. Handles Huge Traffic

Whether:

```text
100 users
10,000 users
1,000,000 users
```

the same static file is served.

---

## Drawbacks of SSG

### 1. Data Can Become Stale

Suppose the page was built yesterday.

```text
Build at 9 AM
```

A new article is added at 10 AM.

Users still see the old version until the site is rebuilt.

---

### 2. Long Build Times

Large sites may require generating thousands of pages.

```text
10 pages      → Fast build
10000 pages   → Longer build
```

---

## SSG vs SSR

| Feature        | SSG              | SSR           |
| -------------- | ---------------- | ------------- |
| Render Time    | Build time       | Every request |
| Speed          | Very fast        | Fast          |
| Server Load    | Very low         | Higher        |
| SEO            | Excellent        | Excellent     |
| Data Freshness | Can become stale | Always fresh  |

---

## SSG vs CSR

| Feature               | SSG        | CSR     |
| --------------------- | ---------- | ------- |
| HTML Generated        | Build time | Browser |
| SEO                   | Excellent  | Weaker  |
| Initial Load          | Fast       | Slower  |
| JavaScript Dependency | Lower      | Higher  |

---

## Dynamic Routes with SSG

Suppose you have blog posts:

```text
/blog/react
/blog/nextjs
/blog/typescript
```

Next.js can generate all pages during the build.

In the App Router:

```jsx
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

Then:

```jsx
export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return <h1>{post.title}</h1>;
}
```

During the build, Next.js creates:

```text
/blog/react
/blog/nextjs
/blog/typescript
```

as static HTML files.

---

## When to Use SSG

Use SSG for content that doesn't change frequently:

✅ Blogs
✅ Documentation sites
✅ Marketing websites
✅ Portfolio websites
✅ Product landing pages

Examples:

* [Next.js Documentation](https://nextjs.org/docs?utm_source=chatgpt.com)
* Company landing pages
* Personal portfolios

---

## SSG + Hydration

Even though the page is static, React can still make parts interactive.

Server sends:

```html
<h1>Products</h1>
```

Then a Client Component hydrates:

```jsx
"use client";

export default function CartButton() {
  return (
    <button>Add to Cart</button>
  );
}
```

Result:

```text
Static HTML
     ↓
Browser loads page
     ↓
React hydrates interactive parts
```

---

## Mental Model

```text
next build
    ↓
Generate HTML Once
    ↓
Store Static Files
    ↓
User Requests Page
    ↓
Serve Pre-built HTML
    ↓
Hydrate Interactive Components
```

**SSG = "Build once, serve many times."**

That's why SSG is usually the fastest and most scalable rendering strategy in Next.js when your content doesn't need to be updated on every request.





---






# `Incremental Static Regeneration (ISR)` :

# Incremental Static Regeneration (ISR) in Next.js

**Incremental Static Regeneration (ISR)** is a hybrid approach that combines the speed of **Static Site Generation (SSG)** with the freshness of **Server-Side Rendering (SSR)**.

Instead of rebuilding the entire site whenever data changes, Next.js can **regenerate specific pages in the background after a certain time interval**.

---

## The Problem ISR Solves

### SSG

```text
Build Time
    ↓
Generate HTML
    ↓
Serve Forever
```

Fast, but content can become outdated.

---

### SSR

```text
Every Request
    ↓
Fetch Data
    ↓
Generate HTML
```

Always fresh, but more server work.

---

### ISR

```text
Generate HTML Once
       ↓
Serve Cached Page
       ↓
Regenerate When Needed
```

Fast and reasonably fresh.

---

## How ISR Works

Suppose you have a news page.

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}
```

The important part:

```js
next: {
  revalidate: 60
}
```

This tells Next.js:

> "Cache this page, but regenerate it if it's older than 60 seconds."

---

## Step-by-Step Example

### Build Time

Next.js generates:

```html
<h1>Latest News</h1>
<ul>
  <li>Article A</li>
  <li>Article B</li>
</ul>
```

and caches it.

---

### User Visits After 20 Seconds

```text
Page Age: 20 sec
Revalidate: 60 sec
```

Result:

```text
Serve Cached HTML
```

No regeneration occurs.

---

### User Visits After 70 Seconds

```text
Page Age: 70 sec
Revalidate: 60 sec
```

Next.js:

```text
Serve Existing Cached Page
          ↓
Start Background Regeneration
          ↓
Update Cache
```

The user still gets a fast response.

Future visitors receive the updated page.

---

## Visualization

```text
Build
  ↓
Generate HTML
  ↓
Cache Page
  ↓
User Requests
  ↓
Serve Cached Page
  ↓
Cache Expired?
      │
   No │ Yes
      │
      ▼
Background Regeneration
      ↓
Update Cache
```

---

## Example in App Router

```jsx
async function getProducts() {
  const res = await fetch(
    "https://api.example.com/products",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}
```

Here:

```js
revalidate: 300
```

means:

```text
Refresh every 5 minutes
```

---

## ISR Timeline Example

Assume:

```js
revalidate: 60
```

### 10:00

```text
Page Generated
```

---

### 10:00–10:59

```text
All users receive cached page.
```

---

### 11:01

```text
First request arrives.
```

Next.js:

```text
Serve old page
      ↓
Regenerate in background
```

---

### 11:02

```text
New users receive updated page.
```

---

## Benefits of ISR

### 1. Very Fast

Pages are served from cache.

```text
Request
   ↓
Cached HTML
```

---

### 2. Fresh Data

Pages automatically update.

```text
Old Cache
    ↓
Background Update
    ↓
New Cache
```

---

### 3. Scales Well

Unlike SSR:

```text
1,000,000 requests
```

does not require:

```text
1,000,000 renders
```

Most requests use cached pages.

---

### 4. Great SEO

Search engines receive complete HTML.

```html
<h1>Latest Products</h1>
```

No client-side rendering required.

---

## ISR vs SSG

| Feature      | SSG        | ISR                  |
| ------------ | ---------- | -------------------- |
| Generated At | Build Time | Build + Revalidation |
| Speed        | Very Fast  | Very Fast            |
| Freshness    | Static     | Periodically Updated |
| SEO          | Excellent  | Excellent            |

---

## ISR vs SSR

| Feature              | ISR      | SSR             |
| -------------------- | -------- | --------------- |
| Render Every Request | No       | Yes             |
| Cached               | Yes      | Usually No      |
| Data Freshness       | Periodic | Immediate       |
| Server Cost          | Lower    | Higher          |
| Speed                | Faster   | Slightly Slower |

---

## When to Use ISR

ISR is ideal when:

✅ SEO matters
✅ Data changes occasionally
✅ You want fast pages
✅ Real-time updates are not required

Examples:

* E-commerce product pages
* Blog posts
* Documentation
* News articles updated every few minutes
* Marketing websites

---

## Revalidation at Route Level

You can also set a route-wide revalidation period:

```jsx
export const revalidate = 60;

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
```

This tells Next.js:

```text
Regenerate this page every 60 seconds.
```

---

## Choosing Between SSG, ISR, and SSR

```text
Data rarely changes?
      ↓
      SSG

Data changes every few minutes/hours?
      ↓
      ISR

Data must be fresh on every request?
      ↓
      SSR
```

### Mental Model

```text
SSG
 └─ Build once

ISR
 └─ Build once + refresh occasionally

SSR
 └─ Rebuild on every request
```

So, **ISR gives you static-page performance with automatic background updates**, making it one of the most commonly used rendering strategies in production Next.js applications.





---





# `Suspense` :

## Suspense with SSR in Next.js

**Suspense** allows React to show a fallback UI (like a loading spinner or skeleton) while waiting for some part of the page to finish loading.

With **SSR**, Suspense becomes powerful because React can **stream HTML from the server** instead of waiting for the entire page to be ready.

---

## Without Suspense

Imagine a page with:

* User profile (fast)
* Recent orders (slow API call)

```text
Request
   ↓
Fetch Profile
   ↓
Fetch Orders (3 sec)
   ↓
Render Entire Page
   ↓
Send HTML
```

The user waits 3 seconds before seeing anything.

---

## With Suspense + SSR Streaming

```text
Request
   ↓
Render Profile
   ↓
Send HTML Immediately
   ↓
Show Loading Orders...
   ↓
Orders Finish Loading
   ↓
Stream Remaining HTML
```

The user sees content sooner.

---

## Example

### Slow Component

```jsx
async function Orders() {
  const orders = await fetch(
    "https://api.example.com/orders"
  ).then(res => res.json());

  return (
    <ul>
      {orders.map(order => (
        <li key={order.id}>{order.name}</li>
      ))}
    </ul>
  );
}
```

---

### Parent Page

```jsx
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading orders...</p>}>
        <Orders />
      </Suspense>
    </div>
  );
}
```

---

## What Happens?

### Initial Response

The server immediately sends:

```html
<h1>Dashboard</h1>
<p>Loading orders...</p>
```

The user can already see the page header.

---

### After Orders Load

React streams additional HTML:

```html
<ul>
  <li>Order 1</li>
  <li>Order 2</li>
</ul>
```

The loading message is replaced automatically.

---

## Visualization

```text
Server
 ├─ Dashboard (ready)
 └─ Orders (loading)

Response Stream
 ├─ Dashboard HTML
 ├─ Loading Fallback
 └─ Orders HTML later
```

---

## Streaming SSR

Suspense enables **Streaming SSR**.

Without streaming:

```text
Wait for everything
       ↓
Send page
```

With streaming:

```text
Send available content
        ↓
Send remaining content later
```

This improves:

* First Contentful Paint (FCP)
* Perceived performance
* User experience

---

## loading.js in Next.js

Next.js provides a convenient way to use Suspense at the route level.

```
app/
├── dashboard/
│   ├── page.js
│   └── loading.js
```

### loading.js

```jsx
export default function Loading() {
  return <p>Loading dashboard...</p>;
}
```

### page.js

```jsx
export default async function Dashboard() {
  const data = await getDashboardData();

  return <div>{data.title}</div>;
}
```

While the page loads, Next.js automatically shows `loading.js`.

---

## Multiple Suspense Boundaries

You can stream different sections independently.

```jsx
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense fallback={<p>Loading profile...</p>}>
        <Profile />
      </Suspense>

      <Suspense fallback={<p>Loading orders...</p>}>
        <Orders />
      </Suspense>

      <Suspense fallback={<p>Loading recommendations...</p>}>
        <Recommendations />
      </Suspense>
    </>
  );
}
```

### Result

```text
Profile loads first
      ↓
Orders load second
      ↓
Recommendations load third
```

Each section appears as soon as it's ready.

---

## Suspense Does NOT Fetch Data

A common misconception:

❌ Suspense fetches data.

Actually:

* Components fetch data.
* Suspense handles waiting and showing fallbacks.

```jsx
<Suspense fallback={<Loading />}>
  <Orders />
</Suspense>
```

Suspense only controls what users see while `Orders` is still rendering.

---

## Why Suspense Is Important in Next.js

Modern Next.js relies heavily on:

* Server Components
* Streaming SSR
* Suspense boundaries

These work together to avoid blocking the entire page on slow data.

```text
Request
   ↓
Server Components render
   ↓
Suspense boundaries split work
   ↓
HTML streams to browser
   ↓
Hydration happens
```

---

## Mental Model

Think of a restaurant:

### Without Suspense

```text
Wait until every dish is ready
           ↓
Serve everything together
```

### With Suspense

```text
Serve appetizers immediately
           ↓
Serve main course later
           ↓
Serve dessert when ready
```

The customer starts eating sooner, even though the full meal isn't finished.

Similarly, **Suspense with SSR allows Next.js to send parts of the page as they become ready, rather than making users wait for the slowest data fetch before seeing anything.**





---





# `React Server Components (RSC)` :

# React Server Components (RSC) in Next.js

**React Server Components (RSC)** are components that run **only on the server**. They render on the server and send the result to the browser, but their JavaScript is **not shipped to the client**.

In the **Next.js App Router**, all components are **Server Components by default** unless you add `"use client"`.

---

## Why React Server Components Exist

Before RSC, a React page often looked like this:

```text
Browser
   ↓
Download JS
   ↓
Fetch Data
   ↓
Render UI
```

Problems:

* Large JavaScript bundles
* Slower page loads
* Data fetching in the browser
* More client-side work

RSC changes this:

```text
Server
   ↓
Fetch Data
   ↓
Render Component
   ↓
Send Result
```

The browser receives the rendered output without needing the component's JavaScript.

---

## Basic Example

### Server Component

```jsx
export default function Home() {
  return <h1>Hello World</h1>;
}
```

This is a Server Component because there's no:

```jsx
"use client";
```

at the top.

---

## Fetching Data Directly

One major advantage is that Server Components can use `await` directly.

```jsx
async function getUsers() {
  const res = await fetch(
    "https://api.example.com/users"
  );

  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

No `useEffect`.

No loading state management.

No client-side fetch.

---

## Direct Database Access

Server Components can talk directly to a database.

```jsx
import { db } from "@/lib/db";

export default async function Page() {
  const users = await db.user.findMany();

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

The database code never reaches the browser.

---

## What Gets Sent to the Browser?

Suppose:

```jsx
export default function Page() {
  return <h1>Users</h1>;
}
```

The browser receives:

```html
<h1>Users</h1>
```

The component's implementation is not bundled for the client.

This reduces JavaScript sent to users.

---

## What Server Components Cannot Do

Because they run only on the server, they cannot use browser features.

### ❌ useState

```jsx
const [count, setCount] = useState(0);
```

Not allowed.

---

### ❌ useEffect

```jsx
useEffect(() => {
  console.log("mounted");
}, []);
```

Not allowed.

---

### ❌ Event Handlers

```jsx
<button onClick={handleClick}>
  Click
</button>
```

Not allowed.

---

### ❌ Browser APIs

```jsx
window.localStorage
```

Not available.

---

## Client Components

For interactivity, use:

```jsx
"use client";
```

Example:

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

---

## Mixing Server and Client Components

This is the most common pattern in Next.js.

### Server Component

```jsx
import Counter from "./Counter";

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>
      <Counter />
    </>
  );
}
```

### Client Component

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button>
      Count: {count}
    </button>
  );
}
```

---

## Rendering Flow

```text
Request
   ↓
Server Component Runs
   ↓
Fetch Data
   ↓
Render HTML/RSC Payload
   ↓
Send To Browser
   ↓
Hydrate Client Components
```

Only the interactive parts are hydrated.

---

## Benefits of RSC

### 1. Smaller JavaScript Bundles

Without RSC:

```text
Browser
  ↓
Downloads everything
```

With RSC:

```text
Browser
  ↓
Downloads only interactive code
```

---

### 2. Faster Initial Load

Data is fetched on the server.

```text
Server
   ↓
Fetch Data
   ↓
Render
```

Users don't wait for browser-side fetching.

---

### 3. Better Security

Database queries and secrets remain on the server.

```jsx
process.env.DB_PASSWORD
```

can be used safely in Server Components.

---

### 4. Simpler Data Fetching

No need for:

```jsx
useEffect()
useState()
loading state
```

just to load data.

---

## Server Components vs Client Components

| Feature               | Server Component | Client Component |
| --------------------- | ---------------- | ---------------- |
| Runs On               | Server           | Browser          |
| Default in App Router | ✅                | ❌                |
| useState              | ❌                | ✅                |
| useEffect             | ❌                | ✅                |
| Event Handlers        | ❌                | ✅                |
| Database Access       | ✅                | ❌                |
| Browser APIs          | ❌                | ✅                |
| JS Sent to Browser    | Minimal          | Yes              |

---

## When to Use Each

### Use Server Components For

✅ Data fetching
✅ Database queries
✅ API calls
✅ Static content
✅ SEO-focused pages

Example:

```jsx
async function ProductsPage() {
  const products = await getProducts();
  return <Products products={products} />;
}
```

---

### Use Client Components For

✅ Forms
✅ Buttons
✅ Modals
✅ State management
✅ Event handlers

Example:

```jsx
"use client";

function SearchInput() {
  const [query, setQuery] = useState("");
}
```

---

## Mental Model

Think of Server Components as the **backend part of your UI** and Client Components as the **interactive part of your UI**.

```text
Server Component
      │
      ├── Fetch data
      ├── Access database
      └── Render content

Client Component
      │
      ├── Handle clicks
      ├── Manage state
      └── Use browser APIs
```

A typical Next.js App Router page looks like:

```text
Page (Server Component)
        │
        ├── Product List (Server Component)
        │
        ├── Search Bar (Client Component)
        │
        └── Cart Button (Client Component)
```

This combination gives you the performance benefits of server rendering and the interactivity of client-side React.





---






# `Client Components` :

# Client Components in Next.js

A **Client Component** is a React component that runs in the **browser**. It is used when your component needs:

* State (`useState`)
* Effects (`useEffect`)
* Event handlers (`onClick`, `onChange`, etc.)
* Browser APIs (`window`, `localStorage`, `navigator`)
* Client-side libraries that depend on the browser

In Next.js App Router, a component becomes a Client Component when you add:

```jsx
"use client";
```

at the top of the file.

---

## Why Do We Need Client Components?

Imagine a counter:

```jsx
<button>Count: 0</button>
```

When the user clicks the button, the count should increase.

This requires:

* Tracking state
* Handling click events
* Updating the UI

These things happen in the browser, so we need a Client Component.

---

## Basic Example

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### What happens?

1. Next.js sends the component's JavaScript to the browser.
2. React hydrates the component.
3. User clicks the button.
4. State updates.
5. React re-renders the component.

---

## Rendering Flow

```text
Server
   ↓
Send HTML + JS
   ↓
Browser
   ↓
Hydration
   ↓
Interactive Component
```

---

## Features Available in Client Components

### 1. useState

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

### 2. useEffect

```jsx
"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

Runs after the component mounts in the browser.

---

### 3. Event Handlers

```jsx
"use client";

export default function Button() {
  return (
    <button
      onClick={() => alert("Clicked")}
    >
      Click Me
    </button>
  );
}
```

---

### 4. Browser APIs

```jsx
"use client";

export default function Page() {
  const width = window.innerWidth;

  return <p>{width}</p>;
}
```

(Usually you'd access `window` inside `useEffect` to avoid rendering issues.)

---

## Data Fetching in Client Components

```jsx
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Flow

```text
Render Component
       ↓
useEffect Runs
       ↓
Fetch Data
       ↓
Update State
       ↓
Re-render
```

---

# What Client Components Cannot Do Efficiently

Although they can fetch data, they're not ideal for:

* Database access
* Secure API keys
* Server-only code
* Large data fetching before initial render

For those, use **Server Components**.

---

## Server vs Client Components

| Feature               | Server Component | Client Component |
| --------------------- | ---------------- | ---------------- |
| Runs On               | Server           | Browser          |
| Default in App Router | ✅                | ❌                |
| useState              | ❌                | ✅                |
| useEffect             | ❌                | ✅                |
| onClick               | ❌                | ✅                |
| Browser APIs          | ❌                | ✅                |
| Database Access       | ✅                | ❌                |
| JS Sent to Browser    | Minimal          | Yes              |

---

## Combining Server and Client Components

This is the most common pattern.

### Client Component

```jsx
"use client";

export default function AddToCartButton() {
  return (
    <button>
      Add to Cart
    </button>
  );
}
```

### Server Component

```jsx
import AddToCartButton from "./AddToCartButton";

export default async function ProductPage() {
  const product = await getProduct();

  return (
    <>
      <h1>{product.name}</h1>
      <AddToCartButton />
    </>
  );
}
```

### Flow

```text
Server Component
      ↓
Fetch Product Data
      ↓
Render Product Page
      ↓
Client Component Hydrates
      ↓
User Can Interact
```

---

## Why Not Make Everything a Client Component?

You could, but you'd lose many benefits of Next.js:

### More JavaScript

```text
Large Bundle
      ↓
Longer Download
```

### Slower Initial Load

```text
Download JS
      ↓
Execute JS
      ↓
Render UI
```

### Less Efficient Data Fetching

```text
Browser
   ↓
API Request
   ↓
Render Data
```

Instead of:

```text
Server
   ↓
Fetch Data
   ↓
Render HTML
```

---

## When to Use Client Components

Use Client Components when you need:

✅ `useState`
✅ `useEffect`
✅ Event handlers (`onClick`, `onSubmit`)
✅ Form interactions
✅ Modals and dropdowns
✅ Browser APIs (`window`, `localStorage`)
✅ Real-time UI updates

Examples:

* Search input
* Shopping cart button
* Theme switcher
* Login form
* Modal dialog
* Interactive charts

---

## Mental Model

```text
Server Components
      ↓
Data Fetching
SEO
Database Access

Client Components
      ↓
Interactivity
State
Effects
Browser APIs
```

A typical Next.js page looks like:

```text
Product Page (Server Component)
        │
        ├── Product Details (Server Component)
        ├── Reviews (Server Component)
        └── Add To Cart Button (Client Component)
```

**Rule of thumb:** Keep components as **Server Components by default** and add `"use client"` only when you need browser-side interactivity. This keeps your application faster and sends less JavaScript to users.





---





# `Rendering Lifecycle in React Server Components (RSC)` :

# Rendering Lifecycle in React Server Components (RSC)

Understanding the **RSC rendering lifecycle** is important because it is very different from traditional React Client Components.

---

# High-Level Flow

```text
Browser Request
      ↓
Next.js Server
      ↓
Render Server Components
      ↓
Fetch Data
      ↓
Generate RSC Payload
      ↓
Send HTML + RSC Payload
      ↓
Browser Receives Response
      ↓
Hydrate Client Components
      ↓
Interactive Page
```

---

# Example

Suppose you have:

```jsx
// app/page.js
import Counter from "./Counter";

export default async function Page() {
  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

      <Counter />
    </>
  );
}
```

```jsx
// Counter.jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

---

# Step 1: Request Arrives

User visits:

```text
/users
```

Browser sends:

```http
GET /users
```

to the Next.js server.

---

# Step 2: Server Component Execution

Next.js starts executing Server Components.

```jsx
export default async function Page() {
```

This runs **only on the server**.

---

# Step 3: Data Fetching

```jsx
const users = await getUsers();
```

Server fetches:

```text
Database
API
CMS
Filesystem
```

directly.

No browser request is involved.

---

# Step 4: Build RSC Tree

React builds an internal component tree.

```text
Page
 ├── h1
 ├── User List
 └── Counter(Client Component)
```

---

# Step 5: Generate RSC Payload

React does **not** send JavaScript for Server Components.

Instead it generates a special payload:

```text
Page
 ├── h1 Users
 ├── User Data
 └── Placeholder for Counter
```

This is often called the **React Flight Payload**.

Think of it as:

```json
{
  "type": "Page",
  "children": [
    "Users",
    ["John", "Alice"],
    {
      "clientComponent": "Counter"
    }
  ]
}
```

(Not the actual format, just a conceptual representation.)

---

# Step 6: Generate HTML

Next.js converts the tree into HTML.

```html
<h1>Users</h1>
<p>John</p>
<p>Alice</p>
<button>0</button>
```

---

# Step 7: Stream Response

Instead of waiting for everything:

```text
Render Entire Page
      ↓
Send Response
```

React can stream pieces.

```text
Header Ready
      ↓
Send

Users Ready
      ↓
Send

Slow Section Ready
      ↓
Send
```

This is where Suspense becomes useful.

---

# Step 8: Browser Receives HTML

Browser immediately displays:

```html
<h1>Users</h1>
<p>John</p>
<p>Alice</p>
<button>0</button>
```

At this moment:

```text
Visible
≠
Interactive
```

The button is rendered but not yet interactive.

---

# Step 9: Download Client Component JS

Browser downloads JavaScript for:

```jsx
"use client";
```

components only.

In our example:

```text
Counter.js
```

gets downloaded.

The Server Component code is never sent.

---

# Step 10: Hydration

React hydrates Client Components.

```text
HTML Button
      ↓
Attach Events
      ↓
Interactive Button
```

Now:

```jsx
<button onClick={...}>
```

works.

---

# What Happens on Navigation?

Suppose user clicks:

```text
/products
```

in a Next.js app.

Traditional SSR:

```text
Request New Page
      ↓
Receive Full HTML
```

RSC:

```text
Request New RSC Payload
      ↓
Update React Tree
      ↓
Preserve Client State
```

This is much more efficient.

---

# Lifecycle Diagram

```text
1. Browser Request
          ↓
2. Execute Server Components
          ↓
3. Fetch Data
          ↓
4. Build Component Tree
          ↓
5. Generate RSC Payload
          ↓
6. Generate HTML
          ↓
7. Stream Response
          ↓
8. Browser Displays HTML
          ↓
9. Download Client JS
          ↓
10. Hydrate Client Components
          ↓
11. Interactive UI
```

---

# What Does NOT Happen in RSC?

Server Components do not have a client lifecycle.

These hooks are unavailable:

```jsx
useState()
useEffect()
useReducer()
```

Because they never run in the browser.

There is no:

```text
Mount
Update
Unmount
```

lifecycle on the client for a Server Component.

Instead:

```text
Request
   ↓
Execute
   ↓
Render
   ↓
Discard
```

A Server Component is essentially a function that runs on the server to produce UI.

---

# RSC vs Client Component Lifecycle

### Server Component

```text
Request
   ↓
Execute on Server
   ↓
Fetch Data
   ↓
Generate Payload
   ↓
Done
```

### Client Component

```text
Render
   ↓
Mount
   ↓
useEffect
   ↓
State Updates
   ↓
Re-render
   ↓
Unmount
```

---

# Key Insight

A **Server Component does not stay alive after rendering**.

Think of it like this:

```text
Request comes in
      ↓
Server Component runs
      ↓
Produces UI description
      ↓
Process ends
```

While a **Client Component lives in the browser** and continues responding to state changes and user interactions.

That's why the recommended Next.js architecture is:

```text
Server Components
      ↓
Data fetching
Database access
SEO content

Client Components
      ↓
Forms
Buttons
Modals
State
Interactivity
```

This separation is the core of the React Server Components rendering lifecycle.





---





# `Static Rendering vs Dynamic Rendering` :

# Static Rendering vs Dynamic Rendering in Next.js

In the **App Router**, Next.js decides whether a route should be rendered **statically** or **dynamically**.

The key question is:

> **Can this page be generated ahead of time, or does it need fresh data for every request?**

---

# 1. Static Rendering

With **static rendering**, HTML is generated once and cached.

```text
Build Time
    ↓
Generate HTML
    ↓
Store in Cache/CDN
    ↓
Serve to Users
```

### Example

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts"
  );

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

If Next.js determines the data can be cached, it may statically render this page.

---

## Static Rendering Lifecycle

```text
next build
    ↓
Execute Server Component
    ↓
Fetch Data
    ↓
Generate HTML + RSC Payload
    ↓
Cache Result

User Request
    ↓
Serve Cached Result
```

No server rendering occurs for each request.

---

## Benefits

✅ Very fast

✅ Low server cost

✅ Excellent SEO

✅ Easy CDN caching

---

## Drawback

❌ Data may become stale.

---

# 2. Dynamic Rendering

With **dynamic rendering**, the route is rendered for every request.

```text
Request
    ↓
Execute Component
    ↓
Fetch Data
    ↓
Generate HTML
    ↓
Send Response
```

### Example

```jsx
async function getPosts() {
  const res = await fetch(
    "https://api.example.com/posts",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

The important part:

```js
cache: "no-store"
```

This tells Next.js:

> "Always fetch fresh data."

---

## Dynamic Rendering Lifecycle

```text
Request #1
    ↓
Fetch Data
    ↓
Render

Request #2
    ↓
Fetch Data Again
    ↓
Render Again

Request #3
    ↓
Fetch Data Again
    ↓
Render Again
```

Every request gets fresh content.

---

## Benefits

✅ Always up-to-date

✅ User-specific content

✅ Personalized pages

---

## Drawbacks

❌ More server work

❌ Slower than cached static pages

---

# How Next.js Decides

Next.js tries to statically render whenever possible.

For example:

```jsx
export default async function Page() {
  const data = await fetch(
    "https://api.example.com/posts"
  ).then(res => res.json());

  return <div>{data.length}</div>;
}
```

Because the fetch is cacheable by default, Next.js may choose static rendering.

---

# What Makes a Route Dynamic?

Certain APIs require request-time information, forcing dynamic rendering.

### Using Cookies

```jsx
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();

  return <div>Dashboard</div>;
}
```

Since cookies differ per user, the page must be rendered per request.

---

### Using Headers

```jsx
import { headers } from "next/headers";

export default async function Page() {
  const headerList = await headers();

  return <div>Page</div>;
}
```

Request headers are only available at runtime.

---

### Using `cache: "no-store"`

```jsx
await fetch(url, {
  cache: "no-store",
});
```

Forces dynamic rendering.

---

### Using `dynamic = "force-dynamic"`

```jsx
export const dynamic = "force-dynamic";
```

Forces request-time rendering.

---

# Static vs Dynamic Visualization

### Static

```text
Build
  ↓
Render Once
  ↓
Cache

User A
  ↓
Cached Page

User B
  ↓
Cached Page

User C
  ↓
Cached Page
```

---

### Dynamic

```text
User A
  ↓
Render

User B
  ↓
Render

User C
  ↓
Render
```

---

# Route Segment Configs

### Force Static

```jsx
export const dynamic = "force-static";
```

Always statically render if possible.

---

### Force Dynamic

```jsx
export const dynamic = "force-dynamic";
```

Always render at request time.

---

# ISR: The Middle Ground

ISR sits between static and dynamic rendering.

```jsx
export const revalidate = 60;
```

Flow:

```text
Build
   ↓
Generate Page
   ↓
Cache

After 60s
   ↓
Regenerate in Background
```

So:

```text
Static  ←──── ISR ────→ Dynamic
Fast                     Fresh
```

---

# Comparison Table

| Feature        | Static Rendering | Dynamic Rendering |
| -------------- | ---------------- | ----------------- |
| Render Time    | Build time       | Request time      |
| Speed          | Fastest          | Slower            |
| SEO            | Excellent        | Excellent         |
| Data Freshness | Can become stale | Always fresh      |
| Server Cost    | Low              | Higher            |
| CDN Cache      | Excellent        | Limited           |

---

# Real-World Examples

### Static Rendering

* Blog posts
* Documentation
* Marketing pages
* Company websites

```text
Content changes rarely
```

---

### Dynamic Rendering

* User dashboard
* Shopping cart
* Banking portal
* Personalized feed

```text
Content changes per request/user
```

---

# Mental Model

```text
Can page be generated ahead of time?
           │
        Yes ▼
      Static Rendering

           │
        No ▼
     Dynamic Rendering
```

Or:

```text
Same page for everyone?
        ↓
      Static

Different for each user/request?
        ↓
      Dynamic
```

In modern Next.js, **Server Components can participate in either static or dynamic rendering**. Being a Server Component does **not** automatically mean dynamic rendering—the rendering mode is determined by how data is fetched and whether request-specific information is used.





---





# `generateStaticParams()` :

`generateStaticParams()` is a Next.js App Router feature used to **pre-generate dynamic routes at build time**.

Think of it as the App Router replacement for:

```js
getStaticPaths()
```

from the Pages Router.

---

# Why Do We Need It?

Suppose you have a dynamic route:

```text
app/
 └── blog/
      └── [slug]/
           └── page.js
```

URLs:

```text
/blog/react
/blog/nextjs
/blog/typescript
```

Next.js doesn't know which `slug` values exist.

`generateStaticParams()` tells Next.js:

> "These are the route parameters you should build ahead of time."

---

# Example

## Folder Structure

```text
app/
 └── blog/
      └── [slug]/
           └── page.js
```

### page.js

```jsx
export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" },
    { slug: "typescript" },
  ];
}

export default function BlogPost({ params }) {
  return <h1>{params.slug}</h1>;
}
```

---

## During Build

When you run:

```bash
next build
```

Next.js executes:

```js
generateStaticParams()
```

and gets:

```js
[
  { slug: "react" },
  { slug: "nextjs" },
  { slug: "typescript" },
]
```

Then it generates:

```text
/blog/react
/blog/nextjs
/blog/typescript
```

as static pages.

---

# Build-Time Flow

```text
next build
    ↓
generateStaticParams()
    ↓
Get All Slugs
    ↓
Render Each Route
    ↓
Generate HTML + RSC Payload
    ↓
Store in Cache
```

---

# Fetching Params from an API

Usually the params come from a database or API.

```jsx
export async function generateStaticParams() {
  const posts = await fetch(
    "https://api.example.com/posts"
  ).then(res => res.json());

  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

Example API response:

```json
[
  {
    "id": 1,
    "slug": "react"
  },
  {
    "id": 2,
    "slug": "nextjs"
  }
]
```

Generated routes:

```text
/blog/react
/blog/nextjs
```

---

# Accessing Params in the Page

```jsx
export default async function Page({ params }) {
  return <h1>{params.slug}</h1>;
}
```

For:

```text
/blog/react
```

you get:

```js
params = {
  slug: "react"
}
```

---

# Multiple Dynamic Segments

Folder:

```text
app/
 └── products/
      └── [category]/
           └── [id]/
                └── page.js
```

### generateStaticParams

```jsx
export async function generateStaticParams() {
  return [
    {
      category: "phones",
      id: "1",
    },
    {
      category: "phones",
      id: "2",
    },
    {
      category: "laptops",
      id: "5",
    },
  ];
}
```

Generated:

```text
/products/phones/1
/products/phones/2
/products/laptops/5
```

---

# Relation to Static Rendering

Without `generateStaticParams()`:

```text
/blog/[slug]
```

Next.js may not know which pages to build.

With `generateStaticParams()`:

```text
Build Time
   ↓
Know all route values
   ↓
Generate static pages
```

This enables **Static Site Generation (SSG)** for dynamic routes.

---

# generateStaticParams + ISR

You can combine it with revalidation:

```jsx
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

Result:

```text
Known routes
    ↓
Pre-generated at build time
    ↓
Revalidated every 60s
```

So you get:

* Static generation
* Fast pages
* Periodic updates

---

# What Happens for Unknown Routes?

Suppose:

```js
generateStaticParams()
```

returns:

```js
[
  { slug: "react" },
  { slug: "nextjs" }
]
```

Built pages:

```text
/blog/react
/blog/nextjs
```

Request:

```text
/blog/angular
```

Behavior depends on your route configuration. By default, if the path wasn't generated and can't be rendered dynamically, Next.js can return a 404.

---

# Comparison with Pages Router

| Pages Router         | App Router                     |
| -------------------- | ------------------------------ |
| `getStaticPaths()`   | `generateStaticParams()`       |
| `getStaticProps()`   | Server Component data fetching |
| Build dynamic routes | Build dynamic routes           |

Old:

```js
export async function getStaticPaths() {}
```

New:

```js
export async function generateStaticParams() {}
```

---

## Mental Model

```text
Dynamic Route
      ↓
/blog/[slug]

generateStaticParams()
      ↓
["react", "nextjs", "typescript"]
      ↓
next build
      ↓
Generate:

/blog/react
/blog/nextjs
/blog/typescript
```

So `generateStaticParams()` answers one specific question:

> **"For this dynamic route, which parameter values should Next.js pre-render at build time?"**





---




# `dynamicParams` :

`dynamicParams` controls what happens when a user requests a dynamic route parameter that was **not returned by `generateStaticParams()`**.

---

## Example

Folder:

```text
app/
 └── blog/
      └── [slug]/
           └── page.js
```

```jsx
export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" },
  ];
}
```

At build time, Next.js generates:

```text
/blog/react
/blog/nextjs
```

Now a user visits:

```text
/blog/angular
```

What should happen?

That's what `dynamicParams` decides.

---

# `dynamicParams = true` (Default)

```jsx
export const dynamicParams = true;
```

If the requested param wasn't generated:

```text
/blog/angular
```

Next.js will try to render it dynamically at request time.

Flow:

```text
Request /blog/angular
        ↓
Not in generated params
        ↓
Render dynamically
        ↓
Return page
```

This is similar to the old Pages Router behavior:

```js
fallback: "blocking"
```

---

### Example

```jsx
export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" },
  ];
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return <h1>{post.title}</h1>;
}
```

Requests:

```text
/blog/react
```

→ served from pre-rendered output

```text
/blog/angular
```

→ generated on demand

---

# `dynamicParams = false`

```jsx
export const dynamicParams = false;
```

Now only the params returned by `generateStaticParams()` are valid.

Request:

```text
/blog/angular
```

Result:

```text
404 Not Found
```

Flow:

```text
Request /blog/angular
        ↓
Not in generated params
        ↓
404
```

---

### Example

```jsx
export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" },
  ];
}
```

Valid:

```text
/blog/react
/blog/nextjs
```

Invalid:

```text
/blog/angular
```

→ 404

---

# Why Use `dynamicParams = false`?

When you know the complete set of valid routes.

Examples:

* Documentation pages
* Product categories
* Static marketing content
* Country codes
* Known slugs

Example:

```text
/docs/react
/docs/nextjs
/docs/typescript
```

You don't want random URLs generating pages.

```jsx
export const dynamicParams = false;
```

---

# Relationship with `generateStaticParams`

Think of them as working together.

### `generateStaticParams`

Defines:

```text
Which routes are pre-generated?
```

### `dynamicParams`

Defines:

```text
What happens for routes NOT in that list?
```

---

## Visualization

### `dynamicParams = true`

```text
generateStaticParams()
        ↓
react
nextjs

Request:
angular
    ↓
Render dynamically
```

---

### `dynamicParams = false`

```text
generateStaticParams()
        ↓
react
nextjs

Request:
angular
    ↓
404
```

---

# Common Pattern

```jsx
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}
```

This means:

```text
Build all known posts
        +
Reject unknown URLs
```

---

# Comparison with Pages Router

| Pages Router           | App Router              |
| ---------------------- | ----------------------- |
| `fallback: false`      | `dynamicParams = false` |
| `fallback: "blocking"` | `dynamicParams = true`  |

Conceptually:

```text
fallback: false
        ≈
dynamicParams = false

fallback: "blocking"
        ≈
dynamicParams = true
```

---

## Mental Model

```text
generateStaticParams()
        ↓
Returns:
["react", "nextjs"]

dynamicParams = false
        ↓
Only these URLs exist

dynamicParams = true
        ↓
Other URLs can be generated on demand
```

So:

* **`generateStaticParams()`** = "Which dynamic routes should be pre-rendered?"
* **`dynamicParams`** = "What should happen if someone requests a route that wasn't pre-rendered?"





---





# `Streaming` :

# Streaming in Next.js

**Streaming** means sending parts of a page to the browser as soon as they are ready, instead of waiting for the entire page to finish rendering.

Without streaming:

```text
Request
   ↓
Fetch A
   ↓
Fetch B
   ↓
Fetch C
   ↓
Render Entire Page
   ↓
Send Response
```

The user sees nothing until everything finishes.

---

# The Problem Streaming Solves

Imagine a dashboard:

```text
Dashboard
 ├── User Info (100ms)
 ├── Orders (500ms)
 └── Analytics (5s)
```

Without streaming:

```text
Wait 5 seconds
     ↓
Send whole page
```

Even though User Info was ready after 100ms.

---

# With Streaming

```text
Request
   ↓
Render User Info
   ↓
Send to Browser
   ↓
Render Orders
   ↓
Send to Browser
   ↓
Render Analytics
   ↓
Send to Browser
```

The user sees content progressively.

```text
0.1s → User Info appears
0.5s → Orders appear
5.0s → Analytics appear
```

---

# Streaming Uses React Suspense

Streaming is built on top of React's `Suspense`.

Example:

```jsx
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <>
      <UserInfo />

      <Suspense fallback={<p>Loading orders...</p>}>
        <Orders />
      </Suspense>

      <Suspense fallback={<p>Loading analytics...</p>}>
        <Analytics />
      </Suspense>
    </>
  );
}
```

---

# What Happens Internally?

Suppose:

```text
UserInfo     → 100ms
Orders       → 500ms
Analytics    → 5s
```

Initial HTML sent:

```html
<h1>Dashboard</h1>

<div>User Info</div>

<p>Loading orders...</p>

<p>Loading analytics...</p>
```

Browser immediately displays:

```text
Dashboard

User Info

Loading orders...
Loading analytics...
```

---

After 500ms:

```html
<div>Orders Content</div>
```

is streamed and replaces:

```text
Loading orders...
```

---

After 5s:

```html
<div>Analytics Content</div>
```

replaces:

```text
Loading analytics...
```

---

# Visual Timeline

Without Streaming:

```text
0s ────────────────────── 5s
            ↓
      Entire page appears
```

With Streaming:

```text
0s
 ↓
Shell appears

0.5s
 ↓
Orders appear

5s
 ↓
Analytics appear
```

---

# `loading.js`

Next.js provides automatic streaming support through `loading.js`.

Folder structure:

```text
app/
 └── dashboard/
      ├── page.js
      └── loading.js
```

### loading.js

```jsx
export default function Loading() {
  return <p>Loading dashboard...</p>;
}
```

### page.js

```jsx
export default async function Dashboard() {
  const data = await getData();

  return <div>{data.name}</div>;
}
```

When navigation starts:

```text
User clicks link
      ↓
Show loading.js immediately
      ↓
Page streams in when ready
```

Next.js automatically wraps the route in a Suspense boundary.

---

# Streaming and Server Components

Streaming works especially well with **Server Components**.

Example:

```jsx
async function Orders() {
  const orders = await getOrders();

  return <OrdersList orders={orders} />;
}
```

```jsx
<Suspense fallback={<OrdersSkeleton />}>
  <Orders />
</Suspense>
```

The server can:

```text
Render page shell
       ↓
Send shell
       ↓
Continue fetching orders
       ↓
Stream orders later
```

---

# What Gets Streamed?

Two things are sent:

1. HTML chunks
2. React Server Component (Flight) payload chunks

Conceptually:

```text
Request
   ↓
Server Components execute
   ↓
Generate partial HTML
   ↓
Stream chunk
   ↓
Generate next chunk
   ↓
Stream chunk
```

---

# Streaming vs SSR

Traditional SSR:

```text
Request
   ↓
Wait for everything
   ↓
Generate HTML
   ↓
Send HTML
```

Streaming SSR:

```text
Request
   ↓
Generate first part
   ↓
Send immediately
   ↓
Generate next part
   ↓
Send
   ↓
Generate next part
   ↓
Send
```

---

# Streaming vs Hydration

These are different concepts.

### Streaming

Controls:

```text
When HTML arrives
```

### Hydration

Controls:

```text
When JavaScript becomes interactive
```

Flow:

```text
Request
   ↓
Streaming HTML
   ↓
Browser displays content
   ↓
Download JS
   ↓
Hydration
   ↓
Interactive UI
```

So a page can be:

```text
Visible
but
Not Interactive Yet
```

because streaming happened before hydration finished.

---

# Real Example

Imagine an e-commerce page:

```text
Product Page
 ├── Product Details
 ├── Reviews
 └── Recommendations
```

```jsx
export default function ProductPage() {
  return (
    <>
      <ProductDetails />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<ProductsSkeleton />}>
        <Recommendations />
      </Suspense>
    </>
  );
}
```

Result:

```text
Instant:
  Product details

Soon:
  Reviews

Later:
  Recommendations
```

The user starts reading immediately instead of waiting for everything.

---

## Mental Model

```text
Without Streaming

Request
   ↓
Wait
   ↓
Wait
   ↓
Wait
   ↓
Show Page
```

```text
With Streaming

Request
   ↓
Show What Is Ready
   ↓
Show More
   ↓
Show More
   ↓
Show More
```

Streaming makes pages feel faster because users see useful content as soon as it's available, rather than waiting for the slowest part of the page to finish rendering.





---





# `server and client composition patters` :

In Next.js App Router, **composition patterns** are about how you combine **Server Components** and **Client Components** effectively.

The general rule is:

```text
Server Components
    ↓
Fetch data
Access DB
Access secrets

Client Components
    ↓
Interactivity
State
Effects
Event handlers
```

---

# 1. Server Component → Client Component (Most Common)

This is the recommended pattern.

```jsx
// Server Component
import LikeButton from "./LikeButton";

export default async function PostPage() {
  const post = await getPost();

  return (
    <>
      <h1>{post.title}</h1>
      <LikeButton />
    </>
  );
}
```

```jsx
// Client Component
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      {likes}
    </button>
  );
}
```

### Component Tree

```text
PostPage (Server)
    │
    └── LikeButton (Client)
```

This is the pattern you'll use most often.

---

# 2. Passing Data from Server to Client

Server Components fetch data and pass it as props.

```jsx
// Server Component
import UserProfile from "./UserProfile";

export default async function Page() {
  const user = await getUser();

  return (
    <UserProfile user={user} />
  );
}
```

```jsx
"use client";

export default function UserProfile({ user }) {
  return <h1>{user.name}</h1>;
}
```

Flow:

```text
Server
   ↓
Fetch Data
   ↓
Pass Props
   ↓
Client Component
```

---

# 3. Client Component Cannot Import Server Component

❌ Invalid:

```jsx
"use client";

import ServerWidget from "./ServerWidget";

export default function Dashboard() {
  return <ServerWidget />;
}
```

Why?

```text
Client Component
runs in browser

Server Component
runs on server
```

The browser cannot execute server-only code.

---

# 4. Supported Alternative: Pass Server Component as Children

Instead of importing a Server Component into a Client Component, compose them from a Server Component.

### Server Component

```jsx
import Modal from "./Modal";
import Cart from "./Cart";

export default function Page() {
  return (
    <Modal>
      <Cart />
    </Modal>
  );
}
```

### Client Component

```jsx
"use client";

export default function Modal({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}
```

### Tree

```text
Page (Server)
   │
   ├── Modal (Client)
   │
   └── Cart (Server)
```

This works because React already rendered the Server Component on the server and passes the result into the Client Component.

---

# 5. Moving Client Components Down the Tree

Bad:

```jsx
"use client";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}
```

Everything under this component becomes part of the client bundle.

---

Better:

```jsx
export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Search />
    </>
  );
}
```

```jsx
"use client";

export default function Search() {
  // interactive
}
```

Tree:

```text
Layout (Server)
 ├── Header (Server)
 ├── Sidebar (Server)
 └── Search (Client)
```

This minimizes JavaScript sent to the browser.

---

# 6. Sharing Data Between Server and Client

Server fetches:

```jsx
export default async function Page() {
  const products = await getProducts();

  return (
    <ProductGrid
      products={products}
    />
  );
}
```

Client receives:

```jsx
"use client";

export default function ProductGrid({
  products,
}) {
  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </>
  );
}
```

Flow:

```text
Database
    ↓
Server Component
    ↓
Serialized Props
    ↓
Client Component
```

Props must be serializable (objects, arrays, strings, numbers, booleans, etc.).

---

# 7. Using Context Providers

React Context requires a Client Component.

### Provider

```jsx
"use client";

import { createContext } from "react";

export const ThemeContext =
  createContext();
```

```jsx
"use client";

export default function ThemeProvider({
  children,
}) {
  return (
    <ThemeContext.Provider
      value="dark"
    >
      {children}
    </ThemeContext.Provider>
  );
}
```

### Layout

```jsx
import ThemeProvider
  from "./ThemeProvider";

export default function RootLayout({
  children,
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

# 8. Interleaving Server and Client Components

Example:

```text
Page (Server)
 │
 ├── Header (Server)
 │
 ├── SearchBar (Client)
 │
 ├── ProductList (Server)
 │
 └── CartButton (Client)
```

```jsx
export default function Page() {
  return (
    <>
      <Header />
      <SearchBar />
      <ProductList />
      <CartButton />
    </>
  );
}
```

This is a very common structure.

---

# 9. Server Actions Pattern

Server logic can be invoked from Client Components through Server Actions.

### Server Action

```jsx
"use server";

export async function createPost(
  formData
) {
  await db.post.create({
    title: formData.get("title"),
  });
}
```

### Client Component

```jsx
"use client";

import { createPost }
  from "./actions";

export default function Form() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button>Save</button>
    </form>
  );
}
```

Flow:

```text
Client Form
    ↓
Server Action
    ↓
Database
```

No API route required.

---

# Recommended Architecture

For most pages:

```text
Page (Server)
    │
    ├── Fetch Data
    │
    ├── Header (Server)
    │
    ├── Content (Server)
    │
    ├── Search (Client)
    │
    ├── Filters (Client)
    │
    └── LikeButton (Client)
```

The key principle is:

```text
Keep components as Server Components by default.

Only use Client Components for
state,
effects,
browser APIs,
and user interactions.
```

This gives you:

* Smaller JavaScript bundles
* Faster initial page loads
* Better SEO
* Less client-side work
* Easier access to databases and secrets from Server Components





---





# `server-only code` :

In Next.js, **server-only code** means code that must **never be included in the browser bundle** and should only execute on the server.

Examples:

* Database queries
* API keys
* Secret tokens
* File system access
* Internal services

---

# Why?

Suppose you have:

```js
const apiKey = process.env.PAYMENT_SECRET_KEY;
```

If this code accidentally ends up in a Client Component, you could expose sensitive information.

Server-only code prevents that.

---

# Example: Database Access

```js
// lib/db.js

import { db } from "./database";

export async function getUsers() {
  return db.user.findMany();
}
```

This should only run on the server because:

```text
Browser
   ✗ No database access

Server
   ✓ Database access
```

---

# The `server-only` Package

Next.js provides a package specifically for this purpose.

```bash
npm install server-only
```

Then:

```js
import "server-only";

export async function getUsers() {
  return db.user.findMany();
}
```

---

# What Does It Do?

```js
import "server-only";
```

doesn't change runtime behavior.

Instead, it tells Next.js:

> "This module may only be imported by Server Components or server-side code."

If a Client Component imports it:

```jsx
"use client";

import { getUsers } from "@/lib/users";
```

you'll get a build/runtime error.

---

# Example

### Server-only Module

```js
// lib/users.js

import "server-only";

export async function getUsers() {
  return fetchUsersFromDB();
}
```

### Server Component

```jsx
export default async function Page() {
  const users = await getUsers();

  return <div>{users.length}</div>;
}
```

✅ Works

---

### Client Component

```jsx
"use client";

import { getUsers } from "@/lib/users";
```

❌ Error

Because `users.js` is marked as server-only.

---

# What Should Be Server-Only?

## Database Access

```js
import "server-only";

export async function getProducts() {
  return db.product.findMany();
}
```

---

## Secret Environment Variables

```js
import "server-only";

export const stripeSecret =
  process.env.STRIPE_SECRET_KEY;
```

---

## Internal API Calls

```js
import "server-only";

export async function getAnalytics() {
  return fetch(
    process.env.INTERNAL_API_URL
  );
}
```

---

## File System Access

```js
import "server-only";

import fs from "fs/promises";
```

Browser environments cannot use:

```js
fs
path
os
```

---

# What Is NOT Server-Only?

Pure utility functions.

```js
export function formatDate(date) {
  return new Intl.DateTimeFormat().format(date);
}
```

This can run:

```text
Server ✓
Client ✓
```

No need for `server-only`.

---

# Relationship with Server Components

A Server Component is rendered on the server:

```jsx
export default async function Page() {
  const users = await getUsers();

  return <div>{users.length}</div>;
}
```

But that doesn't automatically protect imported modules from future misuse.

Using:

```js
import "server-only";
```

adds an extra safety layer.

---

# Client-Only Equivalent

There is also the opposite pattern:

```js
import "client-only";
```

for modules that require:

* `window`
* `document`
* browser APIs

Example:

```js
import "client-only";

export function getScreenWidth() {
  return window.innerWidth;
}
```

This prevents accidental server imports.

---

# Common Project Structure

```text
app/
components/
lib/
 ├── db.js
 ├── users.js
 └── products.js
```

```js
// lib/users.js

import "server-only";

export async function getUsers() {
  return db.user.findMany();
}
```

```js
// lib/products.js

import "server-only";

export async function getProducts() {
  return db.product.findMany();
}
```

Now all data-access code is guaranteed to stay on the server.

---

# Mental Model

```text
Server Component
      ↓
Import getUsers()
      ↓
Database Query
      ↓
Return Data
```

```text
Client Component
      ↓
Import getUsers()
      ↓
❌ Build Error
```

when the module contains:

```js
import "server-only";
```

So the purpose of `server-only` is **not to make code run on the server**—Server Components already do that. Its purpose is to **enforce that certain modules can never be imported into client-side code**, protecting secrets, databases, and other server-exclusive functionality.





---





# `third-party package` :

In Next.js, a **third-party package** is any library you install from npm and use in your application.

```bash
npm install axios
```

Now `axios` becomes a third-party package because it was created by someone outside your project.

---

# Example 1: Server-Side Package

Suppose you install Axios:

```bash
npm install axios
```

### Server Component

```tsx
import axios from "axios";

export default async function Page() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return <h1>{response.data.title}</h1>;
}
```

### What happens?

```text
Browser
   ↓
Next.js Server
   ↓
Axios fetches data
   ↓
HTML generated
   ↓
Browser receives HTML
```

Since Axios doesn't depend on `window` or `document`, it can run on the server.

---

# Example 2: Browser-Only Package

Install a package:

```bash
npm install canvas-confetti
```

### Wrong Way

```tsx
import confetti from "canvas-confetti";

export default function Page() {
  return (
    <button onClick={() => confetti()}>
      Celebrate
    </button>
  );
}
```

Error because:

* Server Components can't use event handlers.
* `canvas-confetti` needs browser APIs.

---

### Correct Way

```tsx
"use client";

import confetti from "canvas-confetti";

export default function CelebrateButton() {
  return (
    <button onClick={() => confetti()}>
      Celebrate
    </button>
  );
}
```

Now the package runs in the browser.

---

# Example 3: Third-Party Component Package

Install:

```bash
npm install react-icons
```

### Component

```tsx
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div>
      <FaGithub size={40} />
    </div>
  );
}
```

This works because `react-icons` simply renders SVG elements and doesn't require browser-only APIs.

---

# Example 4: Database Package

Install Prisma:

```bash
npm install @prisma/client
```

### lib/prisma.ts

```ts
import "server-only";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
```

### app/page.tsx

```tsx
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const users = await prisma.user.findMany();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Why server-only?

```text
Prisma
   ↓
Database Connection
   ↓
Must stay on server
```

You should never expose database access to the browser.

---

# Wrapping a Third-Party Package in a Client Component

Many UI libraries require browser APIs.

Example with a hypothetical chart library:

```tsx
"use client";

import Chart from "some-chart-library";

export default function SalesChart() {
  return <Chart data={[10, 20, 30]} />;
}
```

Then use it inside a Server Component:

```tsx
import SalesChart from "./SalesChart";

export default async function Page() {
  const sales = await getSales();

  return (
    <>
      <h1>Dashboard</h1>
      <SalesChart />
    </>
  );
}
```

This pattern is very common in Next.js.

---

# How to Decide Where a Package Goes

Ask:

### Does it use browser APIs?

```js
window
document
localStorage
navigator
```

If **yes** →

```tsx
"use client";
```

Use it in a Client Component.

---

### Does it access server resources?

```js
database
filesystem
secret keys
process.env
```

If **yes** →

Use it in:

* Server Components
* Route Handlers
* Server Actions
* Server-only modules

---

# Real Project Example

```text
app/
├── page.tsx                 ← Server Component
├── components/
│   ├── ConfettiButton.tsx   ← Client Component
│   └── Chart.tsx            ← Client Component
├── lib/
│   └── prisma.ts            ← Server-only
```

```text
Prisma      → Server only
Axios       → Server or Client
React Icons → Server or Client
Framer Motion → Client
Canvas Confetti → Client
```

### Rule of thumb

When adding a third-party package to a Next.js app:

* **UI interaction, animations, charts, browser APIs** → Client Component (`"use client"`).
* **Databases, authentication, secrets, file access** → Server Component or server-only code.
* **Pure utility libraries** (date formatting, validation, math) → Usually work in both places.





---





# `Context Provider` :

## What is a Context Provider?

A **Context Provider** is a React component that makes data available to many components without passing props through every level of the component tree.

Without Context, you might do this:

```text
App
 └─ Layout
     └─ Header
         └─ UserMenu
```

If `UserMenu` needs user data, you might pass props through every component:

```tsx
<App user={user}>
  <Layout user={user}>
    <Header user={user}>
      <UserMenu user={user} />
    </Header>
  </Layout>
</App>
```

This is called **prop drilling**.

Context solves this.

---

## Creating a Context

### Step 1: Create Context

```tsx
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

---

### Step 2: Create a Provider

```tsx
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}
```

The Provider supplies the value to all components inside it.

---

### Step 3: Consume the Context

```tsx
"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button() {
  const theme = useContext(ThemeContext);

  return <button>Theme: {theme}</button>;
}
```

Output:

```text
Theme: dark
```

---

# Visualizing the Flow

```text
ThemeProvider
   │
   ├── Header
   │
   ├── Sidebar
   │
   └── Button
          │
          └── useContext()
                 ↓
               "dark"
```

The `Button` gets the value directly from the Provider.

---

# Context Provider in Next.js

A common example is authentication.

### Auth Context

```tsx
"use client";

import { createContext } from "react";

export const AuthContext = createContext(null);
```

### Auth Provider

```tsx
"use client";

import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const user = {
    name: "Rahul",
    email: "rahul@example.com",
  };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

### Wrap the App

In `app/layout.tsx`:

```tsx
import { AuthProvider } from "./AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

Now every component inside the app can access the user.

---

### Use the Context

```tsx
"use client";

import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Profile() {
  const user = useContext(AuthContext);

  return <h1>{user.name}</h1>;
}
```

Output:

```text
Rahul
```

---

# Why Context Providers Must Be Client Components in Next.js

React Context relies on hooks and state.

Example:

```tsx
"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
```

This uses:

```tsx
useState()
useContext()
```

These are client-side React features.

So in Next.js App Router:

```tsx
"use client";
```

is required for most providers.

---

# Server Components and Context

❌ Server Components cannot consume client context using `useContext`.

Example:

```tsx
export default function Page() {
  const theme = useContext(ThemeContext); // Error
}
```

Server Components cannot use React client hooks.

Instead:

```text
Server Component
      ↓
Client Provider
      ↓
Client Components
```

---

# Common Context Providers

| Provider         | Stores           |
| ---------------- | ---------------- |
| ThemeProvider    | Dark/light theme |
| AuthProvider     | Logged-in user   |
| CartProvider     | Shopping cart    |
| LanguageProvider | Current language |
| SettingsProvider | App settings     |

---

# Real Next.js Structure

```text
app/
├── layout.tsx
├── providers/
│   ├── ThemeProvider.tsx
│   └── AuthProvider.tsx
├── page.tsx
└── components/
    └── Navbar.tsx
```

`layout.tsx`

```tsx
import { ThemeProvider } from "./providers/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

Now every client component inside the app can access the theme.

---

## Mental Model

Think of a Provider as a **shared data container**:

```text
ThemeProvider
      │
      ├── Header
      ├── Sidebar
      ├── Footer
      └── Button

All can read the same theme value
without passing props manually.
```

**Context Provider = a component that provides shared state/data to all descendant components, avoiding prop drilling.** In Next.js, providers are usually Client Components and are placed near the root (often in `layout.tsx`) so the entire app can access the shared data.





---





# `Client-only code` :

**Client-only code** is code that must run **in the browser**, not on the server.

In Next.js, client-only code typically relies on:

* React hooks (`useState`, `useEffect`)
* Browser APIs (`window`, `document`, `localStorage`)
* User interactions (`onClick`, `onChange`)
* Browser-only third-party libraries

---

## Why Some Code Must Be Client-Only

The server does not have access to browser objects like:

```js id="o7spwd"
window
document
localStorage
navigator
sessionStorage
```

This will fail on the server:

```js id="f5jwg9"
console.log(window.innerWidth);
```

Error:

```text id="8hih29"
ReferenceError: window is not defined
```

because `window` only exists in the browser.

---

# Example 1: Using State

```tsx id="s4kxyv"
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Why client-only?

```tsx id="1tq0sk"
useState()
```

requires browser-side React runtime.

---

# Example 2: Using localStorage

```tsx id="75tr8h"
"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);
  }, []);

  return <div>Hello</div>;
}
```

Why client-only?

```js id="v2nn9h"
localStorage
```

exists only in the browser.

---

# Example 3: Using window

```tsx id="drjjti"
"use client";

import { useEffect } from "react";

export default function ScreenSize() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return <div>Screen Size</div>;
}
```

Why client-only?

```js id="9kt1ur"
window.innerWidth
```

requires a browser window.

---

# Example 4: Event Handlers

```tsx id="22jy13"
"use client";

export default function Button() {
  return (
    <button
      onClick={() => alert("Clicked")}
    >
      Click Me
    </button>
  );
}
```

Why client-only?

The server cannot respond to browser clicks directly.

---

# Browser-Only Third-Party Libraries

Example:

```bash id="w17e8v"
npm install canvas-confetti
```

```tsx id="4d8t92"
"use client";

import confetti from "canvas-confetti";

export default function Celebrate() {
  return (
    <button onClick={() => confetti()}>
      🎉
    </button>
  );
}
```

This library uses browser APIs internally, so it must run on the client.

---

# Marking a Component as Client

At the top of the file:

```tsx id="8wnp5g"
"use client";
```

Example:

```tsx id="9zqgdi"
"use client";

export default function Page() {
  return <div>Hello</div>;
}
```

This tells Next.js:

```text id="w9e77m"
Render this component on the client.
Send its JavaScript to the browser.
```

---

# Server vs Client Example

### Server Component

```tsx id="f7sk6w"
export default async function Page() {
  const posts = await getPosts();

  return <div>{posts.length}</div>;
}
```

Runs on:

```text id="h2s14w"
Server
```

Can access:

```text id="7ml1lj"
Database
Secret keys
Filesystem
```

Cannot access:

```text id="djlkkh"
window
localStorage
useState
```

---

### Client Component

```tsx id="p6uzvz"
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}
```

Runs on:

```text id="3fxwjc"
Browser
```

Can access:

```text id="m4z0bw"
window
document
localStorage
useState
useEffect
```

Cannot safely access:

```text id="gndmsp"
Database
Secret API keys
Filesystem
```

---

# Protecting Client-Only Modules

Sometimes you want to ensure a file is never imported on the server.

Example utility:

```ts id="ykh0c3"
export function getTheme() {
  return localStorage.getItem("theme");
}
```

This is browser-only because it uses `localStorage`.

A Server Component importing it would crash.

So a common pattern is to keep browser utilities inside Client Components or client-specific folders.

---

# Real Project Example

```text id="ng42rb"
app/
├── page.tsx                ← Server Component
├── components/
│   ├── Counter.tsx         ← Client Component
│   ├── ThemeToggle.tsx     ← Client Component
│   └── Navbar.tsx          ← Server Component
├── lib/
│   └── prisma.ts           ← Server-only
```

```text id="xg4suy"
Counter.tsx
   ↓
useState
   ↓
Client-only

prisma.ts
   ↓
Database access
   ↓
Server-only
```

## Rule of Thumb

A piece of code is **client-only** if it needs:

* `useState`, `useEffect`, `useContext`
* Event handlers (`onClick`, `onSubmit`)
* `window`, `document`
* `localStorage`, `sessionStorage`
* Browser-only third-party libraries
* Access to screen size, cookies in the browser, geolocation, camera, etc.

If it depends on the user's browser environment, it belongs in a **Client Component** (`"use client"`).





---





# `client component placement` :

In Next.js (App Router), **client component placement** means deciding **where in your component tree to put `"use client"` components**.

The general recommendation is:

> **Keep Client Components as small and as deep in the tree as possible.**

This allows most of your app to remain Server Components, which improves performance and reduces JavaScript sent to the browser.

---

## Bad Placement

```tsx
// app/page.tsx
"use client";

import Navbar from "./Navbar";
import ProductList from "./ProductList";

export default function Page() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
```

Problem:

```text
Page (Client)
├── Navbar
└── ProductList
```

Everything below `Page` becomes part of the client-side bundle.

Even if `ProductList` only displays data and doesn't need interactivity, it now gets shipped to the browser.

---

## Better Placement

```tsx
// app/page.tsx
import Navbar from "./Navbar";
import Counter from "./Counter";

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <Counter />
      <ProductList products={products} />
    </>
  );
}
```

```tsx
// Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Now:

```text
Page (Server)
├── Navbar (Server)
├── ProductList (Server)
└── Counter (Client)
```

Only the interactive counter is sent as client JavaScript.

---

## Common Pattern: Interactive Leaf Components

Instead of:

```text
Page (Client)
└── Entire Dashboard
```

Prefer:

```text
Page (Server)
├── Dashboard Data
├── Statistics
├── Product Table
└── Search Box (Client)
```

Example:

```tsx
export default async function Dashboard() {
  const data = await getDashboardData();

  return (
    <>
      <Stats data={data} />
      <ProductTable data={data.products} />
      <SearchInput />
    </>
  );
}
```

```tsx
"use client";

export default function SearchInput() {
  // interactive logic
}
```

---

## Provider Placement

Providers usually need to be Client Components because they use state or context.

### Too High

```tsx
<html>
  <body>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
```

This is common and often necessary, but if only a small section needs the provider, wrapping the entire app may be unnecessary.

### More Targeted

```tsx
export default function DashboardLayout({
  children,
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

Only the dashboard area gets the client-side context.

---

## Third-Party Libraries

Suppose you're using an animation library.

Don't do:

```tsx
"use client";

export default function Page() {
  return (
    <>
      <Header />
      <Products />
      <AnimatedButton />
    </>
  );
}
```

Instead:

```tsx
// Page.tsx (Server)
export default function Page() {
  return (
    <>
      <Header />
      <Products />
      <AnimatedButton />
    </>
  );
}
```

```tsx
// AnimatedButton.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedButton() {
  return <motion.button>Buy</motion.button>;
}
```

Only the animation component becomes client-side.

---

## Visual Example

### Poor Placement

```text
Page (Client)
├── Header
├── Sidebar
├── Products
└── Footer
```

Browser receives JavaScript for everything.

---

### Good Placement

```text
Page (Server)
├── Header (Server)
├── Sidebar (Server)
├── Products (Server)
├── CartButton (Client)
└── Footer (Server)
```

Browser receives JavaScript only for `CartButton`.

---

## Important Rule

Once a file has:

```tsx
"use client";
```

all components imported directly or indirectly into that component become part of the client bundle.

Example:

```tsx
"use client";

import Header from "./Header";
import ProductTable from "./ProductTable";
```

Even if `Header` and `ProductTable` don't use client features, they are now bundled for the client because they are descendants of a Client Component.

---

## Practical Guidelines

✅ Put `"use client"` on:

* Buttons with click handlers
* Forms using React state
* Modals
* Dropdowns
* Theme toggles
* Interactive charts
* Components using browser APIs

✅ Keep as Server Components:

* Layouts
* Pages
* Product lists
* Blog content
* Database fetching components
* Static UI

### Example Structure

```text
app/
├── page.tsx              (Server)
├── layout.tsx            (Server)
├── components/
│   ├── ProductList.tsx   (Server)
│   ├── Header.tsx        (Server)
│   ├── SearchBox.tsx     (Client)
│   ├── CartButton.tsx    (Client)
│   └── ThemeToggle.tsx   (Client)
```

This is typically the most efficient arrangement: **Server Components for data and rendering, Client Components only for the parts that need interactivity.**





---





# `Interleaving Client and Server Components` :

**Interleaving Client and Server Components** means **nesting Server Components and Client Components together** in a way that lets you get the benefits of both:

* Server Components → data fetching, database access, smaller JS bundles.
* Client Components → interactivity, state, event handlers.

This is a common pattern in Next.js App Router.

---

# Basic Example

```text
Page (Server)
├── ProductList (Server)
└── Counter (Client)
```

```tsx
// app/page.tsx
import ProductList from "./ProductList";
import Counter from "./Counter";

export default async function Page() {
  return (
    <>
      <ProductList />
      <Counter />
    </>
  );
}
```

```tsx
// Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Here:

* `Page` runs on the server.
* `ProductList` runs on the server.
* `Counter` runs in the browser.

This is the simplest form of interleaving.

---

# Server → Client → Server?

A common question:

```text
Server
 └── Client
      └── Server
```

Can a Client Component directly import a Server Component?

❌ No.

Example:

```tsx
// ClientComponent.tsx
"use client";

import ServerComponent from "./ServerComponent"; // ❌
```

Next.js does not allow this.

Reason:

```text
Browser
   ↓
Client Component
      ↓
Trying to execute server code
```

The browser cannot run server code.

---

# The Correct Pattern: Pass Server Components as Props

Instead of importing a Server Component into a Client Component, pass it as a child.

---

## Example

### Server Component

```tsx
// Cart.tsx
export default async function Cart() {
  const items = await getCartItems();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

### Client Component

```tsx
// Modal.tsx
"use client";

import { useState } from "react";

export default function Modal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open
      </button>

      {open && (
        <div>
          {children}
        </div>
      )}
    </>
  );
}
```

---

### Server Page

```tsx
// page.tsx
import Modal from "./Modal";
import Cart from "./Cart";

export default function Page() {
  return (
    <Modal>
      <Cart />
    </Modal>
  );
}
```

---

### Component Tree

```text
Page (Server)
│
├── Modal (Client)
│     │
│     └── Cart (Server)
```

This is valid because:

1. Server renders `Cart`.
2. Server renders references to `Modal`.
3. Browser hydrates `Modal`.
4. `Modal` displays the already-rendered server content.

---

# Real-World Example: Dashboard

```text
DashboardPage (Server)
│
├── UserInfo (Server)
├── SalesData (Server)
└── Tabs (Client)
      │
      ├── Reports (Server)
      └── Analytics (Server)
```

### Server Page

```tsx
export default async function Dashboard() {
  const user = await getUser();

  return (
    <Tabs>
      <Reports />
      <Analytics />
    </Tabs>
  );
}
```

### Client Tabs

```tsx
"use client";

import { useState } from "react";

export default function Tabs({ children }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {children}
    </div>
  );
}
```

The tab switching logic is client-side, but the report data is fetched server-side.

---

# Why Interleave?

Without interleaving:

```text
Entire page = Client Component
```

Problems:

* More JavaScript
* Larger bundle
* Data fetching moves to browser

With interleaving:

```text
Mostly Server Components
+
Small Client Components
```

Benefits:

* Faster page loads
* Less JavaScript
* Better SEO
* Direct database access on server

---

# Mental Model

Think of Server Components as **content producers** and Client Components as **interactive shells**.

```text
Server Component
      ↓
Produces HTML/data

Client Component
      ↓
Adds interaction
```

Example:

```text
Product Page (Server)
│
├── Product Details (Server)
├── Reviews (Server)
└── Add To Cart Button (Client)
```

The heavy content is rendered on the server, while only the button needs browser JavaScript.

---

# Summary

Valid interleaving patterns:

```text
Server → Server
Server → Client
Server → Client (with Server children passed as props)
```

Invalid pattern:

```text
Client → import Server
```

The key idea is:

> **Server Components can render Client Components, and Client Components can display Server Component output via props/children, but Client Components cannot directly import and execute Server Components.**






---





# `data fetching` :

In Next.js App Router, **data fetching** means retrieving data from a database, API, CMS, or other source and rendering it in your UI.

One of the biggest changes in modern Next.js is that **data fetching is usually done directly inside Server Components**.

---

# Basic Data Fetching

```tsx id="8s6ylz"
// app/page.tsx

export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
```

What's happening?

```text id="lk5smw"
Request arrives
      ↓
Server Component runs
      ↓
fetch() gets data
      ↓
HTML generated
      ↓
Browser receives HTML
```

The browser never sees the API request.

---

# Fetching from a Database

Instead of calling an API, Server Components can query a database directly.

```tsx id="bx8ksx"
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

Flow:

```text id="zdujlwm"
Server Component
      ↓
Database
      ↓
HTML
      ↓
Browser
```

No extra API route is needed.

---

# Multiple Fetches

```tsx id="ajq2ee"
export default async function Dashboard() {
  const usersRes = await fetch("/api/users");
  const ordersRes = await fetch("/api/orders");

  const users = await usersRes.json();
  const orders = await ordersRes.json();

  return (
    <>
      <Users users={users} />
      <Orders orders={orders} />
    </>
  );
}
```

---

# Parallel Data Fetching

Sequential fetching:

```tsx id="h1jtt8"
const users = await getUsers();
const orders = await getOrders();
```

Timeline:

```text id="a7l0o5"
getUsers()
      ↓ finish
getOrders()
      ↓ finish
```

Slower.

---

Parallel fetching:

```tsx id="m9m5xb"
const [users, orders] =
  await Promise.all([
    getUsers(),
    getOrders(),
  ]);
```

Timeline:

```text id="cv9oq8"
getUsers()  ──┐
              ├─ finish
getOrders() ──┘
```

Faster because both requests run simultaneously.

---

# Data Fetching in Client Components

Sometimes data depends on user actions.

Example:

```tsx id="ep3q4q"
"use client";

import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] =
    useState(null);

  useEffect(() => {
    fetch("/api/weather")
      .then(res => res.json())
      .then(setWeather);
  }, []);

  return <div>{weather?.temp}</div>;
}
```

Flow:

```text id="qmf4al"
Page loads
      ↓
Browser downloads JS
      ↓
useEffect runs
      ↓
Fetch data
      ↓
Update UI
```

This is called **client-side fetching**.

---

# Server vs Client Data Fetching

| Feature                  | Server Component | Client Component |
| ------------------------ | ---------------- | ---------------- |
| Runs before page sent    | ✅                | ❌                |
| Access database directly | ✅                | ❌                |
| Access secret keys       | ✅                | ❌                |
| Faster initial render    | ✅                | ❌                |
| User-triggered updates   | ❌                | ✅                |
| useEffect needed         | ❌                | ✅                |

---

# Caching

By default, Next.js can cache fetch requests.

```tsx id="br4ygt"
await fetch(url, {
  cache: "force-cache",
});
```

Static behavior:

```text id="gz5vh4"
Build/request
      ↓
Cache response
      ↓
Reuse cached result
```

---

# Dynamic Fetching

Always fetch fresh data:

```tsx id="sk31tw"
await fetch(url, {
  cache: "no-store",
});
```

Every request gets new data.

```text id="ob5a5r"
Request
   ↓
Fresh fetch
   ↓
Render
```

---

# Revalidation

Fetch fresh data every 60 seconds:

```tsx id="vjlwmu"
await fetch(url, {
  next: {
    revalidate: 60,
  },
});
```

Timeline:

```text id="h08krl"
0s  -> Fetch
60s -> Refetch
120s -> Refetch
```

Useful for blogs, news, product catalogs, etc.

---

# Waterfall Problem

Bad:

```tsx id="1gwks5"
const user = await getUser();
const posts = await getPosts(user.id);
```

```text id="om1l9d"
Wait user
      ↓
Wait posts
```

Sometimes unavoidable, but can slow rendering.

---

Better when independent:

```tsx id="ggzpnr"
const [users, posts] =
  await Promise.all([
    getUsers(),
    getPosts(),
  ]);
```

---

# Recommended Next.js Pattern

```text id="a5grj0"
Page (Server Component)
      ↓
Fetch data
      ↓
Render HTML
      ↓
Pass data to Client Components
```

Example:

```tsx id="uq7nb6"
// Server Component
export default async function Page() {
  const products = await getProducts();

  return (
    <ProductSearch
      products={products}
    />
  );
}
```

```tsx id="0j36ef"
// Client Component
"use client";

export default function ProductSearch({
  products,
}) {
  // interactive search
}
```

The data is fetched on the server, while the search interaction happens in the browser.

---

## Mental Model

```text id="vsuc4w"
Database/API
      ↓
Server Component fetches
      ↓
HTML generated
      ↓
Browser receives page
      ↓
Client Components add interaction
```

### Rule of Thumb

* Fetch data in **Server Components** whenever possible.
* Use **Client Components** for user-driven updates and interactions.
* Use `Promise.all()` for independent requests.
* Use caching (`force-cache`, `revalidate`) for performance.
* Use `no-store` when data must always be fresh.





---





# `Fetching Data in a Client Component` :

In Next.js, **Client Components cannot be `async` components**, so they cannot fetch data the same way Server Components do.

### Server Component (allowed)

```tsx id="mdq4bh"
export default async function Page() {
  const res = await fetch(
    "https://api.example.com/posts"
  );

  const posts = await res.json();

  return <div>{posts.length}</div>;
}
```

This works because the component runs on the server.

---

## Fetching Data in a Client Component

In a Client Component, data is usually fetched **after the component mounts** using `useEffect`.

```tsx id="vg7ltc"
"use client";

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await res.json();

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
```

### What Happens?

```text id="b78szp"
1. Browser loads page
2. Component renders
3. useEffect runs
4. fetch() request starts
5. State updates
6. UI re-renders
```

---

## Loading State

A common pattern:

```tsx id="r7ib46"
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("/api/users");

      const data = await res.json();

      setUsers(data);
      setLoading(false);
    }

    loadUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

---

## Error Handling

```tsx id="rdd6o8"
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("/api/users");

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setUsers(data);
      } catch (err) {
        setError("Could not load users");
      }
    }

    loadUsers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return <div>{users.length}</div>;
}
```

---

## Why Not Fetch Directly in the Component Body?

❌ Wrong:

```tsx id="6jj46j"
"use client";

export default function Users() {
  const data = await fetch("/api/users");
}
```

Problems:

* Components cannot be `async` Client Components.
* Fetch would run during rendering.
* React doesn't allow `await` directly in Client Component render functions.

---

## Fetching from an API Route

A common Next.js setup:

### API Route

```tsx id="js8u9s"
// app/api/users/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
  ]);
}
```

### Client Component

```tsx id="b0h57u"
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return <div>{users.length}</div>;
}
```

Flow:

```text id="9ekgg6"
Browser
   ↓
/api/users
   ↓
Next.js Route Handler
   ↓
JSON
   ↓
Update State
```

---

## Better Approach: Fetch on the Server, Interact on the Client

Instead of:

```text id="c1j0kn"
Client Component
      ↓
Fetch data
```

Prefer:

```text id="o9s14u"
Server Component
      ↓
Fetch data
      ↓
Pass data as props
      ↓
Client Component
```

### Example

```tsx id="otw4a9"
// Server Component
export default async function Page() {
  const products = await getProducts();

  return (
    <SearchableProducts
      products={products}
    />
  );
}
```

```tsx id="j9s4im"
// Client Component
"use client";

export default function SearchableProducts({
  products,
}) {
  // search/filter logic
}
```

Benefits:

* Faster initial page load.
* No loading spinner needed for initial data.
* Database/API access stays on the server.
* Smaller number of network requests.

---

## Using SWR (Popular Client-Side Fetching Library)

Many Next.js apps use the package:

```bash id="zk6i9i"
npm install swr
```

Example:

```tsx id="u2r64k"
"use client";

import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(res => res.json());

export default function Profile() {
  const { data, error, isLoading } =
    useSWR("/api/user", fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>{data.name}</p>;
}
```

SWR automatically handles:

* Caching
* Revalidation
* Refetching
* Loading states
* Error states

---

## When Client-Side Fetching Makes Sense

✅ Good use cases:

* Live search
* Chat messages
* Notifications
* User-triggered refreshes
* Infinite scrolling
* Real-time dashboards

Example:

```text id="1r4ufg"
User clicks Refresh
      ↓
Fetch latest data
      ↓
Update UI
```

---

## Rule of Thumb

### Use Server Fetching When:

```text id="v6kwyj"
Initial page data
SEO important
Database access needed
Secret keys involved
```

### Use Client Fetching When:

```text id="bjaz83"
User interactions
Real-time updates
Polling
Infinite scroll
Live search
```

A common Next.js pattern is:

```text id="r9oee5"
Server Component
      ↓
Fetch initial data
      ↓
Client Component
      ↓
Fetch updates when needed
```

This gives fast initial rendering while still supporting dynamic, interactive updates in the browser.






---






# `Fetching data with Server Components` :

**Fetching data with Server Components** is one of the biggest advantages of Next.js App Router.

Instead of:

```text
Browser
   ↓
API Request
   ↓
Receive JSON
   ↓
Render UI
```

you can do:

```text
Server Component
   ↓
Fetch Data
   ↓
Generate HTML
   ↓
Send HTML to Browser
```

The user gets a fully rendered page immediately.

---

# Basic Example

```tsx
// app/page.tsx

export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
```

Notice:

```tsx
async function Page()
```

Server Components can be async.

---

# Fetching from a Database

This is where Server Components shine.

```tsx
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

Flow:

```text
Browser
   ↓
Next.js Server
   ↓
Database
   ↓
HTML
   ↓
Browser
```

No API route needed.

---

# Why This Is Better Than Client Fetching

Client-side:

```text
Load page
   ↓
Download JS
   ↓
Fetch data
   ↓
Render
```

Server-side:

```text
Fetch data
   ↓
Render HTML
   ↓
Send page
```

Benefits:

* Faster initial render
* Better SEO
* Less JavaScript
* Access to secrets and databases

---

# Multiple Data Sources

```tsx
export default async function Dashboard() {
  const users = await getUsers();
  const orders = await getOrders();

  return (
    <>
      <Users users={users} />
      <Orders orders={orders} />
    </>
  );
}
```

This works, but it's sequential.

---

# Parallel Fetching

Better:

```tsx
export default async function Dashboard() {
  const [users, orders] =
    await Promise.all([
      getUsers(),
      getOrders(),
    ]);

  return (
    <>
      <Users users={users} />
      <Orders orders={orders} />
    </>
  );
}
```

Timeline:

```text
getUsers()  ──┐
              ├── finish
getOrders() ──┘
```

Both run at the same time.

---

# Data Fetching in Child Server Components

You don't have to fetch everything in the page.

```tsx
// page.tsx
import Products from "./Products";

export default function Page() {
  return <Products />;
}
```

```tsx
// Products.tsx
export default async function Products() {
  const products =
    await getProducts();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}
```

Each Server Component can fetch its own data.

---

# Passing Data to Client Components

A very common pattern.

### Server Component

```tsx
import SearchBox from "./SearchBox";

export default async function Page() {
  const products =
    await getProducts();

  return (
    <SearchBox
      products={products}
    />
  );
}
```

### Client Component

```tsx
"use client";

export default function SearchBox({
  products,
}) {
  return (
    <input
      placeholder={`Search ${products.length} products`}
    />
  );
}
```

Flow:

```text
Database
   ↓
Server Component
   ↓
Products fetched
   ↓
Pass as props
   ↓
Client Component
```

This is one of the most common Next.js architectures.

---

# Caching

By default, `fetch` can be cached.

```tsx
await fetch(url, {
  cache: "force-cache",
});
```

Result:

```text
First request
     ↓
Store response
     ↓
Future requests use cache
```

Good for:

* Blogs
* Documentation
* Marketing pages

---

# Dynamic Fetching

Always get fresh data:

```tsx
await fetch(url, {
  cache: "no-store",
});
```

Every request:

```text
Request
   ↓
Fresh fetch
   ↓
Render
```

Good for:

* Dashboards
* User data
* Real-time information

---

# Revalidation

Refresh cached data periodically.

```tsx
await fetch(url, {
  next: {
    revalidate: 60,
  },
});
```

Meaning:

```text
Fetch
   ↓
Cache
   ↓
After 60 seconds
   ↓
Fetch again
```

Useful for content that changes occasionally.

---

# Error Handling

```tsx
export default async function Page() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      "Failed to fetch data"
    );
  }

  const data = await res.json();

  return <div>{data.title}</div>;
}
```

In production, you often use an `error.tsx` file to display a friendly error UI.

---

# Loading States with Streaming

Server Components work well with React Suspense.

```tsx
import { Suspense } from "react";
import Products from "./Products";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Products />
    </Suspense>
  );
}
```

```tsx
export default async function Products() {
  const products =
    await getProducts();

  return <div>{products.length}</div>;
}
```

Users can see parts of the page while data is still loading.

---

# Real-World Example

```text
Product Page (Server)
│
├── Product Details (Server)
│      ↓
│   Database
│
├── Reviews (Server)
│      ↓
│   API
│
└── Add To Cart (Client)
       ↓
    onClick
```

Server Components fetch and render data. Client Components handle interaction.

---

# Mental Model

```text
Database/API
      ↓
Server Component
      ↓
Fetch Data
      ↓
Generate HTML
      ↓
Send to Browser
      ↓
Client Components become interactive
```

### Rule of Thumb

In Next.js App Router:

✅ Fetch data in **Server Components by default**

✅ Access databases, CMSs, and secret APIs directly from Server Components

✅ Pass fetched data to Client Components when interactivity is needed

✅ Use `Promise.all()` for independent requests

✅ Use caching or revalidation when appropriate

This is the recommended data-fetching model in modern Next.js.






---






# `Loading & Error States` :

When fetching data with Server Components, you don't usually manage loading and error states with `useState` like in Client Components.

Instead, Next.js gives you **special files**:

```text
app/
├── page.tsx
├── loading.tsx
└── error.tsx
```

---

# Loading States

Suppose your page fetches products.

```tsx
// app/products/page.tsx

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
```

If `getProducts()` takes 3 seconds, users would otherwise wait without feedback.

Create:

```tsx
// app/products/loading.tsx

export default function Loading() {
  return <h2>Loading products...</h2>;
}
```

Directory:

```text
app/
└── products/
    ├── page.tsx
    └── loading.tsx
```

Flow:

```text
User visits page
       ↓
loading.tsx shown
       ↓
page.tsx finishes
       ↓
real page appears
```

---

# How `loading.tsx` Works

You don't import it anywhere.

Next.js automatically detects it.

```text
products/
├── page.tsx
├── loading.tsx
```

When the route is loading:

```text
loading.tsx
```

When data is ready:

```text
page.tsx
```

---

# Better Loading UI

Instead of text:

```tsx
export default function Loading() {
  return (
    <div>
      <div className="skeleton" />
      <div className="skeleton" />
      <div className="skeleton" />
    </div>
  );
}
```

Users see a skeleton screen.

```text
██████████
██████████
██████████
```

This often feels faster than a spinner.

---

# Error States

Suppose fetching fails.

```tsx
export default async function Page() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to load");
  }

  const data = await res.json();

  return <div>{data.title}</div>;
}
```

Create:

```tsx
// app/products/error.tsx

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
      <h2>Something went wrong</h2>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
```

Directory:

```text
products/
├── page.tsx
├── loading.tsx
└── error.tsx
```

---

# Why Is `error.tsx` a Client Component?

Notice:

```tsx
"use client";
```

Required because:

```tsx
<button onClick={reset}>
```

needs browser interactivity.

The `reset()` function retries rendering the route.

---

# Error Flow

```text
User requests page
       ↓
Server Component starts
       ↓
Error occurs
       ↓
error.tsx shown
       ↓
User clicks retry
       ↓
reset()
       ↓
Render again
```

---

# Route-Level Error Boundaries

Each route segment can have its own error UI.

```text
app/
├── dashboard/
│   ├── page.tsx
│   └── error.tsx
│
└── products/
    ├── page.tsx
    └── error.tsx
```

If Products crashes:

```text
Products error UI
```

Dashboard remains unaffected.

---

# Loading Specific Parts with Suspense

Instead of loading the entire page, load parts independently.

```tsx
import { Suspense } from "react";
import Reviews from "./Reviews";

export default function ProductPage() {
  return (
    <>
      <ProductInfo />

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}
```

`Reviews`:

```tsx
export default async function Reviews() {
  const reviews =
    await getReviews();

  return <div>{reviews.length}</div>;
}
```

Flow:

```text
Product Page
│
├── ProductInfo
│      ✓ Ready
│
└── Reviews
       ↓
   Loading...
       ↓
   Reviews appear
```

Users don't wait for everything.

---

# `loading.tsx` vs `Suspense`

| Feature       | loading.tsx          | Suspense           |
| ------------- | -------------------- | ------------------ |
| Scope         | Entire route segment | Specific component |
| Automatic     | Yes                  | No                 |
| Needs wrapper | No                   | Yes                |
| Best for      | Page-level loading   | Partial loading    |

Example:

```text
Route loading
    ↓
loading.tsx
```

vs

```text
Page
├── Header
├── Product
└── Reviews
      ↓
 Suspense fallback
```

---

# Not Found State

Another special file:

```text
app/
└── products/
    └── not-found.tsx
```

In your Server Component:

```tsx
import { notFound } from "next/navigation";

export default async function Page({
  params,
}) {
  const product =
    await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <div>{product.name}</div>;
}
```

`not-found.tsx`

```tsx
export default function NotFound() {
  return <h2>Product not found</h2>;
}
```

---

# Complete Mental Model

```text
Request
   ↓
page.tsx starts
   ↓
loading.tsx shown
   ↓
Data fetched
   ↓
Success → page rendered

OR

Error → error.tsx

OR

Missing resource → not-found.tsx
```

### Rule of Thumb

For App Router data fetching:

* `loading.tsx` → show loading UI for a route segment.
* `error.tsx` → handle rendering errors.
* `not-found.tsx` → handle missing resources.
* `Suspense` → load individual sections independently.
* `reset()` → retry after an error.

These files replace much of the manual loading/error state management you may have used with `useState` and `useEffect` in traditional React applications.






---






# `Sequential Data Fetching` :

# Sequential Data Fetching

**Sequential fetching** means one request waits for another request to finish before starting.

```text
Fetch A
   ↓
Finish
   ↓
Fetch B
   ↓
Finish
   ↓
Render
```

This happens naturally when you use multiple `await`s one after another.

---

## Example

```tsx
export default async function Page() {
  const user = await getUser();

  const posts = await getPosts(user.id);

  return (
    <>
      <h1>{user.name}</h1>

      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
```

Timeline:

```text
getUser()  -------- 1s
                     ↓
getPosts() -------- 1s
                     ↓
Render

Total: 2s
```

---

# When Sequential Fetching Is Necessary

Sometimes the second request depends on data from the first.

For example:

```tsx
const user = await getUser();
const posts = await getPosts(user.id);
```

You cannot fetch posts until you know:

```text
user.id
```

Dependency chain:

```text
User
  ↓
user.id
  ↓
Posts
```

This is a valid use case for sequential fetching.

---

# Example: E-commerce

```tsx
const product = await getProduct(id);

const reviews = await getReviews(product.id);
```

Flow:

```text
Product
   ↓
product.id
   ↓
Reviews
```

The second query depends on the first result.

---

# The Problem with Unnecessary Sequential Fetching

Consider:

```tsx
const users = await getUsers();
const products = await getProducts();
```

These are independent.

Yet you're doing:

```text
Users
  ↓
wait
  ↓
Products
```

Timeline:

```text
getUsers()     ----- 1s
getProducts()          ----- 1s

Total = 2s
```

This is slower than necessary.

---

# Parallel Fetching Is Better for Independent Requests

Instead:

```tsx
const [users, products] =
  await Promise.all([
    getUsers(),
    getProducts(),
  ]);
```

Timeline:

```text
getUsers()     ----- 1s
getProducts()  ----- 1s

Total = 1s
```

Both start immediately.

---

# Sequential Fetching Across Components

Server Components can accidentally create sequential fetching.

Example:

```tsx
export default async function Page() {
  const user = await getUser();

  return (
    <UserDetails
      userId={user.id}
    />
  );
}
```

```tsx
export default async function UserDetails({
  userId,
}) {
  const posts =
    await getPosts(userId);

  return <div>{posts.length}</div>;
}
```

Flow:

```text
Page
  ↓
getUser()
  ↓
UserDetails renders
  ↓
getPosts()
```

This is sequential because the child cannot start until the parent finishes.

---

# Visualizing the Waterfall Problem

Imagine:

```tsx
Page
 ├─ Profile
 ├─ Orders
 └─ Reviews
```

Each component fetches data:

```tsx
await getProfile();
await getOrders();
await getReviews();
```

Timeline:

```text
Profile ---- 1s
              ↓
Orders  ---- 1s
              ↓
Reviews ---- 1s
```

Total:

```text
3 seconds
```

This is called a **request waterfall**.

---

# Avoiding Waterfalls

Fetch everything upfront.

```tsx
export default async function Page() {
  const [
    profile,
    orders,
    reviews,
  ] = await Promise.all([
    getProfile(),
    getOrders(),
    getReviews(),
  ]);

  return (
    <>
      <Profile data={profile} />
      <Orders data={orders} />
      <Reviews data={reviews} />
    </>
  );
}
```

Timeline:

```text
Profile ---- 1s
Orders  ---- 1s
Reviews ---- 1s
```

Total:

```text
1 second
```

---

# Sequential Fetching with Suspense

Sometimes you intentionally allow a dependency chain.

```tsx
export default async function Page() {
  const user = await getUser();

  return (
    <Suspense
      fallback={<p>Loading posts...</p>}
    >
      <Posts userId={user.id} />
    </Suspense>
  );
}
```

```tsx
async function Posts({
  userId,
}) {
  const posts =
    await getPosts(userId);

  return <div>{posts.length}</div>;
}
```

Flow:

```text
Fetch user
    ↓
Render page
    ↓
Posts load separately
```

The dependency still exists, but the UI can stream progressively.

---

# Real-World Example

Imagine a dashboard:

```text
Dashboard
│
├── Current User
├── Notifications
├── Orders
└── Analytics
```

Bad:

```tsx
const user = await getUser();
const notifications =
  await getNotifications();
const orders =
  await getOrders();
const analytics =
  await getAnalytics();
```

```text
1s + 1s + 1s + 1s
= 4 seconds
```

Better:

```tsx
const [
  user,
  notifications,
  orders,
  analytics,
] = await Promise.all([
  getUser(),
  getNotifications(),
  getOrders(),
  getAnalytics(),
]);
```

```text
All start together
= ~1 second
```

---

# Mental Model

Ask yourself:

### Does B need data from A?

```text
A
 ↓
B
```

✅ Use sequential fetching.

Example:

```tsx
const user = await getUser();
const posts = await getPosts(user.id);
```

---

### Are A and B independent?

```text
A      B
↓      ↓
```

✅ Use parallel fetching.

Example:

```tsx
await Promise.all([
  getUsers(),
  getProducts(),
]);
```

---

# Rule of Thumb

Use **sequential fetching** when:

* One request depends on another request's result.
* You need an ID, token, slug, or other value from the first request.
* There is a true dependency chain.

Use **parallel fetching (`Promise.all`)** when:

* Requests are independent.
* Multiple API/database calls can start immediately.
* You want to avoid request waterfalls and improve performance.

In Next.js Server Components, a common optimization is to look for unnecessary sequential `await`s and replace them with `Promise.all()` wherever the requests don't depend on each other.





---






# `Parallel Data Fetching` :

# Parallel Data Fetching

**Parallel fetching** means starting multiple requests at the same time instead of waiting for each one to finish.

```text
Fetch A ──┐
          ├── Finish
Fetch B ──┘
```

This is usually the fastest approach when requests are **independent**.

---

# The Problem with Sequential Fetching

Imagine a dashboard:

```tsx
export default async function Page() {
  const users = await getUsers();
  const orders = await getOrders();

  return (
    <>
      <Users data={users} />
      <Orders data={orders} />
    </>
  );
}
```

Timeline:

```text
getUsers()  ----- 1s
                 ↓
getOrders() ----- 1s
                 ↓
Render
```

Total:

```text
2 seconds
```

The second request waits unnecessarily.

---

# Parallel Fetching with Promise.all

Instead:

```tsx
export default async function Page() {
  const [users, orders] =
    await Promise.all([
      getUsers(),
      getOrders(),
    ]);

  return (
    <>
      <Users data={users} />
      <Orders data={orders} />
    </>
  );
}
```

Timeline:

```text
getUsers()  ----- 1s
getOrders() ----- 1s

Render
```

Total:

```text
1 second
```

Both requests start immediately.

---

# Visualizing What Happens

### Sequential

```text
Time →

Users  [=====]
Orders       [=====]

Total: 2s
```

### Parallel

```text
Time →

Users   [=====]
Orders  [=====]

Total: 1s
```

---

# Real Database Example

```tsx
export default async function Dashboard() {
  const [users, products, orders] =
    await Promise.all([
      prisma.user.findMany(),
      prisma.product.findMany(),
      prisma.order.findMany(),
    ]);

  return (
    <>
      <Users users={users} />
      <Products products={products} />
      <Orders orders={orders} />
    </>
  );
}
```

All database queries begin together.

```text
Users Query    ──┐
Products Query ──┼── Finish
Orders Query   ──┘
```

---

# Parallel Fetching with fetch()

```tsx
export default async function Page() {
  const [posts, users] =
    await Promise.all([
      fetch("/api/posts"),
      fetch("/api/users"),
    ]);

  const postsData =
    await posts.json();

  const usersData =
    await users.json();

  return (
    <div>
      ...
    </div>
  );
}
```

Both network requests are sent at the same time.

---

# Parallel Fetching Across Components

Suppose:

```text
Dashboard
│
├── Profile
├── Orders
└── Notifications
```

Each component fetches its own data.

```tsx
async function Profile() {
  const profile =
    await getProfile();
}
```

```tsx
async function Orders() {
  const orders =
    await getOrders();
}
```

```tsx
async function Notifications() {
  const notifications =
    await getNotifications();
}
```

In Next.js App Router, React can often start rendering these independent Server Components concurrently, helping avoid waterfalls.

```text
Profile Fetch       ──┐
Orders Fetch        ──┼── Finish
Notifications Fetch ──┘
```

---

# Preloading Pattern

Sometimes you want to explicitly start fetching early.

### data.ts

```tsx
export const getUsers = () =>
  fetch("/api/users")
    .then(res => res.json());
```

### page.tsx

```tsx
const usersPromise =
  getUsers();

export default async function Page() {
  const users =
    await usersPromise;

  return (
    <Users users={users} />
  );
}
```

The fetch starts before the component reaches the `await`.

---

# Promise.all vs Multiple Awaits

### ❌ Sequential

```tsx
const users =
  await getUsers();

const orders =
  await getOrders();

const products =
  await getProducts();
```

Timeline:

```text
Users
 ↓
Orders
 ↓
Products
```

---

### ✅ Parallel

```tsx
const [
  users,
  orders,
  products,
] = await Promise.all([
  getUsers(),
  getOrders(),
  getProducts(),
]);
```

Timeline:

```text
Users    ──┐
Orders   ──┼── Finish
Products ──┘
```

---

# Error Behavior

With `Promise.all`:

```tsx
await Promise.all([
  getUsers(),
  getOrders(),
  getProducts(),
]);
```

If **any one promise fails**:

```text
Users      ✓
Orders     ✗
Products   ✓
```

The entire `Promise.all` rejects.

You can catch it:

```tsx
try {
  const [users, orders] =
    await Promise.all([
      getUsers(),
      getOrders(),
    ]);
} catch (error) {
  console.error(error);
}
```

---

# Promise.allSettled

If you want partial success:

```tsx
const results =
  await Promise.allSettled([
    getUsers(),
    getOrders(),
    getProducts(),
  ]);
```

Result:

```text
Users     fulfilled
Orders    rejected
Products  fulfilled
```

Useful when one section of a dashboard failing shouldn't break the entire page.

---

# Real-World Next.js Example

```text
Dashboard Page
│
├── Current User
├── Recent Orders
├── Notifications
└── Analytics
```

Bad:

```tsx
const user = await getUser();
const orders = await getOrders();
const notifications =
  await getNotifications();
const analytics =
  await getAnalytics();
```

```text
1s + 1s + 1s + 1s
= 4s
```

Better:

```tsx
const [
  user,
  orders,
  notifications,
  analytics,
] = await Promise.all([
  getUser(),
  getOrders(),
  getNotifications(),
  getAnalytics(),
]);
```

```text
≈ 1 second
```

---

# Mental Model

Ask:

```text
Does request B need
something from request A?
```

### Yes

```text
User
 ↓
Posts
```

Use **sequential fetching**.

```tsx
const user = await getUser();
const posts =
  await getPosts(user.id);
```

---

### No

```text
Users      Orders
  ↓          ↓
Independent
```

Use **parallel fetching**.

```tsx
await Promise.all([
  getUsers(),
  getOrders(),
]);
```

---

# Rule of Thumb

In Server Components:

✅ Use `Promise.all()` when requests are independent.

✅ Fetch databases, APIs, CMS content, and analytics data in parallel whenever possible.

✅ Watch out for **request waterfalls** caused by multiple sequential `await`s.

✅ Only use sequential fetching when a later request truly depends on data from an earlier one.

A common performance optimization in Next.js is simply changing:

```tsx
await a();
await b();
await c();
```

to:

```tsx
await Promise.all([
  a(),
  b(),
  c(),
]);
```

when there are no dependencies between those operations.





---






# `Fetching from a Database` :

# Fetching from a Database in Next.js

One of the biggest benefits of **Server Components** is that they can talk directly to your database.

Instead of:

```text
Browser
   ↓
API Route
   ↓
Database
   ↓
API Route
   ↓
Browser
```

you can do:

```text
Browser
   ↓
Server Component
   ↓
Database
   ↓
HTML
   ↓
Browser
```

No extra API route is needed.

---

# Typical Setup

A common stack is:

```text
Next.js
   ↓
Prisma
   ↓
PostgreSQL / MySQL / SQLite
```

Example:

```bash
npm install prisma @prisma/client
```

---

# Creating a Prisma Client

```tsx
// lib/prisma.ts

import { PrismaClient } from "@prisma/client";

export const prisma =
  new PrismaClient();
```

This file should stay server-side.

---

# Fetching Data in a Server Component

```tsx
// app/users/page.tsx

import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users =
    await prisma.user.findMany();

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}
```

Flow:

```text
Request
   ↓
UsersPage()
   ↓
Database Query
   ↓
HTML Generated
   ↓
Browser
```

---

# Getting One Record

```tsx
const user =
  await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
```

Result:

```ts
{
  id: 1,
  name: "John"
}
```

---

# Dynamic Route Example

Folder structure:

```text
app/
└── users/
    └── [id]/
        └── page.tsx
```

```tsx
import { prisma } from "@/lib/prisma";

export default async function UserPage({
  params,
}: {
  params: { id: string };
}) {
  const user =
    await prisma.user.findUnique({
      where: {
        id: Number(params.id),
      },
    });

  return (
    <div>{user?.name}</div>
  );
}
```

URL:

```text
/users/5
```

Query:

```sql
SELECT * FROM users
WHERE id = 5;
```

---

# Handling Missing Data

```tsx
import { notFound } from "next/navigation";

export default async function Page({
  params,
}) {
  const user =
    await prisma.user.findUnique({
      where: {
        id: Number(params.id),
      },
    });

  if (!user) {
    notFound();
  }

  return <div>{user.name}</div>;
}
```

Next.js automatically renders `not-found.tsx`.

---

# Filtering Data

```tsx
const users =
  await prisma.user.findMany({
    where: {
      active: true,
    },
  });
```

Equivalent SQL:

```sql
SELECT *
FROM users
WHERE active = true;
```

---

# Selecting Specific Fields

Instead of fetching everything:

```tsx
const users =
  await prisma.user.findMany();
```

Fetch only what you need:

```tsx
const users =
  await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });
```

Benefits:

* Smaller query
* Faster response
* Less memory usage

---

# Relationships

Suppose:

```text
User
 └── Posts
```

Fetch user and posts together:

```tsx
const user =
  await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
```

Result:

```ts
{
  id: 1,
  name: "John",
  posts: [...]
}
```

---

# Parallel Database Queries

Bad:

```tsx
const users =
  await prisma.user.findMany();

const products =
  await prisma.product.findMany();
```

```text
Users Query
      ↓
Products Query
```

Better:

```tsx
const [users, products] =
  await Promise.all([
    prisma.user.findMany(),
    prisma.product.findMany(),
  ]);
```

```text
Users Query    ──┐
Products Query ──┘
```

---

# Passing Data to Client Components

Server Component:

```tsx
import UserList from "./UserList";

export default async function Page() {
  const users =
    await prisma.user.findMany();

  return (
    <UserList users={users} />
  );
}
```

Client Component:

```tsx
"use client";

export default function UserList({
  users,
}) {
  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}
```

Pattern:

```text
Database
   ↓
Server Component
   ↓
Props
   ↓
Client Component
```

This is the most common architecture in App Router.

---

# Why Not Query the Database in a Client Component?

Imagine:

```tsx
"use client";

const users =
  await prisma.user.findMany();
```

This won't work.

Reasons:

1. Database access requires server resources.
2. Database credentials must stay secret.
3. Prisma is a Node.js package.

```text
Database
      ↓
Server Only
```

Never expose database access to the browser.

---

# Authentication Example

Server Components can safely access sessions.

```tsx
const session =
  await getServerSession();

const user =
  await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
```

Flow:

```text
Session
   ↓
Database
   ↓
HTML
```

No sensitive data reaches the client unless you explicitly pass it.

---

# Real-World Structure

```text
app/
├── dashboard/
│   └── page.tsx
│
├── products/
│   └── page.tsx
│
└── users/
    └── [id]/
        └── page.tsx

lib/
└── prisma.ts
```

```text
page.tsx
     ↓
Prisma
     ↓
Database
     ↓
Render UI
```

---

# Mental Model

```text
Server Component
      ↓
Database Query
      ↓
Data Returned
      ↓
HTML Generated
      ↓
Browser
```

### Rule of Thumb

In Next.js App Router:

✅ Fetch database data directly inside **Server Components**.

✅ Use Prisma (or another ORM) in server-side code.

✅ Use `Promise.all()` for independent queries.

✅ Pass database results to Client Components when interactivity is needed.

❌ Don't access databases from Client Components.

❌ Don't expose database credentials or queries to the browser.

The preferred App Router pattern is:

```text
Database
   ↓
Server Component
   ↓
Client Component (optional)
```

rather than:

```text
Database
   ↓
API Route
   ↓
Client Component
```

unless you specifically need a public API endpoint or client-side refetching.





---






# `Data Mutations` :

# Data Mutations in Next.js

So far you've learned **data fetching**:

```text
Database
   ↓
Server Component
   ↓
Read Data
```

A **data mutation** is when you **change data**:

* Create data
* Update data
* Delete data

Examples:

```text
Create User
Update Profile
Add Product
Delete Comment
Submit Form
```

---

# Reading vs Mutating

### Fetching

```tsx
const users =
  await prisma.user.findMany();
```

```text
Database
   ↓
Read
```

No changes are made.

---

### Mutation

```tsx
await prisma.user.create({
  data: {
    name: "John",
  },
});
```

```text
Database
   ↓
Write
```

Data changes.

---

# How Mutations Were Traditionally Done

Before App Router:

```text
Client Component
      ↓
POST /api/users
      ↓
API Route
      ↓
Database
```

Example:

```tsx
await fetch("/api/users", {
  method: "POST",
  body: JSON.stringify(data),
});
```

The API route handled the database write.

---

# App Router Approach: Server Actions

Next.js introduced **Server Actions**.

They let you call server-side code directly from forms and components.

```text
Form
  ↓
Server Action
  ↓
Database
```

No API route required.

---

# Basic Server Action

```tsx
// app/actions.ts

"use server";

export async function createUser() {
  console.log("Creating user");
}
```

The important part:

```tsx
"use server";
```

This marks the function as a Server Action.

---

# Using a Server Action in a Form

```tsx
import { createUser } from "./actions";

export default function Page() {
  return (
    <form action={createUser}>
      <button type="submit">
        Create User
      </button>
    </form>
  );
}
```

Flow:

```text
User clicks submit
        ↓
Server Action runs
        ↓
Database updated
```

---

# Creating Records

```tsx
// actions.ts

"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.create({
    data: {
      name,
    },
  });
}
```

Form:

```tsx
<form action={createUser}>
  <input name="name" />
  <button type="submit">
    Save
  </button>
</form>
```

Flow:

```text
Input
  ↓
FormData
  ↓
Server Action
  ↓
Database
```

---

# Updating Records

```tsx
"use server";

export async function updateUser(
  id: number,
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.update({
    where: { id },
    data: { name },
  });
}
```

---

# Deleting Records

```tsx
"use server";

export async function deleteUser(
  id: number
) {
  await prisma.user.delete({
    where: { id },
  });
}
```

---

# Why Server Actions Are Nice

Without Server Actions:

```text
Form
 ↓
fetch()
 ↓
API Route
 ↓
Database
```

With Server Actions:

```text
Form
 ↓
Server Action
 ↓
Database
```

Less boilerplate.

---

# The Cache Problem

Suppose:

```text
Users Page
```

fetches users.

Then:

```text
Create User
```

adds a new user.

The database changed, but the page may still show old cached data.

```text
Database ✓ Updated

Page ✗ Stale
```

---

# Revalidating Data

Next.js provides:

```tsx
import { revalidatePath }
  from "next/cache";
```

After mutation:

```tsx
"use server";

import { revalidatePath }
  from "next/cache";

export async function createUser(
  formData: FormData
) {
  await prisma.user.create({
    data: {
      name:
        formData.get("name") as string,
    },
  });

  revalidatePath("/users");
}
```

Flow:

```text
Create User
     ↓
Database Updated
     ↓
revalidatePath()
     ↓
Fresh Data Next Render
```

---

# Redirect After Mutation

Common pattern:

```tsx
import { redirect }
  from "next/navigation";

export async function createUser(
  formData: FormData
) {
  await prisma.user.create({
    data: {
      name:
        formData.get("name") as string,
    },
  });

  redirect("/users");
}
```

Flow:

```text
Submit
   ↓
Save User
   ↓
Redirect
   ↓
Users Page
```

---

# Server Actions and Client Components

A Client Component can trigger a Server Action.

### Server Action

```tsx
"use server";

export async function deleteUser(
  id: number
) {
  await prisma.user.delete({
    where: { id },
  });
}
```

### Client Component

```tsx
"use client";

import { deleteUser }
  from "./actions";

export default function DeleteButton({
  id,
}: {
  id: number;
}) {
  return (
    <button
      onClick={() => deleteUser(id)}
    >
      Delete
    </button>
  );
}
```

Conceptually:

```text
Client Component
      ↓
Server Action
      ↓
Database
```

---

# Pending States

Forms can show pending status while the mutation runs.

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

```tsx
<form action={createUser}>
  <SubmitButton />
</form>
```

Flow:

```text
Submit
   ↓
Saving...
   ↓
Success
```

---

# Error Handling

```tsx
"use server";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name");

  if (!name) {
    throw new Error(
      "Name is required"
    );
  }

  await prisma.user.create({
    data: {
      name: String(name),
    },
  });
}
```

The error can then be displayed in the UI using form state patterns or route-level error boundaries.

---

# Real-World Example

```text
Products Page
│
├── Product List (Server)
│
├── Add Product Form
│      ↓
│   Server Action
│
├── Edit Product
│      ↓
│   Server Action
│
└── Delete Product
       ↓
    Server Action
```

All database writes happen on the server.

---

# Mental Model

### Fetching

```text
Database
   ↓
Server Component
   ↓
HTML
```

### Mutation

```text
User Action
     ↓
Server Action
     ↓
Database Write
     ↓
Revalidate / Redirect
     ↓
Fresh UI
```

---

# Rule of Thumb

For App Router:

✅ Use **Server Components** to read data.

✅ Use **Server Actions** to create, update, and delete data.

✅ Use `revalidatePath()` after mutations when cached pages need refreshing.

✅ Use `redirect()` after successful submissions when appropriate.

✅ Keep database logic on the server.

A common pattern is:

```text
Server Component
      ↓
Fetch Data

User submits form
      ↓
Server Action
      ↓
Database Update
      ↓
revalidatePath()
      ↓
Fresh Data Rendered
```

This combination of **Server Components + Server Actions** is the core data flow in modern Next.js App Router applications.






---






# `Forms with Server Actions` :

# Forms with Server Actions

Forms are one of the most common uses of **Server Actions** in Next.js.

Instead of:

```text
Form
  ↓
fetch()
  ↓
API Route
  ↓
Database
```

you can do:

```text
Form
  ↓
Server Action
  ↓
Database
```

Much less code.

---

# Basic Form

## Server Action

```tsx
// app/actions.ts

"use server";

export async function createUser(
  formData: FormData
) {
  const name = formData.get("name");

  console.log(name);
}
```

---

## Form

```tsx
import { createUser } from "./actions";

export default function Page() {
  return (
    <form action={createUser}>
      <input
        name="name"
        placeholder="Name"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
```

Flow:

```text
Submit
  ↓
createUser()
  ↓
Server
```

Notice:

```tsx
<form action={createUser}>
```

The form directly calls the Server Action.

No API route.

---

# Getting Form Values

```tsx
"use server";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name");

  const email =
    formData.get("email");

  console.log(name, email);
}
```

Form:

```tsx
<form action={createUser}>
  <input name="name" />
  <input name="email" />

  <button type="submit">
    Save
  </button>
</form>
```

Each input's `name` becomes a key in `FormData`.

---

# Saving to a Database

```tsx
"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  const email =
    formData.get("email") as string;

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });
}
```

Flow:

```text
Form
 ↓
Server Action
 ↓
Prisma
 ↓
Database
```

---

# Redirect After Submit

Usually after creating data, you redirect.

```tsx
"use server";

import { redirect }
  from "next/navigation";

export async function createUser(
  formData: FormData
) {
  await prisma.user.create({
    data: {
      name:
        formData.get("name") as string,
    },
  });

  redirect("/users");
}
```

Flow:

```text
Submit
  ↓
Save
  ↓
Redirect
  ↓
/users
```

---

# Revalidating Cached Data

Suppose `/users` fetches data.

After creating a user:

```text
Database Updated
      ↓
Users page still cached
```

Fix:

```tsx
"use server";

import {
  revalidatePath,
} from "next/cache";

export async function createUser(
  formData: FormData
) {
  await prisma.user.create({
    data: {
      name:
        formData.get("name") as string,
    },
  });

  revalidatePath("/users");
}
```

Now the next render gets fresh data.

---

# Validation

Never trust form input.

```tsx
"use server";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name");

  if (!name) {
    throw new Error(
      "Name is required"
    );
  }

  await prisma.user.create({
    data: {
      name: String(name),
    },
  });
}
```

---

# Better Validation with Zod

A common pattern is using the package `zod`.

```tsx
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
});
```

```tsx
const result =
  schema.safeParse({
    name:
      formData.get("name"),
    email:
      formData.get("email"),
  });

if (!result.success) {
  // handle validation errors
}
```

This keeps validation structured and type-safe.

---

# Pending State

When a form submits, users need feedback.

Create a Client Component:

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

Use it:

```tsx
<form action={createUser}>
  <input name="name" />

  <SubmitButton />
</form>
```

Flow:

```text
Click Save
    ↓
Saving...
    ↓
Done
```

---

# Passing Extra Arguments

Suppose you're editing a user.

Server Action:

```tsx
"use server";

export async function updateUser(
  userId: string,
  formData: FormData
) {
  const name =
    formData.get("name");

  // update database
}
```

Bind the ID:

```tsx
const updateUserWithId =
  updateUser.bind(null, user.id);
```

```tsx
<form action={updateUserWithId}>
  <input name="name" />

  <button>
    Update
  </button>
</form>
```

Flow:

```text
user.id
   +
FormData
   ↓
Server Action
```

This is very common for edit/delete forms.

---

# Using Server Actions from Client Components

You can also submit from interactive UI.

```tsx
"use client";

import { createUser }
  from "./actions";

export default function Form() {
  return (
    <form action={createUser}>
      <input name="name" />
      <button>Save</button>
    </form>
  );
}
```

The component is client-side, but the action still runs on the server.

```text
Browser
   ↓
Server Action
   ↓
Database
```

---

# Example Folder Structure

```text
app/
├── users/
│   ├── page.tsx
│   └── actions.ts
│
├── components/
│   └── SubmitButton.tsx
│
└── lib/
    └── prisma.ts
```

---

# Complete Example

### actions.ts

```tsx
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.create({
    data: { name },
  });

  redirect("/users");
}
```

### page.tsx

```tsx
import { createUser }
  from "./actions";

export default function Page() {
  return (
    <form action={createUser}>
      <input
        name="name"
        placeholder="Name"
      />

      <button type="submit">
        Create User
      </button>
    </form>
  );
}
```

---

# Mental Model

```text
User fills form
        ↓
<form action={serverAction}>
        ↓
Server Action executes
        ↓
Database updated
        ↓
revalidatePath() / redirect()
        ↓
Fresh UI
```

### Rule of Thumb

For App Router forms:

✅ Use `<form action={serverAction}>`

✅ Read values from `FormData`

✅ Validate inputs on the server

✅ Perform database mutations in the Server Action

✅ Use `revalidatePath()` when cached data must refresh

✅ Use `redirect()` after successful submissions when appropriate

This is the modern Next.js replacement for the older pattern of `onSubmit → fetch() → API Route → Database` for many form-based workflows.






---





# `useFormStatus() Hook` :

# `useFormStatus()` Hook

`useFormStatus()` is a React hook that works with forms and Server Actions.

Its main purpose is to tell you:

```text
Is this form currently submitting?
```

Without it, users might click a submit button multiple times because they don't know anything is happening.

---

# The Problem

Suppose you have:

```tsx
<form action={createUser}>
  <input name="name" />

  <button type="submit">
    Save
  </button>
</form>
```

When the user clicks **Save**:

```text
Click Save
    ↓
Server Action runs
    ↓
Database writes
    ↓
Response returns
```

During that time:

```text
Button still says "Save"
```

The user gets no feedback.

---

# The Solution

`useFormStatus()` gives information about the current form submission.

```tsx
const status = useFormStatus();
```

Most commonly:

```tsx
const { pending } = useFormStatus();
```

`pending` is:

```text
true  → form is submitting
false → form is idle
```

---

# Basic Example

## Submit Button Component

Must be a Client Component:

```tsx
"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

---

## Form

```tsx
import { createUser } from "./actions";
import { SubmitButton } from "./SubmitButton";

export default function Page() {
  return (
    <form action={createUser}>
      <input name="name" />

      <SubmitButton />
    </form>
  );
}
```

Flow:

```text
User clicks Save
        ↓
pending = true
        ↓
Button disabled
        ↓
"Saving..."
        ↓
Action finishes
        ↓
pending = false
        ↓
"Save"
```

---

# Why a Separate Component?

Many beginners try:

```tsx
"use client";

export default function Form() {
  const { pending } =
    useFormStatus();

  return (
    <form action={createUser}>
      ...
    </form>
  );
}
```

This won't work as expected.

`useFormStatus()` only tracks the **nearest parent form**.

The hook must be rendered **inside the form tree**.

Correct:

```tsx
<form action={createUser}>
  <SubmitButton />
</form>
```

```text
Form
 └── SubmitButton
      └── useFormStatus()
```

---

# Disabling Double Submissions

A common use:

```tsx
<button disabled={pending}>
  Save
</button>
```

This prevents:

```text
Click
Click
Click
Click
```

while the action is still running.

---

# Showing a Spinner

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? (
        <span>⏳ Saving...</span>
      ) : (
        "Save"
      )}
    </button>
  );
}
```

---

# Multiple Forms

Each form gets its own status.

```tsx
<form action={createUser}>
  <SubmitButton />
</form>

<form action={deleteUser}>
  <DeleteButton />
</form>
```

Flow:

```text
Create Form
   ↓
pending=true

Delete Form
   ↓
pending=false
```

The statuses don't interfere with each other.

---

# Real Example

## Action

```tsx
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath }
  from "next/cache";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.create({
    data: { name },
  });

  revalidatePath("/users");
}
```

---

## Submit Button

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Creating..."
        : "Create User"}
    </button>
  );
}
```

---

## Form

```tsx
import { createUser } from "./actions";
import { SubmitButton } from "./SubmitButton";

export default function Page() {
  return (
    <form action={createUser}>
      <input
        name="name"
        placeholder="Name"
      />

      <SubmitButton />
    </form>
  );
}
```

---

# Relationship with Server Actions

Think of it like this:

```text
Form
 ↓
Server Action starts
 ↓
pending = true
 ↓
Server Action finishes
 ↓
pending = false
```

`useFormStatus()` does **not** run the action.

It simply observes the submission state of the form.

---

# `useFormStatus()` vs `useState()`

### Traditional React

```tsx
const [loading, setLoading] =
  useState(false);
```

You manually do:

```tsx
setLoading(true);

await fetch(...);

setLoading(false);
```

---

### Server Actions

```tsx
const { pending } =
  useFormStatus();
```

No loading state management.

React handles it automatically.

---

# Mental Model

```text
<form action={serverAction}>
            ↓
      useFormStatus()
            ↓
      pending=true
            ↓
   Show loading UI
            ↓
      pending=false
```

### Rule of Thumb

Use `useFormStatus()` when you need:

✅ Loading text

✅ Disabled submit buttons

✅ Spinners

✅ Prevent double submissions

✅ Form-specific pending state

It is the standard way to show submission progress for forms that use Server Actions in the App Router.






---






# `useActionState() Hook` :

# `useActionState()` Hook

After learning `useFormStatus()`, the next important hook is **`useActionState()`**.

Think of the difference like this:

| Hook               | Purpose                              |
| ------------------ | ------------------------------------ |
| `useFormStatus()`  | "Is the form submitting?"            |
| `useActionState()` | "What result did the action return?" |

---

# Why Do We Need It?

Suppose a user submits a form.

```text
Form
 ↓
Server Action
 ↓
Validation fails
```

How do you show:

```text
❌ Email is invalid
```

to the user?

You need a way for the Server Action to send data back to the UI.

That's exactly what `useActionState()` does.

---

# Mental Model

Without `useActionState()`:

```text
Form
 ↓
Server Action
 ↓
Database
```

With `useActionState()`:

```text
Form
 ↓
Server Action
 ↓
Returns Result
 ↓
UI Updates
```

---

# Basic Example

## Server Action

```tsx
"use server";

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name");

  if (!name) {
    return {
      error: "Name is required",
    };
  }

  return {
    success: true,
  };
}
```

Notice the signature:

```tsx
(prevState, formData)
```

When used with `useActionState()`, React automatically passes the previous state.

---

## Client Form

```tsx
"use client";

import { useActionState } from "react";
import { createUser } from "./actions";

export default function UserForm() {
  const [state, formAction] =
    useActionState(createUser, null);

  return (
    <form action={formAction}>
      <input name="name" />

      <button type="submit">
        Save
      </button>

      {state?.error && (
        <p>{state.error}</p>
      )}
    </form>
  );
}
```

Flow:

```text
Submit
 ↓
Server Action
 ↓
Returns { error: "..." }
 ↓
state updated
 ↓
UI rerenders
```

---

# Understanding the Return Values

```tsx
const [state, formAction] =
  useActionState(action, initialState);
```

### `state`

Current result returned by the action.

```tsx
state.error
state.success
```

---

### `formAction`

A wrapped version of your Server Action.

Use it in:

```tsx
<form action={formAction}>
```

instead of:

```tsx
<form action={createUser}>
```

---

### `initialState`

Initial value before first submission.

```tsx
useActionState(action, {
  error: null,
});
```

---

# Real Validation Example

## Action

```tsx
"use server";

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const email =
    formData.get("email");

  if (!email) {
    return {
      error: "Email is required",
    };
  }

  return {
    success: true,
    error: null,
  };
}
```

---

## Form

```tsx
"use client";

import { useActionState } from "react";
import { createUser } from "./actions";

const initialState = {
  error: null,
};

export default function UserForm() {
  const [state, formAction] =
    useActionState(
      createUser,
      initialState
    );

  return (
    <form action={formAction}>
      <input name="email" />

      <button>
        Submit
      </button>

      {state.error && (
        <p>{state.error}</p>
      )}
    </form>
  );
}
```

---

# Success Messages

Server Action:

```tsx
return {
  success: true,
  message: "User created",
};
```

Client:

```tsx
{
  state.success && (
    <p>{state.message}</p>
  );
}
```

Flow:

```text
Submit
 ↓
Server Action
 ↓
Returns success
 ↓
Success message shown
```

---

# Using with `useFormStatus()`

These hooks solve different problems.

```text
useFormStatus()
 ↓
Loading state

useActionState()
 ↓
Result state
```

Common pattern:

```tsx
<form action={formAction}>
  <input name="name" />

  <SubmitButton />

  {state.error && (
    <p>{state.error}</p>
  )}
</form>
```

---

## Submit Button

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

Now you get:

```text
Submitting...
 ↓
Pending UI
 ↓
Server Response
 ↓
Success/Error UI
```

---

# Previous State

One powerful feature is access to the previous action result.

```tsx
export async function action(
  prevState,
  formData
) {
  console.log(prevState);

  return {
    count:
      prevState.count + 1,
  };
}
```

Flow:

```text
Initial: count=0
 ↓
Submit
 ↓
count=1
 ↓
Submit
 ↓
count=2
```

Although this is less common for forms, it's useful for stateful workflows.

---

# Typical Pattern with Zod

Server Action:

```tsx
"use server";

import { z } from "zod";

const schema = z.object({
  email: z.email(),
});

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const result =
    schema.safeParse({
      email:
        formData.get("email"),
    });

  if (!result.success) {
    return {
      errors:
        result.error.flatten()
          .fieldErrors,
    };
  }

  return {
    success: true,
    errors: {},
  };
}
```

Client:

```tsx
{
  state.errors?.email?.[0] && (
    <p>
      {state.errors.email[0]}
    </p>
  );
}
```

This is one of the most common App Router patterns.

---

# Complete Flow Diagram

```text
User submits form
          ↓
useFormStatus()
pending=true
          ↓
Server Action runs
          ↓
Validation
          ↓
Return state object
          ↓
useActionState()
updates state
          ↓
UI rerenders
          ↓
Show success/error message
```

---

# `useActionState()` vs `useFormStatus()`

| Feature              | useActionState | useFormStatus |
| -------------------- | -------------- | ------------- |
| Loading state        | ❌              | ✅             |
| Pending flag         | ❌              | ✅             |
| Return action result | ✅              | ❌             |
| Validation errors    | ✅              | ❌             |
| Success messages     | ✅              | ❌             |
| Disable button       | ❌              | ✅             |

---

# Rule of Thumb

Use **`useActionState()`** when you need the Server Action to return data back to the UI:

✅ Validation errors

✅ Success messages

✅ Form state

✅ Returned values

Use **`useFormStatus()`** when you need:

✅ Loading indicators

✅ Disabled submit buttons

✅ Spinners

In real-world App Router forms, you'll often use **both together**:

```text
useFormStatus()
      +
useActionState()
      ↓
Great form UX
```





---





# `Separating Server Actions` :

# Separating Server Actions

As your application grows, you generally don't want Server Actions sitting inside every page component.

A common pattern is:

```text
app/
├── users/
│   ├── page.tsx
│   └── actions.ts
│
├── products/
│   ├── page.tsx
│   └── actions.ts
│
└── lib/
```

This keeps:

```text
UI        → page.tsx
Mutations → actions.ts
```

separate and easier to maintain.

---

# Inline Server Action

Next.js allows this:

```tsx
export default function Page() {
  async function createUser(
    formData: FormData
  ) {
    "use server";

    // database code
  }

  return (
    <form action={createUser}>
      ...
    </form>
  );
}
```

This is fine for:

* learning
* tiny forms
* one-off actions

But it becomes messy when:

```text
Page
 ├─ UI
 ├─ Validation
 ├─ DB logic
 ├─ Redirects
 └─ Cache revalidation
```

all live in one file.

---

# Extracting to `actions.ts`

## actions.ts

```tsx
// app/users/actions.ts

"use server";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name");

  console.log(name);
}
```

---

## page.tsx

```tsx
import { createUser }
  from "./actions";

export default function Page() {
  return (
    <form action={createUser}>
      <input name="name" />

      <button>
        Save
      </button>
    </form>
  );
}
```

Flow:

```text
page.tsx
    ↓ imports
actions.ts
    ↓
Server Action executes
```

---

# Why Put `"use server"` at the Top?

When every export in a file is a Server Action:

```tsx
"use server";

export async function createUser() {}
export async function updateUser() {}
export async function deleteUser() {}
```

you can place `"use server"` once at the top.

Instead of:

```tsx
export async function createUser() {
  "use server";
}
```

inside every function.

---

# Grouping Related Actions

A very common structure:

```text
app/
└── users/
    ├── page.tsx
    ├── actions.ts
    ├── loading.tsx
    └── error.tsx
```

---

### actions.ts

```tsx
"use server";

export async function createUser() {}

export async function updateUser() {}

export async function deleteUser() {}
```

Everything related to users stays together.

---

# Using Database Logic

Example:

```tsx
// app/users/actions.ts

"use server";

import { prisma }
  from "@/lib/prisma";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.create({
    data: { name },
  });
}
```

Then:

```tsx
// app/users/page.tsx

import { createUser }
  from "./actions";
```

The page doesn't need to know how the database works.

---

# Separating Validation

As projects grow:

```text
Form
 ↓
Action
 ↓
Validation
 ↓
Database
```

often becomes:

```text
Form
 ↓
Action
 ↓
Validation Function
 ↓
Database Function
```

Example:

```tsx
// lib/validation.ts

export function validateName(
  name: string
) {
  if (!name) {
    throw new Error(
      "Name required"
    );
  }
}
```

---

```tsx
// app/users/actions.ts

"use server";

import { validateName }
  from "@/lib/validation";

export async function createUser(
  formData: FormData
) {
  const name =
    String(formData.get("name"));

  validateName(name);

  // save user
}
```

---

# Separating Database Access

Many teams also separate data access.

```text
app/
lib/
services/
```

Example:

```text
services/
└── users.ts
```

---

### services/users.ts

```tsx
import { prisma }
  from "@/lib/prisma";

export async function createUserInDb(
  name: string
) {
  return prisma.user.create({
    data: { name },
  });
}
```

---

### actions.ts

```tsx
"use server";

import {
  createUserInDb,
} from "@/services/users";

export async function createUser(
  formData: FormData
) {
  const name =
    String(formData.get("name"));

  await createUserInDb(name);
}
```

Flow:

```text
Form
 ↓
Server Action
 ↓
Service Layer
 ↓
Database
```

This becomes valuable in larger applications.

---

# Can Client Components Import Actions?

Yes.

This is one of the special things about Server Actions.

```tsx
"use client";

import { createUser }
  from "./actions";
```

is allowed.

Even though:

```tsx
createUser
```

runs on the server.

Flow:

```text
Client Component
       ↓
Server Action Reference
       ↓
Server Executes
```

This is a special Next.js capability.

---

# Common Folder Structures

## Small Project

```text
app/
└── users/
    ├── page.tsx
    └── actions.ts
```

---

## Medium Project

```text
app/
└── users/
    ├── page.tsx
    ├── actions.ts
    └── components/
```

---

## Large Project

```text
app/
├── users/
│   ├── page.tsx
│   └── actions.ts
│
├── services/
│   └── users.ts
│
├── validations/
│   └── users.ts
│
└── lib/
```

---

# Recommended Mental Model

Think of Server Actions as **controllers**.

```text
Form
 ↓
Server Action
 ↓
Validation
 ↓
Service
 ↓
Database
```

Where:

```text
Server Action
    =
Coordinator
```

It receives input, calls validation, calls database/service code, revalidates cache, and redirects if needed.

---

# Rule of Thumb

For small demos:

```tsx
page.tsx
```

with inline actions is fine.

For real applications:

```text
actions.ts
```

for Server Actions,

```text
services/
```

for database/business logic,

```text
validations/
```

for validation.

A good separation looks like:

```text
UI
 ↓
Server Action
 ↓
Service Layer
 ↓
Database
```

This keeps Server Actions focused on handling the request rather than containing all the business logic themselves.






---






# `useFormStatus() vs useActionState()` :

This is one of the most important distinctions in App Router forms.

A good way to think about it is:

```text
useFormStatus()
     ↓
"What is happening right now?"

useActionState()
     ↓
"What happened after submission?"
```

---

# Visual Comparison

```text
User submits form
        ↓
  useFormStatus
  pending=true
        ↓
Server Action runs
        ↓
Server Action returns
        ↓
 useActionState
 gets returned data
```

---

# `useFormStatus()`

Purpose:

```text
Track form submission status
```

Most commonly:

```tsx
const { pending } = useFormStatus();
```

You use it for:

* Loading states
* Disabling buttons
* Showing spinners
* Preventing double submits

Example:

```tsx
"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
```

Flow:

```text
Click Save
     ↓
pending=true
     ↓
Saving...
     ↓
Action completes
     ↓
pending=false
```

Notice:

```text
No success message
No validation errors
No returned data
```

It only knows whether the form is currently submitting.

---

# `useActionState()`

Purpose:

```text
Receive data returned by a Server Action
```

Example action:

```tsx
"use server";

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name");

  if (!name) {
    return {
      error: "Name is required",
    };
  }

  return {
    success: true,
  };
}
```

Client:

```tsx
"use client";

import { useActionState } from "react";
import { createUser } from "./actions";

export default function Form() {
  const [state, formAction] =
    useActionState(createUser, null);

  return (
    <form action={formAction}>
      <input name="name" />

      <button>Save</button>

      {state?.error && (
        <p>{state.error}</p>
      )}
    </form>
  );
}
```

Flow:

```text
Submit
   ↓
Server Action
   ↓
Returns { error: ... }
   ↓
state updated
   ↓
UI rerenders
```

Notice:

```text
Knows validation errors
Knows success messages
Knows returned values
```

---

# Side-by-Side Example

Imagine a signup form.

## With `useFormStatus()`

```tsx
const { pending } = useFormStatus();
```

You can show:

```text
Saving...
```

But you cannot show:

```text
Email already exists
```

because no result is returned.

---

## With `useActionState()`

```tsx
const [state, formAction] =
  useActionState(signUp, initialState);
```

You can show:

```text
Email already exists
```

because it came back from the Server Action.

But by itself it doesn't give you a button-loading experience.

---

# Real-World Pattern

Most forms use **both**.

```tsx
"use client";

const [state, formAction] =
  useActionState(createUser, {
    error: null,
  });

return (
  <form action={formAction}>
    <input name="name" />

    <SubmitButton />

    {state.error && (
      <p>{state.error}</p>
    )}
  </form>
);
```

### SubmitButton

```tsx
"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

Flow:

```text
Submit
 ↓
pending=true
 ↓
Saving...
 ↓
Server Action
 ↓
Returns error/success
 ↓
state updated
 ↓
Message displayed
```

---

# Mental Model

Imagine a delivery app:

```text
useFormStatus()
    =
"The driver is currently on the way"

useActionState()
    =
"The package was delivered"
```

One tracks the **process**.

The other tracks the **result**.

---

# Comparison Table

| Feature                   | `useFormStatus()` | `useActionState()` |
| ------------------------- | ----------------- | ------------------ |
| Pending state             | ✅                 | ❌                  |
| Loading spinner           | ✅                 | ❌                  |
| Disable submit button     | ✅                 | ❌                  |
| Success message           | ❌                 | ✅                  |
| Validation errors         | ❌                 | ✅                  |
| Returned server data      | ❌                 | ✅                  |
| Access previous state     | ❌                 | ✅                  |
| Works with Server Actions | ✅                 | ✅                  |

---

# Rule of Thumb

Use **`useFormStatus()`** when you need:

```text
"Is the form currently submitting?"
```

Use **`useActionState()`** when you need:

```text
"What did the server action return?"
```

For production forms, the most common setup is:

```text
useFormStatus()
        +
useActionState()
        ↓
Loading UI + Validation UI
```

That combination gives you both a smooth submission experience and a way to display server-side validation results.






---






# `Update Server Action` :

# Update Server Action

You've already seen **create** actions. An **update** action follows the same pattern:

```text
Form
 ↓
Server Action
 ↓
Database UPDATE
 ↓
revalidatePath()
 ↓
Fresh UI
```

---

# Example Scenario

Suppose we have a user:

```text
id: 1
name: "John"
email: "john@example.com"
```

We want to change the name to:

```text
John Doe
```

---

# Step 1: Create the Update Action

```tsx
// app/users/actions.ts

"use server";

import { prisma } from "@/lib/prisma";

export async function updateUser(
  userId: string,
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
}
```

Notice:

```tsx
userId
```

is separate from:

```tsx
formData
```

because the ID usually comes from the route or existing record, not from the form.

---

# Step 2: Bind the User ID

Suppose you fetched a user:

```tsx
const user =
  await prisma.user.findUnique({
    where: { id: params.id },
  });
```

Create a bound action:

```tsx
const updateUserWithId =
  updateUser.bind(
    null,
    user.id
  );
```

Now:

```tsx
updateUserWithId(formData)
```

automatically becomes:

```tsx
updateUser(user.id, formData)
```

---

# Step 3: Use the Form

```tsx
<form action={updateUserWithId}>
  <input
    name="name"
    defaultValue={user.name}
  />

  <button>
    Update User
  </button>
</form>
```

Flow:

```text
Existing User
      ↓
Form pre-filled
      ↓
User edits
      ↓
Submit
      ↓
updateUser()
      ↓
Database updated
```

---

# Complete Example

## Server Component

```tsx
// app/users/[id]/page.tsx

import { prisma } from "@/lib/prisma";
import { updateUser } from "../actions";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const user =
    await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });

  const action =
    updateUser.bind(
      null,
      user!.id
    );

  return (
    <form action={action}>
      <input
        name="name"
        defaultValue={user?.name}
      />

      <button>
        Update
      </button>
    </form>
  );
}
```

---

## Server Action

```tsx
"use server";

import { prisma } from "@/lib/prisma";

export async function updateUser(
  userId: string,
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
}
```

---

# Revalidating Data

Suppose `/users` shows a list.

After updating:

```text
Database updated
      ↓
Page cache still old
```

Fix:

```tsx
import { revalidatePath }
  from "next/cache";

export async function updateUser(
  userId: string,
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });

  revalidatePath("/users");
}
```

---

# Redirect After Update

A very common pattern:

```tsx
import { redirect }
  from "next/navigation";

export async function updateUser(
  userId: string,
  formData: FormData
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name:
        formData.get("name")
          as string,
    },
  });

  redirect("/users");
}
```

Flow:

```text
Update User
      ↓
Database updated
      ↓
Redirect
      ↓
Users page
```

---

# Updating Multiple Fields

Form:

```tsx
<form action={updateUserWithId}>
  <input
    name="name"
    defaultValue={user.name}
  />

  <input
    name="email"
    defaultValue={user.email}
  />

  <button>
    Save
  </button>
</form>
```

Action:

```tsx
export async function updateUser(
  userId: string,
  formData: FormData
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name:
        formData.get("name")
          as string,

      email:
        formData.get("email")
          as string,
    },
  });
}
```

---

# Using `useActionState()` with Updates

Update actions often return validation errors.

```tsx
"use server";

export async function updateUser(
  userId: string,
  prevState: any,
  formData: FormData
) {
  const name =
    formData.get("name");

  if (!name) {
    return {
      error:
        "Name is required",
    };
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: String(name),
    },
  });

  return {
    success: true,
  };
}
```

Then the client form can display:

```tsx
state.error
```

or

```tsx
state.success
```

after submission.

---

# Mental Model

An update action is almost identical to a create action:

```text
CREATE

Form
 ↓
createUser()
 ↓
prisma.user.create()

-----------------------

UPDATE

Form
 ↓
updateUser()
 ↓
prisma.user.update()
```

The main difference is:

```text
Create
 ↓
Needs new data

Update
 ↓
Needs existing record ID
 + new data
```

---

# Rule of Thumb

For update forms:

1. Fetch the existing record in a Server Component.
2. Pre-fill inputs using `defaultValue`.
3. Pass the record ID using `bind()`.
4. Update the database inside a Server Action.
5. Call `revalidatePath()` or `redirect()` afterward.

Typical flow:

```text
Fetch User
    ↓
Show Edit Form
    ↓
Submit
    ↓
updateUser(id, formData)
    ↓
Database Updated
    ↓
Revalidate/Redirect
```






---






# `Delete Server Action` :

# Delete Server Action

A delete action is even simpler than an update action.

Flow:

```text
User clicks Delete
        ↓
Server Action
        ↓
Database DELETE
        ↓
revalidatePath() / redirect()
        ↓
Fresh UI
```

---

# Basic Delete Action

## Server Action

```tsx
// app/users/actions.ts

"use server";

import { prisma } from "@/lib/prisma";

export async function deleteUser(
  userId: string
) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
}
```

Notice:

```tsx
deleteUser(userId)
```

There is no `FormData` because we don't need user input.

We only need:

```text
Which record should be deleted?
```

---

# Calling from a Form

Even without inputs, forms are still commonly used.

```tsx
const deleteUserWithId =
  deleteUser.bind(
    null,
    user.id
  );
```

```tsx
<form action={deleteUserWithId}>
  <button type="submit">
    Delete
  </button>
</form>
```

Flow:

```text
Delete Button
      ↓
Form Submit
      ↓
deleteUser(user.id)
      ↓
Database Delete
```

---

# Why Use a Form?

You might wonder:

```text
There's no input.
Why use a form?
```

Because forms work naturally with Server Actions:

```tsx
<form action={deleteUserWithId}>
```

No:

```tsx
fetch()
API route
JSON body
```

needed.

---

# Example User List

Suppose we have:

```tsx
const users =
  await prisma.user.findMany();
```

Render:

```tsx
{
  users.map((user) => {
    const action =
      deleteUser.bind(
        null,
        user.id
      );

    return (
      <div key={user.id}>
        <span>{user.name}</span>

        <form action={action}>
          <button>
            Delete
          </button>
        </form>
      </div>
    );
  });
}
```

Flow:

```text
User Row
   ↓
Delete Button
   ↓
Delete Action
   ↓
Row disappears
```

---

# Revalidating After Delete

Without revalidation:

```text
Database deleted
      ↓
Page cache still old
```

Fix:

```tsx
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath }
  from "next/cache";

export async function deleteUser(
  userId: string
) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  revalidatePath("/users");
}
```

Flow:

```text
Delete
  ↓
Database updated
  ↓
Cache invalidated
  ↓
Fresh user list
```

---

# Redirect After Delete

If you're on:

```text
/users/123/edit
```

and delete that user:

```text
Current page no longer makes sense
```

Redirect:

```tsx
"use server";

import { redirect }
  from "next/navigation";

export async function deleteUser(
  userId: string
) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  redirect("/users");
}
```

Flow:

```text
Delete
 ↓
User removed
 ↓
Redirect
 ↓
/users
```

---

# Delete from a Client Component

Server Actions can be imported into Client Components.

```tsx
"use client";

import { deleteUser }
  from "./actions";

export function DeleteButton({
  userId,
}: {
  userId: string;
}) {
  const action =
    deleteUser.bind(
      null,
      userId
    );

  return (
    <form action={action}>
      <button>
        Delete
      </button>
    </form>
  );
}
```

The action still runs on the server.

```text
Browser
   ↓
Server Action
   ↓
Database
```

---

# Confirm Before Delete

A common pattern:

```tsx
"use client";

export function DeleteButton({
  action,
}: {
  action: () => void;
}) {
  return (
    <button
      onClick={() => {
        const confirmed =
          confirm(
            "Delete user?"
          );

        if (confirmed) {
          action();
        }
      }}
    >
      Delete
    </button>
  );
}
```

However, in modern App Router apps it's often simpler to keep the actual mutation inside a Server Action and only use client-side code for the confirmation UI.

---

# Using `useFormStatus()`

Delete operations can take time.

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function DeleteSubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}
```

Usage:

```tsx
<form action={deleteUserWithId}>
  <DeleteSubmitButton />
</form>
```

Flow:

```text
Click Delete
      ↓
Deleting...
      ↓
Database Delete
      ↓
Done
```

---

# Create vs Update vs Delete

## Create

```tsx
await prisma.user.create({
  data: {
    name,
  },
});
```

Needs:

```text
New data
```

---

## Update

```tsx
await prisma.user.update({
  where: { id },
  data: {
    name,
  },
});
```

Needs:

```text
Record ID
+
New data
```

---

## Delete

```tsx
await prisma.user.delete({
  where: { id },
});
```

Needs:

```text
Record ID only
```

---

# Typical Folder Structure

```text
app/
└── users/
    ├── page.tsx
    ├── actions.ts
    └── components/
```

### actions.ts

```tsx
"use server";

export async function createUser() {}

export async function updateUser() {}

export async function deleteUser() {}
```

Keeping all CRUD actions together is very common.

---

# Mental Model

```text
Create
 ↓
Insert record

Update
 ↓
Modify record

Delete
 ↓
Remove record
```

For delete actions, the usual pattern is:

```text
Button
 ↓
<form action={deleteUser.bind(null, id)}>
 ↓
Server Action
 ↓
prisma.delete()
 ↓
revalidatePath() or redirect()
```

That's the standard App Router approach for delete operations.






---






# `Optimistic Updates with useOptimistic()` :

# Optimistic Updates with `useOptimistic()`

So far, our flow has been:

```text
User Action
     ↓
Server Action
     ↓
Database Updated
     ↓
UI Updated
```

The problem:

```text
Click
 ↓
Wait...
 ↓
Wait...
 ↓
UI updates
```

Even if it's only 500ms, the UI can feel slow.

---

# What is an Optimistic Update?

An optimistic update assumes the server action will succeed and updates the UI immediately.

Instead of:

```text
Click Like
    ↓
Wait for server
    ↓
Update UI
```

we do:

```text
Click Like
    ↓
Update UI immediately
    ↓
Server Action runs
    ↓
Confirm update
```

The UI feels instant.

---

# Real-World Example

Think about social media.

When you click ❤️:

```text
Likes: 10
```

you usually see:

```text
Likes: 11
```

immediately.

The app doesn't make you wait for the database response.

That's an optimistic update.

---

# What is `useOptimistic()`?

`useOptimistic()` lets you temporarily show a predicted state while a Server Action is running.

Basic shape:

```tsx
const [optimisticState, addOptimistic] =
  useOptimistic(
    actualState,
    updateFn
  );
```

Where:

* `actualState` = real data from the server
* `optimisticState` = temporary UI state
* `addOptimistic()` = apply optimistic change

---

# Mental Model

```text
Real State
    ↓
useOptimistic()
    ↓
Optimistic State
    ↓
Instant UI Update
```

---

# Simple Example

Suppose we start with:

```tsx
const messages = [
  "Hello",
  "Hi",
];
```

---

## Without Optimistic Update

```text
Submit Message
       ↓
Server Action
       ↓
Database
       ↓
Refresh
       ↓
Message appears
```

The user waits.

---

## With Optimistic Update

```text
Submit Message
       ↓
Message appears instantly
       ↓
Server Action
       ↓
Database
       ↓
Real data catches up
```

---

# Example: Add Todo

## Server Action

```tsx
"use server";

export async function createTodo(
  text: string
) {
  await db.todo.create({
    data: { text },
  });
}
```

---

## Client Component

```tsx
"use client";

import {
  useOptimistic,
} from "react";
```

```tsx
const [optimisticTodos,
       addOptimisticTodo] =
  useOptimistic(
    todos,
    (state, newTodo) => [
      ...state,
      newTodo,
    ]
  );
```

---

When submitting:

```tsx
addOptimisticTodo({
  id: "temp",
  text,
});
```

The UI updates immediately.

---

# Complete Flow

```text
Current Todos
    ↓
["Buy milk"]

User adds:
"Learn Next.js"

    ↓

Optimistic UI

[
  "Buy milk",
  "Learn Next.js"
]

    ↓

Server Action runs

    ↓

Database updated

    ↓

Fresh server data arrives
```

---

# Visual Diagram

Without optimistic update:

```text
Click Add
    ↓
Waiting...
    ↓
Waiting...
    ↓
Todo appears
```

With optimistic update:

```text
Click Add
    ↓
Todo appears instantly
    ↓
Server confirms
```

---

# Typical Pattern with Server Actions

Imagine a Todo page.

## Server Component

```tsx
export default async function Page() {
  const todos =
    await getTodos();

  return (
    <TodoList
      todos={todos}
    />
  );
}
```

---

## Client Component

```tsx
"use client";

import {
  useOptimistic,
} from "react";
```

```tsx
export function TodoList({
  todos,
}) {
  const [
    optimisticTodos,
    addOptimisticTodo,
  ] = useOptimistic(
    todos,
    (state, todo) => [
      ...state,
      todo,
    ]
  );

  return (
    <>
      {optimisticTodos.map(
        (todo) => (
          <p key={todo.id}>
            {todo.text}
          </p>
        )
      )}
    </>
  );
}
```

---

# Using with a Form

A very common pattern:

```tsx
async function formAction(
  formData: FormData
) {
  const text =
    formData.get("text");

  addOptimisticTodo({
    id: crypto.randomUUID(),
    text,
  });

  await createTodo(text);
}
```

Flow:

```text
Submit
 ↓
Optimistic update
 ↓
UI changes immediately
 ↓
Server Action
 ↓
Database update
 ↓
Revalidation
```

---

# What Happens if the Server Fails?

This is the important trade-off.

Suppose:

```text
Optimistic UI added todo
        ↓
Database fails
```

Now the UI and database disagree.

Example:

```text
UI:
✓ Todo exists

Database:
✗ Todo never saved
```

To handle this:

* show an error
* re-fetch data
* revert the optimistic state

The exact strategy depends on the app.

---

# Common Use Cases

Optimistic updates work best for:

### Likes

```text
❤️ Like post
```

---

### Todo Lists

```text
Add item
Remove item
```

---

### Comments

```text
Post comment
```

---

### Chat Messages

```text
Send message
```

---

### Shopping Cart

```text
Add product
```

---

# When Not to Use It

Avoid optimistic updates for critical operations where correctness is more important than speed.

Examples:

```text
Bank transfers
Payments
Account deletion
Security settings
```

For these, waiting for confirmation is usually better.

---

# `useOptimistic()` vs `useActionState()`

| Feature               | `useOptimistic()` | `useActionState()` |
| --------------------- | ----------------- | ------------------ |
| Instant UI update     | ✅                 | ❌                  |
| Server response state | ❌                 | ✅                  |
| Validation errors     | ❌                 | ✅                  |
| Success messages      | ❌                 | ✅                  |
| Temporary state       | ✅                 | ❌                  |

Think of them as solving different problems:

```text
useOptimistic()
    ↓
Make UI feel fast

useActionState()
    ↓
Show server results
```

---

# Real App Router Pattern

A modern form might use all three:

```text
useFormStatus()
      ↓
Loading state

useActionState()
      ↓
Validation/errors

useOptimistic()
      ↓
Instant UI updates
```

Flow:

```text
User submits
      ↓
useOptimistic()
shows change instantly
      ↓
useFormStatus()
shows pending state
      ↓
Server Action runs
      ↓
useActionState()
receives result
      ↓
UI synchronized
```

---

# Rule of Thumb

Use `useOptimistic()` when:

✅ The user expects immediate feedback

✅ The operation is likely to succeed

✅ You can safely recover if it fails

Typical examples:

```text
Likes
Comments
Chat messages
Todo items
Shopping cart updates
```

The mental model is:

```text
Actual Server State
        ↓
Predict Success
        ↓
Update UI Immediately
        ↓
Server Confirms Later
```

That's the essence of optimistic UI in the App Router.






---






# `Form Component in App Router` :

# Form Component in App Router

When building forms in Next.js App Router, you'll usually end up with a structure like:

```text
Page (Server Component)
          ↓
Form Component (Client Component)
          ↓
Server Action
```

Let's understand why.

---

# Why Create a Separate Form Component?

You could put everything directly in `page.tsx`:

```tsx
export default function Page() {
  return (
    <form action={createUser}>
      <input name="name" />
      <button>Create</button>
    </form>
  );
}
```

This is fine for small examples.

But real forms often need:

* `useActionState()`
* `useFormStatus()`
* `useOptimistic()`
* Input validation UI
* Error messages
* Local state
* Custom inputs

These require Client Components.

---

# Typical Architecture

```text
page.tsx (Server)
      ↓
<UserForm />
      ↓
Server Action
```

---

## Folder Structure

```text
app/
└── users/
    ├── page.tsx
    ├── actions.ts
    └── UserForm.tsx
```

---

# Step 1: Server Action

```tsx
// app/users/actions.ts

"use server";

export async function createUser(
  formData: FormData
) {
  const name =
    formData.get("name");

  console.log(name);
}
```

---

# Step 2: Form Component

```tsx
// app/users/UserForm.tsx

"use client";

import { createUser }
  from "./actions";

export default function UserForm() {
  return (
    <form action={createUser}>
      <input
        name="name"
        placeholder="Name"
      />

      <button>
        Create User
      </button>
    </form>
  );
}
```

---

# Step 3: Page

```tsx
// app/users/page.tsx

import UserForm
  from "./UserForm";

export default function Page() {
  return (
    <>
      <h1>Create User</h1>
      <UserForm />
    </>
  );
}
```

Flow:

```text
page.tsx
     ↓
UserForm
     ↓
createUser()
     ↓
Database
```

---

# Why Not Make the Entire Page a Client Component?

Many beginners do:

```tsx
"use client";

export default function Page() {
  ...
}
```

This works, but it's usually not ideal.

Remember:

```text
Server Components
     ↓
Default choice
```

You only need the form itself to be interactive.

Better:

```text
Page
 ├─ Server Component
 │
 └─ UserForm
      Client Component
```

This keeps the client bundle smaller.

---

# Form Component with `useActionState()`

A very common pattern.

## Action

```tsx
"use server";

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const name =
    formData.get("name");

  if (!name) {
    return {
      error:
        "Name required",
    };
  }

  return {
    success: true,
  };
}
```

---

## Form Component

```tsx
"use client";

import { useActionState }
  from "react";

import { createUser }
  from "./actions";

const initialState = {
  error: null,
};
```

```tsx
export default function UserForm() {
  const [state, formAction] =
    useActionState(
      createUser,
      initialState
    );

  return (
    <form action={formAction}>
      <input name="name" />

      <button>
        Create
      </button>

      {state.error && (
        <p>{state.error}</p>
      )}
    </form>
  );
}
```

Flow:

```text
Submit
   ↓
Server Action
   ↓
Returns error
   ↓
useActionState
   ↓
Show error
```

---

# Form Component with `useFormStatus()`

Usually we create a separate submit button.

## SubmitButton

```tsx
"use client";

import { useFormStatus }
  from "react-dom";

export function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button disabled={pending}>
      {pending
        ? "Saving..."
        : "Save"}
    </button>
  );
}
```

---

## Form

```tsx
<form action={formAction}>
  <input name="name" />

  <SubmitButton />
</form>
```

Flow:

```text
Submit
   ↓
pending=true
   ↓
Saving...
```

---

# Edit Form Component

A form component often receives existing data.

## Page

```tsx
const user =
  await prisma.user.findUnique(...);

return (
  <UserForm user={user} />
);
```

---

## Form

```tsx
"use client";

export default function UserForm({
  user,
}) {
  return (
    <form>
      <input
        name="name"
        defaultValue={user.name}
      />
    </form>
  );
}
```

Flow:

```text
Database
    ↓
Server Component
    ↓
Props
    ↓
Form Component
```

---

# Create vs Edit Forms

A common pattern:

```text
CreateUserForm
EditUserForm
```

or

```text
Single UserForm
```

that receives data.

Example:

```tsx
<UserForm user={user} />
```

If `user` exists:

```text
Edit Mode
```

If not:

```text
Create Mode
```

---

# Large Form Architecture

As forms grow:

```text
UserForm
│
├── NameField
├── EmailField
├── AddressField
├── SubmitButton
└── ErrorMessage
```

Example:

```tsx
<UserForm>
  <NameField />
  <EmailField />
  <SubmitButton />
</UserForm>
```

This keeps files manageable.

---

# Typical Real-World Structure

```text
users/
├── page.tsx
├── actions.ts
├── UserForm.tsx
├── SubmitButton.tsx
└── validation.ts
```

Responsibilities:

```text
page.tsx
  ↓
Fetch data

UserForm.tsx
  ↓
Render form

actions.ts
  ↓
Mutate data

validation.ts
  ↓
Validate data
```

---

# Mental Model

Think of the form component as the bridge between:

```text
Server UI
    ↓
Form Component
    ↓
Server Action
```

Or:

```text
Database
    ↓
Server Component
    ↓
Props
    ↓
Form Component
    ↓
User Input
    ↓
Server Action
    ↓
Database
```

---

# Rule of Thumb

For App Router applications:

✅ Keep pages as Server Components.

✅ Put interactive form logic in a dedicated Client Component.

✅ Keep mutations in `actions.ts`.

✅ Use `useActionState()` inside the form component.

✅ Use `useFormStatus()` inside a submit button component.

A very common production structure is:

```text
page.tsx (Server)
      ↓
UserForm.tsx (Client)
      ↓
actions.ts (Server)
      ↓
Database
```

This gives you the best separation of concerns and aligns with how App Router is designed to work.






---






# `Authentication in Next.js App Router` :

# Authentication in Next.js App Router

Authentication is one of the most important topics because it touches:

```text
Login
Signup
Sessions
Cookies
Protected Routes
Authorization
```

Before diving into libraries like NextAuth/Auth.js, it's important to understand the core flow.

---

# Mental Model

Authentication answers:

```text
Who is this user?
```

Authorization answers:

```text
What is this user allowed to do?
```

Example:

```text
User: Alice
```

Authentication:

```text
✓ Alice is logged in
```

Authorization:

```text
✓ Alice can edit her own profile
✗ Alice cannot delete other users
```

---

# High-Level Authentication Flow

```text
User
 ↓
Login Form
 ↓
Server Action
 ↓
Verify Credentials
 ↓
Create Session
 ↓
Store Session Cookie
 ↓
Browser
 ↓
Future Requests Include Cookie
 ↓
Server Identifies User
```

---

# How the Server Knows Who You Are

HTTP is stateless.

Without sessions:

```text
Request #1
Who are you?

Request #2
Who are you?

Request #3
Who are you?
```

The server forgets everything between requests.

So we need a session.

---

# Session Concept

After login:

```text
User
 ↓
Successfully Authenticated
 ↓
Session Created
 ↓
Session ID Generated
```

Example:

```text
session_id = abc123xyz
```

Stored in database:

| Session ID | User ID |
| ---------- | ------- |
| abc123xyz  | 42      |

---

# Cookie Concept

Server sends:

```http
Set-Cookie:
session_id=abc123xyz
```

Browser stores it.

Future requests:

```http
Cookie:
session_id=abc123xyz
```

Now the server can identify the user.

---

# App Router Authentication Architecture

Typical flow:

```text
Login Page
      ↓
Server Action
      ↓
Validate Password
      ↓
Create Session
      ↓
Set Cookie
      ↓
Redirect
```

Then:

```text
Request
   ↓
Cookie
   ↓
Read Session
   ↓
Get User
   ↓
Render Protected Page
```

---

# Login Form

Example:

```tsx
// app/login/page.tsx

import LoginForm from "./LoginForm";

export default function LoginPage() {
  return <LoginForm />;
}
```

---

# LoginForm Component

```tsx
"use client";

export default function LoginForm() {
  return (
    <form action={login}>
      <input
        name="email"
        type="email"
      />

      <input
        name="password"
        type="password"
      />

      <button>
        Login
      </button>
    </form>
  );
}
```

---

# Login Server Action

```tsx
"use server";

export async function login(
  formData: FormData
) {
  const email =
    formData.get("email");

  const password =
    formData.get("password");

  // Verify user

  // Create session

  // Set cookie
}
```

---

# Verifying Credentials

Typically:

```text
Email
 ↓
Find User
 ↓
Compare Password Hash
```

Example:

```tsx
const user =
  await prisma.user.findUnique({
    where: { email }
  });
```

Then compare:

```tsx
await bcrypt.compare(
  password,
  user.passwordHash
);
```

Never store plain-text passwords.

---

# Password Storage

Bad:

```text
password = "123456"
```

Database:

```text
123456
```

Very dangerous.

---

Good:

```text
password = "123456"
```

Stored:

```text
$2b$10$8kafj...
```

using hashing (e.g. bcrypt).

---

# Creating a Session

After verification:

```text
User Verified
      ↓
Create Session
```

Example DB table:

| id  | userId |
| --- | ------ |
| xyz | 42     |

---

# Setting Cookies in App Router

Server Components and Server Actions can use cookies.

Example:

```tsx
import { cookies }
  from "next/headers";

const cookieStore =
  await cookies();

cookieStore.set(
  "session",
  sessionId
);
```

Flow:

```text
Login Success
      ↓
Cookie Created
      ↓
Browser Stores Cookie
```

---

# Redirect After Login

```tsx
import { redirect }
  from "next/navigation";

redirect("/dashboard");
```

Flow:

```text
Login
  ↓
Session
  ↓
Cookie
  ↓
Redirect
```

---

# Reading Session on Protected Pages

Example:

```tsx
import { cookies }
  from "next/headers";

export default async function Dashboard() {
  const cookieStore =
    await cookies();

  const session =
    cookieStore.get("session");

  ...
}
```

---

# Session Lookup

```text
Cookie
   ↓
Session ID
   ↓
Database
   ↓
User
```

Example:

```tsx
const session =
  await prisma.session.findUnique({
    where: {
      id: sessionId
    }
  });
```

---

# Getting Current User

Common helper:

```text
lib/auth.ts
```

```tsx
export async function getCurrentUser() {
  const cookieStore =
    await cookies();

  const sessionId =
    cookieStore.get("session");

  ...
}
```

Now anywhere:

```tsx
const user =
  await getCurrentUser();
```

---

# Protecting Routes

Example:

```tsx
export default async function Dashboard() {
  const user =
    await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <DashboardUI />;
}
```

Flow:

```text
Request
   ↓
Get User
   ↓
Authenticated?
   ↓
Yes → Render
No  → Login
```

---

# Server Component Advantage

Because pages are Server Components:

```tsx
const user =
  await getCurrentUser();
```

works directly.

No API route needed.

---

# Authentication Flow Diagram

```text
User
 ↓
Login Form
 ↓
Server Action
 ↓
Verify Password
 ↓
Create Session
 ↓
Set Cookie
 ↓
Redirect

────────────────────

Future Request
 ↓
Cookie
 ↓
Session Lookup
 ↓
Current User
 ↓
Protected Page
```

---

# Logout

Logout is simply:

```text
Delete Session
Delete Cookie
```

Server Action:

```tsx
"use server";

export async function logout() {
  const cookieStore =
    await cookies();

  cookieStore.delete(
    "session"
  );
}
```

Then:

```tsx
redirect("/login");
```

---

# Common Files in Real Projects

```text
app/
├── login/
├── dashboard/
├── profile/

lib/
├── auth.ts
├── session.ts

actions/
├── login.ts
├── logout.ts
```

---

# Authentication vs Authorization

Authentication:

```text
Who are you?
```

Authorization:

```text
Can you do this?
```

Example:

```tsx
if (!user) {
  redirect("/login");
}
```

Authentication.

---

Example:

```tsx
if (user.role !== "admin") {
  redirect("/");
}
```

Authorization.

---

# Modern Production Approach

Most Next.js applications use:

* Auth.js (formerly NextAuth.js)
* Session cookies
* Database-backed sessions or JWTs
* Server Components for session checks
* Server Actions for login/logout

Architecture:

```text
Server Component
      ↓
getCurrentUser()
      ↓
Cookie
      ↓
Session
      ↓
Database
```

---

# Rule of Thumb

In App Router:

```text
Login Form
    ↓
Server Action
    ↓
Validate Credentials
    ↓
Create Session
    ↓
Set Cookie
    ↓
Redirect
```

And for protected pages:

```text
Server Component
      ↓
Read Cookie
      ↓
Find Session
      ↓
Get User
      ↓
Render or Redirect
```

This pattern is the foundation for understanding Auth.js, middleware protection, role-based access control, and enterprise authentication systems in Next.js.





---






# `Clerk Setup in Next.js App Router` :

# Clerk Setup in Next.js App Router

After learning authentication fundamentals, Clerk becomes much easier to understand.

Think of Clerk as:

```text
Authentication Infrastructure
            +
Ready-made UI
            +
Session Management
            +
User Management
```

Instead of building:

```text
Login Form
Password Hashing
Sessions
Cookies
Email Verification
Forgot Password
OAuth
```

yourself, Clerk handles it.

---

# Mental Model

Without Clerk:

```text
User
 ↓
Your Login Form
 ↓
Server Action
 ↓
Password Verification
 ↓
Session Creation
 ↓
Cookie Management
 ↓
Database
```

With Clerk:

```text
User
 ↓
Clerk Components
 ↓
Clerk Authentication
 ↓
Clerk Session
 ↓
Current User
```

You focus on your application logic.

---

# Step 1: Create a Clerk Account

Go to:

[Clerk Dashboard](https://clerk.com?utm_source=chatgpt.com)

Create an application.

You'll get keys like:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

---

# Step 2: Install Clerk

```bash
npm install @clerk/nextjs
```

---

# Step 3: Add Environment Variables

Create:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxx
CLERK_SECRET_KEY=sk_xxx
```

in:

```text
.env.local
```

---

# Step 4: Add Clerk Middleware

Create:

```text
middleware.ts
```

Example:

```tsx
import { clerkMiddleware }
  from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
```

---

# Why Middleware?

Middleware runs before pages.

Flow:

```text
Request
   ↓
Middleware
   ↓
Authentication Check
   ↓
Page
```

Later you'll use it to protect routes.

---

# Step 5: Wrap the App

In:

```text
app/layout.tsx
```

```tsx
import {
  ClerkProvider,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
```

---

# What Does ClerkProvider Do?

Think of it like:

```text
ThemeProvider
AuthProvider
CartProvider
```

that we discussed earlier.

```text
Root Layout
     ↓
ClerkProvider
     ↓
Entire Application
```

Now every page can access authentication information.

---

# Step 6: Add Sign-In and Sign-Up Pages

Create:

```text
app/
├── sign-in/
│   └── [[...sign-in]]/
│       └── page.tsx
│
└── sign-up/
    └── [[...sign-up]]/
        └── page.tsx
```

---

## Sign In

```tsx
import {
  SignIn,
} from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
```

---

## Sign Up

```tsx
import {
  SignUp,
} from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
```

---

# What Happens Now?

Clerk automatically provides:

```text
Email Login
Password Login
Google Login
GitHub Login
Email Verification
Password Reset
Session Management
```

depending on what you've enabled in the dashboard.

---

# Add Authentication Buttons

Example navbar:

```tsx
import {
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
```

```tsx
<SignInButton />

<SignUpButton />
```

---

# User Button

Most apps use:

```tsx
import {
  UserButton,
} from "@clerk/nextjs";
```

```tsx
<UserButton />
```

This gives:

```text
Profile Menu
Manage Account
Logout
```

automatically.

---

# Getting Current User (Server Component)

One of the nicest App Router features.

```tsx
import { auth }
  from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } =
    await auth();

  return <div>{userId}</div>;
}
```

Flow:

```text
Request
 ↓
Session Cookie
 ↓
Clerk
 ↓
userId
```

---

# Protecting a Page

Example:

```tsx
import { auth }
  from "@clerk/nextjs/server";

import {
  redirect,
} from "next/navigation";

export default async function Dashboard() {
  const { userId } =
    await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <div>Dashboard</div>;
}
```

---

# Better Protection with Middleware

Clerk can automatically protect routes.

Example:

```tsx
import {
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";

const isProtectedRoute =
  createRouteMatcher([
    "/dashboard(.*)",
  ]);

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  }
);
```

Flow:

```text
Request
 ↓
Middleware
 ↓
Logged In?
 ↓
Yes → Continue
No  → Sign In
```

---

# Client Component Access

Client Components use hooks.

```tsx
"use client";

import {
  useUser,
} from "@clerk/nextjs";
```

```tsx
const { user } =
  useUser();
```

Example:

```tsx
return (
  <p>
    {user?.firstName}
  </p>
);
```

---

# Server vs Client Access

| Location         | API          |
| ---------------- | ------------ |
| Server Component | `auth()`     |
| Client Component | `useUser()`  |
| UI Widget        | `UserButton` |

---

# Common Clerk Flow

```text
Visitor
   ↓
Sign Up
   ↓
Clerk Creates User
   ↓
Session Created
   ↓
Redirect Dashboard
   ↓
auth()
   ↓
userId
   ↓
Protected Content
```

---

# Real Project Structure

```text
app/
├── sign-in/
├── sign-up/
├── dashboard/
├── profile/

components/
├── Navbar.tsx
├── UserMenu.tsx

middleware.ts
```

---

# Where Does Your Database Fit?

Important:

Clerk manages authentication.

Your database manages application data.

```text
Clerk
  ↓
User Identity

Database
  ↓
Posts
Orders
Projects
Tasks
Comments
```

Example:

```text
Clerk User ID
        ↓
user_2abc123
        ↓
Store in DB
        ↓
Link Posts/Orders/etc.
```

Typical schema:

```tsx
model Post {
  id       String
  title    String

  clerkId  String
}
```

---

# Mental Model

Think of Clerk as:

```text
Authentication Platform
```

while your database is:

```text
Application Data Platform
```

Together:

```text
User
 ↓
Clerk Login
 ↓
Session
 ↓
auth()
 ↓
User ID
 ↓
Database Queries
 ↓
Application Data
```

---

# Rule of Thumb

For App Router projects using Clerk:

```text
ClerkProvider
      ↓
Middleware
      ↓
SignIn / SignUp Components
      ↓
auth() on Server
      ↓
useUser() on Client
      ↓
UserButton for Account UI
```

Once you're comfortable with Clerk setup, the next important App Router topic is **Route Handlers (`route.ts`)**, because Clerk, webhooks, file uploads, and many third-party integrations often rely on them.





---






# `Sign In and Sign Out with Clerk` :

# Sign In and Sign Out with Clerk

Once Clerk is set up, sign-in and sign-out become surprisingly simple because Clerk manages:

```text
Passwords
Sessions
Cookies
OAuth Providers
User Accounts
```

You mainly work with Clerk's components and hooks.

---

# Authentication Flow

```text
Visitor
   ↓
Sign In
   ↓
Clerk Creates Session
   ↓
Cookie Stored
   ↓
User Authenticated
   ↓
Protected Pages

──────────────

Sign Out
   ↓
Session Destroyed
   ↓
Cookie Removed
   ↓
Visitor
```

---

# Sign In

## Option 1: Full Sign-In Page (Most Common)

Create:

```text
app/sign-in/[[...sign-in]]/page.tsx
```

```tsx
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
```

Clerk automatically renders:

```text
Email Login
Password Login
Google Login
GitHub Login
Forgot Password
Verification
```

(depending on your Clerk dashboard settings)

---

# Navigation to Sign In

You can use Clerk's button:

```tsx
import { SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <SignInButton />
  );
}
```

Flow:

```text
Click Sign In
      ↓
Clerk Opens Sign In
      ↓
User Logs In
      ↓
Session Created
```

---

# Custom Sign-In Button

Sometimes you want your own styling.

```tsx
import { SignInButton } from "@clerk/nextjs";

<SignInButton>
  <button>Login</button>
</SignInButton>
```

---

# Check Authentication Status

## Server Component

```tsx
import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();

  return <div>{userId}</div>;
}
```

If logged in:

```text
user_abc123
```

If not:

```text
null
```

---

# Protect a Page

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <div>Dashboard</div>;
}
```

Flow:

```text
Request
   ↓
auth()
   ↓
Logged In?
   ↓
Yes → Dashboard
No  → Sign In
```

---

# Show Different UI Based on Login State

Clerk provides ready-made components.

```tsx
import {
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
```

Example:

```tsx
<SignedOut>
  <p>Please sign in</p>
</SignedOut>

<SignedIn>
  <p>Welcome back</p>
</SignedIn>
```

Flow:

```text
Signed In?
      ↓
Yes → Show Authenticated UI
No  → Show Guest UI
```

---

# Sign Out

There are two common approaches.

---

## Option 1: UserButton (Recommended)

```tsx
import { UserButton } from "@clerk/nextjs";

<UserButton />
```

This gives:

```text
Profile
Manage Account
Sign Out
```

automatically.

---

# What Happens Internally?

```text
Click Sign Out
      ↓
Clerk Deletes Session
      ↓
Cookie Removed
      ↓
User Logged Out
```

---

## Option 2: Custom Sign Out Button

Use Clerk's hook.

```tsx
"use client";

import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
```

---

# Redirect After Sign Out

Common pattern:

```tsx
"use client";

import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() =>
        signOut({
          redirectUrl: "/",
        })
      }
    >
      Logout
    </button>
  );
}
```

Flow:

```text
Logout
   ↓
Session Deleted
   ↓
Redirect Home
```

---

# Conditional Navbar Example

```tsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
```

```tsx
export default function Navbar() {
  return (
    <nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
```

Behavior:

```text
Guest
 ↓
[ Sign In ]

Logged In
 ↓
[ User Menu ]
```

---

# Getting Full User Information

## Client Component

```tsx
"use client";

import { useUser } from "@clerk/nextjs";

export default function Profile() {
  const { user } = useUser();

  return (
    <div>
      {user?.firstName}
    </div>
  );
}
```

---

## Server Component

```tsx
import {
  currentUser,
} from "@clerk/nextjs/server";

export default async function Page() {
  const user =
    await currentUser();

  return (
    <p>{user?.firstName}</p>
  );
}
```

---

# Mental Model

Think of Clerk Sign In as:

```text
User
 ↓
<SignIn />
 ↓
Clerk Authentication
 ↓
Session Created
 ↓
Cookie Stored
 ↓
auth()
```

And Sign Out as:

```text
User
 ↓
signOut()
 ↓
Session Deleted
 ↓
Cookie Removed
 ↓
auth() returns null
```

---

# Most Common Production Setup

```text
app/
├── sign-in/
├── sign-up/
├── dashboard/

components/
├── Navbar.tsx
├── UserMenu.tsx
```

Navbar:

```tsx
<SignedOut>
  <SignInButton />
</SignedOut>

<SignedIn>
  <UserButton />
</SignedIn>
```

Protected pages:

```tsx
const { userId } = await auth();

if (!userId) {
  redirect("/sign-in");
}
```

This combination—`<SignIn />`, `auth()`, `SignedIn`, `SignedOut`, and `UserButton`—covers most authentication UI you'll build with Clerk.






---






# `Profile Settings with Clerk` :

# Profile Settings with Clerk

After authentication, the next common requirement is:

```text
User
 ↓
View Profile
 ↓
Update Profile
 ↓
Manage Account
```

With Clerk, you have two approaches:

```text
1. Clerk Hosted Profile UI
2. Custom Profile Page
```

Most applications start with Clerk's built-in profile UI and only build custom profile pages when they need application-specific fields.

---

# Mental Model

Think of user data in two categories:

```text
Clerk User
    ↓
Authentication Data

Your Database
    ↓
Application Data
```

Examples:

### Clerk Data

```text
First Name
Last Name
Email
Password
Profile Image
2FA
Sessions
```

### Your Database Data

```text
Bio
Job Title
Theme Preference
Projects
Posts
Orders
Settings
```

---

# Built-In Profile Page

Clerk provides a complete account management UI.

Create:

```text
app/user-profile/[[...user-profile]]/page.tsx
```

```tsx
import {
  UserProfile,
} from "@clerk/nextjs";

export default function Page() {
  return <UserProfile />;
}
```

---

# What Does UserProfile Include?

Automatically:

```text
Profile Information
Email Addresses
Password Changes
Connected Accounts
Security Settings
Sessions
Account Management
```

No extra code required.

---

# Flow

```text
User
 ↓
UserProfile
 ↓
Clerk
 ↓
Updates Account
 ↓
Session Updated
```

---

# Linking to Profile Settings

Example Navbar:

```tsx
import Link from "next/link";

<Link href="/user-profile">
  Profile Settings
</Link>
```

---

# Using UserButton

The easiest solution:

```tsx
import {
  UserButton,
} from "@clerk/nextjs";

<UserButton />
```

The dropdown automatically contains:

```text
Manage Account
Sign Out
```

Clicking "Manage Account" opens Clerk's account management UI.

---

# Getting Current User Data

## Server Component

```tsx
import {
  currentUser,
} from "@clerk/nextjs/server";

export default async function Page() {
  const user =
    await currentUser();

  return (
    <div>
      {user?.firstName}
    </div>
  );
}
```

Flow:

```text
Request
 ↓
currentUser()
 ↓
Clerk
 ↓
User Data
```

---

# Client Component Access

```tsx
"use client";

import {
  useUser,
} from "@clerk/nextjs";
```

```tsx
const { user } = useUser();
```

Example:

```tsx
return (
  <>
    <h1>{user?.fullName}</h1>
    <p>
      {user?.primaryEmailAddress
        ?.emailAddress}
    </p>
  </>
);
```

---

# Useful User Properties

```tsx
user?.id
```

```tsx
user?.firstName
```

```tsx
user?.lastName
```

```tsx
user?.fullName
```

```tsx
user?.imageUrl
```

```tsx
user?.username
```

```tsx
user?.primaryEmailAddress
```

---

# Profile Picture

Example:

```tsx
<img
  src={user?.imageUrl}
  alt="Profile"
/>
```

Flow:

```text
Clerk
 ↓
Image URL
 ↓
Render Avatar
```

---

# Custom Profile Page

Many applications build a page like:

```text
/settings/profile
```

Example:

```tsx
import {
  currentUser,
} from "@clerk/nextjs/server";

export default async function SettingsPage() {
  const user =
    await currentUser();

  return (
    <>
      <h1>
        {user?.fullName}
      </h1>

      <p>
        {
          user?.primaryEmailAddress
            ?.emailAddress
        }
      </p>
    </>
  );
}
```

---

# Application-Specific Settings

This is where your database comes in.

Example:

```text
Clerk User
      ↓
user_abc123
      ↓
Database Record
```

Prisma example:

```tsx
const profile =
  await prisma.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
```

Now you can store:

```text
Bio
Location
Theme
Notifications
Preferences
```

that Clerk doesn't manage.

---

# Typical Architecture

```text
Clerk
 ↓
Authentication

Your DB
 ↓
Application Settings
```

Example:

```text
User
 ↓
currentUser()
 ↓
Clerk ID
 ↓
Prisma Query
 ↓
Profile Settings
```

---

# Protected Settings Page

Always protect settings pages.

```tsx
import {
  auth,
} from "@clerk/nextjs/server";

import {
  redirect,
} from "next/navigation";

export default async function Settings() {
  const { userId } =
    await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <div>Settings</div>;
}
```

---

# Common Settings Structure

```text
settings/
├── profile
├── account
├── notifications
├── security
└── appearance
```

Responsibility:

```text
Profile
    ↓
Name, Avatar, Bio

Account
    ↓
Email, Username

Security
    ↓
Password, 2FA

Notifications
    ↓
Preferences

Appearance
    ↓
Theme
```

---

# Recommended Beginner Setup

For most new Next.js + Clerk projects:

```text
UserButton
      ↓
Manage Account
      ↓
UserProfile Component
```

Use Clerk's built-in profile management first.

Only create custom profile settings pages when you need to store application-specific data in your own database.

---

# Rule of Thumb

```text
Authentication Data
      ↓
Clerk

Application Data
      ↓
Your Database
```

And for profile management:

```text
Simple Project
      ↓
<UserProfile />

Advanced Project
      ↓
Custom Settings Page
      ↓
currentUser()
      ↓
Database Preferences
```

This separation is important because it keeps Clerk responsible for identity and security, while your application remains responsible for business-specific user data.






---







# `Conditional UI Rendering in Next.js App Router` :

# Conditional UI Rendering in Next.js App Router

Conditional rendering means:

```text
Render different UI
based on a condition
```

Examples:

```text
Logged In?
Show Dashboard

Logged Out?
Show Login Button
```

```text
Loading?
Show Spinner

Loaded?
Show Data
```

```text
Admin?
Show Admin Panel

Regular User?
Hide Admin Panel
```

---

# Mental Model

Think of conditional rendering as:

```text
Condition
    ↓
Decision
    ↓
UI
```

Like an `if` statement for your interface.

```text
User Logged In?
       ↓
   Yes / No
       ↓
Different UI
```

---

# 1. Basic JavaScript if Statement

Before React:

```tsx
if (isLoggedIn) {
  return <Dashboard />;
}

return <Login />;
```

Flow:

```text
isLoggedIn?
    ↓
Yes → Dashboard
No  → Login
```

---

# 2. Ternary Operator

Most common pattern.

```tsx
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

Example:

```tsx
export default function Page() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn
        ? <h1>Dashboard</h1>
        : <h1>Please Login</h1>}
    </div>
  );
}
```

---

# Visual Flow

```text
Condition
    ↓
True ? A : B
```

```text
isLoggedIn
      ↓
 true ? Dashboard : Login
```

---

# 3. && Rendering

When you only need to show something if true.

```tsx
{
  isAdmin && (
    <AdminPanel />
  )
}
```

Meaning:

```text
If true
  ↓
Render Component

If false
  ↓
Render Nothing
```

Example:

```tsx
{user.isAdmin && (
  <button>
    Delete User
  </button>
)}
```

---

# Flow

```text
Admin?
   ↓
Yes → Show Button
No  → Nothing
```

---

# 4. Early Return Pattern

Very common in App Router.

```tsx
if (!user) {
  return <Login />;
}

return <Dashboard />;
```

Flow:

```text
User Exists?
     ↓
No → Login
Yes → Dashboard
```

---

# Authentication Example (Server Component)

```tsx
import { auth }
  from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } =
    await auth();

  if (!userId) {
    return <p>Please Login</p>;
  }

  return <p>Dashboard</p>;
}
```

---

# Protected Route vs Conditional UI

These are different.

---

## Conditional UI

```tsx
if (!userId) {
  return <Login />;
}
```

User stays on same page.

---

## Redirect

```tsx
if (!userId) {
  redirect("/sign-in");
}
```

User navigates away.

---

# Mental Model

```text
Conditional Rendering
        ↓
Same Page
Different UI

Redirect
        ↓
Different Page
```

---

# Clerk Components for Conditional Rendering

Clerk provides built-in helpers.

---

## SignedIn

```tsx
import {
  SignedIn,
} from "@clerk/nextjs";
```

```tsx
<SignedIn>
  <Dashboard />
</SignedIn>
```

Only renders when authenticated.

---

## SignedOut

```tsx
import {
  SignedOut,
} from "@clerk/nextjs";
```

```tsx
<SignedOut>
  <SignInButton />
</SignedOut>
```

Only renders when logged out.

---

# Example Navbar

```tsx
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
```

```tsx
<nav>
  <SignedOut>
    <SignInButton />
  </SignedOut>

  <SignedIn>
    <UserButton />
  </SignedIn>
</nav>
```

Flow:

```text
Authenticated?
      ↓
Yes → UserButton
No  → SignInButton
```

---

# Loading State Rendering

Very common.

Without loading state:

```text
Click
 ↓
Wait
 ↓
UI Updates
```

With loading state:

```text
Click
 ↓
Loading...
 ↓
Result
```

Example:

```tsx
{
  isLoading
    ? <Spinner />
    : <Products />
}
```

---

# Empty State Rendering

Suppose:

```tsx
const products = [];
```

Render:

```tsx
{
  products.length === 0
    ? <EmptyState />
    : <ProductList />
}
```

Flow:

```text
Products Found?
      ↓
No → Empty State
Yes → Product List
```

---

# Error State Rendering

Example:

```tsx
if (error) {
  return <ErrorMessage />;
}
```

Common flow:

```text
Loading
   ↓
Success?
   ↓
Yes → Data
No  → Error
```

---

# Real Dashboard Example

```tsx
if (isLoading) {
  return <Spinner />;
}

if (error) {
  return <ErrorMessage />;
}

if (!user) {
  return <Login />;
}

return <Dashboard />;
```

Flow:

```text
Loading?
    ↓
Yes → Spinner

No
 ↓

Error?
 ↓
Yes → Error

No
 ↓

User?
 ↓
No → Login

Yes → Dashboard
```

This pattern appears everywhere.

---

# Conditional Rendering with Server Data

Server Component:

```tsx
export default async function Page() {
  const posts =
    await getPosts();

  if (posts.length === 0) {
    return (
      <p>No posts found</p>
    );
  }

  return <PostList posts={posts} />;
}
```

Flow:

```text
Fetch Data
     ↓
Data Exists?
     ↓
No → Empty State
Yes → List
```

---

# Role-Based UI

Example:

```tsx
{user.role === "admin" && (
  <AdminPanel />
)}
```

Flow:

```text
Admin?
 ↓
Yes → Panel
No  → Hidden
```

Important:

```text
Hide UI
≠
Secure Route
```

Never rely only on conditional rendering for security.

Always verify permissions on the server too.

---

# Comparison

| Pattern             | Use Case            |
| ------------------- | ------------------- |
| `if (...) return`   | Entire page changes |
| `condition ? A : B` | One of two UIs      |
| `condition && A`    | Show/hide UI        |
| `SignedIn`          | Authenticated users |
| `SignedOut`         | Guest users         |

---

# App Router Mental Model

Conditional rendering happens at two levels:

## Server

```tsx
const user =
  await currentUser();

if (!user) {
  redirect("/sign-in");
}
```

Decides what HTML gets generated.

---

## Client

```tsx
{
  isOpen && <Modal />
}
```

Decides what the user sees after hydration.

---

# Rule of Thumb

Use:

```tsx
if (...) return ...
```

when the **whole page** changes.

Use:

```tsx
condition && Component
```

when you want to **show or hide** something.

Use:

```tsx
condition ? A : B
```

when there are **two possible UIs**.

For Clerk authentication UI:

```tsx
<SignedIn>
  <UserButton />
</SignedIn>

<SignedOut>
  <SignInButton />
</SignedOut>
```

This is the most common conditional rendering pattern you'll see in modern Next.js applications.






---






# `Protecting Routes in Next.js App Router` :

# Protecting Routes in Next.js App Router

Protecting a route means:

```text
Only authenticated users
can access this page
```

Examples:

```text
/dashboard
/settings
/profile
/admin
```

should not be accessible to guests.

---

# Mental Model

Think of route protection as a security checkpoint.

```text
User
 ↓
Request Page
 ↓
Authentication Check
 ↓
Allowed?
 ↓
Yes → Page
No  → Sign In
```

---

# Where Should Route Protection Happen?

In App Router, protection should happen on the **server**.

Why?

Because:

```text
Server Check
     ↓
Secure

Client Check
     ↓
Can be bypassed
```

Never rely solely on:

```tsx
if (user) {
  return <Dashboard />;
}
```

inside a client component for security.

---

# Option 1: Protect a Single Page

Using Clerk's `auth()`.

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <h1>Dashboard</h1>;
}
```

Flow:

```text
Request
   ↓
auth()
   ↓
Logged In?
   ↓
Yes → Render Page
No  → Redirect
```

---

# Why This Works Well

Because `page.tsx` is a Server Component.

```text
Request
 ↓
Server Component
 ↓
Check Session
 ↓
Generate HTML
```

The protected HTML is never generated for guests.

---

# Repeating This Everywhere?

Imagine:

```text
/dashboard
/profile
/settings
/orders
/billing
```

You don't want:

```tsx
if (!userId) {
  redirect("/sign-in");
}
```

copied into every page.

---

# Option 2: Protect a Layout

A very common App Router pattern.

Folder structure:

```text
app/
├── (protected)/
│   ├── layout.tsx
│   ├── dashboard/page.tsx
│   ├── settings/page.tsx
│   └── profile/page.tsx
```

---

## Protected Layout

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
```

---

# Flow

```text
Any Protected Route
         ↓
Protected Layout
         ↓
auth()
         ↓
Authenticated?
         ↓
Yes → Children
No  → Sign In
```

Now:

```text
/ dashboard
/ settings
/ profile
```

all inherit the protection automatically.

---

# This Is Usually Better

Instead of:

```text
Page
 ↓
Check Auth

Page
 ↓
Check Auth

Page
 ↓
Check Auth
```

you get:

```text
Layout
 ↓
Check Auth Once
 ↓
All Child Routes Protected
```

---

# Option 3: Middleware Protection (Most Scalable)

This is how many production Clerk apps work.

Create:

```text
middleware.ts
```

---

## Example

```tsx
import {
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";

const isProtectedRoute =
  createRouteMatcher([
    "/dashboard(.*)",
    "/settings(.*)",
  ]);

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  }
);
```

---

# Flow

```text
Request
 ↓
Middleware
 ↓
Protected Route?
 ↓
Yes
 ↓
Authenticated?
 ↓
Yes → Continue
No  → Sign In
```

Notice:

```text
Middleware
     ↓
Runs Before Page
```

This is very efficient.

---

# Why Middleware Is Powerful

Without middleware:

```text
Request
 ↓
Page
 ↓
Check Auth
```

With middleware:

```text
Request
 ↓
Middleware
 ↓
Check Auth
 ↓
Page
```

The request is blocked before the page executes.

---

# Public vs Protected Routes

Example:

```text
Public

/
/about
/contact
/sign-in
/sign-up

Protected

/dashboard
/settings
/profile
```

Flow:

```text
Visitor
 ↓
/about
 ↓
Allowed

Visitor
 ↓
/dashboard
 ↓
Authentication Required
```

---

# Role-Based Protection

Authentication answers:

```text
Who are you?
```

Authorization answers:

```text
What can you do?
```

---

Example:

```tsx
const user = await currentUser();

if (user?.publicMetadata.role !== "admin") {
  redirect("/");
}
```

Flow:

```text
Logged In?
    ↓
Yes
    ↓
Admin?
    ↓
Yes → Admin Panel
No  → Home
```

---

# Important Security Rule

This:

```tsx
{isAdmin && <DeleteButton />}
```

only hides UI.

It does **not** secure anything.

Bad mental model:

```text
Hidden Button
      ≠
Secure Action
```

Always verify permissions on the server too.

Example:

```tsx
"use server";

export async function deleteUser() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  ...
}
```

---

# Protecting Server Actions

Pages are not the only thing that need protection.

Server Actions should also verify identity.

```tsx
"use server";

import { auth } from "@clerk/nextjs/server";

export async function createPost(
  formData: FormData
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // create post
}
```

Flow:

```text
Form Submit
      ↓
Server Action
      ↓
auth()
      ↓
Authorized?
      ↓
Continue
```

---

# Typical Production Structure

```text
app/
├── sign-in/
├── sign-up/

├── (protected)/
│   ├── layout.tsx
│   ├── dashboard/
│   ├── settings/
│   └── profile/

middleware.ts
```

Responsibilities:

```text
Middleware
      ↓
Route Protection

Layout
      ↓
Shared Authenticated UI

Page
      ↓
Business Logic
```

---

# Comparison

| Method           | Best For           |
| ---------------- | ------------------ |
| `auth()` in page | One page           |
| Protected layout | Route groups       |
| Middleware       | Entire application |
| Role check       | Authorization      |

---

# Real-World Flow

```text
Visitor
   ↓
/dashboard
   ↓
Middleware
   ↓
Authenticated?
   ↓
No
   ↓
/sign-in

─────────────────

User
   ↓
/dashboard
   ↓
Middleware
   ↓
Authenticated?
   ↓
Yes
   ↓
Protected Layout
   ↓
Dashboard Page
```

---

# Rule of Thumb

For Clerk + App Router:

```text
Middleware
      ↓
Protect Routes

Layout
      ↓
Shared Authenticated Area

Server Actions
      ↓
Verify auth() again

Role Checks
      ↓
Authorization
```

A good production setup is:

```text
middleware.ts
        ↓
(protected)/layout.tsx
        ↓
dashboard/page.tsx
        ↓
Server Actions with auth()
```

This gives you route protection, authenticated layouts, and secure server-side operations.






---






# `Reading Session and User Data in Clerk` :

# Reading Session and User Data in Clerk

Once a user signs in, the next question is:

```text id="wy9h5u"
How do I know
who is logged in?
```

Clerk provides two levels of information:

```text id="74ab4o"
Session Data
     ↓
Who is authenticated?

User Data
     ↓
Details about the user
```

---

# Mental Model

Think of it like:

```text id="3ng6w0"
Session
   ↓
Identity Check

User
   ↓
Profile Information
```

Example:

```text id="r5rwt5"
Session
 ↓
user_abc123

User
 ↓
John Doe
john@example.com
Avatar
```

---

# Authentication Flow

```text id="mfrlb7"
User Login
      ↓
Clerk Creates Session
      ↓
Session Cookie
      ↓
Future Requests
      ↓
Read Session
      ↓
Get User
```

---

# Reading Session Data (Server Component)

The most common method:

```tsx id="znxjqv"
import { auth }
  from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } =
    await auth();

  return <p>{userId}</p>;
}
```

---

# What Does auth() Return?

Example:

```tsx id="fr96c8"
const session =
  await auth();
```

Possible result:

```js id="i7gvg8"
{
  userId: "user_abc123",
  sessionId: "sess_xyz456",
  orgId: null
}
```

Important values:

```text id="74cgz5"
userId
sessionId
orgId
```

---

# Most Common Check

```tsx id="84fo7r"
const { userId } =
  await auth();

if (!userId) {
  redirect("/sign-in");
}
```

Flow:

```text id="sv3jfd"
auth()
   ↓
userId?
   ↓
Yes → Logged In
No  → Guest
```

---

# Session vs User

Many beginners confuse these.

---

## Session

```text id="v7v8sv"
Current Login
```

Example:

```text id="6bivxf"
user_abc123
```

---

## User

```text id="rql6qq"
Profile Information
```

Example:

```text id="4ozs42"
Name
Email
Image
Username
```

---

# Getting User Data (Server Component)

Use:

```tsx id="orow03"
import {
  currentUser,
} from "@clerk/nextjs/server";
```

Example:

```tsx id="r5s5iv"
export default async function Page() {
  const user =
    await currentUser();

  return (
    <h1>
      {user?.firstName}
    </h1>
  );
}
```

Flow:

```text id="l4fvt6"
Session
 ↓
currentUser()
 ↓
Full User Object
```

---

# Common User Properties

```tsx id="8wnn55"
user?.id
```

```tsx id="r50n95"
user?.firstName
```

```tsx id="f2xxzn"
user?.lastName
```

```tsx id="umz8oi"
user?.fullName
```

```tsx id="39v3fg"
user?.imageUrl
```

```tsx id="y6yl8t"
user?.username
```

```tsx id="t32pzf"
user?.primaryEmailAddress
  ?.emailAddress
```

---

# Example Profile Page

```tsx id="lfj86w"
import {
  currentUser,
} from "@clerk/nextjs/server";

export default async function Profile() {
  const user =
    await currentUser();

  return (
    <div>
      <h1>
        {user?.fullName}
      </h1>

      <p>
        {
          user?.primaryEmailAddress
            ?.emailAddress
        }
      </p>
    </div>
  );
}
```

---

# Reading User Data in Client Components

Server Components use:

```tsx id="77a7g7"
currentUser()
```

Client Components use:

```tsx id="u9w7tb"
useUser()
```

---

Example:

```tsx id="edpn9q"
"use client";

import {
  useUser,
} from "@clerk/nextjs";
```

```tsx id="v63mce"
const { user } =
  useUser();
```

```tsx id="zv8atf"
return (
  <h1>
    {user?.firstName}
  </h1>
);
```

---

# Flow Comparison

## Server

```text id="84n32f"
Request
 ↓
currentUser()
 ↓
User Data
 ↓
HTML Generated
```

---

## Client

```text id="90w22n"
Browser
 ↓
useUser()
 ↓
User Data
 ↓
UI Updates
```

---

# Which Should You Use?

For App Router:

```text id="wln3ci"
Server Component
      ↓
Preferred
```

because:

```text id="xqk0an"
SEO
Faster Initial Render
Less Client JS
```

---

# auth() vs currentUser()

This is extremely important.

---

## auth()

Returns:

```text id="4l0hxk"
Session Information
```

Example:

```tsx id="0fhc2u"
const { userId } =
  await auth();
```

Fast and lightweight.

---

## currentUser()

Returns:

```text id="6yng1h"
Full User Object
```

Example:

```tsx id="ngnn55"
const user =
  await currentUser();
```

Includes:

```text id="okn4zh"
Name
Email
Image
Metadata
```

---

# Mental Model

```text id="ifzvgw"
auth()
   ↓
Who?

currentUser()
   ↓
Who + Details
```

---

# Common Pattern

Protect route:

```tsx id="2gm4hc"
const { userId } =
  await auth();

if (!userId) {
  redirect("/sign-in");
}
```

Then load user:

```tsx id="ysw2o0"
const user =
  await currentUser();
```

Flow:

```text id="zzab9n"
Check Session
      ↓
Authenticated?
      ↓
Load User Data
```

---

# Using User ID with Database

Very common pattern.

```tsx id="x7bg9k"
const user =
  await currentUser();
```

```tsx id="7nghq4"
const posts =
  await prisma.post.findMany({
    where: {
      clerkId: user.id
    }
  });
```

Flow:

```text id="imwmh3"
Clerk User
      ↓
user.id
      ↓
Database Query
      ↓
Application Data
```

---

# Typical Dashboard Flow

```text id="hjn4ul"
Request
 ↓
auth()
 ↓
userId?
 ↓
No → Sign In

Yes
 ↓
currentUser()
 ↓
Load Posts
 ↓
Render Dashboard
```

---

# Quick Reference

## Server Component

```tsx id="6hzoxh"
const { userId } =
  await auth();
```

Check authentication.

---

```tsx id="a4l5xx"
const user =
  await currentUser();
```

Get full user data.

---

## Client Component

```tsx id="vrigyh"
const { user } =
  useUser();
```

Get user data in browser.

---

# Rule of Thumb

Use:

```tsx id="tdr6h8"
auth()
```

when you only need:

```text id="6yljpk"
Authentication Check
User ID
Session Info
```

Use:

```tsx id="wgjxk2"
currentUser()
```

when you need:

```text id="3j5l2x"
Name
Email
Avatar
Profile Details
```

And use:

```tsx id="87b6so"
useUser()
```

inside Client Components.

The most common production pattern is:

```text id="bfr3k7"
auth()
   ↓
Protect Route

currentUser()
   ↓
Load Profile Data

Database Query
   ↓
Load App Data
```

This keeps authentication checks lightweight while still giving access to full user information when needed.






---






# `Role-Based Access Control (RBAC)` :

# Role-Based Access Control (RBAC)

After authentication, the next question is usually:

```text
The user is logged in.
But what are they allowed to do?
```

That's where **Authorization** comes in.

---

# Authentication vs Authorization

| Concept        | Question         |
| -------------- | ---------------- |
| Authentication | Who are you?     |
| Authorization  | What can you do? |

Example:

```text
John logs in
     ↓
Authentication succeeds
     ↓
John is authenticated
```

Now:

```text
Can John delete users?
Can John access admin pages?
Can John manage products?
```

Those are authorization questions.

---

# Mental Model

Think of it like a building.

```text
Security Guard
      ↓
Checks Identity
      ↓
Authentication

Access Card
      ↓
Determines Allowed Floors
      ↓
Authorization
```

Example:

```text
User
 ↓
Role = Admin
 ↓
Can access:
- Dashboard
- Users
- Settings
```

```text
User
 ↓
Role = Customer
 ↓
Can access:
- Profile
- Orders
```

---

# RBAC Flow

```text
Login
 ↓
Session
 ↓
User
 ↓
Role
 ↓
Permission Check
 ↓
Allow / Deny
```

---

# Common Roles

Example:

```text
Admin
Manager
Editor
Customer
Guest
```

---

# Example Permissions

| Action       | Admin | Editor | Customer |
| ------------ | ----- | ------ | -------- |
| View Posts   | ✅     | ✅      | ✅        |
| Create Posts | ✅     | ✅      | ❌        |
| Edit Posts   | ✅     | ✅      | ❌        |
| Delete Posts | ✅     | ❌      | ❌        |
| Manage Users | ✅     | ❌      | ❌        |

---

# Where Should Roles Be Stored?

Two common options:

---

## Option 1: Clerk Metadata

Store role inside Clerk.

Example:

```json
{
  "role": "admin"
}
```

Location:

```text
Clerk
 ↓
publicMetadata
 ↓
role
```

---

# Reading Role

Server Component:

```tsx
const user =
  await currentUser();

const role =
  user?.publicMetadata.role;
```

Example:

```tsx
if (role === "admin") {
  // show admin features
}
```

---

# Flow

```text
Clerk User
      ↓
publicMetadata
      ↓
role
      ↓
Authorization
```

---

# Option 2: Database Roles

Many production apps store roles in the database.

Example Prisma schema:

```prisma
model User {
  id      String @id
  clerkId String @unique
  role    String
}
```

Example:

| clerkId | role     |
| ------- | -------- |
| user_1  | admin    |
| user_2  | editor   |
| user_3  | customer |

---

# Why Database Roles?

Because roles can change frequently.

Example:

```text
Promote User
Demote User
Suspend User
```

without updating Clerk metadata.

---

# Typical Production Architecture

```text
Clerk
 ↓
Authentication

Database
 ↓
Authorization
```

---

# Protecting a Page

Imagine:

```text
/admin
```

Only admins should enter.

---

Example:

```tsx
import { redirect } from "next/navigation";
import { currentUser }
  from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user =
    await currentUser();

  if (
    user?.publicMetadata.role
    !== "admin"
  ) {
    redirect("/");
  }

  return <h1>Admin Panel</h1>;
}
```

---

# Flow Diagram

```text
Request
 ↓
Get User
 ↓
Role?
 ↓
Admin?
 ↓
Yes → Render Page
No  → Redirect
```

---

# Protecting a Layout

Instead of protecting every page:

```text
/admin/users
/admin/settings
/admin/products
```

Protect the layout.

Structure:

```text
app/
└── admin/
    ├── layout.tsx
    ├── users/
    ├── settings/
    └── products/
```

---

```tsx
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user =
    await currentUser();

  if (
    user?.publicMetadata.role
    !== "admin"
  ) {
    redirect("/");
  }

  return children;
}
```

---

# Flow

```text
Request
 ↓
Admin Layout
 ↓
Role Check
 ↓
Allowed?
 ↓
Children Pages
```

One check protects everything underneath.

---

# Conditional UI

You can hide admin controls.

Example:

```tsx
{
  role === "admin" && (
    <DeleteButton />
  );
}
```

Flow:

```text
Role?
 ↓
Admin?
 ↓
Show Delete Button
```

---

# Important Security Rule

This is NOT enough:

```tsx
role === "admin" &&
<DeleteButton />
```

Because:

```text
Hidden UI
≠
Security
```

A malicious user can still call your APIs or Server Actions directly.

---

# Protect Server Actions Too

Suppose:

```tsx
deleteUser()
```

Only admins should run it.

---

```tsx
"use server";

import { currentUser }
  from "@clerk/nextjs/server";

export async function deleteUser(
  userId: string
) {
  const user =
    await currentUser();

  if (
    user?.publicMetadata.role
    !== "admin"
  ) {
    throw new Error(
      "Unauthorized"
    );
  }

  // delete logic
}
```

---

# Why?

Because users can bypass UI.

```text
Browser
 ↓
Server Action
 ↓
Database
```

Always verify permissions on the server.

---

# Centralizing Authorization

Instead of repeating:

```tsx
if (role !== "admin")
```

everywhere, create helpers.

---

```tsx
// lib/auth.ts

import { currentUser }
  from "@clerk/nextjs/server";

export async function requireAdmin() {
  const user =
    await currentUser();

  if (
    user?.publicMetadata.role
    !== "admin"
  ) {
    throw new Error(
      "Unauthorized"
    );
  }

  return user;
}
```

---

Usage:

```tsx
await requireAdmin();
```

---

# Multiple Roles

Example:

```text
Admin
Manager
Editor
Customer
```

Helper:

```tsx
export async function requireRole(
  allowedRoles: string[]
) {
  const user =
    await currentUser();

  const role =
    user?.publicMetadata.role;

  if (
    !allowedRoles.includes(
      String(role)
    )
  ) {
    throw new Error(
      "Unauthorized"
    );
  }

  return user;
}
```

---

Usage:

```tsx
await requireRole([
  "admin",
  "manager",
]);
```

---

# Role Hierarchy

Many apps define levels.

```text
Admin
 ↓
Manager
 ↓
Editor
 ↓
Customer
```

Permissions:

```text
Admin
 ↓
Everything

Manager
 ↓
Team Management

Editor
 ↓
Content Management

Customer
 ↓
Own Data Only
```

---

# RBAC Architecture

```text
User Login
      ↓
Clerk Session
      ↓
currentUser()
      ↓
Role
      ↓
Authorization Helper
      ↓
Page / Action / API
      ↓
Database
```

---

# Real Production Pattern

A common setup is:

```text
Clerk
 ↓
Authentication

Prisma User Table
 ↓
Role

Authorization Helpers
 ↓
Pages
Layouts
Server Actions
Route Handlers
```

---

# Rule of Thumb

### Authentication

```tsx
await auth()
```

Checks:

```text
Who is logged in?
```

---

### Authorization

```tsx
role === "admin"
```

Checks:

```text
What can they do?
```

---

### Always Protect

✅ Pages

✅ Layouts

✅ Server Actions

✅ Route Handlers

✅ Database Operations

---

### Never Rely On

```tsx
role === "admin" &&
<DeleteButton />
```

alone, because:

```text
UI hiding
≠
Security
```

The safest mindset is:

```text
Authentication
      ↓
Identify User

Authorization
      ↓
Verify Permission

Only Then
      ↓
Access Data
Execute Action
Render Sensitive Content
```





---






# `Customizing Clerk Components` :

# Customizing Clerk Components

So far you've used Clerk's built-in components like:

```tsx
<SignIn />
<SignUp />
<UserProfile />
<UserButton />
```

These work immediately, but eventually you'll want them to match your application's design.

---

# Mental Model

Think of Clerk components like a furnished apartment:

```text
Default Clerk Component
          ↓
Works Immediately
          ↓
But Uses Clerk's Default Styling
```

Customization lets you:

```text
Keep Clerk Functionality
          +
Your Own Design
```

---

# Levels of Customization

There are generally 3 levels:

```text
Level 1
↓
Appearance Customization

Level 2
↓
Layout Customization

Level 3
↓
Build Completely Custom UI
```

---

# Level 1: Appearance Prop

Most Clerk components accept an `appearance` prop.

Example:

```tsx
<SignIn
  appearance={{
    elements: {
      formButtonPrimary:
        "bg-blue-600 hover:bg-blue-700",
    },
  }}
/>
```

---

## What Happens?

```text
Clerk Component
       ↓
Inject Custom Classes
       ↓
Styled Component
```

---

# Example

```tsx
<SignIn
  appearance={{
    elements: {
      card: "shadow-xl",
      headerTitle: "text-3xl",
      formButtonPrimary:
        "bg-black",
    },
  }}
/>
```

Flow:

```text
Default Card
      ↓
Custom Classes
      ↓
Custom Appearance
```

---

# Common Elements

Examples:

```text
card
headerTitle
headerSubtitle
formButtonPrimary
socialButtonsBlockButton
footerActionLink
```

These target specific parts of the Clerk UI.

---

# Example Sign In Page

```tsx
import { SignIn }
  from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          card:
            "rounded-2xl shadow-lg",
          formButtonPrimary:
            "bg-indigo-600",
        },
      }}
    />
  );
}
```

---

# Level 2: Layout Customization

You can control the page around the component.

Example:

```tsx
export default function Page() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
      "
    >
      <SignIn />
    </div>
  );
}
```

---

Flow:

```text
Your Layout
       ↓
Clerk Component
       ↓
Combined Page
```

---

# Example Split Screen Login

```text
┌────────────┬────────────┐
│ Marketing  │  Sign In   │
│ Section    │  Clerk UI  │
└────────────┴────────────┘
```

Example:

```tsx
<div className="grid grid-cols-2">
  <div>
    Welcome Back
  </div>

  <div>
    <SignIn />
  </div>
</div>
```

---

# Level 3: Fully Custom Authentication UI

This is the most advanced approach.

Instead of:

```tsx
<SignIn />
```

you build your own form.

Example:

```tsx
<input />
<input />
<button />
```

Then connect it to Clerk APIs.

Mental model:

```text
Clerk UI
      ↓
Replace

Clerk Auth System
      ↓
Keep
```

You replace the interface, not the authentication infrastructure.

---

# Customizing UserButton

Default:

```tsx
<UserButton />
```

---

You can customize behavior.

Example:

```tsx
<UserButton
  afterSignOutUrl="/"
/>
```

---

Flow:

```text
Sign Out
     ↓
Redirect Home
```

---

# Adding Custom Menu Items

Example:

```tsx
<UserButton>
  <UserButton.MenuItems>
    <UserButton.Link
      label="Dashboard"
      href="/dashboard"
    />
  </UserButton.MenuItems>
</UserButton>
```

Conceptually:

```text
User Avatar
      ↓
Dropdown
      ↓
Extra Links
```

---

# Customizing UserProfile

Default:

```tsx
<UserProfile />
```

Provides:

```text
Profile
Email Settings
Password
Sessions
Security
```

---

You can style it:

```tsx
<UserProfile
  appearance={{
    elements: {
      card: "shadow-lg",
    },
  }}
/>
```

---

# Adding Custom Profile Pages

Suppose your app has:

```text
Billing
Notifications
Preferences
```

that are stored in your database.

You can add custom profile sections alongside Clerk's built-in ones.

Architecture:

```text
UserProfile
      │
      ├── Account
      ├── Security
      ├── Sessions
      └── Custom Pages
```

---

# Global Theme Customization

Instead of customizing every component individually:

```tsx
<SignIn />
<SignUp />
<UserProfile />
```

you can configure Clerk globally.

In your root layout:

```tsx
<ClerkProvider
  appearance={{
    variables: {
      colorPrimary:
        "#4f46e5",
    },
  }}
>
  {children}
</ClerkProvider>
```

---

Flow:

```text
ClerkProvider
      ↓
Global Theme
      ↓
All Clerk Components
```

---

# Dark Mode

Example:

```tsx
<ClerkProvider
  appearance={{
    variables: {
      colorPrimary:
        "#6366f1",
    },
  }}
>
```

Clerk can automatically adapt to dark mode when configured with your application's theme.

---

# Real-World Structure

```text
app/
├── sign-in/
│   └── page.tsx
├── sign-up/
│   └── page.tsx
├── user-profile/
│   └── page.tsx
└── layout.tsx
```

---

### sign-in/page.tsx

```tsx
import { SignIn }
  from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          card:
            "rounded-2xl",
        },
      }}
    />
  );
}
```

---

### user-profile/page.tsx

```tsx
import {
  UserProfile,
} from "@clerk/nextjs";

export default function Page() {
  return <UserProfile />;
}
```

---

# Customization Comparison

| Approach                   | Effort   | Flexibility |
| -------------------------- | -------- | ----------- |
| Default Components         | Very Low | Low         |
| Appearance Prop            | Low      | Medium      |
| Custom Layout Around Clerk | Medium   | High        |
| Fully Custom Auth UI       | High     | Very High   |

---

# Most Common Production Choice

Most teams use:

```text
Clerk Authentication
          +
Built-in Clerk Components
          +
Custom Appearance
          +
Custom Page Layouts
```

because it gives:

```text
Fast Development
Security
Built-in Features
Consistent Design
```

without needing to build authentication screens from scratch.

---

# Rule of Thumb

Use:

```tsx
<SignIn />
<SignUp />
<UserProfile />
```

when starting.

↓

Customize with:

```tsx
appearance={{ ... }}
```

↓

Add your own layouts and branding.

↓

Only build fully custom authentication UIs when you have very specific design or product requirements.

This way you keep Clerk handling the difficult parts (authentication, sessions, security, MFA, password resets, OAuth, etc.) while your application controls the look and feel.






---






# `Deploying Next.js Apps` :

# Deploying Next.js Apps

After building your application, the final step is:

```text
Write Code
    ↓
Build App
    ↓
Deploy
    ↓
Users Can Access It
```

---

# Mental Model

When developing locally:

```text
Your Computer
      ↓
localhost:3000
      ↓
Only You Can Access
```

After deployment:

```text
Internet
    ↓
Production Server
    ↓
Anyone Can Access
```

---

# What Happens During Deployment?

When you deploy a Next.js app:

```text
Source Code
      ↓
Build Process
      ↓
Optimized Application
      ↓
Server / Hosting Platform
      ↓
Live Website
```

The build step:

```bash
npm run build
```

creates an optimized production version.

---

# Deployment Options

Popular choices:

| Platform     | Difficulty | Recommended        |
| ------------ | ---------- | ------------------ |
| Vercel       | Easy       | ⭐ Best for Next.js |
| Netlify      | Easy       | Good               |
| Railway      | Medium     | Good               |
| Render       | Medium     | Good               |
| AWS          | Advanced   | Enterprise         |
| Google Cloud | Advanced   | Enterprise         |
| Azure        | Advanced   | Enterprise         |

---

# Why Vercel?

Next.js is created by the company behind Vercel:

Vercel

So Vercel supports:

```text
App Router
Server Components
Server Actions
ISR
Edge Functions
Middleware
Streaming
```

with minimal configuration.

---

# Deployment Flow

```text
GitHub
   ↓
Vercel
   ↓
Build
   ↓
Deploy
   ↓
Live URL
```

---

# Step 1: Push Code to GitHub

Create repository:

```bash
git init
git add .
git commit -m "initial commit"
```

Push:

```bash
git remote add origin ...
git push -u origin main
```

---

# Step 2: Create Vercel Project

Visit:

[Vercel](https://vercel.com?utm_source=chatgpt.com)

Then:

```text
Import Project
      ↓
Select GitHub Repository
      ↓
Deploy
```

---

# Step 3: Add Environment Variables

Locally you might have:

```env
DATABASE_URL=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
```

These are **not automatically deployed**.

Add them in:

```text
Vercel Dashboard
      ↓
Project Settings
      ↓
Environment Variables
```

---

# Environment Variables Flow

```text
Local .env
      ↓
Works Locally

Production
      ↓
Vercel Environment Variables
      ↓
Works In Production
```

---

# Common Clerk Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

If using Clerk, also configure:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
```

when needed.

---

# Common Database Variables

Prisma example:

```env
DATABASE_URL
```

Production DB:

```text
Local SQLite
        ↓
Development Only

PostgreSQL
        ↓
Production
```

Common providers:

* Neon
* Supabase
* PlanetScale

---

# Build Process

Locally test before deployment:

```bash
npm run build
```

If this fails:

```text
Deployment Will Fail
```

Always run:

```bash
npm run build
```

before pushing.

---

# Production Flow

```text
Push Code
      ↓
GitHub
      ↓
Vercel Detects Change
      ↓
Build
      ↓
Deploy
      ↓
New Version Live
```

---

# Automatic Deployments

Once connected:

```text
git push
```

automatically triggers:

```text
Build
 ↓
Deploy
 ↓
Production Update
```

No manual upload needed.

---

# Preview Deployments

One of Vercel's best features:

```text
Create Branch
      ↓
Push Branch
      ↓
Preview URL
```

Example:

```text
main
 ↓
Production

feature/navbar
 ↓
Preview Deployment
```

You can test before merging.

---

# Deploying Clerk Apps

Typical architecture:

```text
Browser
   ↓
Next.js
   ↓
Clerk
   ↓
Database
```

Checklist:

### Clerk

Configure:

* Production domain
* Redirect URLs
* Environment variables

Inside your Clerk dashboard.

---

### Middleware

Ensure:

```tsx
middleware.ts
```

is committed.

Many deployment issues happen because middleware wasn't pushed.

---

### Environment Variables

Verify:

```env
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
```

exist in production.

---

# Deploying Prisma Apps

If using Prisma:

Run migrations.

Development:

```bash
npx prisma migrate dev
```

Production:

```bash
npx prisma migrate deploy
```

Flow:

```text
Schema Changes
      ↓
Migration Files
      ↓
Production Database
```

---

# Common Deployment Errors

## Error 1

```text
Works Locally
Fails On Vercel
```

Usually:

```text
Missing Environment Variable
```

---

## Error 2

```text
Database Connection Error
```

Usually:

```text
Incorrect DATABASE_URL
```

---

## Error 3

```text
Build Failed
```

Check:

```bash
npm run build
```

locally.

---

## Error 4

```text
Clerk Authentication Broken
```

Usually:

```text
Wrong Production Domain
Missing Keys
Missing Redirect URLs
```

---

# Production Architecture

A typical production stack looks like:

```text
User
 ↓
Browser
 ↓
Next.js (Vercel)
 ↓
Clerk
 ↓
Server Actions
 ↓
Prisma
 ↓
PostgreSQL
```

---

# Deployment Checklist

Before deploying:

### Application

* ✅ No TypeScript errors
* ✅ No ESLint issues
* ✅ `npm run build` succeeds

### Environment Variables

* ✅ Database URL
* ✅ Clerk keys
* ✅ API keys

### Authentication

* ✅ Clerk configured
* ✅ Middleware working
* ✅ Protected routes tested

### Database

* ✅ Production database created
* ✅ Migrations applied

---

# Local vs Production

| Local          | Production                   |
| -------------- | ---------------------------- |
| localhost      | Public URL                   |
| .env.local     | Vercel Environment Variables |
| Local DB       | Production DB                |
| Manual testing | Real users                   |
| Single machine | Cloud infrastructure         |

---

# Real-World Deployment Flow

```text
Develop Feature
       ↓
Git Commit
       ↓
Push To GitHub
       ↓
Vercel Build
       ↓
Deploy
       ↓
Run Migrations
       ↓
Production Live
       ↓
Users Access App
```

---

# Rule of Thumb

For modern Next.js App Router applications:

```text
Next.js
    +
Clerk
    +
Prisma
    +
PostgreSQL
    +
GitHub
    +
Vercel
```

is one of the most common production stacks.

The deployment process is usually:

```text
Build Locally
      ↓
Push To GitHub
      ↓
Configure Environment Variables
      ↓
Deploy On Vercel
      ↓
Apply Database Migrations
      ↓
Verify Clerk Authentication
      ↓
Go Live
```

Once your GitHub repository is connected, future deployments are typically as simple as:

```bash
git push
```

and Vercel handles the build and deployment automatically.






---


