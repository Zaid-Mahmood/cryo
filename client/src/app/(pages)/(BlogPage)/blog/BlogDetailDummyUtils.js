import blogBanner1 from "@/assets/blog-detail/blog-1/blog-banner.svg";
import sideImg1 from "@/assets/blog-detail/blog-1/side-img1.svg"
import sideImg2 from "@/assets/blog-detail/blog-1/side-img2.svg"

export const blogs = [
    {
        slug: "whole-body-cryotherapy",
        title: "Whole-Body Cryotherapy:",
        subtitle: "What Actually Happens When You Step Into the Cold",
        desc: "Two to three minutes at subzero temperatures. The science behind why it works, who it's for, what to expect, and what the research actually shows",
        image: blogBanner1,
        bannerDownContent: `Cryotherapy gets talked about a lot. It shows up in athlete recovery programmes, wellness centre menus, and the routines of everyone from professional footballers to busy executives looking for a sharper edge. But the conversation often stays at the surface — "it's cold, it's good for you" — without explaining the physiology underneath. This article covers the full picture: what cryotherapy is, what the body actually does during a session, what the evidence supports, how wholebody cryotherapy (WBC) differs from localised cryotherapy, and what you should know before booking.`,
        innerBodyHeading: "What Is Whole-Body Cryotherapy?",
        innerBodyParagraph: "WBC involves brief exposure — typically 2 to 3 minutes — to extremely cold air, ranging from −110°C to −140°C, inside a cryotherapy chamber. The skin surface temperature drops rapidly to around 0°C, while core body temperature remains stable. This distinction is important: the body does not get dangerously cold. The nervous system detects the rapid surface temperature drop and initiates a cascade of physiological responses designed to preserve homeostasis. This is fundamentally different from an ice bath, which cools the body slowly and conductively. Cryotherapy uses convective cold air, which creates a more controlled and tolerable stimulus with a sharper systemic response.",
        notation1: `"Cold is not simply the absence of heat. Applied correctly, it is one of the most powerful physiological stimuli available without pharmaceutical intervention."aa`,
        sessionQueries: "What Happens Inside Your Body During a Session",
        sideImg: sideImg1,
        SessionWorksQuestions: [
            { question: "Vasoconstriction (0–60 seconds)", answer: "Peripheral blood vessels constrict rapidly. Blood is redirected from the skin and extremities toward the core to protect vital organs. This reduces blood flow to inflamed areas and begins to suppress inflammatory mediators." },
            { question: "Neurochemical Cascade (60–180 seconds)", answer: "The sympathetic nervous system activates. Norepinephrine is released — levels can increase by 200–300% during WBC, according to research from Fricke et al. (2009). This neurotransmitter is implicated in pain modulation, mood regulation, and inflammation suppression." },
            { question: "Vasodilation and Flush (post-session)", answer: "Upon exiting the chamber, blood vessels dilate rapidly. Oxygen-rich, antiinflammatory blood is pushed back into peripheral tissues, muscles, and joints. This flush is where much of the therapeutic benefit is hypothesised to occur." },
            { question: "Endorphin and Metabolic Effect (30–60 minutes post)", answer: "Many clients report elevated mood and energy in the hour following a session. This is consistent with endorphin release and the norepinephrine spike. Metabolic rate may also temporarily increase as the body generates heat to restore normal temperature." }
        ],
        SessionBenefitsTitle: "Documented Benefits — What the Research Shows",
        SessionBenefitsDesc: "The evidence base for cryotherapy has grown substantially over the past decade. Here is a straightforward summary of where the science stands:",
        SessionBenefitRightImg: sideImg2,
        SessionBenefitsQuestions: [
            { question: "💪 Muscle Recovery & DOMS", answer: "Multiple RCTs support reduced delayed onset muscle soreness and faster return-to-training following WBC. A 2017 Cochrane-adjacent review by Hohenauer et al. found significant reduction in DOMS markers at 24–96 hours post-exercise." },
            { question: "🔥 Inflammation Reduction", answer: "WBC has been shown to reduce pro-inflammatory cytokines including IL-6, IL-1β, and TNF-α in both athletic and clinical populations. This makes it relevant for chronic inflammatory conditions beyond sport." },
            { question: "🧠 Mood & Mental Clarity", answer: "A 2008 study by Rymaszewska et al. in Acta Psychiatrica Scandinavica found WBC produced significant antidepressant effects in patients with depression, attributed to the norepinephrine and endorphin surge." },
            ,
            { question: "😴 Sleep Quality", answer: `Cold exposure supports the body's return to parasympathetic dominance — the "rest and digest" state. Several athlete-focused studies have noted improved sleep architecture following WBC protocols.` },
            ,
            { question: "⚡ Energy & Alertness", answer: "The norepinephrine response creates a measurable, nonstimulant boost in alertness and energy. Unlike caffeine, this does not disrupt sleep architecture and does not produce a crash." },
            { question: "🩺 Chronic Pain Management", answer: "Research in rheumatoid arthritis and fibromyalgia populations has shown WBC can meaningfully reduce pain scores and improve functional outcomes — complementary to, not replacing, medical treatment." },
        ],
        tableMainHeading: "Whole-Body vs. Localised Cryotherapy: What's the Difference?",
        tableMainDesc: "Cryo SubZero offers both modalities, and understanding the distinction matters for choosing the right treatment.",
        tableHeadiings: ["Feature", "Whole-Body Cryotherapy", "Localised Cryotherapy"],
        tableData: [
            {
                "feature": "Coverage",
                "wholeBodyCryotherapy": "Full body systemic response",
                "localisedCryotherapy": "Targeted area only"
            },
            {
                "feature": "Best for",
                "wholeBodyCryotherapy": "Recovery, mood, inflammation, fatigue",
                "localisedCryotherapy": "Joint injuries, skin conditions, localised pain"
            },
            {
                "feature": "Session duration",
                "wholeBodyCryotherapy": "2–3 minutes",
                "localisedCryotherapy": "5–10 minutes per area"
            },
            {
                "feature": "Neurochemical response",
                "wholeBodyCryotherapy": "Significant (full systemic)",
                "localisedCryotherapy": "Limited to treated area"
            },
            {
                "feature": "Contraindication sensitivity",
                "wholeBodyCryotherapy": "Higher — full body exposure",
                "localisedCryotherapy": "Lower — localised application"
            }
        ],
        considerations: [
            { question: "Who Should Consider Cryotherapy", answer: "The realistic candidate for cryotherapy is broader than most people assume. It is not limited to elite athletes. Common presentations that benefit from WBC include: Active individuals and gym-goers looking to reduce recovery time between sessions. People with chronic inflammatory conditions such as arthritis, tendinopathy, or inflammatory skin disorders. Those experiencing burnout or high stress loads, where the neurochemical response provides measurable relief. Older adults seeking drug-free pain management strategies. Anyone recovering from surgery or musculoskeletal injury, under appropriate medical guidance." },
            { question: "What to Expect at Your Session", answer: "First-timers commonly have two concerns: How cold does it actually feel? and Can I handle it? The honest answer is that the cold is intense for the first 30-45 seconds, then becomes more manageable as the body adjusts. Protective gear - gloves, socks, and footwear - is provided. The chamber is open-top, meaning you maintain eye contact with the therapist and can exit at any time. Most people describe the experience as invigorating rather than painful. The sensation is dry cold, not the wet, biting cold of an ice bath. The 2-3 minutes pass quickly, and the post-session warmth and energy lift are immediate for most clients." },
            { question: "How Often Should You Go?", answer: "For general recovery and performance: 2-3 times per week during heavy training blocks. For chronic inflammation or pain management: daily sessions for 2-3 weeks initially, tapering to maintenance frequency. For wellbeing and mood: once or twice weekly is sufficient for most people. Research protocols that have produced significant results typically range from 10 to 20 consecutive sessions, suggesting that regularity compounds the benefit." },
            { question: "The Honest Assessment", answer: "Cryotherapy is not magic. The research is promising but not conclusive on every claimed benefit, and individual responses vary. What is wellsupported: the reduction of muscle soreness, the neurochemical response, and the anti-inflammatory effect. What is less certain: long-term effects on weight, specific disease outcomes, and the extent to which benefits differ between individuals. What that means practically: cryotherapy is a legitimate, evidencesupported tool that works best as part of a broader recovery and health strategy. It is not a standalone solution, but it is a genuinely useful addition to one - particularly for anyone carrying chronic inflammation, training load, or stress. The best way to assess whether it works for you is to try it consistently for two to three weeks and measure the difference in how you feel, perform, and recover." }
        ],
        precautionQANotation: {
            question: "WHO SHOULD NOT USE CRYOTHERAPY", answer: "“WBC is contraindicated for individuals with uncontrolled hypertension, severe cardiovascular disease, Raynaud's phenomenon, cold urticaria, or during pregnancy. A pre-session health screen is standard at Cryo SubZero. If in doubt, consult your GP prior to booking.”"
        }
    }
]
