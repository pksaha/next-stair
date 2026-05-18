import { Link } from "@/i18n/navigation"

const FOOTER_LINKS = {
  "AI Tools": [
    { label: "AI Headshot Generator",
      href: "/ai-image-effects/ai-headshot-generator" },
    { label: "AI Avatar Generator",
      href: "/ai-image-effects/ai-avatar-generator" },
    { label: "Pixar AI Generator",
      href: "/ai-image-effects/pixar-ai-generator" },
    { label: "AI Cosplay Generator",
      href: "/ai-image-effects/ai-cosplay-generator" },
    { label: "Anime to Real Life",
      href: "/ai-image-effects/anime-to-real" },
    { label: "AI Hairstyle Changer",
      href: "/ai-image-effects/ai-hairstyle-changer" },
    { label: "View all 20 tools →",
      href: "/ai-image-effects" },
  ],
  "Resources": [
    { label: "Blog",           href: "/blog" },
    { label: "Prompt Gallery", href: "/prompts" },
    { label: "Pricing",        href: "/pricing" },
    { label: "Dashboard",      href: "/dashboard" },
  ],
  "Blog Guides": [
    { label: "Anime Portrait Prompts",
      href: "/blog/12-anime-style-ai-portrait-prompts" },
    { label: "Renaissance AI Prompts",
      href: "/blog/10-renaissance-painting-ai-portrait-prompts" },
    { label: "Instagram AI Prompts",
      href: "/blog/15-instagram-grid-aesthetic-ai-photo-prompts" },
    { label: "YouTube Thumbnail Prompts",
      href: "/blog/10-youtube-thumbnail-ai-photo-prompts" },
    { label: "Rembrandt Portrait Prompts",
      href: "/blog/10-rembrandt-style-dark-dramatic-portrait-prompts" },
  ],
  "Legal": [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy",    href: "/cookies" },
    { label: "Contact",          href: "/contact" },
  ],
}

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" },
  { code: "hi", label: "हिन्दी" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "Русский" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "pt", label: "Português" },
]

export function Footer({ locale }: { locale: string }) {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(212,160,23,0.12)",
        marginTop: "auto",
      }}
    >
      {/* Main grid */}
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ paddingTop: "64px", paddingBottom: "48px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
          }}
        >

          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: 32, height: 32,
                    background:
                      "linear-gradient(135deg, #F5C842, #D4A017)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    boxShadow: "0 0 12px rgba(212,160,23,0.4)",
                  }}
                >
                  ✦
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    letterSpacing: "-0.02em",
                    color: "#fff",
                  }}
                >
                  next-stair
                </span>
              </div>
            </Link>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                marginBottom: "20px",
                maxWidth: "200px",
              }}
            >
              20 AI image tools. 11 languages. Free to start.
            </p>

            {/* Language switcher */}
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Language
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {LANGUAGES.map((lang) => (
                  <a
                    key={lang.code}
                    href={`/${lang.code}`}
                    style={{
                      fontSize: "0.75rem",
                      color:
                        locale === lang.code
                          ? "#D4A017"
                          : "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      background:
                        locale === lang.code
                          ? "rgba(212,160,23,0.12)"
                          : "transparent",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {lang.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {category}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      className="hover:!text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Divider */}
      <hr className="divider-gold" />

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: "0.8125rem",
          }}
        >
          © {new Date().getFullYear()} next-stair.
          All rights reserved.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.8125rem",
                textDecoration: "none",
              }}
              className="hover:!text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: "0.8125rem",
          }}
        >
          Powered by{" "}
          <span style={{ color: "var(--gold)" }}>gpt-image-1</span>
        </p>
      </div>

    </footer>
  )
}
