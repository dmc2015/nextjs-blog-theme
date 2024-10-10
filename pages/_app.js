import '../css/main.css';
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically load the Netlify Identity script
    const script = document.createElement("script");
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Netlify Identity after the script is loaded
    script.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    };
  }, []);

  return <Component {...pageProps} />;
}
