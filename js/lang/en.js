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
    practiceLead: "Original questions in the style of each module's assessment in the AWS Cloud Practitioner Essentials course. Pick a module or practice them all.",
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
    modPractice: i => `Practice module ${i} questions`
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

  /* Original questions per module: [question, options, correct (index, or list when several), explanation, module] */
  q: [
    ["A company wants to stop buying servers up front and pay only for the resources it consumes each month. Which cloud benefit does this describe?",["Benefit from massive economies of scale","Trade fixed expense for variable expense","Go global in minutes","Increase speed and agility"],1,"Moving from buying equipment (CapEx) to paying for usage (OpEx) is trading fixed expense for variable expense.",1],
    ["A company uses an email application in the browser and manages no servers, operating system or software. Which service model is it using?",["IaaS","PaaS","SaaS","On-premises"],2,"With SaaS you use a finished product; the provider manages everything technical.",1],
    ["Under the shared responsibility model, which tasks are the customer's responsibility? (Choose TWO.)",["Maintaining the physical security of data centers","Configuring the security groups of its EC2 instances","Managing the hypervisor","Managing IAM users and permissions","Replacing failed disks in AWS servers"],[1,3],"The customer is responsible for security IN the cloud: network configuration, users and permissions. Physical infrastructure and the hypervisor belong to AWS.",1],
    ["A company keeps its legacy systems in its own data center and connects new applications that run on AWS. Which deployment model is it using?",["Cloud (all-in)","Hybrid","On-premises","SaaS"],1,"Combining your own resources with cloud resources, connected to each other, is a hybrid deployment.",1],
    ["An online store needs more servers on Black Friday and fewer the rest of the year, without paying for idle capacity. Which concept describes this?",["Elasticity","Fault tolerance","High availability","Economies of scale"],0,"Elasticity adjusts resources to demand, both up and down.",1],
    ["A company runs analytics jobs that can be interrupted and resumed with no problem. Which EC2 purchase option is the most cost-effective?",["On-Demand","Reserved Instances","Spot Instances","Dedicated Hosts"],2,"Spot gives up to 90 % off in exchange for AWS being able to interrupt the instance with a 2-minute warning.",2],
    ["A database runs on EC2 24 hours a day, all year, and the company doesn't plan to change it for 3 years. Which options reduce cost the most? (Choose TWO.)",["On-Demand","Spot Instances","Reserved Instances","Savings Plans","Dedicated Instances"],[2,3],"For steady, predictable workloads, Reserved Instances and Savings Plans give up to 72 % off in exchange for a 1- or 3-year commitment.",2],
    ["An application needs to add EC2 instances automatically when traffic goes up and remove them when it goes down. Which service does this?",["Elastic Load Balancing","Amazon EC2 Auto Scaling","Amazon CloudWatch","AWS Lambda"],1,"EC2 Auto Scaling adds and removes instances based on demand. ELB spreads traffic but doesn't create instances.",2],
    ["An order enters an application and must wait until another component can process it, even if that component is down for a while. Which service decouples the components?",["Amazon SNS","Amazon SQS","Elastic Load Balancing","Amazon Route 53"],1,"SQS is a queue: messages wait until the consumer processes them.",2],
    ["A company needs instances with a lot of RAM for an in-memory database. Which EC2 instance family should it choose?",["Compute optimized","Memory optimized","General purpose","Storage optimized"],1,"Memory optimized instances are built for workloads that process large data sets in memory.",2],
    ["A company wants to run code every time an image is uploaded to an S3 bucket, without managing servers. Which service should it use?",["Amazon EC2","AWS Lambda","Amazon Lightsail","AWS Batch"],1,"Lambda runs code in response to events, such as uploading a file to S3, with no servers to manage.",3],
    ["A team wants to run containers without provisioning or managing EC2 servers. Which service meets this requirement?",["AWS Fargate","Amazon ECR","Amazon EC2","AWS Elastic Beanstalk"],0,"Fargate is the serverless engine for ECS and EKS containers.",3],
    ["A company already uses Kubernetes in its data center and wants a managed AWS service that uses the same technology. Which one does it choose?",["Amazon ECS","Amazon EKS","AWS Lambda","Amazon Lightsail"],1,"EKS is managed Kubernetes. ECS is AWS's own orchestrator.",3],
    ["Which are characteristics of AWS Lambda? (Choose TWO.)",["You pay for the code's execution time","You have to patch the operating system","It scales automatically with requests","Each run can last several days","You have to choose an instance type"],[0,2],"With Lambda you pay per request and per millisecond of execution, and it scales on its own. Each run lasts 15 minutes at most.",3],
    ["A developer wants to upload a web application's code and have AWS create the instances, load balancer and scaling automatically. Which service does the developer use?",["AWS CloudFormation","AWS Elastic Beanstalk","Amazon EKS","AWS Outposts"],1,"Elastic Beanstalk builds the whole environment from your code, and you can still access the resources.",3],
    ["A company must keep its customers' data inside its country by law. Which factor matters most when choosing the AWS Region?",["Price","Proximity to customers","Compliance with regulations and laws","Number of available services"],2,"Legal compliance outweighs the other factors: if the law requires it, you choose that Region.",4],
    ["What is an Availability Zone (AZ)?",["A customer data center connected to AWS","One or more isolated data centers within a Region","A point of presence for caching content","A Region with no internet connection"],1,"An AZ is one or more data centers with their own power and networking, inside a Region.",4],
    ["An application must keep working even if an entire data center fails. What is the best practice?",["Use a bigger instance","Deploy across multiple Availability Zones","Use a single AZ with daily backups","Use edge locations"],1,"Spreading the application across several AZs gives high availability if a data center goes down.",4],
    ["A company wants to create the same infrastructure in several Regions in a repeatable way, using templates. Which service does it use?",["AWS CloudFormation","Amazon CloudWatch","AWS Config","AWS Systems Manager"],0,"CloudFormation is infrastructure as code: it creates resources from templates.",4],
    ["Which services use AWS edge locations? (Choose TWO.)",["Amazon CloudFront","Amazon RDS","Amazon Route 53","Amazon EBS","Amazon EFS"],[0,2],"CloudFront (CDN) and Route 53 (DNS) use the edge location network to stay close to users.",4],
    ["Which component lets resources in a public subnet receive traffic from the internet?",["NAT Gateway","Internet Gateway","Virtual Private Gateway","VPC Peering"],1,"The Internet Gateway connects the VPC to the internet. A NAT Gateway only lets private subnets reach out.",5],
    ["An administrator needs to block a specific IP address for an entire subnet. What should the administrator use?",["Security group","Network ACL","IAM role","AWS Shield"],1,"NACLs work at the subnet level and accept deny rules. Security groups only allow.",5],
    ["Which statement correctly describes a security group?",["It is stateless and works at the subnet level","It is stateful and works at the instance level","It only supports deny rules","By default it allows all inbound traffic"],1,"A security group is stateful, works at the instance level and blocks inbound traffic by default.",5],
    ["A company needs a private, dedicated connection between its data center and AWS that doesn't go over the internet. Which service does it use?",["AWS Site-to-Site VPN","AWS Direct Connect","Amazon CloudFront","AWS Client VPN"],1,"Direct Connect is a dedicated physical line. A VPN is also private, but it travels encrypted over the internet.",5],
    ["A company wants users around the world to download videos with low latency and its domain to resolve through managed DNS. Which services does it use? (Choose TWO.)",["Amazon CloudFront","Amazon Route 53","AWS Direct Connect","Amazon VPC","AWS Transit Gateway"],[0,1],"CloudFront caches content close to users and Route 53 is the managed DNS.",5],
    ["An application needs a persistent disk for a single EC2 instance that is kept even if the instance stops. Which service does it use?",["Instance store","Amazon EBS","Amazon S3 Glacier","Amazon EFS"],1,"EBS is persistent block storage for an instance. The instance store is wiped when the instance stops.",6],
    ["A company keeps records it must retain for 7 years by law and almost never reads. Which storage class is the cheapest?",["S3 Standard","S3 Standard-IA","S3 Glacier Deep Archive","S3 Intelligent-Tiering"],2,"Glacier Deep Archive is the cheapest class, built for long-term archiving with retrieval in hours.",6],
    ["Hundreds of Linux EC2 instances need to read and write to the same file system at the same time. Which service do they use?",["Amazon EBS","Amazon EFS","Instance store","Amazon S3 Glacier"],1,"EFS is a shared file system that many instances use at once.",6],
    ["A company doesn't know how often its data in S3 will be accessed and wants to optimize costs automatically. Which class does it choose?",["S3 One Zone-IA","S3 Intelligent-Tiering","S3 Glacier Flexible Retrieval","S3 Standard"],1,"Intelligent-Tiering moves objects between tiers based on usage, without you having to know the access pattern.",6],
    ["A company wants its on-premises servers to store their backups in S3 transparently. Which hybrid service does it use?",["AWS Storage Gateway","Amazon FSx","AWS Snowball Edge","Amazon EFS"],0,"Storage Gateway connects on-premises storage to storage in AWS.",6],
    ["A company wants a relational database where AWS takes care of patching, backups and hardware. Which service does it use?",["Amazon RDS","Amazon DynamoDB","A database installed on EC2","Amazon Redshift"],0,"RDS is a managed relational database: AWS handles the operational tasks.",7],
    ["A gaming application needs to store millions of scores with millisecond latency at any scale, with no servers. Which service does it choose?",["Amazon Aurora","Amazon DynamoDB","Amazon RDS","Amazon Neptune"],1,"DynamoDB is serverless key-value NoSQL with millisecond latency at any scale.",7],
    ["A business team wants to analyze years of historical sales data with complex queries. Which service is designed for this?",["Amazon DynamoDB","Amazon ElastiCache","Amazon Redshift","Amazon RDS"],2,"Redshift is a data warehouse for analytics over large volumes of data.",7],
    ["An application reads the same data from the database over and over and the database is overloaded. Which service reduces that load?",["Amazon ElastiCache","Amazon S3","AWS DMS","Amazon Redshift"],0,"ElastiCache keeps the most-read data in memory and answers in microseconds.",7],
    ["Which are characteristics of Amazon Aurora? (Choose TWO.)",["It is compatible with MySQL and PostgreSQL","It is a graph database","It keeps several copies of the data across several Availability Zones","It only runs on-premises","It is an in-memory cache service"],[0,2],"Aurora is relational, compatible with MySQL and PostgreSQL, and keeps 6 copies across 3 AZs.",7],
    ["A team of data scientists wants to build, train and deploy their own machine learning models. Which service do they use?",["Amazon Rekognition","Amazon SageMaker AI","Amazon Polly","Amazon QuickSight"],1,"SageMaker is the platform to build your own models. The others are ready-made services.",8],
    ["A company wants to use foundation models from different providers through a single API to build a generative AI application. Which service does it use?",["Amazon Bedrock","Amazon Comprehend","AWS Glue","Amazon Kinesis"],0,"Bedrock gives API access to foundation models, with no infrastructure to manage.",8],
    ["A company wants to query log files stored in S3 with SQL without loading them into a database. Which service does it use?",["Amazon Redshift","Amazon Athena","Amazon EMR","Amazon RDS"],1,"Athena runs SQL queries directly on S3 and is serverless.",8],
    ["An application must turn call audio into text and then detect the sentiment of that text. Which services does it use? (Choose TWO.)",["Amazon Polly","Amazon Transcribe","Amazon Comprehend","Amazon Translate","Amazon Lex"],[1,2],"Transcribe turns speech into text; Comprehend analyzes the text's sentiment.",8],
    ["A company needs to process its website's clicks in real time to spot trends instantly. Which service does it use for ingestion?",["AWS Glue","Amazon Kinesis","Amazon QuickSight","AWS Snowball"],1,"Kinesis collects and processes streaming data in real time.",8],
    ["An EC2 instance needs to read objects from an S3 bucket. What is the most secure way to give it access?",["Store a user's access keys on the instance","Attach an IAM role to the instance","Use the root user's credentials","Make the bucket public"],1,"An IAM role provides temporary credentials without storing keys on the server.",9],
    ["Which are best practices for the root user? (Choose TWO.)",["Enable MFA","Use it for daily tasks","Don't create access keys for it","Share its password with the IT team","Add it to an IAM group"],[0,2],"Protect root with MFA and no access keys; use IAM for day-to-day work.",9],
    ["A company wants protection against DDoS attacks plus a 24/7 response team and cost protection. Which service does it subscribe to?",["AWS WAF","AWS Shield Advanced","Amazon GuardDuty","AWS Shield Standard"],1,"Shield Advanced adds the DDoS response team and cost protection. Standard is free and basic.",9],
    ["A company wants to detect suspicious activity in its account by analyzing CloudTrail, VPC and DNS logs. Which service does it use?",["Amazon Inspector","Amazon GuardDuty","Amazon Macie","AWS Artifact"],1,"GuardDuty detects threats by analyzing logs with machine learning.",9],
    ["A company needs to create and manage the keys it uses to encrypt its data at rest. Which service does it use?",["AWS Secrets Manager","AWS KMS","AWS Certificate Manager","Amazon Macie"],1,"KMS creates and manages encryption keys. Secrets Manager stores passwords and secrets.",9],
    ["An administrator wants an alert when an instance's CPU usage goes above 80 %. Which service does the administrator use?",["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS Trusted Advisor"],1,"CloudWatch measures metrics and creates alarms.",10],
    ["An auditor needs to know which user deleted an S3 bucket and from which IP address. Which service has this information?",["Amazon CloudWatch","AWS CloudTrail","AWS Health","AWS Budgets"],1,"CloudTrail records every API call: who, what, when and from where.",10],
    ["A company needs to download AWS compliance reports (such as SOC or ISO) for an audit. Where does it get them?",["AWS Audit Manager","AWS Artifact","AWS Config","AWS Organizations"],1,"Artifact is the portal for AWS compliance reports.",10],
    ["A company with many AWS accounts wants to prevent some of them from using certain services, even their administrators. What does it use?",["IAM policies on each user","Service control policies (SCPs) in AWS Organizations","Security groups","AWS Trusted Advisor"],1,"Organizations SCPs limit what accounts can do, even their administrators.",10],
    ["Which services help check whether resources follow best practices or rules? (Choose TWO.)",["AWS Config","AWS Trusted Advisor","Amazon Polly","AWS Snowball","Amazon Lightsail"],[0,1],"Config evaluates configuration against your rules and Trusted Advisor gives best-practice recommendations.",10],
    ["A company wants to estimate the monthly cost of a new architecture before building it. Which tool does it use?",["AWS Cost Explorer","AWS Pricing Calculator","AWS Budgets","AWS Cost and Usage Report"],1,"Pricing Calculator estimates costs before you build. Cost Explorer analyzes past spending.",11],
    ["A company wants an alert when the month's forecasted spending goes over 1,000 USD. Which service does it use?",["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],0,"Budgets alerts when actual or forecasted spending exceeds the budget.",11],
    ["Which is the least expensive support plan that offers 24/7 phone technical support and access to all Trusted Advisor checks?",["Basic","Developer","Business","Enterprise"],2,"Business is the cheapest plan with 24/7 support and full Trusted Advisor.",11],
    ["Which are benefits of consolidated billing in AWS Organizations? (Choose TWO.)",["A single bill for several accounts","Volume discounts by combining usage across all accounts","Free 24/7 technical support","Automatic data encryption","Free EC2 instances"],[0,1],"Consolidated billing gives one bill and adds up usage across all accounts to reach volume discounts.",11],
    ["A company wants to buy and deploy third-party software that runs on AWS. Where does it look?",["AWS Marketplace","AWS Artifact","AWS Partner Network","AWS Professional Services"],0,"AWS Marketplace is the catalog of third-party software that runs on AWS.",11],
    ["A company wants to move an application to EC2 quickly, without changing its code. Which migration strategy does it use?",["Refactor","Replatform","Rehost","Repurchase"],2,"Rehost (lift and shift) moves the application as is.",12],
    ["A company replaces its homegrown CRM system with a SaaS product. Which migration strategy is this?",["Retain","Repurchase","Relocate","Rehost"],1,"Repurchase (drop and shop) switches to a different product, usually SaaS.",12],
    ["A company must move 500 TB of data to AWS and its internet connection is slow. What is the most practical option?",["AWS DataSync over the internet","AWS Snowball Edge","AWS Transfer Family","Amazon S3 Transfer Acceleration"],1,"With a lot of data and a slow network, Snow Family physical devices are the fastest option.",12],
    ["A company wants to migrate its Oracle database to Amazon Aurora while the source database keeps running. Which services does it use? (Choose TWO.)",["AWS Database Migration Service (DMS)","AWS Schema Conversion Tool (SCT)","Amazon Redshift","AWS Snowcone","AWS Artifact"],[0,1],"DMS migrates the data while the database keeps running; SCT converts the schema when changing engines.",12],
    ["Which AWS Cloud Adoption Framework perspectives focus on business and people? (Choose TWO.)",["Business","Platform","People","Operations","Security"],[0,2],"Business, people and governance are the business perspectives; platform, security and operations are technical.",12],
    ["Which pillar of the Well-Architected Framework focuses on recovering from failures and scaling to meet demand?",["Operational excellence","Reliability","Cost optimization","Sustainability"],1,"Reliability: recover from failures automatically and meet demand.",13],
    ["A company wants to minimize the environmental impact of its cloud workloads. Which Well-Architected pillar applies?",["Sustainability","Security","Performance efficiency","Reliability"],0,"The sustainability pillar aims to reduce environmental impact and resource waste.",13],
    ["Which tool reviews an architecture against the six Well-Architected pillars for free?",["AWS Trusted Advisor","AWS Well-Architected Tool","AWS Config","Amazon Inspector"],1,"The Well-Architected Tool compares your architecture with the pillars' best practices.",13],
    ["A factory wants to connect thousands of sensors and receive their data in AWS. Which service does it use?",["AWS IoT Core","Amazon Connect","Amazon WorkSpaces","AWS Ground Station"],0,"IoT Core connects and manages Internet of Things devices.",13],
    ["Which are pillars of the AWS Well-Architected Framework? (Choose TWO.)",["Operational excellence","Horizontal scalability","Performance efficiency","High availability","Migration"],[0,2],"The 6 pillars are: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability.",13]
  ]
};
