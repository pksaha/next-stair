export type PromptCategory =
  | "portrait"
  | "anime"
  | "social-media"
  | "artistic"
  | "product"
  | "cinematic"

export type PromptItem = {
  id: string
  title: string
  prompt: string
  category: PromptCategory
  style: string
  toolSlug: string
  blogSlug?: string
  tags: string[]
}

export const PROMPT_CATEGORIES: {
  key: PromptCategory
  label: string
  emoji: string
}[] = [
  { key: "portrait",     label: "Portrait",     emoji: "👤" },
  { key: "anime",        label: "Anime",        emoji: "🌸" },
  { key: "social-media", label: "Social Media", emoji: "📱" },
  { key: "artistic",     label: "Artistic",     emoji: "🎨" },
  { key: "product",      label: "Product",      emoji: "📦" },
  { key: "cinematic",    label: "Cinematic",    emoji: "🎬" },
]

export const ALL_PROMPTS: PromptItem[] = [
  // ── Portrait ───────────────────────────────────────────
  {
    id: "p-001",
    title: "Professional LinkedIn Headshot",
    prompt:
      "Professional corporate headshot, business attire, " +
      "clean grey seamless background, three-point studio " +
      "lighting with soft fill, sharp focus on eyes, " +
      "natural skin retouching, 85mm portrait lens, " +
      "confident approachable expression, LinkedIn-ready",
    category: "portrait",
    style: "Corporate",
    toolSlug: "ai-headshot-generator",
    blogSlug: "12-chatgpt-prompts-modern-realistic-portraits",
    tags: ["headshot", "professional", "linkedin"],
  },
  {
    id: "p-002",
    title: "Golden Hour Portrait",
    prompt:
      "Portrait at golden hour, warm amber backlight " +
      "creating rim around dark hair, sun flare partially " +
      "in frame, warm glowing skin, relaxed natural " +
      "expression, outdoor park setting softly blurred, " +
      "warm film colour grade, lifestyle editorial quality",
    category: "portrait",
    style: "Golden hour",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-gemini-ai-prompts-female-portraits",
    tags: ["golden-hour", "outdoor", "warm"],
  },
  {
    id: "p-003",
    title: "Rembrandt Dramatic Light",
    prompt:
      "Rembrandt lighting portrait, single warm candlelight " +
      "source from upper right, characteristic triangle of " +
      "light on cheek, deep dark background, aged face " +
      "with wisdom, simple dark clothing, golden warm skin " +
      "tones, oil paint texture, Dutch Golden Age quality",
    category: "portrait",
    style: "Rembrandt",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "10-rembrandt-style-dark-dramatic-portrait-prompts",
    tags: ["rembrandt", "dramatic", "chiaroscuro"],
  },
  {
    id: "p-004",
    title: "Soft Beauty Editorial",
    prompt:
      "Soft editorial beauty portrait, diffused natural " +
      "window light, dewy skin with natural freckles, " +
      "minimal makeup, loose hair, cream and blush palette, " +
      "clean white background, magazine beauty editorial, " +
      "85mm lens, shallow depth of field",
    category: "portrait",
    style: "Beauty editorial",
    toolSlug: "ai-headshot-generator",
    blogSlug: "15-gemini-ai-prompts-female-portraits",
    tags: ["beauty", "soft", "editorial"],
  },
  {
    id: "p-005",
    title: "Dark Glamour Portrait",
    prompt:
      "Dark glamour portrait, dramatic chiaroscuro lighting, " +
      "deep jewel tones of ruby and emerald, smoky eye " +
      "makeup, vintage Hollywood wave hair, velvet garment, " +
      "rich dark background, high contrast film noir " +
      "aesthetic, confident alluring expression",
    category: "portrait",
    style: "Dark glamour",
    toolSlug: "ai-professional-photo-generator",
    tags: ["glamour", "dark", "hollywood"],
  },
  {
    id: "p-006",
    title: "Cultural Fashion Portrait",
    prompt:
      "Portrait in traditional South Asian attire, silk " +
      "saree with gold zari detail, warm evening light, " +
      "jasmine flowers in dark hair, gold jewellery, " +
      "dignified graceful expression, rich warm colour " +
      "palette of deep red and gold, professional quality",
    category: "portrait",
    style: "Cultural fashion",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-gemini-ai-prompts-female-portraits",
    tags: ["cultural", "saree", "traditional"],
  },
  {
    id: "p-007",
    title: "Mood Portrait — Melancholy",
    prompt:
      "Expressive portrait of melancholy, cool grey and " +
      "blue colour palette, overcast diffused light, person " +
      "looking away from camera, weight in expression, " +
      "rain on window implied, desaturated tones, quiet " +
      "and still composition, emotional depth without drama",
    category: "portrait",
    style: "Mood",
    toolSlug: "ai-headshot-generator",
    blogSlug: "10-gemini-ai-prompts-expressive-mood-portraits",
    tags: ["mood", "melancholy", "emotional"],
  },
  {
    id: "p-008",
    title: "Street Style Urban Portrait",
    prompt:
      "Urban street style portrait, city background blurred, " +
      "confident casual styling, natural afternoon light, " +
      "authentic unposed feeling, fashion influencer " +
      "aesthetic, airy colour grade, approachable editorial, " +
      "shallow depth of field, 35mm lens",
    category: "portrait",
    style: "Street style",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-gemini-ai-photo-prompts-for-boys",
    tags: ["street", "urban", "fashion"],
  },

  // ── Anime ──────────────────────────────────────────────
  {
    id: "a-001",
    title: "Soft Shojo Portrait",
    prompt:
      "Soft shojo anime portrait, large expressive eyes " +
      "with detailed iris reflections, delicate features, " +
      "pastel pink and lavender colour palette, cherry " +
      "blossom petals falling, clean line art, professional " +
      "manga illustration, high resolution",
    category: "anime",
    style: "Shojo",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["shojo", "soft", "pastel"],
  },
  {
    id: "a-002",
    title: "Bold Shonen Character",
    prompt:
      "Dynamic shonen anime portrait, intense determined " +
      "expression, spiky hair with wind motion, dramatic " +
      "side lighting, high contrast colours, speed lines " +
      "in background, battle-ready pose, detailed clothing, " +
      "professional anime studio quality",
    category: "anime",
    style: "Shonen",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["shonen", "action", "dynamic"],
  },
  {
    id: "a-003",
    title: "Studio Ghibli Inspired",
    prompt:
      "Studio Ghibli inspired portrait, soft watercolour " +
      "aesthetic, warm natural lighting, slightly freckled " +
      "skin, braided hair with wildflowers, nature " +
      "background with soft bokeh, gentle expression, " +
      "Hayao Miyazaki illustration style, hand-painted",
    category: "anime",
    style: "Ghibli",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["ghibli", "watercolour", "nature"],
  },
  {
    id: "a-004",
    title: "Cyberpunk Anime",
    prompt:
      "Cyberpunk anime portrait, neon city backdrop, " +
      "holographic visor reflecting purple and cyan light, " +
      "futuristic jacket with LED accents, rain-slicked " +
      "streets in background, high contrast dramatic " +
      "lighting, dystopian atmosphere, ultra detailed",
    category: "anime",
    style: "Cyberpunk",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["cyberpunk", "neon", "futuristic"],
  },
  {
    id: "a-005",
    title: "Magical Girl",
    prompt:
      "Magical girl anime portrait, sparkles and star " +
      "particles, elaborate costume with ribbons and gems, " +
      "confident joyful expression, glowing wand, pastel " +
      "rainbow colour scheme, transparent wings, Sailor " +
      "Moon aesthetic, dynamic pose, radiant magical aura",
    category: "anime",
    style: "Magical girl",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["magical-girl", "pastel", "sparkles"],
  },
  {
    id: "a-006",
    title: "Anime to Real — Realistic Convert",
    prompt:
      "Transform this anime character into a realistic " +
      "human portrait, keep same pose and outfit style, " +
      "convert anime facial features into natural human " +
      "proportions, realistic skin texture, natural eye " +
      "shape, cinematic lighting, 85mm lens, photorealistic",
    category: "anime",
    style: "Anime to real",
    toolSlug: "anime-to-real",
    tags: ["anime-to-real", "realistic", "convert"],
  },
  {
    id: "a-007",
    title: "Dark Fantasy Warrior",
    prompt:
      "Dark fantasy anime warrior, battle-worn armour with " +
      "intricate engravings, crimson cloak in wind motion, " +
      "moonlit forest background, cold determined gaze, " +
      "scar across cheekbone, hand on sword hilt, dramatic " +
      "chiaroscuro, Berserk-inspired aesthetic",
    category: "anime",
    style: "Dark fantasy",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-anime-style-ai-portrait-prompts",
    tags: ["dark-fantasy", "warrior", "dramatic"],
  },
  {
    id: "a-008",
    title: "AI Cosplay — Any Character",
    prompt:
      "Transform the uploaded portrait so the person is " +
      "realistically cosplaying as the described character, " +
      "professional photo studio backdrop, softbox lighting, " +
      "sharp focus, accurate costume details, fabric " +
      "texture, photorealistic, high resolution",
    category: "anime",
    style: "Cosplay",
    toolSlug: "ai-cosplay-generator",
    tags: ["cosplay", "character", "realistic"],
  },

  // ── Social Media ───────────────────────────────────────
  {
    id: "s-001",
    title: "YouTube Reaction Thumbnail",
    prompt:
      "YouTube thumbnail, person with exaggerated shocked " +
      "expression, wide open eyes, direct camera eye " +
      "contact, bright yellow background, high contrast " +
      "bold colours, red arrow pointing to subject, " +
      "high saturation, clickbait thumbnail style, " +
      "16:9 aspect ratio, 1280x720",
    category: "social-media",
    style: "YouTube thumbnail",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "10-youtube-thumbnail-ai-photo-prompts",
    tags: ["youtube", "thumbnail", "reaction"],
  },
  {
    id: "s-002",
    title: "Instagram Golden Hour Lifestyle",
    prompt:
      "Instagram portrait, golden hour sunlight at 5pm, " +
      "warm amber and orange tones, sun flare in frame, " +
      "shallow depth of field, subject rim-lit, outdoor " +
      "setting, film grain texture, warm colour grade, " +
      "square crop composition",
    category: "social-media",
    style: "Instagram golden hour",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-instagram-grid-aesthetic-ai-photo-prompts",
    tags: ["instagram", "golden-hour", "lifestyle"],
  },
  {
    id: "s-003",
    title: "Pinterest Cottagecore Flat Lay",
    prompt:
      "Pinterest flat lay, foraged herbs and wildflowers " +
      "on aged linen, morning dew on petals, soft natural " +
      "window light, botanical illustration style, earthy " +
      "greens and creams, editorial food photography, " +
      "dried lavender, vintage scissors and twine, " +
      "2:3 vertical Pinterest format",
    category: "social-media",
    style: "Pinterest cottagecore",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "12-pinterest-worthy-lifestyle-ai-photo-prompts",
    tags: ["pinterest", "cottagecore", "flat-lay"],
  },
  {
    id: "s-004",
    title: "Dark Moody Instagram Editorial",
    prompt:
      "Instagram fashion editorial, dark moody studio " +
      "lighting, single hard light source, deep shadows, " +
      "dramatic black and dark green colour palette, " +
      "model in artistic pose, fashion magazine aesthetic, " +
      "high contrast, square format, editorial minimalism",
    category: "social-media",
    style: "Dark moody",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-instagram-grid-aesthetic-ai-photo-prompts",
    tags: ["instagram", "dark-moody", "editorial"],
  },
  {
    id: "s-005",
    title: "YouTube Tech Review Thumbnail",
    prompt:
      "YouTube tech review thumbnail, person pointing at " +
      "new device with excited expression, clean white " +
      "background, product with glowing highlight, " +
      "futuristic blue and white colour scheme, bold " +
      "contrast, modern tech aesthetic, 16:9, 1280x720",
    category: "social-media",
    style: "YouTube tech",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "10-youtube-thumbnail-ai-photo-prompts",
    tags: ["youtube", "tech", "thumbnail"],
  },
  {
    id: "s-006",
    title: "Pinterest Old Money Portrait",
    prompt:
      "Pinterest old money aesthetic portrait, linen blazer " +
      "and pearl earrings, coastal New England setting, " +
      "white wooden house in background, soft overcast " +
      "natural light, understated elegance, quiet luxury, " +
      "no logos, refined and timeless, 2:3 vertical",
    category: "social-media",
    style: "Old money",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "12-pinterest-worthy-lifestyle-ai-photo-prompts",
    tags: ["pinterest", "old-money", "luxury"],
  },
  {
    id: "s-007",
    title: "AI Avatar for Social Profile",
    prompt:
      "Digital avatar portrait, stylised illustration, " +
      "vibrant colours, clean design, social media profile " +
      "picture style, centered composition, high quality, " +
      "describe your preferred style — anime, pixel art, " +
      "cartoon, cyberpunk, or fantasy",
    category: "social-media",
    style: "Profile avatar",
    toolSlug: "ai-avatar-generator",
    tags: ["avatar", "profile", "social"],
  },
  {
    id: "s-008",
    title: "Pastel Minimal Product Shot",
    prompt:
      "Instagram product photography, soft pastel pink " +
      "background, clean diffused studio lighting, minimal " +
      "styling, product centred with light shadows, airy " +
      "clean aesthetic, beauty product implied, square " +
      "format, professional commercial photography",
    category: "social-media",
    style: "Pastel minimal",
    toolSlug: "ai-background-remover",
    blogSlug: "15-instagram-grid-aesthetic-ai-photo-prompts",
    tags: ["product", "pastel", "minimal"],
  },

  // ── Artistic ───────────────────────────────────────────
  {
    id: "art-001",
    title: "Da Vinci Sfumato Portrait",
    prompt:
      "Renaissance portrait in the style of Leonardo da " +
      "Vinci, sfumato technique with soft blurred " +
      "transitions, three-quarter pose, subtle enigmatic " +
      "expression, dark landscape through window, rich " +
      "earth tones, oil on wood panel texture, masterpiece",
    category: "artistic",
    style: "Renaissance",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "10-renaissance-painting-ai-portrait-prompts",
    tags: ["renaissance", "da-vinci", "sfumato"],
  },
  {
    id: "art-002",
    title: "Watercolour Portrait Bloom",
    prompt:
      "Abstract watercolour portrait, paint bleeding and " +
      "blooming beyond facial edges, wet-on-wet technique, " +
      "delicate colour washes of teal, coral, and lavender, " +
      "face emerging from colour field, white paper " +
      "showing through, lyrical spontaneous quality",
    category: "artistic",
    style: "Watercolour",
    toolSlug: "ai-photo-to-sketch",
    blogSlug: "12-gemini-ai-prompts-abstract-portraits",
    tags: ["watercolour", "abstract", "painterly"],
  },
  {
    id: "art-003",
    title: "Oil Painting Impasto",
    prompt:
      "Abstract portrait in thick impasto oil paint, " +
      "visible heavy palette knife strokes, rich jewel " +
      "colours of cobalt, crimson, and ochre, face " +
      "partially dissolved into paint texture, paint " +
      "ridges catching light, expressionist gestural " +
      "quality, gallery fine art standard",
    category: "artistic",
    style: "Impasto oil",
    toolSlug: "ai-photo-to-sketch",
    blogSlug: "12-gemini-ai-prompts-abstract-portraits",
    tags: ["oil-painting", "impasto", "expressionist"],
  },
  {
    id: "art-004",
    title: "Pencil Sketch Portrait",
    prompt:
      "Convert this photo into a detailed pencil sketch, " +
      "fine pencil lines, cross-hatching for shadows, " +
      "white paper background, realistic proportions " +
      "preserved, artistic hand-drawn style, high detail, " +
      "clean lines, professional illustration quality",
    category: "artistic",
    style: "Pencil sketch",
    toolSlug: "ai-photo-to-sketch",
    tags: ["sketch", "pencil", "hand-drawn"],
  },
  {
    id: "art-005",
    title: "Double Exposure Abstract",
    prompt:
      "Abstract double exposure portrait, human face " +
      "merged with forest or architectural texture, trees " +
      "visible inside facial silhouette, monochrome or " +
      "duotone colour treatment, dreamlike merged identity, " +
      "fine art photography manipulation",
    category: "artistic",
    style: "Double exposure",
    toolSlug: "ai-photo-to-sketch",
    blogSlug: "12-gemini-ai-prompts-abstract-portraits",
    tags: ["double-exposure", "abstract", "fine-art"],
  },
  {
    id: "art-006",
    title: "Pixar 3D Character",
    prompt:
      "Pixar animated movie character style, 3D CGI " +
      "rendering, warm lighting, expressive features, " +
      "smooth textures, cinematic quality, Disney Pixar " +
      "aesthetic, vibrant colours, friendly expression, " +
      "professional animation studio quality",
    category: "artistic",
    style: "Pixar 3D",
    toolSlug: "pixar-ai-generator",
    tags: ["pixar", "3d", "animation"],
  },
  {
    id: "art-007",
    title: "Rembrandt Classic Light",
    prompt:
      "Classic Rembrandt portrait, single warm candle " +
      "source from upper right, characteristic triangle " +
      "of light on cheek, deep dark background, simple " +
      "dark clothing, golden warm skin tones, oil paint " +
      "texture, Dutch Golden Age masterwork quality",
    category: "artistic",
    style: "Rembrandt",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "10-rembrandt-style-dark-dramatic-portrait-prompts",
    tags: ["rembrandt", "classical", "dramatic"],
  },
  {
    id: "art-008",
    title: "Botanical Surreal Portrait",
    prompt:
      "Surreal botanical portrait, face grown over with " +
      "living plants and flowers, moss texture on skin, " +
      "petals replacing features, roots as hair, magical " +
      "realism quality, extreme macro detail, nature " +
      "reclaiming the human, fine art surrealism",
    category: "artistic",
    style: "Surreal botanical",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-gemini-ai-prompts-abstract-portraits",
    tags: ["surreal", "botanical", "magical-realism"],
  },

  // ── Product ────────────────────────────────────────────
  {
    id: "prod-001",
    title: "Clean White Product Shot",
    prompt:
      "Professional product photography, pure white " +
      "seamless background, soft studio lighting with " +
      "subtle shadow, product centred and sharp, " +
      "no distractions, e-commerce ready, Amazon listing " +
      "quality, maintain exact product appearance",
    category: "product",
    style: "E-commerce white",
    toolSlug: "ai-background-remover",
    tags: ["product", "ecommerce", "white-background"],
  },
  {
    id: "prod-002",
    title: "Lifestyle Product Context",
    prompt:
      "Product in natural lifestyle setting, soft morning " +
      "light through window, neutral linen surface, few " +
      "unobtrusive complementary props, lifestyle " +
      "e-commerce feel, keep the product identical and " +
      "sharp, editorial product photography",
    category: "product",
    style: "Lifestyle",
    toolSlug: "ai-background-remover",
    tags: ["product", "lifestyle", "context"],
  },
  {
    id: "prod-003",
    title: "Luxury Product Dark Background",
    prompt:
      "Luxury product photography, deep black or dark navy " +
      "background, single dramatic spotlight on product, " +
      "subtle lens flare, premium material texture visible, " +
      "high-end editorial aesthetic, jewellery or fragrance " +
      "campaign quality, rich and sophisticated",
    category: "product",
    style: "Luxury dark",
    toolSlug: "ai-background-remover",
    tags: ["product", "luxury", "dark"],
  },
  {
    id: "prod-004",
    title: "Flat Lay Product Styling",
    prompt:
      "Product flat lay, top-down view on walnut or " +
      "marble surface, complementary props in scene, " +
      "editorial e-commerce styling, even diffused " +
      "natural light, clean shadows, carefully arranged " +
      "composition, do not change the product itself",
    category: "product",
    style: "Flat lay",
    toolSlug: "ai-background-remover",
    tags: ["product", "flat-lay", "styling"],
  },
  {
    id: "prod-005",
    title: "Outdoor Adventure Product",
    prompt:
      "Outdoor product photography, natural environment " +
      "setting appropriate to product use, natural " +
      "directional sunlight, adventure and active lifestyle " +
      "implied, product sharp and prominent, background " +
      "blurred but contextually relevant",
    category: "product",
    style: "Outdoor",
    toolSlug: "ai-background-remover",
    tags: ["product", "outdoor", "adventure"],
  },
  {
    id: "prod-006",
    title: "Action Figure Collectible",
    prompt:
      "Transform the subject into a highly detailed " +
      "collectible action figure, plastic toy aesthetic, " +
      "glossy finish, articulated joints visible, display " +
      "base, product photography lighting, white " +
      "background, 3D render style, collector quality",
    category: "product",
    style: "Action figure",
    toolSlug: "ai-figure-generator",
    tags: ["action-figure", "collectible", "3d"],
  },
  {
    id: "prod-007",
    title: "Custom AI Sticker",
    prompt:
      "Create a fun sticker design with transparent " +
      "background, bold clean outlines, vibrant colours, " +
      "playful cartoon style, expressive and emotive, " +
      "suitable for messaging apps, white border around " +
      "the subject, sticker aesthetic, WhatsApp ready",
    category: "product",
    style: "Sticker",
    toolSlug: "ai-sticker-generator",
    tags: ["sticker", "whatsapp", "cartoon"],
  },
  {
    id: "prod-008",
    title: "Pet Passport Photo",
    prompt:
      "Transform the pet photo into a formal passport-style " +
      "portrait, white or light grey background, pet " +
      "centred and facing forward, neutral expression, " +
      "clear focus, official ID photo composition, clean " +
      "and professional, high resolution",
    category: "product",
    style: "Pet passport",
    toolSlug: "pet-passport-photo-generator",
    tags: ["pet", "passport", "portrait"],
  },

  // ── Cinematic ──────────────────────────────────────────
  {
    id: "cin-001",
    title: "Cinematic Close-Up Film Look",
    prompt:
      "Cinematic portrait, 35mm film aesthetic, extreme " +
      "close-up with shallow focus, one strong side light, " +
      "deep emotional expression — wistful or contemplative, " +
      "film grain texture, cool desaturated colour grade, " +
      "director of photography quality",
    category: "cinematic",
    style: "Film close-up",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "12-chatgpt-prompts-modern-realistic-portraits",
    tags: ["cinematic", "film", "close-up"],
  },
  {
    id: "cin-002",
    title: "Teal and Orange Cinema Grade",
    prompt:
      "Cinematic portrait, teal and orange colour science, " +
      "crushed blacks, lifted shadows, smooth highlight " +
      "roll-off, natural skin tones preserved, warm key " +
      "light, cool fill, Hollywood blockbuster colour " +
      "grading, film-like tonal range",
    category: "cinematic",
    style: "Teal and orange",
    toolSlug: "ai-color-grading",
    tags: ["cinematic", "teal-orange", "colour-grade"],
  },
  {
    id: "cin-003",
    title: "Night City Neon Portrait",
    prompt:
      "Night portrait, city lights bokeh background, neon " +
      "sign casting coloured light on face — blue or red, " +
      "rain reflections on street, urban noir atmosphere, " +
      "mysterious and cinematic, night street photography " +
      "quality, Blade Runner aesthetic",
    category: "cinematic",
    style: "Night city",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-gemini-ai-photo-prompts-for-boys",
    tags: ["neon", "night", "noir"],
  },
  {
    id: "cin-004",
    title: "Film Noir Dark Drama",
    prompt:
      "Film noir portrait, single dramatic side light, " +
      "deep shadows, rain-slicked street or window " +
      "reflection, dark brooding expression, 1940s " +
      "detective aesthetic, black and white or heavily " +
      "desaturated, film grain, cinematic atmosphere",
    category: "cinematic",
    style: "Film noir",
    toolSlug: "ai-professional-photo-generator",
    blogSlug: "15-gemini-ai-photo-prompts-for-boys",
    tags: ["film-noir", "dark", "dramatic"],
  },
  {
    id: "cin-005",
    title: "Environmental Storytelling",
    prompt:
      "Environmental portrait, location chosen for " +
      "narrative meaning — workshop, library, rooftop, " +
      "or industrial space, available natural light used " +
      "creatively, subject and setting tell a complete " +
      "story, photojournalism documentary quality",
    category: "cinematic",
    style: "Documentary",
    toolSlug: "ai-professional-photo-generator",
    tags: ["documentary", "storytelling", "environmental"],
  },
  {
    id: "cin-006",
    title: "Cinematic Vintage Colour Grade",
    prompt:
      "Apply Kodak Portra 400 film aesthetic to portrait, " +
      "warm skin tones, subtle grain, faded blacks, muted " +
      "saturation, keep the subject face and pose identical, " +
      "analogue film photography look, nostalgic and warm",
    category: "cinematic",
    style: "Vintage film",
    toolSlug: "ai-color-grading",
    tags: ["vintage", "film-grain", "colour-grade"],
  },
  {
    id: "cin-007",
    title: "Wes Anderson Symmetrical",
    prompt:
      "Wes Anderson visual language portrait, symmetrical " +
      "composition, pastel colour blocks — mustard, dusty " +
      "pink, mint — flat front lighting, retro framing, " +
      "keep the subject face and pose unchanged, " +
      "whimsical and deliberate aesthetic",
    category: "cinematic",
    style: "Wes Anderson",
    toolSlug: "ai-color-grading",
    tags: ["wes-anderson", "symmetrical", "pastel"],
  },
  {
    id: "cin-008",
    title: "Cosmic Surreal Portrait",
    prompt:
      "Surreal cosmic portrait, face constructed from or " +
      "dissolving into galaxy and nebula imagery, deep " +
      "space colours of indigo, purple, and gold, face " +
      "and cosmos in visual dialogue, spiritual " +
      "transcendence implied, fine art digital surrealism",
    category: "cinematic",
    style: "Cosmic",
    toolSlug: "ai-avatar-generator",
    blogSlug: "12-gemini-ai-prompts-abstract-portraits",
    tags: ["cosmic", "surreal", "galaxy"],
  },
]

export function getPromptsByCategory(
  category: PromptCategory | "all"
): PromptItem[] {
  if (category === "all") return ALL_PROMPTS
  return ALL_PROMPTS.filter((p) => p.category === category)
}

export function getPromptById(id: string): PromptItem | undefined {
  return ALL_PROMPTS.find((p) => p.id === id)
}
