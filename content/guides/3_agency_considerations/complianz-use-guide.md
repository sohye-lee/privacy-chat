# 📄 Complianz Usage Guide for Web Agencies

**Complianz** is a powerful WordPress plugin that helps websites comply with privacy laws like **GDPR**, **CCPA**, **ePrivacy**, and others. As a web agency, correctly configuring Complianz ensures your clients remain compliant without overcomplicating the user experience.

---

## ✅ When to Use Complianz

Complianz is particularly effective in the following cases:

- The website has **visitors from the EU or California**
- The site uses **Google Analytics**, **Meta Pixel**, **YouTube**, **Vimeo**, **Hotjar**, etc.
- The client needs **automated cookie detection** and **consent logging**
- There is a need for **multilingual support** (WPML, Polylang)
- The client prefers a **wizard-based setup** without custom coding

---

## 🔧 Key Setup Sections & What to Watch Out For

### 1. **Cookie Scan**
- Automatically scans and categorizes cookies
- ⚠️ *Review results manually*—sometimes third-party scripts are miscategorized or missed entirely
- Run scans after installing new plugins or scripts (e.g., chat widgets)

### 2. **Cookie Banner Configuration**
- Choose between *opt-in* (GDPR countries) and *opt-out* (CCPA)
- Customize banner colors and text to match brand tone
- Use **Geo IP settings** to serve appropriate banners based on location
- ✅ Enable **Consent Statistics** if analytics are enabled

### 3. **Integrations with 3rd Party Services**
| Service | Automatic Block? | Manual Settings Required? | Notes |
|--------|------------------|---------------------------|-------|
| Google Analytics 4 | ✅ | Optional (for Tag Manager) | Use with gtag or GTM |
| Meta Pixel | ✅ | 🔶 (Confirm custom script blocking) | Check opt-in requirement |
| YouTube / Vimeo | ✅ | — | Enable placeholder until consent |
| Hotjar / HubSpot | ✅ | — | Consider separate consent for session recording tools |

### 4. **Privacy Policy / Cookie Policy Generation**
- Complianz auto-generates:
  - Privacy Policy
  - Cookie Policy
  - Imprint (EU)
- ⚠️ Make sure to **manually review**:
  - Contact form providers
  - Custom email integrations
  - Hosting provider information
  - Cloudflare, CDN usage

### 5. **Consent Logging**
- Enabled by default
- Stores user consent for audit purposes
- Stored consent includes timestamp, accepted categories, and IP hash

---

## 🧠 Agency Tip

- For **marketing-heavy clients**, group all tracking scripts under “Marketing” category
- For **educational institutions** or **children's sites**, enable stricter default settings (e.g., block YouTube before consent)
- When using **Elementor, WPBakery**, or other page builders, validate scripts in custom HTML blocks are detected

---

## 🌍 Region-Based Behavior

| Region | Banner Behavior | Legal Reference |
|--------|------------------|-----------------|
| EU     | Opt-in required | GDPR, ePrivacy |
| California | Opt-out acceptable | CCPA |
| Canada | Consent not always required | PIPEDA |
| South Korea | Prior consent required for sensitive data | PIPA |

Use **Complianz's GEO detection** feature to serve localized banners.

---

## 📚 References

- [Complianz Official Documentation](https://complianz.io/docs/)
- [GDPR – Cookies & Consent](https://gdpr.eu/cookies/)
- [CCPA Requirements](https://oag.ca.gov/privacy/ccpa)
- [Complianz + Google Analytics](https://complianz.io/configuring-google-analytics/)
- [Complianz + WPML Multilingual](https://complianz.io/complianz-and-wpml/)

---

