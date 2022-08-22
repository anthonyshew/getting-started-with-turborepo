export const pages = {
  "/": {
    path: "",
    title: "Welcome to the HobbyFinder documentation.",
    navbarLabel: "Home",
    body: `
      <p>On this subdomain, you will find all sorts of information about the application.</p>
      <p>You may have noticed that things look quite similar to the marketing site and application here in the docs.</p>
      <p>This is because our component library is all coming from one place! In the respository for this project, look in the ui package.
    `
  },
  "tech-stack": {
    path: "tech-stack",
    title: "Technologies that Power HobbyFinder",
    navbarLabel: "Tech Stack",
    body: `
      <ul>
        <li>Turborepo - Monorepo manager</li>
        <li>Next.js - React Framework</li>
        <li>Vercel - Infrastructure</li>
        <li>Mantine - comoponent library</li>
      </ul>
    `
  },
  "monorepo-about": {
    path: "monorepo-about",
    title: "About this Monorepo",
    body: `
      <p>Hobbyfinder is built as a monorepo that creates three separate applications - using one design system.</p>
      <p>The two most important parts of the repository are:</p>
      <ul>
        <li>The apps folder</li>
        <li>The packages folder</li>
      </ul>
      <h3>The apps folder</h3>
      <p>The apps folder contains all of the final, deployable applications. These apps use any combination of packages that they need by importing them similar to an npm module that you would normally retrieve from npm remotely.</p>
      <h3>The packages folder</h3>
      <p>In packages, we are creating modules that we will use in our applications. This allows to ergonomically use the same code across many separate deployments.</p>
      <p>For HobbyFinder, we are heavily using this idea for a reusable design system.</p>
    `
  },
  "how-to": {
    path: "how-to",
    title: "How to use HobbyFinder",
    navbarLabel: "App How-to",
    body: `
      <p>To use Hobbyfinder:</p>
      <ol>
        <li>visit the app to find the dimensions to filter for hobbies.</li>
        <li>For each dimension, provide a minimum and maximum value that you are happy with.</li>
        <li>Based on the parameters you provide, we will be able to give you a set of hobbies that you should enjoy!</li>
      </ol>
    `
  },
}