---
title: Virginia CDPA Overview
description: Understand who is subject to the Virginia Consumer Data Protection Act and what responsibilities it imposes.
---

# Virginia CDPA

The **Virginia Consumer Data Protection Act (CDPA)** is a comprehensive state privacy law that took effect on **January 1, 2023**. It establishes consumer rights and data protection obligations for businesses operating in or targeting residents of Virginia[1][2][3][4].

---

## Applicability

The CDPA applies to **for-profit businesses** that conduct business in Virginia or target Virginia residents and meet **one or both** of the following thresholds[2][3][4]:

- **Control or process the personal data of at least 100,000 Virginia residents** in a calendar year, **or**
- **Control or process the personal data of at least 25,000 Virginia residents** and derive **over 50% of gross revenue** from the sale of personal data

**Exemptions:**  
- Nonprofits, higher education institutions, state agencies, and certain regulated entities (e.g., HIPAA, FERPA, FCRA, GLBA) are **exempt** from CDPA[3][4].

> ⚠️ The law does **not** apply to data collected in a commercial or employment context, or to de-identified or publicly available information[3][4].

---

## Consumer Rights & Consent Requirements

Virginia residents have the following rights under the CDPA[2][3][4]:

1. **Right to Access** – View what personal data is collected and processed.
2. **Right to Correct** – Fix inaccuracies in personal data.
3. **Right to Delete** – Request deletion of their personal data.
4. **Right to Data Portability** – Receive a copy of their data in a portable format.
5. **Right to Opt-Out** – Refuse:
   - Targeted advertising
   - Sale of personal data
   - Profiling in furtherance of decisions with legal or similarly significant effects

**Consent Model:**  
- **Opt-out** for most processing.
- **Opt-in consent required** for processing **sensitive data** (e.g., health, geolocation, race, religion, children’s data)[2][3][4].
- As of **January 1, 2025**, the definition of "child" under CDPA includes anyone under 18[5].

---

## Business Responsibilities

Businesses subject to CDPA must[2][3][4]:

- Provide a **clear, accessible privacy notice** describing processing purposes, categories of data, sharing practices, and consumer rights.
- Offer **opt-out mechanisms** for targeted ads, sale of personal data, and profiling.
- **Obtain opt-in consent** for sensitive data processing.
- **Conduct Data Protection Assessments** for high-risk processing (e.g., targeted ads, profiling, sensitive data).
- Limit data collection to what is **adequate, relevant, and reasonably necessary** for disclosed purposes.
- Secure personal data with **reasonable administrative, technical, and physical safeguards**.
- Respond to consumer requests within **45 days** (extendable to 90 days with notice).
- Provide a **mechanism for appeal** if a consumer request is denied.

> **Vendor management:** Contracts with processors (such as web agencies) must specify data handling responsibilities and prohibit further use of data for the processor’s own purposes[2][3][4].

---

## Considerations for Web Agencies

For web developers and agencies building sites for Virginia-based businesses or those with Virginia users:

- **Review client data flows:** Confirm if your client processes personal data from 100,000+ VA users or meets the revenue threshold.
- **Update privacy notices:** Ensure privacy policies reflect CDPA rights and opt-out options.
- **Implement opt-out UI:** Especially if using tracking, targeted advertising (e.g., Meta Pixel, Google Ads), or personalization tools.
- **Document roles:** Agencies are typically **data processors**; contracts must clearly define controller/processor roles and restrict use of data to client instructions.
- **Data Protection Assessments:** Assist clients in documenting risks if your services involve high-risk processing (e.g., profiling, sensitive data collection).
- **Children’s data:** As of 2025, stricter rules apply for data related to anyone under 18.

---

## Differences from Other Laws (e.g., CCPA)

| Feature                | Virginia CDPA                   | California CCPA / CPRA          |
|------------------------|---------------------------------|---------------------------------|
| Consent Model          | Opt-out (opt-in for sensitive)  | Opt-out                        |
| Applicability Threshold| 100,000 users OR 25k + 50% revenue | $25M revenue OR 100,000 households |
| Right to Correction    | Yes                             | Yes                            |
| Right to Opt-Out       | Yes (ads, sales, profiling)     | Yes                            |
| Private Right of Action| No                              | Yes (for security breaches)    |
| Enforcement Authority  | Attorney General                | Attorney General + Civil lawsuits |

---

## References

1. [Kiteworks: Virginia Consumer Data Protection Act Overview](https://www.kiteworks.com/risk-compliance-glossary/virginia-consumer-data-protection-act/)
2. [TrustArc: Virginia Consumer Data Protection Act (CDPA)](https://trustarc.com/regulations/virginia-cdpa/)
3. [Virginia CDPA Text (VA Code §59.1-571 to §59.1-581)](https://law.lis.virginia.gov/vacode/title59.1/chapter53/)
4. [Termly: VCDPA Explained](https://termly.io/resources/articles/vcdpa/)
5. [SB783 – 2025 Amendment (Children’s Privacy)](https://lis.virginia.gov/bill-details/20251/SB783)
6. [IAPP: Virginia CDPA Overview](https://iapp.org/resources/article/virginia-consumer-data-protection-act-cdpa/)

---

*This overview reflects the latest Virginia CDPA requirements as of July 2025. For legal advice or specific compliance strategies, consult the official resources above or a privacy professional.*
