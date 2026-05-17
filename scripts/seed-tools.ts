import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { toolConfigs } from "../src/db/schema"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

const tools = [
  {
    slug: "ai-headshot-generator",
    name: "AI Headshot Generator",
    description:
      "Transform any photo into a professional headshot using AI. " +
      "Perfect for LinkedIn, resumes, and corporate profiles.",
    category: "ai-effects",
    promptTemplate:
      "Professional corporate headshot portrait of a person, " +
      "studio lighting, clean background, sharp focus, " +
      "business attire, photorealistic, high resolution",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any selfie into a professional headshot in seconds",
      "Studio-quality lighting added automatically",
      "Clean backgrounds: white, grey, or office settings",
      "Perfect for LinkedIn, CVs, and company directories",
      "Works with any photo — no professional camera needed",
    ],
    faqItems: [
      {
        q: "What type of photo should I upload?",
        a:
          "Any clear photo showing your face works well. " +
          "Front-facing photos with good lighting give the best results.",
      },
      {
        q: "Can I choose the background colour?",
        a:
          "Yes — describe your preferred background in the prompt, " +
          "such as 'white background' or 'blurred office background'.",
      },
      {
        q: "How many credits does this use?",
        a: "One generation uses 1 credit regardless of quality setting.",
      },
      {
        q: "Is this suitable for professional use?",
        a:
          "Yes. The output is a high-resolution PNG suitable for " +
          "LinkedIn, company websites, and printed materials.",
      },
    ],
    seoTitle:
      "AI Headshot Generator — Professional Photos in Seconds | next-stair",
    seoDescription:
      "Generate studio-quality professional headshots from any photo " +
      "using AI. Perfect for LinkedIn, CVs, and corporate profiles. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 1,
  },
  {
    slug: "ai-avatar-generator",
    name: "AI Avatar Generator",
    description:
      "Create unique AI avatars for social media, gaming profiles, " +
      "and digital identities. Dozens of styles available.",
    category: "ai-effects",
    promptTemplate:
      "Digital avatar portrait, stylized illustration, " +
      "vibrant colors, clean design, social media profile picture style, " +
      "centered composition, high quality",
    exampleOutputUrls: [],
    featureBullets: [
      "Create avatars in dozens of artistic styles",
      "Perfect for Twitter, Discord, Twitch, and gaming profiles",
      "Upload a photo to base the avatar on your face",
      "Or generate entirely from a text description",
      "High-resolution output ready for any platform",
    ],
    faqItems: [
      {
        q: "Do I need to upload a photo?",
        a:
          "No — you can describe your avatar in text and generate " +
          "from scratch. Or upload a photo to base it on your appearance.",
      },
      {
        q: "What styles can I generate?",
        a:
          "Anime, pixel art, oil painting, cartoon, cyberpunk, " +
          "fantasy, and more — just describe the style in your prompt.",
      },
      {
        q: "What size is the output?",
        a:
          "1024×1024 pixels for square avatars, which is the " +
          "recommended size for most social platforms.",
      },
    ],
    seoTitle:
      "AI Avatar Generator — Custom Profile Pictures with AI | next-stair",
    seoDescription:
      "Generate unique AI avatars for any style — anime, pixel art, " +
      "cartoon, and more. Upload a photo or describe from scratch. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 2,
  },
  {
    slug: "pixar-ai-generator",
    name: "Pixar AI Generator",
    description:
      "Transform any photo into a Pixar-style 3D animated character. " +
      "Bring your family, pets, and friends into the Pixar universe.",
    category: "ai-effects",
    promptTemplate:
      "Pixar animated movie character style, 3D CGI rendering, " +
      "warm lighting, expressive features, smooth textures, " +
      "cinematic quality, Disney Pixar aesthetic",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any photo into a Pixar-style 3D character",
      "Works for people, pets, and even objects",
      "Perfect for family portraits and social media",
      "Captures the warm, expressive Pixar art style",
      "High-resolution output suitable for printing",
    ],
    faqItems: [
      {
        q: "Does this work for pets?",
        a:
          "Yes — upload a photo of your pet and describe it in the " +
          "prompt. Dogs, cats, and other animals work great.",
      },
      {
        q: "Can I use this for a group photo?",
        a:
          "For best results, generate one character at a time. " +
          "Group photos can work but individual photos give sharper results.",
      },
      {
        q: "Is this affiliated with Pixar or Disney?",
        a:
          "No — this tool uses AI to replicate the visual style. " +
          "It is not affiliated with Pixar Animation Studios or Disney.",
      },
    ],
    seoTitle:
      "Pixar AI Generator — Turn Photos into Pixar Characters | next-stair",
    seoDescription:
      "Transform any photo into a Pixar-style 3D animated character " +
      "with AI. Works for people and pets. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 3,
  },
  {
    slug: "ai-cosplay-generator",
    name: "AI Cosplay Generator",
    description:
      "Transform any photo into stunning cosplay art. " +
      "Become Jinx, Naruto, Spider-Man, or any character " +
      "you love — no costume required.",
    category: "ai-effects",
    promptTemplate:
      "Transform the uploaded portrait so the person is " +
      "realistically cosplaying as the described character. " +
      "Professional photo studio backdrop, softbox lighting, " +
      "sharp focus, accurate costume details, fabric texture, " +
      "photorealistic, high resolution.",
    exampleOutputUrls: [],
    featureBullets: [
      "Become any anime, game, or movie character instantly",
      "Upload your photo — costume and makeup added by AI",
      "Specify any character: Jinx, Naruto, Deadpool, Chun-Li",
      "Studio-quality lighting applied automatically",
      "Perfect for social media, events, and fan communities",
    ],
    faqItems: [
      {
        q: "Which characters can I cosplay as?",
        a: "Any character — anime, manga, video games, movies, " +
          "TV shows, and comics. Just describe the character " +
          "in the prompt field.",
      },
      {
        q: "Do I need to be in costume already?",
        a: "No. Upload any portrait photo and the AI adds the " +
          "costume, makeup, and styling automatically.",
      },
      {
        q: "Can I specify the background?",
        a: "Yes — add background details to your prompt, such as " +
          "'cherry blossom park background' or 'dark alley setting'.",
      },
      {
        q: "What photo format should I upload?",
        a: "JPG, PNG, or WEBP. A clear front-facing portrait " +
          "gives the best cosplay transformation results.",
      },
    ],
    seoTitle:
      "AI Cosplay Generator — Turn Photos into Cosplay Art Free | next-stair",
    seoDescription:
      "Transform any photo into realistic cosplay art with AI. " +
      "Become any anime, game, or movie character instantly. " +
      "No costume needed. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 4,
  },
  {
    slug: "anime-to-real",
    name: "Anime to Real Life AI",
    description:
      "Convert 2D anime characters into photorealistic human " +
      "portraits. See your favourite characters come to life " +
      "with accurate human proportions and skin textures.",
    category: "ai-effects",
    promptTemplate:
      "Transform the anime-style character into a realistic " +
      "human portrait. Keep same pose, outfit style, and hair " +
      "structure. Convert anime facial features into natural " +
      "human proportions. Realistic skin texture, visible pores, " +
      "natural eye shape, cinematic lighting, shallow depth of " +
      "field, 85mm lens, photorealistic, ultra high resolution.",
    exampleOutputUrls: [],
    featureBullets: [
      "Convert any anime character into a realistic human photo",
      "Preserves pose, outfit, and hairstyle from the original",
      "Natural human proportions and skin texture applied",
      "Works with manga, webtoon, and fan art styles",
      "Perfect for bringing your favourite characters to life",
    ],
    faqItems: [
      {
        q: "What image types work best?",
        a: "Clear anime character art with a visible face works " +
          "best. Full-body and portrait angles both work well.",
      },
      {
        q: "Will the outfit be preserved?",
        a: "Yes — the AI preserves the character's clothing style, " +
          "hair colour, and accessories while converting to realism.",
      },
      {
        q: "Can I convert manga (black and white) images?",
        a: "Yes. The AI interprets black and white art and adds " +
          "realistic colour and lighting in the output.",
      },
      {
        q: "Does this work for original characters (OCs)?",
        a: "Yes — any anime-style art works, whether it is a " +
          "known character or your own original creation.",
      },
    ],
    seoTitle:
      "Anime to Real Life AI Converter — Free Online Tool | next-stair",
    seoDescription:
      "Turn any anime character into a photorealistic human portrait " +
      "with AI. Upload anime art and see lifelike results in seconds. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 5,
  },
  {
    slug: "photo-restoration",
    name: "AI Photo Restoration",
    description:
      "Restore old, damaged, faded, or scratched photos to " +
      "crystal clarity. Bring family memories back to life " +
      "with AI-powered repair.",
    category: "ai-effects",
    promptTemplate:
      "Restore this old photograph to high quality. Remove " +
      "scratches, tears, and stains. Fix fading and color loss. " +
      "Sharpen facial details. Enhance contrast and clarity " +
      "while preserving the original composition. Photorealistic " +
      "restoration, natural colors, high resolution output.",
    exampleOutputUrls: [],
    featureBullets: [
      "Remove scratches, tears, and stains automatically",
      "Fix fading and restore original colors",
      "Sharpen blurry faces and background details",
      "Works on black and white and sepia photos",
      "Perfect for preserving family history and memories",
    ],
    faqItems: [
      {
        q: "How damaged can the photo be?",
        a: "The AI handles light to moderate damage well — " +
          "scratches, fading, tears, and water stains. " +
          "Severely damaged photos may have partial restoration.",
      },
      {
        q: "Will it add color to black and white photos?",
        a: "By default, no — it restores the original style. " +
          "Add 'add natural color' to your prompt to colorize " +
          "a black and white photo.",
      },
      {
        q: "What resolution should I upload?",
        a: "Any resolution works but higher-resolution scans " +
          "of the original photo give sharper output results.",
      },
      {
        q: "Is my uploaded photo stored anywhere?",
        a: "No — your uploaded image is processed immediately " +
          "and not stored on our servers permanently.",
      },
    ],
    seoTitle:
      "AI Photo Restoration — Repair Old & Damaged Photos Free | next-stair",
    seoDescription:
      "Restore old, damaged, and faded photos with AI. Remove " +
      "scratches, fix colors, and sharpen details in seconds. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 6,
  },
  {
    slug: "ai-selfie-with-celebrities-generator",
    name: "AI Celebrity Selfie Generator",
    description:
      "Generate AI selfies alongside your favourite celebrities, " +
      "athletes, and public figures. Create fun social media " +
      "content without leaving home.",
    category: "ai-effects",
    promptTemplate:
      "Create a realistic selfie photo of two people together. " +
      "Casual selfie angle, natural lighting, smartphone camera " +
      "style, slightly wide angle lens, candid and natural pose, " +
      "both faces clearly visible, photorealistic, high quality.",
    exampleOutputUrls: [],
    featureBullets: [
      "Generate realistic AI selfies with any described person",
      "Natural selfie angle and smartphone camera aesthetic",
      "Perfect for fun social media content",
      "Upload your own photo for face reference",
      "Describe any setting or occasion for context",
    ],
    faqItems: [
      {
        q: "Can I describe any celebrity or public figure?",
        a: "You can describe a person's appearance and style " +
          "in the prompt. Results are AI-generated and clearly " +
          "fictional — not real photographs.",
      },
      {
        q: "Is this suitable for social media?",
        a: "Yes — just make it clear in captions that the image " +
          "is AI-generated. Transparent labelling is good practice.",
      },
      {
        q: "Can I upload my own photo for the selfie?",
        a: "Yes — upload your portrait and describe who you want " +
          "to appear alongside you in the selfie.",
      },
      {
        q: "What settings work well for selfies?",
        a: "Outdoor settings like beaches and cityscapes work " +
          "great. Indoor settings like restaurants and events " +
          "also produce natural-looking results.",
      },
    ],
    seoTitle:
      "AI Celebrity Selfie Generator — Free AI Selfie Creator | next-stair",
    seoDescription:
      "Generate fun AI selfies with celebrities and public figures. " +
      "Upload your photo or describe the scene. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 7,
  },
  {
    slug: "ai-floor-plan-generator",
    name: "AI Floor Plan Generator",
    description:
      "Generate clean 2D and 3D floor plans from text " +
      "descriptions or rough sketches. Perfect for architects, " +
      "interior designers, and homeowners planning renovations.",
    category: "ai-effects",
    promptTemplate:
      "Generate a clean architectural floor plan. Top-down view, " +
      "precise room layout, labelled rooms, walls shown in black, " +
      "rooms in light grey, dimensions indicated, professional " +
      "architectural drawing style, clear and readable.",
    exampleOutputUrls: [],
    featureBullets: [
      "Generate floor plans from a text description alone",
      "Upload a rough sketch and get a clean architectural plan",
      "Label rooms, add dimensions, and specify layout",
      "Works for apartments, houses, and commercial spaces",
      "Export-ready for use in presentations and planning",
    ],
    faqItems: [
      {
        q: "Do I need to upload a sketch?",
        a: "No — you can describe the layout in text and the AI " +
          "generates a floor plan. Uploading a rough sketch " +
          "improves accuracy for complex layouts.",
      },
      {
        q: "Can I specify room sizes?",
        a: "Yes — include dimensions in your prompt, such as " +
          "'master bedroom 4m × 5m' or 'open-plan kitchen 6m wide'.",
      },
      {
        q: "Is the output suitable for construction?",
        a: "The output is an AI-generated illustration, not an " +
          "approved architectural drawing. It is suitable for " +
          "planning and visualisation purposes.",
      },
      {
        q: "Can I generate 3D floor plans?",
        a: "Yes — add '3D isometric view' to your prompt for a " +
          "three-dimensional perspective of the floor plan.",
      },
    ],
    seoTitle:
      "AI Floor Plan Generator — Design Room Layouts Free | next-stair",
    seoDescription:
      "Generate professional floor plans from text or sketches with AI. " +
      "Perfect for home renovation, interior design, and architecture. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 8,
  },
  {
    slug: "ai-image-combiner",
    name: "AI Image Combiner",
    description:
      "Blend two or more images seamlessly into one composite. " +
      "Merge faces, swap backgrounds, combine objects, and create " +
      "surreal or realistic mashups with AI.",
    category: "ai-effects",
    promptTemplate:
      "Seamlessly combine the uploaded images into a single " +
      "cohesive composition. Blend lighting, shadows, and color " +
      "grading naturally. The merged result should look like a " +
      "single original photograph, photorealistic, high quality.",
    exampleOutputUrls: [],
    featureBullets: [
      "Blend multiple images into one seamless composition",
      "Merge faces, backgrounds, and objects naturally",
      "Lighting and shadows matched automatically",
      "Create surreal art or realistic photo composites",
      "Upload up to 3 images for complex combinations",
    ],
    faqItems: [
      {
        q: "How many images can I combine at once?",
        a: "Upload up to 3 images and describe how you want " +
          "them combined in the prompt field.",
      },
      {
        q: "Can I swap just the background of a photo?",
        a: "Yes — upload your subject photo and describe the " +
          "new background. The AI blends them naturally.",
      },
      {
        q: "Does it work for face swapping?",
        a: "You can blend facial features between portraits. " +
          "Describe the blending style in your prompt for " +
          "best control over the output.",
      },
      {
        q: "What image formats are accepted?",
        a: "JPG, PNG, and WEBP. Keep each image under 10MB " +
          "for the fastest processing.",
      },
    ],
    seoTitle:
      "AI Image Combiner — Blend & Merge Photos Free | next-stair",
    seoDescription:
      "Combine and blend multiple photos into one seamless image " +
      "with AI. Merge faces, swap backgrounds, and create composites. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 9,
  },
  {
    slug: "ai-sticker-generator",
    name: "AI Sticker Generator",
    description:
      "Create custom AI stickers for WhatsApp, Telegram, iMessage, " +
      "and social media. Turn any photo or idea into a fun, " +
      "shareable sticker pack.",
    category: "ai-effects",
    promptTemplate:
      "Create a fun sticker design with a transparent background. " +
      "Bold clean outlines, vibrant colors, playful cartoon style, " +
      "expressive and emotive, suitable for messaging apps, " +
      "white border around the subject, sticker aesthetic.",
    exampleOutputUrls: [],
    featureBullets: [
      "Generate custom stickers for WhatsApp and Telegram",
      "Transparent PNG background ready for messaging apps",
      "Bold outlines and vibrant colors applied automatically",
      "Turn your pet, face, or any idea into a sticker",
      "Download as PNG and share instantly",
    ],
    faqItems: [
      {
        q: "What format does the sticker come in?",
        a: "PNG with transparent background, which is compatible " +
          "with WhatsApp, Telegram, iMessage, and Discord.",
      },
      {
        q: "Can I turn my pet into a sticker?",
        a: "Yes — upload a photo of your pet and describe the " +
          "sticker style you want. It works great for dogs, cats, " +
          "and other pets.",
      },
      {
        q: "Can I make a pack of matching stickers?",
        a: "Yes — generate multiple stickers using the same " +
          "character description with different expressions or poses.",
      },
      {
        q: "What sticker styles are available?",
        a: "Cartoon, emoji-style, chibi, realistic, pixel art, " +
          "and more — just describe the style in your prompt.",
      },
    ],
    seoTitle:
      "AI Sticker Generator — Create Custom Stickers Free | next-stair",
    seoDescription:
      "Create custom AI stickers for WhatsApp, Telegram, and social media. " +
      "Turn photos and ideas into fun sticker packs. Free PNG download.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 10,
  },
  {
    slug: "ai-photo-to-sketch",
    name: "AI Photo to Sketch",
    description:
      "Convert any photo into a hand-drawn pencil sketch, charcoal " +
      "drawing, or ink illustration with AI. Perfect for portraits, " +
      "landscapes, and artistic projects.",
    category: "ai-effects",
    promptTemplate:
      "Convert this photo into a detailed pencil sketch drawing. " +
      "Fine pencil lines, cross-hatching for shadows, white paper " +
      "background, realistic proportions preserved, artistic " +
      "hand-drawn style, high detail, clean lines.",
    exampleOutputUrls: [],
    featureBullets: [
      "Convert any photo to pencil sketch, charcoal, or ink",
      "Fine details and realistic proportions preserved",
      "Multiple artistic styles: pencil, charcoal, ink, pastel",
      "Perfect for portraits, landscapes, and architecture",
      "Download as high-resolution PNG for printing",
    ],
    faqItems: [
      {
        q: "What sketch styles are available?",
        a: "Pencil sketch, charcoal drawing, ink illustration, " +
          "pastel drawing, and watercolor outline. Describe your " +
          "preferred style in the prompt.",
      },
      {
        q: "Does it work for group photos?",
        a: "Yes — group photos convert well. More people in the " +
          "photo means more detail needed, so use quality: high " +
          "for best results.",
      },
      {
        q: "Can I get a colored sketch?",
        a: "Yes — add 'colored pencil drawing' or 'watercolor sketch' " +
          "to your prompt for colorful artistic output.",
      },
      {
        q: "What photo types work best?",
        a: "Portraits with clear faces, landscapes with defined " +
          "edges, and architecture with strong lines all convert " +
          "beautifully to sketch style.",
      },
    ],
    seoTitle:
      "AI Photo to Sketch Converter — Free Pencil Drawing Generator | next-stair",
    seoDescription:
      "Convert any photo to a pencil sketch, charcoal drawing, or ink " +
      "illustration with AI. Free online photo to sketch converter.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 11,
  },
  {
    slug: "ai-hairstyle-changer",
    name: "AI Hairstyle Changer",
    description:
      "Try any hairstyle on your photo before visiting the salon. " +
      "Test new cuts, colors, and lengths virtually with AI — " +
      "no commitment, no dye, no scissors.",
    category: "ai-effects",
    promptTemplate:
      "Change the person's hairstyle in the photo while keeping " +
      "the face and all other features exactly the same. Apply " +
      "the new hairstyle naturally, matching the lighting and " +
      "skin tone, realistic hair texture, photorealistic result.",
    exampleOutputUrls: [],
    featureBullets: [
      "Try any hairstyle before committing to the salon",
      "Test new colors: blonde, brunette, red, pastel, and more",
      "See short cuts, long styles, curls, and layers on your face",
      "Lighting and skin tone matched automatically",
      "Perfect for planning a new look before your appointment",
    ],
    faqItems: [
      {
        q: "How do I specify the new hairstyle?",
        a: "Describe it in the prompt — for example: 'short pixie " +
          "cut, platinum blonde' or 'long beach waves, dark brown'.",
      },
      {
        q: "Can I change both style and color at once?",
        a: "Yes — describe both in the prompt. For example: " +
          "'shoulder-length bob with copper highlights'.",
      },
      {
        q: "Will my face look natural in the result?",
        a: "Yes — the AI keeps your face unchanged and applies " +
          "the new hairstyle with matched lighting and proportion.",
      },
      {
        q: "Does this work for men's haircuts too?",
        a: "Yes — fade, undercut, buzz cut, quiff, slick back, " +
          "and any other men's style works with a clear photo.",
      },
    ],
    seoTitle:
      "AI Hairstyle Changer — Try New Haircuts Free | next-stair",
    seoDescription:
      "Try any hairstyle on your photo before the salon with AI. " +
      "Test cuts, colors, and lengths virtually. Free hairstyle changer.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 12,
  },
  {
    slug: "ai-professional-photo-generator",
    name: "AI Professional Photo Generator",
    description:
      "Generate polished professional photos for any use case — " +
      "business portraits, team pages, speaker bios, and press " +
      "kits. Studio-quality results from any starting photo.",
    category: "ai-effects",
    promptTemplate:
      "Transform this photo into a polished professional portrait. " +
      "Clean neutral background, studio lighting with soft shadows, " +
      "business-appropriate attire, sharp focus on face, natural " +
      "skin retouching, professional color grading, suitable for " +
      "corporate website, high resolution.",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any casual photo into a polished professional portrait",
      "Studio-quality lighting added automatically",
      "Clean neutral or branded backgrounds",
      "Suitable for company websites and speaker profiles",
      "Save thousands on professional photography sessions",
    ],
    faqItems: [
      {
        q: "What types of photos work best as input?",
        a: "Any photo where your face is clearly visible works. " +
          "Front-facing selfies and casual portraits give the " +
          "best professional output.",
      },
      {
        q: "Can I specify the background color?",
        a: "Yes — describe your preferred background in the prompt, " +
          "such as 'white background', 'navy blue background', " +
          "or 'blurred modern office'.",
      },
      {
        q: "Will it change my appearance?",
        a: "The AI enhances lighting and presentation while keeping " +
          "your appearance natural. It does not significantly alter " +
          "facial features.",
      },
      {
        q: "Is the output suitable for LinkedIn?",
        a: "Yes — the output is 1024×1024 pixels minimum, which " +
          "exceeds LinkedIn's recommended profile photo resolution.",
      },
    ],
    seoTitle:
      "AI Professional Photo Generator — Studio Portrait from Any Photo | next-stair",
    seoDescription:
      "Generate studio-quality professional photos from any casual photo " +
      "with AI. Perfect for LinkedIn, websites, and press kits. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 13,
  },
  {
    slug: "ai-figure-generator",
    name: "AI Figure Generator",
    description:
      "Generate detailed action figures, collectible statues, and " +
      "3D character models from photos or descriptions. " +
      "See yourself or any character as a collectible.",
    category: "ai-effects",
    promptTemplate:
      "Transform the subject into a highly detailed collectible " +
      "action figure. Plastic toy aesthetic, glossy finish, " +
      "articulated joints visible, display base, product " +
      "photography lighting, white background, 3D render style, " +
      "high detail, collector quality.",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any photo into a collectible action figure",
      "Realistic plastic, resin, or vinyl toy aesthetics",
      "Add display bases, packaging, and accessory details",
      "Perfect for gifts, gifts ideas, and creative projects",
      "Works for people, pets, characters, and objects",
    ],
    faqItems: [
      {
        q: "Can I turn my pet into an action figure?",
        a: "Yes — upload a photo of your pet and describe the " +
          "figure style. Dogs and cats make especially " +
          "popular collectible figures.",
      },
      {
        q: "What figure styles are available?",
        a: "Action figure, Funko Pop style, resin statue, " +
          "chibi figure, and realistic collector's edition. " +
          "Describe your preferred style in the prompt.",
      },
      {
        q: "Can I add packaging to the figure?",
        a: "Yes — add 'in blister pack packaging' or " +
          "'in collector's box' to your prompt for the " +
          "full retail product look.",
      },
      {
        q: "Is this useful for product design?",
        a: "Yes — it is a fast way to visualise collectible " +
          "concepts before committing to physical production.",
      },
    ],
    seoTitle:
      "AI Figure Generator — Turn Photos into Action Figures Free | next-stair",
    seoDescription:
      "Generate detailed collectible action figures from any photo with AI. " +
      "Perfect for people, pets, and characters. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 14,
  },
  {
    slug: "ai-pose-generator",
    name: "AI Pose Generator",
    description:
      "Generate or transform photos into any pose you need. " +
      "Perfect for artists needing pose references, fashion " +
      "photographers, and content creators.",
    category: "ai-effects",
    promptTemplate:
      "Change the pose of the person in the photo to the described " +
      "position. Keep face, clothing, and identity consistent. " +
      "Natural body proportions, realistic lighting, clean " +
      "background, photorealistic, high resolution.",
    exampleOutputUrls: [],
    featureBullets: [
      "Transform any photo into any pose you describe",
      "Perfect pose references for artists and illustrators",
      "Fashion and editorial poses for content creators",
      "Face and clothing preserved accurately in new pose",
      "Generate standing, sitting, action, and dynamic poses",
    ],
    faqItems: [
      {
        q: "How do I describe the pose I want?",
        a: "Be specific — for example: 'standing with arms crossed, " +
          "slight lean forward' or 'seated side profile, looking " +
          "over the shoulder'.",
      },
      {
        q: "Can I use this for drawing references?",
        a: "Yes — it is excellent for artists who need quick pose " +
          "references. Generate multiple angles of the same pose " +
          "for comprehensive reference sheets.",
      },
      {
        q: "Does it preserve the person's face?",
        a: "Yes — when you upload a photo, the AI keeps the face " +
          "consistent while changing only the body position.",
      },
      {
        q: "What is the best photo to upload?",
        a: "A full-body or three-quarter length photo works best " +
          "for pose transformations. Portrait photos work for " +
          "upper-body poses.",
      },
    ],
    seoTitle:
      "AI Pose Generator — Change Photo Poses Free | next-stair",
    seoDescription:
      "Transform any photo into any pose with AI. Perfect for art references, " +
      "fashion content, and creative projects. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 15,
  },
  {
    slug: "ai-manga-translator",
    name: "AI Manga Translator",
    description:
      "Translate manga and comic speech bubbles from Japanese to " +
      "English, Bengali, Hindi, and 8 other languages. " +
      "Read untranslated manga instantly.",
    category: "ai-effects",
    promptTemplate:
      "Translate all text in the manga panels from the source " +
      "language into the target language. Place translated text " +
      "inside the original speech bubbles. Preserve original " +
      "art style and layout. Use appropriate manga font style " +
      "for the translated text.",
    exampleOutputUrls: [],
    featureBullets: [
      "Translate manga speech bubbles into 11 languages",
      "Text placed inside original bubbles automatically",
      "Original art and panel layout preserved",
      "Works with Japanese, Korean, and Chinese manga",
      "Read untranslated manga from any country instantly",
    ],
    faqItems: [
      {
        q: "Which languages can I translate manga into?",
        a: "English, Bengali, Hindi, Chinese, Russian, German, " +
          "Spanish, French, Portuguese, Korean, and Japanese. " +
          "Specify your target language in the prompt.",
      },
      {
        q: "Does it work for Korean manhwa and Chinese manhua?",
        a: "Yes — the tool works with manga, manhwa, and manhua " +
          "in any panel layout.",
      },
      {
        q: "Will the art be affected?",
        a: "No — only the text inside speech bubbles and caption " +
          "boxes is modified. The original artwork is preserved.",
      },
      {
        q: "Can I translate a full chapter at once?",
        a: "Upload one page at a time for the most accurate " +
          "translation. Multi-page translation is on the roadmap.",
      },
    ],
    seoTitle:
      "AI Manga Translator — Translate Manga to English & More Free | next-stair",
    seoDescription:
      "Translate manga speech bubbles into English, Bengali, Hindi, and " +
      "8 more languages with AI. Read untranslated manga instantly. Free.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 16,
  },
  {
    slug: "pet-passport-photo-generator",
    name: "Pet Passport Photo Generator",
    description:
      "Generate adorable passport-style photos of your pet. " +
      "Perfect for pet passports, vet records, pet ID cards, " +
      "and social media profiles.",
    category: "ai-effects",
    promptTemplate:
      "Transform the pet photo into a formal passport-style portrait. " +
      "White or light grey background, pet centered and facing forward, " +
      "neutral expression, clear focus, official ID photo composition, " +
      "clean and professional, high resolution.",
    exampleOutputUrls: [],
    featureBullets: [
      "Generate official-style passport photos of your pet",
      "Clean white or neutral background applied automatically",
      "Perfect for pet passports and vet record photos",
      "Works for dogs, cats, rabbits, birds, and more",
      "Adorable results for social media and pet ID cards",
    ],
    faqItems: [
      {
        q: "What pets work with this tool?",
        a: "Dogs, cats, rabbits, hamsters, birds, and most " +
          "other pets. A clear photo showing the pet's face " +
          "gives the best passport photo result.",
      },
      {
        q: "Is this accepted for real pet passports?",
        a: "AI-generated passport photos may not be accepted by " +
          "all official authorities. Check your local requirements " +
          "before using for official documentation.",
      },
      {
        q: "What photo should I upload?",
        a: "A clear, well-lit photo of your pet facing the camera " +
          "works best. Avoid photos with heavy shadows or " +
          "extreme angles.",
      },
      {
        q: "Can I choose the background color?",
        a: "Yes — describe your preferred background in the prompt, " +
          "such as 'light blue background' or 'white background'.",
      },
    ],
    seoTitle:
      "Pet Passport Photo Generator — AI Pet Photo Creator Free | next-stair",
    seoDescription:
      "Generate adorable passport-style photos of your pet with AI. " +
      "Perfect for pet IDs, vet records, and social media. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 17,
  },
  {
    slug: "zootopia-nick-and-judy-selfie",
    name: "Zootopia AI Selfie Generator",
    description:
      "Join Nick and Judy from Zootopia in a fun AI selfie. " +
      "Generate yourself as an anthropomorphic animal character " +
      "in the Zootopia universe.",
    category: "ai-effects",
    promptTemplate:
      "Generate a fun selfie-style photo with anthropomorphic " +
      "animal characters in an animated Disney movie style. " +
      "Bright colors, expressive faces, detailed fur texture, " +
      "modern city background, cheerful and playful atmosphere, " +
      "Zootopia-inspired animation style, high quality render.",
    exampleOutputUrls: [],
    featureBullets: [
      "Place yourself in the Zootopia animated universe",
      "Generate anthropomorphic animal versions of any person",
      "Bright, expressive Disney animation art style",
      "Fun selfie composition with characters side by side",
      "Perfect for Zootopia fans and Disney content creators",
    ],
    faqItems: [
      {
        q: "Do I need to upload a photo?",
        a: "Uploading a photo gives a more personalised result. " +
          "You can also generate entirely from a text description.",
      },
      {
        q: "Can I choose which animal character to become?",
        a: "Yes — describe your preferred animal in the prompt, " +
          "such as 'a fox character' or 'a rabbit character'.",
      },
      {
        q: "Is this affiliated with Disney or Zootopia?",
        a: "No — this tool uses AI to create art inspired by the " +
          "visual style. It is not affiliated with Disney.",
      },
      {
        q: "Can I generate a group selfie?",
        a: "Yes — describe multiple characters in your prompt " +
          "for group selfie compositions.",
      },
    ],
    seoTitle:
      "Zootopia AI Selfie Generator — Join Nick & Judy Free | next-stair",
    seoDescription:
      "Generate a fun AI selfie in the Zootopia universe with Nick and Judy. " +
      "Become an anthropomorphic animal character. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 18,
  },
  {
    slug: "ai-background-remover",
    name: "AI Background Remover",
    description:
      "Remove the background from any photo instantly with AI. " +
      "Get a clean transparent PNG perfect for product shots, " +
      "profile photos, and creative projects.",
    category: "ai-effects",
    promptTemplate:
      "Remove the background from this image completely. " +
      "Keep the subject with clean, precise edges. " +
      "Transparent background output, preserve fine details " +
      "like hair strands and fur, no fringing or artifacts, " +
      "professional cutout quality.",
    exampleOutputUrls: [],
    featureBullets: [
      "Remove any background in one click with AI",
      "Clean precise edges including hair and fur details",
      "Transparent PNG output for immediate use",
      "Perfect for product photos and e-commerce listings",
      "Works for people, pets, objects, and logos",
    ],
    faqItems: [
      {
        q: "Does it handle complex edges like hair?",
        a: "Yes — the AI is specifically optimised for hair, fur, " +
          "and other fine edges that traditional tools struggle with.",
      },
      {
        q: "Can I replace the background with a new one?",
        a: "Yes — describe the new background in your prompt and " +
          "the AI removes the old one and adds the new one in " +
          "a single step.",
      },
      {
        q: "What is the output format?",
        a: "PNG with transparent background. If you want a solid " +
          "color background, specify it in the prompt instead.",
      },
      {
        q: "Does this work for product photography?",
        a: "Yes — it is excellent for e-commerce. Upload a product " +
          "photo and get a clean white-background shot " +
          "in seconds.",
      },
    ],
    seoTitle:
      "AI Background Remover — Remove Photo Backgrounds Free | next-stair",
    seoDescription:
      "Remove backgrounds from any photo with AI. Clean transparent PNG output " +
      "with precise edges. Perfect for products and profiles. Free.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 19,
  },
  {
    slug: "ai-color-grading",
    name: "AI Color Grading",
    description:
      "Apply cinematic color grades to any photo with AI. " +
      "Transform flat photos into moody film looks, " +
      "vibrant editorial styles, and professional cinematography.",
    category: "ai-effects",
    promptTemplate:
      "Apply professional cinematic color grading to this photo. " +
      "Film-like tonal range, crushed blacks, lifted shadows, " +
      "teal and orange color science, smooth highlight roll-off, " +
      "natural skin tones, professional photography color grade, " +
      "cinematic atmosphere.",
    exampleOutputUrls: [],
    featureBullets: [
      "Apply cinematic color grades used in Hollywood films",
      "Teal and orange, moody dark, vintage, and vibrant styles",
      "Skin tones preserved naturally in every grade",
      "Transform flat phone photos into editorial-quality images",
      "Describe any film look or reference photographer's style",
    ],
    faqItems: [
      {
        q: "What color grade styles are available?",
        a: "Teal and orange cinematic, moody dark, golden hour, " +
          "vintage film, cold blue, and more. Describe any " +
          "specific look in your prompt.",
      },
      {
        q: "Can I reference a specific film or photographer?",
        a: "Yes — add style references like 'in the style of " +
          "Blade Runner color grade' or 'warm golden hour " +
          "editorial style' to your prompt.",
      },
      {
        q: "Will it work on indoor photos?",
        a: "Yes — indoor, outdoor, portrait, and landscape photos " +
          "all respond well to color grading.",
      },
      {
        q: "Does it affect image sharpness?",
        a: "No — color grading only modifies tones and colors. " +
          "Sharpness and resolution are preserved.",
      },
    ],
    seoTitle:
      "AI Color Grading — Cinematic Photo Filters Free | next-stair",
    seoDescription:
      "Apply professional cinematic color grades to any photo with AI. " +
      "Film looks, moody tones, and editorial styles. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 20,
  },
]

async function seedTools() {
  console.log(`Seeding ${tools.length} tools...`)

  for (const tool of tools) {
    await db
      .insert(toolConfigs)
      .values(tool)
      .onConflictDoNothing()

    console.log(`✓ ${tool.name} (${tool.slug})`)
  }

  console.log("Done. Run the dev server to see the pages.")
  process.exit(0)
}

seedTools().catch((err) => {
  console.error(err)
  process.exit(1)
})
