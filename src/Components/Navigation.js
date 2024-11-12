
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faCaretDown,
  faHouse,
  faChalkboardTeacher,
  faUserGraduate,
  faClipboardList,
  faMoneyBill,
  faCalculator,
  faClipboard,
  faCertificate,
  faGraduationCap,
  faBus,
  faMoneyBillAlt,
  faChartBar,
  faChartPie,
  faBullhorn,
  faComments,
  faSoccerBall,
  faUsers,
  faCog,
  faAddressBook,
  faBook,
  faClipboardUser,
  faPaperclip,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleVisibility = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle the navbar open/close state
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeNavbar = () => setIsNavbarOpen(false);


  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const renderSection = (sectionId, sectionTitle, links) => {
    return (
      <div className="text-white" key={sectionId}>
        <button
          className="w-full text-white text-left px-4 py-2 bg-transparent hover:bg-opacity-80 focus:outline-none"
          type="button"
          aria-expanded={activeSection === sectionId ? "true" : "false"}
          onClick={() => handleSectionToggle(sectionId)}
        >
          <div className="flex justify-between">
            <div>{sectionTitle}</div>
            <div>
              <FontAwesomeIcon className="text-white" icon={faCaretDown} />
            </div>
          </div>
        </button>
  
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeSection === sectionId ? "max-h-screen" : "max-h-0"
          }`}
          id={sectionId}
        >
          <ul className="pl-6 mt-2 space-y-2">
            {links.map((link, index) => (
              <li key={link.to}>
                <Link
                  to={`/usermanual/${link.to}`}
                  className="text-white no-underline hover:underline"
                  onClick={() => closeNavbar(link.to)}
                >
                  <button className="w-full text-left px-4 py-2 bg-transparent hover:bg-opacity-80 focus:outline-none">
                    {link.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  const sections = [
    {
id: "reception",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faHouse} /> <span /> Reception
  </div>
),
links: [
{
  to: "visitors-meeting",
  label: "Visitors Meeting"
},
{
  to: "phone-call-log",
  label: "Phone Call Log"
},
{
  to: "postal-dispatch",
  label: "Postal Dispatch"
},
{
  to: "postal-receive",
  label: "Postal Recieve"
},
{
  to: "online-complains-list",
  label: "Online Complains List"
},
{
  to: "configure-front-office",
  label: "Configure Front Office"
},
]
    },
    {
id: "staff",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faChalkboardTeacher} /> <span /> Staff
  </div>
),
links: [
{
  to: "teaching-staff",
  label: "Teaching Staff"
},
{
  to: "non-teaching-staff",
  label: "Non Teaching Staff"
},
{
  to: "staff-todos",
  label: "Staff Todo's"
},
{
  to: "staff-withdraw",
  label: "Staff Withdraw"
},
{
  to: "staff-review",
  label: "Staff Review"
},
{
  to: "feedback-list",
  label: "Feedback List"
},
]
    },
    {
id: "students",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faUserGraduate} /> <span /> Students
  </div>
),
links: [
{
  to: "new-admission",
  label: "New Admission"
},
{
  to: "students-list",
  label: "Students List"
},
{
  to: "online-admissions",
  label: "Online Admissions"
},
{
  to: "family-record",
  label: "Family Record"
},
{
  to: "promote-students",
  label: "Promote Students"
},
{
  to: "withdraw-students",
  label: "Withdraw Students"
},
{
  to: "passout-students",
  label: "Passout Students"
},
{
  to: "students-review",
  label: "Students Review"
},
{
  to: "feedback-record",
  label: "Feedback Record"
},
]
    },
    {
id: "attendance",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faClipboardUser} /> <span /> Attendance
  </div>
),
links: [
{
  to: "student-attendance",
  label: "Student Attendance"
},
{
  to: "staff-attendance",
  label: "Staff Attendance"
},
{
  to: "leave-request",
  label: "Leave Request"
}
]
    },
    {
id: "inventory",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faClipboardList} /> <span /> Inventory
  </div>
),
links: [
{
  to: "inventory",
  label: "Inventory"
},
{
  to: "purchase-inventory",
  label: "Purchase Inventory"
},
{
  to: "purchase-list",
  label: "Purchase List"
},
{
  to: "issue-inventory",
  label: "Issue Invetory"
},
{
  to: "invoice-list",
  label: "Invoice List"
},
{
  to: "supplier",
  label: "Supplier"
},
]
    },
    {
id: "fee",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faMoneyBill} /> <span /> Fee
  </div>
),
links: [
{
  to: "recieve-fee",
  label: "Receive Fee"
},
{
  to: "refund-payment",
  label: "Refund Payment"
},
{
  to: "update-fee",
  label: "Update Fee"
},
{
  to: "update-fee-list",
  label: "Update Fee List"
},
{
  to: "scholarship",
  label: "Scholarship"
},
{
  to: "fine-management",
  label: "Fine Management"
},
{
  to: "discounts",
  label: "Discounts"
},
{
  to: "student-account-adjust",
  label: "Student Account Adjust"
},
{
  to: "fee-comitment-list",
  label: "Fee Comitment List"
},
{
  to: "default-students",
  label: "Default Students"
},
]
    },
    {
id: "cycle",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faCalculator} /> <span /> Account Cycle
  </div>
),
links: [
{
  to: "calender",
  label: "Calender"
},
{
  to: "salary-cycle",
  label: "Salary Cycle"
},
{
  to: "generate-vouchers",
  label: "Generate Vouchers"
},
{
  to: "print-vouchers",
  label: "Print Vouchers"
}
]
    },
    {
id: "accounts",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCalculator} /> <span /> Accounts
  </div>
),
links: [
{
  to: "withdraw-amount",
  label: "Withdraw Amount"
},
{
  to: "students-account",
  label: "Students Account"
},
{
  to: "staff-account",
  label: "Staff Account"
},
{
  to: "supplier-account",
  label: "Supplier Account"
},
{
  to: "family-wise-account",
  label: "Family Wise Account"
},
{
  to: "salary-deduction",
  label: "Salary Deduction"
},
]
    },
    {
id: "exam",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCalculator} /> <span /> Exams
  </div>
),
links: [
{
  to: "configure-exams",
  label: "Configure Exams"
},
{
  to: "configure-papers",
  label: "Configure Papers"
},
{
  to: "date-sheet",
  label: "Date Sheet"
}
]
    },
    {
id: "result",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faClipboard} /> <span /> Result
  </div>
),
links: [
{
  to: "add-result",
  label: "Add Result"
},
{
  to: "subject-wise-result",
  label: "Subject Wise Result"
},
{
  to: "result-list",
  label: "Result List"
}
]
    },
    {
id: "certificate",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCertificate} /> <span /> Certificate
  </div>
),
links: [
{
  to: "configure-certificate",
  label: "Configure Certificate"
},
{
  to: "student-certificate",
  label: "Student Certificate"
},
{
  to: "staff-certificate",
  label: "Staff Certificate"
},
{
  to: "student-id-card",
  label: "Student ID Card"
},
{
  to: "staff-id-card",
  label: "Staff ID Card"
},
]
    },
    {
id: "academics",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faGraduationCap} /> <span /> Academics
  </div>
),
links: [
{
  to: "lesson-planning",
  label: "Lesson Planning"
},
{
  to: "home-work",
  label: "Home Work"
},
{
  to: "upload-material",
  label: "Upload Material"
},
{
  to: "summer-home-work",
  label: "Summer Home Work"
},
{
  to: "home-work-marking",
  label: "Home Work Marking"
},
{
  to: "home-work-marking-list",
  label: "Home Work Marking List"
},
{
  to: "class-time-table",
  label: "Class Time Table"
},
]
    },
    {
id: "lms",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faUserGraduate} /> <span /> LMS
  </div>
),
links: [
{
  to: "lecture",
  label: "Lecture"
},
{
  to: "courses",
  label: "Courses"
},
{
  to: "course-category",
  label: "Course Category"
}
]
    },
    {
id: "transport",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faBus} /> <span /> Transport
  </div>
),
links: [
{
  to: "routes",
  label: "Routes"
},
{
  to: "vehicles",
  label: "Vehicles"
},
{
  to: "assign-vehicles",
  label: "Assign Vehicles"
}
]
    },
    {
      id: "expenses",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faMoneyBillAlt} /> <span /> Expenses
        </div>
      ),
      links: [
        {
          to: "add-expense",
          label: "Add Expense",
        },
        {
          to: "manage-expense",
          label: "Manage Expense",
        },
        {
          to: "expence-category",
          label: "Expense Category",
        },
      ],
    },
    {
      id: "fixedassets",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faChartBar} /> <span /> Fixed Assets
        </div>
      ),
      links: [
        {
          to: "asset-type",
          label: "Asset Type",
        },
        {
          to: "assets",
          label: "Assets",
        },
      ],
    },
    {
      id: "announcement",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faBullhorn} /> <span /> Announcement
        </div>
      ),
      links: [
        {
          to: "news",
          label: "News",
        },
        {
          to: "notice",
          label: "Notice",
        },
      ],
    },
    {
      id: "communication",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faComments} /> <span /> Communication
        </div>
      ),
      links: [
        {
          to: "message",
          label: "Messages",
        },
        {
          to: "chat",
          label: "Chat",
        },
      ],
    },
    {
      id: "admission",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faAddressBook} /> <span /> Admission Test
        </div>
      ),
      links: [
        {
          to: "question-bank",
          label: "Question Bank",
        },
        {
          to: "class-wise-question",
          label: "Class Wise Question",
        },
      ],
    },
    {
      id: "managesports",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faSoccerBall} /> <span /> Manage Sports
        </div>
      ),
      links: [
        {
          to: "sports-type",
          label: "Sports Type",
        },
        {
          to: "sports-detail",
          label: "Sports Detail",
        },
      ],
    },
    {
      id: "usermanagement",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faUsers} /> <span /> User Management
        </div>
      ),
      links: [
        {
          to: "users",
          label: "Users",
        },
        {
          to: "roles",
          label: "Roles",
        },
      ],
    },
    {
      id: "Library",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faBook} /> <span /> Library
        </div>
      ),
      links: [
        {
          to: "library-books",
          label: "Library Books",
        },
        {
          to: "issue-books",
          label: "Issue Books",
        },
      ],
    },
    {
      id: "Generator",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faPaperclip} /> <span /> Paper Generator
        </div>
      ),
      links: [
        {
          to: "configure-chapter",
          label: "Configure Chapter",
        },
        {
          to: "configure-topic",
          label: "Configure Topic",
        },
        {
          to: "configure-question",
          label: "Configure Qusetion",
        },
        {
          to: "paper-generate",
          label: "Paper Generate",
        },
      ],
    },
    {
      id: "Website",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faSitemap} /> <span /> Website
        </div>
      ),
      links: [
        {
          to: "events",
          label: "Events",
        },
        {
          to: "visit-website",
          label: "Visit Website",
        },
        {
          to: "home",
          label: "Front Website Home",
        },
        {
          to: "about-us",
          label: "About Us",
        },
        {
          to: "gallery",
          label: "Gallery",
        },
      ],
    },
    {
      id: "configuration",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faCog} /> <span /> Configuration
        </div>
      ),
      links: [
        {
          to: "classes",
          label: "Classes",
        },
        {
          to: "sections",
          label: "Sections",
        },
        {
          to: "nationality",
          label: "Nationality",
        },
        {
          to: "religion",
          label: "Religion",
        },
        {
          to: "assign-classes",
          label: "Assign Classes",
        },
        {
          to: "designation",
          label: "Designation",
        },
        {
          to: "subject",
          label: "Subject",
        },
        {
          to: "assign-subject",
          label: "Assign Subject",
        },
        {
          to: "sibling-discount",
          label: "Sibling Discount",
        },
        {
          to: "school-timing",
          label: "School Timing",
        },
        {
          to: "school-manage",
          label: "School Manage",
        },
        {
          to: "configure-scholarship",
          label: "Configure Scholarship",
        },
        {
          to: "configure-fee-recipients",
          label: "Configure Fee Recipients",
        },
        {
          to: "access-control",
          label: "Access Control",
        },
        {
          to: "configure-fee",
          label: "Configure Fee",
        },
        {
          to: "configure-salary",
          label: "Configure Salary",
        },
      ],
    },
    {
      id: "reports",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faChartPie} /> <span /> Reports
        </div>
      ),
      links: [
        {
          to: "student-attendnce",
          label: "Student Attendance Report",
        },
        {
          to: "staff-attendnce",
          label: "Staff Attendance Report",
        },
        {
          to: "students-report",
          label: "Students Report",
        },
        {
          to: "staff-report",
          label: "Staff Report",
        },
        {
          to: "staff-accounts",
          label: "Staff Accounts",
        },
        {
          to: "student-accounts",
          label: "Student Accounts",
        },
        {
          to: "student-recieveables",
          label: "Student Receiveables",
        },
        {
          to: "staff-recieveables",
          label: "Staff Receiveables",
        },
        {
          to: "general-ledger",
          label: "General Ledger",
        },
        {
          to: "fee-report",
          label: "Fee Report",
        },
        {
          to: "transport-fee-report",
          label: "Transport Fee Report",
        },
        {
          to: "inventory-fee-repport",
          label: "Inventory Fee Report",
        },
        {
          to: "fee-detailed-report",
          label: "Fee Detailed Report",
        },
        {
          to: "salary-paid",
          label: "Salary Paid",
        },
        {
          to: "student-feedback",
          label: "Student Feedback",
        },
        {
          to: "teacher-feedback",
          label: "Teacher Feedback",
        },
        {
          to: "postal-report",
          label: "Postal Report",
        },
        {
          to: "visitors-report",
          label: "Visitors Report",
        },
        {
          to: "student-review-report",
          label: "Student Review Report",
        },
        {
          to: "staff-review-report",
          label: "Staff Review Report",
        },
        {
          to: "leave-report",
          label: "Leave Report",
        },
        {
          to: "inventory-report",
          label: "Inventory Report",
        },
        {
          to: "library-report",
          label: "Library Report",
        },
        {
          to: "expense-report",
          label: "Expense Report",
        },
        {
          to: "day-book",
          label: "Day Book",
        },
        {
          to: "profit & loss",
          label: "Profit & Loss",
        },
        {
          to: "transreport-report",
          label: "Transport Report",
        },
      ],
    },
  ];
  return (
    <div>
    {isSmallScreen && (
      <nav
        className={`${
          isSmallScreen ? "" : "hidden md:block"
        }`}
      >
        <div className="container flex w-full justify-around items-center mx-auto px-4">
          <a className="text-white font-bold text-xl" href="#/">
            Software User Guide
          </a>
          <button
            className={`${
              isNavbarOpen ? "rotate-180" : ""
            } text-white ml-auto`}
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={toggleNavbar}
            type="button"
            aria-controls="navbarContent"
            aria-label="Toggle navigation"
          >
            <span className="text-white">☰</span>
          </button>
        </div>
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } transition-all duration-300 ease-in-out`}
            id="navbarContent"
          >
            <div className="space-y-2 mt-4">
              <div>
                <Link className="text-white" to="/usermanual/dashboard">
                  <button
                    className="w-full text-left px-4 py-2 bg-transparent text-white"
                    type="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={closeNavbar}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHouse} />
                      <span className="ml-2">Dashboard</span>
                    </div>
                  </button>
                </Link>
                {sections.map((section) =>
                  renderSection(section.id, section.title, section.links)
                )}
              </div>
            </div>
          </div>
      </nav>
    )}
    {!isSmallScreen && (
      <div>
        <Link className="text-white" to="/usermanual/dashboard">
          <button
            className="w-full text-left px-4 py-2 bg-transparent text-white"
            type="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={closeNavbar}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHouse} />
              <span className="ml-2">Dashboard</span>
            </div>
          </button>
        </Link>
        {sections.map((section) =>
          renderSection(section.id, section.title, section.links)
        )}
      </div>
    )}
  </div>
  
  );
}

export default Navigation;
