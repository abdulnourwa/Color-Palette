# DişYol Insights - Advanced Brand Palette Showcase

An interactive web application to showcase and compare different color palettes for brand identity, demonstrating their application across various UI components and marketing materials. This project focuses on providing a rich visual experience for evaluating brand aesthetics.

## ✨ Features

*   **🎨 Interactive Palette Selection:** Choose from multiple predefined color palettes.
*   **👁️ Live Application:** See selected palettes instantly applied to all demo components.
*   **📱 Diverse Use Cases:** Demonstrates palette application on:
    *   Color Swatches & Palette Info
    *   Brand Logos
    *   Website Hero & Sections
    *   Web Application Interface
    *   Mobile Application UI
    *   Professional Business Cards
    *   Social Media Advertisements
    *   Product Packaging
    *   Shipping Box Design
    *   Email Newsletters
    *   Presentation Slides
    *   Data Visualizations (Charts)
    *   Login Screens
    *   Invoice/Billing Documents
*   **🌓 Theme Switching:** Toggle between Light and Dark modes.
*   **🖨️ CMYK Simulation:** Simulate how colors might appear in print.
*   **🌐 Multilingual Support:** Switch between English (en) and Arabic (ar) with LTR/RTR layout adjustments.
*   **🔍 Demo Component Spotlight:** View individual demo components in a larger, focused modal.
*   **📱 Responsive Design:** Adapts to various screen sizes for optimal viewing.
*   **♿ Accessibility:** Implemented with ARIA attributes, keyboard navigation, and focus management.
*   **⬆️ Back to Top:** Easy navigation for long pages.
*   **🛠️ Collapsible Controls:** Toolbar can be hidden/shown for more viewing space.

## 🛠️ Tech Stack

*   **React 19:** Leveraged via [esm.sh](https://esm.sh/) for a modern, build-less development experience.
*   **TypeScript:** For static typing and improved code quality.
*   **Tailwind CSS:** Utility-first CSS framework (via CDN) for rapid UI development.
*   **Font Awesome:** For icons (via CDN).
*   **Google Fonts:** For typography ('Inter' and 'Tajawal').
*   **HTML5 & CSS3:** Custom styles for theming and component-specific looks.

## 🚀 How to Run

This project is designed to be run directly in a modern web browser without a complex build process.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/disyol-insights-palette-showcase.git
    cd disyol-insights-palette-showcase
    ```
    *(Replace `your-username/disyol-insights-palette-showcase` with the actual repository URL after you create it.)*

2.  **Prepare Assets (Optional but Recommended for Favicons):**
    *   Create an `assets/icons/` directory in the project root.
    *   Place your favicon files (e.g., `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, etc.) into this directory. The `index.html` is already set up to look for them here.

3.  **Open in Browser:**
    *   Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Edge, Safari).
    *   Alternatively, you can serve the project root directory using a simple local HTTP server. For example, if you have Node.js installed, you can use `npx serve .` from the project root and then navigate to the provided local URL.

## 📂 Project Structure

```
/
├── assets/
│   └── icons/              # Favicon files (you need to add these)
├── components/             # React components for UI elements and demos
│   ├── AppContext.ts       # (Implicitly part of App.tsx) Context for global state
│   ├── BackToTopButton.tsx
│   ├── BusinessCardDemo.tsx
│   ├── Controls.tsx
│   ├── DataVisualizationDemo.tsx
│   ├── EmailNewsletterDemo.tsx
│   ├── Header.tsx
│   ├── InvoiceDemo.tsx
│   ├── LoginScreenDemo.tsx
│   ├── LogoDemo.tsx
│   ├── MobileAppDemo.tsx
│   ├── PackageDemo.tsx
│   ├── PaletteDisplay.tsx
│   ├── PresentationSlideDemo.tsx
│   ├── ShippingBoxDemo.tsx
│   ├── SocialAdDemo.tsx
│   ├── SpotlightModal.tsx
│   ├── UseCaseCard.tsx
│   ├── WebAppDemo.tsx
│   └── WebsiteDemo.tsx
├── App.tsx                 # Main application component, context provider
├── constants.ts            # Palette data, UI strings
├── index.html              # Main HTML file
├── index.tsx               # React entry point
├── metadata.json           # Project metadata (not directly used by the running app but good for context)
├── types.ts                # TypeScript type definitions
├── README.md               # This file
├── LICENSE                 # Project license
└── .gitignore              # Files to ignore for Git
```

## 🔮 Potential Future Enhancements

*   **Gemini API Integration:** For palette suggestions based on keywords or image uploads.
*   **User Custom Palettes:** Allow users to create and save their own palettes.
*   **Export Options:** Download palette data (HEX, RGB, CSS vars).
*   **More Demo Components:** Expand the range of UI elements showcased.
*   **Advanced Accessibility Audits:** Further refine A11y features.

## 📄 License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.
Copyright 2024 Abdulnour Wafaee.

---

Crafted by Abdulnour Wafaee.
([Instagram](https://www.instagram.com/abdulnour.wa))
