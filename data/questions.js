
export const QUESTIONS = [
  // ทั่วไป
  { key: "sex", dimension: "general", label: "เพศ", get: (r) => r.sex, breakdown: true },
  { key: "ageGroup", dimension: "general", label: "ช่วงอายุ", get: (r) => r.ageGroup, breakdown: true, order: ["50–59","60–69","70+"] },
  { key: "maritalStatus", dimension: "general", label: "สถานภาพสมรส", get: (r) => r.maritalStatus, breakdown: true },
  { key: "education", dimension: "general", label: "ระดับการศึกษา", get: (r) => r.education, breakdown: true },
  { key: "livingArrangement", dimension: "general", label: "การอยู่อาศัย", get: (r) => r.livingArrangement, breakdown: true },

  // สุขภาพ
  { key: "healthStatus", dimension: "health", label: "ภาวะสุขภาพโดยรวม", get: (r) => r.healthStatus, hidden: true },
  { key: "hasChronic", dimension: "health", label: "การมีโรคประจำตัว", get: (r) => r.hasChronic, breakdown: true, riskValue: "มีโรคประจำตัว", hidden: true },
  { key: "diabetes", dimension: "health", label: "โรคเบาหวาน", get: (r) => r.diabetes, riskValue: "ใช่", hidden: true },
  { key: "hypertension", dimension: "health", label: "โรคความดันโลหิตสูง", get: (r) => r.hypertension, riskValue: "ใช่", hidden: true },
  { key: "hasCaregiver", dimension: "health", label: "การมีผู้ดูแลที่บ้าน", get: (r) => r.hasCaregiver, breakdown: true },
  { key: "needCaregiverHelp", dimension: "health", label: "ความต้องการผู้ดูแลช่วยกิจวัตรประจำวัน", get: (r) => r.needCaregiverHelp, breakdown: true },
  { key: "adlGroup", dimension: "health", label: "ผู้มีภาวะพึ่งพิง (ADL)", get: (r) => r.adlGroup, breakdown: true,
    order: ["ติดสังคม","ติดบ้าน","ติดเตียง","ไม่ทราบ"],
    labelColors: { "ติดสังคม": "hsl(329,25%,78%)", "ติดบ้าน": "hsl(329,45%,60%)", "ติดเตียง": "hsl(329,60%,38%)", "ไม่ทราบ": "hsl(329,15%,85%)" } },
  { key: "chronicDiseaseGroup", dimension: "health", label: "ผู้ป่วยเรื้อรัง", get: (r) => r.chronicDiseaseGroup, breakdown: true, skipBlank: true,
    order: ["เบาหวาน","ความดันโลหิตสูง","ไขมัน/คอเลสเตอรอลสูง","เป็นมากกว่า 1 โรคข้างต้น"],
    labelColors: { "เป็นมากกว่า 1 โรคข้างต้น": "hsl(329,60%,38%)", __default: "hsl(329,45%,60%)" } },
  { key: "unreachedService", dimension: "health", label: "ผู้เข้าไม่ถึงบริการ", get: (r) => r.unreachedService, breakdown: true, skipBlank: true,
    order: ["ไม่ได้รับการคัดกรอง","ไม่ได้รับการเยี่ยมบ้าน","เข้าไม่ถึง Intermediate care"],
    labelColors: { __default: "hsl(329,60%,38%)" } },
  { key: "needsAssistiveDevice", dimension: "health", label: "ผู้ต้องการอุปกรณ์ช่วยเหลือ", get: (r) => r.needsAssistiveDevice, breakdown: true,
    labelColors: { "ต้องการ": "hsl(329,60%,38%)", "ไม่ต้องการ": "hsl(329,25%,78%)" } },
  { key: "needsGlasses", dimension: "health", label: "ต้องการแว่นตา", get: (r) => r.needsGlasses, riskValue: "ใช่", hidden: true },
  { key: "needsDentures", dimension: "health", label: "ต้องการฟันปลอม", get: (r) => r.needsDentures, riskValue: "ใช่", hidden: true },
  { key: "needsCane", dimension: "health", label: "ต้องการไม้เท้า", get: (r) => r.needsCane, riskValue: "ใช่", hidden: true },
  { key: "needsHearingAid", dimension: "health", label: "ต้องการเครื่องช่วยฟัง", get: (r) => r.needsHearingAid, riskValue: "ใช่", hidden: true },

  // เศรษฐกิจ
  { key: "workStatus", dimension: "economy", label: "สถานะการทำงาน", get: (r) => r.workStatus, breakdown: true, hidden: true },
  { key: "isWorking", dimension: "economy", label: "การทำงาน", breakdown: true,
    get: (r) => r.workStatus == null ? null : (r.workStatus === "ไม่ได้ทำงาน" ? "ไม่ทำ" : (r.workStatus === "ไม่ทราบ" ? "ไม่ทราบ" : "ทำ")),
    labelColors: { "ทำ": "hsl(329,60%,38%)", "ไม่ทำ": "hsl(329,25%,78%)" } },
  { key: "incomeSource", dimension: "economy", label: "แหล่งรายได้หลัก", get: (r) => r.incomeSource, hidden: true },
  { key: "incomeSufficient", dimension: "economy", label: "ความเพียงพอของรายได้", get: (r) => r.incomeSufficient, breakdown: true,
    labelColors: { "เพียงพอ": "hsl(329,25%,78%)", "พอบ้าง": "hsl(329,45%,60%)", "ไม่เพียงพอ": "hsl(329,60%,38%)", "ไม่ทราบ": "hsl(329,15%,85%)" } },
  { key: "wantsExtraWork", dimension: "economy", label: "ต้องการทำงาน/อาชีพเสริม", get: (r) => r.wantsExtraWork, breakdown: true },
  { key: "housingInsecurity", dimension: "economy", label: "ที่อยู่อาศัยไม่มั่นคง", get: (r) => r.housingInsecurity, breakdown: true,
    labelColors: { "บ้านเช่า/ที่ดินเช่า": "hsl(329,60%,38%)", "อื่นๆ": "hsl(329,25%,78%)" } },

  // สังคม
  { key: "communityParticipation", dimension: "society", label: "การเข้าร่วมกิจกรรมในชุมชน", get: (r) => r.communityParticipation, hidden: true,
    labelColors: { "ไม่เคยเข้าร่วมเลย": "hsl(329,60%,38%)", __default: "hsl(329,25%,78%)" } },
  { key: "happinessBand", dimension: "society", label: "คะแนนความสุข/ความพึงพอใจในชีวิต (0-10)", hidden: true, get: (r) => {
      if (r.happinessScore == null) return "ไม่ทราบ";
      if (r.happinessScore <= 4) return "ต่ำ (0-4)";
      if (r.happinessScore <= 7) return "ปานกลาง (5-7)";
      return "สูง (8-10)";
    }, order: ["ต่ำ (0-4)","ปานกลาง (5-7)","สูง (8-10)"] },
  { key: "isolationGroup", dimension: "society", label: "กลุ่มเสี่ยงแยกตัว", get: (r) => r.isolationGroup, breakdown: true, skipBlank: true,
    order: ["ไม่ได้ออกจากบ้านในช่วง 3 เดือนที่ผ่านมา","ออกจากบ้านน้อย","ออกจากบ้าน"],
    labelColors: { "ไม่ได้ออกจากบ้านในช่วง 3 เดือนที่ผ่านมา": "hsl(329,60%,38%)", "ออกจากบ้านน้อย": "hsl(329,45%,60%)", "ออกจากบ้าน": "hsl(329,25%,78%)" } },
  { key: "participationGroup", dimension: "society", label: "กลุ่มไม่เข้าร่วมกิจกรรม", get: (r) => r.participationGroup, breakdown: true, skipBlank: true,
    order: ["ไม่เข้าร่วม","เข้าร่วมนานๆครั้ง","เข้าร่วมบางครั้ง","เข้าร่วมทุกครั้ง/เป็นประจำ"],
    labelColors: { "ไม่เข้าร่วม": "hsl(329,60%,38%)", "เข้าร่วมนานๆครั้ง": "hsl(329,45%,60%)", "เข้าร่วมบางครั้ง": "hsl(329,35%,68%)", "เข้าร่วมทุกครั้ง/เป็นประจำ": "hsl(329,25%,78%)" } },
  { key: "rightsAccessGroup", dimension: "society", label: "กลุ่มเข้าไม่ถึงสิทธิ",
    get: (r) => r.rightsAccessGroup, breakdown: true, skipBlank: true,
    labelColors: { "ไม่ทราบสิทธิทั้ง 6 ข้อ": "hsl(329,60%,38%)", "อื่นๆ": "hsl(329,25%,78%)" } },
  { key: "familyVulnerableGroup", dimension: "society", label: "กลุ่มเปราะบางทางครอบครัว", get: (r) => r.familyVulnerableGroup, breakdown: true, skipBlank: true,
    order: ["อยู่กับคู่สมรสเท่านั้น","อยู่ลำพัง"],
    labelColors: { "อยู่ลำพัง": "hsl(329,60%,38%)", "อยู่กับคู่สมรสเท่านั้น": "hsl(329,45%,60%)" } },

  // การเข้าถึงดิจิทัล
  { key: "smartphone", dimension: "digital", label: "การใช้สมาร์ทโฟน", get: (r) => r.smartphone, breakdown: true, hidden: true,
    labelColors: { "ใช้": "hsl(329,60%,38%)", "ไม่ใช้": "hsl(329,25%,78%)" } },
  { key: "techAccessGroup", dimension: "digital", label: "กลุ่มเข้าไม่ถึงเทคโนโลยี", get: (r) => r.techAccessGroup, breakdown: true, skipBlank: true,
    labelColors: { "ใช้": "hsl(329,60%,38%)", "ไม่ใช้": "hsl(329,25%,78%)" } },
  { key: "lineUseGroup", dimension: "digital", label: "การใช้ Line", get: (r) => r.lineUseGroup, breakdown: true, skipBlank: true, hidden: true,
    labelColors: { "ใช้": "hsl(329,60%,38%)", "ไม่ใช้": "hsl(329,25%,78%)" } },
  { key: "facebookUseGroup", dimension: "digital", label: "การใช้ Facebook", get: (r) => r.facebookUseGroup, breakdown: true, skipBlank: true, hidden: true,
    labelColors: { "ใช้": "hsl(329,60%,38%)", "ไม่ใช้": "hsl(329,25%,78%)" } },
  { key: "digitalSkillGap", dimension: "digital", label: "กลุ่มขาดทักษะดิจิทัล", get: (r) => {
      if (r.lineUseGroup == null || r.facebookUseGroup == null) return null;
      return (r.lineUseGroup === "ไม่ใช้" || r.facebookUseGroup === "ไม่ใช้") ? "ขาดทักษะ" : "ไม่ขาดทักษะ";
    }, breakdown: true, skipBlank: true,
    labelColors: { "ขาดทักษะ": "hsl(329,60%,38%)", "ไม่ขาดทักษะ": "hsl(329,25%,78%)" } },
  { key: "useLine", dimension: "digital", label: "ใช้ไลน์ (LINE)", get: (r) => r.useLine, hidden: true },
  { key: "useFacebook", dimension: "digital", label: "ใช้เฟซบุ๊ก (Facebook)", get: (r) => r.useFacebook, hidden: true },
  { key: "useYoutube", dimension: "digital", label: "ใช้ยูทูบ (YouTube)", get: (r) => r.useYoutube, hidden: true },
  { key: "useTiktok", dimension: "digital", label: "ใช้ติ๊กต็อก (TikTok)", get: (r) => r.useTiktok, hidden: true },

  // สิ่งแวดล้อมและความปลอดภัย
  { key: "riskEntrance", dimension: "environment", label: "ความเสี่ยง: ทางเดินเข้าบ้าน (ภายนอก)", get: (r) => r.riskEntrance, hidden: true },
  { key: "riskStairs", dimension: "environment", label: "ความเสี่ยง: บันได", get: (r) => r.riskStairs, hidden: true },
  { key: "riskLighting", dimension: "environment", label: "ความเสี่ยง: ระดับความสว่างของแสง", get: (r) => r.riskLighting, hidden: true },
  { key: "everFallen", dimension: "environment", label: "ประวัติการหกล้ม (1 ปีที่ผ่านมา)", get: (r) => r.everFallen, breakdown: true, hidden: true,
    labelColors: { "เคย": "hsl(329,60%,38%)", "ไม่เคย": "hsl(329,25%,78%)" } },
  { key: "homeHasRisk", dimension: "environment", label: "บ้านมีจุดเสี่ยง", get: (r) => r.homeHasRisk, breakdown: true, hidden: true,
    labelColors: { "มี": "hsl(329,60%,38%)", "ไม่มี": "hsl(329,25%,78%)" } },
  { key: "fallRiskGroup", dimension: "environment", label: "กลุ่มเสี่ยงหกล้ม", get: (r) => (r.everFallen === "เคย" || r.homeHasRisk === "มี") ? "เสี่ยง" : "ไม่เสี่ยง", breakdown: true,
    labelColors: { "เสี่ยง": "hsl(329,60%,38%)", "ไม่เสี่ยง": "hsl(329,25%,78%)" } },

  // ความพร้อมสู่วัยสูงอายุ
  { key: "prepFinance", dimension: "agingReadiness", label: "เตรียมความพร้อมด้านการเงิน", get: (r) => r.prepFinance, skipBlank: true, hidden: true },
  { key: "prepHealth", dimension: "agingReadiness", label: "เตรียมความพร้อมด้านสุขภาพ", get: (r) => r.prepHealth, skipBlank: true, hidden: true },
  { key: "prepHousing", dimension: "agingReadiness", label: "เตรียมความพร้อมด้านที่อยู่อาศัย", get: (r) => r.prepHousing, skipBlank: true, hidden: true },
  { key: "prepMental", dimension: "agingReadiness", label: "เตรียมความพร้อมด้านจิตใจ", get: (r) => r.prepMental, skipBlank: true, hidden: true },
  { key: "readinessRiskGroup", dimension: "agingReadiness", label: "ความเสี่ยงในยามสูงอายุ", get: (r) => r.readinessRiskGroup, breakdown: true, skipBlank: true,
    order: ["ยังไม่เตรียมพร้อมเลย (ไม่คิด / คิดแต่ไม่ได้เตรียม)","เตรียมพร้อม 1 - 3 ด้าน","เตรียมพร้อมมากกว่า 4 ด้าน"],
    labelColors: { "ยังไม่เตรียมพร้อมเลย (ไม่คิด / คิดแต่ไม่ได้เตรียม)": "hsl(329,60%,38%)", "เตรียมพร้อม 1 - 3 ด้าน": "hsl(329,45%,60%)", "เตรียมพร้อมมากกว่า 4 ด้าน": "hsl(329,25%,78%)" } },

  // ความต้องการการสนับสนุน
  { key: "needCaregiverHelp2", dimension: "supportNeeds", label: "ต้องการผู้ดูแลช่วยกิจวัตรประจำวัน", get: (r) => r.needCaregiverHelp },
  { key: "helpFood", dimension: "supportNeeds", label: "ต้องการช่วย: เตรียม/จัดหาอาหาร จัดยา", get: (r) => r.helpFood },
  { key: "helpDaily", dimension: "supportNeeds", label: "ต้องการช่วย: กิจวัตรประจำวัน (ห้องน้ำ อาบน้ำ)", get: (r) => r.helpDaily },
  { key: "helpMedical", dimension: "supportNeeds", label: "ต้องการช่วย: พาไปหาหมอ/นอกบ้าน", get: (r) => r.helpMedical },
  { key: "helpShopping", dimension: "supportNeeds", label: "ต้องการช่วย: ซื้อของกิน/ของใช้จำเป็น", get: (r) => r.helpShopping },
  { key: "vulnerabilityLevel", dimension: "vulnerability", label: "ดัชนีระดับความเปราะบาง", get: (r) => r.vulnerabilityLevel, breakdown: true,
    order: ["เปราะบางระดับต่ำ","เปราะบางระดับปานกลาง","เปราะบางระดับสูง","เปราะบางระดับสูงมาก"],
    labelColors: { "เปราะบางระดับต่ำ": "hsl(329,25%,78%)", "เปราะบางระดับปานกลาง": "hsl(329,45%,60%)", "เปราะบางระดับสูง": "hsl(329,55%,50%)", "เปราะบางระดับสูงมาก": "hsl(329,60%,38%)" } },
];

export const BREAKDOWN_QUESTIONS = QUESTIONS.filter((q) => q.breakdown && !q.hidden);
