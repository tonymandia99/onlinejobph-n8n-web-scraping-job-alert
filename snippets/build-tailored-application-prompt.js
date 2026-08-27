const job = $json;

const candidateProfile = {
  name: 'Antonio Mandia Jr.',
  education: 'BS Information Technology graduate',
  current_role: 'Risk & Fraud Data Analyst',
  strengths: [
    'investigation and problem-solving',
    'accuracy and attention to detail',
    'Excel reporting',
    'data security',
    'testing and debugging',
  ],
  availability:
    'Available remotely between 4:00 PM and 12:00 AM Philippine time.',
  n8n_skills: [
    'n8n',
    'HTTP Request and API integrations',
    'webhooks',
    'JSON',
    'JavaScript Code nodes',
    'Switch and IF logic',
    'data cleaning and transformation',
    'deduplication',
    'Google Sheets',
    'Gmail',
    'Telegram notifications',
    'workflow testing and debugging',
  ],
  n8n_experience: [
    'Multi-source job alert automation',
    'RemoteOK API job tracker',
    'AI lead qualification and CRM automation',
  ],
  n8n_portfolio: [
    'https://tonymandia99.github.io/tonymandia999.github.io/',
    'https://github.com/tonymandia99/AI-Lead-Qualification-CRM-Automation',
  ],
  scraping_skills: [
    'Python',
    'Selenium',
    'Playwright',
    'Requests',
    'BeautifulSoup',
    'Pandas',
    'lxml',
    'Openpyxl',
    'pagination',
    'retries and logging',
    'proxy rotation',
    'crash recovery',
    'deduplication',
    'SQL/MySQL',
    'CSV and Excel output',
    'VPS deployment',
  ],
  scraping_experience:
    'Previously worked on a lead-generation pipeline that processed up to 10,000 verified insurance leads per day.',
  do_not_claim: [
    'GoHighLevel',
    'Vapi',
    'Retell AI',
    'Supabase',
    'advanced RAG',
    'vector databases',
    'production OAuth',
    'tools or experience not supported by this profile',
  ],
};

const prompt = `
Assess this verified OnlineJobs.ph job for Antonio Mandia Jr.

Return one short, Telegram-ready message in plain text. Do not submit an application.

OUTPUT RULES:
- Maximum total output: 2,200 characters.
- Use simple, natural English and short sentences.
- Do not use a table, emojis, hype, or repeated details.
- Do not copy long parts of the posting or list every candidate skill.
- Never invent experience, results, tools, or qualifications.

Use this format:

NEW JOB

Title: [job title]
Company: [employer or Not stated]
Link: [direct OnlineJobs.ph link]
Updated: [date]
Type: [work type]
Schedule: [Philippine time or Needs confirmation]
Salary: [salary]
Requirements: [maximum 3 short requirements]

Fit: [score]/10
Match: [maximum 5 relevant skills]
Gaps: [maximum 2 honest gaps]
Decision: [APPLY NOW, CONSIDER, or SKIP]

SUBJECT:
[one short application subject]

APPLICATION:
[short customized application message]

APPLICATION RULES:
- Keep the application between 400 and 650 characters.
- Start with "Hi," or "Hello," and end with "Thank you, Antonio".
- Write like a real person speaking directly to the client.
- Focus on what Antonio can do for this exact role.
- Mention only 2 or 3 matching skills and one relevant result or project.
- Use https://tonymandia99.github.io/tonymandia999.github.io/ as the primary portfolio link.
- Include https://github.com/tonymandia99/AI-Lead-Qualification-CRM-Automation only when the employer asks for a specific n8n project or technical example.
- For a scraping job, mention the 10,000 verified insurance leads per day experience when relevant.
- Avoid generic phrases such as "I am thrilled", "perfect fit", "leverage my expertise", and "I would be delighted".
- Do not mention an unproven skill gap unless it is an important requirement.
- Follow required subject keywords and application instructions exactly.
- Answer required screening questions briefly using verified facts only.
- If required information is unavailable, write [NEEDS MANUAL INPUT].
- Mention availability only when the schedule is relevant.

CANDIDATE PROFILE:
${JSON.stringify(candidateProfile)}

VERIFIED JOB DATA:
${JSON.stringify(job)}
`.trim();

return [{
  json: {
    ...job,
    prompt,
  },
}];
