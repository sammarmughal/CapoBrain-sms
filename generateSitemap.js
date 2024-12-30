const fs = require("fs");
const routes = [
  "/",
  "/about/",
  "/features/",
  "/features/cloud-based-school-management-system",
  "/features/cutting-edge-educational-technologies",
  "/features/computer-based-exam-management",
  "/features/ai-powered-reporting-analytics",
  "/features/data-security",
  "/features/students-and-parent-portals",
  "/features/online-daily-diary-feature",
  "/features/school-management-mobile-app",
  "/features/mobile-app-support",
  "/features/biometric-attendance",
  "/features/fee-and-payment-management",
  "/features/inventory-management",
  "/features/student-and-staff-management-with-task-assignments",
  "/features/reminders-for-fee-collection",
  "/features/expense-and-financial-administration",
  "/features/auto-paper-generation",
  "/features/streamlined-exam-grading-results-management",
  "/features/comprehensive-reporting",
  "/features/multi-campus-integration",
  "/features/school-website-management",
  "/features/transport-management-system",
  "/features/real-time-notifications",
  "/features/admission-test-automation",
  "/features/time-table-and-scheduling-management-system",
  "/features/teacher-portal",
  "/features/reception-management",
  "/features/summer-task-resources-management",
  "/features/parent-teacher-communication-portal",
  "/features/salary-advance-loan-management-system",
  "/features/certificates-id-card-generation-tool",
  "/features/comprehensive-library-management-with-digital-integration",
  "/features/integration-with-third-party-educational-tools-apis",
  "/features/interactive-learning-guidelines",
  "/features/role-based-access-control-for-secure-user-management",
  "/features/seamless-integration-with-modern-educational-tools",
  "/features/sports-and-extra-curricular-activities-management",
  "/features/student-progress-performance-tracking",
  "/usermanual/",
  "/usermanual/dashboard/",
  "/usermanual/visitors-meeting",
  "/usermanual/phone-call-log",
  "/usermanual/postal-dispatch",
  "/usermanual/postal-receive",
  "/usermanual/online-complains-list",
  "/usermanual/configure-front-office",
  "/usermanual/teaching-staff",
  "/usermanual/non-teaching-staff",
  "/usermanual/staff-todos",
  "/usermanual/staff-withdraw",
  "/usermanual/staff-review",
  "/usermanual/feedback-list",
  "/usermanual/new-admission",
  "/usermanual/students-list",
  "/usermanual/online-admissions",
  "/usermanual/family-record",
  "/usermanual/promote-students",
  "/usermanual/withdraw-students",
  "/usermanual/passout-students",
  "/usermanual/students-review",
  "/usermanual/feedback-record",  
  "/blog/",
  "/blog/educational-software-excellence-optimal-features-for-learning",
  "/blog/campus-management-systems-elevating-excellence",
  "/blog/overhauling-with-capobrain-education-management-system",
  "/blog/school-management-software-the-power-of-an-ideal-solution",
  "/blog/free-school-management-software-by-capobrain",
  "/blog/school-administration-software-optimizing-school-management",
  "/blog/college-management-system-navigating-efficiency-in-education",
  "/blog/university-management-software-shaping-higher-education",
  "/blog/exam-management-system-a-new-era-in-academic-evaluation",
  "/blog/cloud-based-optimization-in-web-based-management-systems",
  "/blog/computer-based-exam-shaping-the-future-of-digital-learning",
  "/blog/digital-reporting-a-symphony-of-innovation-in-education",
  "/blog/biometric-attendance-altering-biometric-verification-in-education",
  "/blog/empowering-minds-the-power-of-mobile-apps-for-learning",
  "/blog/data-protection-software-of-capobrain-safeguarding-education",
  "/blog/decoding-progress-the-essence-of-evaluation-in-education",
  "/blog/real-time-updates-whatsapp-s-instant-insights-in-education",
  "/blog/bridging-the-gap-parent-teacher-communication",
  "/blog/role-of-teachers-teacher-management-information-system",
  "/blog/school-accounting-software-streamlining-finances-with-capobrain-s-salary-fee-management-feature",
  "/blog/exams-management-system-streamlining-educational-processes-with-capobrain",
  "/blog/inventory-management-made-easy-with-capobrain-enhancing-educational-operations",
  "/blog/school-mobile-app-revolutionizing-school-management-with-capobrain",
  "/blog/education-erp-excellence-exploring-capobrain-as-the-standard-solution",
  "/blog/enterprise-learning-management-systems-enhancing-training-efficiency-with-capobrain-and-beyond",
  "/blog/maximizing-school-budget-management-efficiency-with-capobrain-school-management-software",
  "/blog/technology-in-education-transforming-learning-with-capobrain-school-management-software",
  "/blog/campus-management-software-enhancing-educational-excellence-with-capobrain",
  "/blog/library-management-system-enhancing-efficiency-in-school-and-college-libraries",
  "/contact/",
  "/help/",
  "/faq/",
  "/privacy-policy",
  "/term-and-services"
];

// function generateXml(urls) {
//   const xml = `
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${urls.map((url) => `<url><loc>${url}</loc></url>`).join("\n")}
//     </urlset>
//   `;
//   return xml;
// }
function generateXml(urls) {
  const today = new Date().toISOString().split("T")[0];


  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === "https://capobrain.com" ? "1.0" : "0.8"}</priority>
  </url>
  `
  )
  .join("\n")}
</urlset>
  `.trim();
}

function generateSitemap() {
  const fullUrls = routes.map((route) => `https://capobrain.com${route}`);
  const xmlContent = generateXml(fullUrls);
  const sitemapPath = "./public/sitemap.xml";
  fs.writeFileSync(sitemapPath, xmlContent);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

generateSitemap();
