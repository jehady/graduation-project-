# Design System: Khadmeni Editorial

### 1. Overview & Creative North Star
**Creative North Star: "The Modern Orchestrator"**
Khadmeni is not just a management tool; it is a high-end editorial experience for the modern workforce. The system moves away from the rigid, "boxed-in" feel of traditional enterprise dashboards. Instead, it embraces the "Orchestrator" philosophy—clean, authoritative, yet fluid. 

The design breaks the standard template look through **intentional white space**, **high-contrast typography scales**, and **asymmetrical layout logic**. While information is dense, the hierarchy is communicated through tonal depth and typographic weight rather than physical barriers. It is a system designed to feel like a premium business journal—functional but sophisticated.

### 2. Colors
Our palette is anchored in "Executive Navy" (#1a3c7a) and energized by "Action Orange" (#f97316). 

*   **Primary (Executive Navy):** Used for primary brand moments and deep-background statistical cards.
*   **Secondary (Action Orange):** Reserved strictly for high-priority calls to action (e.g., "Add Employee").
*   **The "No-Line" Rule:** We prohibit 1px solid borders for sectioning. Structural separation must be achieved via background color shifts (e.g., a `surface-container-low` table header against a `surface-container-lowest` body). 
*   **Surface Hierarchy & Nesting:** Use the `surface-container` tiers to create depth. A `surface-bright` card sits on a `surface` background, while internal filters sit on a `surface-container-low` well.
*   **Glass & Gradient Rule:** Floating elements (tooltips, modals) should utilize backdrop-blur (12px+) and a 90% opacity surface color to maintain connection with the underlying data.
*   **Signature Textures:** Use subtle 15-degree linear gradients on Primary cards to prevent visual flatness.

### 3. Typography
We utilize a single, high-performance typeface: **Inter**. The complexity is created through extreme weight variance and letter-spacing adjustments.

*   **Display (Black 900):** Used for page titles. Tight tracking (-0.02em) to create a bold, "printed" feel.
*   **Headlines (Bold 700):** Used for section headers. Clear, authoritative, and concise.
*   **Title (Semi-Bold 600):** Used for table headers and card titles.
*   **Body (Regular 400):** Optimized for readability with a 1.5 line-height.
*   **Label (Bold 700 / All-Caps):** Used for metadata labels (e.g., "ROLE", "STATUS") with +0.05em letter spacing to provide a rhythmic cadence to the data.

### 4. Elevation & Depth
Depth is a functional tool, not a stylistic flourish.

*   **The Layering Principle:** Depth is conveyed by stacking surface tiers. The further "back" an element is, the more "dim" its surface color. The interactive "top" layer is always `surface-bright`.
*   **Ambient Shadows:** We avoid harsh drop shadows. Instead, use a "Double-Soft" shadow: 
    *   Layer 1: 0 4px 6px -1px rgba(0,0,0,0.05)
    *   Layer 2: 0 2px 4px -1px rgba(0,0,0,0.03)
*   **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use `outline-variant` at 40% opacity.
*   **Glassmorphism:** Use for headers that remain fixed during scroll, allowing the "orchestration" of data to be seen as it moves beneath.

### 5. Components
*   **Buttons:** Primary buttons are sharp and high-contrast. Secondary buttons (filters) use `surface-container` backgrounds with no border.
*   **Chips (Badges):** Pills should have a 10% opacity background of their text color (e.g., Admin uses Navy text on 10% Navy background). No borders.
*   **Tables:** The "Orchestrator" table has no vertical lines. Hover states use a 2% darken filter to subtly highlight rows.
*   **Inputs:** Use `surface-container-low` for input backgrounds. Focus states are indicated by a 2px Primary ring, never a border color change alone.
*   **Cards:** 12px (xl) corner radius. Use `surface-bright` to pop against the `surface` background.

### 6. Do's and Don'ts
*   **DO:** Use whitespace as a separator. If in doubt, increase padding rather than adding a line.
*   **DO:** Use the Bold 900 weight for page titles to establish an immediate editorial hierarchy.
*   **DON'T:** Use pure black (#000). Use `on-surface` (#0f172a) for high-contrast text.
*   **DON'T:** Mix roundedness. If an element is rounded (e.g., 8px), all nested elements must follow a proportional radius (e.g., 4px).
*   **DON'T:** Use the secondary "Action Orange" for more than one primary action per view. It is a "laser sight," not a "floodlight."