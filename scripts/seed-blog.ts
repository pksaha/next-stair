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
