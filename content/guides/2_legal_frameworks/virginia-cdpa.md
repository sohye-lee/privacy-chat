---
title: Virginia CDPA Overview
description: Understand who is subject to the Virginia Consumer Data Protection Act and what responsibilities it imposes.
---

# Virginia CDPA

The **Virginia Consumer Data Protection Act (CDPA)** is a state-level data privacy law that took effect on **January 1, 2023**. It outlines consumer rights and data protection obligations for businesses operating in or targeting residents of Virginia.

---

## Applicability

The CDPA applies to **for-profit entities** that conduct business in Virginia or target its residents and meet **one or both** of the following thresholds:

- Controls or processes the personal data of **at least 100,000 Virginia residents** in a calendar year, **or**
- Derives over **50% of gross revenue** from the **sale of personal data** and processes personal data of **at least 25,000 Virginia residents**

> ⚠️ Nonprofits and institutions of higher education are **exempt** from CDPA.

**Reference**: [§59.1-573 – CDPA Scope](https://law.lis.virginia.gov/vacodefull/title59.1/chapter53/)

---

## Consumer Rights & Consent Requirements

Virginia residents have the following rights under CDPA:

1. **Right to Access** – View what data is collected.
2. **Right to Correct** – Fix inaccuracies in personal data.
3. **Right to Delete** – Request deletion of personal data.
4. **Right to Data Portability** – Obtain a copy in portable format.
5. **Right to Opt-Out** – Refuse:
   - Targeted advertising
   - Sale of personal data
   - Profiling in furtherance of decisions that produce legal or similarly significant effects

Unlike the CCPA, **Virginia’s CDPA is opt-out only** — explicit consent is not always required except for the processing of **sensitive data** (e.g., health, geolocation, race, religion), which must have **opt-in consent**.

---

## Business Responsibilities

Businesses subject to CDPA must:

- Provide a **clear privacy notice** describing processing purposes and consumer rights.
- Offer **opt-out mechanisms** for targeted ads and data sale.
- Conduct **Data Protection Assessments** for high-risk processing activities.
- Limit data collection to what is **adequate, relevant, and reasonably necessary**.
- Secure personal data using **reasonable administrative, technical, and physical safeguards**.

Requests must be responded to within **45 days**, extendable to 90 days with notice.

---

## Considerations for Web Agencies

For web developers and agencies building sites for Virginia-based businesses or businesses with Virginia users:

- Ensure **privacy notices are up-to-date** and reflect CDPA rights.
- Confirm whether your client **processes personal data from ≥100k VA users** — this triggers CDPA compliance.
- **Implement opt-out** capabilities for tracking, especially if using:
  - Targeted advertising platforms (Meta Pixel, Google Ads)
  - Personalization tools
- If your agency provides **analytics or personalization**, document **data flows and service agreements**, as the law distinguishes **controllers** vs. **processors**.

> 💡 You are likely considered a **data processor**, so contract terms with your clients should define responsibilities clearly (e.g., not using personal data for your own purposes).

---

## Differences from Other Laws (e.g., CCPA)

| Feature | Virginia CDPA | California CCPA / CPRA |
|---|---|---|
| Consent Model | Opt-out (opt-in for sensitive data) | Opt-out |
| Applicability Threshold | 100,000 users OR 25k + 50% revenue | $25M revenue OR 100,000 households |
| Right to Correction | Yes | Yes |
| Right to Opt-Out | Yes (ads, sales, profiling) | Yes |
| Private Right of Action | No | Yes (for security breaches) |
| Enforcement Authority | Attorney General | Attorney General + Civil lawsuits |

---

## References

- [Virginia CDPA Text (VA Code §59.1-571 to §59.1-581)](https://law.lis.virginia.gov/vacode/title59.1/chapter53/)
- [Virginia AG CDPA Portal (Official Info)](https://www.oag.state.va.us/)
- [IAPP Virginia CDPA Overview](https://iapp.org/resources/article/virginia-consumer-data-protection-act-cdpa/)

