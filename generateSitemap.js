const fs = require("fs");

// List your React app routes here
const routes = [
  "/",
  "/about",
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
  "/usermanual",
  "/usermanual/dashboard",
  "/usermanual/visitors-meeting",
  "/usermanual/phone-call-log",
  "/usermanual/postal-dispatch",
  "/usermanual/postal-recieve",
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
  "/blog",
  "/contact",
  "/demo",
  "/help",
  "/faq",
];

function generateXml(urls) {
  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((url) => `<url><loc>${url}</loc></url>`).join("\n")}
    </urlset>
  `;
  return xml;
}

function generateSitemap() {
  const fullUrls = routes.map((route) => `https://capobrain-sms.vercel.app${route}`);
  const xmlContent = generateXml(fullUrls);

  // Write the XML content to a file
  const sitemapPath = "./public/sitemap.xml"; // Adjust the path as needed
  fs.writeFileSync(sitemapPath, xmlContent);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Run the function
generateSitemap();
