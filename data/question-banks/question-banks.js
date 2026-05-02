/* Add new daily question banks here. Copy the QB_V1 object, update id/title/generatedAt, and add questions. */
window.PBL_QUESTION_BANKS = [
  {
    id: "QB_V1",
    title: "QB_V1 - Generated 1 May 2026",
    generatedAt: "2026-05-01",
    description:
      "Initial Year 3B system-based MCQ bank generated for the site.",
    questions: [
      {
        id: "cvs-1",
        system: "cvs",
        stem: "A 59-year-old woman with diabetes presents with 90 minutes of epigastric discomfort, diaphoresis and nausea. ECG shows 2 mm ST elevation in V2-V5. Blood pressure is 128/78 mmHg and PCI is available within 60 minutes. What is the best immediate management?",
        options: [
          "Observe and repeat troponin in 3 hours before treating",
          "Aspirin, a P2Y12 inhibitor, anticoagulation and urgent PCI activation",
          "Thrombolysis now because anterior STEMI has high mortality",
          "GTN infusion and outpatient stress echocardiography",
          "CT aortogram before antiplatelet therapy",
        ],
        answer: 1,
        explanation:
          "This is an anterior STEMI. Do not wait for troponin when diagnostic ST elevation is present. Give antiplatelet and anticoagulant therapy and activate primary PCI when it can be delivered promptly.",
      },
      {
        id: "cvs-2",
        system: "cvs",
        stem: "A 76-year-old man presents with palpitations and dyspnoea. ECG shows atrial fibrillation at 145 bpm. He is alert, normotensive and has had symptoms for about 2 days. There is no chest pain or pulmonary oedema. What is the best initial strategy?",
        options: [
          "Immediate electrical cardioversion without anticoagulation planning",
          "Rate control, search for reversible triggers and assess stroke risk",
          "Discharge with aspirin alone if symptoms improve",
          "Adenosine rapid IV bolus as first-line therapy",
          "Permanent pacemaker insertion",
        ],
        answer: 1,
        explanation:
          "Stable rapid AF is usually managed first with rate control and correction of triggers such as infection, thyroid disease or electrolyte disturbance. Because duration is around 48 hours, cardioversion needs anticoagulation or TOE guidance, and stroke risk should be assessed.",
      },
      {
        id: "cvs-3",
        system: "cvs",
        stem: "A 64-year-old man has abrupt tearing chest pain radiating to the back. His right arm systolic BP is 185 mmHg and left arm is 150 mmHg. CXR shows mediastinal widening. Which investigation is most appropriate to confirm the suspected diagnosis in a stable patient?",
        options: [
          "Exercise stress test",
          "CT thoracic angiography",
          "Serial D-dimer only",
          "Coronary angiography as first-line imaging",
          "Ventilation-perfusion scan",
        ],
        answer: 1,
        explanation:
          "The vignette suggests acute aortic dissection. In a stable patient, CT angiography is the key diagnostic test. Type A disease needs urgent surgery; uncomplicated Type B disease is usually managed medically with tight BP control.",
      },
      {
        id: "cvs-4",
        system: "cvs",
        stem: "A 70-year-old develops syncope 24 hours after an inferior MI. ECG shows complete heart block with a ventricular escape rhythm at 32 bpm. He is clammy with BP 82/50 mmHg. What is the most appropriate next step?",
        options: [
          "Reassure because inferior MI heart block always resolves",
          "Oral beta-blocker to reduce myocardial oxygen demand",
          "Urgent pacing while reversible causes are addressed",
          "Valsalva manoeuvre followed by adenosine",
          "Outpatient Holter monitor",
        ],
        answer: 2,
        explanation:
          "Unstable complete heart block requires urgent pacing, initially transcutaneous if needed and then transvenous depending on context. Atropine can be used as a bridge, but definitive immediate support is pacing.",
      },
      {
        id: "cvs-5",
        system: "cvs",
        stem: "A 58-year-old man has HFrEF with LVEF 30% after previous MI. He is euvolaemic on furosemide but remains NYHA II. Which medication set most directly targets mortality reduction in chronic HFrEF?",
        options: [
          "Loop diuretic, digoxin, amlodipine and aspirin",
          "ACE inhibitor or ARNI, evidence-based beta-blocker, MRA and SGLT2 inhibitor",
          "Nitrate monotherapy, thiazide, verapamil and warfarin",
          "Short-acting beta agonist, steroid and macrolide",
          "Calcium carbonate, phosphate binder and erythropoietin",
        ],
        answer: 1,
        explanation:
          "The modern disease-modifying pillars of HFrEF are renin-angiotensin blockade or ARNI, beta-blocker, mineralocorticoid receptor antagonist and SGLT2 inhibitor. Diuretics improve congestion but do not provide the same mortality benefit.",
      },
      {
        id: "cvs-6",
        system: "cvs",
        stem: "A 79-year-old has exertional syncope and angina. Examination reveals a slow-rising pulse and harsh ejection systolic murmur radiating to the carotids. Echo confirms severe calcific aortic stenosis. What is the definitive management?",
        options: [
          "Long-term high-dose nitrate therapy",
          "Balloon valvuloplasty as definitive therapy for all patients",
          "Aortic valve replacement or TAVI after valve-team assessment",
          "Reassurance unless a diastolic murmur develops",
          "Rate control with verapamil",
        ],
        answer: 2,
        explanation:
          "Symptomatic severe aortic stenosis has poor prognosis without valve intervention. Definitive treatment is valve replacement, either surgical AVR or TAVI depending on operative risk, anatomy and patient factors.",
      },
      {
        id: "cvs-7",
        system: "cvs",
        stem: "A 45-year-old with a prosthetic mitral valve has fever, malaise, splinter haemorrhages and a new regurgitant murmur. He is haemodynamically stable. What should be done before starting empiric antibiotics?",
        options: [
          "Three sets of blood cultures from separate venepuncture sites",
          "Single throat swab for group A streptococcus",
          "Start oral amoxicillin and review in 1 week",
          "Exercise ECG to assess valve function",
          "No cultures because echo is diagnostic",
        ],
        answer: 0,
        explanation:
          "In suspected infective endocarditis, obtain multiple blood cultures before antibiotics if the patient is stable. Diagnosis then combines microbiology, echo findings and clinical Duke criteria.",
      },
      {
        id: "cvs-8",
        system: "cvs",
        stem: "A 67-year-old smoker has reproducible calf pain after walking 150 metres, relieved by rest. Foot pulses are reduced and ABI is 0.64. There is no rest pain or ulceration. What is the best first-line management package?",
        options: [
          "Immediate below-knee amputation",
          "Supervised exercise, smoking cessation, antiplatelet therapy and statin",
          "Bed rest until collateral vessels develop",
          "Long-term antibiotics for presumed cellulitis",
          "Warfarin for all patients with claudication",
        ],
        answer: 1,
        explanation:
          "Intermittent claudication from PAD is initially managed with risk factor control, antiplatelet therapy, statin and supervised exercise. Revascularisation is considered for lifestyle-limiting symptoms despite optimal therapy or for critical limb ischaemia.",
      },
      {
        id: "cvs-9",
        system: "cvs",
        stem: "A 62-year-old with repeated clinic hypertension has ABPM average 152/92 mmHg. He has no diabetes, CKD or heart failure. According to a typical stepwise approach, which initial antihypertensive is most appropriate?",
        options: [
          "Calcium channel blocker",
          "Loop diuretic",
          "Alpha-blocker monotherapy",
          "Mineralocorticoid receptor antagonist as first-line",
          "No drug therapy until end-organ damage appears",
        ],
        answer: 0,
        explanation:
          "In many stepwise hypertension algorithms, patients aged 55 or older without compelling indications commonly start with a calcium channel blocker, alongside lifestyle modification and cardiovascular risk reduction.",
      },
      {
        id: "cvs-10",
        system: "cvs",
        stem: "A patient with known lung cancer becomes hypotensive and dyspnoeic. JVP is elevated, heart sounds are muffled and bedside echo shows a large pericardial effusion with right atrial collapse. What is the immediate management?",
        options: [
          "High-dose IV diuresis",
          "Urgent pericardiocentesis",
          "Outpatient repeat echo in 6 weeks",
          "Oral colchicine only",
          "Fluid restriction and ACE inhibitor",
        ],
        answer: 1,
        explanation:
          "This is cardiac tamponade with obstructive shock. The immediate treatment is drainage, usually urgent pericardiocentesis, while resuscitation and cause-directed management proceed.",
      },
      {
        id: "resp-1",
        system: "resp",
        stem: "A 22-year-old with asthma is speaking in short phrases, RR 32, HR 126 and SpO2 91% on room air. PEF is 38% predicted. There is widespread wheeze but no silent chest. What is the best initial treatment bundle?",
        options: [
          "Oral antihistamine and discharge if wheeze improves",
          "Controlled oxygen only, because salbutamol worsens tachycardia",
          "High-flow oxygen, repeated nebulised salbutamol plus ipratropium and systemic corticosteroid",
          "Long-acting beta agonist monotherapy",
          "Immediate antibiotics as the key treatment",
        ],
        answer: 2,
        explanation:
          "This is severe acute asthma. Initial management is oxygen to correct hypoxaemia, frequent short-acting bronchodilators, ipratropium in severe attacks and systemic steroids. Escalate to magnesium or ICU support if life-threatening features or poor response occur.",
      },
      {
        id: "resp-2",
        system: "resp",
        stem: "A 69-year-old with COPD presents with increased dyspnoea, sputum volume and sputum purulence. ABG on high-flow oxygen shows pH 7.30, PaCO2 62 mmHg and PaO2 95 mmHg. What oxygen target is safest while treating the exacerbation?",
        options: [
          "SpO2 100% until discharge",
          "SpO2 94-98% because all hypoxaemia is dangerous",
          "SpO2 88-92% with bronchodilators, steroids and antibiotics if indicated",
          "No oxygen unless cyanosis appears",
          "SpO2 below 80% to reverse CO2 retention",
        ],
        answer: 2,
        explanation:
          "COPD patients at risk of hypercapnic respiratory failure should receive controlled oxygen, commonly targeting 88-92%, while treating bronchospasm and triggers. NIV is considered if acidosis and hypercapnia persist despite initial therapy.",
      },
      {
        id: "resp-3",
        system: "resp",
        stem: "A 74-year-old with fever, productive cough and right lower lobe crackles has confusion, RR 34, BP 86/54 and urea 11 mmol/L. What is the most appropriate interpretation and disposition?",
        options: [
          "Mild community-acquired pneumonia suitable for oral antibiotics at home",
          "High-severity pneumonia requiring urgent hospital care and IV antibiotics",
          "Viral URTI needing no imaging or antibiotics",
          "Asthma exacerbation, because crackles are diagnostic",
          "Pulmonary fibrosis flare best treated with outpatient steroids only",
        ],
        answer: 1,
        explanation:
          "Confusion, high urea, tachypnoea, hypotension and age over 65 indicate high pneumonia severity. This patient needs urgent inpatient management, sepsis assessment, IV antibiotics and consideration of higher-level care.",
      },
      {
        id: "resp-4",
        system: "resp",
        stem: "A 31-year-old recently migrated patient has 2 months of cough, weight loss, night sweats and small-volume haemoptysis. CXR shows right upper lobe cavitation. What is the best immediate infection-control and diagnostic step?",
        options: [
          "No isolation if the patient is afebrile",
          "Airborne isolation and sputum AFB smear, culture and nucleic acid testing",
          "Start inhaled corticosteroid and repeat CXR in 6 months",
          "Single blood culture for pneumococcus",
          "Pleural tap before sputum testing in all cases",
        ],
        answer: 1,
        explanation:
          "Cavitary pulmonary TB is infectious until proven otherwise. Use airborne precautions and send sputum for AFB smear, culture and molecular testing, while involving public health and TB specialists.",
      },
      {
        id: "resp-5",
        system: "resp",
        stem: "A tall 20-year-old man has sudden pleuritic chest pain. He is stable, SpO2 98% and CXR shows a small primary spontaneous pneumothorax. He has minimal breathlessness. What is the best management?",
        options: [
          "Observation with safety-netting and repeat imaging",
          "Immediate thoracotomy",
          "Needle decompression regardless of clinical stability",
          "Long-term anticoagulation",
          "Nebulised salbutamol as definitive therapy",
        ],
        answer: 0,
        explanation:
          "A small primary spontaneous pneumothorax in a stable minimally symptomatic patient can often be observed with follow-up imaging and clear return advice. Tension pneumothorax or marked symptoms require urgent decompression or aspiration/drainage.",
      },
      {
        id: "resp-6",
        system: "resp",
        stem: "A 68-year-old has a new unilateral pleural effusion with weight loss and no clinical heart failure. Which test most directly establishes whether the fluid is exudative and helps guide the differential?",
        options: [
          "Peak expiratory flow rate",
          "Diagnostic thoracentesis with pleural protein and LDH compared with serum",
          "D-dimer only",
          "Trial of oral diuretics without sampling",
          "Spirometry before any imaging or fluid analysis",
        ],
        answer: 1,
        explanation:
          "An unexplained unilateral effusion generally warrants diagnostic thoracentesis. Light's criteria use pleural and serum protein/LDH to classify exudate versus transudate, guiding evaluation for malignancy, infection and inflammatory disease.",
      },
      {
        id: "resp-7",
        system: "resp",
        stem: "A 66-year-old smoker has persistent cough, haemoptysis and weight loss. CXR shows a left hilar mass. What is the best next investigation to stage disease and plan tissue diagnosis?",
        options: [
          "Repeat CXR in 3 months",
          "CT chest and upper abdomen with contrast",
          "Peak flow diary",
          "Empiric TB treatment without further tests",
          "Serum calcium only",
        ],
        answer: 1,
        explanation:
          "Suspected lung cancer needs CT imaging to define the lesion, nodal disease and metastases before selecting the safest highest-yield biopsy route, such as bronchoscopy, EBUS or CT-guided biopsy.",
      },
      {
        id: "resp-8",
        system: "resp",
        stem: "A 52-year-old with BMI 38 has loud snoring, witnessed apnoeas and morning headaches. His Epworth Sleepiness Scale is high. Which diagnosis and first-line treatment are most appropriate after sleep study confirmation?",
        options: [
          "Central cyanotic heart disease - long-term antibiotics",
          "Obstructive sleep apnoea - CPAP plus weight-loss strategies",
          "Asthma - inhaled corticosteroid alone",
          "Pulmonary embolism - indefinite thrombolysis",
          "Pneumothorax - intercostal catheter",
        ],
        answer: 1,
        explanation:
          "The history is classic for OSA. Diagnosis is confirmed with polysomnography or an appropriate home sleep study. CPAP reduces apnoea burden and sleepiness, while weight reduction and risk-factor management remain important.",
      },
      {
        id: "resp-9",
        system: "resp",
        stem: "A 44-year-old has years of daily purulent sputum, recurrent chest infections and coarse crackles. CXR is non-specific. Which investigation best confirms suspected bronchiectasis?",
        options: [
          "High-resolution CT chest",
          "ECG",
          "Skin-prick allergy test only",
          "Barium swallow",
          "Serum troponin",
        ],
        answer: 0,
        explanation:
          "Bronchiectasis is confirmed by HRCT, which can show bronchial dilatation, lack of tapering and airway wall thickening. Management focuses on airway clearance, treating exacerbations and investigating underlying causes.",
      },
      {
        id: "resp-10",
        system: "resp",
        stem: "A 71-year-old has progressive exertional dyspnoea, dry cough, finger clubbing and fine end-inspiratory bibasal crackles. Spirometry is restrictive and DLCO is reduced. HRCT shows basal subpleural honeycombing. What is the most likely diagnosis?",
        options: [
          "Idiopathic pulmonary fibrosis",
          "Acute viral bronchitis",
          "Primary spontaneous pneumothorax",
          "Uncomplicated asthma",
          "Obstructive sleep apnoea",
        ],
        answer: 0,
        explanation:
          "The combination of older age, progressive dyspnoea, Velcro-like crackles, restriction, reduced gas transfer and usual interstitial pneumonia pattern on HRCT supports idiopathic pulmonary fibrosis.",
      },
      {
        id: "hep-1",
        system: "hep",
        stem: "A patient with jaundice has serology showing HBsAg positive, anti-HBc IgM positive and HBeAg positive. Which interpretation is most accurate?",
        options: [
          "Resolved previous hepatitis B with immunity",
          "Acute hepatitis B with high infectivity",
          "Vaccination response only",
          "Chronic hepatitis C",
          "Hepatitis A immunity from past infection",
        ],
        answer: 1,
        explanation:
          "HBsAg indicates current HBV infection, anti-HBc IgM indicates acute or recent infection, and HBeAg suggests high viral replication and infectivity.",
      },
      {
        id: "hep-2",
        system: "hep",
        stem: "A 38-year-old who injected drugs years ago has positive anti-HCV antibody on screening. Which result best confirms active hepatitis C infection requiring assessment for treatment?",
        options: [
          "Positive HCV RNA",
          "Positive anti-HBs",
          "Isolated raised ALP",
          "Negative HCV antibody repeat test",
          "Positive anti-HAV IgG",
        ],
        answer: 0,
        explanation:
          "HCV antibody indicates exposure, but active infection is confirmed by detectable HCV RNA. Patients with active infection should be assessed for fibrosis, comorbidities and antiviral therapy.",
      },
      {
        id: "hep-3",
        system: "hep",
        stem: "A 56-year-old with new tense ascites and suspected alcohol-related cirrhosis is admitted. He is afebrile and comfortable. What is the most appropriate initial investigation of the ascites?",
        options: [
          "Start spironolactone without sampling",
          "Diagnostic paracentesis for cell count, culture, albumin and protein",
          "Colonoscopy as the first test",
          "Serum ammonia level only",
          "Therapeutic anticoagulation",
        ],
        answer: 1,
        explanation:
          "New ascites in cirrhosis should be sampled. Ascitic cell count and culture assess SBP, while albumin and total protein help calculate SAAG and identify portal hypertensive physiology.",
      },
      {
        id: "hep-4",
        system: "hep",
        stem: "A cirrhotic patient with ascites develops fever, abdominal pain and confusion. Ascitic fluid neutrophil count is 420 cells/mm3. Which management is most appropriate?",
        options: [
          "Oral loperamide and discharge",
          "IV ceftriaxone plus albumin, then secondary prophylaxis after recovery",
          "High-dose diuretics only",
          "Emergency cholecystectomy",
          "No treatment unless culture grows bacteria",
        ],
        answer: 1,
        explanation:
          "Ascitic neutrophils >=250 cells/mm3 diagnose SBP even before cultures return. Treat promptly with appropriate IV antibiotics and albumin to reduce renal failure and mortality, then use secondary prophylaxis.",
      },
      {
        id: "hep-5",
        system: "hep",
        stem: "A man with known cirrhosis presents with large-volume haematemesis and melaena. He is tachycardic and has ascites. Which management bundle is most appropriate after ABC resuscitation?",
        options: [
          "PPI only and outpatient gastroscopy",
          "Broad-spectrum antibiotics, vasoactive therapy and urgent endoscopy for variceal ligation",
          "Oral iron replacement only",
          "Immediate colonoscopy without upper endoscopy",
          "Avoid transfusion and all endoscopic therapy",
        ],
        answer: 1,
        explanation:
          "Suspected variceal bleeding needs resuscitation, antibiotics, vasoactive therapy such as terlipressin or octreotide depending on local practice, and urgent endoscopy with band ligation.",
      },
      {
        id: "hep-6",
        system: "hep",
        stem: "A patient with decompensated cirrhosis becomes drowsy after an upper GI bleed. He has asterixis and no focal neurology. What treatment targets the likely mechanism?",
        options: [
          "Lactulose, consider rifaximin and treat the precipitating bleed",
          "High-protein load and benzodiazepines",
          "Immediate thrombolysis",
          "No bowel therapy because ammonia is never relevant",
          "Long-term NSAIDs for inflammation",
        ],
        answer: 0,
        explanation:
          "Hepatic encephalopathy is commonly precipitated by GI bleeding, infection, constipation, dehydration or sedatives. Lactulose reduces gut nitrogen load; rifaximin can be added, and the precipitant must be treated.",
      },
      {
        id: "hep-7",
        system: "hep",
        stem: "A 49-year-old with obesity and type 2 diabetes has mild ALT elevation and ultrasound evidence of hepatic steatosis. Viral and autoimmune tests are negative. What intervention has the strongest disease-modifying role initially?",
        options: [
          "Stop all statins permanently",
          "Weight loss with metabolic risk-factor optimisation",
          "Prophylactic ERCP",
          "Long-term prednisolone for everyone",
          "Avoid exercise to prevent rhabdomyolysis",
        ],
        answer: 1,
        explanation:
          "NAFLD/NASH management centres on weight loss and optimisation of diabetes, lipids, blood pressure and cardiovascular risk. Statins are not routinely stopped solely because of NAFLD.",
      },
      {
        id: "hep-8",
        system: "hep",
        stem: "A 42-year-old drinking heavily presents with jaundice, tender hepatomegaly and fever. AST is 220, ALT 90 and bilirubin is markedly raised. Viral serology is negative. What is the most likely diagnosis?",
        options: [
          "Alcoholic hepatitis",
          "Gilbert syndrome",
          "Primary spontaneous pneumothorax",
          "Coeliac disease",
          "Acute appendicitis",
        ],
        answer: 0,
        explanation:
          "Alcoholic hepatitis commonly presents with jaundice, systemic symptoms, tender hepatomegaly and AST greater than ALT, usually with both transaminases below very high viral hepatitis ranges. Severity scores guide steroid consideration after excluding infection and bleeding.",
      },
      {
        id: "hep-9",
        system: "hep",
        stem: "A 67-year-old has fever, jaundice and right upper quadrant pain. Blood pressure is 92/58 and ultrasound shows a dilated common bile duct with gallstones. What is the most appropriate management?",
        options: [
          "Elective outpatient ultrasound in 6 months",
          "IV antibiotics and urgent biliary decompression, usually ERCP",
          "Oral antacid therapy only",
          "Immediate gluten-free diet",
          "No antibiotics until ERCP culture returns",
        ],
        answer: 1,
        explanation:
          "Charcot triad with hypotension suggests acute cholangitis with sepsis risk. Treat with resuscitation and IV antibiotics, then decompress the obstructed biliary tree urgently, commonly by ERCP.",
      },
      {
        id: "hep-10",
        system: "hep",
        stem: "A patient with hepatitis C cirrhosis asks about hepatocellular carcinoma surveillance. Which plan is most appropriate if they are a candidate for treatment?",
        options: [
          "Ultrasound liver surveillance every 6 months, with or without AFP depending on protocol",
          "No surveillance once cirrhosis is established",
          "Annual chest X-ray only",
          "ERCP every 3 months",
          "Colonoscopy every 6 months",
        ],
        answer: 0,
        explanation:
          "Cirrhosis from HBV, HCV, alcohol, NAFLD and other causes increases HCC risk. Surveillance is typically liver ultrasound every 6 months, sometimes with AFP depending on guideline and local practice.",
      },
      {
        id: "gi-1",
        system: "gi",
        stem: "A 63-year-old with long-standing reflux now reports progressive dysphagia to solids, weight loss and iron-deficiency anaemia. What is the most appropriate next investigation?",
        options: [
          "Empiric antacid therapy for 8 weeks before any investigation",
          "Urgent upper GI endoscopy with biopsy",
          "Hydrogen breath test",
          "Reassurance because reflux explains all symptoms",
          "Abdominal X-ray only",
        ],
        answer: 1,
        explanation:
          "Progressive dysphagia, weight loss and anaemia are alarm features for oesophageal or gastric malignancy. The next step is urgent endoscopy with biopsy rather than prolonged empiric reflux treatment.",
      },
      {
        id: "gi-2",
        system: "gi",
        stem: "A 48-year-old has epigastric pain relieved by meals. Endoscopy shows a duodenal ulcer and biopsy urease testing is positive. What is the most appropriate management?",
        options: [
          "H. pylori eradication therapy plus acid suppression",
          "Long-term NSAIDs because they reduce ulcer recurrence",
          "Colectomy",
          "No treatment if pain improves with food",
          "Steroids as first-line ulcer therapy",
        ],
        answer: 0,
        explanation:
          "H. pylori-positive peptic ulcer disease should be treated with eradication therapy plus acid suppression. NSAIDs should be stopped where possible, and eradication should be confirmed in selected patients according to local guidance.",
      },
      {
        id: "gi-3",
        system: "gi",
        stem: "A 52-year-old has severe epigastric pain radiating to the back after heavy alcohol intake. Lipase is more than 3 times the upper limit of normal. What is the most appropriate initial management?",
        options: [
          "Aggressive supportive care with IV fluids, analgesia, antiemetics and cause assessment",
          "Routine prophylactic antibiotics for all cases",
          "Immediate ERCP for every patient regardless of biliary obstruction",
          "High-fat diet and discharge",
          "Colonoscopy during the acute pain episode",
        ],
        answer: 0,
        explanation:
          "Acute pancreatitis is initially managed supportively with fluids, analgesia, antiemetics, nutrition planning and severity assessment. Antibiotics are not routine unless infected necrosis or another infection is suspected; ERCP is reserved for cholangitis or persistent biliary obstruction.",
      },
      {
        id: "gi-4",
        system: "gi",
        stem: "A 58-year-old with chronic alcohol use has steatorrhoea, weight loss and pancreatic calcifications on CT. Which long-term management is most appropriate?",
        options: [
          "Pancreatic enzyme replacement, nutrition support, analgesia and alcohol/smoking cessation",
          "No fat-soluble vitamin monitoring is needed",
          "Prophylactic appendicectomy",
          "High-dose steroids as first-line for all patients",
          "Avoid all oral intake indefinitely",
        ],
        answer: 0,
        explanation:
          "Chronic pancreatitis can cause exocrine insufficiency, pain, diabetes and malnutrition. Treatment includes pancreatic enzymes, nutritional support including fat-soluble vitamins when needed, analgesia and alcohol/smoking cessation.",
      },
      {
        id: "gi-5",
        system: "gi",
        stem: "A 25-year-old has periumbilical pain that migrates to the right iliac fossa with anorexia, fever and rebound tenderness. Pregnancy test is negative. What is the most appropriate management if acute appendicitis is likely?",
        options: [
          "Immediate laxatives and discharge",
          "Surgical review, analgesia, IV antibiotics and appendicectomy or selected non-operative pathway",
          "Colonoscopy before any surgical assessment",
          "Long-term PPI therapy only",
          "Warfarin loading",
        ],
        answer: 1,
        explanation:
          "The history is classic for appendicitis. Management includes early surgical assessment, analgesia, fluids when needed and antibiotics, with laparoscopic appendicectomy common; selected uncomplicated cases may be managed non-operatively under protocol.",
      },
      {
        id: "gi-6",
        system: "gi",
        stem: "A 23-year-old has bloody diarrhoea, urgency and tenesmus. Colonoscopy shows continuous inflammation from the rectum proximally. Which diagnosis is most consistent?",
        options: [
          "Ulcerative colitis",
          "Irritable bowel syndrome",
          "Achalasia",
          "Acute cholangitis",
          "Primary spontaneous pneumothorax",
        ],
        answer: 0,
        explanation:
          "Continuous mucosal inflammation starting at the rectum with bloody diarrhoea and urgency is typical of ulcerative colitis. Crohn disease more often has skip lesions, transmural inflammation and small bowel involvement.",
      },
      {
        id: "gi-7",
        system: "gi",
        stem: "A 69-year-old has change in bowel habit, unintentional weight loss and microcytic anaemia. Faecal occult blood testing is positive. What is the diagnostic investigation of choice?",
        options: [
          "Colonoscopy with biopsy",
          "Serum CEA alone",
          "Plain abdominal X-ray only",
          "Empiric haemorrhoid cream",
          "No investigation if abdominal pain is absent",
        ],
        answer: 0,
        explanation:
          "Colorectal cancer is diagnosed by colonoscopy with biopsy. CEA can help with monitoring after diagnosis but is not a stand-alone diagnostic test.",
      },
      {
        id: "gi-8",
        system: "gi",
        stem: "An 82-year-old with atrial fibrillation develops sudden severe abdominal pain out of proportion to examination. Lactate is elevated and he becomes acidotic. Which investigation is most appropriate if he is stable enough for imaging?",
        options: [
          "CT mesenteric angiography",
          "Barium swallow",
          "Hydrogen breath test",
          "Sleep study",
          "DEXA scan",
        ],
        answer: 0,
        explanation:
          "Pain out of proportion, AF and lactic acidosis suggest acute mesenteric ischaemia. CT angiography is the key investigation when feasible, alongside urgent resuscitation, broad-spectrum antibiotics and surgical/vascular involvement.",
      },
      {
        id: "gi-9",
        system: "gi",
        stem: "A 35-year-old has chronic diarrhoea, bloating and iron deficiency. tTG-IgA is positive and total IgA is normal. What is the best next step to confirm coeliac disease?",
        options: [
          "Start gluten-free diet before biopsy and cancel further testing",
          "Upper endoscopy with duodenal biopsies while still eating gluten",
          "Appendicectomy",
          "ERCP",
          "CT pulmonary angiography",
        ],
        answer: 1,
        explanation:
          "Coeliac disease is supported by positive serology and confirmed with duodenal biopsies, ideally while the patient remains on a gluten-containing diet. Starting a gluten-free diet before biopsy can reduce diagnostic yield.",
      },
      {
        id: "gi-10",
        system: "gi",
        stem: "An 80-year-old with aortic stenosis has recurrent painless haematochezia and iron-deficiency anaemia. Colonoscopy shows right-sided vascular ectasias. Which association is most relevant?",
        options: [
          "Heyde syndrome due to aortic stenosis, acquired von Willebrand dysfunction and angiodysplasia",
          "Boerhaave syndrome due to oesophageal rupture",
          "Mallory-Weiss tear due to retching",
          "Gilbert syndrome due to impaired bilirubin conjugation",
          "Zollinger-Ellison syndrome due to gastrinoma",
        ],
        answer: 0,
        explanation:
          "Heyde syndrome links aortic stenosis with acquired von Willebrand factor dysfunction and bleeding from angiodysplasia, often right-sided. Endoscopic therapy can control bleeding, and aortic valve replacement can reduce recurrence in appropriate patients.",
      },
    ],
  },
];
