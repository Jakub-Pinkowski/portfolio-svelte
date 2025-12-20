import { g as githubIcon } from "../../chunks/github.js";
const e_commerce = "/_app/immutable/assets/e-commerce.2573GyfQ.webp";
const jules_art = "/_app/immutable/assets/jules-art.CzaVcZRj.webp";
const crypto_bot = "/_app/immutable/assets/crypto_bot.C4inu0rX.webp";
const trading_bot = "/_app/immutable/assets/trading-bot.Dxz2s9WB.webp";
const blogging_platform = "/_app/immutable/assets/blogging-platform.C57kYo1i.webp";
const links_page = "/_app/immutable/assets/links-page.B4HPy1Up.webp";
const mainProjects = [
  {
    name: "E-commerce website",
    src: "https://commerce-website-psi.vercel.app",
    label: "Flagship Frontend Project",
    labelColor: "#e9c46a",
    img: e_commerce,
    summary: "Fullstack e-commerce website for product browsing, filtering, cart management and user authentication.",
    description: "A fullstack e-commerce website with features like product filtering, sorting, adding to cart and wishlist, viewing product details, site-wide search, and user authentication with email and OAuth (GitHub, Google) to track user data and orders.",
    features: [
      "View, filter and sort all products",
      "Add products to cart and wishlist",
      "View all products' details on dedicated product page",
      "Site-wide search functionality",
      "User authentication with email and OAuth (GitHub, Google)"
    ],
    technologies: [
      "TypeScript",
      "HTML",
      "CSS",
      "SvelteKit",
      "Tailwind",
      "PostgreSQL",
      "Drizzle",
      "Vercel"
    ],
    github: "https://github.com/Jakub-Pinkowski/commerce-website"
  },
  {
    name: "Trading Bot",
    label: "Flagship Backend Project",
    labelColor: "#e9c46a",
    img: trading_bot,
    summary: "Automated trading and analytics app designed to work with Interactive Brokers (IBKR) API and TradingView alerts",
    description: "This project is an automated trading and analytics app designed for working with financial data and the Interactive Brokers (IBKR) API. It focuses on streamlining the processes of trading, data fetching, analysis, and performance evaluation.",
    features: [
      "Automated trading based on external alerts",
      "Continuous analysis of trade and alert performance",
      "Fetching and preparing financial datasets for further analysis",
      "Logging trading activities and analysis operations for audit or debugging",
      "Unit tests for all modules",
      "Modular Architecture"
    ],
    technologies: ["Python"],
    github: "https://github.com/Jakub-Pinkowski/trading-bot"
  },
  {
    name: "Jules-Art",
    src: "https://jules-art.com",
    label: "Freelance Project",
    labelColor: "#8ecae6",
    img: jules_art,
    summary: "Portfolio site for an artist, featuring a responsive design with media such as images, videos, and audio.",
    description: "Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her. This project was built for a client to meet her specific requirements and aesthetic preferences. The website features a clean and modern design, intuitive navigation, and responsive layout to provide an optimal viewing experience across all devices.",
    features: [
      "Custom-built for a client",
      "Showcases artwork with images, videos, and audio.",
      "Intuitive navigation",
      "Responsive design",
      "Easy contact options for visitors"
    ],
    technologies: ["TypeScript", "HTML", "CSS", "Vue.js", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/Jules-Art"
  },
  {
    name: "Crypto Bot",
    img: crypto_bot,
    summary: "Python-based cryptocurrency trading bot with fully automated strategies and risk management.",
    description: "Personalized cryptocurrency trading bot that automates trading using predefined strategies. The bot analyzes market trends and price data in real time, executes trades on exchanges, and incorporates risk management techniques to optimize performance. No user interface, terminal control.",
    features: [
      "Automated trading logic",
      "Fetches real-time market data and executes trades",
      "Adjusts key parameters to adapt to the market",
      "Analyzes real-time price data to make trading decisions.",
      "Tracks balances and evaluates portfolio performance.",
      "Scores and enhances different strategies",
      "Unit tests for all modules"
    ],
    technologies: ["Python"],
    github: "https://github.com/Jakub-Pinkowski/crypto-bot"
  },
  {
    name: "Blogging Platform",
    src: "https://blogging-platform-steel.vercel.app",
    img: blogging_platform,
    summary: "Platform to create, edit, publish, and share engaging blog posts easily.",
    description: "A blogging platform that enables users to create accounts, write and manage blog posts, and engage with others by liking their posts. It provides an easy-to-use interface with responsive design for optimal user experience.",
    features: [
      "User authentication to create and manage accounts.",
      "Create, edit, and delete blog posts easily.",
      "Support for liking posts to engage with other users.",
      "Responsive design for seamless use across devices.",
      "Built-in database integration for secure and scalable content management."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React", "Next.js", "Firebase", "Vercel"],
    github: "https://github.com/Jakub-Pinkowski/Blogging-Platform"
  },
  {
    name: "Links Page",
    src: "https://links-page-rosy.vercel.app",
    img: links_page,
    summary: "Customizable page for listing, organizing, and sharing useful links with others.",
    description: "A social media links page inspired by Linktree. Users can register to create personalized link pages, add and organize their links, and share them via a public URL.",
    features: [
      "User registration and login to manage personalized link pages.",
      "Easily add, customize, and organize social media links.",
      "Shareable public URL for promoting your link page.",
      "Responsive user interface to adapt to all screen sizes.",
      "Easy account management for editing or updating links on the go."
    ],
    technologies: [
      "TypeScript",
      "HTML",
      "CSS",
      "Svelte",
      "SvelteKit",
      "Tailwind",
      "Firebase",
      "Vercel"
    ],
    github: "https://github.com/Jakub-Pinkowski/links-page"
  }
];
const mobile = "/_app/immutable/assets/mobile.hswaGUF5.webp";
const internet = "/_app/immutable/assets/internet.LE-58mjb.webp";
const desktop = "/_app/immutable/assets/desktop.D8qjyNYd.webp";
const studiesProjects = [
  {
    name: "Mobile Business Application",
    img: mobile,
    description: "A professional mobile CRUD application featuring a polished design and well-implemented business logic",
    technologies: ["TypeScript", "React Native", ".NET", "C#", "SQLite"],
    github: "https://github.com/Jakub-Pinkowski/mobile-business-application"
  },
  {
    name: "Internet Business Application",
    img: internet,
    description: "A professional internet CRUD application featuring a polished design and well-implemented business logic",
    technologies: ["Blazor", ".NET", "C#", "SQLite"],
    github: "https://github.com/Jakub-Pinkowski/internet-business-application"
  },
  {
    name: "Desktop Business Application",
    img: desktop,
    description: "A professional desktop CRUD application featuring a polished design and well-implemented business logic",
    technologies: [".NET", "C#", "SQLite"],
    github: "https://github.com/Jakub-Pinkowski/desktop-business-application"
  }
];
const meals = "/_app/immutable/assets/meals.wCRtyMrN.webp";
const weather = "/_app/immutable/assets/weather.C7BsrMe0.webp";
const travel_blog = "/_app/immutable/assets/travel-blog.B6j-orxO.webp";
const todo = "/_app/immutable/assets/todo.BYMFbcyW.webp";
const coach = "/_app/immutable/assets/coach.CZgHvc99.webp";
const investment_calculator = "/_app/immutable/assets/investment-calculator.BtNYl3DD.webp";
const simpleProjects = [
  {
    name: "Investment Calculator",
    src: "https://investment-calculator-28479.web.app",
    img: investment_calculator,
    description: "Investment calculator that allows you to calculate your investment income.",
    technologiesDescription: "Built with JavaScript, HTML, CSS, React and Firebase.",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/investment-calculator"
  },
  {
    name: "Weather App",
    src: "https://weather-app-11d00.web.app",
    img: weather,
    description: "Weather app that allows you to check the weather in your city",
    technologiesDescription: "Built with TypeScript, HTML, CSS, Vue.js and Firebase.",
    technologies: ["TypeScript", "HTML", "CSS", "Vue.js", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/Weather-App"
  },
  {
    name: "Meals App",
    src: "https://react-counter-64e25.web.app",
    img: meals,
    description: "Meals app that allows you to add meals to your cart and order them.",
    technologiesDescription: "Built with JavaScript, HTML, CSS, React and Firebase.",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/react-meals"
  },
  {
    name: "Travel Blog",
    src: "https://travel-blog-9cc00.web.app",
    img: travel_blog,
    description: "Travel blog website. The admin can add posts and images.",
    technologiesDescription: "Built with TypeScript, HTML, CSS, Vue.js and Firebase.",
    technologies: ["TypeScript", "HTML", "CSS", "Vue.js", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/Travel-Blog"
  },
  {
    name: "TODO App",
    src: "https://todo-app-5ce36.web.app",
    img: todo,
    description: "Simple TODO app that allows you to add, edit and delete your tasks.",
    technologiesDescription: "Built with TypeScript, HTML, CSS, Vue.js and Firebase.",
    technologies: ["TypeScript", "HTML", "CSS", "Vue.js", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/Todo-App"
  },
  {
    name: "Coaching Platform",
    src: "https://vue-udemy-section16.web.app",
    img: coach,
    description: "Find a coach website that allows you to and register as a coach or find one.",
    technologiesDescription: "Built with TypeScript, HTML, CSS, Vue.js and Firebase.",
    technologies: ["TypeScript", "HTML", "CSS", "Vue.js", "Firebase"],
    github: "https://github.com/Jakub-Pinkowski/vue-udemy"
  }
];
const tsIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABi0lEQVR4nO2YvyuEcRzHX2UyyGIQSSklg2I1GKwGm4k/QJkMyni3KTJYLQasMhksLoPBJMl2koGQ0kUOH33rUde353yfc3d8vt3nVZ+e4d7Pp++rzz3f5wcYhlErx4Aor0IWEYmkgmQO/hNiIsoQm4gyxCaiDLGJKENsIsoQm4gyxCaiDLGJtMJEpAFvd4PAKnACXAMvwBNQBA6BNaBXu8gCUM6QH9csMgl8ZsyPNltkKaX8RaRlHPte7haYAwaAHmACWAHugaFmi/x0fqjPjZebrZLrBNo1i5S83FSN/RsXDJwf6nPh5dwuNRajSD4l+wFse9eEepEO4LzKLvUObALdMYg4ugLfmu+8e4haEUdbcmN8qCLjNoXhGEQqt9k88JzSYzcmkW/6gbOUv1h0Io5pr8crikX2kuetNJa9HleaRYrJ75fAOjCfPGttAG9ej60YREJVBkZiFykBM79d31+JuHeMRWAHOE3EHpPjAZAD+upZX70izUZaVkSUV5CCgkVKoI7CGoZhUMEXtrgxn1MlgYIAAAAASUVORK5CYII=";
const jsIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO2ZTStEURjHf94WNpS3vKV8AAsbNsoX8LZgZyMLWUhWbNhQysZKFLFhYYadKIUPIMlWeYkUSl5mFgw6unWmbqczc+8Md+aMzr+ezTnneeb53WfOM+fMBSsrq1RVAYSBKCAMs6jMzcnRU2EDEhYeFvIDEq9EI+apUeYW8bM4Tm2qhN/8LEiGJGxFDJOwFTFMwlbEMAlbEcMkbEUMk7AVMUzCVuQXUm92OvUAu8Aj8AncATtAt0dM3x8eNEg+sOpxpV2R64wGGfN5P58wGSQPuFHmFoF+YB74kmO3QIfJIFXK+IHiNwwsACW/yS8TILXK+GEaMY0AKQRelblpoDiFmH+3MIVYupgrmvl7YMrjn0TjQCqBiwSdKgLMAqW5AIJ88odJWu850JQLIPFW3AWcJIB5AhpyAcStdmBf47eUTZCCNEDimlT8rjIBUixb55Ay3qAk867Z7M7rgV5NzFLF9yNokE7gUq53Tq7jMsEyYE1J5trl1ydPu874M9CsxG1TfB+CBtlO0nFUW3f5bWmqtQyMAHNyg7vnw0GD1Lgqksy+gRaXX7Xm0JjIYkrFAtsjdcCpB8Soxq8eOPOAeNPsoUC7VhEwCBzJ73xMPvENoNXDbwDYk8eTL+AFOAZm5ENKO7+//B0JQsJvfv/mZWgohU6ULdv0A1IuYSIGJCwUi0gIJ0crKyv86webRyBY+s2dEwAAAABJRU5ErkJggg==";
const htmlIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nO2YbWhOYRjH/xYtSYpZEZFPXou8LT6wEs2KqAkxfNj4QJRtPtDURIv5QHzYmkwkb0VeIspb2vJkXj4QzRLNS/FQaDS26a7/U+vuPvc5dq77PM/q/OvU07nu53dd//ucc9/XOUCsWLFixcpg/QTQnebjh4SR1gww8lrCSBNhcxC95jJ3owTsEmHLEL2WM/dFCVgdYRsRvTYxd60EbA9hlYheu5m7SgK2hbAjiF5HmXuzBGwFYecRvS4wd5EEbD5h9yxjKkMur0M8uPcZnydhZAJhLy1jDoc0MsWD+4rx8RJGhhH21TLmdEgjhR7cb4wPlTDSD0AHgC4A2R5jboU0opZZXdnM2cEaRPSeCUd5xJ9ohRX78CZr4/caxoxmrA2CekzodI94m1ZYgQ9vsDb+pGHMDMaaIagbPgX+1gqbKZBzMVnXIagThK4PMLvqGCuQcwNZDRDUAUIrDLFxAm36VQN3B2P7JY2UEVpjiM0SMHLcwD3I2HZJI8WWh7JQwIhp1k8xtlbSyCJCbxpi6wSMlFv2poWSRqYR+lSIl7r/uy2LyDPGpkJQIwn9KMSrCdCifGJsBATVH0AngL8AsgR4DZoRtWD0lMrxhy3KAAjrC5PmaOfHaEXdDsC65rPvDOf5z3CgF4RP0s4P0op6HoCV0P6jGKZeLAjrv3WH8HxDrF0rTN3fd/nhooxHHRkftLG/DLx8xtR4cZ0lfKUh9i7E0vvWwFvF2BkXRlJvgVst3XFvjkcG3jbGDrkwssvy7qAaxwUAqllYl0/xrfxWVcQ3UF37OG6nCyMlhNcH3HfWADgG4A0LV/9bHXBfqGculVNcSwm/DPe6wlxLXMDzCH8I90ow12wX8NR7R5LdcK6DHLlkJ5lL5RSXvvGlNqxqPui9aSWy+B1ANZEP2AbZNkoxqRkqBXAOwHctaZLnS/mweymHq1Utm9CejHa278rYRESkgfwYofaXFq2gTt7nVXy28vg7YZj1FjIKyEy7bFcr7bMudbUybtZjxYqFvqd/6JLnYLx3XkQAAAAASUVORK5CYII=";
const cssIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCklEQVR4nO2YXYgOYRTH/95lN7nxsbYIF7jAuiDKhmKjFZIo4oIQy8VqC5GIrEg+ikVa2cK68FW2TREXPvKRLeKCaCkXhHh3ZeViWXTqvzUdz4wxe2beTfOrqbfnPPM7z5l3Ps4MkJKSkvK/8RXArxxvrRaFvOoChby0KOQ+ZRORPJOY+56FrJ6yeUie+cx9yUJ2nLLVSJ41zF1jIdtJ2TYkz3bmrrKQraXsCJLnKHNXWMgWUnYByXORuRdYyKZSdssRG2l4i+3j8N9mbIpFIR2Lfe6IFRkV8RNAnsP/gvERFoX0o6zZEevORXS2kM8+uVsY72tRSDcAbVxwQUCyzmyvHd4C5mzjGkx4y4SDjHzDVSGPHXMGM/YGhjyidJyRb4Iq5KZjznjGHsKQq5TONPLNUoXUB8y5AkNOUbrMyLdEFXLSMWd5QCwy+yjdGGLu4QgX+0GHZxNjey0L2UDp/hBzd0coZIfDc4Cx9ZaFLKW0LsTczREKWefwnGFMTkMzZlB6LcTcigiFrHB4rjNWZlnI2ID7fRTqVCHyAqV5wtgYGDKQ0ndGvsuqkGmOOe8ZGwBDpKdqB/ADQEbFRqtFyZH8G3fVPvpBmwHwnS1KDxjziUkL1fgQtaimEK5nap9hKt6f4x8N1/9H8mI13tvRyc4GkO9w5DOmG01ZuJdijktOc25QXqrG83xaeWn7a3nXKePvZp+7lj59SjkuOc05R/kiR6w1wi23Y5MvmZrFjJ2No5BqyisdsWMR30tauK+mknHJac5Wynf5xOUUmwzgEIAPAYuX0+s0gDk+15G3zdmCGFhF+YkQc71FybMnG2LxXmqZayViYC7lDRGeQbL9Cw3MJTnNKaH8AeKnkbnkTdKcoZRn2Q3LpyBriujOMpfkNKeX48J9CmAPgOkRW4kM2xN5ibrDNsjrl5yxIEeoHMB5AF9U0izHy9lk+lHIT6A1vBF4Hd/Yvktho5AQPfkxopr9lXdB7TzPq3htlfB3o+OoN9EhLnHmnKB/K+dH3erf6nJHPSUlJQU55Te8DdvPviwFtAAAAABJRU5ErkJggg==";
const reactIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfUlEQVR4nO2abWjXVRTHP21qpFua9uB6xMgsobWwEqOInl5IholgZb6QtKZNqIhFQQ8velVGtWZGkW9cJEQpYqiUGq72ojeWWbl0SmZhWU58aGu57R9Hzg8Op3t/v99//hYs/MKF/X/33HPvufc83XMHp/H/wplAFUMU5wMvAj8AvUAJOAq0Ao3ARTn5jAKmAYuABmAuMJn/CLcBf+jiY60HWJEi0E3Ae8BfkfFtwHWDKcQ1wJ8ZQth2DHgcOEPHTwA25hzbDUwfDCFkMV+aiWQ3nwIuBcYBNwPPAr8EFrUBeBo4HuiT0/0MeB/4yvUdUeELxTQ3SWy3RgD1wOGMHd8C3AtUuvEz1N4SulVFC/KqYb42B/2FulgvgJzYzIyx89zJj6FAfGuYy0RZuAL4OSCI7PbUHGq824yZT4Gw+j0xhxD7DX2/Gm/yuxOoy+DRZOiXFSXEOLeraQHwPGCvE0Js5k4nzK/qKGJ4xNCuL0qQy5wgw1Ki/OeGrg9YaPrv1hiT9G8DRkZ4zTB0otaFoMYJIidkMRq4HfjI0fWqGkns6dK/TziadcAdysPiHkOzsyhBRrrJr1RVEd1tV/UpnWLrV17NwF3Oc31NgfjdMO4qYOFZrc/8/UlRQkgi91vOBQjdEg12EkSnAJO0TdE8a5bSHMjJ83sdP2BIlF4K/B1gLqeyRtML+31OGfxnu7HCa03kxGUNL+uayk7VWyM7tFdd8MUunVhd7iTAh2a88BKe1ZpnheZuVRefC+KVOhyDH51hiidrMd869Vu5GA8cMnxagFrn+Xa5tXQEPOe/IDFisxv4psYIK1yTM8gFAV5Vagst2hoiwXSBM/KV5vcXOvdyt6bNKfHsJBa5AU+Yvtcjx90eyGKvdWlK0n7SHbeo1FgR4i1XgwRPuj7JGIKodLv+juu/NTKZXFEtqiNCWGH8ydwfoa11dO+avl2BDTyJG136fEEgK93jJvoOqHB0S5y3eUOb9X6PujHCY4fjvT1iUzbNuT4kyIM5oukLbrL7AjTWCYgACZrNd7GDLHfcGFnD9hRtyC1Io5tsdhmCLMsQRDbF8n5+oIJY1erRY/T4xk22I6BaDU61mlUImzAudmMqVE1Lpu0xhYsENXlUq9LdzMSwvCcKGaQYqkWVGnTM2PdpTctiboT2Fke3Io+xoy7NMhKXl+C5yGQ7AwxrI8Ls07KS38D2CO/XUtRaLl9RSJDZ5AYs16DU5nQ8KyCOUu+0UtviwEmEAmKT+d2hc7/l1rQpKyCi4d+qWHKMvc6/W6M+FLGpLNRoepPwadFv/ZH0KFlLZoqSQBKzrZHjPqJBzyeNkgCWi9WBpLHK3ftt21pO0phghKbO5aTxIXccw5wy0/ilwHBOAZP0clPK0Q5oZJ+llyi5TF2lzV+syrmsTaYgfOoMsjTIrcv8fZACYaPpPC0QNBdYfOjTgNikVZWJpk/4n1WUIDbNllKNxWidfJ1b3An1SF1aEup0nq+kJSR5czk7oyg4fjBqv1I8i5WNthm6Hi3KJVjo1LJVY0QIw5wgUiQsBBsM04dT6C7RcmhC2601sHqnghLozk3hU+0EGVuUIPaqKTfFNNS5INfthJDU5fIcnrJkXr4Kw0Musvqs1GOqC5ZJ26/V+izMN2Mk4y4M57jHy6w3kpmRZ7gt+giUhY/NmFcoGKsM86MB71Whxu2rML4dVpsZnqMSX8rxMFQ2JgQKZ+L7P9A3jNC74XF9CLXOwqb0UiW5QU9c7OYZd3Fqy6HGA8J092CT1jaaV1lZzGMRu4m1Y8DVDCLq3N3Etm69e0gBOwT5J4K3c7zXHwzcDgcNslsP6OWpXnU59gLlMVZvn+t10YkAu4GXAqWoIYMxKVH+NBiK+AfD4oDkU42bcgAAAABJRU5ErkJggg==";
const nextIcon = "/_app/immutable/assets/next.BnoWImtA.png";
const vueIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJUlEQVR4nO2WzWsTQRiHR9F6q3hT9KzowaOif4AogvoHqCBYoZ/UeGhqSNNCSBRCggnpUqopEu2p7cEElPaQQkvm927XWxCN4LWip5ZeFNqRjSmU2pnZbL5a2QcGwmbm/doPHsY8PDw8PDyqAPhAREK2ksmk6O7u3nP19/dvpdPpi0yDvcfeK4szPj4uzV9deWlwABcA/JYdXl5eFj6fT9pEOBz+rGtgbGzsm+y8z+er5JDlB/DLNM1zygQAXqgmkM1mpQ309PSIVCr1QBY7mUx22Xtk56enp3XTf64bEFtaWjoB4IdiCiIYDEqLCAQC66FQ6PDuuIVC4cjw8PCG7FwoFKrEVhT/3bKs49oGqnfhkWoSuVyuMm1ZMYlEwtgdMxaLvVbduXw+r5w+gPvMKUKIwwBMVcBYLCZtYHBwcNMwjNPb8ezf9jXZ/ng8rnt0LLsmVgumaV4FsCULWigU7C+PtIloNMq3Y0UikY+yfQMDA5VYislvcs4vMzcAeKuazOTkpLSBvr4+MTExcS2dTt/s7e2V7stkMrrpZ1wVX23gDIANWfBisSiGhoakxY2Ojq4Gg8Gfsv/9fn8lhqL4NSI6yeqBiAKqCc3MzEgb0K3Z2Vnd9J+weimXy8eIqKxKFA6Hay4+Eonoiv9q52aNAMAdVbL5+Xmhes73ej8WFhaUDZimeaMhxe9o4r0qYSqVctyAYRi6b36ONRrO+fl6PKkW3yGis6wZEFHCrSc59R0Az1izANAJYFWRXIyMjIh6fAdAJ2smRNTlxpMc+s491mzcepID3+FCiEOsFRDRFZUnLS4uVhynFt9ZWVm5xFoJgDdOPWlqako3/Ves1diOUnUVpSfZvsM5VxW/blnWKdYOADzVedLc3Jxu+j7WLkqlUofOkzSr3DDfcQuA224bMBvtO83yJMmX5x3bL+g8qaW+4xYiitfQQJTtN6DxpB3Frzbdd9xCRA8dvLh32X5F/PUkUky/2DLfabQntcV33AIgu8cdeMkOCvSvJ621zXfcQkT+HY/PY3bQKJVKHQC+ENEny7KOsoMI5/wWEV1vdx0eHv8zfwAF8N+PviFlgQAAAABJRU5ErkJggg==";
const svelteIcon = "/_app/immutable/assets/svelte.vLewIHgl.png";
const sveltekitIcon = "/_app/immutable/assets/sveltekit.DVmPMah0.png";
const tailwindIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVR4nO3ZSahOYRzH8c+9pouVaSEWQqa6YmEIRRYylNiQbpGhsJGplAWSMUmxsDPExoKEDVJ21xTCQqRLGUIZIkOGV0fPrbe397rn3Puec99yvvVfvc85z/M7/+H5P89LTk5OTk5O9TAKq3EIJ3AMB7ABU9FTlTMXN1Foxb7gDOajVhXRD+djCChnj7BIFTAGz9sootiuYHhHiZiOTxUQ0WzfsQ2dsxQxI8R6IQW7jkFZiJiNrymJaLa3mBNjLd2wALNQk0TE2BAChQzsNw6iroW1RCF4tWh8VO5jszcjEYUiu4/6MmvZUTLuYxIhDSUPvw8TNaUcbr9wGRuxBpfKjLmVREgUh+txAWvRteT3XpgUxkQT/8jQc8ukvFluxpuURbz4Ry5VlD44maKQBhmzEt8qLOJi0tJbXPZ6tWMHHo9nFRLxJHg7Fj2wBOfwuuRFH9AY6v2cMsnfEn1xup0inmJYnMlqQiV4leDl77APA2MKagjPJBXRGHeO3sEDbf1aUR5sR/cYcw3AUfyM8d43WIdOcUQMxsMKxnDUm8WddxfuFon6FY4Jp7A05of5y4hQkwsVtmMJj7g1oaC0qRqNxMsURDRb5OXRUqY+g923EM4wq1pZSy124xp2xs2HZu5kIKLYzoYSXI4tJWOXJxHyMWMhhZCLi4typzYs+mfJuMgrsSnu7W9gU7ib2orD4ZYkrfz5jAdlNttCsIkSMg7TWrlrGhou2m5n5LVGGTAt1Pw0hcyUEV2wJ5yv0ygImTMvNJCVLAT9dRBRJ3qvQsk/QQdTF0ItTgNYzqJOeLIqYgoeJxQR3VENUYV0DVc3Ta0IiPathW1tELOkNvzBE7UeR3Ac+7GiWj2Qk5OTk/N/8geOlwRBXCUCYwAAAABJRU5ErkJggg==";
const sassIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2ZaYiVVRjHf+ZYk7ZpNmqlZZs0kwltEAVCaZttMG0uEVN9iDb7kE1RUVRgJVHZYmoWiZG2QKVFTRsUrR9ayMYStZW0NMcynXLKGw/8jzwc3nvnvXfed7zV/cPLvfe85zznec559gs11FBDDf9H1AMnAFOBh4GngZf1zAZagWOAPlQp81OAxcAmoJDi+QG4DOhLFeAg4D5gfUrmk543gf7bS4CDgSeAriLMbQTagBnAJcC5wBlAC3An8Fk0/7neFmAgMKuIAL8Dc4BTgJ1S0GoGNrv1h9NLmAisSRDgO2CahCwXrY6O3Vau6A8sShBgvQQwQ68Uxzt615Ej9gM+iQT4G5gJDMqA/vmO7oXkhMOAnyIhVgFjM9xjjqN9KDm51TWREC8Bu2a4x3DgD9G2W88cuwBLIyFmZxy46oC3HH3zYJljZiTEM8AOGdLvG6nUK+SAUcBfbpOvdUNZYQDwQmRze5ID7o5uw2JHVjhLBxNorwBGkhPa3UZmiDuWmGtJ4uRu6NXrMLw92PMqMJQcsdFtZvlQKewBLBeTVwPjgXHKqW4Cngd+SXDfLWWk8HtVGnA/d5t+lWJ+A/CUgmSx7PZHYC5wNtAvJR/7Az9r/cpKBLnRMfAnMCzlun3kQq9R/nQlcJqcR6nTb1YZcG+Uq9n6wMfCSgSxgPetI3I/+WE3YIv26YoEedfxYGpbEca6iLu1B8FqArAAeFIqGGOiY/YDN35cpJot9ADN7rS2lOmGLVY8GzEzPWHe++79fDduFeNq4D29u50ewjzQBncz01OkKVZQva01ZqyTlEfNi+Ydqzm/6tMEN5yp31cAt+h7e2RnFkCbgEZgcFphDgQ+jPz/oBLZ8utO54/S+Eq5XVOfvTW2SNXhVM3/Xm7W3PmnysVGu31t3m0KorFXtDW3pikr+uk2gotdodPwHmtelNrc5Wp7v+lw1Tgm6GP6vVXv2vTdbCQgHEy44YViulWfC3RIoStjbaZucaJ0t6BAZ72rO9T+MTtaq3edwJAEdx7i0gwxbOpheM3Nedzt1xAVdUcW4auPgvEyYB2wbxphhki9/ClbEniIu3ZTm4ClUSlg7r0DWOLmjHdzTnUO42O54SDo5d3wZu77CwXfkjDJzwO+dBu/qHeD3dhVGjs6EniKYkIhqjJvcHMe0JipZodu5Q29uzSlyzetKYpG541WKWqvVQOiTroZmDldax6NBLGq8xvgncgzdrnUaImSSVNPy8SPUIbRkdJDDVVbKvEWWkXM9PohV598pM2HyV68egwUwd80tkmBreCMeZQOYr4MvaBe8Tn6vljrN5TRJzjZack2DFADuiBXaTHBY5lrGoxxgkyTahTcrXQqeTR7CunJcgW/R1zZMFpGbbe0WcY/IqUQTcrEzYtuw85SgbCB9Z88dhdzBaXzdS64dcpVt7vTLcg9N0XldPB0VnCd5OibGtlBloNxSdXsPQnGS0J2aoEsYFZkExcAB7j4c72b2yJvZCXAxd0UcBXDn/a6hMJmhOu+WxMhoMGVstaw8HprtUivY4I7VfNUHiPlq0MaEjfV6hW5qwKTnSCrZciNitL+f5CbqXKMKVG2hufBav3rLEZcT4TH2qgX8S9CPXCtBGpTnjRpe/5FVkMNNdTw38U/3fHmS8CxdkcAAAAASUVORK5CYII=";
const dotNetIcon = "data:image/png;base64,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";
const blazorIcon = "/_app/immutable/assets/blazor.C2lhp6_D.png";
const prismaIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nNWaW4hNURjHfzOMa0wYRPJiPJjw4BoRL9MYHtCYCE2ivIxQbilNGA+jeXJ/QbmXhOSWFOWSxohSFIbcZ3KbMnKZMUdL36nV6ezL2mvvc/b519c0Z6/v2/u397p869sbotUG4BPwDagF8shBLQISKbaCHFN/oDkNyGuggBzSoTQQSasiRzQD6HQBeQrkE3N1B564QCStgpir1uHCdwLbtP8fEGONBn47gIyQQf5K+20WMVQ+cNsB4rO2flRrv98lhqp2GQ+XUsbQe+3YdGKkIbJyO4HUpLRfrx27Qox01mOGKktp31vSluTxCcRAczwg1HoyII1fjdbmDFlWX+CtB8gzB99CoFWDVTNe1rTXx8J3zMW/Tmt3hCxpEtDhA2SVS4xBwA9pp2IVk2F1BR76gEgIsJt2a233k2Ft8QnxS9YNNw3TsgHVfmiGGBgJ/PQJcs9nzIOaTz0ZkEozrvuEULbLZ1yVh7WLTxtQFDEHyw0glC0xiH1S89saIcP/u6Svxn7MZBYqAf6KX6usM5HohCHElwAVk/Oa/8YoIMoMIZRdDnCecdoWWRUueoYJ0QtoCgAStJ9f02KorUFoqg8AoazconCREHsDdAsDYizwJwBEp+UUekuLtcwWogvQGPBpPLc8d3lKLHUtgbUuIISy49jrvhavMmiQ4cB3C5DVIYBUaPEeBS1+X7CAUDY5BJA84LEWc7ZpgPmWECqT7UE4WqrFvWPqfMASpIFw9z1NWuyZJs7zLEH2EK5WarHVYmmk0xYgqjuEqQJ5p5KMP8XEucjhJY0fUxuvsLVWi3/O1HluAIggGa/ffK/FpnR0yhDkKtFph3aew6bOqkL40QBkezQMFEqXskqBTLqYKp+GoTzZm2wGbqZJXAM/+aM+QQZaXLyaYBZLxdFtolHryqigJ+kHvPOAUCcwkcpop0p3bND264k09hLYJ0/cen9S6vGmVu3pvTRYMln1hL+6xGqXt1+bgPFEIL2QlmprHFKMaVKsbvS4Ec0CWBllBSWpwpRVNpEmOy2WwvVFKba53fUbUi0ZQxZU6nBn1Rh64TGOPsgXEQsycdfDzJA7pEvVSReL3ZdBfWQmSXfxLTKFLpQPa2KvEqm2t8lf9U5wYi58Y0Lc9Q9kS6Hd6ilkXwAAAABJRU5ErkJggg==";
const drizzleIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAABmJLR0QA/wD/AP+gvaeTAAAGvElEQVR4nO3daaxUZxnA8f9c4bJoBVdEQFs1opjiRmtc2oTY1DaC4BYXGlyjEhIMGEyxKMGFpmmCW1MMxALBEtHEL2qUAMYFDSryoVptrYK2aiRhEcFKWO744WV05M7cec6dM7wzd/6/5Hy7ec7zzHPO3Hnf855zQJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIktauSO4EeNAd4L3AtcBrYDdwPnM2Y02gNArcBNwNTgd8AW4EHcyal5lYC54HqZduDwHMy5jUas4BfM7yW88DHMualJhYyvFn12yFgXLbsihkH/JKR63lTtuw0zETgCCM3rJeatpzWtfwiW3Ya5hO0blgVuDNXggU8BThG61ouABM6ncxAp3cwBkwH1gT/thc+z3XA0wJ/5wC1S2wl9u1XBd6SKceoFwHniNVyKFOOqjMPuEisYYeB8XnSDPsu8ZPpPZly1CUV4MfEG/bWPGmG3US8lkP0xs+JMe1dxBu2n+7+zTSONMkcrefGPGmqZhLwJ2LNugi8MkuWcR8lfvDtypSj6nyKeMM2Z8oxKjrtUgX+DVydJUv91wzgDLGG/ZM0TdPN7iF+Mn02U46qs4N4w1ZnyjHqxcSnXf4OPDlPmqp5FTBErGF/5ApcKWjT94mfTEsz5ahLKqTRbLRhi/OkGbaAeC2/wmmX7JYQb9gPMuUYNR54iFgtQ8ANedJUzSTgz8QadgGYmyfNsFXET6admXJUnfXEG7YpU45RTwWOE6vlceC5edJUzUzi0y6ngGflSTNsE/GTaX2mHFVnJ/GGrcqUY9QcGt8y0Gj7C/DEPGn2ppmks/sIcIK0YncZ8IQ2Yr6a+LTLHyhv2qVCmvb4CekqxWPANuCFbcbdTfxkWtLmvvrKPNJB1+iD/B6jOzAqwM+bxGy0LWyrgv8ZoPm37hng9aOMu6hJzEbbAbp78URXmUxaazfSB7puFHGXtohZv+1rq4L/t6LFvo4CUwrGHAQebhG3tg0Br2u3iH6yjtYf6lGKndGTgUcDcaukaZdrS6gD4BnAycA+P1gw7upAzNq2o90i+slM4F/EPthpBeJ+JhizSrqYX5avBPf5xQIxnwn8Ixj3cXrv/uWsvkb830r0Qvos4gf1CeDp5ZTCXNK3aWS/GwrE3RyMWSUtM1NQkRHqgQJxdwVjVkkLOcuyr8B+owORlxI/qB/DaZewCumgijZsUTDua4gf1L+jvJuMFgf3WTuZor9n9xSI+85ySukPnRihVmj9OIr67Y3llMIg8PvgPouMUN8cjFkFforTLmGT6czCgFuCMaukdXRl+XiB/RYZoR4MxhwCri+hjr5RZIR6b4G4dwdjnidd0ipDp0aoU4n/lNheTin9oci0y0mKjVCj90Z8qYQ6arYE91ml2Ah1ejDmaeDZJdTRN75OvGErC8b+UCDmcdJypjK8jM6NUCukezhaxV1bQh19o8i0yyMUv/47hXTFZKS4H2m3iDo/bLGv+m00I9RPtoj5CGmhrQIGSKtbog1bMMr9zCf9W2oUcwvljRTf1mQfjbafjXK/g8C3m8Q8Svev2u4q7yPesL1t7uv5pKsHR0iN2ks6YMoySPr2idTS7gh1gHTdeD9pWddDwOcpdlmy7z0J+CuxhpW5MKBT1hA/mbblSVH1NhBv2Jcz5Rg1jbRsP1KLI9QucA3peSSRhpW5MKBT7iN+Mt2RKUfV+Sbxhq3IlGPUy4k/zPJR0hUfZfRa8iwM6JQfET+Z3p4pR10yQLGFAbfmSTPsHcRrcWFAF/gA8YbtyZRjVPQdIlXSv+jr8qSpmquAvxFr2HngJXnSDFtL/GT6aqYcVecu4g37QqYco2bQ/MrK5VsvPMxyzHse6a2SkYadIPZClZy2Ez+Zbs+Uo+p8i3jDlmfKMeoVFHuHyMQ8aapmPvGD77d097RLhfRYjWg93f4GpTFvgPgS8irwhjxphr2beC3d/g6RvvB+4g37TqYcoyYQv2flIukKiTJr9GbuRts5YHamHKOKvEFpS6YcVWcS8UtuGzPlWMRGYrWcwnV5LV2JJ6NXSQdgK8eAT3c4lzJcDP7d50gLXtUFIk85WJYtu2Iiz+Er82GWKkGrd1YcoL0nnV5J40ivM21WyxDdP4rvSyto/Nqog/TeJapZwAMMr+Us8OGMefWcKz0/NZv0Ju4XkB5Huxf4Bulej14zgXQ75XzSQOth0j0ehzPmJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSGPYfsd6xIyVh7rcAAAAASUVORK5CYII=";
const postgresqlIcon = "data:image/png;base64,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";
const sqliteIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR4nO2ZyysGURjGf0RKoVyKUnJZiOzsFMrSxkJh4x+w90+IUmxsrH2syEZCLqVcFpSUjWyUhc335Z6jqWfqNAuG5HtxfvXWmXfOO52n58yZmTMQCAQ+SzWwCOQAZyxyGls0xg9ZNDBg90Fk0giJnWjEHo0aWzZN51i1VVza8QUhP4QLjhjDBUeM4YIjxnDBEWO44EhKKoE2oCSRrwc6gGIvVw40AVUYcqQGWPPqtpQvAGaBV+UvvDfqMeUmLAmZV/9NYAoYV35E+TNgVe1ly0Iu1b8skd9Qvhso1XfOI1BhVci++k8CRd60egBevHvmQP26rArpA55VswvU6b6Jjm+9fuvKDVgVEtEDXKtuTytYUsimcv2WhSAnblTbCtzLqXhqnepcp3UhEceqbQa21e7V9s0TcCdhJoVsAUvAjuqOdLOP6vgKOFR7WjWxkHNt7URRm08hhXrQOS2tK0CDd27GWwiiqTaccMSPlnwKiSn1lt4k0fNlEDjRdec+eW1zL42RQ0NA+28X8l24IMQYLjhiDBccMYYLjhjDBUd+qyO5v/IzNPPOb2ErsZBGSJXEZA0M2CUiKxFf2aEMBP41b2TEmm8/VKjwAAAAAElFTkSuQmCC";
const vercelIcon = "data:image/png;base64,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";
const firebaseIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nNWZW4hOURTHf5hxmxFyiYxLQ+6lQUZIikihJBkvwoh5GGQklEQi5ZaUQh54QB68mObBwySNF/dCQyZCconGqBn32Vq1pk67fc53zvnOmc/3r/XynbX2/q/vrL32WutANBwEJpDHqAeukqfoCrQA7UA5eYhJgFG5QR5inccBkfnkGU5bDtwBuoSw2xNSL3XctxwQWZHBZoHqLSPH6An8cjjwHCjwsZHfn6jeY00COcMsB/kOqfSx2WbpVUTYrx9wiASxNcCBN0B3S38Q0BzhbXkxGHik9omdnUsBDjQ4Nhqod4atuz7DPkM13Dr0S5NyoMmH/F9guo/NXof+a6CHj/4oxz6ZkkQoDNDb1+XA2QC7YuCjpf8JGOlzSb5zrH8gCQcW+5CXEBmSwXaLR/89MNmhM1Udc+1Rm4QDrlAQqbH0egO7rd/kcL8CXvrE8xzga8D5kreSNWodCz8DCi29/XpXjLZ+XwQMc6y7EGgNIN8hkpWygh3HRsPKi+EeMpKxMmEJ8D0EeaN/QGyUhozLq57n7RrXfljtc6sbH9mVjQOrrMV+AuMsnbmOTY/6rFelqddEkCvZOHDcWuyI9Vzqm3uWznWgl2OtzQHp2ASI3OCx0eBZSM5CX+v5Jmuzy47DLdgZg7hRkTfWJw75AitLVDoKLm/+PuOoOKXEOJYFeaMyO44DZZ4FHjjInfA8P+Woh7oB5xIgb4DqOA5UeRaQg+rFeE8mOeywFfIXEiJvgPNxHDgfkNfr9EBudzyTYu1aguSNRkBkSFnb5ii+5BL6A2xw2BTpxMIkLD8dPUcgipWk1EFeyCJPgTUOGznUt1Mgb1SmRHFgnnZaUqDZ1eVyh77UKw9TJG+AtVEc2KG3sBfizDSHbgnQmDJ5A5yM4kBNyH7U1UWlJbeiOBCmhJ3o00WlJS1JNvllAV1UmjImCfIzgC85IG+AldmSl+z0LUfkjX5giY0oXVRaUheXfEXELiot+RCH/MYYXVQa0gQsjUq+OmYXlaS0Avt0Qh4JY30mEp0pl/Wmj40i9b6tk4k36twoMZRoy5j2WWjWUX6YMXwsyCT6ZgrE24GLSUzhwkKywYuEyN8FZpIDFGqKjVsTfdZwyem3M0F/bex/hCT+W2t7e8aUc4zQOA66N+p9vhH8Vyi3Jnoib336aP5XSOMhU2jJ5/LdwDUrTQT/AAIUlcPwpS0+AAAAAElFTkSuQmCC";
const gitIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVR4nO2azW4TMRDH/+TQcAEEFR9p4A4tj1DVgifgQAOIwpFKJX0eTuHMrbSHiAeApj0UrgSBVEBCKp9KU85Blv6WRpbtbHYTr1M60qquZ7zxT/Z4ZqwFTuT/kQUAWwD6AA4BbAKYx5SJIsDAevrUTYUoAEec+AsAcwDqbA+oSx5mUazEcwAVoTsF4Bl1fwHcRqKyJFbChjCi+1qpr8x1AN84yVcATnvskl2ZJQA32dZ/DzjJNoCqZ0xyK6M4kQMPzGcAP+g3HQDrAi4ZGCV8YhCAsZ93PMWSgFGWY7cdMDog3gMwC6AG4C6ALu12AMyUDaMERIsTqXpgbDkPYJ92T0R/dBjlgDBSpU9o3aPAO+7T5rXVHw0mBGHkF/UXA++5RJufDl1l0jBZICSI9gufXKGNPs0QE0ZlhNDyhnaNgM1j2uzHjDNqBAgtq2KSFzw20YOmGhECPFJ3OOYTHdvIgzIyAJUDwsicgNGPEd3+HjMDUAUg5Mq4QEIwY80AxgFhT9z+34YJZQBv86zMgiiKikKEQNoOGFcG0KVdU/RLmL7vDmBLlKdFIUIgMgNYCYxfpo32GSkVUTa/dA00q2H25aRAsmYANdroGxhbrlLXcw08LAFkNgNIz6G7FgLZjLS1smYAy7TZDmytDdfA+UjObmcA2rFDzv7U4+x6B90o8/i1M4Auj1y9lWpciQ/U7RUpwCYdEM3E6gx6rmA4YAwpXBIXTVE6AZAObcCjuMk+/XtHbDfHWQrngdET2+WYjwAeCt0KE0m7Zg9JpawMeFVA6ErQlsvU2TX7RCHywHQyHKumZtdHMGJXiYsiYPrudbX8GaFm/53xSvUWxixZVsbEoTOB95wLpB6VVG5STGy4E3hHIxCxWzEgssCss/+9J2Lr3OorbdbKhBgGUxVB7guj9Fk+DQFRKGLHghkWsfdEQCwdYhjMDKPzNg+APttrKa1E3qM56hEbAyZZiFFgkofIAjM1EL4PBurT+MHAsfqEQ94BbHCr9dj21tgnctzkH5aV11Ka96SZAAAAAElFTkSuQmCC";
const pythonIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVR4nO2au2tUQRSHvyLqggEDickmf4LaGDRb24gRtfAFSkrjK9FKfEAaa2MhYq1RLER8VL6IFmrpO/jC2JhijZr4QqOCWRn4LVw2d29msjczm5gPBvbunDlzftzhzpyZgTlmN63AEeAK8Ap4D4ypmN+vgatAD5CjCtkAPAIKjmUA2EQVMA/oiwQ2DJwEtgNLgCYgo9Kk/7YBJ4B8pN0FYH5IIecVyFegyzGYGqAT+CwfFwnEegVgAllegZ9lwIh8bSQAN9R5t57XAkMq7Y6+dsvXTQIwqs4b9DwUGfPvHH01qN0oASgGTQpC4vx5o7TjdgkwZU0K/ryRdsfBhdgWW3/emTVCbAkqpAbYA9yPzLyVFlshhZhiYrin+cbEZkUL8Dil4NMSUogUszhtnsxZLfBSDd4Am4FF+CFJsIlhCzAomxeKtSzHZfgcqMcvNm+uXrEZu95yRnXAT+AvsAL/2A7BlcC4Yo0dLZ1y1E8YXL5at2W7I66ymCDtxT8tkbzGhi7Zn4mrHFCleXW+Oew4GnKyfxpXOaxKk5L6fBOHgN/qu92yXVb2ZkNjAr9UafJrF1YDt4BPFc4zRx36zKjNWFpCeioM/puGk2tGmUkS4jq0Vsn+D3AAaMQfWfVtdmIm8EyVbZbO+mV/EP/k1PeTpM+v+bTZ8F32vlcAaMPD9H2ahAnRTDZUef5wJ2lCLC5Rxi3nklBC2hTjj6QFba/DojGEkAatfE2/x5IMayOGg1o6mzcVWkgdsBV4G1nGL5ysUbPjzvpkpJ2gPbBJrIqYdHIXcDeyoxhSyKhi2emS6triKqRqKUzTG/HOfyfElhknpNw5yowTUu74IZiQ4md5cQpCGvU8QgCulxy92RJ3jrJfvq4R8DD0S4WHoa3aPTG+1hGIc5GUtdvxeHoBsE9tjY+zBKSm5MLAB+AU0AEsVUpavDCQ1X8dsvkYadc3HUuPqQ6zqVzheKi2VXup5rJ29fORSzV5/XdJNsZ2jlnLPwcj1oREgrHoAAAAAElFTkSuQmCC";
const reactNativeIcon = "/_app/immutable/assets/react-native.BzA1WWVc.png";
const cSharpIcon = "/_app/immutable/assets/csharp.CDMLWrE8.png";
const icons = [
  // Frontend Languages
  { name: "TypeScript", src: tsIcon },
  { name: "JavaScript", src: jsIcon },
  { name: "HTML", src: htmlIcon },
  { name: "CSS", src: cssIcon },
  // Frontend Frameworks and Libraries
  { name: "React", src: reactIcon },
  { name: "Next.js", src: nextIcon },
  { name: "Vue.js", src: vueIcon },
  { name: "Svelte", src: svelteIcon },
  { name: "SvelteKit", src: sveltekitIcon },
  // Styling Frameworks and Libraries
  { name: "Tailwind", src: tailwindIcon },
  { name: "SASS", src: sassIcon },
  // Backend Frameworks and Databases
  { name: ".NET", src: dotNetIcon },
  { name: "Blazor", src: blazorIcon },
  { name: "Prisma", src: prismaIcon },
  { name: "Drizzle", src: drizzleIcon },
  { name: "PostgreSQL", src: postgresqlIcon },
  { name: "SQLite", src: sqliteIcon },
  // Deployment and Hosting
  { name: "Vercel", src: vercelIcon },
  { name: "Firebase", src: firebaseIcon },
  // Supporting Tools
  { name: "Git", src: gitIcon },
  { name: "GitHub", src: githubIcon },
  { name: "Python", src: pythonIcon },
  { name: "React Native", src: reactNativeIcon },
  { name: "C#", src: cSharpIcon }
];
const load = (async () => {
  return {
    mainProjects,
    studiesProjects,
    simpleProjects,
    icons
  };
});
export {
  load
};
