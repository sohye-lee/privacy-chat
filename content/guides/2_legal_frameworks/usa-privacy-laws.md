---
title: Overview of Major U.S. Privacy Laws
description: A practical guide to key U.S. state privacy laws and their impact on web agencies and clients.
---

# Overview of Major U.S. Privacy Laws

The U.S. privacy law landscape is rapidly evolving, with a growing number of states enacting comprehensive consumer data protection laws. While there is no single federal law like the GDPR, state-level frameworks—such as **CCPA/CPRA (California)**, **CDPA (Virginia)**, **CPA (Colorado)**, **UCPA (Utah)**, and **TDPSA (Texas)**—now shape best practices for web agencies and their clients[5][6][10][11].

---

## Texas Data Privacy and Security Act (TDPSA)

**Effective Date:** July 1, 2024  
**Who Must Comply:** Businesses that (a) conduct business in Texas or target Texas residents, and (b) process or sell personal data, unless classified as a small business (fewer than 500 employees) and not selling sensitive data[2][6][13][14][15][16].

**Key Requirements:**
- **User rights:** Access, correction, deletion, data portability, and opt-out of sales, targeted advertising, and profiling[12][13][16].
- **Opt-in consent:** Required for collection or sale of sensitive data (race, health, biometrics, child data, etc.)[2][6][13].
- **Privacy notice:** Must clearly state what is collected, purposes, sharing practices, and opt-out methods[12][13][16].
- **Data minimization:** Collect only what is necessary and relevant for disclosed purposes[13][14].
- **Security:** Reasonable administrative, technical, and physical safeguards required[13][14].
- **Universal opt-out:** Businesses must honor browser-based global opt-out signals by Jan 1, 2025[6][13].
- **Enforcement:** Texas Attorney General; 30-day cure period for violations; fines up to $7,500 per violation[2][12][13][14].

> **Agency Note:** Even if you or your client are not Texas-based, targeting Texas residents with ads, analytics, or web forms may trigger obligations. Review all tracking and lead-gen tools for compliance.

---

## Colorado Privacy Act (CPA)

**Effective Date:** July 1, 2023  
**Who Must Comply:** Businesses that control/process data of 100,000+ Colorado residents/year, or 25,000+ if selling personal data[8].

**Key Requirements:**
- **User rights:** Access, correction, deletion, portability, opt-out of sales, targeted ads, and profiling[8].
- **Opt-out UI:** Required for profiling and targeted advertising; must be clear and accessible[8].
- **Consent:** Opt-in for sensitive data (health, biometrics, children, etc.)[8][3].
- **Privacy notice:** Must detail categories of data, purposes, rights, and contact info[8].
- **Data protection assessments:** Mandatory for high-risk processing (e.g., profiling, sensitive data)[8].
- **Biometric data amendment:** As of July 1, 2025, new rules for employee/applicant biometrics, including consent and deletion schedules[3].
- **Security:** Technical and organizational safeguards required[8].

> **Agency Note:** Tools like Google Analytics 4, Meta Pixel, and personalization platforms may require explicit opt-out mechanisms. Review all profiling and analytics implementations.

---

## Utah Consumer Privacy Act (UCPA)

**Effective Date:** December 31, 2023  
**Who Must Comply:** Businesses with $25M+ annual revenue and processing data of 100,000+ Utah residents, or earning 50%+ of revenue from data sales[4][9].

**Key Requirements:**
- **User rights:** Access, deletion, data portability, opt-out of sales/targeted ads[4][9].
- **No right to correction:** Unlike other states, users cannot request correction of data[4][9].
- **No risk assessments required:** Simpler compliance, but privacy notices and opt-out links still necessary[4][9].
- **Opt-out UI:** Must provide clear opt-out for targeted ads and data sales[4][9].
- **AI disclosure:** As of May 2024, businesses using generative AI must disclose this to consumers in regulated industries, and upon request in others[9].
- **Enforcement:** 30-day cure period; fines up to $7,500 per violation[4][9].

> **Agency Note:** Even though UCPA is less strict, maintain a consistent user experience by including clear privacy notices and opt-out links for all U.S. audiences.

---

## Practical Tips for Web Agencies

- **Map user locations:** Know where your client’s users are located—state laws may apply even if you’re out-of-state.
- **Review all data flows:** Audit analytics, lead forms, cookies, and third-party scripts for state-specific compliance.
- **Baseline to strictest law:** Use the most stringent state law as your baseline to avoid fragmented user experiences and reduce compliance risk.
- **Consent UX:** Design clear, non-deceptive consent flows. Avoid dark patterns; regulators are cracking down on misleading UX[11].
- **Profiling & AI:** If using AI-driven personalization or profiling, ensure opt-out and transparency per state law[9][11].
- **Client checklist:**
  - Which states do your users come from?
  - Do you use targeted ads, analytics, or profiling?
  - Does your revenue or data volume meet state thresholds?
  - Who manages your privacy policy and compliance updates?

