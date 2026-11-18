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
    resRows: `<tr><td class="svc">Skill Builder: Cloud Practitioner Essentials</td><td>Official core course (the plan's 13 modules)</td><td>Free</td></tr>
        <tr><td class="svc">Official Practice Question Set</td><td>Official practice questions</td><td>Free</td></tr>
        <tr><td class="svc">AWS Cloud Quest: Cloud Practitioner</td><td>Guided hands-on practice in the console</td><td>Free</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=7HKot-brXFE" target="_blank" rel="noopener">freeCodeCamp: full 2026 course</a></td><td>13-hour video; the links for each topic jump to its minute</td><td>Free</td></tr>
        <tr><td class="svc"><a href="https://www.youtube.com/watch?v=O1EqUGkUVPE" target="_blank" rel="noopener">Vikingos de Cloud: CLF-C02 course</a></td><td>Full course in Spanish on YouTube</td><td>Free</td></tr>
        <tr><td class="svc">Tutorials Dojo</td><td>Full-length practice exams for the final stage</td><td>Low cost</td></tr>
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
    practiceLead: "Original questions in the style of each module's assessment in the AWS Cloud Practitioner Essentials course. Each round draws random questions from the bank; after answering you'll see why the right one is right and why the others aren't.",
    footer: `Sources: <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener">AWS</a> · <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener">AWS Training and Certification</a> · <a href="https://tutorialsdojo.com/aws-support-plans/" target="_blank" rel="noopener">Tutorials Dojo</a>. Data as of October 2026.`,

    docBase: "https://aws.amazon.com/",
    explain: "Show explanation", explainLinks: "Show explanation and links",
    videoNote: h => `Video · from ${h}`,
    officialPage: "Official AWS page",
    skillBuilderNote: "Free official course on AWS Skill Builder",

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
    qRight: "Correct.", qWrong: "Not quite.",
    mods: ["Introduction to the cloud","Compute in the cloud","Compute services","Global infrastructure","Networking","Storage","Databases","AI/ML and data analytics","Security","Monitoring, compliance and governance","Pricing and support","Migrating to AWS","Well-Architected solutions"],
    qFilterLbl: "Practice",
    qAllMods: n => `All modules (${n} questions)`,
    qModOpt: (i, name, n) => `Module ${i} · ${name} (${n})`,
    qModTag: (i, name) => `Module ${i} · ${name}`,
    qCheck: "Check answer",
    qPickHint: n => `Pick ${n} options and press Check answer.`,
    modPractice: i => `Practice module ${i} questions`,
    qRightIs: (n, list) => n > 1 ? `The correct answers are ${list}.` : `The correct answer is ${list}.`,
    qWhyOk: n => n > 1 ? "Why they're correct:" : "Why it's correct:",
    qYours: n => n > 1 ? "Your wrong answers:" : "Your answer:",
    qWhyNot: "Why not the others:",
    qTip: "Exam tip:",
    qRestart: "Restart with new questions",
    qAnd: "and",
    qSession: (n, bank) => `This round: ${n} random questions from a bank of ${bank}. Restart to get different ones.`
  },



  /* Text of each plan topic (key = module or practice item, see TOPIC_META in js/data.js) */
  topics: {
    "m1": "Module 1 · Introduction to the cloud: what it is, benefits, service and deployment models, shared responsibility",
    "acct": "Hands-on: Free Tier account, root MFA and billing alert",
    "m2": "Module 2 · Compute in the cloud: EC2, instance types and pricing, scaling, Elastic Load Balancing, messaging and queues",
    "m3": "Module 3 · Compute services: serverless, Lambda, containers (ECS, EKS, Fargate) and other services",
    "m4": "Module 4 · Global infrastructure: Regions, Availability Zones, edge locations and infrastructure as code",
    "m5": "Module 5 · Networking: VPC, subnets, security groups and NACLs, Route 53, CloudFront, VPN and Direct Connect",
    "m6": "Module 6 · Storage: EBS, instance store, S3 and its classes, EFS, FSx, Storage Gateway, disaster recovery",
    "m7": "Module 7 · Databases: RDS, Aurora, DynamoDB, ElastiCache, Redshift and other databases",
    "m8": "Module 8 · AI/ML and data analytics: SageMaker, AI services, generative AI (Bedrock, Q) and data pipelines",
    "m9": "Module 9 · Security: IAM, root user, Shield, WAF, KMS, GuardDuty, Inspector, Macie, Security Hub",
    "m10": "Module 10 · Monitoring, compliance and governance: CloudWatch, CloudTrail, Config, Artifact, Organizations, AWS Health, Trusted Advisor",
    "m11": "Module 11 · Pricing and support: pricing models, cost tools, support plans, Marketplace and partners",
    "m12": "Module 12 · Migrating to AWS: Cloud Adoption Framework, the 7 strategies, DMS and data transfer",
    "m13": "Module 13 · Well-Architected solutions: the 6 pillars and specialized services",
    "set1": "Official Practice Question Set in Skill Builder (official and free)",
    "x1": "Full-length exam #1, timed, plus error review",
    "x2": "Full-length exam #2 and error log",
    "xx": "Extra full-length exams (#3 onward, one every 2–3 days) with error review; goal: 80 % or more",
    "rev": "Final review: flashcards, commonly confused pairs, error log",
    "eve": "Day before: light review and a good night's sleep"
  },

  /* Explanation of each topic */
  info: {
"m1":`<h4>What is cloud computing?</h4>
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
<h4>Service models: how much do you manage?</h4>
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
<h4>Shared responsibility model (the most asked topic)</h4>
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
<p class="trap"><b>Typical trap:</b> "Reduce resources when demand drops" is <b>elasticity</b>. "Pay only for what you use" is <b>variable expense / pay-as-you-go</b>. Physical security and hardware → <b>AWS</b>; data, permissions and configuration → <b>customer</b>. "Part in its own data center and part in the cloud" → <b>hybrid</b>.</p>`,

"acct":`<h4>Creating the account</h4>
<p>Go to aws.amazon.com/free and sign up with an email, a card (for verification) and a phone number. The <b>free tier</b> has 3 types of offers:</p>
<ul>
<li><b>Always free:</b> they never expire (e.g.: 1 million Lambda requests per month).</li>
<li><b>12 months free:</b> from the day you create the account (e.g.: 750 hours per month of EC2 t2/t3.micro).</li>
<li><b>Free trials:</b> for a limited time when you activate a service.</li>
</ul>
<h4>Billing alert</h4>
<p>In <b>AWS Budgets</b>, create a cost budget (e.g.: 5 USD) with an email alert at 80 %. If you go over, it notifies you. You can also use the "Zero spend budget" template, which alerts on any charge.</p>
<h4>Hands-on in the console</h4>
<p>Launch an EC2 t2/t3.micro instance with Amazon Linux, look at its metrics in CloudWatch and terminate it. Create an S3 bucket, upload a file, try versioning and delete everything. Seeing the services in the console really fixes the concepts.</p>
<p class="trap"><b>Typical trap:</b> the first action after creating the account is to <b>enable MFA on root</b>. For day-to-day work, use IAM users or roles.</p>`,

"m2":`<h4>Amazon EC2 (Elastic Compute Cloud)</h4>
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
<h4>Ways to access AWS</h4>
<ul>
<li><b>Management Console:</b> web interface, ideal for learning and one-off tasks.</li>
<li><b>CLI (command line):</b> text commands, good for automating with scripts.</li>
<li><b>SDK:</b> libraries to use AWS from your code (Python, Java, JavaScript…).</li>
<li><b>Infrastructure as code:</b> templates with CloudFormation or AWS CDK.</li>
</ul>
<h4>Scaling and load balancing</h4>
<ul>
<li><b>Amazon EC2 Auto Scaling:</b> adds instances when load goes up and removes them when it goes down (elasticity). You define minimum, desired and maximum. It also replaces instances that fail.</li>
<li><b>Elastic Load Balancing (ELB):</b> spreads traffic across several instances and AZs, and stops sending traffic to the ones that fail. Types: <b>Application Load Balancer</b> (HTTP/HTTPS, layer 7), <b>Network Load Balancer</b> (TCP/UDP, ultra performance, layer 4), <b>Gateway Load Balancer</b> (for security appliances).</li>
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
<p class="trap"><b>Typical trap:</b> "Can be interrupted" → <b>Spot</b>. "Steady 24/7 for 1 or 3 years" → <b>Reserved</b> or <b>Savings Plans</b>. "Per-socket licenses" → <b>Dedicated Hosts</b>. "Add and remove instances with load" → <b>Auto Scaling</b>. "Spread traffic" → <b>ELB</b>. "Queue to decouple" → <b>SQS</b>; "notify many" → <b>SNS</b>.</p>`,

"m3":`<h4>Serverless: what it means</h4>
<p><b>Serverless</b> doesn't mean there are no servers; it means <b>you don't see or manage them</b>: AWS provisions, scales, patches and maintains the infrastructure. You only take care of your code or containers, and you pay for what actually runs.</p>
<ul>
<li><b>With EC2</b> you manage the server: you pick the operating system, patch it and decide when to scale.</li>
<li><b>With serverless</b> (Lambda, Fargate, DynamoDB, S3) there are no servers to manage, it scales on its own and you don't pay for idle capacity.</li>
</ul>
<p>Containers package your application with everything it needs so it runs the same anywhere. An <b>orchestrator</b> (ECS or EKS) decides where and how many containers to run; Fargate or EC2 provide the compute capacity.</p>
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
<p class="trap"><b>Typical trap:</b> "Run code with no servers, on events" → <b>Lambda</b> (max 15 min). "Containers without managing servers" → <b>Fargate</b>. "Kubernetes" → <b>EKS</b>. "Upload the code and AWS builds everything" → <b>Elastic Beanstalk</b>. "Simple server at a fixed price" → <b>Lightsail</b>.</p>`,

"m4":`<h4>Region</h4>
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
<h4>Infrastructure and automation</h4>
<ul>
<li><b>AWS CloudFormation:</b> you describe your infrastructure in a template (JSON/YAML) and AWS creates it the same way every time, in any region or account. It's the basis of <b>infrastructure as code</b>.</li>
<li><b>AWS CDK:</b> you define infrastructure with programming languages (Python, TypeScript) and it turns into CloudFormation.</li>
<li><b>AWS Elastic Beanstalk:</b> you upload the code and AWS builds the whole environment for you.</li>
<li><b>AWS Outposts</b> and <b>Local Zones</b> bring AWS infrastructure closer: to your data center or to a large city.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "High availability" → multiple <b>AZs</b>. "Disaster recovery for a whole region" → multiple <b>Regions</b>. "The law requires data to stay in the country" → choose the <b>Region</b> for compliance. "Low latency with cached content" → <b>edge locations / CloudFront</b>. "Repeatable infrastructure from templates" → <b>CloudFormation</b>.</p>`,

"m5":`<h4>Amazon VPC (Virtual Private Cloud)</h4>
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
<p class="trap"><b>Typical trap:</b> "Stateful, instance level" → <b>security group</b>. "Stateless, subnet level, can deny" → <b>NACL</b>. "Private connection that doesn't use the internet" → <b>Direct Connect</b>. "Encrypted over the internet" → <b>VPN</b>. "DNS" → <b>Route 53</b>. "Reach the internet from a private subnet" → <b>NAT Gateway</b>.</p>`,

"m6":`<h4>Amazon S3 (Simple Storage Service)</h4>
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
<h4>Data lifecycle and disaster recovery</h4>
<ul>
<li><b>EBS snapshots:</b> incremental backups of a volume, stored in S3. Use them to restore or to create volumes in another AZ or region.</li>
<li><b>Amazon Data Lifecycle Manager:</b> automates creating, retaining and deleting EBS snapshots.</li>
<li><b>S3 Lifecycle:</b> rules that move objects to cheaper classes or delete them after X days.</li>
<li><b>AWS Backup:</b> manages backups of many services from one place.</li>
<li><b>AWS Elastic Disaster Recovery:</b> continuously replicates servers (on-premises or in the cloud) to AWS and lets you recover them in minutes after a disaster.</li>
</ul>
<p class="trap"><b>Typical trap:</b> Objects/static files → <b>S3</b>. Disk for one instance → <b>EBS</b>. Shared across many Linux instances → <b>EFS</b>. Temporary and very fast → <b>instance store</b>. Cheap archive for years → <b>Glacier Deep Archive</b>. Unknown access pattern → <b>Intelligent-Tiering</b>. Hybrid → <b>Storage Gateway</b>.</p>`,

"m7":`<h4>Relational vs. NoSQL</h4>
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
<p class="trap"><b>Typical trap:</b> "Managed relational" → <b>RDS</b>. "High-performance relational compatible with MySQL/PostgreSQL" → <b>Aurora</b>. "NoSQL, milliseconds at any scale, serverless" → <b>DynamoDB</b>. "Data warehouse" → <b>Redshift</b>. "In-memory cache" → <b>ElastiCache</b>. "RDS high availability" → <b>Multi-AZ</b>.</p>`,

"m8":`<h4>Machine learning and AI</h4>
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
<h4>Generative AI on AWS</h4>
<p><b>Generative AI</b> creates new content (text, images, code) using <b>foundation models</b> trained on huge amounts of data.</p>
<ul>
<li><b>Amazon Bedrock:</b> access to foundation models from several companies through a single API, with no infrastructure to manage. You can customize them with your data.</li>
<li><b>Amazon Q:</b> generative AI assistant. <b>Q Business</b> answers questions using your company's data; <b>Q Developer</b> helps you write code and work with AWS.</li>
<li><b>Amazon SageMaker AI:</b> to build, train and deploy your own models (it also offers ready-made models to start from).</li>
</ul>
<p>Key difference: <b>AI services</b> (Rekognition, Comprehend…) = ready to use; <b>SageMaker</b> = you build your model; <b>Bedrock</b> = you use already-trained foundation models.</p>
<h4>Analytics</h4>
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
<h4>Data pipelines</h4>
<p>A pipeline moves data through stages. An example of each stage on AWS:</p>
<ul>
<li><b>Ingestion:</b> Kinesis (real time), Amazon Data Firehose, AWS DataSync.</li>
<li><b>Storage:</b> S3 as a data lake; Redshift as a data warehouse.</li>
<li><b>Processing (ETL):</b> AWS Glue, Amazon EMR.</li>
<li><b>Analysis and visualization:</b> Athena (SQL on S3), QuickSight (dashboards), OpenSearch.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "Train your own models" → <b>SageMaker</b>. "Foundation models through an API" → <b>Bedrock</b>. "AI assistant for the business" → <b>Amazon Q</b>. "SQL on S3" → <b>Athena</b>. "Real time" → <b>Kinesis</b>. "ETL" → <b>Glue</b>. "Dashboards" → <b>QuickSight</b>. Speech→text <b>Transcribe</b>; text→speech <b>Polly</b>.</p>`,

"m9":`<h4>AWS IAM (Identity and Access Management)</h4>
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
<h4>The root user</h4>
<p>It's the identity created with the sign-up email and has <b>full access</b> to the account, including billing and closing the account. Best practices the exam asks about:</p>
<ul>
<li>Enable <b>MFA</b> (multi-factor authentication) right away.</li>
<li><b>Don't create access keys</b> for root.</li>
<li>Don't use it day to day: create an administrator user in IAM or IAM Identity Center.</li>
<li>Use a strong password and don't share it.</li>
</ul>
<p>Tasks that <b>only</b> root can do: change account settings (email, root password), close the account, change the support plan, restore IAM permissions if you lost access.</p>
<h4>Network and application protection</h4>
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
<p class="trap"><b>Typical trap:</b> "An EC2 instance needs to access S3" → <b>IAM role</b>. "Permissions for a team" → <b>group</b>. DDoS → <b>Shield</b>. SQL/XSS → <b>WAF</b>. Threats → <b>GuardDuty</b>. Vulnerabilities → <b>Inspector</b>. Sensitive data in S3 → <b>Macie</b>. Keys → <b>KMS</b>. Rotated passwords → <b>Secrets Manager</b>.</p>`,

"m10":`<h4>Monitoring and management</h4>
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
<h4>AWS Organizations</h4>
<p>Manages <b>multiple</b> AWS accounts centrally:</p>
<ul>
<li><b>Consolidated billing:</b> a single bill for all accounts and <b>combined volume discounts</b> (usage from all accounts adds up to reach lower prices). Free.</li>
<li><b>Organizational units (OUs):</b> group accounts (e.g.: Production, Development).</li>
<li><b>SCPs (service control policies):</b> limit the services and actions accounts can use, even for their administrators.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "Metrics and alarms" → <b>CloudWatch</b>. "Who did what" → <b>CloudTrail</b>. "Configuration history and rules" → <b>Config</b>. "AWS compliance reports" → <b>Artifact</b>. "Multiple accounts and SCPs" → <b>Organizations</b>. "AWS events that affect my resources" → <b>AWS Health</b>. "Recommendations" → <b>Trusted Advisor</b>.</p>`,

"m11":`<h4>AWS pricing principles</h4>
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
<h4>Billing alert</h4>
<p>In <b>AWS Budgets</b>, create a cost budget (e.g.: 5 USD) with an email alert at 80 %. If you go over, it notifies you. You can also use the "Zero spend budget" template, which alerts on any charge.</p>
<h4>Support plans</h4>
<ul>
<li><b>Basic (free):</b> account and billing support, documentation, forums (re:Post), Trusted Advisor with core checks, Health Dashboard. No technical support.</li>
<li><b>Developer:</b> technical support by <b>email during business hours</b>; response in &lt;24 h (general) and &lt;12 h (impaired system). For testing and development.</li>
<li><b>Business:</b> <b>24/7</b> technical support by phone, chat and email; &lt;1 h if production is down; <b>all Trusted Advisor checks</b>; third-party software support.</li>
<li><b>Enterprise On-Ramp:</b> &lt;30 min if a business-critical system is down; a shared <b>pool of TAMs</b>; billing Concierge.</li>
<li><b>Enterprise:</b> &lt;<b>15 min</b> if a business-critical system is down; <b>designated TAM</b> (Technical Account Manager); <b>Concierge</b>; Infrastructure Event Management; architecture reviews.</li>
</ul>
<p>Note: AWS renamed the plans in 2025 (Business Support+, Enterprise, Unified Operations), but the exam questions still use the names above.</p>
<h4>AWS Marketplace and partners</h4>
<ul>
<li><b>AWS Marketplace:</b> catalog for buying third-party software that runs on AWS.</li>
<li><b>AWS Partner Network (APN):</b> certified consulting and technology companies that help you.</li>
<li><b>AWS Professional Services:</b> team of AWS experts for large projects (e.g.: migrations).</li>
<li><b>AWS IQ:</b> connects you with certified independent experts for one-off jobs.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "Before building" → <b>Pricing Calculator</b>. "Past spending" → <b>Cost Explorer</b>. "Alert if I go over" → <b>Budgets</b>. "The most detailed" → <b>CUR</b>. "One bill and volume discount" → <b>consolidated billing</b>. "Designated TAM" → <b>Enterprise</b>. "24/7, cheapest" → <b>Business</b>. "Third-party software" → <b>Marketplace</b>.</p>`,

"m12":`<h4>AWS Cloud Adoption Framework (CAF)</h4>
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
<h4>Transferring data to AWS</h4>
<ul>
<li><b>Online:</b> <b>AWS DataSync</b> (copies and syncs large volumes from your storage to S3, EFS or FSx), <b>AWS Transfer Family</b> (SFTP/FTPS/FTP straight into S3 or EFS), <b>Direct Connect</b> (dedicated connection) and <b>S3 Transfer Acceleration</b>.</li>
<li><b>Offline:</b> <b>AWS Snow Family</b>: physical devices AWS ships to you; you load them and send them back. Use it when there's a lot of data and the network is slow or expensive.</li>
</ul>
<p>Quick rule: if uploading the data over the internet would take weeks, the answer is <b>Snow Family</b>.</p>
<p class="trap"><b>Typical trap:</b> "Move without changes" → <b>rehost</b>. "Small tweaks" (e.g., moving to RDS) → <b>replatform</b>. "Switch to SaaS" → <b>repurchase</b>. "Redesign for the cloud" → <b>refactor</b>. "Petabytes with slow internet" → <b>Snow Family</b>. "Migrate a running database" → <b>DMS</b>. "Organizational transformation" → <b>CAF</b>.</p>`,

"m13":`<h4>AWS Well-Architected Framework: 6 pillars</h4>
<ul>
<li><b>Operational excellence:</b> run and monitor well, automate changes, make small and frequent changes, learn from mistakes. E.g.: infrastructure as code with CloudFormation.</li>
<li><b>Security:</b> protect data and systems: least privilege, encryption, traceability (CloudTrail), security at every layer.</li>
<li><b>Reliability:</b> recover from failures automatically and scale to meet demand. E.g.: multiple AZs, backups, Auto Scaling.</li>
<li><b>Performance efficiency:</b> use the right resources and adjust them as demand changes or new technologies appear. E.g.: choosing the right instance type, using serverless.</li>
<li><b>Cost optimization:</b> don't pay for what you don't use: pick the right pricing model, shut down idle resources, measure spending.</li>
<li><b>Sustainability:</b> minimize environmental impact: maximize resource utilization and reduce waste.</li>
</ul>
<p>Tool: <b>AWS Well-Architected Tool</b> reviews your architecture against these pillars for free.</p>
<h4>Specialized AWS services</h4>
<ul>
<li><b>AWS IoT Core:</b> connects and manages millions of Internet of Things devices (sensors, machines).</li>
<li><b>Amazon Connect:</b> cloud contact center (call center).</li>
<li><b>Amazon WorkSpaces:</b> cloud virtual desktops for your employees.</li>
<li><b>Amazon AppStream 2.0:</b> streams desktop applications to the browser.</li>
<li><b>AWS Amplify:</b> quickly builds and hosts full web and mobile apps.</li>
<li><b>Amazon SES:</b> sends email at scale.</li>
<li><b>AWS Ground Station:</b> controls satellites and processes their data without owning antennas.</li>
<li><b>Amazon Braket:</b> experiment with quantum computing.</li>
</ul>
<h4>Developer tools</h4>
<ul>
<li><b>CodeCommit</b> (Git repository), <b>CodeBuild</b> (builds and tests), <b>CodeDeploy</b> (deploys to EC2, Lambda or on-premises), <b>CodePipeline</b> (automates the whole CI/CD flow).</li>
<li><b>AWS X-Ray:</b> traces requests in distributed apps to find bottlenecks.</li>
<li><b>AWS CloudShell:</b> a pre-authenticated terminal in the browser.</li>
<li><b>AWS AppConfig:</b> deploys configuration changes safely.</li>
</ul>
<p class="trap"><b>Typical trap:</b> "Recover from failures" → <b>reliability</b>. "Use the right resources" → <b>performance efficiency</b>. "Automate and improve operations" → <b>operational excellence</b>. "Reduce environmental impact" → <b>sustainability</b>. "Review your architecture against the pillars" → <b>Well-Architected Tool</b>. Connected devices → <b>IoT Core</b>; call center → <b>Connect</b>.</p>`,

"set1":`<p>Use the <b>Official Practice Question Set</b> in Skill Builder (free). When you finish:</p>
<ul>
<li>Review <b>all</b> the questions, not just the ones you got wrong: also the ones you got right while doubting.</li>
<li>Write in an "error log" the concept each one tested (e.g.: "elasticity ≠ scalability").</li>
<li>If an explanation surprises you, go back to the matching module right here.</li>
</ul>
<p>That error log is what you'll review during exam week.</p>`,

