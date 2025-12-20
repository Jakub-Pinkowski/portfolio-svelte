import { q as attr, s as attr_class, t as stringify, u as bind_props, v as css_props, w as ensure_array_like, x as slot } from "../../chunks/index.js";
import { F as FILENAME, l as escape_html } from "../../chunks/context.js";
import { p as push_element, a as pop_element } from "../../chunks/dev.js";
import "clsx";
Hamburger[FILENAME] = "node_modules/svelte-hamburgers/dist/Hamburger.svelte";
function Hamburger($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let {
        open = false,
        type = "spin",
        title = "Hamburger menu",
        ariaControls,
        ariaLabel = title,
        onclick
      } = $$props;
      $$renderer2.push(`<button${attr("title", title)}${attr("aria-label", ariaLabel)}${attr("aria-controls", ariaControls)}${attr("aria-expanded", open)}${attr_class(`hamburger hamburger--${stringify(type)}`, "svelte-12xk7ds", { "is-active": open })}>`);
      push_element($$renderer2, "button", 83, 0);
      $$renderer2.push(`<span class="hamburger-box svelte-12xk7ds">`);
      push_element($$renderer2, "span", 95, 4);
      $$renderer2.push(`<span class="hamburger-inner svelte-12xk7ds">`);
      push_element($$renderer2, "span", 96, 8);
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(`</span>`);
      pop_element();
      $$renderer2.push(`</button>`);
      pop_element();
      bind_props($$props, { open });
    },
    Hamburger
  );
}
Hamburger.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Navigation[FILENAME] = "src/lib/components/Navigation.svelte";
function Navigation($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      let open = false;
      let menuId = "main-menu";
      const links = [
        { label: "Home", path: "/" },
        { label: "About Me", path: "#about-me" },
        { label: "Portfolio", path: "#portfolio" },
        { label: "Contact", path: "#contact" }
      ];
      let $$settled = true;
      let $$inner_renderer;
      function $$render_inner($$renderer3) {
        $$renderer3.push(`<div class="fixed top-10 right-10 z-20">`);
        push_element($$renderer3, "div", 26, 0);
        css_props($$renderer3, true, { "--color": "#950740" }, () => {
          Hamburger($$renderer3, {
            ariaControls: menuId,
            ariaLabel: "Toggle navigation menu",
            get open() {
              return open;
            },
            set open($$value) {
              open = $$value;
              $$settled = false;
            }
          });
        });
        $$renderer3.push(`</div>`);
        pop_element();
        $$renderer3.push(` `);
        if (open) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav${attr("id", menuId)} class="bg-dark-gray text-light fixed inset-x-0 top-0 z-10">`);
          push_element($$renderer3, "nav", 36, 4);
          $$renderer3.push(`<div class="flex flex-col items-center text-3xl tracking-wide">`);
          push_element($$renderer3, "div", 41, 8);
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(links);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { label, path } = each_array[$$index];
            $$renderer3.push(`<a${attr("href", path)} class="cursor-pointer p-4 hover:underline">`);
            push_element($$renderer3, "a", 43, 16);
            $$renderer3.push(`${escape_html(label)}</a>`);
            pop_element();
          }
          $$renderer3.push(`<!--]--></div>`);
          pop_element();
          $$renderer3.push(` <hr class="mx-auto w-full border-t-2 lg:w-1/3"/>`);
          push_element($$renderer3, "hr", 54, 8);
          pop_element();
          $$renderer3.push(`</nav>`);
          pop_element();
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
      do {
        $$settled = true;
        $$inner_renderer = $$renderer2.copy();
        $$render_inner($$inner_renderer);
      } while (!$$settled);
      $$renderer2.subsume($$inner_renderer);
    },
    Navigation
  );
}
Navigation.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Footer[FILENAME] = "src/lib/components/Footer.svelte";
function Footer($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      $$renderer2.push(`<footer class="footer bg-dark-gray text-neutral-content items-center p-4">`);
      push_element($$renderer2, "footer", 1, 0);
      $$renderer2.push(`<aside class="flex w-full items-center justify-between">`);
      push_element($$renderer2, "aside", 2, 4);
      $$renderer2.push(`<p class="mr-2">`);
      push_element($$renderer2, "p", 3, 8);
      $$renderer2.push(`Copyright © 2025 - All right reserved</p>`);
      pop_element();
      $$renderer2.push(` <a aria-label="GitHub" href="https://github.com/Jakub-Pinkowski" target="_blank">`);
      push_element($$renderer2, "a", 4, 8);
      $$renderer2.push(`<svg height="24" role="img" viewBox="0 0 16 16" width="24">`);
      push_element($$renderer2, "svg", 5, 12);
      $$renderer2.push(`<title id="github-title">`);
      push_element($$renderer2, "title", 6, 16);
      $$renderer2.push(`GitHub Profile</title>`);
      pop_element();
      $$renderer2.push(`<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">`);
      push_element($$renderer2, "path", 7, 16);
      $$renderer2.push(`</path>`);
      pop_element();
      $$renderer2.push(`</svg>`);
      pop_element();
      $$renderer2.push(`</a>`);
      pop_element();
      $$renderer2.push(`</aside>`);
      pop_element();
      $$renderer2.push(`</footer>`);
      pop_element();
    },
    Footer
  );
}
Footer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$renderer, $$props) {
  $$renderer.component(
    ($$renderer2) => {
      Navigation($$renderer2);
      $$renderer2.push(`<!----> <main id="main-content">`);
      push_element($$renderer2, "main", 8, 0);
      $$renderer2.push(`<!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]--></main>`);
      pop_element();
      $$renderer2.push(` `);
      Footer($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    _layout
  );
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