---

## Comparison Table

| Law                | Effective Date      | Applicability/Threshold                | Consumer Rights                         | Consent for Sensitive Data | Risk Assessments | Private Right of Action      |
|--------------------|--------------------|----------------------------------------|-----------------------------------------|----------------------------|------------------|------------------------------|
| **CCPA/CPRA (CA)** | Jan 2020 / Jul 2023| $25M+ revenue or 100k+ users           | Access, delete, correct, opt-out        | Opt-in                     | Yes              | ❌ (except data breaches)     |
| **CDPA (VA)**      | Jan 2023           | 100k+ users or 25k + 50% revenue       | Same as CCPA                            | Opt-in                     | Yes              | ❌                           |
| **CPA (CO)**       | Jul 2023           | 100k+ users or 25k data sales          | Same as above + profiling opt-out       | Opt-in                     | Yes              | ❌                           |
| **UCPA (UT)**      | Dec 2023           | $25M+ + 100k users                     | Access, delete, opt-out                 | Opt-out                    | ❌               | ❌                           |
| **TDPSA (TX)**     | Jul 2024           | 50k+ users or 25% revenue              | Access, correct, delete, opt-out        | Opt-in                     | ❌               | ❌                           |

---

## Future Outlook

- **More states joining:** Oregon, Florida, New Jersey, Tennessee, Minnesota, Maryland, and others have passed or are enacting privacy laws in 2025[5][6].
- **Consortium enforcement:** Multi-state regulators now coordinate investigations and enforcement, so compliance gaps in one state may trigger action in others[11].
- **Federal law?**: The American Data Privacy and Protection Act (ADPPA) is under discussion in Congress, which could unify requirements[5][6].
- **Profiling & AI:** Expect more states to regulate AI-driven personalization and profiling, with opt-out and transparency mandates[9][11].

---

## References

1. [Texas Data Privacy and Security Act – Texas State Law Library](https://www.sll.texas.gov/spotlight/2024/07/texas-data-privacy-and-security-act/)
2. [Texas Data Privacy and Security Act – Texas Attorney General](https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act)
3. [Biometric Amendment to the Colorado Privacy Act – Ogletree Deakins](https://ogletree.com/insights-resources/blog-posts/beyond-fingerprints-navigating-the-biometric-amendment-to-the-colorado-privacy-act/)
4. [Utah Consumer Privacy Act (UCPA) – Cookiebot](https://www.cookiebot.com/en/utah-consumer-privacy-act-ucpa/)
5. [U.S. State Privacy Legislation 2025 Updates – Choozle](https://choozle.com/blog/u-s-state-privacy-legislation-key-updates-and-impacts-on-digital-advertising/)
6. [Data Privacy Laws: What You Need to Know in 2025 – Osano](https://www.osano.com/articles/data-privacy-laws)
7. [TDPSA Checklist – Usercentrics](https://usercentrics.com/resources/tdpsa-checklist/)
8. [Colorado Privacy Act Compliance – Redactor.ai](https://redactor.ai/blog/colorado-privacy-act)
9. [Utah Consumer Privacy Act (UCPA) – Cookiebot](https://www.cookiebot.com/en/utah-consumer-privacy-act-ucpa/)
10. [US Data Privacy Law Checklist 2025 – Osano (PDF)](https://www.osano.com/hubfs/assets/marketing/infographics/2023/U.S.%20Data%20Privacy%20Law%20Checklist%20f.pdf)
11. [How the Consortium of Privacy Regulators Is Enforcing Privacy – Identity.com](https://www.identity.com/how-the-consortium-of-privacy-regulators-is-enforcing-privacy/)
12. [Texas Data Privacy and Security Act – Texas Attorney General](https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act)
13. [Texas Data Privacy and Security Act – Texas DIR](https://dir.texas.gov/technology-legislation/texas-data-privacy-and-security-act)
14. [The Texas Data Privacy and Security Act (TDPSA): All the Basics – Osano](https://www.osano.com/articles/texas-data-privacy-and-security-act-tdpsa)
15. [Texas Data Privacy and Security Act: First Look & Summary – Termly](https://termly.io/resources/articles/texas-data-privacy-and-security-act/)
16. [The Texas Data Privacy and Security Act Explained – Apache Interactive](https://apacheinteractive.com/the-texas-data-privacy-and-security-act-explained/)

---

*This overview reflects the latest U.S. state privacy law requirements as of July 2025. For legal advice or specific compliance strategies, consult the official resources above or a privacy professional.*
