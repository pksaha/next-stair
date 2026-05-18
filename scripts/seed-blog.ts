import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { blogPosts } from "../src/db/schema"
import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })
const posts = [
  {
    slug: "12-anime-style-ai-portrait-prompts",
    title: "12 Anime Style AI Portrait Prompts",
    excerpt:
      "Discover 12 tested anime portrait prompts for AI " +
      "image generators. From soft shojo aesthetics to bold " +
      "shonen energy — copy, paste, and generate.",
    content: `# 12 Anime Style AI Portrait Prompts
Anime has one of the most distinctive visual languages in illustration. These 12 prompts are tested across gpt-image-1 and designed to give you consistent, beautiful anime portraits — from soft romantic shojo styles to dramatic shonen close-ups.
How to Use These Prompts
Copy any prompt directly into the generator. You can add your own subject description at the beginning — for example, add "a young woman with silver hair," before the style instructions.

1. Soft Shojo Portrait
\`\`\`
Soft shojo anime portrait, large expressive eyes with detailed
iris reflections, delicate facial features, pastel pink and
lavender color palette, cherry blossom petals falling,
clean line art, professional manga illustration style,
high resolution
\`\`\`
Best for: Romance, fantasy, and idol character aesthetics.

2. Bold Shonen Character
\`\`\`
Dynamic shonen anime portrait, intense determined expression,
spiky hair with wind motion, dramatic side lighting,
high contrast colors, speed lines in background,
battle-ready pose, detailed clothing design,
professional anime studio quality
\`\`\`
Best for: Action characters, hero designs, game protagonists.

3. Studio Ghibli Inspired
\`\`\`
Studio Ghibli inspired portrait, soft watercolor aesthetic,
warm natural lighting, slightly freckled skin, braided hair
with wildflowers, nature background with soft bokeh,
gentle expression, Hayao Miyazaki illustration style,
hand-painted texture
\`\`\`
Best for: Nature-themed characters, gentle storytelling aesthetics.

4. Cyberpunk Anime
\`\`\`
Cyberpunk anime portrait, neon city backdrop, holographic
visor reflecting purple and cyan light, futuristic jacket
with LED accents, rain-slicked streets in background,
high contrast dramatic lighting, dystopian atmosphere,
Ghost in the Shell aesthetic, ultra detailed
\`\`\`
Best for: Sci-fi characters, dystopian settings, tech aesthetics.

5. Traditional Kimono Portrait
\`\`\`
Anime portrait in traditional Japanese kimono, elaborate
floral pattern on silk fabric, elegant upswept hair
with kanzashi ornaments, soft indoor lighting,
autumn maple leaves framing the composition,
classical Japanese illustration style, dignified expression
\`\`\`
Best for: Historical settings, cultural aesthetics, seasonal themes.

6. Magical Girl Transformation
\`\`\`
Magical girl anime portrait, sparkles and star particles,
elaborate costume with ribbons and gem accents, confident
joyful expression, glowing staff or wand, pastel rainbow
color scheme, transparent wings, Sailor Moon aesthetic,
dynamic pose, radiant magical aura
\`\`\`
Best for: Magical girl genre, transformation sequences, colorful aesthetics.

7. Dark Fantasy Warrior
\`\`\`
Dark fantasy anime warrior portrait, battle-worn armor with
intricate engravings, crimson cloak in wind motion,
moonlit forest background, cold determined gaze,
scar across cheekbone, hand on sword hilt,
dramatic chiaroscuro lighting, Berserk-inspired aesthetic
\`\`\`
Best for: Dark fantasy genre, complex antiheroes, action series.

8. Slice of Life Student
\`\`\`
Slice of life anime portrait, school uniform with casual
personal touches, warm afternoon sunlight through classroom
window, relaxed natural expression, textbooks on desk,
soft golden hour color grading, realistic proportions,
everyday Japanese school aesthetic, high detail
\`\`\`
Best for: Contemporary settings, relatable characters, school stories.

9. Ocean Spirit Character
\`\`\`
Anime ocean spirit portrait, flowing blue-green hair
with sea foam highlights, luminous skin with subtle
scales near temples, deep ocean eyes with bioluminescent
glow, coral and seaweed jewelry, underwater light rays,
mythical sea deity aesthetic, ethereal expression
\`\`\`
Best for: Fantasy settings, elemental characters, mythology-inspired designs.

10. Samurai Ronin
\`\`\`
Anime ronin portrait, weathered face with quiet dignity,
traditional hakama with torn edges, sakura petals on wind,
hand resting on katana handle, sunset silhouette composition,
ink wash painting background elements, Rurouni Kenshin
aesthetic, melancholic atmosphere
\`\`\`
Best for: Historical Japan settings, wanderer characters, mature narratives.

11. Idol Pop Star
\`\`\`
K-pop and J-pop idol anime portrait, stage outfit with
sequins and pastel layers, professional stage lighting
in pink and gold, microphone in hand, wide bright smile,
confetti falling, concert venue crowd blur in background,
Love Live aesthetic, vibrant and energetic
\`\`\`
Best for: Music themes, idol genre, bright upbeat aesthetics.

12. Ancient Shrine Maiden
\`\`\`
Anime shrine maiden portrait, white haori and red hakama,
long black hair with ofuda tied in it, serene forest shrine
background, morning mist and stone lanterns,
cherry blossoms overhead, spiritual calm expression,
traditional Japanese spiritual aesthetic, soft natural lighting
\`\`\`
Best for: Spiritual themes, shrine and temple settings, historical fantasy.

Tips for Better Anime Portraits
Add specific color palettes to any prompt — "warm golden tones" or "cool blue monochrome" dramatically shifts the mood.
Specify emotion explicitly. Anime facial expressions carry narrative weight. "Quiet determination" produces very different results than "joyful excitement."
Include background complexity to your taste. Remove background instructions entirely for clean character sheet results.
Try these prompts with the AI Avatar Generator or AI Headshot Generator for photo-realistic results with anime-inspired styling.`,
    author: "Editorial Team",
    category: "portrait-prompts",
    tags: ["anime", "portrait", "prompts", "ai-art"],
    readingTimeMinutes: 6,
    seoTitle:
      "12 Anime Style AI Portrait Prompts — Copy & Generate | next-stair",
    seoDescription:
      "12 tested anime portrait prompts for AI image generators. " +
      "Shojo, shonen, Ghibli, cyberpunk, and more. Copy and " +
      "generate stunning anime art instantly.",
    relatedToolSlugs: [
      "ai-avatar-generator",
      "ai-headshot-generator",
      "ai-photo-to-sketch",
    ],
    translations: {
      bn: {
        title: "১২টি অ্যানিমে স্টাইল AI পোর্ট্রেট প্রম্পট",
        excerpt:
          "AI ইমেজ জেনারেটরের জন্য ১২টি পরীক্ষিত অ্যানিমে পোর্ট্রেট প্রম্পট। " +
          "সফট শোজো থেকে বোল্ড শোনেন — কপি করুন এবং জেনারেট করুন।",
        content:
          "# ১২টি অ্যানিমে স্টাইল AI পোর্ট্রেট প্রম্পট\n\n" +
          "অ্যানিমের ভিজ্যুয়াল ভাষা অনন্য। এই ১২টি প্রম্পট gpt-image-1 " +
          "এ পরীক্ষিত। প্রতিটি প্রম্পট সরাসরি জেনারেটরে কপি করুন।\n\n" +
          "## ১. সফট শোজো পোর্ট্রেট\n\n" +
          "```\nSoft shojo anime portrait, large expressive eyes, " +
          "pastel pink and lavender color palette, " +
          "cherry blossom petals falling, clean line art\n```\n\n" +
          "আরও প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১২টি অ্যানিমে AI পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "AI দিয়ে অ্যানিমে পোর্ট্রেট তৈরির জন্য ১২টি প্রম্পট। " +
          "বিনামূল্যে কপি করুন এবং ব্যবহার করুন।",
      },
      hi: {
        title: "12 एनिमे स्टाइल AI पोर्ट्रेट प्रॉम्प्ट",
        excerpt:
          "AI इमेज जेनरेटर के लिए 12 परीक्षित एनिमे पोर्ट्रेट प्रॉम्प्ट। " +
          "सॉफ्ट शोजो से बोल्ड शोनेन तक — कॉपी करें और जेनरेट करें।",
        content:
          "# 12 एनिमे स्टाइल AI पोर्ट्रेट प्रॉम्प्ट\n\n" +
          "एनिमे की विजुअल भाषा अनोखी है। ये 12 प्रॉम्प्ट gpt-image-1 पर " +
          "परीक्षित हैं। किसी भी प्रॉम्प्ट को सीधे जेनरेटर में कॉपी करें।\n\n" +
          "## 1. सॉफ्ट शोजो पोर्ट्रेट\n\n" +
          "```\nSoft shojo anime portrait, large expressive eyes, " +
          "pastel pink and lavender color palette\n```\n\n" +
          "अधिक प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle: "12 एनिमे AI पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "AI से एनिमे पोर्ट्रेट बनाने के लिए 12 प्रॉम्प्ट। " +
          "कॉपी करें और इस्तेमाल करें।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-01"),
  },
  {
    slug: "10-renaissance-painting-ai-portrait-prompts",
    title: "10 Renaissance Painting AI Portrait Prompts",
    excerpt:
      "Transform any photo into Renaissance oil painting " +
      "masterpieces. 10 tested prompts inspired by da Vinci, " +
      "Raphael, Botticelli, and Rembrandt.",
    content: `# 10 Renaissance Painting AI Portrait Prompts
The Renaissance produced the most technically sophisticated portraits in Western art history. These 10 prompts bring that craftsmanship into AI image generation — tested to produce dark dramatic lighting, rich oil paint textures, and the quiet dignity of 15th and 16th century portraiture.
What Makes a Renaissance Portrait
Three things define the Renaissance portrait aesthetic: chiaroscuro (the dramatic play of light and shadow), sfumato (the soft blurred transitions between light and dark), and the three-quarter pose. Every prompt below uses these principles.

1. Da Vinci Sfumato Portrait
\`\`\`
Renaissance portrait in the style of Leonardo da Vinci,
sfumato technique with soft blurred transitions between
light and shadow, three-quarter pose, subtle enigmatic
expression, dark landscape background through window,
rich earth tones, oil on wood panel texture, masterpiece quality
\`\`\`

2. Botticelli Idealized Portrait
\`\`\`
Renaissance portrait inspired by Sandro Botticelli,
idealized facial features with serene composure,
flowing golden hair with floral details, classical
Italian landscape background, tempera on panel texture,
soft diffused lighting, elegant detailed clothing
with Renaissance fabric patterns
\`\`\`

3. Raphael Madonna Style
\`\`\`
High Renaissance portrait in Raphael's style,
perfectly balanced composition, warm golden light
from upper left, serene noble expression,
architectural background with Roman arches,
rich velvet garments with gold embroidery,
classical idealism, oil on canvas texture
\`\`\`

4. Rembrandt Dramatic Light
\`\`\`
Baroque portrait in Rembrandt's chiaroscuro style,
single strong light source from upper right,
deep dark background, aged face with dignified presence,
visible painterly brushwork, gold and dark brown palette,
dramatic shadow play, Dutch Golden Age aesthetic,
oil on canvas, masterwork quality
\`\`\`

5. Flemish Oil Portrait
\`\`\`
Flemish Renaissance portrait in Jan van Eyck style,
hyper-detailed oil paint technique, jewel-like surface quality,
elaborate headdress or hat, dark interior background,
hands visible with rings and gloves,
meticulous attention to fabric texture and skin detail,
cool northern light, devotional intensity
\`\`\`

6. Venetian School Portrait
\`\`\`
Venetian Renaissance portrait, Titian color palette
of deep crimson and gold, warm amber skin tones,
lush fabric with rich saturation, open landscape
or architectural background in blue-grey,
confident aristocratic bearing, sfumato facial softness,
oil on canvas with visible texture
\`\`\`

7. Holbein Court Portrait
\`\`\`
Tudor court portrait in Hans Holbein style,
flat even lighting, neutral grey background,
incredibly detailed clothing with embroidery and
jeweled accessories, rigid formal posture,
precise outline drawing quality,
photographic attention to surface detail, 1530s court fashion
\`\`\`

8. Mantegna Fresco Effect
\`\`\`
North Italian Renaissance fresco portrait,
Andrea Mantegna style, sculptural solid forms,
cool mineral pigments of blue and green,
architectural niche background with classical molding,
Roman-inspired costume, firm precise line quality,
stone-like solidity, tempera fresco texture
\`\`\`

9. Spanish Golden Age
\`\`\`
Spanish Baroque portrait in Velázquez style,
loose gestural brushwork, restrained dignified palette
of black and silver, subtle variations in dark cloth,
psychological depth in expression, warm studio lighting,
17th century Spanish court aesthetic,
virtuoso paint handling visible
\`\`\`

10. Italian Late Gothic
\`\`\`
Late Gothic Italian portrait, Pisanello medal style,
strict profile view, gilded background with
punched decorative pattern, detailed embroidered
clothing border, jewel-clear surface quality,
profile relief medallion aesthetic,
precise decorative line work, symbolic floral details
\`\`\`

Combining Renaissance Prompts with Photo Upload
The AI Professional Photo Generator and Photo Restoration tools work especially well with these prompts when you upload a reference photo. The AI preserves your facial structure while applying the Renaissance painterly treatment.
For the most authentic results, use quality: high and portrait aspect ratio.`,
    author: "Editorial Team",
    category: "style-guides",
    tags: ["renaissance", "portrait", "prompts", "oil-painting"],
    readingTimeMinutes: 5,
    seoTitle:
      "10 Renaissance Painting AI Portrait Prompts | next-stair",
    seoDescription:
      "Turn any photo into a Renaissance masterpiece. 10 tested " +
      "prompts inspired by da Vinci, Raphael, Rembrandt, and more. " +
      "Copy and generate instantly.",
    relatedToolSlugs: [
      "ai-professional-photo-generator",
      "photo-restoration",
      "ai-headshot-generator",
    ],
    translations: {
      bn: {
        title: "১০টি রেনেসাঁ পেইন্টিং AI পোর্ট্রেট প্রম্পট",
        excerpt:
          "যেকোনো ছবিকে রেনেসাঁ তেল চিত্রে রূপান্তর করুন। " +
          "দা ভিঞ্চি, রাফায়েল এবং রেমব্রান্ট অনুপ্রাণিত ১০টি প্রম্পট।",
        content:
          "# ১০টি রেনেসাঁ পেইন্টিং AI পোর্ট্রেট প্রম্পট\n\n" +
          "রেনেসাঁর সবচেয়ে গুরুত্বপূর্ণ তিনটি বৈশিষ্ট্য: " +
          "কিয়ারোস্কুরো (আলো-ছায়ার নাটকীয় খেলা), " +
          "স্ফুমাতো (নরম ঝাপসা রূপান্তর), এবং তিন-চতুর্থাংশ ভঙ্গি।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১০টি রেনেসাঁ AI পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "যেকোনো ছবিকে রেনেসাঁ মাস্টারপিসে রূপান্তর করুন। " +
          "১০টি পরীক্ষিত প্রম্পট।",
      },
      hi: {
        title: "10 रेनेसां पेंटिंग AI पोर्ट्रेट प्रॉम्प्ट",
        excerpt:
          "किसी भी फोटो को रेनेसां ऑयल पेंटिंग में बदलें। " +
          "दा विंची, राफेल और रेम्ब्रां से प्रेरित 10 प्रॉम्प्ट।",
        content:
          "# 10 रेनेसां पेंटिंग AI पोर्ट्रेट प्रॉम्प्ट\n\n" +
          "रेनेसां पोर्ट्रेट की तीन विशेषताएं: " +
          "कियारोस्कुरो (प्रकाश और छाया का नाटकीय खेल), " +
          "स्फुमातो (नरम बदलाव), और तीन-चौथाई पोज।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "10 रेनेसां AI पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "किसी भी फोटो को रेनेसां मास्टरपीस में बदलें। " +
          "10 परीक्षित प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-05"),
  },
  {
    slug: "15-instagram-grid-aesthetic-ai-photo-prompts",
    title: "15 Instagram Grid Aesthetic AI Photo Prompts",
    excerpt:
      "Build a cohesive Instagram grid with AI. 15 prompts " +
      "for golden hour, dark moody, pastel minimal, and " +
      "editorial aesthetics — all grid-consistent.",
    content: `# 15 Instagram Grid Aesthetic AI Photo Prompts
A consistent Instagram grid requires consistent lighting, color grading, and composition across every post. These 15 prompts are grouped by grid aesthetic — pick one style and stick to it for a professional, cohesive look.
Golden Hour Aesthetic (Prompts 1-4)
Warm, glowing, sun-soaked. Best for lifestyle, travel, and food content.

1. Golden Hour Portrait
\`\`\`
Instagram portrait photo, golden hour sunlight at 5pm,
warm amber and orange tones, sun flare in frame,
shallow depth of field, subject silhouetted or rim-lit,
outdoor setting, film grain texture, warm color grade,
square crop composition
\`\`\`

2. Sunset Food Flat Lay
\`\`\`
Instagram flat lay food photography, golden hour window
light from left, warm shadows, artisan ceramic plates,
fresh herbs scattered, linen napkin, wooden surface,
warm orange color grade, styled editorial food aesthetic,
square format, lifestyle magazine quality
\`\`\`

3. Travel Landscape Golden Hour
\`\`\`
Instagram travel photo, golden hour landscape,
warm volumetric light through clouds, lone figure
in distance for scale, dramatic sky, rich warm
color grading, Lightroom warm preset aesthetic,
ultra wide composition, wanderlust feeling
\`\`\`

4. Golden Hour Coffee Shop
\`\`\`
Instagram lifestyle photo, cozy coffee shop interior,
afternoon golden light through large window,
latte art in frame, book or journal beside cup,
warm wood tones, shallow focus, hygge aesthetic,
warm filter, inviting and aspirational
\`\`\`

Dark Moody Aesthetic (Prompts 5-8)
Dramatic, editorial, high contrast. Best for fashion and artistic content.

5. Dark Fashion Editorial
\`\`\`
Instagram fashion editorial, dark moody studio lighting,
single hard light source, deep shadows,
dramatic black and dark green color palette,
model in artistic pose, fashion magazine aesthetic,
high contrast, square format, editorial minimalism
\`\`\`

6. Moody Flat Lay
\`\`\`
Dark moody Instagram flat lay, deep charcoal background,
dramatic single light source, dark aesthetic objects —
black candle, dark roses, perfume bottle,
deep shadow fill, desaturated dark color grade,
editorial luxury aesthetic, square composition
\`\`\`

7. Rainy Window Portrait
\`\`\`
Instagram portrait, rainy window with droplets,
diffused grey light, melancholic aesthetic,
desaturated cool tones, film photography look,
shallow depth of field, introspective expression,
moody editorial quality, square crop
\`\`\`

8. Dark Botanical
\`\`\`
Dark moody botanical Instagram photo, deep forest green
and black background, single dramatic spotlight
on plant or flower, velvety shadows,
macro detail visible, rich desaturated palette,
editorial nature photography, dramatic chiaroscuro
\`\`\`

Pastel Minimal Aesthetic (Prompts 9-12)
Clean, airy, soft. Best for beauty, wellness, and lifestyle brands.

9. Pastel Product Shot
\`\`\`
Instagram product photography, soft pastel pink background,
clean diffused studio lighting, minimal styling,
product centered with light shadows, airy and clean aesthetic,
beauty or skincare product implied, square format,
professional commercial photography
\`\`\`

10. Pastel Portrait
\`\`\`
Instagram portrait, soft pastel color palette,
even diffused lighting, clean background,
soft pink or lavender tones, delicate makeup,
minimal accessories, clean beauty aesthetic,
high key lighting, soft shadow, lifestyle magazine quality
\`\`\`

11. Minimal White Flat Lay
\`\`\`
Instagram flat lay, pure white background,
minimal object arrangement, clean negative space,
soft shadows from diffused window light,
3-5 objects maximum, editorial minimalism,
Scandinavian aesthetic, precise composition
\`\`\`

12. Pastel Street Style
\`\`\`
Instagram street style photo, urban background blurred,
pastel outfit tones, soft natural daylight,
candid walking pose, clean city sidewalk,
fashion influencer aesthetic, airy color grade,
shallow depth of field, approachable editorial
\`\`\`

Editorial Bold Aesthetic (Prompts 13-15)
Striking, graphic, unconventional. Best for creative and brand content.

13. Color Block Editorial
\`\`\`
Instagram editorial, bold color block background
in single saturated hue, graphic composition,
strong shadows as design element, fashion or
object against flat color, high contrast,
geometric negative space, magazine cover quality
\`\`\`

14. Double Exposure Portrait
\`\`\`
Instagram creative portrait, double exposure effect,
portrait merged with landscape or floral texture,
dreamlike quality, moody desaturated palette,
artistic fine art photography aesthetic,
creative retouching style, editorial impact
\`\`\`

15. Bold Typography Lifestyle
\`\`\`
Instagram lifestyle flat lay, bold graphic elements,
clean background with strong geometric composition,
objects arranged in visual pattern,
high contrast complementary color pairing,
editorial graphic design sensibility, square format,
visual impact over naturalism
\`\`\`

Building a Consistent Grid
Choose one aesthetic group and use only those prompts for 9-12 posts before introducing variation. The AI Color Grading tool can unify color grades across multiple images after generation for true grid consistency.
For portrait-focused grids, the AI Professional Photo Generator combined with a single chosen lighting description from this list will produce a consistent personal brand look.`,
    author: "Editorial Team",
    category: "social-media-prompts",
    tags: [
      "instagram",
      "aesthetic",
      "prompts",
      "content-creation",
    ],
    readingTimeMinutes: 7,
    seoTitle:
      "15 Instagram Grid AI Photo Prompts — Consistent Aesthetics | next-stair",
    seoDescription:
      "15 AI prompts for a cohesive Instagram grid. Golden hour, " +
      "dark moody, pastel minimal, and editorial aesthetics. " +
      "Free to copy and use.",
    relatedToolSlugs: [
      "ai-color-grading",
      "ai-professional-photo-generator",
      "ai-background-remover",
    ],
    translations: {
      bn: {
        title:
          "১৫টি ইনস্টাগ্রাম গ্রিড অ্যাসথেটিক AI ফটো প্রম্পট",
        excerpt:
          "AI দিয়ে সামঞ্জস্যপূর্ণ ইনস্টাগ্রাম গ্রিড তৈরি করুন। " +
          "গোল্ডেন আওয়ার, ডার্ক মুডি এবং পাস্টেল মিনিমাল — " +
          "১৫টি প্রম্পট।",
        content:
          "# ১৫টি ইনস্টাগ্রাম গ্রিড অ্যাসথেটিক AI ফটো প্রম্পট\n\n" +
          "একটি সামঞ্জস্যপূর্ণ ইনস্টাগ্রাম গ্রিডের জন্য একই " +
          "আলো, রঙ এবং কম্পোজিশন দরকার। এই ১৫টি প্রম্পট " +
          "চারটি অ্যাসথেটিকে ভাগ করা হয়েছে।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১৫টি ইনস্টাগ্রাম AI ফটো প্রম্পট | next-stair",
        seoDescription:
          "AI দিয়ে সামঞ্জস্যপূর্ণ ইনস্টাগ্রাম গ্রিড তৈরি করুন। " +
          "১৫টি পরীক্ষিত প্রম্পট।",
      },
      hi: {
        title:
          "15 इंस्टाग्राम ग्रिड एस्थेटिक AI फोटो प्रॉम्प्ट",
        excerpt:
          "AI से एक समान इंस्टाग्राम ग्रिड बनाएं। " +
          "गोल्डन आवर, डार्क मूडी, पेस्टल मिनिमल — " +
          "15 प्रॉम्प्ट।",
        content:
          "# 15 इंस्टाग्राम ग्रिड AI फोटो प्रॉम्प्ट\n\n" +
          "एक समान इंस्टाग्राम ग्रिड के लिए एक ही " +
          "लाइटिंग, कलर और कंपोजिशन चाहिए।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "15 इंस्टाग्राम AI फोटो प्रॉम्प्ट | next-stair",
        seoDescription:
          "AI से एक समान इंस्टाग्राम ग्रिड बनाएं। " +
          "15 परीक्षित प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-10"),
  },
  // ── 4. YouTube Thumbnail Prompts ──────────────────────────
  {
    slug: "10-youtube-thumbnail-ai-photo-prompts",
    title: "10 YouTube Thumbnail AI Photo Prompts",
    excerpt:
      "10 tested AI prompts to generate click-worthy YouTube " +
      "thumbnails. Reaction faces, gaming, tech, money, and " +
      "tutorial styles — all optimised for high CTR in 2026.",
    content: `# 10 YouTube Thumbnail AI Photo Prompts
Your thumbnail is the ad for your video. If it doesn't stop the scroll, your content never gets a chance. These 10 prompts are built around the visual patterns that drive click-through rates in 2026: exaggerated expressions, high-contrast lighting, and clear focal subjects.
What Makes a High-CTR Thumbnail in 2026
Three things matter above everything else. First, the expression — shocked, surprised, triumphant, and intense expressions outperform neutral ones at thumbnail size. Second, colour contrast — red and orange drive 67% higher CTR in gaming and entertainment niches. Third, the composition — one clear focal subject with bold background contrast, not a cluttered scene.
Always specify "16:9 aspect ratio, 1280x720" in your prompt to prevent wrong-dimension outputs.

1. Reaction Face Thumbnail
\`\`\`
YouTube thumbnail, person with exaggerated shocked expression,
wide open eyes, mouth slightly open in surprise, direct camera
eye contact, bright yellow background, high contrast bold
colours, red arrow graphic pointing to subject,
high saturation, clickbait thumbnail style,
16:9 aspect ratio, 1280x720, maximum CTR design
\`\`\`
Best for: Reaction videos, reveal content, opinion pieces.

2. Gaming Channel Thumbnail
\`\`\`
Gaming YouTube thumbnail, intense determined face with
dramatic side lighting, neon green and dark purple colour
scheme, explosion or energy effect in background,
game controller in hand, glowing screen light on face,
cinematic close-up, high contrast, bold gaming thumbnail
style, 16:9, 1280x720
\`\`\`
Best for: Gaming channels, let's plays, game reviews.

3. Tech Review Thumbnail
\`\`\`
YouTube tech review thumbnail, person pointing at new device
with excited expression, clean white or dark background,
product with glowing highlight, futuristic blue and white
colour scheme, bold contrast, modern tech aesthetic,
16:9, 1280x720, professional tech channel style
\`\`\`
Best for: Tech reviews, unboxings, gadget comparisons.

4. Money and Finance Thumbnail
\`\`\`
YouTube finance thumbnail, confident expression with slight
smirk, green and gold colour palette, money visual elements
suggested in background, upward growth arrow, clean
professional appearance, aspirational and trustworthy,
bold thumbnail style, 16:9, 1280x720
\`\`\`
Best for: Finance, investing, business, and income content.

5. Tutorial and Educational Thumbnail
\`\`\`
YouTube tutorial thumbnail, friendly helpful expression,
clean bright background in blue or white, step-by-step
visual implied, clear and organised composition,
professional and approachable, trust-building aesthetic,
no clutter, educational channel style,
16:9, 1280x720
\`\`\`
Best for: How-to content, courses, skill tutorials.

6. Clickbait Mystery Thumbnail
\`\`\`
YouTube mystery thumbnail, person covering mouth with one
hand, wide eyes looking off-camera at something shocking,
dramatic side lighting with deep shadows, dark moody
background with single bright colour accent,
curiosity gap implied, reaction video style,
16:9, 1280x720
\`\`\`
Best for: Discovery, exposé, mystery, and drama content.

7. Fitness and Lifestyle Thumbnail
\`\`\`
YouTube fitness thumbnail, athletic confident pose,
bright energetic background in orange or yellow,
natural outdoor or gym setting, healthy vibrant appearance,
motivational and aspirational mood, action-forward
composition, lifestyle channel aesthetic,
16:9, 1280x720
\`\`\`
Best for: Fitness, wellness, lifestyle, and transformation content.

8. Travel Vlog Thumbnail
\`\`\`
YouTube travel thumbnail, excited expression against
breathtaking landmark or landscape background,
warm golden hour light, sense of scale and adventure,
vivid saturated colours, wanderlust feeling,
traveller aesthetic, lifestyle vlog style,
16:9, 1280x720
\`\`\`
Best for: Travel vlogs, destination content, adventure channels.

9. Food Content Thumbnail
\`\`\`
YouTube food thumbnail, extreme close-up of dish with steam
or liquid pour in motion, warm appetising lighting,
rich saturated food colours, blurred background,
mouth-watering editorial food photography style,
recipe or cooking channel aesthetic, 16:9, 1280x720
\`\`\`
Best for: Cooking, recipe, food review, and restaurant content.

10. Personal Brand Talking Head
\`\`\`
YouTube personal brand thumbnail, direct camera eye contact,
confident and authoritative expression, clean minimal
background in brand colour, professional but approachable,
soft studio lighting, slight forward lean suggesting
engagement, thought leader aesthetic,
16:9, 1280x720
\`\`\`
Best for: Vlogs, commentary, educational, and personal brand content.

Technical Tips for 2026
Always preview your generated thumbnail at 320x180 pixels — that is the actual size YouTube shows in the feed. If the focal subject is unclear at that size, the thumbnail will underperform regardless of how good it looks at full resolution.
Use the AI Professional Photo Generator with these prompts and a reference photo for personalised thumbnails that use your actual face.
The AI Color Grading tool can apply consistent colour treatment across multiple thumbnail images for a cohesive channel brand look.`,
    author: "Editorial Team",
    category: "social-media-prompts",
    tags: ["youtube", "thumbnail", "CTR", "prompts"],
    readingTimeMinutes: 6,
    seoTitle:
      "10 YouTube Thumbnail AI Prompts — High CTR in 2026 | next-stair",
    seoDescription:
      "10 tested AI prompts for click-worthy YouTube thumbnails. " +
      "Reaction faces, gaming, tech, finance, and tutorial styles. " +
      "Copy and generate in seconds.",
    relatedToolSlugs: [
      "ai-professional-photo-generator",
      "ai-color-grading",
      "ai-background-remover",
    ],
    translations: {
      bn: {
        title: "১০টি ইউটিউব থাম্বনেইল AI ফটো প্রম্পট",
        excerpt:
          "ক্লিক-যোগ্য ইউটিউব থাম্বনেইল তৈরির জন্য ১০টি AI প্রম্পট। " +
          "রিঅ্যাকশন ফেস, গেমিং, টেক, মানি এবং টিউটোরিয়াল স্টাইল।",
        content:
          "# ১০টি ইউটিউব থাম্বনেইল AI ফটো প্রম্পট\n\n" +
          "আপনার থাম্বনেইল আপনার ভিডিওর বিজ্ঞাপন। " +
          "২০২৬ সালে হাই CTR-এর জন্য তিনটি জিনিস গুরুত্বপূর্ণ: " +
          "অতিরঞ্জিত অভিব্যক্তি, উচ্চ-কনট্রাস্ট আলো, এবং স্পষ্ট ফোকাল বিষয়।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১০টি ইউটিউব থাম্বনেইল AI প্রম্পট | next-stair",
        seoDescription:
          "ক্লিক-যোগ্য ইউটিউব থাম্বনেইলের জন্য ১০টি পরীক্ষিত প্রম্পট।",
      },
      hi: {
        title: "10 YouTube थंबनेल AI फोटो प्रॉम्प्ट",
        excerpt:
          "क्लिक-योग्य YouTube थंबनेल बनाने के लिए 10 AI प्रॉम्प्ट। " +
          "रिएक्शन फेस, गेमिंग, टेक, मनी और ट्यूटोरियल स्टाइल।",
        content:
          "# 10 YouTube थंबनेल AI फोटो प्रॉम्प्ट\n\n" +
          "आपका थंबनेल आपके वीडियो का विज्ञापन है। " +
          "2026 में हाई CTR के लिए तीन चीजें जरूरी हैं: " +
          "अतिरंजित भाव, उच्च-कंट्रास्ट प्रकाश, और स्पष्ट फोकल विषय।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle: "10 YouTube थंबनेल AI प्रॉम्प्ट | next-stair",
        seoDescription:
          "क्लिक-योग्य YouTube थंबनेल के लिए 10 परीक्षित प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-12"),
  },
  // ── 5. Pinterest Lifestyle Prompts ────────────────────────
  {
    slug: "12-pinterest-worthy-lifestyle-ai-photo-prompts",
    title: "12 Pinterest-Worthy Lifestyle AI Photo Prompts",
    excerpt:
      "12 AI prompts for viral Pinterest content — cottagecore, " +
      "dark academia, Y2K, old money, botanical flat lays, and " +
      "cosy interior aesthetics that drive saves and shares.",
    content: `# 12 Pinterest-Worthy Lifestyle AI Photo Prompts
Pinterest rewards saves, not just clicks. That means your content must be aspirational enough that people want to come back to it. These 12 prompts are grouped by the aesthetics that perform best on Pinterest in 2026.
Why These Aesthetics Win on Pinterest
Pinterest's algorithm rewards saves over impressions. Aesthetics that feel timeless rather than trend-chasing — cottagecore, old money, dark academia — consistently accumulate saves months after posting. Nostalgia is dominating feeds in 2026 alongside the Y2K revival.

Cottagecore and Botanical (Prompts 1-3)
1. Morning Cottage Scene
\`\`\`
Pinterest lifestyle photo, cosy English cottage kitchen,
morning light through lace curtains, fresh flowers in
earthenware vase, sourdough bread on wooden board,
herb bundles hanging to dry, warm amber tones,
soft natural photography, cottagecore aesthetic,
vertical 2:3 ratio
\`\`\`
2. Botanical Flat Lay
\`\`\`
Pinterest flat lay, foraged herbs and wildflowers on aged
linen, morning dew on petals, soft natural window light,
botanical illustration style, earthy greens and creams,
editorial food photography, scattered dried lavender,
vintage scissors and twine, 2:3 vertical ratio
\`\`\`
3. Garden Portrait
\`\`\`
Pinterest portrait, woman in vintage floral dress in cottage
garden, golden hour backlight, wildflowers in foreground
bokeh, sun flare through leaves, warm nostalgic film look,
natural beauty aesthetic, soft and dreamy,
cottagecore fashion photography
\`\`\`

Dark Academia (Prompts 4-6)
4. Library Study Scene
\`\`\`
Pinterest dark academia photo, ancient library with leather
books and wooden shelves, single warm lamp on oak desk,
tea in antique cup, handwritten letter visible,
autumn light through tall windows, rich warm browns
and deep greens, moody intellectual atmosphere,
vertical composition
\`\`\`
5. Autumn Campus Walk
\`\`\`
Pinterest lifestyle photo, dark academia aesthetic,
figure in wool coat with vintage satchel on cobblestone
path, golden fallen leaves, gothic architecture in
background, overcast moody sky, desaturated warm tones,
literary and scholarly atmosphere, film look
\`\`\`
6. Desk and Study Flat Lay
\`\`\`
Pinterest desk flat lay, dark academia style, aged poetry
book open with annotations, fountain pen, amber candle,
monocle, pressed flowers between pages, dark wood surface,
warm candlelight, deep rich colours, scholarly aesthetic,
top-down shot, 2:3 ratio
\`\`\`

Old Money and Quiet Luxury (Prompts 7-9)
7. Coastal Old Money Portrait
\`\`\`
Pinterest old money aesthetic portrait, linen blazer and
pearl earrings, coastal New England setting, white wooden
house with blue shutters in background, soft overcast
natural light, understated elegance, quiet luxury fashion,
clean composition, no logos, refined and timeless
\`\`\`
8. Equestrian Lifestyle
\`\`\`
Pinterest quiet luxury photo, equestrian morning scene,
jodhpurs and riding boots, misty British countryside,
horse barely visible in background bokeh, herringbone
jacket, natural muted tones of cream and tan,
understated old money aesthetic, soft diffused light
\`\`\`
9. Grand Interior Detail
\`\`\`
Pinterest interior detail photo, old money aesthetic,
marble fireplace with fresh white flowers, antique silver
candlesticks, hand-stitched cushions in ivory linen,
afternoon light casting long shadows, timeless elegant
interior, no clutter, refined quiet luxury styling
\`\`\`

Y2K and Nostalgia Revival (Prompts 10-12)
10. Y2K Portrait
\`\`\`
Pinterest Y2K portrait, chrome metallic accessories,
holographic background, bubblegum pink and silver palette,
glossy plastic look, early-2000s pop star energy,
butterfly clips and iridescent fabric,
vibrant synthetic aesthetic, editorial fashion
\`\`\`
11. 90s Film Photo Aesthetic
\`\`\`
Pinterest nostalgia photo, 1990s Polaroid or 35mm film look,
heavy grain, slight blur at edges, faded yellow light leak,
casual candid pose, vintage clothing, overexposed highlights,
lo-fi authenticity, analogue photography aesthetic
\`\`\`
12. Vintage Moodboard Collage
\`\`\`
Pinterest mood board collage, warm scrapbook aesthetic,
overlapping printed photos with torn edges, vintage
postage stamps, dried flowers, handwritten notes,
masking tape details, amber low light, film grain,
intimate indie Tumblr and Pinterest moodboard style,
rich brown and cream colour palette
\`\`\`

Vertical Format and Save Rate
Pinterest performs best at 2:3 vertical ratio (1000x1500 pixels). Always specify "vertical 2:3 ratio" or "Pinterest vertical format" in your prompts. Horizontal images are cropped in the feed and consistently underperform.
Combine these prompts with the AI Color Grading tool to apply consistent colour treatment across a Pinterest board for a cohesive, save-worthy feed.`,
    author: "Editorial Team",
    category: "social-media-prompts",
    tags: ["pinterest", "lifestyle", "aesthetic", "prompts"],
    readingTimeMinutes: 6,
    seoTitle:
      "12 Pinterest AI Lifestyle Photo Prompts — Viral Aesthetics 2026 | next-stair",
    seoDescription:
      "12 AI prompts for Pinterest-worthy photos. Cottagecore, dark " +
      "academia, Y2K, old money, and botanical aesthetics. " +
      "Copy and generate instantly.",
    relatedToolSlugs: [
      "ai-color-grading",
      "ai-background-remover",
      "ai-professional-photo-generator",
    ],
    translations: {
      bn: {
        title: "১২টি Pinterest-যোগ্য লাইফস্টাইল AI ফটো প্রম্পট",
        excerpt:
          "ভাইরাল Pinterest কন্টেন্টের জন্য ১২টি AI প্রম্পট। " +
          "কটেজকোর, ডার্ক অ্যাকাডেমিয়া, Y2K এবং ওল্ড মানি অ্যাসথেটিক।",
        content:
          "# ১২টি Pinterest-যোগ্য লাইফস্টাইল AI ফটো প্রম্পট\n\n" +
          "Pinterest সেভ পুরস্কৃত করে, শুধু ক্লিক নয়। " +
          "২০২৬ সালে সবচেয়ে ভালো পারফর্ম করা অ্যাসথেটিক: " +
          "কটেজকোর, ডার্ক অ্যাকাডেমিয়া, ওল্ড মানি, এবং Y2K।\n\n" +
          "সবসময় ভার্টিকাল 2:3 রেশিও নির্দিষ্ট করুন Pinterest-এর জন্য।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১২টি Pinterest AI লাইফস্টাইল প্রম্পট | next-stair",
        seoDescription:
          "Pinterest-যোগ্য ফটোর জন্য ১২টি AI প্রম্পট। " +
          "কটেজকোর, ডার্ক অ্যাকাডেমিয়া এবং আরও অ্যাসথেটিক।",
      },
      hi: {
        title: "12 Pinterest-योग्य लाइफस्टाइल AI फोटो प्रॉम्प्ट",
        excerpt:
          "वायरल Pinterest कंटेंट के लिए 12 AI प्रॉम्प्ट। " +
          "कॉटेजकोर, डार्क एकेडेमिया, Y2K और ओल्ड मनी एस्थेटिक।",
        content:
          "# 12 Pinterest-योग्य लाइफस्टाइल AI फोटो प्रॉम्प्ट\n\n" +
          "Pinterest सेव को पुरस्कृत करता है। " +
          "2026 में सबसे अच्छा प्रदर्शन करने वाले एस्थेटिक: " +
          "कॉटेजकोर, डार्क एकेडेमिया, ओल्ड मनी, और Y2K।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "12 Pinterest AI लाइफस्टाइल प्रॉम्प्ट | next-stair",
        seoDescription:
          "Pinterest-योग्य फोटो के लिए 12 AI प्रॉम्प्ट। " +
          "कॉटेजकोर, डार्क एकेडेमिया और अन्य एस्थेटिक।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-14"),
  },
  // ── 6. Gemini Female Portraits ────────────────────────────
  {
    slug: "15-gemini-ai-prompts-female-portraits",
    title:
      "15 Gemini AI Prompts for Stunning Female Portraits",
    excerpt:
      "15 tested prompts for Gemini AI female portraits — " +
      "soft editorial, bold fashion, cinematic drama, cultural " +
      "diversity, and mood-driven looks. Copy and generate.",
    content: `# 15 Gemini AI Prompts for Stunning Female Portraits
Gemini AI produces strong portrait outputs when prompts specify lighting direction, skin tone treatment, and emotional mood explicitly. These 15 prompts are structured to produce consistently high-quality female portraits across soft, bold, and cinematic styles.
Soft and Editorial (Prompts 1-4)
1. Soft Natural Beauty
\`\`\`
Soft editorial portrait of a woman, diffused natural window
light from the left, dewy skin with natural freckles,
minimal makeup, loose hair with natural texture,
cream and blush colour palette, clean white background,
magazine beauty editorial, Canon 85mm lens feel,
shallow depth of field
\`\`\`
2. Golden Hour Glow
\`\`\`
Female portrait at golden hour, warm amber backlight creating
rim around dark hair, sun flare partially in frame,
warm glowing skin, relaxed natural expression, outdoor park
or beach setting softly blurred, warm film colour grade,
lifestyle editorial quality
\`\`\`
3. Minimalist Studio
\`\`\`
Minimalist female portrait, clean grey studio background,
three-point professional lighting, natural confident
expression, simple elegant clothing, sharp focus on eyes,
skin retouched naturally, professional photography,
beauty and fashion editorial quality
\`\`\`
4. Botanical Garden
\`\`\`
Female portrait in botanical garden, lush green leaves
framing face, soft dappled sunlight, floral dress,
natural earth-tone skin, peaceful serene expression,
shallow depth of field, editorial lifestyle photography,
warm natural colour palette
\`\`\`

Bold Fashion and Editorial (Prompts 5-8)
5. High Fashion Editorial
\`\`\`
High fashion editorial female portrait, dramatic studio
lighting with strong shadows, avant-garde styling,
bold makeup with graphic liner, unusual hair styling,
colour-blocked or textured outfit, strong architectural
pose, Vogue editorial aesthetic, powerful presence
\`\`\`
6. Street Style Portrait
\`\`\`
Urban street style female portrait, city background blurred,
candid walking pose, confident casual styling, natural
daylight, authentic and unposed feeling, fashion
influencer aesthetic, airy colour grade, approachable
editorial quality, shallow depth of field
\`\`\`
7. Dark Glamour
\`\`\`
Dark glamour female portrait, dramatic chiaroscuro lighting,
deep jewel tones of ruby and emerald, smoky eye makeup,
vintage Hollywood wave hair, velvet or silk garment,
rich dark background, high contrast film noir aesthetic,
confident alluring expression
\`\`\`
8. Cultural Fashion Portrait
\`\`\`
Female portrait in traditional South Asian attire,
silk saree with gold zari detail, warm evening light,
jasmine flowers in dark hair, gold jewellery,
dignified graceful expression, rich warm colour palette
of deep red and gold, professional portrait quality
\`\`\`

Cinematic and Mood-Driven (Prompts 9-12)
9. Cinematic Close-Up
\`\`\`
Cinematic female portrait, 35mm film aesthetic, extreme
close-up with shallow focus, one strong side light,
deep emotional expression — wistful or contemplative,
film grain texture, cool desaturated colour grade,
cinematic director of photography quality
\`\`\`
10. Rainy Window
\`\`\`
Female portrait at rainy window, water droplets on glass
in foreground blur, grey diffused natural light,
melancholic introspective expression, casual clothing,
cool muted desaturated tones, film photography look,
quiet emotional storytelling, shallow depth of field
\`\`\`
11. Dawn Portrait
\`\`\`
Female portrait at dawn, first light in cool blue and
blush pink tones, sleepy soft expression, minimal makeup,
loose hair, standing on balcony or outdoor setting,
cool morning atmosphere, natural dreamy quality,
editorial lifestyle photography
\`\`\`
12. Fire Light Portrait
\`\`\`
Female portrait by firelight, warm orange and amber flames
casting dramatic moving light, deep shadows on one side,
intense concentrated expression, dark background,
hair catching warm light, painterly chiaroscuro quality,
intimate and powerful atmosphere
\`\`\`

Diversity and Representation (Prompts 13-15)
13. Global Beauty Portrait
\`\`\`
Female beauty portrait celebrating diverse skin tones,
rich melanin skin, natural textured hair, no
Eurocentric beauty standards, proud dignified expression,
soft studio lighting enhancing natural skin tone,
editorial global beauty campaign aesthetic
\`\`\`
14. Age and Wisdom Portrait
\`\`\`
Portrait of a woman over 50, dignified and powerful
expression, silver hair worn naturally or with elegance,
deep life-experience in expression, warm natural lighting,
fine lines visible and celebrated, editorial portrait
quality, no youth-chasing retouching
\`\`\`
15. Creative Self-Expression
\`\`\`
Creative editorial female portrait, artistic self-expression,
unusual hair colour or styling, personal style visible
through clothing and accessories, confident proud
expression, colourful or graphic background,
fashion-forward individuality, editorial magazine quality
\`\`\`

Use these prompts with the AI Headshot Generator when you need professional-grade output from a reference photo. For editorial styling experiments, the AI Hairstyle Changer and AI Professional Photo Generator are the best starting tools.`,
    author: "Editorial Team",
    category: "portrait-prompts",
    tags: ["female", "portrait", "gemini", "prompts", "editorial"],
    readingTimeMinutes: 7,
    seoTitle:
      "15 Gemini AI Female Portrait Prompts — Soft Bold Cinematic | next-stair",
    seoDescription:
      "15 tested Gemini AI prompts for female portraits. " +
      "Editorial, fashion, cinematic, and cultural diversity looks. " +
      "Copy and generate instantly.",
    relatedToolSlugs: [
      "ai-headshot-generator",
      "ai-hairstyle-changer",
      "ai-professional-photo-generator",
    ],
    translations: {
      bn: {
        title: "মহিলা পোর্ট্রেটের জন্য ১৫টি Gemini AI প্রম্পট",
        excerpt:
          "Gemini AI মহিলা পোর্ট্রেটের জন্য ১৫টি পরীক্ষিত প্রম্পট। " +
          "সফট এডিটোরিয়াল, বোল্ড ফ্যাশন এবং সিনেমাটিক ড্রামা।",
        content:
          "# মহিলা পোর্ট্রেটের জন্য ১৫টি Gemini AI প্রম্পট\n\n" +
          "Gemini AI ভালো পোর্ট্রেট তৈরি করে যখন আলোর দিক, " +
          "ত্বকের টোন এবং আবেগীয় মেজাজ স্পষ্টভাবে উল্লেখ থাকে।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১৫টি Gemini AI মহিলা পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "Gemini AI দিয়ে মহিলা পোর্ট্রেটের জন্য ১৫টি প্রম্পট।",
      },
      hi: {
        title: "महिला पोर्ट्रेट के लिए 15 Gemini AI प्रॉम्प्ट",
        excerpt:
          "Gemini AI महिला पोर्ट्रेट के लिए 15 परीक्षित प्रॉम्प्ट। " +
          "सॉफ्ट एडिटोरियल, बोल्ड फैशन और सिनेमाई ड्रामा।",
        content:
          "# महिला पोर्ट्रेट के लिए 15 Gemini AI प्रॉम्प्ट\n\n" +
          "Gemini AI अच्छे पोर्ट्रेट बनाता है जब प्रकाश की दिशा, " +
          "त्वचा का रंग और भावनात्मक मूड स्पष्ट रूप से निर्दिष्ट हो।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "15 Gemini AI महिला पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "Gemini AI से महिला पोर्ट्रेट के लिए 15 प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-16"),
  },
  // ── 7. ChatGPT Realistic Portraits ───────────────────────
  {
    slug: "12-chatgpt-prompts-modern-realistic-portraits",
    title:
      "12 ChatGPT Prompts for Modern Realistic Portraits",
    excerpt:
      "12 prompts for photorealistic portraits using ChatGPT " +
      "image generation. Corporate headshots, lifestyle, " +
      "street photography, and cinematic close-ups.",
    content: `# 12 ChatGPT Prompts for Modern Realistic Portraits That Look Professionally Shot
ChatGPT's image model produces strong photorealistic results when prompts specify camera equipment, lighting setup, and post-processing style. These 12 prompts are structured like professional photography briefs.
The Photography Brief Structure
Every prompt below follows this framework: Subject description → Camera and lens → Lighting setup → Location and background → Post-processing style. This matches how a real photographer communicates with a client.

Corporate and Professional (Prompts 1-3)
1. LinkedIn Corporate Headshot
\`\`\`
Photorealistic corporate headshot, professional in business
attire, clean grey or white seamless background, three-point
studio lighting with soft fill, sharp focus on eyes,
natural skin retouching, Sony A7R lens quality,
85mm portrait lens compression, confident approachable
expression, LinkedIn-ready portrait
\`\`\`
2. Creative Professional Headshot
\`\`\`
Photorealistic headshot for creative professional,
casual smart styling with personal character,
brick wall or industrial background softly blurred,
natural afternoon window light, relaxed candid expression,
50mm street photography lens, warm colour grade,
approachable and human quality, modern personal brand
\`\`\`
3. Medical or Academic Professional
\`\`\`
Photorealistic professional portrait, academic or medical
context, confident authoritative expression, clean
institutional background, neutral professional clothing,
even studio lighting, sharp and credible, formal
portrait quality suitable for university or hospital website
\`\`\`

Lifestyle and Candid (Prompts 4-7)
4. Coffee Shop Candid
\`\`\`
Photorealistic lifestyle portrait, person in coffee shop,
natural candid moment reading or on laptop, warm morning
window light, bokeh background of café interior, 35mm
documentary feel, authentic unstaged quality,
warm lifestyle colour grade
\`\`\`
5. Urban Street Portrait
\`\`\`
Photorealistic street portrait, natural urban environment,
person walking or pausing in city, environmental context
tells a story, shallow depth of field with city blur,
natural overcast or late afternoon light, 50mm Leica quality,
documentary photography feel, real and unposed
\`\`\`
6. Morning Routine Lifestyle
\`\`\`
Photorealistic lifestyle portrait, morning home environment,
natural window light creating warm side lighting, person
in casual home clothing, candid relaxed expression, kitchen
or reading nook background, warm neutral palette, authentic
everyday life aesthetic, soft film look
\`\`\`
7. Outdoor Adventure Portrait
\`\`\`
Photorealistic outdoor portrait, mountain or forest
environment, natural directional light, adventure or
outdoor clothing appropriate to setting, wind in hair
or movement implied, environmental storytelling,
wide angle with environmental context, National Geographic
editorial quality
\`\`\`

Cinematic Close-Ups (Prompts 8-11)
8. Movie Still Close-Up
\`\`\`
Photorealistic cinematic portrait, movie still aesthetic,
2.35:1 widescreen aspect ratio, single dramatic side light,
deep emotional expression, film grain, colour grade
matching modern cinema palette — teal shadows and warm
highlights, 35mm anamorphic lens quality
\`\`\`
9. High Contrast Drama
\`\`\`
Photorealistic dramatic portrait, Rembrandt lighting with
single strong side source, deep dark background, sharp
catchlight in eyes, visible skin texture and pores,
intense expression with emotional depth, monochrome
or deeply desaturated colour grade, fine art photography
\`\`\`
10. Environmental Storytelling
\`\`\`
Photorealistic portrait with deep environmental context,
subject and setting tell a complete story, location chosen
for narrative meaning, natural available light used
creatively, intimate and personal quality, 24mm wide
environment with 85mm compressed subject blend,
photojournalism aesthetic
\`\`\`
11. Fashion Portrait Crossover
\`\`\`
Photorealistic fashion-adjacent portrait, editorial styling
but human authenticity preserved, one strong creative
lighting element, outfit with clear fashion identity,
urban or studio setting, Vogue or i-D editorial quality,
skin texture visible, not over-retouched
\`\`\`

With Reference Photo Upload (Prompt 12)
12. Realistic Portrait from Photo
\`\`\`
Using the uploaded reference photo: maintain exact facial
identity, bone structure, and skin tone. Transform the
lighting to professional studio three-point setup.
Replace background with clean neutral grey seamless.
Apply natural professional skin retouching — visible pores,
no plastic smoothing. Sharp focus on eyes.
Sony A7R with 85mm f/1.4 quality. LinkedIn and press-ready.
\`\`\`
This prompt works best with the AI Professional Photo Generator tool. Upload your photo and use this prompt for studio-quality output.

The AI Headshot Generator applies similar professional treatment automatically without needing to specify all technical details manually.`,
    author: "Editorial Team",
    category: "portrait-prompts",
    tags: [
      "chatgpt",
      "realistic",
      "portrait",
      "prompts",
      "photography",
    ],
    readingTimeMinutes: 6,
    seoTitle:
      "12 ChatGPT Prompts for Realistic Portraits — Professionally Shot | next-stair",
    seoDescription:
      "12 ChatGPT prompts for photorealistic portraits. " +
      "Corporate headshots, lifestyle, street, and cinematic close-ups. " +
      "Copy and generate.",
    relatedToolSlugs: [
      "ai-professional-photo-generator",
      "ai-headshot-generator",
      "ai-avatar-generator",
    ],
    translations: {
      bn: {
        title:
          "আধুনিক বাস্তবসম্মত পোর্ট্রেটের জন্য ১২টি ChatGPT প্রম্পট",
        excerpt:
          "ChatGPT দিয়ে ফটোরিয়েলিস্টিক পোর্ট্রেটের জন্য ১২টি প্রম্পট। " +
          "কর্পোরেট হেডশট, লাইফস্টাইল, স্ট্রিট এবং সিনেমাটিক।",
        content:
          "# আধুনিক বাস্তবসম্মত পোর্ট্রেটের জন্য ১২টি ChatGPT প্রম্পট\n\n" +
          "ChatGPT ইমেজ মডেল ভালো ফলাফল দেয় যখন প্রম্পট ক্যামেরা সরঞ্জাম, " +
          "আলোর সেটআপ এবং পোস্ট-প্রসেসিং স্টাইল নির্দিষ্ট করে।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১২টি ChatGPT রিয়েলিস্টিক পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "ChatGPT দিয়ে ফটোরিয়েলিস্টিক পোর্ট্রেটের জন্য ১২টি প্রম্পট।",
      },
      hi: {
        title:
          "आधुनिक यथार्थवादी पोर्ट्रेट के लिए 12 ChatGPT प्रॉम्प्ट",
        excerpt:
          "ChatGPT से फोटोरियलिस्टिक पोर्ट्रेट के लिए 12 प्रॉम्प्ट। " +
          "कॉर्पोरेट हेडशॉट, लाइफस्टाइल, स्ट्रीट और सिनेमाई।",
        content:
          "# आधुनिक यथार्थवादी पोर्ट्रेट के लिए 12 ChatGPT प्रॉम्प्ट\n\n" +
          "ChatGPT इमेज मॉडल अच्छे परिणाम देता है जब कैमरा उपकरण, " +
          "लाइटिंग सेटअप और पोस्ट-प्रोसेसिंग स्टाइल निर्दिष्ट हो।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "12 ChatGPT रियलिस्टिक पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "ChatGPT से फोटोरियलिस्टिक पोर्ट्रेट के लिए 12 प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-18"),
  },
  // ── 8. Gemini Boys Portraits ──────────────────────────────
  {
    slug: "15-gemini-ai-photo-prompts-for-boys",
    title: "15 Google Gemini AI Photo Prompts for Boys",
    excerpt:
      "15 tested Gemini AI prompts for male portraits — from " +
      "casual to cinematic. Street style, sports, cultural fashion, " +
      "dark dramatic, and professional looks.",
    content: `# 15 Google Gemini AI Photo Prompts for Boys: From Casual to Cinematic
These 15 prompts cover the full range of male portrait aesthetics — casual lifestyle, fashion editorial, sports and action, cultural diversity, and cinematic drama. Each is structured to produce consistent results in Gemini AI.
Casual and Lifestyle (Prompts 1-4)
1. Casual Street Style
\`\`\`
Casual male portrait, relaxed street style clothing,
urban background blurred, natural afternoon light,
candid unstaged expression, 35mm street photography feel,
warm lifestyle colour grade, authentic and approachable,
shallow depth of field
\`\`\`
2. Coffee Shop Moment
\`\`\`
Male lifestyle portrait, café environment, morning window
light, casual styling, reading or working on laptop,
candid and natural, warm amber tones, bokeh background,
authentic everyday life, 50mm lens quality
\`\`\`
3. Outdoor Active Portrait
\`\`\`
Male outdoor portrait, natural environment — forest,
beach, or mountains, active casual clothing, natural
directional sunlight, movement or energy in pose,
adventurous lifestyle aesthetic, warm natural tones,
authentic and energetic
\`\`\`
4. Home Environment Portrait
\`\`\`
Male lifestyle portrait, home environment, natural window
light, relaxed weekend styling, reading or creative activity,
personal space visible with character, warm natural palette,
authentic documentary feel
\`\`\`

Fashion and Editorial (Prompts 5-8)
5. Streetwear Editorial
\`\`\`
Male streetwear editorial, urban environment, architectural
background, bold streetwear styling with oversized fit,
strong natural or artificial light, graphic shadow play,
fashion magazine quality, confident powerful pose
\`\`\`
6. Formal and Tailored
\`\`\`
Male fashion portrait, tailored suit or blazer,
clean architectural background, professional studio
lighting, sharp and confident expression, modern
menswear editorial, strong line quality in clothing,
GQ magazine aesthetic
\`\`\`
7. Cultural Fashion Portrait
\`\`\`
Male portrait in traditional South Asian formal attire,
sherwani with embroidery detail, warm evening golden light,
dignified proud expression, rich colour palette of
deep blue or burgundy, professional portrait quality,
cultural celebration aesthetic
\`\`\`
8. Vintage and Retro Style
\`\`\`
Male portrait in vintage 1970s inspired styling, warm
amber tones, vintage leather jacket or corduroy,
soft analogue film look, Kodak colour grade,
slightly overexposed highlights, nostalgic warmth,
vintage fashion editorial quality
\`\`\`

Sports and Action (Prompts 9-11)
9. Athletic Portrait
\`\`\`
Male athletic portrait, sports context implied,
strong confident build, dramatic studio lighting
with hard shadow, sports brand campaign aesthetic,
high energy and motivational, sharp focus, dark or
primary colour background, powerful visual impact
\`\`\`
10. Post-Game Candid
\`\`\`
Male sports candid portrait, post-game authentic moment,
natural stadium or outdoor lighting, sweat or exhaustion
visible and celebrated, authentic sports documentary
feel, emotional depth, 35mm sports photography quality
\`\`\`
11. Training Focus
\`\`\`
Male training portrait, gym or outdoor training environment,
intense concentration expression, natural available light
or dramatic spotlight, motion blur suggesting movement,
athletic editorial quality, aspirational fitness aesthetic
\`\`\`

Cinematic and Dramatic (Prompts 12-15)
12. Film Noir Portrait
\`\`\`
Male film noir portrait, single dramatic side light,
deep shadows, rain-slicked street or window reflection,
dark brooding expression, 1940s detective aesthetic,
black and white or heavily desaturated, film grain,
cinematic atmosphere
\`\`\`
13. Cinematic Close-Up
\`\`\`
Male cinematic close-up, 35mm film stock, extreme close-up
with shallow focus, one strong directional light,
intense emotional expression — determination or conflict,
film grain, teal and orange cinema colour grade
\`\`\`
14. Night City Portrait
\`\`\`
Male night portrait, city lights bokeh background,
neon sign light casting coloured light on face —
blue or red, rain reflections on street, urban noir
atmosphere, mysterious and cinematic, night street
photography quality
\`\`\`
15. Environmental Storytelling
\`\`\`
Male environmental portrait, location chosen for narrative
meaning — workshop, library, rooftop, industrial space,
available natural or practitioner light, subject and setting
tell a complete story, photojournalism documentary quality,
human interest editorial
\`\`\`

Pair these prompts with the AI Avatar Generator for stylised character versions, or the AI Headshot Generator when starting from a reference photo.`,
    author: "Editorial Team",
    category: "portrait-prompts",
    tags: ["male", "portrait", "gemini", "prompts", "boys"],
    readingTimeMinutes: 7,
    seoTitle:
      "15 Gemini AI Photo Prompts for Boys — Casual to Cinematic | next-stair",
    seoDescription:
      "15 tested Gemini AI prompts for male portraits. " +
      "Street style, fashion, sports, cultural, and cinematic. " +
      "Copy and generate instantly.",
    relatedToolSlugs: [
      "ai-avatar-generator",
      "ai-headshot-generator",
      "ai-professional-photo-generator",
    ],
    translations: {
      bn: {
        title:
          "ছেলেদের জন্য ১৫টি Google Gemini AI ফটো প্রম্পট",
        excerpt:
          "পুরুষ পোর্ট্রেটের জন্য ১৫টি Gemini AI প্রম্পট। " +
          "ক্যাজুয়াল থেকে সিনেমাটিক — স্ট্রিট স্টাইল, স্পোর্টস এবং আরও।",
        content:
          "# ছেলেদের জন্য ১৫টি Google Gemini AI ফটো প্রম্পট\n\n" +
          "এই ১৫টি প্রম্পট পুরুষ পোর্ট্রেট অ্যাসথেটিকের সম্পূর্ণ পরিসর কভার করে। " +
          "প্রতিটি প্রম্পট Gemini AI-তে ধারাবাহিক ফলাফল দেওয়ার জন্য কাঠামোবদ্ধ।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "ছেলেদের জন্য ১৫টি Gemini AI প্রম্পট | next-stair",
        seoDescription:
          "পুরুষ পোর্ট্রেটের জন্য ১৫টি Gemini AI প্রম্পট। " +
          "ক্যাজুয়াল থেকে সিনেমাটিক।",
      },
      hi: {
        title: "लड़कों के लिए 15 Google Gemini AI फोटो प्रॉम्प्ट",
        excerpt:
          "पुरुष पोर्ट्रेट के लिए 15 Gemini AI प्रॉम्प्ट। " +
          "कैजुअल से सिनेमाई — स्ट्रीट स्टाइल, स्पोर्ट्स और बहुत कुछ।",
        content:
          "# लड़कों के लिए 15 Google Gemini AI फोटो प्रॉम्प्ट\n\n" +
          "ये 15 प्रॉम्प्ट पुरुष पोर्ट्रेट एस्थेटिक की पूरी श्रृंखला को कवर करते हैं।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "लड़कों के लिए 15 Gemini AI प्रॉम्प्ट | next-stair",
        seoDescription:
          "पुरुष पोर्ट्रेट के लिए 15 Gemini AI प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-20"),
  },
  // ── 9. Mood-Driven Portraits ──────────────────────────────
  {
    slug: "10-gemini-ai-prompts-expressive-mood-portraits",
    title:
      "10 Google Gemini AI Prompts for Expressive Mood-Driven Portraits",
    excerpt:
      "10 prompts for emotionally expressive AI portraits — " +
      "melancholy, joy, rage, serenity, longing, and wonder. " +
      "Mood as the primary subject, not the person.",
    content: `# 10 Google Gemini AI Prompts for Expressive and Mood-Driven Portraits
In these prompts, emotion is the subject. The person is the vehicle. Each prompt is built around a specific psychological state and uses lighting, colour, and environmental cues to amplify it.
The Mood-First Framework
State the emotion first, then build the visual language around it. Lighting carries emotion more than expression. Cool blue light feels isolated. Warm amber feels nostalgic. High contrast feels dramatic. These prompts use specific light and colour to anchor each mood.

1. Melancholy — Quiet Sadness
\`\`\`
Expressive portrait of melancholy, cool grey and blue
colour palette, overcast diffused light, person looking
away from camera, weight in expression, rain on window
or empty bench implied, desaturated tones, quiet and
still composition, emotional depth without drama
\`\`\`
2. Joy — Uncontrolled Laughter
\`\`\`
Portrait of pure joy, candid laughter caught mid-moment,
warm golden outdoor light, eyes crinkled in genuine
smile, movement in hair or clothing, bright warm colour
palette, authentic unstaged moment, life-affirming energy,
Leica documentary quality
\`\`\`
3. Rage — Controlled Intensity
\`\`\`
Portrait of controlled rage, intense focused expression,
jaw set, direct camera stare, single harsh side light
creating strong shadow, dark background with one
hot highlight, crimson or deep red colour accent,
psychological intensity without theatricality,
fine art portrait quality
\`\`\`
4. Serenity — Meditative Peace
\`\`\`
Portrait of deep serenity, eyes closed or soft unfocused
gaze, soft morning light, natural setting with gentle
environmental sounds implied, warm neutral palette,
slow quiet composition, breath visible in expression,
contemplative and still, fine art photography
\`\`\`
5. Longing — Searching for Something Absent
\`\`\`
Portrait of longing, person looking into distance through
window or across landscape, warm golden sunset light,
slight wistfulness in expression, space and distance
emphasised, soft warm tones with cool shadow,
narrative ambiguity — what are they looking for,
cinematic emotional quality
\`\`\`
6. Wonder — Encountering the Unexpected
\`\`\`
Portrait of wonder, eyes wide and bright, soft upward
gaze, light from above as if discovering something
beautiful, childlike openness in adult face,
cool blue and white light, sense of scale — person
small against something large and luminous,
transcendent emotional quality
\`\`\`
7. Defiance — Refusing to Submit
\`\`\`
Portrait of defiance, direct unwavering camera stare,
chin slightly raised, set jaw, outdoor environmental
context — wind, rain, or harsh light as adversarial
element being faced, desaturated with one strong
warm accent, resistance and dignity in equal measure
\`\`\`
8. Grief — Processing Loss
\`\`\`
Portrait of grief, quiet interiority, no theatrical tears,
exhaustion visible in eyes, cool desaturated light,
person holding or touching something meaningful —
old photograph or empty chair implied,
quiet and respectful emotional quality,
fine art portrait photography
\`\`\`
9. Anticipation — Before Something Changes
\`\`\`
Portrait of anticipation, held breath visible in
expression, person on threshold — doorway, cliff edge,
first step, cool pre-dawn light in pale blue and grey,
story beginning rather than story told, psychological
tension through stillness, cinematic documentary quality
\`\`\`
10. Acceptance — Hard-Won Peace
\`\`\`
Portrait of acceptance, warm aged face or experienced
expression, soft side light, slight smile carrying
history and complexity, warm amber and gold tones,
sense of a long life behind the eyes, dignity and
completeness without sentimentality, fine art portrait,
masterwork quality
\`\`\`

These prompts pair naturally with the AI Photo to Sketch tool for a fine-art drawn version of any mood portrait, or the AI Color Grading tool to push the colour mood further after generation.`,
    author: "Editorial Team",
    category: "portrait-prompts",
    tags: ["mood", "emotion", "portrait", "gemini", "expressive"],
    readingTimeMinutes: 6,
    seoTitle:
      "10 Gemini AI Mood-Driven Portrait Prompts — Emotional Depth | next-stair",
    seoDescription:
      "10 AI prompts for expressive mood-driven portraits. Melancholy, " +
      "joy, rage, serenity, longing, and wonder. Copy and generate.",
    relatedToolSlugs: [
      "ai-photo-to-sketch",
      "ai-color-grading",
      "ai-headshot-generator",
    ],
    translations: {
      bn: {
        title:
          "অভিব্যক্তিমূলক মুড পোর্ট্রেটের জন্য ১০টি Gemini AI প্রম্পট",
        excerpt:
          "আবেগীয়ভাবে অভিব্যক্তিমূলক AI পোর্ট্রেটের জন্য ১০টি প্রম্পট। " +
          "বিষণ্নতা, আনন্দ, ক্রোধ, প্রশান্তি এবং বিস্ময়।",
        content:
          "# অভিব্যক্তিমূলক মুড পোর্ট্রেটের জন্য ১০টি Gemini AI প্রম্পট\n\n" +
          "এই প্রম্পটগুলোতে আবেগ হলো বিষয়। ব্যক্তি হলো মাধ্যম।\n\n" +
          "প্রতিটি প্রম্পট একটি নির্দিষ্ট মনস্তাত্ত্বিক অবস্থাকে কেন্দ্র করে " +
          "আলো, রঙ এবং পরিবেশগত সংকেত ব্যবহার করে।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১০টি Gemini AI মুড পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "আবেগীয় AI পোর্ট্রেটের জন্য ১০টি প্রম্পট।",
      },
      hi: {
        title:
          "भावपूर्ण मूड पोर्ट्रेट के लिए 10 Gemini AI प्रॉम्प्ट",
        excerpt:
          "भावनात्मक रूप से अभिव्यंजक AI पोर्ट्रेट के लिए 10 प्रॉम्प्ट। " +
          "उदासी, खुशी, क्रोध, शांति और आश्चर्य।",
        content:
          "# भावपूर्ण मूड पोर्ट्रेट के लिए 10 Gemini AI प्रॉम्प्ट\n\n" +
          "इन प्रॉम्प्ट में भावना ही विषय है। व्यक्ति माध्यम है।\n\n" +
          "प्रत्येक प्रॉम्प्ट एक विशिष्ट मनोवैज्ञानिक अवस्था पर " +
          "केंद्रित है।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "10 Gemini AI मूड पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "भावनात्मक AI पोर्ट्रेट के लिए 10 प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-22"),
  },
  // ── 10. Abstract Portraits ────────────────────────────────
  {
    slug: "12-gemini-ai-prompts-abstract-portraits",
    title:
      "12 Google Gemini AI Prompts for Abstract Portraits That Break the Rules",
    excerpt:
      "12 AI prompts for abstract portrait art — double exposure, " +
      "fragmented geometry, paint splash, liquid metal, surreal " +
      "dreamscape, and rule-breaking experimental styles.",
    content: `# 12 Google Gemini AI Prompts for Stunning Abstract Portraits That Break the Rules
Abstract portraits use the human face as raw material rather than as subject. These 12 prompts push away from photorealism toward painterly, geometric, surreal, and experimental visual languages.
What Makes an Abstract Portrait Work
The face must remain legible — recognisable as human — even as the treatment moves away from realism. The best abstract portraits hold that tension between representation and abstraction. Prompts 1-4 use artistic medium overlays. Prompts 5-8 use structural deconstruction. Prompts 9-12 use surreal and conceptual approaches.

Artistic Medium Overlay (Prompts 1-4)
1. Oil Painting Impasto
\`\`\`
Abstract portrait in thick impasto oil paint style,
visible heavy palette knife strokes, rich jewel colour
palette of cobalt, crimson, and ochre, face partially
dissolved into paint texture, paint ridges catching light,
expressionist gestural quality, Franz Kline and
de Kooning influence, gallery fine art quality
\`\`\`
2. Watercolour Bloom
\`\`\`
Abstract watercolour portrait, paint bleeding and blooming
beyond facial edges, wet-on-wet technique implied,
delicate colour washes of teal, coral, and lavender,
face emerging from colour field, white paper showing
through, lyrical and spontaneous quality, contemporary
fine art illustration
\`\`\`
3. Ink Wash Portrait
\`\`\`
Abstract ink wash portrait, East Asian sumi-e ink tradition,
black ink of varying density on white, face suggested
with minimal strokes, negative space as powerful as
mark-making, drips and blooms of ink, calligraphic
quality, contemporary art using classical medium
\`\`\`
4. Digital Glitch Portrait
\`\`\`
Abstract digital glitch portrait, face disrupted by data
corruption visual effects, pixel sorting creating
vertical colour streaks, RGB channel displacement,
scan lines and compression artifacts as aesthetic,
cyberpunk digital art, high contrast base image
transformed by systematic digital destruction
\`\`\`

Structural Deconstruction (Prompts 5-8)
5. Geometric Fragmentation
\`\`\`
Abstract geometric portrait, face shattered into polygonal
low-poly mesh fragments, each facet catching different
light, cubist deconstruction meets digital aesthetic,
cool geometric colour palette, sharp edges between planes,
structural abstract art, design editorial quality
\`\`\`
6. Double Exposure
\`\`\`
Abstract double exposure portrait, human face merged with
forest or architectural texture, trees or geometric
structure visible inside facial silhouette,
monochrome or duotone colour treatment,
dreamlike merged identity, fine art photography
manipulation, strong graphic quality
\`\`\`
7. Mirror Symmetry
\`\`\`
Abstract symmetrical portrait, perfect bilateral mirror
image creating mandala-like composition, face fractured
into kaleidoscopic pattern, unexpected new shapes
emerging from symmetry, rich colour or monochrome,
meditative geometric quality, fine art digital manipulation
\`\`\`
8. Paint Splash Integration
\`\`\`
Abstract portrait with explosive paint splash,
photorealistic face emerging from or dissolving into
liquid paint explosion, high-speed photography aesthetic,
complementary colour contrast between portrait and paint,
dramatic visual impact, commercial art campaign quality
\`\`\`

Surreal and Conceptual (Prompts 9-12)
9. Cosmic Portrait
\`\`\`
Surreal cosmic portrait, face constructed from or dissolving
into galaxy, nebula, and star field imagery, deep space
colours of indigo, purple, and gold, face and cosmos
in visual dialogue, spiritual transcendence implied,
fine art digital surrealism
\`\`\`
10. Liquid Metal
\`\`\`
Abstract liquid metal portrait, mercury or chrome surface
texture for skin, reflective metallic sheen capturing
environmental light, features morphed into liquid state
mid-transformation, science fiction aesthetic,
industrial art, high-gloss production quality
\`\`\`
11. Botanical Integration
\`\`\`
Surreal botanical portrait, face grown over with or
constructed from living plants and flowers, moss texture
on skin, petals replacing features, roots as hair,
magical realism quality, extreme macro detail,
nature reclaiming the human, fine art surrealism
\`\`\`
12. Paper Collage Deconstruction
\`\`\`
Abstract paper collage portrait, face reconstructed from
torn magazine pages and newsprint fragments, visible paper
edges and depths, mixed texture of print patterns and
solid colours, contemporary street art collage aesthetic,
layered dimensional quality, handmade tactile impression
\`\`\`

These abstract prompts work especially well with the AI Photo to Sketch tool as a starting point. The AI Avatar Generator also supports abstract stylisation when prompts describe the desired art direction clearly.`,
    author: "Editorial Team",
    category: "style-guides",
    tags: ["abstract", "portrait", "art", "gemini", "experimental"],
    readingTimeMinutes: 7,
    seoTitle:
      "12 Gemini AI Abstract Portrait Prompts — Break the Rules | next-stair",
    seoDescription:
      "12 AI prompts for abstract portrait art. Double exposure, " +
      "geometric fragmentation, paint splash, and surreal dreamscapes. " +
      "Copy and generate.",
    relatedToolSlugs: [
      "ai-photo-to-sketch",
      "ai-avatar-generator",
      "ai-color-grading",
    ],
    translations: {
      bn: {
        title:
          "নিয়ম ভাঙা অ্যাবস্ট্রাক্ট পোর্ট্রেটের জন্য ১২টি Gemini AI প্রম্পট",
        excerpt:
          "অ্যাবস্ট্রাক্ট পোর্ট্রেট আর্টের জন্য ১২টি AI প্রম্পট। " +
          "ডাবল এক্সপোজার, জ্যামিতিক বিভাজন এবং অতিবাস্তব শৈলী।",
        content:
          "# অ্যাবস্ট্রাক্ট পোর্ট্রেটের জন্য ১২টি Gemini AI প্রম্পট\n\n" +
          "অ্যাবস্ট্রাক্ট পোর্ট্রেট মানুষের মুখকে কাঁচামাল হিসেবে ব্যবহার করে।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১২টি Gemini AI অ্যাবস্ট্রাক্ট পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "অ্যাবস্ট্রাক্ট AI পোর্ট্রেটের জন্য ১২টি প্রম্পট।",
      },
      hi: {
        title:
          "नियम तोड़ने वाले अमूर्त पोर्ट्रेट के लिए 12 Gemini AI प्रॉम्प्ट",
        excerpt:
          "अमूर्त पोर्ट्रेट कला के लिए 12 AI प्रॉम्प्ट। " +
          "डबल एक्सपोजर, ज्यामितीय विखंडन और अतियथार्थवादी शैलियां।",
        content:
          "# अमूर्त पोर्ट्रेट के लिए 12 Gemini AI प्रॉम्प्ट\n\n" +
          "अमूर्त पोर्ट्रेट मानव चेहरे को कच्चे माल के रूप में उपयोग करता है।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "12 Gemini AI अमूर्त पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "अमूर्त AI पोर्ट्रेट के लिए 12 प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-24"),
  },
  // ── 11. Rembrandt-Style Portraits ─────────────────────────
  {
    slug: "10-rembrandt-style-dark-dramatic-portrait-prompts",
    title:
      "10 Gemini AI Prompts for Rembrandt-Style Dark and Dramatic Portrait Photos",
    excerpt:
      "10 tested prompts for Rembrandt-style AI portraits — " +
      "single light source, deep shadow, golden skin tones, and " +
      "the psychological depth of 17th-century Dutch masters.",
    content: `# 10 Gemini AI Prompts for Rembrandt-Style Dark and Dramatic Portrait Photos
Rembrandt's portraits do one thing better than almost any other artist in history: they make you feel the inner life of a person you've never met. The technical signature — single warm light, deep surrounding shadow, the characteristic triangle of light on the cheek — is the vehicle for something much harder to define.
These 10 prompts use Rembrandt's visual language to produce portraits with psychological weight.
The Rembrandt Formula
Three elements define every Rembrandt portrait: the light (warm, single source, upper-right or upper-left), the shadow (deep, occupying more than half the frame), and the expression (quiet, interior, not performing for the viewer). Every prompt below uses all three.

1. Classic Rembrandt Triangle
\`\`\`
Portrait in Rembrandt lighting, single warm candlelight
source from upper right, characteristic triangle of light
on left cheek, deep dark background, aged face with
wisdom and complexity, simple dark clothing, golden
warm skin tones, oil paint texture, Dutch Golden Age
masterwork quality, psychological depth
\`\`\`
2. Young Scholar
\`\`\`
Rembrandt-style portrait of a young scholar, warm lamp
light from upper left, open book in hands, expression
of intense concentration, dark study background,
scholarly clothing from undefined historical period,
rich earth tones of ochre and umber, contemplative
and serious, masterwork portraiture quality
\`\`\`
3. The Merchant
\`\`\`
Rembrandt-style merchant portrait, single candle source,
coins or ledger visible in hands, prosperous but not
ostentatious clothing, expression carries weight of
commerce and accumulated knowledge, Dutch 17th century
merchant class aesthetic, warm amber candlelight,
deep dark background, masterwork oil painting quality
\`\`\`
4. The Widow
\`\`\`
Rembrandt-style portrait of a widow, deep grief and
quiet dignity in equal measure, dark mourning clothing
with white linen collar, single warm light source from
upper left, hands clasped quietly in lap, deep surrounding
shadow, interior life visible in expression, Dutch Golden
Age restraint and emotional depth
\`\`\`
5. The Soldier
\`\`\`
Rembrandt-style military portrait, battered armour with
warm light catching metal surfaces, battle-weary expression
carrying quiet dignity, strong directional side light,
deep dark background, Dutch Golden Age military portrait,
psychological complexity beneath the soldier's bearing,
masterwork oil painting quality
\`\`\`
6. Self Portrait Study
\`\`\`
Rembrandt-style self-portrait, unsentimental examination
of the self, aged face rendered with no vanity,
warm single light source from upper right, deep dark
background, full visibility of skin texture and life
experience, psychological honesty, Dutch Golden Age
masterwork self-portraiture quality
\`\`\`
7. The Philosopher
\`\`\`
Rembrandt-style philosopher portrait, aged face in deep
contemplation, books and manuscripts visible on dark desk,
single warm candlelight illuminating one side of face,
vast dark background suggesting infinite thought,
scholarly robe, Dutch Golden Age intellectual portrait,
interior life as the real subject
\`\`\`
8. Mother and Child
\`\`\`
Rembrandt-style intimate domestic portrait, mother and
young child in warm candlelight, tender quiet interaction,
deep dark background receding behind them, soft warm
amber light on both faces, domestic warmth without
sentimentality, Dutch interior genre painting quality
\`\`\`
9. The Musician
\`\`\`
Rembrandt-style musician portrait, instrument held in
moment of absorbed concentration or just set down,
warm light catching the instrument surface and one side
of face, emotional interiority visible in expression,
deep shadow surrounding the figure, Dutch Golden Age
musical portrait quality
\`\`\`
10. Contemporary Rembrandt
\`\`\`
Contemporary portrait using Rembrandt's lighting formula,
modern subject with 17th-century lighting technique,
single warm studio spotlight from upper right,
characteristic triangle of light on cheek, dark neutral
background, photographic quality combined with painterly
chiaroscuro depth, bridging Dutch Golden Age and today
\`\`\`

These prompts work best with portrait aspect ratio and high-resolution output. The AI Professional Photo Generator can apply Rembrandt-style lighting treatment to an uploaded reference photo. For a more painterly final result, use the AI Color Grading tool to deepen the shadow contrast, or the AI Photo to Sketch tool for a drawn interpretation.`,
    author: "Editorial Team",
    category: "style-guides",
    tags: ["rembrandt", "portrait", "dramatic", "lighting", "prompts"],
    readingTimeMinutes: 6,
    seoTitle:
      "10 Gemini AI Rembrandt-Style Portrait Prompts — Dark Dramatic | next-stair",
    seoDescription:
      "10 tested prompts for Rembrandt-style AI portraits. " +
      "Single light source, deep shadow, and psychological depth. " +
      "Copy and generate instantly.",
    relatedToolSlugs: [
      "ai-professional-photo-generator",
      "ai-photo-to-sketch",
      "ai-color-grading",
    ],
    translations: {
      bn: {
        title:
          "রেমব্রান্ট-স্টাইল ডার্ক পোর্ট্রেটের জন্য ১০টি Gemini AI প্রম্পট",
        excerpt:
          "রেমব্রান্ট-স্টাইল AI পোর্ট্রেটের জন্য ১০টি প্রম্পট। " +
          "একক আলোর উৎস, গভীর ছায়া এবং মনস্তাত্ত্বিক গভীরতা।",
        content:
          "# রেমব্রান্ট-স্টাইল পোর্ট্রেটের জন্য ১০টি Gemini AI প্রম্পট\n\n" +
          "রেমব্রান্টের পোর্ট্রেট তিনটি জিনিস দ্বারা সংজ্ঞায়িত: " +
          "উষ্ণ আলো, গভীর ছায়া, এবং নীরব অভিব্যক্তি।\n\n" +
          "বিস্তারিত প্রম্পটের জন্য ইংরেজি সংস্করণ দেখুন।",
        seoTitle:
          "১০টি Gemini AI রেমব্রান্ট-স্টাইল পোর্ট্রেট প্রম্পট | next-stair",
        seoDescription:
          "রেমব্রান্ট-স্টাইল AI পোর্ট্রেটের জন্য ১০টি প্রম্পট।",
      },
      hi: {
        title:
          "रेम्ब्रां-स्टाइल डार्क पोर्ट्रेट के लिए 10 Gemini AI प्रॉम्प्ट",
        excerpt:
          "रेम्ब्रां-स्टाइल AI पोर्ट्रेट के लिए 10 प्रॉम्प्ट। " +
          "एकल प्रकाश स्रोत, गहरी छाया और मनोवैज्ञानिक गहराई।",
        content:
          "# रेम्ब्रां-स्टाइल पोर्ट्रेट के लिए 10 Gemini AI प्रॉम्प्ट\n\n" +
          "रेम्ब्रां के पोर्ट्रेट तीन चीजों से परिभाषित होते हैं: " +
          "गर्म प्रकाश, गहरी छाया, और शांत अभिव्यक्ति।\n\n" +
          "विस्तृत प्रॉम्प्ट के लिए अंग्रेजी संस्करण देखें।",
        seoTitle:
          "10 Gemini AI रेम्ब्रां-स्टाइल पोर्ट्रेट प्रॉम्प्ट | next-stair",
        seoDescription:
          "रेम्ब्रां-स्टाइल AI पोर्ट्रेट के लिए 10 प्रॉम्प्ट।",
      },
    },
    isPublished: true,
    publishedAt: new Date("2026-05-26"),
  },
]

async function seedBlog() {
  console.log(`Seeding ${posts.length} blog posts...`)
  for (const post of posts) {
    await db
      .insert(blogPosts)
      .values(post)
      .onConflictDoNothing()

    console.log(`✓ ${post.title} (${post.slug})`)
  }

  console.log("Done. Blog posts are live.")
  process.exit(0)
}

seedBlog().catch((err) => {
  console.error(err)
  process.exit(1)
})
