import { F as FILENAME, l as escape_html } from "../../chunks/context.js";
import "clsx";
import { q as attr, t as stringify, w as ensure_array_like, y as attr_style, s as attr_class } from "../../chunks/index.js";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
import { g as githubIcon } from "../../chunks/github.js";
const me = "/_app/immutable/assets/me_cropped.CRSaZwi5.webp";
AboutMe[FILENAME] = "src/lib/components/AboutMe.svelte";
function AboutMe($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<section class="flex flex-col px-8 py-14 lg:flex-row lg:py-24" id="about-me">`);
      push_element($$renderer2, "section", 5, 0);
      $$renderer2.push(`<article class="w-full lg:w-1/2">`);
      push_element($$renderer2, "article", 6, 4);
      $$renderer2.push(`<h2 class="text-main text-4xl uppercase" id="about-me-heading">`);
      push_element($$renderer2, "h2", 7, 8);
      $$renderer2.push(`About Me</h2>`);
      pop_element();
      $$renderer2.push(` <h3 class="text-dark-gray my-8 text-xl">`);
      push_element($$renderer2, "h3", 8, 8);
      $$renderer2.push(`Hello World!</h3>`);
      pop_element();
      $$renderer2.push(` <p class="text-dark-gray my-8 text-xl">`);
      push_element($$renderer2, "p", 9, 8);
      $$renderer2.push(`I'm Jakub, a web developer with a passion for programming. My expertise spans frontend
            technologies such as TypeScript, JavaScript, HTML, CSS, and jQuery, as well as advanced
            frameworks like React, Vue and Svelte. I have hands-on experience with template engines like
            Apache Velocity and API querying using GraphQL. On top of that I have a solid understanding of
            backend technologies like Node.js, Python (Flask/Django included), SQL, Firebase and AWS.</p>`);
      pop_element();
      $$renderer2.push(` <p class="text-dark-gray my-8 text-xl">`);
      push_element($$renderer2, "p", 16, 8);
      $$renderer2.push(`Welcome to my personal portfolio, where you can explore my projects and dedication to creating
            high-quality software solutions.</p>`);
      pop_element();
      $$renderer2.push(`</article>`);
      pop_element();
      $$renderer2.push(` <aside class="w-full lg:mx-16 lg:w-1/2">`);
      push_element($$renderer2, "aside", 21, 4);
      $$renderer2.push(`<figure>`);
      push_element($$renderer2, "figure", 22, 8);
      $$renderer2.push(`<img alt="Portrait of Jakub Pinkowski" class="rounded-3xl"${attr("src", me)}/>`);
      push_element($$renderer2, "img", 23, 12);
      pop_element();
      $$renderer2.push(`</figure>`);
      pop_element();
      $$renderer2.push(`</aside>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    AboutMe
  );
}
AboutMe.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
const contact = "/_app/immutable/assets/contact.C8YCBzq7.webp";
const linkedin = "/_app/immutable/assets/linkedin.CHBsXBEb.png";
ContactForm[FILENAME] = "src/lib/components/Contact/ContactForm.svelte";
function ContactForm($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let isSubmitting = false;
      let formData = { name: "", email: "", message: "" };
      $$renderer2.push(`<form class="flex flex-col gap-4 2xl:gap-6">`);
      push_element($$renderer2, "form", 118, 0);
      $$renderer2.push(`<fieldset>`);
      push_element($$renderer2, "fieldset", 120, 4);
      $$renderer2.push(`<label class="sr-only" for="name">`);
      push_element($$renderer2, "label", 121, 8);
      $$renderer2.push(`Name</label>`);
      pop_element();
      $$renderer2.push(` <input autocomplete="name"${attr("value", formData.name)} class="input input-bordered w-full max-w-xl text-lg" id="name" name="name" placeholder="Name" required type="text"/>`);
      push_element($$renderer2, "input", 122, 8);
      pop_element();
      $$renderer2.push(` `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></fieldset>`);
      pop_element();
      $$renderer2.push(` <fieldset>`);
      push_element($$renderer2, "fieldset", 138, 4);
      $$renderer2.push(`<label class="sr-only" for="email">`);
      push_element($$renderer2, "label", 139, 8);
      $$renderer2.push(`Email</label>`);
      pop_element();
      $$renderer2.push(` <input autocomplete="email"${attr("value", formData.email)} class="input input-bordered w-full max-w-xl text-lg" id="email" name="email" placeholder="Email" required type="email"/>`);
      push_element($$renderer2, "input", 140, 8);
      pop_element();
      $$renderer2.push(` `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></fieldset>`);
      pop_element();
      $$renderer2.push(` <fieldset>`);
      push_element($$renderer2, "fieldset", 156, 4);
      $$renderer2.push(`<label class="sr-only" for="message">`);
      push_element($$renderer2, "label", 157, 8);
      $$renderer2.push(`Message</label>`);
      pop_element();
      $$renderer2.push(` <textarea class="textarea textarea-bordered w-full max-w-xl text-lg" cols="30" id="message" name="message" placeholder="Message" required rows="4">`);
      push_element($$renderer2, "textarea", 158, 8);
      const $$body = escape_html(formData.message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea>`);
      pop_element();
      $$renderer2.push(` `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></fieldset>`);
      pop_element();
      $$renderer2.push(` <aside aria-live="polite" class="sr-only" id="form-errors">`);
      push_element($$renderer2, "aside", 174, 4);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></aside>`);
      pop_element();
      $$renderer2.push(` <button${attr("aria-busy", isSubmitting)} class="my-button flex items-center px-4! py-2! text-xl"${attr("disabled", isSubmitting, true)}>`);
      push_element($$renderer2, "button", 184, 4);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`Send`);
      }
      $$renderer2.push(`<!--]--></button>`);
      pop_element();
      $$renderer2.push(` `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></form>`);
      pop_element();
    },
    ContactForm
  );
}
ContactForm.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Contact[FILENAME] = "src/lib/components/Contact.svelte";
function Contact($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<section class="px-8 py-14 lg:py-24" id="contact">`);
      push_element($$renderer2, "section", 8, 0);
      $$renderer2.push(`<h2 class="text-main text-4xl uppercase" id="contact-heading">`);
      push_element($$renderer2, "h2", 9, 4);
      $$renderer2.push(`Contact</h2>`);
      pop_element();
      $$renderer2.push(` <div class="flex flex-col lg:flex-row">`);
      push_element($$renderer2, "div", 10, 4);
      $$renderer2.push(`<figure class="my-8 w-full lg:w-3/5">`);
      push_element($$renderer2, "figure", 11, 8);
      $$renderer2.push(`<img alt="" aria-hidden="true" class="rounded-3xl" loading="lazy"${attr("src", contact)}/>`);
      push_element($$renderer2, "img", 12, 12);
      pop_element();
      $$renderer2.push(`</figure>`);
      pop_element();
      $$renderer2.push(` <article class="flex w-full flex-col gap-4 text-justify lg:m-8 lg:w-2/5 lg:px-8 2xl:gap-6">`);
      push_element($$renderer2, "article", 20, 8);
      $$renderer2.push(`<h3 class="text-2xl">`);
      push_element($$renderer2, "h3", 21, 12);
      $$renderer2.push(`Send me a message!</h3>`);
      pop_element();
      $$renderer2.push(` <p class="text-xl">`);
      push_element($$renderer2, "p", 22, 12);
      $$renderer2.push(`Feel free to reach out to me via the form or social media. <br/>`);
      push_element($$renderer2, "br", 24, 16);
      pop_element();
      $$renderer2.push(` Looking forward to hearing from you!</p>`);
      pop_element();
      $$renderer2.push(` <nav aria-label="Social media links">`);
      push_element($$renderer2, "nav", 27, 12);
      $$renderer2.push(`<a aria-label="LinkedIn profile (opens in a new tab)" class="mr-4 inline-block" href="https://www.linkedin.com/in/jakub-pinkowski-b44405134/" target="_blank">`);
      push_element($$renderer2, "a", 28, 16);
      $$renderer2.push(`<img alt="linkedin" class="inline-block w-12"${attr("src", linkedin)}/>`);
      push_element($$renderer2, "img", 34, 20);
      pop_element();
      $$renderer2.push(`</a>`);
      pop_element();
      $$renderer2.push(` <a aria-label="GitHub profile (opens in a new tab)" class="mr-4 focus:ring-2 inline-block" href="https://github.com/Jakub-Pinkowski" target="_blank">`);
      push_element($$renderer2, "a", 36, 16);
      $$renderer2.push(`<img alt="github" class="inline-block w-12"${attr("src", githubIcon)}/>`);
      push_element($$renderer2, "img", 42, 20);
      pop_element();
      $$renderer2.push(`</a>`);
      pop_element();
      $$renderer2.push(`</nav>`);
      pop_element();
      $$renderer2.push(` `);
      ContactForm($$renderer2);
      $$renderer2.push(`<!----></article>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</section>`);
      pop_element();
    },
    Contact
  );
}
Contact.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
const globe_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2a2W9VVRTGf61BRaW0Di++iLTw5IDDg1ERp2g0mjhQVBK1ElBwqmjC4JM4NTxo9B+oGJ8cMCZiEHGWiAoiDikyqC8OlRrEgoJYe8xKvk1WNueec+695xZq+JKT9J717XXOOntYa3+7cBiFMV7XqEE7MAdYBnwK7ACS6Nohm3Fmq80hgTZgPvBFyksXvTYAD8jXiOMEYCkw6F7I/h5yv18ELnS/pwIvud9DUfs/gJ6RCqgJmAUMuBd4E7gZWKzffwG3uTaBF3A7sEf3rM0twCrH2w506VkNwfHAa+6BHwIXyHYx8A8wDEyP2sWBGDrFtTbTdM967yPHf7URvTMZ+N4NIfuqAWOATbI9ktI2LRDDo7q/ST4CrDd2ybYN6CgriLOAX+V4fYrjB2X7FjiyikCMu1k28+ExCfhcNnv2lDJ6IgTxLnBcZB+rMW32qyr4qBSI4Wo3L8yXxzjgfRdMzT3T5oZTH3BMCudO2b/M8JMVCGqbKK/EONYN261AK1WiKZrYYejcEzn7RLZ5dQQyT/a17t543Q9DL1zLq13NZrmJvRD4zjnbp+VyseO01BFIi5vcC4A3gL2unfXEQy7n+IUmN9kNRF/6CC2rqxSI/0q7df9ZYC5wJXAuMFG9F3ituneOOHcBTwMrXSCJS5artUzbs9FoCPOl0LK8VA0+AJor5JMuN8nLvAZUr52Y8txml2esAshEm+vCkOzSYON0p3jnAddoWPTqS67XQvG7e8mdumfL6tsqHBcB1wHnO05TxnOnunIms1dCTliTE/Ak8X4kH3lzJOBn8fIq4o/F684ihSr2hhxnneK9XmIgK8SbXvDZ1uupaBfhT+DoHGc94i4pMZDHxHsihzdWhalxJ6QR5shoXyYPy8WdUWIgVkEb7+UC3JXiWpo4AM/LeF8BR6F0uKTEQC51pVAeusV9Ls34mYxWkufhG3FPKzGQM8T7qgD38pRqYD/CHvvUKlaYk0sMxHwl8p2HMJ9/S0s2w8qofm9QCX/LUVrZXmsg5mtYvvPqqTF613/jpN3SgCw9Ute4/2UgzTUOraNKHFrmK1HlS61Da7RN9omVJjtSAIsuv1+Le3qJgZxZYLcZcJm4VncdgGWjMCH2phlny2g7tDy8Iu5Nh2KJ0u6KxljRiPGkuKZNHcyi8ZRKpA0i3FiwlF5RYiA2Eqop49dlkeaLZHVXFjrE+6nEQH4Rz1akLKwV7/4sUpu2kYm02CJbXdumXi9V5QVNVtug/eA4lba6tj2+VtvlwMkqTy5yvFyNq8eJ1Gniw0nau3hFvqxru4QNEzhiNGsLXmQe7e+VoJCYBIMkGdtEvROdgSSScmwVeUoBWol9thJrJTnoCslBz0hK2h353Ae8FclB98rWX43i2KVGgxLHtrqH7NUkX+ACqVegG1SJtEjnLaEESiQOLnTqzq1UgSadT8SS6dzopRslmbYCd+uZ/h2K5JjUIbbNidgmKFcSsTfWEcjGHBG7T/Yt9ZwOd7hjhffikrnBxwotrhTqL+MEeIocJUqYJs6liXqb6zjosfzlMdlpbP0qKEtBhxtmu7QYpB29LakikFCS9EV7oDucqL2lEWfxrU7PSrSmh6Q5zR2GdhYIZIY7DLUkF3TdNdHEbth/TDTpfCLMm0Tr/UzgYf3eE/VYHEhXdDw9U8J34PVXu8TWgzZVAKGcSfT3UPRF438YCOV/pX8YeLyW47WyAuqWoFxrWbJOPg5KAGmYoI1OrxJlWi02oMTXK27F/cShiJacEuYwcPgPknvUyL7T8dYAAAAASUVORK5CYII=";
CardActions[FILENAME] = "src/lib/components/Portfolio/CardActions.svelte";
function CardActions($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { project } = $$props;
      $$renderer2.push(`<nav class="card-actions mt-auto w-full flex-col justify-end gap-4 lg:flex-row lg:justify-between">`);
      push_element($$renderer2, "nav", 9, 0);
      $$renderer2.push(`<a${attr("aria-label", `View ${project.name} code on GitHub (opens in a new tab)`)} class="my-button xl:text-lg"${attr("href", project.github)} target="_blank">`);
      push_element($$renderer2, "a", 10, 4);
      $$renderer2.push(`<img alt="Github logo" class="mx-2 h-8 w-8"${attr("src", githubIcon)}/>`);
      push_element($$renderer2, "img", 16, 8);
      pop_element();
      $$renderer2.push(` View Code</a>`);
      pop_element();
      $$renderer2.push(` `);
      if (project.src) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a class="my-button xl:text-lg"${attr("href", project.src)} target="_blank"${attr("aria-label", `Visit ${project.name} website (opens in a new tab)`)}>`);
        push_element($$renderer2, "a", 20, 8);
        $$renderer2.push(`<img class="mx-2 h-8 w-8"${attr("src", globe_icon)} alt="Website icon"/>`);
        push_element($$renderer2, "img", 26, 12);
        pop_element();
        $$renderer2.push(` Visit Website</a>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></nav>`);
      pop_element();
    },
    CardActions
  );
}
CardActions.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
CardAccordion[FILENAME] = "src/lib/components/Portfolio/CardAccordion.svelte";
function CardAccordion($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { project } = $$props;
      $$renderer2.push(`<p class="grow-0 text-justify text-lg">`);
      push_element($$renderer2, "p", 12, 0);
      $$renderer2.push(`${escape_html(project.summary)}</p>`);
      pop_element();
      $$renderer2.push(` <div class="collapse-arrow border-light collapse rounded-lg border-t-4 border-l-4 shadow-md transition-all duration-300 lg:hover:shadow-xl">`);
      push_element($$renderer2, "div", 13, 0);
      $$renderer2.push(`<input${attr("aria-controls", `content-${stringify(project.name.toLowerCase().replace(/\s+/g, "-"))}`)} aria-expanded="false"${attr("id", `collapse-${stringify(project.name.toLowerCase().replace(/\s+/g, "-"))}`)}${attr("name", `collapse-${stringify(project.name)}`)} type="checkbox"/>`);
      push_element($$renderer2, "input", 16, 4);
      pop_element();
      $$renderer2.push(` <label class="collapse-title text-dark-gray px-4 py-3 text-lg font-semibold cursor-pointer"${attr("for", `collapse-${stringify(project.name.toLowerCase().replace(/\s+/g, "-"))}`)}>`);
      push_element($$renderer2, "label", 24, 4);
      $$renderer2.push(`More info</label>`);
      pop_element();
      $$renderer2.push(` <div class="collapse-content flex flex-col gap-4 px-4">`);
      push_element($$renderer2, "div", 30, 4);
      $$renderer2.push(`<h3 class="border-t-2 border-t-gray-300 pt-2 text-lg font-semibold">`);
      push_element($$renderer2, "h3", 33, 8);
      $$renderer2.push(`Description:</h3>`);
      pop_element();
      $$renderer2.push(` <p class="text-justify text-base">`);
      push_element($$renderer2, "p", 34, 8);
      $$renderer2.push(`${escape_html(project.description)}</p>`);
      pop_element();
      $$renderer2.push(` `);
      if (project.features) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h3 class="text-lg font-semibold">`);
        push_element($$renderer2, "h3", 36, 12);
        $$renderer2.push(`Features:</h3>`);
        pop_element();
        $$renderer2.push(` <ul class="list-disc ps-8">`);
        push_element($$renderer2, "ul", 37, 12);
        $$renderer2.push(`<!--[-->`);
        const each_array = ensure_array_like(project.features);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let feature = each_array[$$index];
          $$renderer2.push(`<li>`);
          push_element($$renderer2, "li", 39, 20);
          $$renderer2.push(`${escape_html(feature)}</li>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></ul>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h3 class="text-lg font-semibold">`);
      push_element($$renderer2, "h3", 43, 8);
      $$renderer2.push(`Tech Stack:</h3>`);
      pop_element();
      $$renderer2.push(` <ul class="list-disc ps-8">`);
      push_element($$renderer2, "ul", 44, 8);
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(project.technologies);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let technology = each_array_1[$$index_1];
        $$renderer2.push(`<li>`);
        push_element($$renderer2, "li", 46, 16);
        $$renderer2.push(`${escape_html(technology)}</li>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></ul>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
      $$renderer2.push(`</div>`);
      pop_element();
    },
    CardAccordion
  );
}
CardAccordion.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
CardDescription[FILENAME] = "src/lib/components/Portfolio/CardDescription.svelte";
function CardDescription($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { project, icons } = $$props;
      const getIconSrc = (technology) => {
        const icon = icons.find((icon2) => icon2.name === technology);
        return icon ? icon.src : "";
      };
      $$renderer2.push(`<p class="text-justify text-lg">`);
      push_element($$renderer2, "p", 17, 0);
      $$renderer2.push(`${escape_html(project.description)}</p>`);
      pop_element();
      $$renderer2.push(` <p class="text-lg">`);
      push_element($$renderer2, "p", 18, 0);
      $$renderer2.push(`${escape_html(project.technologiesDescription)}</p>`);
      pop_element();
      $$renderer2.push(` <ul class="hidden lg:flex list-none p-0">`);
      push_element($$renderer2, "ul", 19, 0);
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(project.technologies);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let technology = each_array[$$index];
        $$renderer2.push(`<li class="flex items-center mr-2">`);
        push_element($$renderer2, "li", 21, 8);
        $$renderer2.push(`<img class="h-8 w-8"${attr("src", getIconSrc(technology))} alt="" aria-hidden="true"/>`);
        push_element($$renderer2, "img", 22, 12);
        pop_element();
        $$renderer2.push(`</li>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></ul>`);
      pop_element();
    },
    CardDescription
  );
}
CardDescription.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
CardFigure[FILENAME] = "src/lib/components/Portfolio/CardFigure.svelte";
function CardFigure($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { project } = $$props;
      $$renderer2.push(`<figure>`);
      push_element($$renderer2, "figure", 7, 0);
      $$renderer2.push(`<a${attr("aria-label", `${stringify(project.name)} - Open ${stringify(project.src ? "website" : "GitHub repository")} (opens in a new tab)`)} class="w-full"${attr("href", project.src ? project.src : project.github)} target="_blank">`);
      push_element($$renderer2, "a", 8, 4);
      $$renderer2.push(`<img${attr("alt", `Screenshot of ${stringify(project.name)} project`)} class="h-52 w-full rounded-t-xl object-cover lg:h-72 lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-110 lg:hover:-rotate-3 lg:hover:opacity-80"${attr("src", project.img)}/>`);
      push_element($$renderer2, "img", 14, 8);
      pop_element();
      $$renderer2.push(` `);
      if (project.label) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<mark class="project-label svelte-19n0vud"${attr_style(`background-color: ${stringify(project.labelColor)}`)}${attr("aria-label", `Project label: ${stringify(project.label)}`)}>`);
        push_element($$renderer2, "mark", 20, 12);
        $$renderer2.push(`${escape_html(project.label)}</mark>`);
        pop_element();
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
      pop_element();
      $$renderer2.push(`</figure>`);
      pop_element();
    },
    CardFigure
  );
}
CardFigure.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
ProjectCard[FILENAME] = "src/lib/components/Portfolio/ProjectCard.svelte";
function ProjectCard($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { project, icons } = $$props;
      $$renderer2.push(`<article${attr_class("card bg-light-gray h-full rounded-t-xl shadow-xl", void 0, { "relative": project.label })}${attr_style("", { "border-color": project.labelColor ? project.labelColor : "" })}>`);
      push_element($$renderer2, "article", 16, 0);
      CardFigure($$renderer2, { project });
      $$renderer2.push(`<!----> <section class="card-body gap-4 p-4 lg:p-6">`);
      push_element($$renderer2, "section", 22, 4);
      $$renderer2.push(`<h2 class="card-title text-2xl">`);
      push_element($$renderer2, "h2", 23, 8);
      $$renderer2.push(`${escape_html(project.name)}</h2>`);
      pop_element();
      $$renderer2.push(` `);
      if (project.summary) {
        $$renderer2.push("<!--[-->");
        CardAccordion($$renderer2, { project });
      } else {
        $$renderer2.push("<!--[!-->");
        CardDescription($$renderer2, { project, icons });
      }
      $$renderer2.push(`<!--]--> `);
      CardActions($$renderer2, { project });
      $$renderer2.push(`<!----></section>`);
      pop_element();
      $$renderer2.push(`</article>`);
      pop_element();
    },
    ProjectCard
  );
}
ProjectCard.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Portfolio[FILENAME] = "src/lib/components/Portfolio.svelte";
function Portfolio($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { mainProjects, studiesProjects, simpleProjects, icons } = $$props;
      const categories = [
        { title: "Fullstack projects", projects: mainProjects },
        { title: "Studies projects", projects: studiesProjects },
        { title: "Simple websites", projects: simpleProjects }
      ];
      $$renderer2.push(`<section class="bg-dark-gray px-8 py-14 lg:py-24" id="portfolio">`);
      push_element($$renderer2, "section", 27, 0);
      $$renderer2.push(`<h2 class="text-light mb-8 text-4xl uppercase">`);
      push_element($$renderer2, "h2", 28, 4);
      $$renderer2.push(`Portfolio</h2>`);
      pop_element();
      $$renderer2.push(` <!--[-->`);
      const each_array = ensure_array_like(categories);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let { title, projects } = each_array[$$index_1];
        $$renderer2.push(`<section class="my-16 lg:rounded-lg">`);
        push_element($$renderer2, "section", 31, 8);
        $$renderer2.push(`<h3 class="text-light-gray mb-8 text-3xl">`);
        push_element($$renderer2, "h3", 32, 12);
        $$renderer2.push(`${escape_html(title)}</h3>`);
        pop_element();
        $$renderer2.push(` <ul class="grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:gap-12 list-none p-0 items-stretch">`);
        push_element($$renderer2, "ul", 33, 12);
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(projects);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let project = each_array_1[$$index];
          $$renderer2.push(`<li class="h-full">`);
          push_element($$renderer2, "li", 35, 20);
          ProjectCard($$renderer2, { project, icons });
          $$renderer2.push(`<!----></li>`);
          pop_element();
        }
        $$renderer2.push(`<!--]--></ul>`);
        pop_element();
        $$renderer2.push(`</section>`);
        pop_element();
      }
      $$renderer2.push(`<!--]--></section>`);
      pop_element();
    },
    Portfolio
  );
}
Portfolio.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Banner[FILENAME] = "src/lib/components/Banner.svelte";
function Banner($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<header class="flex h-screen items-center bg-[#1a1a1d] tracking-wide" id="banner">`);
      push_element($$renderer2, "header", 1, 0);
      $$renderer2.push(`<hgroup class="ml-8 lg:ml-24">`);
      push_element($$renderer2, "hgroup", 2, 4);
      $$renderer2.push(`<h1 class="text-main p-4 text-6xl font-bold">`);
      push_element($$renderer2, "h1", 3, 8);
      $$renderer2.push(`Jakub Pinkowski</h1>`);
      pop_element();
      $$renderer2.push(` <h2 class="text-gray p-4 text-3xl font-semibold">`);
      push_element($$renderer2, "h2", 4, 8);
      $$renderer2.push(`Web Developer</h2>`);
      pop_element();
      $$renderer2.push(`</hgroup>`);
      pop_element();
      $$renderer2.push(` <a aria-label="Scroll down to About Me section" class="text-light absolute bottom-2 left-2 uppercase focus:underline focus:outline-none hover:underline" href="#about-me">`);
      push_element($$renderer2, "a", 6, 4);
      $$renderer2.push(`Scroll down</a>`);
      pop_element();
      $$renderer2.push(`</header>`);
      pop_element();
    },
    Banner
  );
}
Banner.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let { data } = $$props;
      Banner($$renderer2);
      $$renderer2.push(`<!----> `);
      AboutMe($$renderer2);
      $$renderer2.push(`<!----> `);
      Portfolio($$renderer2, {
        icons: data.icons,
        mainProjects: data.mainProjects,
        simpleProjects: data.simpleProjects,
        studiesProjects: data.studiesProjects
      });
      $$renderer2.push(`<!----> `);
      Contact($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    _page
  );
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
