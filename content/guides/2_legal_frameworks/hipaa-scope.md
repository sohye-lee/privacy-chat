---
title: HIPAA Scope 
description: Understand when and how HIPAA applies to web agencies and healthcare-related digital projects.
---

# HIPAA Scope: When It Applies to Web Agencies

The **Health Insurance Portability and Accountability Act (HIPAA)** is a U.S. federal law that protects the privacy and security of certain health information. For web agencies, understanding when and how HIPAA applies is critical—especially when working with healthcare-related clients[1][2][3][4].

---

## What Is HIPAA?

HIPAA, enacted in 1996, sets standards for the protection and confidential handling of **Protected Health Information (PHI)**. The law applies to healthcare providers, health plans, healthcare clearinghouses (collectively “covered entities”), and certain vendors (“business associates”) that handle PHI[2][3][5][8].

---

## Covered Entities & Business Associates

| Term                | Definition                                                                                                                                           |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Covered Entity**  | A healthcare provider, health plan, or clearinghouse that electronically transmits health information[8].                                            |
| **Business Associate** | A vendor or subcontractor that creates, receives, maintains, or transmits PHI on behalf of a covered entity—including web agencies in many cases[3][8]. |

---

## How to Determine If HIPAA Applies to Your Web Agency

Your agency may be subject to HIPAA if you:

- Build or maintain a site or app that **collects, stores, or processes PHI** (e.g., patient portals, appointment forms, live chat with providers)[1][2][4][13].
- Integrate with **EHR systems, health databases, or APIs** that handle PHI.
- Provide hosting, maintenance, or analytics for a healthcare client’s PHI-handling website.

**Not HIPAA-relevant examples:**

- Simple marketing sites with no forms or health-related data[13][14].
- Blogs or informational sites that do not collect user information.

> **Tip:** Always ask your healthcare client if their website will handle PHI. If so, you may need to sign a **Business Associate Agreement (BAA)**[6][10].

---

## Example Scenarios for Web Agencies

| Client Type           | Example Feature                        | HIPAA Risk Level |
|-----------------------|----------------------------------------|------------------|
| Hospital website      | Patient login, appointment system      | High             |
| Mental health app     | Intake forms, private messaging        | Very High        |
| Health insurance portal | Claims submission, PHI access        | High             |
| Fitness blog          | Only static content                    | Low              |
| Clinic landing page   | Phone number + contact form            | Moderate         |

---

## Practical Advice for Web Agencies

- **Avoid storing PHI unless absolutely necessary**[1][2].
- Use **HIPAA-compliant hosting** and infrastructure (e.g., AWS HIPAA-eligible services)[7][11].
- Ensure **SSL encryption, access control, audit logs, and secure backups**[4][13].
- Never include **Google Analytics or Facebook Pixel** on PHI-collecting pages without a proper risk assessment[11].
- **Sign a Business Associate Agreement (BAA)** before handling or accessing PHI[6][10].

---

## Key HIPAA Rules to Know

- **Privacy Rule:** Limits use and disclosure of PHI; requires Notice of Privacy Practices on patient-facing sites[4][13].
- **Security Rule:** Requires safeguards (technical, physical, administrative) for ePHI, including encryption and access controls[2][4][13].
- **Breach Notification Rule:** Requires notification to clients and authorities if PHI is compromised[2][5].

---

## Reference Materials

- [HIPAA Home – HHS.gov][5]
- [HIPAA Privacy Rule Summary – HHS.gov][4]
- [Covered Entities and Business Associates – HHS.gov][8]
- [Business Associates Explained – HHS.gov][3]
- [Who Needs HIPAA Business Associate Agreements? – Compliancy Group][6]
- [HIPAA Compliant Website Requirements – HIPAA Guide][13]
- [Marketing Agency Guide for HIPAA Websites – HIPAA Vault][11]
- [HIPAA for Developers: 2025 HIPAA Compliant Developer Guide – Atlantic.net][2]

---

## Footnotes

[1]: [Clarity Ventures: 12-Step HIPAA Compliant Website Checklist](https://www.clarity-ventures.com/services/hipaa-compliant-websites)  
[2]: [Atlantic.net: HIPAA for Developers – 2025 Guide](https://www.atlantic.net/hipaa-compliant-hosting/hipaa-compliant-developer-guide/)  
[3]: [Paubox: How to Know if You're a Business Associate](https://www.paubox.com/blog/how-to-know-if-youre-a-business-associate)  
[4]: [Compliancy Group: Legal Requirements for Healthcare Websites](https://compliancy-group.com/legal-requirements-for-healthcare-websites/)  
[5]: [HHS: HIPAA Home](https://www.hhs.gov/hipaa/index.html)  
[6]: [Compliancy Group: Who Needs HIPAA Business Associate Agreements?](https://compliancy-group.com/hipaa-business-associate-agreements/)  
[7]: [Jotform: 6 Best Hosting Services to Enable HIPAA Compliance for 2025](https://www.jotform.com/blog/hipaa-compliant-hosting-services/)  
[8]: [HHS: Covered Entities and Business Associates](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html)  
[9]: [HHS: HIPAA for Professionals](https://www.hhs.gov/hipaa/for-professionals/index.html)  
[10]: [HIPAA Journal: HIPAA Business Associate Agreement – 2025 Update](https://www.hipaajournal.com/hipaa-business-associate-agreement/)  
[11]: [HIPAA Vault: Marketing Agency Guide for HIPAA Websites](https://www.hipaavault.com/resources/hipaa-compliant-hosting-insights/marketing-agency-guide-for-hipaa-website/)  
[12]: [Compliancy Group: 4 Trusted HIPAA Compliance Resources Online](https://compliancy-group.com/4-trusted-hipaa-compliance-resources-online/)  
[13]: [HIPAA Guide: HIPAA Compliant Website Requirements](https://www.hipaaguide.net/hipaa-compliant-website/)  
[14]: [HIPAA Secure Now: Business Websites – Do They Need to Be HIPAA Compliant?](https://www.hipaasecurenow.com/business-websites-do-they-need-to-be-hipaa-compliant/)

---

*This overview reflects the latest HIPAA requirements and best practices for web agencies as of July 2025. For legal advice or specific compliance strategies, consult the official resources above or a privacy professional.*
