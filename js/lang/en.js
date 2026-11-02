/* ============================================================
   js/lang/en.js — English text and content
   Same keys as es.js (run: node tools/check-lang.js).
   ============================================================ */

(window.LANG = window.LANG || {}).en = {
  ui: {
    pageTitle: "Cloud Practitioner CLF-C02",
    eyebrow: "AWS · CLF-C02 · study guide",
    themeAria: "Switch between light and dark theme", themeTitle: "Switch theme",
    themeDark: "Dark", themeLight: "Light",
    langGroupAria: "Language", langName: "English",
    chipQuestions: "65 questions · 90 min", chipPass: "Pass with 700/1000",
    tabsAria: "Sections", tabPlan: "Plan", tabKit: "Kit", tabPractice: "Practice",

    dow: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    dowFull: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    dayLetters: ["S","M","T","W","T","F","S"],
    mon: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    dayFmt: (w, d, m) => `${w}, ${m} ${d}`,

    setupH: "Build your plan",
    examDateLbl: "Your exam date",
    noDateLbl: "I don't have a date yet",
    blockedLbl: "Days you <b>can't</b> study",
    minWeekLbl: "Time per day, Monday to Friday",
    minWeekendLbl: "Time per day, Saturday and Sunday",

    progressTitle: "Your progress",
    progressHelp: "Open a block, tap <b>+ Show explanation and links</b> to study each topic (with video and the official page), and tick the box when you've mastered it. Your ticks are saved on this device.",
    blocksH: "Study blocks",
    recalc: "Recalculate from today",

    weekH: "Weekly schedule",
    thDay: "Day", thTime: "Time", thDo: "What to do",
    weekRule: "Rule: if a practice set scores below 70 %, review that topic before moving on.",

    domH: "Exam domains",
    thDomain: "Domain", thWeight: "Weight", thQuestions: "Questions",
    domRows: `<tr><td>3 · Cloud Technology and Services</td><td class="num">34 %</td><td class="num">~17</td></tr>
        <tr><td>2 · Security and Compliance</td><td class="num">30 %</td><td class="num">~15</td></tr>
        <tr><td>1 · Cloud Concepts</td><td class="num">24 %</td><td class="num">~12</td></tr>
        <tr><td>4 · Billing, Pricing, and Support</td><td class="num">12 %</td><td class="num">~6</td></tr>`,
    domNote: "Of the 65 questions, 15 are unscored and you don't know which. Question types: multiple choice (1 of 4) and multiple response (2+ of 5+). The certification is valid for 3 years.",

    resH: "Resources",
    thResource: "Resource", thFor: "What it's for", thCost: "Cost",
    resRows: `<tr><td class="svc">Skill Builder: Cloud Practitioner Essentials</td><td>Official core course (blocks 1–3)</td><td>Free</td></tr>
        <tr><td class="svc">Official Practice Question Set</td><td>Official practice questions</td><td>Free</td></tr>
        <tr><td class="svc">AWS Cloud Quest: Cloud Practitioner</td><td>Guided hands-on practice in the console</td><td>Free</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=7HKot-brXFE" target="_blank" rel="noopener">freeCodeCamp: full 2026 course</a></td><td>13-hour video; the links for each topic jump to its minute</td><td>Free</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=O1EqUGkUVPE" target="_blank" rel="noopener">Vikingos de Cloud: CLF-C02 course</a></td><td>Full course in Spanish on YouTube</td><td>Free</td></tr>
        <tr><td class="svc">Tutorials Dojo</td><td>Full-length practice exams for block 4</td><td>Low cost</td></tr>
        <tr><td class="svc">Official Practice Exam</td><td>Final mock exam, closest to the real thing</td><td>Subscription</td></tr>`,
    resOfficial: `<a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener">Official certification page</a>`,

    kitLangH: "Choosing your exam language",
    kitLangList: `<li>When you book, you pick the exam language (English, Spanish (Latin America), and more). Non-English exams have a button to view each question in English.</li>
      <li>Service names are never translated: you'll see "Amazon EC2" and "AWS Shield" in any language.</li>
      <li>Taking the exam in English as a non-native speaker? Ask about the extra 30 minutes (ESL accommodation) when you book. Check the current rules with AWS Training and Certification.</li>
      <li>The Official Practice Question Set is free in AWS Skill Builder, and it's also available in Spanish.</li>
      <li>The table below lists phrases that keep showing up in exam questions and what they point to.</li>`,
    searchH: "If the question says… it's…",
    searchLead: "Search by keyword or service.",
    searchPh: "E.g.: DDoS, NoSQL, cost, API…",
    searchAria: "Search the cheat sheet",
    svcEmpty: q => `Nothing matches "${q}". Try another word.`,
    pairsH: "Most commonly confused pairs",
    thPair: "Pair", thDiff: "Difference",
    supportH: "Support plans",
    supportNote: "AWS renamed its plans in late 2025 (Basic, Business Support+, Enterprise, Unified Operations). The exam probably still asks about the previous ones: study this table.",
    thPlan: "Plan", thFastest: "Fastest response", thDistinct: "What sets it apart",
    supportRows: `<tr><td class="svc">Basic</td><td class="num">—</td><td>Free; billing and account support only; basic Trusted Advisor checks</td></tr>
        <tr><td class="svc">Developer</td><td class="num">&lt; 12 h</td><td>Email during business hours; testing and development</td></tr>
        <tr><td class="svc">Business</td><td class="num">&lt; 1 h</td><td>24/7 phone and chat; full Trusted Advisor</td></tr>
        <tr><td class="svc">Enterprise On-Ramp</td><td class="num">&lt; 30 min</td><td>Shared pool of TAMs</td></tr>
        <tr><td class="svc">Enterprise</td><td class="num">&lt; 15 min</td><td>Designated TAM, Concierge</td></tr>`,
    supportHint: "Hint: a designated TAM always means Enterprise.",
    listsH: "Lists the exam asks word for word",
    listsCard: `<div><h3>Well-Architected · 6 pillars</h3><p>Operational excellence, security, reliability, performance efficiency, cost optimization, sustainability.</p></div>
      <div><h3>Cloud Adoption Framework · 6 perspectives</h3><p>Business, people, governance, platform, security, operations.</p></div>
      <div><h3>Migration · the 7 Rs</h3><p>Retire, retain, rehost, relocate, replatform, repurchase, refactor.</p></div>
      <div><h3>6 advantages of cloud</h3><p>Pay-as-you-go, economies of scale, stop guessing capacity, agility, go global in minutes, stop spending on data centers.</p></div>`,
    figuresH: "Key figures",
    figuresRows: `<tr><td>S3 durability</td><td class="num">99.999999999 %</td></tr>
      <tr><td>Spot Instances</td><td>Up to 90 % off; can be interrupted</td></tr>
      <tr><td>Reserved / Savings Plans</td><td>Up to 72 % off; 1 or 3 years</td></tr>
      <tr><td>On-Demand</td><td>No commitment; short workloads</td></tr>
      <tr><td>Dedicated Hosts</td><td>Physical server; licensing or compliance</td></tr>
      <tr><td>Root user</td><td>MFA, no access keys, not for everyday use</td></tr>`,
    glossH: "Exam wording decoder",
    glossTh1: "Phrase in the question", glossTh2: "What it points to", glossTh3: "Why",
    examdayH: "Exam day",
    examdayList: `<li>Answer everything: there's no penalty for wrong answers.</li>
      <li>Flag the doubtful ones and come back at the end; you have about 80 seconds per question.</li>
      <li>Look for the keyword: "most cost-effective", "least operational overhead", "highly available".</li>
      <li>On multiple-response questions, pick exactly as many options as it asks for.</li>
      <li>If you test online: clear desk and run the system check the day before.</li>`,
    practiceH: "Practice questions",
    practiceLead: "CLF-C02 style. Pick an answer and read the explanation.",
    footer: `Sources: <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener">AWS</a> · <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener">AWS Training and Certification</a> · <a href="https://tutorialsdojo.com/aws-support-plans/" target="_blank" rel="noopener">Tutorials Dojo</a>. Data as of October 2026.`,

    docBase: "https://aws.amazon.com/",
    explain: "Show explanation", explainLinks: "Show explanation and links",
    videoNote: h => `Video · from ${h}`,
    officialPage: "Official AWS page",

    cdNone: "Pick your exam date",
    cdDays: (n, d) => `${n} ${n === 1 ? "day" : "days"} left · ${d}`,
    cdTomorrow: "Exam is tomorrow · get some rest!",
    cdToday: "Exam day · good luck!",
    cdPast: d => `Exam: ${d}`,
    sumNoTime: "With that date and those days there's no study day left. Check the date or the days you blocked.",
    sumExam: (d, days, have, need) => `Exam: ${d}. You have ${days} study days with ≈ ${have} available; the plan uses ≈ ${need}.`,
    sumNoExam: (days, need) => `No exam date yet: the full plan takes ${days} study days (≈ ${need} in total). Once you have a date, enter it above and the plan adjusts.`,
    blocksLeadExam: d => `Plan up to your exam on ${d}. Open a week and tick each topic when you've mastered it.`,
    blocksLeadNo: "Plan in study order, no dates. Open a week and tick each topic when you've mastered it.",
    weekN: n => `Week ${n}`,
    dayN: n => `Day ${n}`,
    daysRange: (a, b) => `Days ${a}–${b}`,
    doneDate: "Already done", doneTitle: "Completed topics",
    today: "Today", lateBadge: "Late",
    lateCount: n => `You have ${n} ${n === 1 ? "topic" : "topics"} behind schedule.`,
    overloadTitle: "Very tight plan", needLbl: "you need", haveLbl: "you have",
    overloadAdvice: "Add time per day or unblock a day of the week so everything fits.",
    droppedSummary: n => `${n} optional ${n === 1 ? "topic" : "topics"} removed to make it fit`,
    droppedNote: "If you have spare time, do them anyway: they're extra practice.",
    weekOff: "Rest",
    weekWeekend: "Console (Free Tier), practice questions and error review",
    weekWeekday: "New content: video or reading + your own notes",
    weekLead: total => `About ${total} per week, based on what you picked above.`,

    qResult: "Result",
    qCount: n => `${n} questions`,
    qHigh: "You're ready for this level. Move on to full-length exams.",
    qMid: "Close. Review the ones you missed in the cheat sheet.",
    qLow: "Review the commonly confused pairs and the cheat sheet, then try again.",
    qAgain: "Start over",
    qOf: (i, n) => `Question ${i} of ${n}`,
    qHits: s => `Correct: ${s}`,
    qNext: "Next", qSee: "See result",
    qRight: "Correct.", qWrong: "Not quite."
  },


  /* Text of each plan topic (key = "block-topic") */
  topics: {
    "0-0": "What cloud computing is and its 6 advantages",
    "0-1": "Service models (IaaS, PaaS, SaaS) and deployment models",
    "0-2": "Regions, Availability Zones, edge locations",
    "0-3": "Well-Architected, Cloud Adoption Framework, the 7 Rs, Snow Family, DMS",
    "0-4": "Free Tier account, root MFA and billing alert",
    "0-5": "Domain 1 practice set",
    "1-0": "Compute: EC2 and purchase options, Lambda, ECS/EKS, Fargate, Beanstalk, Lightsail, Auto Scaling, ELB",
    "1-1": "Storage: S3 and its classes, Glacier, EBS, EFS, Storage Gateway",
    "1-2": "Networking: VPC, subnets, security groups vs. NACLs, Route 53, CloudFront, Direct Connect, VPN",
    "1-3": "Databases: RDS, Aurora, DynamoDB, ElastiCache, Redshift, DocumentDB, Neptune",
    "1-4": "Analytics, AI and integration: Athena, Kinesis, Glue, QuickSight, SageMaker, SQS, SNS, EventBridge",
    "1-5": "Management (CloudWatch, CloudFormation, Systems Manager, Trusted Advisor) + EC2 micro and S3 in the console",
    "1-6": "40-question set, Domains 1 and 3",
    "2-0": "Shared responsibility and IAM: users, groups, roles, policies, least privilege, MFA",
    "2-1": "Shield, WAF, GuardDuty, Inspector, Macie, KMS, Secrets Manager; CloudTrail, Config, Artifact, Audit Manager",
    "2-2": "Pricing Calculator, Cost Explorer, Budgets, CUR, Organizations; support plans",
    "3-0": "Security + Billing practice set",
    "3-1": "Full-length exam #1, timed, plus error review",
    "3-2": "Full-length exam #2 and error log",
    "4-0": "Extra full-length exams (#3 onward, one every 2–3 days) with error review; goal: 80 % or more",
    "4-1": "Final review: flashcards, commonly confused pairs, error log",
    "4-2": "Day before: light review and a good night's sleep"
  },

  /* Titles of each topic's links (same indexes as LINKS_RAW) */
  linkTitles: {
    "0-0": {"v":["Benefits of the cloud","Cloud concepts"],"d":["What is cloud computing?"]},
    "0-1": {"v":["Cloud concepts"],"d":["Types of cloud computing"]},
    "0-2": {"v":["Global infrastructure"],"d":["AWS global infrastructure"]},
    "0-3": {"v":["Well-Architected","TCO and migration"],"d":["Well-Architected Framework","Cloud Adoption Framework"]},
    "0-4": {"v":["Getting started"],"d":["AWS Free Tier"]},
    "0-5": {"d":["AWS Skill Builder"]},
    "1-0": {"v":["Compute","EC2 pricing models"],"d":["EC2 pricing"]},
    "1-1": {"v":["Storage"],"d":["S3 storage classes"]},
    "1-2": {"v":["Networking"],"d":["Amazon VPC"]},
    "1-3": {"v":["Databases"],"d":["Databases on AWS"]},
    "1-4": {"v":["ML, AI and big data","Application integration"],"d":["Analytics on AWS"]},
    "1-5": {"v":["Management tools","Logging"],"d":["AWS CloudFormation"]},
    "2-0": {"v":["Shared responsibility","Identity (IAM)"],"d":["Shared responsibility model","AWS IAM"]},
    "2-1": {"v":["Security","Governance"],"d":["Security on AWS"]},
    "2-2": {"v":["Billing, pricing and support"],"d":["Cost management","Support plans"]}
  },

  /* Explanation of each topic */
  info: {
"0-0":`<h4>What is cloud computing?</h4>
<p>It's the <b>on-demand</b> delivery of IT resources (servers, storage, databases, networking, software) <b>over the internet</b>, with <b>pay-as-you-go</b> pricing. Instead of buying and maintaining your own data center, you "rent" capacity from a provider like AWS and use it only when you need it.</p>
<p>Example: an online store that gets 10 times more visits on Black Friday. On-premises, it would have to buy servers for that peak and leave them idle the rest of the year. In the cloud, it adds servers that day and shuts them down afterward; it pays only for those hours.</p>
<h4>The 6 advantages of cloud (the exam asks them in these words)</h4>
<ul>
<li><b>Trade fixed expense for variable expense</b> (CapEx → OpEx): you don't invest money up front in hardware; you pay month by month for what you consume.</li>
<li><b>Benefit from massive economies of scale:</b> because AWS has hundreds of thousands of customers, it buys at huge volume and its unit costs are lower. Those savings turn into lower prices for you (AWS has cut prices more than 100 times).</li>
<li><b>Stop guessing capacity:</b> on-premises you have to estimate how many servers you'll need; if you fall short, the app goes down; if you overshoot, you pay for idle equipment. In the cloud you adjust to real demand.</li>
<li><b>Increase speed and agility:</b> a new server is ready in minutes instead of weeks. That makes experimenting cheap: try an idea and, if it doesn't work, shut it down.</li>
<li><b>Stop spending money running and maintaining data centers:</b> you don't pay for electricity, cooling, physical security or rack staff. Your team focuses on what differentiates your business.</li>
<li><b>Go global in minutes:</b> you deploy your app in other regions of the world with a few clicks, giving users in other countries low latency.</li>
</ul>
<h4>Related concepts that show up</h4>
<ul>
<li><b>Elasticity:</b> automatically scaling resources up <i>and down</i> with demand (e.g., Auto Scaling).</li>
<li><b>Scalability:</b> the ability to grow to handle more load. <b>Vertical</b> = a bigger machine; <b>horizontal</b> = more machines.</li>
<li><b>High availability:</b> the system stays available even if a part fails (achieved with multiple Availability Zones).</li>
<li><b>Fault tolerance:</b> the system keeps working <i>without interruption</i> even if a component fails.</li>
<li><b>TCO (total cost of ownership):</b> comparing everything on-premises costs (hardware, power, staff, space) against the cloud.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "reduce resources when demand drops" is <b>elasticity</b>, not scalability. "Pay only for what you use" is pay-as-you-go / variable expense, not economies of scale.</p>`,

"0-1":`<h4>Service models: how much do you manage?</h4>
<ul>
<li><b>IaaS (infrastructure as a service):</b> AWS gives you the basic building blocks: virtual servers, network and storage. You install and maintain the operating system, the software and the patches. Maximum control and maximum responsibility. Examples: <b>Amazon EC2</b>, Amazon VPC, Amazon EBS.</li>
<li><b>PaaS (platform as a service):</b> AWS manages the infrastructure and the operating system; you only take care of your code and your data. Examples: <b>AWS Elastic Beanstalk</b>, Amazon RDS (in part), AWS Lambda.</li>
<li><b>SaaS (software as a service):</b> you use a finished product, usually from the browser. You manage nothing technical. Examples: Gmail, Salesforce, Amazon WorkMail, Amazon Chime.</li>
</ul>
<p>Rule of thumb: IaaS → you manage almost everything; PaaS → just your app; SaaS → you just use it.</p>
<h4>Deployment models</h4>
<ul>
<li><b>Cloud (cloud-native / all-in):</b> the whole application runs in the cloud. It can be built from scratch there or migrated.</li>
<li><b>Hybrid:</b> part in your data center and part in the cloud, connected. Typical when there are legacy systems that are hard to move or data that by law must stay in your country/company. Services that enable it: <b>Direct Connect</b>, <b>VPN</b>, <b>Storage Gateway</b>, <b>AWS Outposts</b> (AWS racks installed in your own data center).</li>
<li><b>On-premises (private cloud):</b> everything on your own equipment, using virtualization technology. It doesn't take advantage of the public cloud's benefits.</li>
</ul>
<h4>Ways to access AWS</h4>
<ul>
<li><b>Management Console:</b> web interface, ideal for learning and one-off tasks.</li>
<li><b>CLI (command line):</b> text commands, good for automating with scripts.</li>
<li><b>SDK:</b> libraries to use AWS from your code (Python, Java, JavaScript…).</li>
<li><b>Infrastructure as code:</b> templates with CloudFormation or AWS CDK.</li>
</ul>
<p class="trap"><b>Typical trap:</b> if the question says "the company wants to keep part of it in its own data center", it's <b>hybrid</b>. If it asks for "just upload the code without managing servers", it's <b>PaaS / Elastic Beanstalk</b>.</p>`,

"0-2":`<h4>Region</h4>
<p>A geographic location in the world where AWS has a group of data centers (e.g., <i>sa-east-1</i> São Paulo, <i>us-east-1</i> N. Virginia). Each region is <b>isolated</b> from the others: your data <b>doesn't leave a region</b> unless you configure it to.</p>
<p>How to choose a region (4 factors the exam asks about):</p>
<ul>
<li><b>Compliance and laws:</b> if the law requires data to stay in a country, you pick that region. This factor outweighs the others.</li>
<li><b>Proximity to users:</b> closer = lower latency.</li>
<li><b>Available services:</b> not every new service is in every region.</li>
<li><b>Price:</b> the same service costs differently depending on the region.</li>
</ul>
<h4>Availability Zone (AZ)</h4>
<p>One or more independent data centers within a region, with their own power, networking and cooling, separated by kilometers but connected with very low-latency links. Each region has <b>at least 3 AZs</b>.</p>
<p>If you place your application in <b>two or more AZs</b> and one goes down (fire, power outage), the other keeps serving: that's <b>high availability</b>. It's the best practice AWS always recommends.</p>
<h4>Edge locations</h4>
<p>Hundreds of points of presence in cities around the world, more numerous than regions. They're used by:</p>
<ul>
<li><b>Amazon CloudFront</b> (CDN): caches copies of your content close to the user.</li>
<li><b>Amazon Route 53</b> (DNS).</li>
<li><b>AWS Global Accelerator</b> and <b>S3 Transfer Acceleration</b>: speed up traffic by using the AWS network.</li>
</ul>
<h4>Other infrastructure terms</h4>
<ul>
<li><b>Local Zones:</b> extensions of a region in a large city, for single-digit-millisecond latency.</li>
<li><b>Wavelength:</b> AWS infrastructure inside mobile carriers' 5G networks.</li>
<li><b>AWS Outposts:</b> AWS hardware installed in your own data center.</li>
</ul>
<p>Service scope: some are <b>global</b> (IAM, Route 53, CloudFront), others <b>regional</b> (S3, Lambda, DynamoDB) and others <b>zonal</b> (an EC2 instance or an EBS volume lives in one AZ).</p>
<p class="trap"><b>Typical trap:</b> "high availability" → multiple <b>AZs</b>. "Disaster recovery for a whole region" → multiple <b>regions</b>. "Low latency for global users with static content" → <b>CloudFront / edge locations</b>.</p>`,

"0-3":`<h4>AWS Well-Architected Framework: 6 pillars</h4>
<ul>
<li><b>Operational excellence:</b> run and monitor well, automate changes, make small and frequent changes, learn from mistakes. E.g.: infrastructure as code with CloudFormation.</li>
<li><b>Security:</b> protect data and systems: least privilege, encryption, traceability (CloudTrail), security at every layer.</li>
<li><b>Reliability:</b> recover from failures automatically and scale to meet demand. E.g.: multiple AZs, backups, Auto Scaling.</li>
<li><b>Performance efficiency:</b> use the right resources and adjust them as demand changes or new technologies appear. E.g.: choosing the right instance type, using serverless.</li>
<li><b>Cost optimization:</b> don't pay for what you don't use: pick the right pricing model, shut down idle resources, measure spending.</li>
<li><b>Sustainability:</b> minimize environmental impact: maximize resource utilization and reduce waste.</li>
</ul>
<p>Tool: <b>AWS Well-Architected Tool</b> reviews your architecture against these pillars for free.</p>
<h4>AWS Cloud Adoption Framework (CAF)</h4>
<p>A guide for a <b>company</b> (not just the technical team) to organize its move to the cloud. It has 6 perspectives:</p>
<ul>
<li><b>Business:</b> make sure cloud investment supports business goals.</li>
<li><b>People:</b> training, culture and organizational change.</li>
<li><b>Governance:</b> managing risk, costs and programs.</li>
<li><b>Platform:</b> designing the architecture and infrastructure in the cloud.</li>
<li><b>Security:</b> confidentiality, integrity and availability of data and workloads.</li>
<li><b>Operations:</b> make sure services run at the agreed level.</li>
</ul>
<p>The first 3 are business-oriented; the last 3, technical. Benefits the CAF mentions: lower risk, better ESG performance, more revenue and more operational efficiency.</p>
<h4>The 7 Rs of migration</h4>
<ul>
<li><b>Retire:</b> shut down applications nobody uses anymore.</li>
<li><b>Retain:</b> keep them on-premises for now (not worth it or not possible to move).</li>
<li><b>Rehost ("lift and shift"):</b> move the app as is to EC2, with no changes. The fastest.</li>
<li><b>Relocate:</b> move virtual servers (e.g., VMware) to the cloud without buying new hardware or changing the app.</li>
<li><b>Replatform ("lift, tinker and shift"):</b> small tweaks to take advantage of the cloud, e.g.: moving your database to RDS.</li>
<li><b>Repurchase ("drop and shop"):</b> switch to a different product, usually SaaS. E.g.: your homegrown CRM for Salesforce.</li>
<li><b>Refactor / re-architect:</b> redesign the app for the cloud (microservices, serverless). More expensive and slower, but takes full advantage.</li>
</ul>
<h4>Migration tools</h4>
<ul>
<li><b>AWS Snow Family:</b> physical devices AWS ships to you; you load your data and send them back. <b>Snowcone</b> (small, TB), <b>Snowball Edge</b> (tens of TB, also processes data on site). Use it when the network is slow or the data is huge.</li>
<li><b>AWS DMS (Database Migration Service):</b> migrates databases while the source database keeps running. With the <b>Schema Conversion Tool</b> you can change engines (e.g., Oracle → Aurora).</li>
<li><b>AWS Application Migration Service:</b> automates rehosting servers to AWS.</li>
<li><b>AWS Migration Hub:</b> a dashboard to track all migrations.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "move without changes" = <b>rehost</b>; "switch to SaaS" = <b>repurchase</b>; "petabytes with slow internet" = <b>Snowball</b>; "assess the architecture" = <b>Well-Architected</b>; "organizational transformation" = <b>CAF</b>.</p>`,

"0-4":`<h4>Creating the account</h4>
<p>Go to aws.amazon.com/free and sign up with an email, a card (for verification) and a phone number. The <b>free tier</b> has 3 types of offers:</p>
<ul>
<li><b>Always free:</b> they never expire (e.g.: 1 million Lambda requests per month).</li>
<li><b>12 months free:</b> from the day you create the account (e.g.: 750 hours per month of EC2 t2/t3.micro).</li>
<li><b>Free trials:</b> for a limited time when you activate a service.</li>
</ul>
<h4>The root user</h4>
<p>It's the identity created with the sign-up email and has <b>full access</b> to the account, including billing and closing the account. Best practices the exam asks about:</p>
<ul>
<li>Enable <b>MFA</b> (multi-factor authentication) right away.</li>
<li><b>Don't create access keys</b> for root.</li>
<li>Don't use it day to day: create an administrator user in IAM or IAM Identity Center.</li>
<li>Use a strong password and don't share it.</li>
</ul>
<p>Tasks that <b>only</b> root can do: change account settings (email, root password), close the account, change the support plan, restore IAM permissions if you lost access.</p>
<h4>Billing alert</h4>
<p>In <b>AWS Budgets</b>, create a cost budget (e.g.: 5 USD) with an email alert at 80 %. If you go over, it notifies you. You can also use the "Zero spend budget" template, which alerts on any charge.</p>
<p class="trap"><b>Typical trap:</b> the first action after creating the account is to <b>enable MFA on root</b>. For day-to-day work, use IAM users or roles.</p>`,

"0-5":`<p>Use the <b>Official Practice Question Set</b> in Skill Builder (free). When you finish:</p>
<ul>
<li>Review <b>all</b> the questions, not just the ones you got wrong: also the ones you got right while doubting.</li>
<li>Write in an "error log" the concept each one tested (e.g.: "elasticity ≠ scalability").</li>
<li>If an explanation surprises you, go back to that topic's summary right here.</li>
</ul>
<p>That error log is what you'll review during exam week.</p>`,

"1-0":`<h4>Amazon EC2 (Elastic Compute Cloud)</h4>
<p>Virtual servers ("instances") you launch in minutes. You choose the operating system (an <b>AMI</b> image), size (instance type), network and storage. It's <b>IaaS</b>: you patch the operating system.</p>
<p>Instance families: <b>general purpose</b> (balanced, e.g.: web servers), <b>compute optimized</b> (lots of CPU, e.g.: gaming, modeling), <b>memory optimized</b> (lots of RAM, e.g.: in-memory databases), <b>accelerated computing</b> (GPU, e.g.: machine learning), <b>storage optimized</b> (lots of fast disk).</p>
<h4>EC2 purchase options (asked a lot)</h4>
<ul>
<li><b>On-Demand:</b> you pay per second or hour, no commitment. For short, unpredictable workloads or testing. The most expensive per hour.</li>
<li><b>Reserved Instances:</b> you commit for 1 or 3 years to an instance type; up to <b>72 %</b> off. For steady workloads (e.g.: a database that runs 24/7). All upfront, partial upfront or no upfront (more upfront = bigger discount).</li>
<li><b>Savings Plans:</b> you commit to spending X USD per hour for 1 or 3 years; up to 72 % off. <b>More flexible</b>: you can change instance type, region, and even use Fargate and Lambda.</li>
<li><b>Spot Instances:</b> spare AWS capacity at up to <b>90 %</b> off, but AWS can <b>take it back with a 2-minute warning</b>. For jobs that tolerate interruptions: batch processing, data analysis, rendering.</li>
<li><b>Dedicated Hosts:</b> an entire physical server just for you. For per-socket or per-core software licenses, or compliance requirements. The most expensive.</li>
<li><b>Dedicated Instances:</b> your instances run on hardware not shared with other customers, but you don't control the physical server.</li>
<li><b>Capacity Reservations:</b> you reserve capacity in an AZ to have it guaranteed.</li>
</ul>
<h4>Other compute services</h4>
<ul>
<li><b>AWS Lambda:</b> you run code in response to events (uploading a file to S3, an API request) with no servers. You pay per number of requests and milliseconds of execution. <b>15-minute</b> limit per execution. Scales automatically.</li>
<li><b>Amazon ECS:</b> AWS's Docker container orchestrator. <b>Amazon EKS:</b> the same, but with Kubernetes.</li>
<li><b>AWS Fargate:</b> serverless engine for ECS and EKS: you run containers without managing servers.</li>
<li><b>Amazon ECR:</b> registry where you store your container images.</li>
<li><b>AWS Elastic Beanstalk:</b> you upload your code and AWS creates everything (EC2, load balancer, Auto Scaling, monitoring). You still have access to the resources.</li>
<li><b>Amazon Lightsail:</b> simple virtual server with a fixed monthly price; for small sites, WordPress or beginners.</li>
<li><b>AWS Batch:</b> runs thousands of batch jobs.</li>
</ul>
<h4>Scaling and load balancing</h4>
<ul>
<li><b>Amazon EC2 Auto Scaling:</b> adds instances when load goes up and removes them when it goes down (elasticity). You define minimum, desired and maximum. It also replaces instances that fail.</li>
<li><b>Elastic Load Balancing (ELB):</b> spreads traffic across several instances and AZs, and stops sending traffic to the ones that fail. Types: <b>Application Load Balancer</b> (HTTP/HTTPS, layer 7), <b>Network Load Balancer</b> (TCP/UDP, ultra performance, layer 4), <b>Gateway Load Balancer</b> (for security appliances).</li>
</ul>
<p class="trap"><b>Typical trap:</b> "can be interrupted" → <b>Spot</b>. "Steady, 24/7, 3 years" → <b>Reserved</b> or <b>Savings Plans</b>. "Flexibility to change instance family" → <b>Savings Plans</b>. "Per-socket licenses" → <b>Dedicated Hosts</b>. "No servers, event-driven" → <b>Lambda</b>. "Containers without servers" → <b>Fargate</b>.</p>`,

"1-1":`<h4>Amazon S3 (Simple Storage Service)</h4>
<p><b>Object</b> storage (files with their metadata) in containers called <b>buckets</b>. Unlimited capacity; each object can be up to 5 TB. Durability of <b>99.999999999 % (11 nines)</b>: data is automatically copied across several AZs. It's a <b>regional</b> service, but the bucket name must be globally unique.</p>
<p>Uses: static website files (it can host a full static site), backups, data lakes, images and videos.</p>
<p>Features that appear: <b>versioning</b> (keeps previous versions, protects against accidental deletion), <b>lifecycle policies</b> (automatically move objects to cheaper classes after X days), <b>cross-region replication</b>, <b>encryption</b> (on by default), <b>Block Public Access</b> (blocks public access by default).</p>
<h4>S3 storage classes (from most to least expensive)</h4>
<ul>
<li><b>S3 Standard:</b> frequently accessed data. No retrieval fee.</li>
<li><b>S3 Intelligent-Tiering:</b> automatically moves objects between tiers based on usage. Ideal if you <b>don't know</b> the access pattern.</li>
<li><b>S3 Standard-IA</b> (infrequent access): cheaper to store, but charges for retrieval. Copies across several AZs.</li>
<li><b>S3 One Zone-IA:</b> like the previous one, but in <b>a single AZ</b> (cheaper, less resilient). For data you can regenerate.</li>
<li><b>S3 Glacier Instant Retrieval:</b> archive with millisecond retrieval.</li>
<li><b>S3 Glacier Flexible Retrieval:</b> archive with retrieval from minutes to 12 hours.</li>
<li><b>S3 Glacier Deep Archive:</b> the cheapest; retrieval in 12–48 hours. For data kept for years by law (e.g.: 7-year records).</li>
</ul>
<h4>Other storage types</h4>
<ul>
<li><b>Amazon EBS (Elastic Block Store):</b> <b>block</b> storage, the "hard drive" of an EC2 instance. Lives in <b>a single AZ</b>; persists even if you stop the instance. You can take <b>snapshots</b> (backups) stored in S3.</li>
<li><b>Instance Store:</b> physical disk on the host machine, very fast but <b>temporary</b>: wiped when you stop the instance.</li>
<li><b>Amazon EFS (Elastic File System):</b> shared <b>file</b> system for Linux; thousands of instances use it at once, across several AZs. Grows and shrinks on its own.</li>
<li><b>Amazon FSx:</b> specialized managed file systems (FSx for Windows File Server, FSx for Lustre for high-performance computing).</li>
<li><b>AWS Storage Gateway:</b> connects your on-premises servers to AWS storage (hybrid). E.g.: your local backups are stored in S3.</li>
<li><b>AWS Backup:</b> manages backups of many services in one place.</li>
</ul>
<p class="trap"><b>Typical trap:</b> objects/static files → <b>S3</b>; disk for a single instance → <b>EBS</b>; shared across many instances → <b>EFS</b>; cheap archive for years → <b>Glacier Deep Archive</b>; unknown access pattern → <b>Intelligent-Tiering</b>; very fast temporary data → <b>Instance Store</b>.</p>`,

"1-2":`<h4>Amazon VPC (Virtual Private Cloud)</h4>
<p>Your own <b>private, isolated network</b> inside AWS, where you launch your resources. You define the IP address range and split it into <b>subnets</b>. Each subnet lives in <b>one AZ</b>.</p>
<ul>
<li><b>Public subnet:</b> has a route to an <b>Internet Gateway</b>, so its resources can receive traffic from the internet (e.g.: web servers, load balancers).</li>
<li><b>Private subnet:</b> no direct access from the internet; that's where databases and internal servers go.</li>
<li><b>Internet Gateway:</b> the "door" between the VPC and the internet.</li>
<li><b>NAT Gateway:</b> lets resources in a private subnet <b>reach out</b> to the internet (e.g.: to download patches) without anyone from outside being able to get in.</li>
<li><b>VPC Peering:</b> connects two VPCs privately.</li>
<li><b>AWS Transit Gateway:</b> a hub to connect many VPCs and on-premises networks.</li>
</ul>
<h4>Security groups vs. NACLs (asked a lot)</h4>
<ul>
<li><b>Security group:</b> virtual firewall at the <b>instance</b> level. It's <b>stateful</b>: if you allow an incoming request, the response goes out automatically. It only has <b>allow</b> rules; by default it blocks all inbound traffic and allows all outbound.</li>
<li><b>Network ACL:</b> firewall at the <b>subnet</b> level. It's <b>stateless</b>: you must allow inbound and outbound separately. It has <b>allow and deny</b> rules; the default NACL allows everything.</li>
</ul>
<h4>DNS and content delivery</h4>
<ul>
<li><b>Amazon Route 53:</b> managed DNS service: translates domain names (example.com) into IP addresses. It also registers domains and does <b>health checks</b> and routing (by latency, geolocation, failover).</li>
<li><b>Amazon CloudFront:</b> content delivery network (CDN). Caches your content in <b>edge locations</b> close to users: lower latency and less load on your server. It integrates with Shield and WAF.</li>
<li><b>AWS Global Accelerator:</b> improves the performance of global apps by sending traffic over the AWS network instead of the public internet.</li>
</ul>
<h4>Connecting your office to AWS</h4>
<ul>
<li><b>AWS Site-to-Site VPN:</b> <b>encrypted connection over the internet</b> between your network and the VPC. Quick to set up and cheap, but depends on the internet.</li>
<li><b>AWS Client VPN:</b> for individual users to connect from their computers.</li>
<li><b>AWS Direct Connect:</b> <b>dedicated, private physical line</b> between your data center and AWS, without going over the internet. More bandwidth, consistent latency, more secure. Takes weeks to install and costs more.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "stateful, instance level" → <b>security group</b>; "can deny a specific IP, subnet level" → <b>NACL</b>; "private connection that doesn't go over the internet" → <b>Direct Connect</b>; "fast encrypted connection over the internet" → <b>VPN</b>; "DNS" → <b>Route 53</b>; "cache close to the user" → <b>CloudFront</b>.</p>`,

"1-3":`<h4>Relational vs. NoSQL</h4>
<p><b>Relational (SQL):</b> data in tables with rows and columns, relationships between tables and a fixed schema. For transactions (sales, inventory). <b>NoSQL:</b> flexible schema (key-value, documents, graphs), huge horizontal scale and very low latency.</p>
<h4>Relational databases</h4>
<ul>
<li><b>Amazon RDS:</b> <b>managed</b> relational databases with MySQL, PostgreSQL, MariaDB, Oracle, SQL Server and Db2 engines. AWS takes care of installing, patching, automatic backups and the hardware. You manage your data, users and tables. Key options: <b>Multi-AZ</b> (a standby copy in another AZ for high availability and automatic failover) and <b>read replicas</b> (to spread reads and improve performance).</li>
<li><b>Amazon Aurora:</b> the relational database built by AWS, compatible with MySQL and PostgreSQL. Up to 5 times faster than standard MySQL, keeps 6 copies of the data across 3 AZs. It has an <b>Aurora Serverless</b> version.</li>
</ul>
<p>If you want full control of the engine or the operating system, you can install the database yourself on EC2 (but then you manage all of it).</p>
<h4>NoSQL and other types</h4>
<ul>
<li><b>Amazon DynamoDB:</b> NoSQL key-value and document database, <b>serverless</b>, <b>single-digit millisecond</b> latency at any scale, replicated across 3 AZs. <b>DAX</b> adds an in-memory cache (microseconds). <b>Global Tables</b> replicates it across several regions.</li>
<li><b>Amazon ElastiCache:</b> in-memory cache with <b>Redis</b> or <b>Memcached</b>. Placed in front of a database to answer repeated reads in microseconds and reduce load.</li>
<li><b>Amazon MemoryDB:</b> durable, Redis-compatible in-memory database.</li>
<li><b>Amazon Redshift:</b> <b>data warehouse</b>: analytics and reports over petabytes of historical data (OLAP), not for transactions.</li>
<li><b>Amazon DocumentDB:</b> document database compatible with <b>MongoDB</b>.</li>
<li><b>Amazon Neptune:</b> <b>graph</b> database: complex relationships like social networks, recommendations, fraud detection.</li>
<li><b>Amazon Keyspaces:</b> compatible with Apache Cassandra.</li>
<li><b>Amazon Timestream:</b> time-series data (IoT sensors).</li>
<li><b>Amazon QLDB:</b> immutable, verifiable ledger (a change history that can't be altered).</li>
</ul>
<p class="trap"><b>Typical trap:</b> "managed relational" → <b>RDS</b>; "high-performance relational compatible with MySQL" → <b>Aurora</b>; "NoSQL, milliseconds, any scale, serverless" → <b>DynamoDB</b>; "analytics/data warehouse" → <b>Redshift</b>; "cache" → <b>ElastiCache</b>; "MongoDB" → <b>DocumentDB</b>; "graphs/social networks" → <b>Neptune</b>; "RDS high availability" → <b>Multi-AZ</b>; "improve reads on RDS" → <b>read replicas</b>.</p>`,

"1-4":`<h4>Analytics</h4>
<ul>
<li><b>Amazon Athena:</b> <b>SQL queries directly on files in S3</b>, serverless; you pay for the data scanned. Ideal for analyzing logs without loading anything into a database.</li>
<li><b>Amazon Kinesis:</b> collects and processes data <b>in real time</b> (streaming): clicks from a site, telemetry, logs. <b>Kinesis Data Firehose</b> (Amazon Data Firehose) delivers it to S3 or Redshift.</li>
<li><b>AWS Glue:</b> serverless <b>ETL</b> service: discovers, prepares and transforms data. Its <b>Data Catalog</b> describes where your data is and what it looks like.</li>
<li><b>Amazon EMR:</b> big data clusters with Hadoop and Spark.</li>
<li><b>Amazon QuickSight:</b> business intelligence (BI) <b>dashboards</b> and reports.</li>
<li><b>Amazon OpenSearch Service:</b> search and log analytics.</li>
<li><b>AWS Lake Formation:</b> builds a secure data lake on S3.</li>
<li><b>Amazon MSK:</b> managed Apache Kafka.</li>
</ul>
<h4>Machine learning and AI</h4>
<ul>
<li><b>Amazon SageMaker:</b> full platform to <b>build, train and deploy</b> your own machine learning models.</li>
<li><b>Amazon Bedrock:</b> access to generative AI models (foundation models) through an API.</li>
<li><b>Amazon Q:</b> generative AI assistant for businesses and developers.</li>
</ul>
<p>Ready-to-use AI services (no ML knowledge needed):</p>
<ul>
<li><b>Rekognition:</b> analyzes images and video (faces, objects, inappropriate content).</li>
<li><b>Comprehend:</b> natural language processing: sentiment, topics and entities in a text.</li>
<li><b>Lex:</b> builds voice and text <b>chatbots</b> (the technology behind Alexa).</li>
<li><b>Polly:</b> turns <b>text into speech</b>.</li>
<li><b>Transcribe:</b> turns <b>speech into text</b>.</li>
<li><b>Translate:</b> automatic language translation.</li>
<li><b>Textract:</b> extracts text and data from scanned documents and forms.</li>
<li><b>Kendra:</b> intelligent search across company documents.</li>
<li><b>Personalize:</b> personalized recommendations (like "you might also like").</li>
<li><b>Forecast:</b> time-series forecasting.</li>
</ul>
<h4>Application integration</h4>
<ul>
<li><b>Amazon SQS:</b> message <b>queue</b>. One component drops messages and another processes them at its own pace: this <b>decouples</b> the parts of an app (if one goes down, messages wait in the queue). "Pull" model.</li>
<li><b>Amazon SNS:</b> <b>publish/subscribe</b>: one message reaches many subscribers at once (email, SMS, Lambda, SQS). "Push" model.</li>
<li><b>Amazon EventBridge:</b> event bus that connects AWS services, your apps and SaaS; it also schedules tasks.</li>
<li><b>AWS Step Functions:</b> coordinates the steps of a workflow (e.g.: several Lambda functions in order).</li>
<li><b>Amazon MQ:</b> managed message broker (ActiveMQ, RabbitMQ) to migrate apps that already use them.</li>
<li><b>Amazon API Gateway:</b> creates and publishes APIs that can call Lambda or other services.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "SQL on S3" → <b>Athena</b>; "real time/streaming" → <b>Kinesis</b>; "dashboards" → <b>QuickSight</b>; "ETL" → <b>Glue</b>; "train your own models" → <b>SageMaker</b>; "decouple with a queue" → <b>SQS</b>; "notify many" → <b>SNS</b>; speech→text <b>Transcribe</b>, text→speech <b>Polly</b>.</p>`,

"1-5":`<h4>Monitoring and management</h4>
<ul>
<li><b>Amazon CloudWatch:</b> monitors <b>performance</b>: metrics (CPU, traffic), <b>alarms</b> (e.g.: notify or scale if CPU goes above 80 %), <b>logs</b> and dashboards. It can also create billing alarms.</li>
<li><b>AWS CloudTrail:</b> records <b>who did what, when and from where</b> (every API call). It's for auditing (you'll see it in security).</li>
<li><b>AWS CloudFormation:</b> <b>infrastructure as code</b>: you describe your resources in a JSON/YAML template and AWS creates them the same way every time, in any region or account. No extra cost (you pay for the resources created).</li>
<li><b>AWS CDK:</b> define infrastructure with programming languages (Python, TypeScript), which generates CloudFormation.</li>
<li><b>AWS Systems Manager:</b> manages many instances at once: applies patches, runs commands, gives access without SSH (<b>Session Manager</b>), stores configuration parameters (<b>Parameter Store</b>).</li>
<li><b>AWS Trusted Advisor:</b> reviews your account and gives <b>recommendations</b> in 5 categories: <b>cost optimization, performance, security, fault tolerance and service limits</b>. With Basic and Developer you only get the core checks; with Business or higher, all of them.</li>
<li><b>AWS Health Dashboard:</b> shows the status of AWS services and personalized notices of events that <b>affect your resources</b> (e.g.: scheduled maintenance).</li>
<li><b>AWS Compute Optimizer:</b> recommends the right size for your instances.</li>
<li><b>AWS Service Catalog:</b> catalog of approved products that employees can launch.</li>
<li><b>AWS License Manager:</b> manages software licenses.</li>
</ul>
<h4>Developer tools</h4>
<ul>
<li><b>CodeCommit</b> (Git repository), <b>CodeBuild</b> (builds and tests), <b>CodeDeploy</b> (deploys to EC2, Lambda or on-premises), <b>CodePipeline</b> (automates the whole CI/CD flow).</li>
<li><b>AWS X-Ray:</b> traces requests in distributed apps to find bottlenecks.</li>
<li><b>AWS CloudShell:</b> a pre-authenticated terminal in the browser.</li>
<li><b>AWS AppConfig:</b> deploys configuration changes safely.</li>
</ul>
<h4>Hands-on in the console</h4>
<p>Launch an EC2 t2/t3.micro instance with Amazon Linux, look at its metrics in CloudWatch and terminate it. Create an S3 bucket, upload a file, try versioning and delete everything. Seeing the services in the console really fixes the concepts.</p>
<p class="trap"><b>Typical trap:</b> "performance/metrics/alarms" → <b>CloudWatch</b>; "audit of actions" → <b>CloudTrail</b>; "repeatable templates" → <b>CloudFormation</b>; "cost and security recommendations" → <b>Trusted Advisor</b>; "AWS events that affect my resources" → <b>Health Dashboard</b>; "patches on many servers" → <b>Systems Manager</b>.</p>`,

"1-6":`<p>Do 40 questions mixing concepts (Domain 1) and services (Domain 3). When you finish:</p>
<ul>
<li>If you score below 70 %, review with the "If the question says… it's…" sheet in the Kit tab before moving on.</li>
<li>For each mistake, ask yourself: did I not know the service, or did I mix up two similar ones? If you mixed up two, check the table of commonly confused pairs.</li>
<li>Write everything in your error log.</li>
</ul>`,

"2-0":`<h4>Shared responsibility model (the most asked topic)</h4>
<p><b>AWS is responsible for security OF the cloud:</b> everything physical and the infrastructure that runs the services.</p>
<ul>
<li>Data centers: physical security, guards, access control, power, cooling.</li>
<li>Hardware, global network, regions, AZs and edge locations.</li>
<li>Virtualization software (hypervisor).</li>
<li>In managed services, also the operating system and engine patching (e.g.: RDS, Lambda, DynamoDB).</li>
<li>Securely destroying retired disks.</li>
</ul>
<p><b>The customer is responsible for security IN the cloud:</b> what you put there and configure.</p>
<ul>
<li>Your <b>data</b> and its <b>encryption</b> (deciding whether and how to encrypt).</li>
<li><b>Users, permissions and passwords</b> (IAM, MFA).</li>
<li>Operating system and patches <b>on EC2</b>, and the software you install.</li>
<li>Configuration of <b>security groups</b>, NACLs and the firewall.</li>
<li>Service configuration (e.g.: leaving an S3 bucket public is the customer's fault).</li>
</ul>
<p><b>Shared controls</b> (each in its own layer): patch management (AWS patches the infrastructure, you patch your systems), configuration management, and awareness and training (AWS trains its employees, you train yours).</p>
<p>Responsibility shifts with the type of service: on <b>EC2 (IaaS)</b> you do almost everything above the hardware; on <b>RDS</b> AWS patches the OS and the engine; on <b>Lambda or S3</b> AWS handles almost everything and you only handle your data, code and permissions.</p>
<h4>AWS IAM (Identity and Access Management)</h4>
<p>Controls <b>who</b> can get into your account (authentication) and <b>what</b> they can do (authorization). It's <b>global</b> and free.</p>
<ul>
<li><b>User:</b> a person or application, with permanent credentials (a password for the console, access keys for CLI/SDK).</li>
<li><b>Group:</b> a set of users that share permissions (e.g.: "Developers" group). Assign permissions to groups, not to each user. A group can't contain other groups.</li>
<li><b>Role:</b> an identity with <b>temporary</b> permissions that gets "assumed". Use it so that one <b>service</b> can access another (e.g.: an EC2 instance that reads from S3, with no keys stored on the server), for cross-account access or for federated users.</li>
<li><b>Policy:</b> a <b>JSON</b> document that defines permissions (allow or deny actions on resources). By default everything is denied; an explicit deny beats an allow.</li>
</ul>
<p>Best practices: <b>least privilege</b> (only the permissions needed), <b>MFA</b> for everyone, rotate access keys, use roles instead of stored keys, don't share credentials, review permissions with <b>IAM Access Analyzer</b> and the credential report.</p>
<ul>
<li><b>IAM Identity Center</b> (formerly AWS SSO): single sign-on for several AWS accounts and applications, connected to your corporate directory.</li>
<li><b>Amazon Cognito:</b> sign-in for the <b>users of your application</b> (web or mobile), including with Google or Facebook.</li>
<li><b>AWS Directory Service:</b> managed Microsoft Active Directory.</li>
</ul>
<p class="trap"><b>Typical trap:</b> physical security, hardware, hypervisor → <b>AWS</b>. Data, encryption, IAM, EC2 OS, security groups → <b>customer</b>. "An EC2 instance needs to access S3" → <b>IAM role</b>, never keys on the server. "Permissions for a team" → <b>group</b>. "Login for my app's customers" → <b>Cognito</b>.</p>`,

"2-1":`<h4>Network and application protection</h4>
<ul>
<li><b>AWS Shield:</b> protection against <b>DDoS</b> attacks. <b>Standard:</b> free and automatic for everyone. <b>Advanced:</b> paid, extended protection, 24/7 DDoS response team and <b>cost protection</b> (refunds the extra scaling charges during an attack).</li>
<li><b>AWS WAF:</b> web application firewall: filters malicious traffic at layer 7, such as <b>SQL injection</b> and <b>cross-site scripting (XSS)</b>, or blocks IPs and countries. Used with CloudFront, ALB and API Gateway.</li>
<li><b>AWS Firewall Manager:</b> manages WAF and Shield rules across many accounts.</li>
<li><b>AWS Network Firewall:</b> firewall for your VPC.</li>
</ul>
<h4>Threat and vulnerability detection</h4>
<ul>
<li><b>Amazon GuardDuty:</b> intelligently detects <b>threats</b> by analyzing logs (CloudTrail, VPC Flow Logs, DNS) with machine learning: suspicious access, cryptocurrency mining, compromised accounts.</li>
<li><b>Amazon Inspector:</b> scans for software <b>vulnerabilities</b> and network exposure in EC2 instances, container images and Lambda functions.</li>
<li><b>Amazon Macie:</b> uses ML to find <b>sensitive data</b> (personal data, card numbers) in S3.</li>
<li><b>Amazon Detective:</b> investigates the <b>root cause</b> of a security finding.</li>
<li><b>AWS Security Hub:</b> <b>central</b> dashboard that gathers findings from GuardDuty, Inspector, Macie and others, and checks best practices.</li>
</ul>
<h4>Encryption and secrets</h4>
<ul>
<li><b>AWS KMS (Key Management Service):</b> creates and manages <b>encryption keys</b>; integrates with almost every service to encrypt data at rest.</li>
<li><b>AWS CloudHSM:</b> dedicated hardware module for keys, when you need full control of the hardware.</li>
<li><b>AWS Secrets Manager:</b> stores <b>passwords</b>, API keys and database credentials, and <b>rotates them automatically</b>.</li>
<li><b>AWS Certificate Manager (ACM):</b> free SSL/TLS certificates for HTTPS (encryption in transit).</li>
</ul>
<h4>Auditing and compliance</h4>
<ul>
<li><b>AWS CloudTrail:</b> log of <b>all API activity</b>: who did what, when and from which IP. Key for auditing and investigating incidents.</li>
<li><b>AWS Config:</b> inventory and <b>configuration history</b> of your resources, and checks whether they comply with your rules (e.g.: "all buckets must be encrypted").</li>
<li><b>AWS Artifact:</b> portal to <b>download AWS compliance reports</b> (ISO, SOC, PCI DSS) and accept agreements (such as the healthcare BAA).</li>
<li><b>AWS Audit Manager:</b> collects continuous evidence to <b>audit your own usage</b> against standards.</li>
<li><b>AWS Organizations + SCPs:</b> service control policies limit what the organization's accounts can do (you'll see it in billing).</li>
<li><b>AWS Control Tower:</b> sets up and governs a secure multi-account environment following best practices.</li>
</ul>
<p>Other resources: the <b>AWS Abuse team</b> (report abusive use of AWS, e.g.: spam or attacks coming from an AWS IP), the <b>Knowledge Center</b>, and AWS's compliance page.</p>
<p class="trap"><b>Typical trap:</b> DDoS → <b>Shield</b>; SQL/XSS → <b>WAF</b>; threats/suspicious activity → <b>GuardDuty</b>; vulnerabilities on EC2 → <b>Inspector</b>; personal data in S3 → <b>Macie</b>; keys → <b>KMS</b>; rotated passwords → <b>Secrets Manager</b>; "who did it" → <b>CloudTrail</b>; "how it was configured" → <b>Config</b>; AWS reports → <b>Artifact</b>.</p>`,

"2-2":`<h4>AWS pricing principles</h4>
<ul>
<li><b>Pay as you go</b>, no long contracts or complex licensing.</li>
<li><b>Save when you reserve</b> (Reserved, Savings Plans).</li>
<li><b>Pay less as you use more</b>: volume discounts (e.g.: S3 charges less per GB at higher volume).</li>
<li><b>Inbound data transfer</b> to AWS is free; <b>outbound</b> to the internet is charged.</li>
<li>Services with no charge of their own: IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations (you pay for the resources they create).</li>
</ul>
<h4>Cost tools (asked a lot)</h4>
<ul>
<li><b>AWS Pricing Calculator:</b> <b>estimates</b> the cost of an architecture <b>before you build it</b>.</li>
<li><b>AWS Billing Dashboard:</b> summary of this month's bill, spending by service and forecast.</li>
<li><b>AWS Cost Explorer:</b> visualizes and analyzes your <b>past spending</b> with charts and filters, and <b>forecasts</b> spending for the coming months. Gives recommendations for Reserved Instances and Savings Plans.</li>
<li><b>AWS Budgets:</b> you set a cost or usage budget and it <b>alerts</b> you when actual or forecasted spending exceeds it. It can run automatic actions.</li>
<li><b>AWS Cost and Usage Report (CUR):</b> the <b>most detailed</b> report (hour by hour, per resource), to analyze with Athena or QuickSight.</li>
<li><b>Cost Anomaly Detection:</b> detects unusual spending with ML.</li>
<li><b>Cost allocation tags:</b> labels like "project=web" to know how much each team or project spends.</li>
</ul>
<h4>AWS Organizations</h4>
<p>Manages <b>multiple</b> AWS accounts centrally:</p>
<ul>
<li><b>Consolidated billing:</b> a single bill for all accounts and <b>combined volume discounts</b> (usage from all accounts adds up to reach lower prices). Free.</li>
<li><b>Organizational units (OUs):</b> group accounts (e.g.: Production, Development).</li>
<li><b>SCPs (service control policies):</b> limit the services and actions accounts can use, even for their administrators.</li>
</ul>
<h4>AWS Marketplace and partners</h4>
<ul>
<li><b>AWS Marketplace:</b> catalog for buying third-party software that runs on AWS.</li>
<li><b>AWS Partner Network (APN):</b> certified consulting and technology companies that help you.</li>
<li><b>AWS Professional Services:</b> team of AWS experts for large projects (e.g.: migrations).</li>
<li><b>AWS IQ:</b> connects you with certified independent experts for one-off jobs.</li>
</ul>
<h4>Support plans</h4>
<ul>
<li><b>Basic (free):</b> account and billing support, documentation, forums (re:Post), Trusted Advisor with core checks, Health Dashboard. No technical support.</li>
<li><b>Developer:</b> technical support by <b>email during business hours</b>; response in &lt;24 h (general) and &lt;12 h (impaired system). For testing and development.</li>
<li><b>Business:</b> <b>24/7</b> technical support by phone, chat and email; &lt;1 h if production is down; <b>all Trusted Advisor checks</b>; third-party software support.</li>
<li><b>Enterprise On-Ramp:</b> &lt;30 min if a business-critical system is down; a shared <b>pool of TAMs</b>; billing Concierge.</li>
<li><b>Enterprise:</b> &lt;<b>15 min</b> if a business-critical system is down; <b>designated TAM</b> (Technical Account Manager); <b>Concierge</b>; Infrastructure Event Management; architecture reviews.</li>
</ul>
<p>Note: AWS renamed the plans in 2025 (Business Support+, Enterprise, Unified Operations), but the exam questions still use the names above.</p>
<p class="trap"><b>Typical trap:</b> "before building" → <b>Pricing Calculator</b>; "analyze past spending" → <b>Cost Explorer</b>; "alert if I go over" → <b>Budgets</b>; "the most detailed" → <b>CUR</b>; "one bill and volume discount" → <b>consolidated billing</b>; "restrict services across several accounts" → <b>SCP</b>; "dedicated TAM" → <b>Enterprise</b>; "24/7, cheapest" → <b>Business</b>.</p>`,

"3-0":`<p>A set on security and billing only, which together make up <b>42 %</b> of the exam. Before you start, re-read the shared responsibility table and the pairs of similar services. When reviewing, check whether you missed a question because you didn't know the service or because you didn't read the question's keyword carefully.</p>`,
"3-1":`<p>Do 65 questions in 90 minutes, no breaks, like the real exam. Then review <b>every</b> question: the ones you missed and the ones you got right while doubting. Write the concept in your error log and review that topic's summary right here.</p>`,
"3-2":`<p>Take another full-length exam, different from the previous one. Compare the results by domain: if a topic keeps coming out poorly, that's the one you review during exam week.</p>`,
"4-0":`<p>The goal is to score <b>80 % or more</b> consistently on practice exams. That way the real exam, which requires about 70 %, leaves you a margin.</p>`,
"4-1":`<p>Don't study anything new: review your error log, the table of commonly confused pairs and the lists (pillars, perspectives, 7 Rs, support plans).</p>`,
"4-2":`<p>Do a light review of 30–45 minutes and go to bed early. If you're testing online, check your camera and system the day before and keep your desk clear.</p>`
  },

  svc: [
    ["Virtual servers with control of the operating system","Amazon EC2"],
    ["Run code with no servers, event-driven","AWS Lambda"],
    ["Deploy a web app without managing infrastructure","AWS Elastic Beanstalk"],
    ["Simple virtual server at a fixed monthly price","Amazon Lightsail"],
    ["Containers without managing servers","AWS Fargate (with ECS or EKS)"],
    ["Object storage, static files, backups","Amazon S3"],
    ["Long-term archive, very cheap","S3 Glacier (Deep Archive)"],
    ["Disk for an EC2 instance","Amazon EBS"],
    ["File system shared across instances","Amazon EFS"],
    ["Managed relational database","Amazon RDS (Aurora if they ask for high performance)"],
    ["NoSQL key-value, milliseconds at any scale","Amazon DynamoDB"],
    ["Data warehouse, analytics over lots of data","Amazon Redshift"],
    ["Query data in S3 with SQL, serverless","Amazon Athena"],
    ["In-memory cache","Amazon ElastiCache"],
    ["Private isolated network","Amazon VPC"],
    ["DNS, domain names","Amazon Route 53"],
    ["Deliver content with low latency worldwide (CDN)","Amazon CloudFront"],
    ["Private, dedicated connection from your office","AWS Direct Connect"],
    ["Move petabytes without the internet","AWS Snowball (Snow Family)"],
    ["Migrate databases","AWS DMS"],
    ["Create infrastructure from templates (infrastructure as code)","AWS CloudFormation"],
    ["Metrics, alarms and logs","Amazon CloudWatch"],
    ["Who did what in the account (API calls, auditing)","AWS CloudTrail"],
    ["Configuration history and rule compliance","AWS Config"],
    ["Cost, security and performance recommendations","AWS Trusted Advisor"],
    ["Decouple components with a queue","Amazon SQS"],
    ["Send notifications (email, SMS) to many","Amazon SNS"],
    ["DDoS protection","AWS Shield (Advanced: 24/7 support)"],
    ["Block SQL injection or XSS (web firewall)","AWS WAF"],
    ["Intelligent threat detection","Amazon GuardDuty"],
    ["Vulnerability scanning","Amazon Inspector"],
    ["Find personal or sensitive data in S3","Amazon Macie"],
    ["Manage encryption keys","AWS KMS"],
    ["Store and rotate passwords","AWS Secrets Manager"],
    ["Download AWS compliance reports (ISO, SOC, PCI)","AWS Artifact"],
    ["Manage several accounts, SCP policies, consolidated billing","AWS Organizations"],
    ["Estimate the cost before building","AWS Pricing Calculator"],
    ["Analyze past spending","AWS Cost Explorer"],
    ["Alerts when spending goes over a limit","AWS Budgets"],
    ["Most detailed cost report","AWS Cost and Usage Report"],
    ["Buy third-party software","AWS Marketplace"],
    ["Expert help to migrate","AWS Professional Services / AWS Partner Network"]
  ],

  pairs: [
    ["CloudTrail · CloudWatch · Config","Who did what (API) · metrics and logs · configuration history"],
    ["Security group · NACL","Instance, stateful, allow only · subnet, stateless, allows and denies"],
    ["Shield · WAF","DDoS · malicious web traffic (SQL, XSS)"],
    ["GuardDuty · Inspector · Macie","Threats in the account · vulnerabilities · sensitive data in S3"],
    ["Trusted Advisor · Cost Explorer · Budgets","Recommendations · past spending · alerts on future spending"],
    ["RDS · DynamoDB · Redshift","Relational · NoSQL · data warehouse"],
    ["Reserved · Savings Plans · Spot","Per-instance commitment · flexible spend commitment · interruptible spare capacity"],
    ["Artifact · Audit Manager","AWS compliance reports · auditing your own usage"]
  ],

  /* In English the glossary is an exam wording decoder: phrase → what it points to → why */
  gloss: [
    ["Least operational overhead","A managed or serverless service","AWS handles patching, scaling and backups"],
    ["Most cost-effective","The cheapest option that still meets the need","Spot if it can be interrupted; Reserved / Savings Plans if steady"],
    ["Highly available","Multiple Availability Zones","Keeps working if one data center fails"],
    ["Fault tolerant","Redundancy with no interruption","Multi-AZ databases, load balancers"],
    ["Scales automatically / elastic","Auto Scaling, serverless","Adds and removes resources with demand"],
    ["Decouple components","SQS, SNS, EventBridge","A queue or events sit between the parts"],
    ["Without managing servers","Lambda, Fargate, DynamoDB, S3","Serverless: AWS runs the infrastructure"],
    ["Pay only for what you use","Pay-as-you-go, variable expense","CapEx → OpEx"],
    ["Low latency for global users","CloudFront, edge locations","Caches content close to the user"],
    ["Who made this API call?","CloudTrail","Audit log of account activity"],
    ["Least privilege","IAM policies with only the needed permissions","Grant the minimum, not more"],
    ["Encrypt data at rest / in transit","KMS / TLS with ACM","Stored data vs. data moving over the network"],
    ["Single bill for several accounts","AWS Organizations, consolidated billing","Combined volume discounts"],
    ["Estimate cost before building","Pricing Calculator","Past spending is Cost Explorer"],
    ["Designated TAM","Enterprise support plan","On-Ramp only shares a pool of TAMs"]
  ],

  q: [
    ["According to the shared responsibility model, what is AWS's responsibility?",["Configuring security groups","Patching the OS of an EC2 instance","The physical security of the data centers","Encrypting the customer's data in S3"],2,"AWS protects the cloud (hardware and facilities). Patching, security groups and encryption are yours."],
    ["A company needs a NoSQL database with millisecond latency at any scale. Which service should it use?",["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon Aurora"],1,"DynamoDB is key-value NoSQL. RDS and Aurora are relational; Redshift is a data warehouse."],
    ["Which service records who made each API call in an account?",["Amazon CloudWatch","AWS Config","AWS CloudTrail","Amazon GuardDuty"],2,"CloudTrail records API activity. CloudWatch measures performance and Config tracks configuration."],
    ["A batch job can be interrupted and resumed with no problem. What is the most cost-effective purchase option?",["On-Demand","Reserved Instances","Spot Instances","Dedicated Hosts"],2,"Spot gives up to 90 % off and fits when the job tolerates interruptions."],
    ["Where does an auditor download AWS compliance reports (ISO, SOC)?",["AWS Artifact","AWS Audit Manager","AWS Trusted Advisor","AWS Config"],0,"Artifact provides AWS compliance reports. Audit Manager audits your own usage."],
    ["Which characteristic lets you automatically reduce resources when demand drops?",["High availability","Elasticity","Fault tolerance","Agility"],1,"Elasticity adjusts resources to demand, both up and down."],
    ["Which service protects a web application against SQL injection?",["AWS Shield","AWS WAF","Amazon Inspector","Amazon Macie"],1,"WAF filters malicious web traffic. Shield is for DDoS."],
    ["Which support plan includes a designated Technical Account Manager?",["Developer","Business","Enterprise On-Ramp","Enterprise"],3,"Enterprise has a designated TAM; On-Ramp shares a pool of TAMs."],
    ["A company wants to estimate the monthly cost of an architecture before building it. What does it use?",["AWS Cost Explorer","AWS Budgets","AWS Pricing Calculator","AWS Cost and Usage Report"],2,"Pricing Calculator estimates before you build; Cost Explorer analyzes past spending."],
    ["What is a good practice for the root user?",["Use it for daily tasks","Enable MFA and don't create access keys for it","Share its password with IT","Disable CloudTrail to save money"],1,"Protect root with MFA and no access keys; use IAM for day-to-day work."],
    ["What do multiple Availability Zones give an application?",["Lower cost","High availability","Automatic encryption","Lower global latency"],1,"Spreading across several AZs keeps the app running if one data center fails."],
    ["Which service delivers static content with low latency to users around the world?",["Amazon Route 53","AWS Direct Connect","Amazon CloudFront","Amazon VPC"],2,"CloudFront is AWS's CDN and uses edge locations."],
    ["Which Well-Architected pillar is about recovering from failures and meeting demand?",["Operational excellence","Reliability","Performance efficiency","Sustainability"],1,"Reliability: recover from failures and scale to meet demand."],
    ["A company wants an alert when its monthly spending goes over 500 USD. What does it use?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,"Budgets sends alerts when actual or forecasted spending exceeds a threshold."],
    ["Moving an application to EC2 without changing its code is the migration strategy called…",["Refactor","Replatform","Rehost","Repurchase"],2,"Rehost (lift and shift) moves the app as is."]
  ]
};