"x1":`<p>Do 65 questions in 90 minutes, no breaks, like the real exam. Then review <b>every</b> question: the ones you missed and the ones you got right while doubting. Write the concept in your error log and review that topic's summary right here.</p>`,

"x2":`<p>Take another full-length exam, different from the previous one. Compare the results by domain: if a topic keeps coming out poorly, that's the one you review during exam week.</p>`,

"xx":`<p>The goal is to score <b>80 % or more</b> consistently on practice exams. That way the real exam, which requires about 70 %, leaves you a margin.</p>`,

"rev":`<p>Don't study anything new: review your error log, the table of commonly confused pairs and the lists (pillars, perspectives, 7 Rs, support plans).</p>`,

"eve":`<p>Do a light review of 30–45 minutes and go to bed early. If you're testing online, check your camera and system the day before and keep your desk clear.</p>`
  },

  /* Titles of each topic's links (same indexes as LINKS_RAW) */
  linkTitles: {
    "m1": {"v":["Cloud concepts","Benefits of the cloud"],"d":["What is cloud computing?","Types of cloud computing","Shared responsibility model","Skill Builder course: module 1"]},
    "acct": {"v":["Getting started"],"d":["AWS Free Tier"]},
    "m2": {"v":["Compute","EC2 pricing models","Application integration"],"d":["EC2 pricing","Skill Builder course: module 2"]},
    "m3": {"v":["Compute"],"d":["AWS Lambda","Skill Builder course: module 3"]},
    "m4": {"v":["Global infrastructure"],"d":["AWS global infrastructure","Skill Builder course: module 4"]},
    "m5": {"v":["Networking"],"d":["Amazon VPC","Skill Builder course: module 5"]},
    "m6": {"v":["Storage"],"d":["S3 storage classes","Skill Builder course: module 6"]},
    "m7": {"v":["Databases"],"d":["Databases on AWS","Skill Builder course: module 7"]},
    "m8": {"v":["ML, AI and big data"],"d":["Analytics on AWS","Amazon Bedrock","Skill Builder course: module 8"]},
    "m9": {"v":["Identity (IAM)","Security"],"d":["AWS IAM","Security on AWS","Skill Builder course: module 9"]},
    "m10": {"v":["Management tools","Logging","Governance"],"d":["Amazon CloudWatch","Skill Builder course: module 10"]},
    "m11": {"v":["Billing, pricing and support"],"d":["Cost management","Support plans","Skill Builder course: module 11"]},
    "m12": {"v":["TCO and migration"],"d":["Cloud Adoption Framework","Skill Builder course: module 12"]},
    "m13": {"v":["Well-Architected"],"d":["Well-Architected Framework","Skill Builder course: module 13"]},
    "set1": {"d":["AWS Skill Builder"]}
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

  /* Bank of original questions, 10 per module: [question, options, correct (index, or list when several), [why the correct one, reason per option ("" for correct ones), tip], module] */
  q: [
    ["A company wants to stop buying servers up front and pay only for the resources it consumes each month. Which cloud benefit does this describe?",["Benefit from massive economies of scale","Trade fixed expense for variable expense","Go global in minutes","Increase speed and agility"],1,["In the cloud you don't buy servers up front (capital expense, CapEx): you pay month by month only for what you consume (variable expense, OpEx). That's exactly what the question describes.",["Economies of scale explain why AWS can lower its prices (it buys at huge volume), not the shift from paying up front to paying for usage.","","Going global in minutes means deploying to other regions quickly; it has nothing to do with how you pay.","Speed and agility mean having resources ready in minutes to experiment, not the way you pay."],"\"Stop paying up front\" or \"pay only for what you consume\" = trade fixed expense for variable expense."],1],
    ["A company uses an email application in the browser and manages no servers, operating system or software. Which service model is it using?",["IaaS","PaaS","SaaS","On-premises"],2,["With SaaS you use a finished product, usually in the browser. The provider manages the servers, operating system, application and its updates; you just use it.",["With IaaS the provider gives you servers, networking and storage, but you install and maintain the operating system and software.","With PaaS the provider manages the platform, but you still build and deploy your own application.","","On-premises means everything runs on your own equipment and you manage it; it's the opposite of what the question describes."],"\"Just uses it, manages nothing technical\" = SaaS."],1],
    ["Under the shared responsibility model, which tasks are the customer's responsibility? (Choose TWO.)",["Maintaining the physical security of data centers","Configuring the security groups of its EC2 instances","Managing the hypervisor","Managing IAM users and permissions","Replacing failed disks in AWS servers"],[1,3],["The customer is responsible for security IN the cloud: what it configures and puts there. Its instances' security groups and its IAM users and permissions are customer configurations.",["Physical security of data centers (guards, access, cameras) is AWS's responsibility.","","The hypervisor is the virtualization layer running on AWS hardware; AWS manages it.","","Replacing disks in AWS hardware is part of the physical infrastructure, which AWS maintains."],"Physical infrastructure and virtualization belong to AWS; data, permissions and configuration belong to the customer."],1],
    ["A company keeps its legacy systems in its own data center and connects new applications that run on AWS. Which deployment model is it using?",["Cloud (all-in)","Hybrid","On-premises","SaaS"],1,["A hybrid deployment combines resources in your own data center with resources in the cloud, connected to each other. It's typical when legacy systems are hard to move.",["In the cloud (all-in) model the whole application runs in the cloud; here part of it stays in the company's data center.","","On-premises means having everything on your own equipment; here applications on AWS are also used.","SaaS is a service model (using a finished product), not a deployment model."],"\"Part in its data center and part on AWS, connected\" = hybrid."],1],
    ["An online store needs more servers on Black Friday and fewer the rest of the year, without paying for idle capacity. Which concept describes this?",["Elasticity","Fault tolerance","High availability","Economies of scale"],0,["Elasticity is the ability to automatically scale resources up and also down with demand, so you don't pay for idle capacity.",["","Fault tolerance is continuing to work without interruption when a component fails; it isn't about matching capacity to demand.","High availability is keeping the system available if a part fails (for example, with several AZs), not scaling resources up and down.","Economies of scale explain AWS's low prices; they don't describe how your resources adjust."],"\"Grow and shrink with demand\" = elasticity. If it only says \"grow\", it's usually scalability."],1],
    ["AWS can offer lower prices because it combines the usage of hundreds of thousands of customers and buys at huge volume. Which cloud benefit does this describe?",["Trade fixed expense for variable expense","Benefit from massive economies of scale","Stop guessing capacity","Go global in minutes"],1,["By adding up the usage of a huge number of customers, AWS gets lower unit costs and passes them on as lower prices. That's economies of scale.",["Trading fixed for variable expense is about how you pay (by usage instead of up front), not about why AWS is cheaper.","","Stop guessing capacity means matching resources to real demand; it doesn't explain low prices.","Going global in minutes means deploying to other regions quickly; it has nothing to do with price."],"\"Many customers\" + \"lower prices\" = economies of scale."],1],
    ["A team wants to try a new idea: it needs servers today, and if the idea doesn't work it will shut them down tomorrow at no extra cost. Which cloud benefit is it using?",["Increase speed and agility","Economies of scale","High availability","Trade variable expense for fixed expense"],0,["In the cloud, resources are ready in minutes and shut down whenever you want, so experimenting is fast and cheap. That's speed and agility.",["","Economies of scale explain AWS's low prices, not how fast you can try ideas.","High availability is keeping a system working if a part fails; it isn't about experimenting quickly.","It's backwards: the cloud trades fixed expense for variable expense, not the other way around."],"\"Try fast\", \"experiment\" or \"in minutes\" = speed and agility."],1],
    ["A startup doesn't know how many users it will have in its first month and doesn't want to buy too many servers or fall short. Which cloud benefit solves this?",["Go global in minutes","Stop guessing capacity","Economies of scale","Stop spending money running data centers"],1,["In the cloud you don't have to estimate up front how many servers you'll need: you adjust resources to real demand, up or down.",["Going global in minutes is reaching other countries quickly; it doesn't solve the problem of estimating capacity.","","Economies of scale explain AWS's low prices, not the problem of figuring out how many servers to buy.","Not spending on data centers means not paying for power, cooling or staff; it isn't about estimating capacity."],"\"Doesn't know how much capacity it will need\" = stop guessing capacity."],1],
    ["A development team only wants to take care of its code. The provider must manage the servers, the operating system and the platform the application runs on. Which service model is it looking for?",["IaaS","PaaS","SaaS","On-premises"],1,["With PaaS the provider manages the infrastructure, operating system and platform; the team only builds and deploys its application. Elastic Beanstalk is an example.",["With IaaS the team would have to manage the operating system and software, exactly what it wants to avoid.","","With SaaS you use a finished product; the team wouldn't deploy its own code.","On-premises means managing everything on your own equipment."],"\"I only take care of my code\" = PaaS. \"I just use it\" = SaaS."],1],
    ["In Amazon RDS, which tasks are AWS's responsibility? (Choose TWO.)",["Patching the database engine","Creating the tables and loading the data","Maintaining the hardware the database runs on","Defining which users can access the database","Deciding whether the data is encrypted"],[0,2],["RDS is a managed service: AWS takes care of the hardware and the operating system, and also patches the database engine. That's why these two tasks are AWS's.",["","Tables and data belong to the customer: AWS doesn't decide what you store.","","Defining who has access (users and permissions) is the customer's responsibility.","Whether to encrypt the data, and with which keys, is the customer's decision; AWS only provides the tools."],"In managed services AWS does more (patching, hardware), but data, access and encryption stay with the customer."],1],
    ["A company runs analytics jobs that can be interrupted and resumed with no problem. Which EC2 purchase option is the most cost-effective?",["On-Demand","Reserved Instances","Spot Instances","Dedicated Hosts"],2,["Spot Instances use spare AWS capacity at up to 90 % off On-Demand. In exchange, AWS can reclaim them with a 2-minute warning. Since these jobs can be interrupted and resumed, that downside doesn't matter, and Spot is the cheapest option.",["On-Demand isn't interrupted and needs no commitment, but you pay full price: it isn't the most cost-effective.","Reserved Instances give up to 72 % off, but require a 1- or 3-year commitment; they suit steady workloads that run all the time.","","Dedicated Hosts is a whole physical server just for you: the most expensive option, meant for licensing or compliance."],"\"Can be interrupted\" + \"most cost-effective\" = Spot."],2],
    ["A database runs on EC2 24 hours a day, all year, and the company doesn't plan to change it for 3 years. Which options reduce cost the most? (Choose TWO.)",["On-Demand","Spot Instances","Reserved Instances","Savings Plans","Dedicated Instances"],[2,3],["For a steady workload that runs 24/7 for years, Reserved Instances and Savings Plans give up to 72 % off in exchange for a 1- or 3-year commitment. Savings Plans also lets you change instance type or region.",["On-Demand has no commitment, but it's full price: for something that always runs, you'd overpay.","Spot is very cheap, but AWS can interrupt it; a database that must always be available can't depend on that.","","","Dedicated Instances run on hardware not shared with other customers; they're for isolation requirements, not for saving money."],"\"Steady, 24/7, 1 or 3 years\" = Reserved Instances or Savings Plans."],2],
    ["An application needs to add EC2 instances automatically when traffic goes up and remove them when it goes down. Which service does this?",["Elastic Load Balancing","Amazon EC2 Auto Scaling","Amazon CloudWatch","AWS Lambda"],1,["EC2 Auto Scaling adds instances when load goes up and removes them when it goes down, based on the minimums, maximums and policies you define. It also replaces instances that fail.",["Elastic Load Balancing spreads traffic across instances that already exist, but it doesn't create or remove instances.","","CloudWatch measures metrics and fires alarms (which Auto Scaling can use), but it doesn't add instances by itself.","Lambda runs code with no servers; it doesn't manage how many EC2 instances you have."],"\"Add and remove instances with demand\" = Auto Scaling. \"Spread traffic\" = ELB."],2],
    ["An order enters an application and must wait until another component can process it, even if that component is down for a while. Which service decouples the components?",["Amazon SNS","Amazon SQS","Elastic Load Balancing","Amazon Route 53"],1,["Amazon SQS is a message queue: the order is stored in the queue until the other component can process it, even if it's down for a while. That decouples the parts of the application.",["SNS pushes a message to many subscribers instantly; if the receiver is unavailable, it isn't a queue where the message waits to be processed.","","Elastic Load Balancing spreads traffic across healthy instances, but it doesn't store orders to process later.","Route 53 is the DNS service: it translates domain names, it doesn't store messages."],"\"Decouple\" or \"messages wait\" = SQS. \"Notify many at once\" = SNS."],2],
    ["A company needs instances with a lot of RAM for an in-memory database. Which EC2 instance family should it choose?",["Compute optimized","Memory optimized","General purpose","Storage optimized"],1,["Memory optimized instances are designed for workloads that process large data sets in memory, such as in-memory databases or real-time analytics.",["Compute optimized instances give a lot of CPU (gaming, modeling, batch processing), not a lot of RAM.","","General purpose instances balance CPU, memory and networking; they suit web servers, but aren't the best when you need a lot of RAM.","Storage optimized instances give a lot of fast local disk, not a lot of memory."],"Lots of RAM = memory optimized. Lots of CPU = compute. Lots of local disk = storage."],2],
    ["An application runs on several EC2 instances and needs to spread traffic across them and stop sending it to the ones that fail. Which service does it use?",["Amazon EC2 Auto Scaling","Elastic Load Balancing","Amazon SQS","Amazon CloudWatch"],1,["Elastic Load Balancing spreads traffic across several instances (and several AZs) and runs health checks to stop sending it to the ones that fail.",["Auto Scaling adds or removes instances based on load, but doesn't spread traffic across them.","","SQS is a message queue for decoupling components; it doesn't distribute web traffic across instances.","CloudWatch monitors metrics; it doesn't route traffic."],"\"Spread traffic\" = ELB. \"Add or remove instances\" = Auto Scaling."],2],
    ["When a customer places an order, the application must notify by email, by SMS and a Lambda function all at the same time. Which service does it use?",["Amazon SQS","Amazon SNS","Elastic Load Balancing","Amazon EventBridge Scheduler"],1,["Amazon SNS works as publish/subscribe: a single message reaches many subscribers at once, such as email, SMS, Lambda or SQS queues.",["SQS stores messages in a queue for one consumer to process; it doesn't send the same message to several destinations at once.","","ELB spreads traffic across instances; it doesn't send notifications.","EventBridge Scheduler schedules tasks at set times; it isn't the way to send a message to many subscribers."],"\"Notify many at once\" = SNS (push). \"Queue\" = SQS (pull)."],2],
    ["A team needs an EC2 instance for a few hours for a short, unpredictable test that can't be interrupted, and it doesn't want any commitment. Which purchase option does it use?",["Spot Instances","On-Demand","Reserved Instances","Savings Plans"],1,["On-Demand is paid per second or hour, with no commitment and no interruptions. It's ideal for short, unpredictable workloads or tests.",["Spot is cheaper, but AWS can interrupt it; the test can't be interrupted.","","Reserved Instances require a 1- or 3-year commitment; that makes no sense for a few hours.","Savings Plans also require a 1- or 3-year spend commitment."],"\"Short\", \"unpredictable\" and \"no commitment\" = On-Demand."],2],
    ["A company has software licenses charged per socket of the physical server and needs to control which server its instances run on. Which EC2 option does it choose?",["Dedicated Hosts","Spot Instances","On-Demand","Savings Plans"],0,["With Dedicated Hosts you get a whole physical server just for you, with visibility of its sockets and cores, which lets you use per-socket or per-core licenses.",["","Spot Instances run on shared hardware and can be interrupted; they don't give control of the physical server.","On-Demand runs on shared hardware; it doesn't give you visibility of the sockets.","Savings Plans is a discount model, not a type of dedicated hardware."],"\"Per-socket or per-core licenses\" or \"physical server\" = Dedicated Hosts."],2],
    ["Which are ways to create and manage AWS resources? (Choose TWO.)",["The AWS Management Console","The AWS Command Line Interface (AWS CLI)","Amazon Route 53","AWS Artifact","Amazon Macie"],[0,1],["You can manage AWS from the Console (web interface), the AWS CLI (text commands), the SDKs in your code, or with infrastructure as code (CloudFormation).",["","","Route 53 is a DNS service, not a way to manage resources.","Artifact is a compliance reports portal.","Macie is a service that looks for sensitive data in S3."],"Ways to access AWS: Console, CLI, SDKs and infrastructure as code."],2],
    ["A company wants to run code every time an image is uploaded to an S3 bucket, without managing servers. Which service should it use?",["Amazon EC2","AWS Lambda","Amazon Lightsail","AWS Batch"],1,["AWS Lambda runs your code in response to events, such as uploading a file to S3, without you provisioning or managing servers. You only pay for requests and execution time.",["With EC2 you'd have to keep a server running, waiting for uploads, and manage it; it doesn't meet \"without managing servers\".","","Lightsail is a simple fixed-price virtual server: it's still a server you manage.","AWS Batch runs large numbers of batch jobs; it isn't meant to react to each S3 event."],"\"Run code when something happens\" + \"no servers\" = Lambda."],3],
    ["A team wants to run containers without provisioning or managing EC2 servers. Which service meets this requirement?",["AWS Fargate","Amazon ECR","Amazon EC2","AWS Elastic Beanstalk"],0,["AWS Fargate is the serverless engine for containers: it runs ECS or EKS containers without you provisioning or managing EC2 instances.",["","Amazon ECR is the registry where you store container images; it doesn't run them.","With EC2 you'd have to manage the servers where the containers run, exactly what they want to avoid.","Elastic Beanstalk deploys applications by creating EC2 instances for you, but those instances still exist in your account."],"\"Containers without managing servers\" = Fargate."],3],
    ["A company already uses Kubernetes in its data center and wants a managed AWS service that uses the same technology. Which one does it choose?",["Amazon ECS","Amazon EKS","AWS Lambda","Amazon Lightsail"],1,["Amazon EKS is Kubernetes managed by AWS: the company can keep using the same Kubernetes tools and configurations it already knows.",["Amazon ECS is AWS's own container orchestrator; it isn't Kubernetes.","","Lambda runs serverless functions; it doesn't run Kubernetes clusters.","Lightsail offers simple virtual servers; it isn't a Kubernetes service."],"\"Kubernetes\" = EKS. AWS's own container orchestrator = ECS."],3],
    ["Which are characteristics of AWS Lambda? (Choose TWO.)",["You pay for the code's execution time","You have to patch the operating system","It scales automatically with requests","Each run can last several days","You have to choose an instance type"],[0,2],["With Lambda you pay for the number of requests and for the time your code runs (in milliseconds), and the service scales automatically with incoming requests.",["","With Lambda there's no operating system to patch: AWS manages all the infrastructure.","","Each Lambda run lasts at most 15 minutes; long processes use other options (EC2, Batch, Fargate).","With Lambda you don't choose an instance type; you only set the function's memory."],"Lambda: pay per run, scales on its own, 15 minutes max per run."],3],
    ["A developer wants to upload a web application's code and have AWS create the instances, load balancer and scaling automatically. Which service does the developer use?",["AWS CloudFormation","AWS Elastic Beanstalk","Amazon EKS","AWS Outposts"],1,["Elastic Beanstalk takes your code and builds the whole environment for you: EC2 instances, load balancer, Auto Scaling and monitoring. You still have access to those resources if you need them.",["CloudFormation also creates resources, but you have to write the template with all the infrastructure; uploading the code isn't enough.","","EKS runs containers with Kubernetes; it doesn't build a full environment from a web application's code.","Outposts brings AWS hardware into your own data center; it doesn't deploy applications."],"\"I upload the code and AWS builds everything\" = Elastic Beanstalk. \"I write a template\" = CloudFormation."],3],
    ["An entrepreneur wants to publish a small WordPress site with a fixed monthly price that's easy to set up. Which service is the best fit?",["Amazon EC2 with Auto Scaling","Amazon Lightsail","Amazon EKS","AWS Batch"],1,["Amazon Lightsail offers simple virtual servers with a fixed monthly price and ready-made templates (like WordPress). It's ideal for small sites and beginners.",["EC2 with Auto Scaling is powerful, but more complex to set up and has no fixed monthly price.","","EKS runs containers with Kubernetes; it's far too complex for a small WordPress site.","Batch runs batch jobs; it doesn't host websites."],"\"Simple\" + \"fixed monthly price\" = Lightsail."],3],
    ["A team needs a place in AWS to store and version its Docker container images. Which service does it use?",["Amazon ECS","Amazon ECR","AWS Fargate","Amazon S3 Glacier"],1,["Amazon ECR (Elastic Container Registry) is the managed registry where you store, version and share your container images.",["ECS runs and orchestrates containers, but images are stored in a registry like ECR.","","Fargate runs containers with no servers; it isn't an image registry.","S3 Glacier is low-cost archive storage; it isn't a container registry."],"\"Store container images\" = ECR."],3],
    ["A company must run thousands of batch processing jobs every night and wants AWS to manage the compute capacity they need. Which service does it use?",["AWS Batch","Amazon Lightsail","Amazon SNS","Elastic Load Balancing"],0,["AWS Batch schedules and runs large numbers of batch jobs, and automatically provisions the compute capacity they need.",["","Lightsail offers simple fixed-price servers; it doesn't schedule thousands of jobs.","SNS sends notifications; it doesn't run jobs.","ELB spreads traffic; it doesn't run batch jobs."],"\"Thousands of batch jobs\" = AWS Batch."],3],
    ["What does it mean for a service to be serverless?",["That there are no physical servers","That AWS manages the servers and you don't provision or patch them","That it only works with containers","That it's always more expensive than EC2"],1,["Serverless doesn't mean there are no servers: it means you don't see or manage them. AWS provisions, scales and patches them, and you pay for what runs.",["The servers exist; AWS just manages them.","","There are serverless container services (Fargate), but also functions (Lambda), databases (DynamoDB) and more.","It isn't necessarily more expensive: since you don't pay for idle capacity, it's often cheaper."],"Serverless = you don't manage servers and you don't pay for idle capacity."],3],
    ["Which compute services are serverless? (Choose TWO.)",["AWS Lambda","Amazon EC2","AWS Fargate","Amazon Lightsail","Amazon EC2 Dedicated Hosts"],[0,2],["Lambda runs functions and Fargate runs containers, and in both cases AWS manages all the infrastructure: you don't provision or patch servers.",["","With EC2 you manage your virtual servers: you choose the operating system and patch it.","","Lightsail is a simple virtual server, but it's still a server you manage.","Dedicated Hosts is a whole physical server; it's the opposite of serverless."],"Serverless compute = Lambda and Fargate."],3],
    ["A company must keep its customers' data inside its country by law. Which factor matters most when choosing the AWS Region?",["Price","Proximity to customers","Compliance with regulations and laws","Number of available services"],2,["When the law requires data to stay in a country, that compliance requirement outweighs the rest: you can only choose Regions inside that country.",["Price matters, but it can't override a legal obligation.","Proximity lowers latency, but if the nearby Region is outside the country you wouldn't comply with the law.","","The number of available services is a factor, but never above a legal obligation."],"If the question mentions laws or data sovereignty, the deciding factor is compliance."],4],
    ["What is an Availability Zone (AZ)?",["A customer data center connected to AWS","One or more isolated data centers within a Region","A point of presence for caching content","A Region with no internet connection"],1,["An Availability Zone is one or more independent data centers within a Region, with their own power, networking and cooling, connected to the other AZs by low-latency links.",["A customer data center connected to AWS is part of a hybrid architecture, not an AZ.","","A point of presence for caching content is an edge location, not an AZ.","Regions and their AZs are connected to the internet; that definition doesn't exist."],"Region = geographic area; AZ = isolated data centers within the Region; edge location = cache point."],4],
    ["An application must keep working even if an entire data center fails. What is the best practice?",["Use a bigger instance","Deploy across multiple Availability Zones","Use a single AZ with daily backups","Use edge locations"],1,["Deploying the application across several AZs means that if a whole data center fails, the other AZs keep serving. That's high availability, and it's the best practice AWS recommends.",["A bigger instance is still in one place: if that data center fails, the application goes down anyway.","","With a single AZ, if that zone fails the application stops until backups are restored; that's recovery, not high availability.","Edge locations cache content close to users; they don't run your main application."],"\"Keep working if a data center fails\" = multiple AZs."],4],
    ["A company wants to create the same infrastructure in several Regions in a repeatable way, using templates. Which service does it use?",["AWS CloudFormation","Amazon CloudWatch","AWS Config","AWS Systems Manager"],0,["CloudFormation is infrastructure as code: you describe resources in a template and AWS creates them the same way every time, in any Region or account.",["","CloudWatch monitors metrics and logs; it doesn't create infrastructure.","AWS Config records your resources' configuration and checks whether they meet rules, but it doesn't create them.","Systems Manager manages instances that already exist (patches, commands); it doesn't create repeatable infrastructure from templates."],"\"Templates\" or \"infrastructure as code\" = CloudFormation."],4],
    ["Which services use AWS edge locations? (Choose TWO.)",["Amazon CloudFront","Amazon RDS","Amazon Route 53","Amazon EBS","Amazon EFS"],[0,2],["CloudFront (content delivery network) and Route 53 (DNS) use edge locations to stay close to users and respond with low latency.",["","RDS is a regional service: your databases live in a Region's AZs, not in edge locations.","","An EBS volume lives in a single AZ; it doesn't use edge locations.","EFS is a regional file system; it doesn't use edge locations."],"Edge locations = CloudFront and Route 53 (also Global Accelerator)."],4],
    ["Which component of the AWS global infrastructure caches copies of content close to users to reduce latency?",["Region","Availability Zone","Edge location","AWS Outposts"],2,["Edge locations are points of presence in hundreds of cities. CloudFront uses them to cache copies of content close to users.",["A Region is a geographic area with several AZs where your resources run; it isn't a cache point close to each user.","An AZ is one or more data centers within a Region; it isn't a cache point.","","Outposts brings AWS hardware into your own data center; it isn't a caching network."],"\"Cache close to the user\" = edge location (CloudFront)."],4],
    ["A company needs to run AWS services inside its own data center because of low-latency requirements with its local systems. Which service does it use?",["AWS Local Zones","AWS Outposts","AWS Wavelength","AWS Direct Connect"],1,["AWS Outposts are racks of AWS hardware installed in your own data center, which run AWS services locally and are managed the same way as in the cloud.",["Local Zones bring AWS closer to a large city, but they're still in AWS facilities, not in your data center.","","Wavelength places AWS infrastructure inside mobile carriers' 5G networks.","Direct Connect is a dedicated connection to AWS; it doesn't run services in your data center."],"\"AWS services in my own data center\" = Outposts."],4],
    ["An application's users are mostly in Brazil and no law requires keeping the data in a specific country. Which Region should it choose for the lowest latency?",["The Region with the most available services","The Region closest to the users","Always the cheapest Region","Any, because latency doesn't depend on the Region"],1,["With no legal restrictions, proximity is what lowers latency the most: the closer the Region is to the users, the faster the application responds.",["Having more services doesn't lower latency; it only matters if you need a service the nearby Region doesn't have.","","Price is a factor, but the question asks for the lowest latency.","Latency does depend on the distance between the users and the Region."],"\"Lowest latency\" = the Region closest to the users (if the law allows it)."],4],
    ["What is the minimum number of Availability Zones in each AWS Region?",["1","2","3","10"],2,["Each AWS Region has at least 3 Availability Zones, isolated from each other, so you can design highly available applications.",["With a single AZ you couldn't have high availability within the Region.","AWS designs each Region with at least 3 AZs, not 2.","","Some Regions have more than 3, but the minimum isn't 10."],"Region = at least 3 AZs."],4],
    ["Which factors should you consider when choosing an AWS Region? (Choose TWO.)",["Compliance with data laws","Proximity to users","The number of IAM users in the account","The browser customers use","How many S3 buckets you already have"],[0,1],["The four factors for choosing a Region are compliance, proximity to users, available services and price. Of the options, compliance and proximity are two of them.",["","","IAM is global; the number of users doesn't depend on the Region.","The customer's browser has no bearing on which Region to choose.","Existing buckets aren't a criterion for choosing a Region."],"Choosing a Region: compliance, proximity, available services and price."],4],
    ["Which component lets resources in a public subnet receive traffic from the internet?",["NAT Gateway","Internet Gateway","Virtual Private Gateway","VPC Peering"],1,["The Internet Gateway connects the VPC to the internet. A subnet is public precisely because it has a route to an Internet Gateway, so its resources can receive internet traffic.",["A NAT Gateway only lets resources in private subnets reach out to the internet; it doesn't let internet traffic in.","","The Virtual Private Gateway is the AWS end of a VPN or Direct Connect to your network, not the connection to the internet.","VPC Peering connects two VPCs privately; it doesn't give internet access."],"In from the internet = Internet Gateway. Out from a private subnet = NAT Gateway."],5],
    ["An administrator needs to block a specific IP address for an entire subnet. What should the administrator use?",["Security group","Network ACL","IAM role","AWS Shield"],1,["Network ACLs work at the subnet level and support both allow and deny rules. That's why they're the way to block a specific IP for the whole subnet.",["Security groups work at the instance level and only have allow rules: you can't deny an IP with them.","","An IAM role grants permissions to use AWS services; it doesn't filter network traffic by IP address.","Shield protects against DDoS attacks; it isn't for writing a rule that blocks an IP in a subnet."],"\"Deny an IP\" or \"subnet level\" = NACL."],5],
    ["Which statement correctly describes a security group?",["It is stateless and works at the subnet level","It is stateful and works at the instance level","It only supports deny rules","By default it allows all inbound traffic"],1,["A security group is a virtual firewall at the instance level and it's stateful: if you allow an inbound request, the response goes out automatically. By default it blocks all inbound traffic and allows all outbound.",["Stateless and subnet level describes a Network ACL, not a security group.","","It's the other way around: security groups only support allow rules.","By default a security group blocks all inbound traffic until you add rules."],"Security group = instance, stateful, allow only. NACL = subnet, stateless, allow and deny."],5],
    ["A company needs a private, dedicated connection between its data center and AWS that doesn't go over the internet. Which service does it use?",["AWS Site-to-Site VPN","AWS Direct Connect","Amazon CloudFront","AWS Client VPN"],1,["Direct Connect is a dedicated, private physical line between your data center and AWS that doesn't go over the internet. It gives high bandwidth and consistent latency.",["Site-to-Site VPN is private because it's encrypted, but it travels over the internet: it doesn't meet \"doesn't go over the internet\".","","CloudFront delivers content to users from edge locations; it doesn't connect your data center to AWS.","Client VPN connects individual users from their computers, and it also travels over the internet."],"\"Dedicated\" or \"not over the internet\" = Direct Connect. \"Encrypted over the internet\" = VPN."],5],
    ["A company wants users around the world to download videos with low latency and its domain to resolve through managed DNS. Which services does it use? (Choose TWO.)",["Amazon CloudFront","Amazon Route 53","AWS Direct Connect","Amazon VPC","AWS Transit Gateway"],[0,1],["CloudFront caches copies of the content (like the videos) in edge locations close to users so they download it with low latency, and Route 53 is the managed DNS that resolves the domain.",["","","Direct Connect connects your data center to AWS; it isn't for delivering content to users worldwide.","A VPC is your private network in AWS; it doesn't speed up delivery to users or resolve DNS.","Transit Gateway connects many VPCs and on-premises networks to each other; it doesn't deliver content to users."],"Fast content for global users = CloudFront. DNS = Route 53."],5],
    ["Instances in a private subnet need to download patches from the internet, but nobody on the internet should be able to start connections to them. What does the company use?",["An Internet Gateway attached to the private subnet","NAT Gateway","VPC Peering","A Network ACL that allows everything"],1,["A NAT Gateway lets resources in a private subnet reach out to the internet (for example, to download patches) without anyone outside being able to start connections to them.",["If the private subnet had a route to the Internet Gateway, it would no longer be private and could receive internet traffic.","","VPC Peering connects two VPCs; it doesn't give internet access.","A NACL that allows everything doesn't provide internet access and also weakens security."],"\"Reach the internet from a private subnet\" = NAT Gateway."],5],
    ["Where should a database that must never be directly reachable from the internet be placed?",["In a public subnet","In a private subnet","In an edge location","Behind an Internet Gateway"],1,["A private subnet has no direct route to the internet, so the resources in it (such as databases and internal servers) can't be reached from outside.",["A public subnet has a route to the Internet Gateway, so its resources can be reached from the internet.","","Edge locations are for caching content; they don't host your databases.","The Internet Gateway is precisely the connection to the internet; you don't want the database there."],"Databases and internal servers = private subnet."],5],
    ["A company's employees work from home and need to connect securely to the VPC from their computers. Which service do they use?",["AWS Site-to-Site VPN","AWS Client VPN","AWS Direct Connect","AWS Transit Gateway"],1,["AWS Client VPN lets individual users connect securely (encrypted) to the VPC from their own devices, wherever they are.",["Site-to-Site VPN connects a whole network (for example, the office) to the VPC, not each employee from home.","","Direct Connect is a dedicated line between a data center and AWS; it's no use for employees at home.","Transit Gateway connects many VPCs and networks; it doesn't give individual users access."],"\"Individual users from their devices\" = Client VPN. \"Office network\" = Site-to-Site VPN."],5],
    ["A company has 30 VPCs and several on-premises networks, and wants to connect them all through a central hub instead of many point-to-point connections. Which service does it use?",["VPC Peering","AWS Transit Gateway","NAT Gateway","Internet Gateway"],1,["AWS Transit Gateway works as a central hub: each VPC and each on-premises network connects to it once, and they can all communicate.",["VPC Peering connects VPCs in pairs, one to one; with 30 VPCs you'd need hundreds of connections.","","A NAT Gateway gives a private subnet internet access; it doesn't connect VPCs to each other.","An Internet Gateway connects a VPC to the internet; it doesn't connect VPCs to each other."],"\"Many VPCs and networks through a hub\" = Transit Gateway."],5],
    ["Which are characteristics of a Network ACL? (Choose TWO.)",["It works at the subnet level","It is stateful","It supports allow and deny rules","It applies to a single instance","It's configured inside the instance's operating system"],[0,2],["A Network ACL is a stateless firewall at the subnet level that supports both allow and deny rules.",["","NACLs are stateless: you have to allow inbound and outbound separately. Security groups are the stateful ones.","","NACLs apply to the whole subnet; the instance-level firewall is the security group.","It's configured in the VPC, not inside the operating system."],"NACL = subnet, stateless, allow and deny."],5],
    ["An application needs a persistent disk for a single EC2 instance that is kept even if the instance stops. Which service does it use?",["Instance store","Amazon EBS","Amazon S3 Glacier","Amazon EFS"],1,["Amazon EBS is persistent block storage: it works like an EC2 instance's hard drive and the data is kept even if you stop the instance.",["The instance store is very fast but temporary: data is lost when the instance stops.","","S3 Glacier is archive storage for data that's rarely accessed; it isn't a disk for an instance.","EFS is a file system shared across many instances; for a single instance's disk, EBS is the right choice."],"Disk for one instance = EBS. Shared across many = EFS. Temporary = instance store."],6],
    ["A company keeps records it must retain for 7 years by law and almost never reads. Which storage class is the cheapest?",["S3 Standard","S3 Standard-IA","S3 Glacier Deep Archive","S3 Intelligent-Tiering"],2,["S3 Glacier Deep Archive is the cheapest S3 storage class, built for data that's kept for years and almost never accessed. Retrieval takes hours, which doesn't matter here.",["S3 Standard is for frequently accessed data; it's the most expensive class to store in.","Standard-IA is cheaper than Standard, but much more expensive than Deep Archive for keeping data for years.","","Intelligent-Tiering helps when you don't know how data will be accessed; here you know it's almost never read, so Deep Archive is cheaper."],"\"Years\" + \"almost never accessed\" + \"cheapest\" = Glacier Deep Archive."],6],
    ["Hundreds of Linux EC2 instances need to read and write to the same file system at the same time. Which service do they use?",["Amazon EBS","Amazon EFS","Instance store","Amazon S3 Glacier"],1,["Amazon EFS is a shared file system for Linux: thousands of instances can read and write to it at the same time, from several AZs.",["An EBS volume is normally attached to a single instance; it isn't meant to be shared by hundreds.","","The instance store is local to each instance and temporary; it isn't shared.","S3 Glacier is archive storage; it isn't mounted as a file system for simultaneous reads and writes."],"\"Many instances, same file system\" = EFS (FSx if it's Windows)."],6],
    ["A company doesn't know how often its data in S3 will be accessed and wants to optimize costs automatically. Which class does it choose?",["S3 One Zone-IA","S3 Intelligent-Tiering","S3 Glacier Flexible Retrieval","S3 Standard"],1,["S3 Intelligent-Tiering automatically moves each object to the cheapest access tier based on how it's used, without you having to know the access pattern in advance.",["One Zone-IA is cheaper, but stores data in a single AZ and charges for retrieval; it doesn't adjust to usage on its own.","","Glacier Flexible Retrieval is for archiving; if the data is used often, retrieval would be slow and expensive.","S3 Standard suits frequently used data, but doesn't lower costs if the data stops being used."],"\"Unknown or changing access pattern\" = Intelligent-Tiering."],6],
    ["A company wants its on-premises servers to store their backups in S3 transparently. Which hybrid service does it use?",["AWS Storage Gateway","Amazon FSx","AWS Snowball Edge","Amazon EFS"],0,["AWS Storage Gateway is a hybrid service: it connects on-premises servers to AWS storage, so that, for example, local backups are stored in S3 transparently.",["","Amazon FSx offers managed file systems in AWS; it isn't the bridge between your local servers and S3.","Snowball Edge is a physical device for one-off migrations of lots of data, not for ongoing backups.","EFS is a file system in AWS; it isn't meant as a bridge for local servers' backups."],"\"On-premises + AWS storage\" = Storage Gateway."],6],
    ["An application needs very fast storage for temporary data, such as caches that can be regenerated, and doesn't mind losing it when the instance stops. Which option fits best?",["Amazon EBS","Instance store","Amazon S3 Standard","Amazon EFS"],1,["The instance store is a physical disk on the host server: very fast and at no extra cost, but temporary. It's ideal for caches and temporary data that can be regenerated.",["EBS is persistent and is the choice when you don't want to lose data; here there's no need to pay for that.","","S3 is object storage over the network; it isn't the fastest local disk for temporary data.","EFS is a shared, persistent file system; it isn't the fastest option for an instance's temporary data."],"\"Temporary\" + \"very fast\" = instance store."],6],
    ["A company wants S3 objects to move to Glacier automatically 90 days after being created and to be deleted after 5 years. Which S3 feature does it use?",["S3 Versioning","S3 Lifecycle policies","Cross-Region Replication","Block Public Access"],1,["S3 Lifecycle policies define rules to move objects to cheaper classes or delete them automatically after a certain time.",["Versioning keeps previous versions of objects; it doesn't move them between classes.","","Replication copies objects to another Region; it doesn't move them to Glacier or delete them.","Block Public Access blocks public access; it doesn't manage the lifecycle."],"\"Move to another class or delete after X days\" = S3 Lifecycle."],6],
    ["A company wants protection from accidental deletions in S3 and to be able to recover previous versions of its files. What should it enable?",["S3 Versioning","S3 Intelligent-Tiering","S3 Transfer Acceleration","The S3 One Zone-IA class"],0,["With Versioning, S3 keeps the previous versions of each object. If someone deletes or overwrites a file, you can recover the previous version.",["","Intelligent-Tiering optimizes cost based on usage; it doesn't protect against deletions.","Transfer Acceleration speeds up uploads; it doesn't keep versions.","One Zone-IA is a cheaper class in a single AZ; it doesn't protect against accidental deletion."],"\"Recover previous versions\" or \"accidental deletion\" = Versioning."],6],
    ["A company wants to continuously replicate its on-premises servers to AWS so it can recover them in minutes if its data center suffers a disaster. Which service does it use?",["AWS Backup","AWS Elastic Disaster Recovery","AWS Storage Gateway","AWS Snowball Edge"],1,["AWS Elastic Disaster Recovery continuously replicates servers (on-premises or in the cloud) to AWS and lets you bring them up in minutes when a disaster happens.",["AWS Backup manages backups, but doesn't continuously replicate servers to bring them up in minutes.","","Storage Gateway connects local storage to AWS; it doesn't recover whole servers.","Snowball Edge transfers data offline; it isn't for continuous recovery."],"\"Replicate servers and recover them in minutes\" = Elastic Disaster Recovery."],6],
    ["Which statements about Amazon S3 are correct? (Choose TWO.)",["It stores objects in containers called buckets","It is the boot disk of an EC2 instance","It offers 99.999999999 % (11 nines) durability","The Standard class stores data in a single Availability Zone","It requires managing storage servers"],[0,2],["S3 is object storage in buckets, with 11 nines of durability because it automatically copies data across several AZs.",["","An instance's boot disk is an EBS volume (or instance store), not S3.","","S3 Standard stores data across several AZs; only One Zone-IA uses a single AZ.","S3 is managed: you don't manage storage servers."],"S3 = objects in buckets, 11 nines of durability, unlimited capacity."],6],
    ["A company wants a relational database where AWS takes care of patching, backups and hardware. Which service does it use?",["Amazon RDS","Amazon DynamoDB","A database installed on EC2","Amazon Redshift"],0,["Amazon RDS is a managed relational database: AWS handles the hardware, installing and patching the engine, and automatic backups. You manage the data, users and tables.",["","DynamoDB is managed, but it's NoSQL, not relational.","If you install the database on EC2, you handle patches, backups and the operating system: the opposite of what's asked.","Redshift is a data warehouse for analytics, not an application's relational database."],"\"Relational + AWS handles operations\" = RDS (or Aurora if they ask for more performance)."],7],
    ["A gaming application needs to store millions of scores with millisecond latency at any scale, with no servers. Which service does it choose?",["Amazon Aurora","Amazon DynamoDB","Amazon RDS","Amazon Neptune"],1,["DynamoDB is a serverless key-value NoSQL database that keeps single-digit millisecond latency at any scale. It's ideal for millions of simple records like scores.",["Aurora is relational and high-performance, but it isn't serverless by default or meant to scale to millions of key-value writes like DynamoDB.","","RDS is relational and requires choosing an instance size; it isn't the serverless option at any scale.","Neptune is a graph database, for complex relationships, not for storing scores."],"\"NoSQL\" + \"milliseconds at any scale\" + \"serverless\" = DynamoDB."],7],
    ["A business team wants to analyze years of historical sales data with complex queries. Which service is designed for this?",["Amazon DynamoDB","Amazon ElastiCache","Amazon Redshift","Amazon RDS"],2,["Amazon Redshift is a data warehouse: it's built for analytics and complex queries over large volumes of historical data.",["DynamoDB is fast for simple key-based operations, not for complex analytical queries over years of data.","ElastiCache is an in-memory cache for repeated reads, not for analyzing history.","","RDS is for day-to-day transactions; for large-scale analytics, Redshift is the right choice."],"\"Analytics\", \"historical data\" or \"data warehouse\" = Redshift."],7],
    ["An application reads the same data from the database over and over and the database is overloaded. Which service reduces that load?",["Amazon ElastiCache","Amazon S3","AWS DMS","Amazon Redshift"],0,["ElastiCache keeps the data that's read over and over in memory and answers in microseconds, so the database stops receiving those repeated reads.",["","S3 is object storage; it isn't placed in front of a database to speed up reads.","DMS is for migrating databases, not for reducing their load.","Redshift is for analytics; it doesn't work as a cache for a transactional database."],"\"Repeated reads\" or \"cache\" = ElastiCache."],7],
    ["Which are characteristics of Amazon Aurora? (Choose TWO.)",["It is compatible with MySQL and PostgreSQL","It is a graph database","It keeps several copies of the data across several Availability Zones","It only runs on-premises","It is an in-memory cache service"],[0,2],["Aurora is the relational database built by AWS: it's compatible with MySQL and PostgreSQL and keeps 6 copies of the data across 3 Availability Zones.",["","Aurora is relational; AWS's graph database is Neptune.","","Aurora is an AWS cloud service, not a product to install on-premises.","Aurora is a database; the in-memory cache service is ElastiCache."],"Aurora = relational, MySQL/PostgreSQL compatible, high availability with copies across 3 AZs."],7],
    ["A company needs its RDS database to stay available if the Availability Zone it runs in fails, with automatic failover. What does it configure?",["Read replicas","A Multi-AZ deployment","Amazon ElastiCache","Manual snapshots"],1,["With Multi-AZ, RDS keeps a standby copy in another AZ and, if the primary fails, it fails over to the copy automatically.",["Read replicas spread reads and improve performance; they aren't for automatic failover.","","ElastiCache is an in-memory cache; it doesn't make the database highly available.","Snapshots let you restore, but don't fail over automatically; there would be downtime."],"\"RDS high availability\" = Multi-AZ. \"Improve reads\" = read replicas."],7],
    ["A news application does far more reads than writes and its RDS database is slow because of read queries. What helps spread that load?",["Multi-AZ","Read replicas","A smaller instance","Moving the data to S3 Glacier"],1,["Read replicas are copies of the database that serve read-only queries, so the load is spread and performance improves.",["Multi-AZ gives high availability, but the standby copy doesn't serve reads.","","A smaller instance would make performance worse.","Glacier is for long-term archiving; it can't serve an application's queries."],"\"Lots of reads\" on RDS = read replicas."],7],
    ["A social network needs to store and query complex relationships between users, such as friends of friends. Which database is designed for this?",["Amazon Neptune","Amazon Redshift","Amazon ElastiCache","Amazon RDS"],0,["Amazon Neptune is a graph database, designed for complex relationships like social networks, recommendations or fraud detection.",["","Redshift is a data warehouse for analytics, not for traversing relationships between users.","ElastiCache is an in-memory cache, not a graph database.","RDS is relational; multi-level relationship queries are slow and complex with tables."],"\"Complex relationships\", \"social networks\" or \"graphs\" = Neptune."],7],
    ["A company uses MongoDB and wants a managed, compatible document database on AWS. Which service does it choose?",["Amazon DocumentDB","Amazon Aurora","Amazon Neptune","Amazon Keyspaces"],0,["Amazon DocumentDB is a managed document database compatible with MongoDB.",["","Aurora is relational, compatible with MySQL and PostgreSQL.","Neptune is a graph database.","Keyspaces is compatible with Apache Cassandra, not MongoDB."],"\"MongoDB\" = DocumentDB. \"Cassandra\" = Keyspaces."],7],
    ["Which are characteristics of Amazon DynamoDB? (Choose TWO.)",["It is serverless","It is a relational database with joins between tables","It offers single-digit millisecond latency at any scale","It requires choosing an engine such as MySQL or PostgreSQL","It is a data warehouse"],[0,2],["DynamoDB is a serverless key-value NoSQL database with single-digit millisecond latency at any scale.",["","DynamoDB is NoSQL: it isn't designed around related tables with joins.","","Choosing engines such as MySQL or PostgreSQL belongs to RDS or Aurora.","AWS's data warehouse is Redshift."],"DynamoDB = NoSQL, serverless, milliseconds, any scale."],7],
    ["A team of data scientists wants to build, train and deploy their own machine learning models. Which service do they use?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Polly","Amazon QuickSight"],1,["Amazon SageMaker AI is the full platform to build, train and deploy your own machine learning models.",["Rekognition is an already-trained AI service for analyzing images and video; it isn't for training your own models.","","Polly turns text into speech; it's a ready-to-use service.","QuickSight builds business intelligence dashboards; it doesn't train models."],"\"Build and train your own models\" = SageMaker."],8],
    ["A company wants to use foundation models from different providers through a single API to build a generative AI application. Which service does it use?",["Amazon Bedrock","Amazon Comprehend","AWS Glue","Amazon Kinesis"],0,["Amazon Bedrock gives access to foundation models from several companies through a single API, with no infrastructure to manage. It's the service for building generative AI applications.",["","Comprehend analyzes text (sentiment, entities); it doesn't offer foundation models from several providers.","Glue prepares and transforms data (ETL); it isn't a generative AI service.","Kinesis processes real-time data; it doesn't offer AI models."],"\"Foundation models\" or \"generative AI through an API\" = Bedrock."],8],
    ["A company wants to query log files stored in S3 with SQL without loading them into a database. Which service does it use?",["Amazon Redshift","Amazon Athena","Amazon EMR","Amazon RDS"],1,["Amazon Athena runs SQL queries directly on files stored in S3, without loading them into a database and with no servers. You pay for the data scanned.",["With Redshift you'd have to load the data into the warehouse first (or use extra features); it isn't the most direct way.","","EMR creates big data clusters (Hadoop, Spark) that you have to configure; it's more complex than a direct SQL query.","With RDS you'd have to load the logs into a database, exactly what they want to avoid."],"\"SQL on S3\" = Athena."],8],
    ["An application must turn call audio into text and then detect the sentiment of that text. Which services does it use? (Choose TWO.)",["Amazon Polly","Amazon Transcribe","Amazon Comprehend","Amazon Translate","Amazon Lex"],[1,2],["Amazon Transcribe turns speech into text and Amazon Comprehend analyzes that text to detect sentiment.",["Polly does the opposite: it turns text into speech.","","","Translate translates text between languages; it doesn't detect sentiment or transcribe audio.","Lex is for building voice or text chatbots; it isn't the tool for transcribing recorded calls."],"Speech→text = Transcribe. Text→speech = Polly. Sentiment = Comprehend."],8],
    ["A company needs to process its website's clicks in real time to spot trends instantly. Which service does it use for ingestion?",["AWS Glue","Amazon Kinesis","Amazon QuickSight","AWS Snowball"],1,["Amazon Kinesis collects and processes streaming data in real time, such as a website's clicks, so it can be analyzed instantly.",["Glue does ETL on data that's already stored; it isn't for real-time ingestion.","","QuickSight visualizes data in dashboards; it doesn't collect it.","Snowball is a physical device for offline data transfer; it's the opposite of real time."],"\"Real time\" or \"streaming\" = Kinesis."],8],
    ["Employees want to ask natural-language questions about the company's internal documents and data and get answers with generative AI. Which service do they use?",["Amazon Q Business","Amazon Polly","Amazon Textract","AWS Glue"],0,["Amazon Q Business is a generative AI assistant that answers questions and summarizes information using your company's data and documents.",["","Polly turns text into speech; it doesn't answer questions.","Textract extracts text from scanned documents, but doesn't converse or answer questions.","Glue prepares and transforms data; it isn't an assistant."],"\"AI assistant with the company's data\" = Amazon Q Business."],8],
    ["An application must detect faces and objects in the photos users upload, without building its own models. Which service does it use?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Comprehend","Amazon Transcribe"],0,["Amazon Rekognition is an already-trained AI service that analyzes images and video to detect faces, objects, text or inappropriate content.",["","SageMaker is for building your own models; the question asks not to build them.","Comprehend analyzes text, not images.","Transcribe turns speech into text; it doesn't analyze images."],"\"Images\" or \"video\" = Rekognition."],8],
    ["The sales team wants interactive dashboards with business data to share with management. Which service does it use?",["Amazon QuickSight","Amazon Athena","Amazon Kinesis","AWS Glue"],0,["Amazon QuickSight is AWS's business intelligence (BI) service for building interactive dashboards and reports.",["","Athena queries data with SQL, but doesn't build dashboards to share.","Kinesis collects real-time data; it doesn't visualize it.","Glue prepares and transforms data; it doesn't build dashboards."],"\"Dashboards\" or \"BI\" = QuickSight."],8],
    ["A company needs to discover its data in S3, build a catalog and transform it (ETL) without managing servers. Which service does it use?",["AWS Glue","Amazon Athena","Amazon Kinesis","Amazon Redshift"],0,["AWS Glue is a serverless ETL service: it discovers data, describes it in its Data Catalog, and prepares and transforms it.",["","Athena queries data with SQL (even using the Glue catalog), but it isn't the ETL tool.","Kinesis is for real-time data, not for cataloging and transforming stored data.","Redshift is a data warehouse; it stores and analyzes, but isn't the serverless ETL service."],"\"ETL\" or \"data catalog\" = Glue."],8],
    ["Which AWS AI services can be used directly, without building or training your own models? (Choose TWO.)",["Amazon Translate","Amazon EC2","Amazon Polly","Amazon EMR","Amazon Redshift"],[0,2],["Translate (translation) and Polly (text to speech) are already-trained AI services: you use them through an API without knowing machine learning.",["","EC2 is a virtual server service, not an AI service.","","EMR creates big data clusters; it isn't a ready-to-use AI service.","Redshift is a data warehouse, not an AI service."],"Ready-made AI services: Rekognition, Comprehend, Polly, Transcribe, Translate, Lex, Textract…"],8],
    ["An EC2 instance needs to read objects from an S3 bucket. What is the most secure way to give it access?",["Store a user's access keys on the instance","Attach an IAM role to the instance","Use the root user's credentials","Make the bucket public"],1,["An IAM role attached to the instance gives it temporary credentials that AWS rotates automatically, with no keys stored on the server. It's the most secure way for one service to access another.",["Storing access keys on the instance is risky: if someone gets into the server, they can steal them, and they don't rotate on their own.","","Root credentials give full access to the account; they should never be used for this.","Making the bucket public exposes the data to anyone on the internet."],"\"An AWS service needs to access another\" = IAM role."],9],
    ["Which are best practices for the root user? (Choose TWO.)",["Enable MFA","Use it for daily tasks","Don't create access keys for it","Share its password with the IT team","Add it to an IAM group"],[0,2],["The root user best practices are enabling MFA right away and not creating access keys for it. Root has full access to the account, so it must be protected and used as little as possible.",["","Root shouldn't be used for daily tasks: IAM users or roles with just the needed permissions are created for that.","","The root password must never be shared.","Root can't be added to an IAM group: it's a separate identity with full access."],"Root: MFA, no access keys, and only for the tasks that only root can do."],9],
    ["A company wants protection against DDoS attacks plus a 24/7 response team and cost protection. Which service does it subscribe to?",["AWS WAF","AWS Shield Advanced","Amazon GuardDuty","AWS Shield Standard"],1,["AWS Shield Advanced is the paid version of Shield: besides extended DDoS protection, it includes a 24/7 response team and cost protection (it refunds extra scaling charges during an attack).",["WAF filters malicious web traffic (SQL injection, XSS); it doesn't include a DDoS response team or cost protection.","","GuardDuty detects threats in the account by analyzing logs; it doesn't mitigate DDoS attacks.","Shield Standard is free and automatic, but doesn't include the 24/7 response team or cost protection."],"DDoS = Shield. If they ask for a response team or cost protection = Shield Advanced."],9],
    ["A company wants to detect suspicious activity in its account by analyzing CloudTrail, VPC and DNS logs. Which service does it use?",["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Artifact"],1,["Amazon GuardDuty continuously detects threats by analyzing CloudTrail, VPC Flow Logs and DNS logs with machine learning, for example suspicious access or compromised accounts.",["Inspector looks for software vulnerabilities in instances, containers and functions; it doesn't analyze account logs for suspicious activity.","","Macie looks for sensitive data in S3; it doesn't detect suspicious activity in the account.","Artifact is the portal for AWS compliance reports; it doesn't detect threats."],"\"Suspicious activity\" or \"threats\" = GuardDuty. \"Vulnerabilities\" = Inspector."],9],
    ["A company needs to create and manage the keys it uses to encrypt its data at rest. Which service does it use?",["AWS Secrets Manager","AWS KMS","AWS Certificate Manager","Amazon Macie"],1,["AWS KMS creates and manages encryption keys and integrates with almost every service to encrypt data at rest.",["Secrets Manager stores and rotates passwords and secrets; it doesn't manage the encryption keys for your data.","","Certificate Manager issues SSL/TLS certificates for encryption in transit (HTTPS), not keys for data at rest.","Macie finds sensitive data in S3; it doesn't encrypt data or manage keys."],"\"Encryption keys\" = KMS. \"Rotated passwords\" = Secrets Manager."],9],
    ["Ten developers need the same permissions in AWS. What is the recommended way to assign them?",["Attach the policy to each user separately","Create an IAM group with the policy and add the users","Share a single user among the ten","Give them the root credentials"],1,["The best practice is to assign permissions to groups, not to each user: you create an IAM group with the policy and add the developers. That's easier to manage.",["Attaching the policy one by one works, but it's hard to maintain and error-prone.","","Sharing a user makes it impossible to know who did each action and is a bad practice.","Root must never be shared or used for daily work."],"\"Permissions for a team\" = IAM group."],9],
    ["What does the principle of least privilege mean?",["Giving each user only the permissions needed for their job","Giving everyone administrator access to avoid getting blocked","Using the root user only once a month","Enabling MFA only for administrators"],0,["Least privilege means granting only the permissions needed to do the job, nothing more. That reduces the damage if credentials are compromised.",["","Giving everyone administrator access is the opposite of least privilege.","Using root as little as possible is a good practice, but it isn't the definition of least privilege.","MFA should be used by everyone; besides, MFA is authentication, not permissions."],"Least privilege = only the permissions needed."],9],
    ["A web application is receiving SQL injection and cross-site scripting (XSS) attacks. Which service filters that malicious traffic?",["AWS WAF","AWS Shield Standard","Amazon Inspector","AWS KMS"],0,["AWS WAF is a web application firewall: it filters malicious requests at layer 7, such as SQL injection or XSS, and can also block IPs or countries.",["","Shield protects against DDoS attacks, not against SQL injection or XSS.","Inspector looks for vulnerabilities in your resources; it doesn't filter incoming traffic.","KMS manages encryption keys; it doesn't filter traffic."],"\"SQL injection\" or \"XSS\" = WAF. \"DDoS\" = Shield."],9],
    ["A company wants to find out whether its S3 buckets contain personal data, such as credit card numbers. Which service does it use?",["Amazon Macie","Amazon GuardDuty","Amazon Inspector","AWS Config"],0,["Amazon Macie uses machine learning to find and classify sensitive data (personal data, card numbers) stored in S3.",["","GuardDuty detects suspicious activity in the account; it doesn't classify file contents.","Inspector looks for software vulnerabilities; it doesn't review data inside S3.","AWS Config reviews resource configuration, not the data they contain."],"\"Personal or sensitive data in S3\" = Macie."],9],
    ["A company needs to store its database passwords and rotate them automatically, and also get free SSL/TLS certificates for HTTPS. Which services does it use? (Choose TWO.)",["AWS Secrets Manager","AWS Certificate Manager (ACM)","AWS KMS","AWS Shield","Amazon Inspector"],[0,1],["Secrets Manager stores and automatically rotates passwords and credentials, and Certificate Manager issues and renews free SSL/TLS certificates for HTTPS.",["","","KMS manages encryption keys; it doesn't store passwords or issue certificates.","Shield protects against DDoS.","Inspector looks for vulnerabilities."],"Rotated passwords = Secrets Manager. HTTPS certificates = ACM. Keys = KMS."],9],
    ["An administrator wants an alert when an instance's CPU usage goes above 80 %. Which service does the administrator use?",["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS Trusted Advisor"],1,["Amazon CloudWatch measures metrics such as CPU usage and lets you create alarms that notify you (or trigger actions) when a metric crosses a threshold.",["CloudTrail records who made each API call; it doesn't measure CPU usage.","","AWS Config records resource configuration; it doesn't measure performance.","Trusted Advisor gives best-practice recommendations; it doesn't send real-time CPU alerts."],"\"Metrics\", \"alarms\" or \"performance\" = CloudWatch."],10],
    ["An auditor needs to know which user deleted an S3 bucket and from which IP address. Which service has this information?",["Amazon CloudWatch","AWS CloudTrail","AWS Health","AWS Budgets"],1,["AWS CloudTrail records every API call in the account: who made it, what was done, when and from which IP address. It's the auditing tool for these questions.",["CloudWatch measures performance metrics and logs; it doesn't record which user took each action.","","AWS Health reports AWS events that affect your resources; it doesn't record user actions.","Budgets alerts on spending; it doesn't record actions."],"\"Who did what\" = CloudTrail."],10],
    ["A company needs to download AWS compliance reports (such as SOC or ISO) for an audit. Where does it get them?",["AWS Audit Manager","AWS Artifact","AWS Config","AWS Organizations"],1,["AWS Artifact is the portal where you download AWS compliance reports (SOC, ISO, PCI) and accept agreements.",["Audit Manager collects evidence to audit your own use of AWS; it doesn't provide AWS's reports.","","AWS Config checks whether your resources meet your rules; it doesn't provide third-party reports about AWS.","Organizations manages multiple accounts; it doesn't offer compliance reports."],"\"AWS compliance reports\" = Artifact. \"Audit my own usage\" = Audit Manager."],10],
    ["A company with many AWS accounts wants to prevent some of them from using certain services, even their administrators. What does it use?",["IAM policies on each user","Service control policies (SCPs) in AWS Organizations","Security groups","AWS Trusted Advisor"],1,["Service control policies (SCPs) in AWS Organizations limit the services and actions the organization's accounts can use, even for their administrators.",["IAM policies control users and roles inside one account, but that account's administrator could change them; they don't limit the whole account.","","Security groups filter network traffic; they don't restrict service usage.","Trusted Advisor gives recommendations; it doesn't block service usage."],"\"Multiple accounts\" + \"restrict services\" = Organizations SCPs."],10],
    ["Which services help check whether resources follow best practices or rules? (Choose TWO.)",["AWS Config","AWS Trusted Advisor","Amazon Polly","AWS Snowball","Amazon Lightsail"],[0,1],["AWS Config evaluates your resources' configuration against the rules you define, and Trusted Advisor reviews the account and gives best-practice recommendations (cost, security, performance, fault tolerance and limits).",["","","Polly turns text into speech; it doesn't review resources.","Snowball transfers data offline; it doesn't review configurations.","Lightsail is a simple virtual server; it doesn't audit resources."],"Your own rules = Config. AWS recommendations = Trusted Advisor."],10],
    ["An administrator wants to know whether scheduled AWS maintenance will affect their instances next week. Where do they check?",["AWS Health Dashboard","AWS CloudTrail","AWS Budgets","AWS Artifact"],0,["The AWS Health Dashboard shows the status of AWS services and personalized notices about events that affect your resources, such as scheduled maintenance.",["","CloudTrail records actions in your account; it doesn't report AWS events.","Budgets alerts on spending.","Artifact provides compliance reports."],"\"AWS events that affect my resources\" = AWS Health."],10],
    ["An auditor needs to see how a security group was configured a month ago and when it changed. Which service keeps that history?",["AWS Config","Amazon CloudWatch","AWS Trusted Advisor","Amazon GuardDuty"],0,["AWS Config keeps the inventory and configuration history of your resources, so you can see how they looked at any point and when they changed.",["","CloudWatch keeps performance metrics and logs, not configuration history.","Trusted Advisor gives current recommendations, not change history.","GuardDuty detects threats; it doesn't store configuration."],"\"How it was configured\" = Config. \"Who changed it\" = CloudTrail."],10],
    ["A company wants automatic recommendations to remove idle resources, close open ports and stay below service limits. Which service does it use?",["AWS Trusted Advisor","AWS Artifact","Amazon CloudWatch","AWS Organizations"],0,["Trusted Advisor reviews your account and gives recommendations in five categories: cost, performance, security, fault tolerance and service limits.",["","Artifact provides compliance reports.","CloudWatch measures metrics and alarms, but doesn't give best-practice recommendations.","Organizations manages multiple accounts."],"\"Cost, security and limit recommendations\" = Trusted Advisor."],10],
    ["A company wants to quickly set up a secure multi-account environment with governance best practices already applied. Which service does it use?",["AWS Control Tower","AWS Artifact","Amazon CloudWatch","AWS Health"],0,["AWS Control Tower sets up and governs a multi-account environment following best practices, using Organizations and control rules (guardrails).",["","Artifact provides compliance reports; it doesn't set up accounts.","CloudWatch monitors; it doesn't set up a multi-account environment.","AWS Health reports AWS events."],"\"Multi-account environment with best practices\" = Control Tower."],10],
    ["What can Amazon CloudWatch do? (Choose TWO.)",["Create alarms on metrics","Record who made each API call","Collect and query application logs","Download compliance reports","Block DDoS attacks"],[0,2],["CloudWatch collects metrics, lets you create alarms on them, and also collects and queries logs (CloudWatch Logs), plus dashboards.",["","Recording who made each API call is CloudTrail's job.","","Compliance reports are downloaded from Artifact.","DDoS attacks are mitigated by Shield."],"CloudWatch = metrics, alarms, logs and dashboards."],10],
    ["A company wants to estimate the monthly cost of a new architecture before building it. Which tool does it use?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Cost and Usage Report"],1,["AWS Pricing Calculator estimates the cost of an architecture before you build it: you pick the services and their configuration and it gives you the estimated monthly cost.",["Cost Explorer analyzes spending you already had (and forecasts from it); with no resources created it has no data.","","Budgets alerts when spending goes over a limit; it doesn't estimate new architectures.","The Cost and Usage Report details actual spending; it's no use before building."],"\"Before building\" or \"estimate\" = Pricing Calculator."],11],
    ["A company wants an alert when the month's forecasted spending goes over 1,000 USD. Which service does it use?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,["AWS Budgets lets you set a budget and alerts you when actual or forecasted spending exceeds it.",["","Cost Explorer analyzes and forecasts spending, but alerts for going over a budget are set up in Budgets.","Pricing Calculator estimates costs before building; it doesn't send alerts.","Trusted Advisor gives recommendations to save money, but doesn't alert you when you go over an amount."],"\"Alert if I go over X\" = Budgets."],11],
    ["Which is the least expensive support plan that offers 24/7 phone technical support and access to all Trusted Advisor checks?",["Basic","Developer","Business","Enterprise"],2,["Business is the least expensive plan that includes 24/7 technical support by phone, chat and email, and access to all Trusted Advisor checks.",["Basic is free, but includes no technical support and only the core Trusted Advisor checks.","Developer has technical support by email during business hours, not 24/7 by phone.","","Enterprise includes it too, but it's much more expensive; the question asks for the least expensive."],"\"24/7, cheapest\" = Business. \"Designated TAM\" = Enterprise."],11],
    ["Which are benefits of consolidated billing in AWS Organizations? (Choose TWO.)",["A single bill for several accounts","Volume discounts by combining usage across all accounts","Free 24/7 technical support","Automatic data encryption","Free EC2 instances"],[0,1],["Consolidated billing in Organizations gives a single bill for all accounts and adds up their usage to reach volume discounts. It's also free.",["","","Consolidated billing doesn't include technical support; that depends on the support plan.","It doesn't encrypt data; encryption is configured in each service (for example, with KMS).","It doesn't give away instances; it just combines usage so you pay less by volume."],"\"One bill\" + \"combined volume discount\" = consolidated billing."],11],
    ["A company wants to buy and deploy third-party software that runs on AWS. Where does it look?",["AWS Marketplace","AWS Artifact","AWS Partner Network","AWS Professional Services"],0,["AWS Marketplace is the catalog where you find, buy and deploy third-party software that runs on AWS.",["","Artifact offers compliance reports; it doesn't sell software.","The AWS Partner Network groups consulting and technology companies that help you, but it isn't the catalog for buying software.","Professional Services is AWS's team of experts for projects; it doesn't sell third-party software."],"\"Buy third-party software\" = Marketplace."],11],
    ["A company wants to analyze how much it spent on each service over the last six months, with charts and filters. Which tool does it use?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Marketplace"],0,["AWS Cost Explorer visualizes and analyzes past spending with charts and filters (by service, account or tag) and also forecasts future spending.",["","Pricing Calculator estimates costs before building; it doesn't analyze past spending.","Budgets alerts when a budget is exceeded; it isn't for analyzing months of spending.","Marketplace is for buying third-party software."],"\"Analyze past spending\" = Cost Explorer."],11],
    ["The finance team needs the most detailed cost report possible, hour by hour and per resource, to analyze with Athena. What does it use?",["AWS Cost and Usage Report (CUR)","AWS Budgets","AWS Pricing Calculator","AWS Trusted Advisor"],0,["The Cost and Usage Report is the most detailed AWS cost and usage report (hourly and per resource) and can be analyzed with Athena or QuickSight.",["","Budgets alerts on spending; it doesn't produce a detailed report.","Pricing Calculator estimates future costs.","Trusted Advisor gives recommendations, not a detailed cost report."],"\"The most detailed\" = Cost and Usage Report."],11],
    ["A company only uses AWS for testing and development and wants the cheapest support plan that includes technical support by email. Which plan does it choose?",["Basic","Developer","Business","Enterprise On-Ramp"],1,["The Developer plan is the cheapest one with technical support: it answers by email during business hours and is meant for testing and development.",["Basic is free, but only includes account and billing support, with no technical support.","","Business offers 24/7 support, but it's more than needed for testing.","Enterprise On-Ramp is for business-critical workloads and is much more expensive."],"\"Testing and development\" + \"cheapest with technical support\" = Developer."],11],
    ["A company is looking for an AWS-certified consulting firm to help it design and carry out its migration. Where does it find one?",["AWS Marketplace","AWS Partner Network (APN)","AWS Artifact","AWS Budgets"],1,["The AWS Partner Network groups certified consulting and technology companies that help you design, migrate and run on AWS.",["Marketplace is for buying third-party software, not for hiring consultants.","","Artifact provides compliance reports.","Budgets alerts on spending."],"\"Certified consultant or partner\" = AWS Partner Network. \"Software\" = Marketplace."],11],
    ["Which services have no charge of their own (you only pay for the resources they create or use)? (Choose TWO.)",["AWS IAM","AWS CloudFormation","Amazon EC2","Amazon RDS","NAT Gateway"],[0,1],["IAM is free and CloudFormation doesn't charge by itself: you only pay for the resources it creates from its templates.",["","","EC2 is charged for the time instances run.","RDS is charged for the database instance and storage.","A NAT Gateway is charged per hour and per data processed."],"No charge of their own: IAM, VPC, CloudFormation, Auto Scaling, Elastic Beanstalk, Organizations."],11],
    ["A company wants to move an application to EC2 quickly, without changing its code. Which migration strategy does it use?",["Refactor","Replatform","Rehost","Repurchase"],2,["Rehost (lift and shift) moves the application as is to the cloud, usually to EC2, without changing the code. It's the fastest strategy.",["Refactor redesigns the application for the cloud; it's the slowest and changes a lot of code.","Replatform makes small tweaks (for example, moving the database to RDS); the question asks for no changes.","","Repurchase replaces the application with another product, usually SaaS."],"\"No changes\" or \"fast\" = rehost."],12],
    ["A company replaces its homegrown CRM system with a SaaS product. Which migration strategy is this?",["Retain","Repurchase","Relocate","Rehost"],1,["Repurchase (drop and shop) replaces the current application with a different product, usually SaaS, like swapping a homegrown CRM for Salesforce.",["Retain means leaving the application where it is for now, without migrating it.","","Relocate moves virtual servers (for example, VMware) to the cloud without changing them; it doesn't replace them with SaaS.","Rehost moves the same application to EC2 without changes; it doesn't replace it."],"\"Switch to a SaaS product\" = repurchase."],12],
    ["A company must move 500 TB of data to AWS and its internet connection is slow. What is the most practical option?",["AWS DataSync over the internet","AWS Snowball Edge","AWS Transfer Family","Amazon S3 Transfer Acceleration"],1,["With 500 TB and a slow connection, uploading the data over the internet would take weeks or months. AWS Snowball Edge is a physical device AWS ships to you; you load it and send it back: it's the fastest way.",["DataSync transfers over the network; with a slow connection, 500 TB would take too long.","","Transfer Family is for SFTP/FTP over the network; it has the same slow-connection problem.","S3 Transfer Acceleration speeds up uploads using edge locations, but still depends on your internet connection."],"\"Many TB or PB\" + \"slow internet\" = Snow Family."],12],
    ["A company wants to migrate its Oracle database to Amazon Aurora while the source database keeps running. Which services does it use? (Choose TWO.)",["AWS Database Migration Service (DMS)","AWS Schema Conversion Tool (SCT)","Amazon Redshift","AWS Snowcone","AWS Artifact"],[0,1],["AWS DMS migrates the data while the source database keeps running, and the AWS Schema Conversion Tool converts the schema when you change engines (from Oracle to Aurora).",["","","Redshift is a data warehouse; it isn't a database migration tool.","Snowcone is a small device for offline data transfer; it doesn't keep the database running or convert schemas.","Artifact provides compliance reports; it doesn't migrate data."],"Migrate a running database = DMS. Change engines = DMS + SCT."],12],
    ["Which AWS Cloud Adoption Framework perspectives focus on business and people? (Choose TWO.)",["Business","Platform","People","Operations","Security"],[0,2],["In the Cloud Adoption Framework, business, people and governance are the business perspectives. Platform, security and operations are the technical ones.",["","Platform is technical: it's about designing the architecture and infrastructure.","","Operations is technical: it's about making sure services run at the agreed level.","Security is technical: it's about protecting data and workloads."],"CAF: business, people and governance (business); platform, security and operations (technical)."],12],
    ["A company moves its application to AWS and, along the way, swaps its self-managed database for Amazon RDS, without redesigning the application. Which migration strategy is this?",["Rehost","Replatform","Refactor","Retire"],1,["Replatform (lift, tinker and shift) makes small tweaks to take advantage of the cloud, like moving the database to RDS, without redesigning the application.",["Rehost would move everything as is, without changing the database.","","Refactor redesigns the application (for example, into microservices); here there's no redesign.","Retire means shutting down applications nobody uses anymore."],"\"Small tweaks\" (for example, moving to RDS) = replatform."],12],
    ["During the migration assessment, a company finds applications that nobody uses anymore. Which strategy applies to them?",["Retain","Retire","Relocate","Repurchase"],1,["Retire means shutting down applications that are no longer used. That saves money and reduces what has to be migrated.",["Retain means leaving applications where they are for now, but they're still in use.","","Relocate moves virtual servers to the cloud without changing them; it makes no sense for applications nobody uses.","Repurchase replaces the application with another product, usually SaaS."],"\"Nobody uses it anymore\" = retire. \"It stays for now\" = retain."],12],
    ["A company decides to redesign its monolithic application into microservices and serverless functions to take full advantage of the cloud. Which strategy is this?",["Rehost","Replatform","Refactor","Relocate"],2,["Refactor (re-architect) redesigns the application for the cloud, for example with microservices or serverless. It's the most costly and slowest, but takes the most advantage of the cloud.",["Rehost moves the application without changes.","Replatform only makes small tweaks, not a redesign.","","Relocate moves virtual servers without changing the application."],"\"Redesign\", \"microservices\" or \"serverless\" = refactor."],12],
    ["A company needs to regularly copy and sync millions of files from its local storage (NAS) to Amazon S3 over the network. Which service does it use?",["AWS DataSync","AWS Snowball Edge","AWS DMS","Amazon CloudFront"],0,["AWS DataSync copies and syncs large volumes of files over the network from your local storage to S3, EFS or FSx, in an automated way.",["","Snowball Edge is for one-off offline transfers; here regular syncing over the network is needed.","DMS migrates databases, not files from a NAS.","CloudFront delivers content to users; it doesn't copy files into S3."],"\"Transfer or sync files over the network\" = DataSync. \"Offline\" = Snow Family."],12],
    ["Which AWS Cloud Adoption Framework perspectives are technical? (Choose TWO.)",["Platform","People","Security","Business","Governance"],[0,2],["The CAF's technical perspectives are platform, security and operations. The business ones are business, people and governance.",["","People is a business perspective: training, culture and organizational change.","","Business is a business perspective: making cloud investment support the goals.","Governance is a business perspective: risk, costs and programs."],"Technical CAF: platform, security and operations."],12],
    ["Which pillar of the Well-Architected Framework focuses on recovering from failures and scaling to meet demand?",["Operational excellence","Reliability","Cost optimization","Sustainability"],1,["The reliability pillar is about the workload recovering from failures automatically and scaling to meet demand.",["Operational excellence is about running and monitoring well and improving processes, not recovering from failures.","","Cost optimization is about not overpaying.","Sustainability is about reducing environmental impact."],"\"Recover from failures\" = reliability."],13],
    ["A company wants to minimize the environmental impact of its cloud workloads. Which Well-Architected pillar applies?",["Sustainability","Security","Performance efficiency","Reliability"],0,["The sustainability pillar aims to minimize environmental impact: making the most of resources and reducing waste.",["","Security is about protecting data and systems.","Performance efficiency is about using the right resources for demand, not environmental impact.","Reliability is about recovering from failures."],"\"Environmental impact\" = sustainability."],13],
    ["Which tool reviews an architecture against the six Well-Architected pillars for free?",["AWS Trusted Advisor","AWS Well-Architected Tool","AWS Config","Amazon Inspector"],1,["The AWS Well-Architected Tool reviews your workload for free against the six pillars' best practices and tells you what to improve.",["Trusted Advisor reviews your account (cost, security, limits), but doesn't do the review across the framework's six pillars.","","AWS Config evaluates configuration against your rules; it doesn't review the architecture by pillar.","Inspector looks for software vulnerabilities; it doesn't review architectures."],"\"Review the architecture against the pillars\" = Well-Architected Tool."],13],
    ["A factory wants to connect thousands of sensors and receive their data in AWS. Which service does it use?",["AWS IoT Core","Amazon Connect","Amazon WorkSpaces","AWS Ground Station"],0,["AWS IoT Core connects and manages millions of Internet of Things devices, such as sensors, and receives their data in AWS.",["","Amazon Connect is a contact center (call center); it doesn't connect sensors.","WorkSpaces provides virtual desktops for employees.","Ground Station is for communicating with satellites, not with factory sensors."],"\"Devices\", \"sensors\" or \"IoT\" = IoT Core."],13],
    ["Which are pillars of the AWS Well-Architected Framework? (Choose TWO.)",["Operational excellence","Horizontal scalability","Performance efficiency","High availability","Migration"],[0,2],["The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. Of the options, only operational excellence and performance efficiency are pillars.",["","Horizontal scalability is a technique that helps several pillars, but it isn't a pillar.","","High availability is a goal of the reliability pillar, but not a pillar itself.","Migration isn't a pillar; it's a process covered in the Cloud Adoption Framework."],"Memorize the 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability."],13],
    ["Which pillar of the Well-Architected Framework recommends shutting down idle resources and choosing the right pricing model?",["Cost optimization","Reliability","Operational excellence","Security"],0,["The cost optimization pillar is about not paying for what you don't use: shutting down idle resources, choosing the right pricing model and measuring spending.",["","Reliability is about recovering from failures and meeting demand.","Operational excellence is about running and improving processes.","Security is about protecting data and systems."],"\"Don't overpay\" = cost optimization."],13],
    ["Which pillar of the Well-Architected Framework includes making small, frequent changes, automating with infrastructure as code and learning from mistakes?",["Operational excellence","Sustainability","Performance efficiency","Cost optimization"],0,["The operational excellence pillar is about running and monitoring workloads well: automating, making small and frequent changes, and improving continuously.",["","Sustainability is about reducing environmental impact.","Performance efficiency is about using the right resources for demand.","Cost optimization is about not overpaying."],"\"Automate operations and improve processes\" = operational excellence."],13],
    ["A company wants a cloud contact center (call center) to serve its customers by phone and chat. Which service does it use?",["Amazon Connect","Amazon SNS","Amazon WorkSpaces","AWS IoT Core"],0,["Amazon Connect is a cloud contact center that lets you serve customers by voice and chat with no infrastructure of your own.",["","SNS sends notifications; it isn't a call center.","WorkSpaces provides virtual desktops.","IoT Core connects devices."],"\"Call center\" or \"contact center\" = Amazon Connect."],13],
    ["A company wants to give its employees cloud virtual desktops they can connect to from any device. Which service does it use?",["Amazon WorkSpaces","Amazon Lightsail","AWS Amplify","Amazon Connect"],0,["Amazon WorkSpaces provides cloud virtual desktops (Windows or Linux) that employees connect to from any device.",["","Lightsail offers simple virtual servers, not desktops for employees.","Amplify is for building and hosting web and mobile apps.","Connect is a contact center."],"\"Virtual desktops\" = WorkSpaces."],13],
    ["Which practices belong to the security pillar of the Well-Architected Framework? (Choose TWO.)",["Apply least privilege","Choose the right instance type","Encrypt data at rest and in transit","Shut down idle resources","Reduce energy consumption"],[0,2],["The security pillar includes protecting identities with least privilege, encrypting data, keeping traceability and applying security at every layer.",["","Choosing the right instance type belongs to performance efficiency.","","Shutting down idle resources belongs to cost optimization.","Reducing energy consumption belongs to sustainability."],"Security: least privilege, encryption, traceability and security at every layer."],13]
  ]
};
