

import create from "@ant-design/icons/lib/components/IconFont";
import Allproducts from "../CRMBPAV/Allproducts";
import CRMInvoiceCard from "../CRMBPAV/CRMInvoiceCard";
import Inventory from "../Inventory/Inventory";
import calendarnote from "../mainMenu/apps/calendarnote";




import Todo from "../mainMenu/todo/todo";
import { projectlistdetails } from "../../core/data/json/projectlistdetails";

export const all_routes = {
  // dashboard routes
  // home: "/index",
  // adminDashboard: "/index",
  login: "/login",
  homedashboard:"/index",
  adminDashboard: "/admin",
  employeeDashboard: "/employee-dashboard",
  leadsDashboard: "/leads-dashboard",
  dealsDashboard: "/deals-dashboard",


  //user route 
  superadmin: "/super-admin",
  


  //Application routes
  chat: "/application/chat",
  voiceCall: "/application/voice-call",
  videoCall: "/application/video-call",
  outgoingCall: "/application/outgoing-call",
  incomingCall: "/application/incoming-call",
  callHistory: "/application/call-history",
  // todo: "/application/todo",
  // todoTabal: "/application/todoTabal",
  // TodoList: "/application/todo-list",
  email: "/application/email",
  EmailReply: "/application/email-reply",
  audioCall: "/application/audio-call",
  fileManager: "/application/file-manager",
  socialFeed: "/application/social-feed",
  kanbanView: "/application/kanban-view",
  invoice: "/application/invoices",

  //super admin module
  superAdminDashboard: "/super-admin/dashboard",
  superAdminCompanies: "/super-admin/companies",
  superAdminSubscriptions: "/super-admin/subscription",
  superAdminPackages: "/super-admin/package",
  superAdminPackagesGrid: "/super-admin/package-grid",
  superAdminDomain: "/super-admin/domain",
  superAdminPurchaseTransaction: "/super-admin/purchase-transaction",

  calendar: "/calendar",
  calendarnote: "/calendarnote",
  todo: "/todo",
  todoTable: "todoTable",
  TodoList: "/todo-list",
  todokanban: "/todokanban",
  addtask: "/todo/addtask",
  dataTables: "/data-tables",
  tablesBasic: "/tables-basic",
  notes: "/notes",
  noteslist: "/noteslist",
  notesapp: "/notesapp",
   //Projects
  //  projectlist: "/projectlist",
   projectdashboard: "/project/projectdashboard",
   projectlist: "/project/projectlist",
   scheduling: "/project/scheduling",
   scheduletimeline: "/project/scheduletimeline",
   allprojectscheduling: "/project/allproject",
   workload: "project/workload",
   projectkanban: "project/kanban",


   // hr
    hrdashboard: "/hr/dashboard",
    hrmyprofile: "/hr/myprofile",
    performance: "/hr/performance",
    recruitment: "/hr/recruitmentkanban",
    candidatelist: "/hr/candidatelist",
    organization: "/hr/organization",
    roadmap: "/hr/roadmap",
    mygoals: "/hr/mygoals",
    newgoal : "/hr/goal",
    compensation:  "/hr/compensation",
    individualcandidatepage: "/hr/individualcandidatepage",
    candidatescorecard: "/hr/candidatescorecard",
    employeecalendar: '/hr/employeecalendar',
    goals: "/hr/goals",
    hrorgdashboard: "/hr/employeelist",
    documents: "/hr/documents",
    employeesalary: "/hr/employeesalary",
    payslip: "/hr/payslip",
    payrollAddition: "/hr/payroll",
    payrollOvertime: "/hr/payroll-overtime",
    payrollDeduction: "/hr/payroll-deduction",
    departmentlist: "/hr/departments",
    designations: "/hr/designations",

    //Finance
    accountspayable: "/finance/accountspayable",
    homeincoming: "/finance/accountsrecievable",
    salesoverview: "/finance/salesoverview",
    allstatementsf: "/finance/allstatementsf",
    allinvoices: "/finance/allinvoices",
    allquotesf: "/finance/allquotes",
    allbills: "/finance/allbills",
    allremitance: "/finance/allremitances",
   allcreditnote: "/finance/allcreditnote",
    createbill: "/finance/createbill",
    createremitance: "/finance/createremitance",
    createcreditnote: "/finance/createcreditnote",
    expenses: "/finance/expenses",
    purchaselist: "/finance/purchaselist",
    newpurchaseorder: "/finance/newpurchaseorder",
    expenseclaim: "/finance/expenseclaim",
    milageclaim: "/finance/milageclaim",


    //CRM
    crmdashboard : "/crm/dashboard",
    crmanalytics: "/crm/analytics",
    crminvoiceCard: "/crm/crminvoicecard",
    allquotes: "/crm/allquotes",
    allproducts: "/crm/allproducts",
    payment: "/crm/payment",
    dealskanban: "/crm/dealskanban",
    allpayments: "/allpayments",
    createpayments: "/createpayments",
    setting: "/crm/setting",
    paymentlink1: "/payment/paymentlink1",
    crmallproduct: "/crmallproduct",
    invoicecard: "/crm/invoicecard",
    newinvoice: "/crm/newinvoice",
    newinvoice1: "/crm/newinvoice1",
    invoicem: "/crm/invoicem",
    companiescard: "/crm/companiescard",
    contactlists: "/crm/contactlists",
    companies: "/crm/companies",
    createquote: "/crm/createquote",
    dealscard: "/crm/dealscard",


 // Support HUB 
   supportdashboard: "/support/dashboard",
   supportsummary: "/support/summary",
   analytic: "/support/analytic",
   ticketcard: "/support/ticketcard",
   settings: "/support/settings",
   supportanalytics: "/support/analytics",
   knowledgebase: "/support/knowledgebase",
   feedback: "/support/feedback",
   alltickets: "/support/alltickets",



   

   //Inventory
   inventorydashboard: "/inventory/dashboard",
  //  inventorysidebar:"/inventory/sidebar",
   inventoryorders: "/inventory/inventoryorders",
   invcalendar: "/inventory/calendar",
   invordercard: "/inventory/ordercard",
   inventorylist: "/inventory/orderlist",
   inventoryitemcard:  "/inventory/itemcard",
   inventorycustomers: "/inventory/customers",
   


   

  //page module
  starter: "/starter",
  profile: "/pages/profile",
  gallery: "/gallery",
  searchresult: "/search-result",
  timeline: "/timeline",
  pricing: "/pricing",
  comingSoon: "/coming-soon",
  underMaintenance: "/under-maintenance",
  underConstruction: "/under-construction",
  error404: "/error-404",
  error500: "/error-500",
  apikey: "/api-keys",
  privacyPolicy: "/privacy-policy",
  termscondition: "/terms-condition",

  // auth routes routes
  // login: "/login",
  login2: "/login-2",
  login3: "/login-3",
  register: "/register",
  register2: "/register-2",
  register3: "/register-3",
  forgotPassword: "/forgot-password",
  forgotPassword2: "/forgot-password-2",
  forgotPassword3: "/forgot-password-3",
  twoStepVerification: "/two-step-verification",
  twoStepVerification2: "/two-step-verification-2",
  twoStepVerification3: "/two-step-verification-3",
  success: "/success",
  emailVerification: "/email-verification",
  emailVerification2: "/email-verification-2",
  emailVerification3: "/email-verification-3",
  lockScreen: "/lock-screen",
  resetPassword: "/reset-password",
  resetPassword2: "/reset-password-2",
  resetPassword3: "/reset-password-3",
  resetPasswordSuccess: "/success",
  resetPasswordSuccess2: "/success-2",
  resetPasswordSuccess3: "/success-3",

  //ui routes
  alert: "/ui-alert",
  accordion: "/ui-accordion",
  avatar: "/ui-avatar",
  badges: "/ui-badges",
  border: "/ui-border",
  breadcrums: "/ui-breadcrums",
  button: "/ui-buttons",
  buttonGroup: "/ui-button-group",
  cards: "/ui-cards",
  carousel: "/ui-carousel",
  colors: "/ui-colors",
  dropdowns: "/ui-dropdowns",
  grid: "/ui-grid",
  images: "/ui-images",
  lightbox: "/ui-lightbox",
  media: "/ui-media",
  modals: "/ui-modals",
  navTabs: "/ui-navtabs",
  offcanvas: "/ui-offcanvas",
  pagination: "/ui-pagination",
  placeholder: "/ui-placeholder",
  popover: "/ui-popover",
  progress: "/ui-progress",
  rangeSlider: "/ui-rangeslider",
  spinner: "/ui-spinner",
  sweetalert: "/sweetalert",
  toasts: "/ui-toasts",
  tooltip: "/ui-tooltip",
  typography: "/ui-typography",
  video: "/ui-video",
  clipboard: "/ui-clipboard",
  counter: "/ui-counter",
  dragandDrop: "/ui-drag-drop",
  rating: "/ui-rating",
  ribbon: "/ui-ribbon",
  stickyNotes: "/ui-sticky-notes",
  textEditor: "/ui-text-editor",
  timeLine: "/ui-timeline",
  scrollBar: "/ui-scrollbar",
  apexChart: "/ui-apexchart",
  primeChart: "/ui-prime-chart",
  chartJs: "/ui-chart-js",

  chart: "/ui-chartjs",
  featherIcons: "/ui-feather-icon",
  falgIcons: "/ui-flag-icon",
  fontawesome: "/ui-fontawesome",
  materialIcon: "/ui-material-icon",
  pe7icon: "/ui-icon-pe7",
  simpleLineIcon: "/ui-simpleline",
  themifyIcon: "/ui-themify",
  typicon: "/ui-typicon",
  weatherIcon: "/ui-weather-icon",
  basicInput: "/forms-basic-input",
  checkboxandRadion: "/form-checkbox-radios",
  inputGroup: "/form-input-groups",
  gridandGutters: "/form-grid-gutters",
  formSelect: "/form-select",
  formMask: "/form-mask",
  fileUpload: "/form-fileupload",
  horizontalForm: "/form-horizontal",
  formPicker: "/form-pickers",
  verticalForm: "/form-vertical",
  floatingLable: "/form-floating-labels",
  formValidation: "/form-validation",
  reactSelect: "/select",
  formWizard: "/form-wizard",
  iconicIcon: "/icon-ionic",
  sortable: "/ui-sortable",
  swiperjs: "/ui-swiperjs",
  bootstrapIcons: "/icon-bootstrap",
  RemixIcons: "/icon-remix",
  FlagIcons: "/icon-flag",

  //base-ui
  uiAlerts: "/ui-alerts",
  uiAccordion: "/ui-accordion",
  uiAvatar: "/ui-avatar",
  uiBadges: "/ui-badges",
  uiBorders: "/ui-borders",
  uiButtons: "/ui-buttons",
  uiButtonsGroup: "/ui-buttons-group",
  uiBreadcrumb: "/ui-breadcrumb",
  uiCards: "/ui-cards",
  uiCarousel: "/ui-carousel",
  uiColor: "/ui-color",
  uiDropdowns: "ui-dropdowns",

  //Maps
  mapLeaflet: "/map-leaflet",




  // settings routes
  customFields: "/app-settings/custom-fields",
  invoiceSettings: "/app-settings/invoice-settings",

  currencies: "/financial-settings/currencies",
  paymentGateways: "/financial-settings/payment-gateways",
  taxRates: "/financial-settings/tax-rates", 

  schoolSettings: "/academic-settings/school-settings",
  religion: "/academic-settings/religion",

  connectedApps: "/general-settings/connected-apps",
  notificationssettings: "/general-settings/notifications-settings",
  profilesettings: "/general-settings/profile-settings",
  securitysettings: "/general-settings/security-settings",

  bussinessSettings : "/website-settings/bussiness-settings",
  seoSettings: "/website-settings/seo-settings",
  localizationSettings: "/website-settings/localization-settings",
  prefixes: "/website-settings/prefixes",
  preference: "/website-settings/preferences",
  appearance: "/website-settings/appearance",
  authenticationSettings: "/website-settings/authentication-settings",
  aiSettings: "/website-settings/ai-settings",

  salarySettings: "/app-settings/salary-settings",
  approvalSettings: "/app-settings/approval-settings",
  leaveType: "/app-settings/leave-type",

  banIpAddress: "/other-settings/ban-ip-address",
  customCss: "/other-settings/custom-css",
  customJs: "/other-settings/custom-js",
  cronjob: "/other-settings/cronjob",
  Cronjobschedule: "/other-settings/cronjob-schedule",
  storage: "/other-settings/storage-settings",
  backup: "/other-settings/backup",
  clearcache: "/other-settings/clear-cache",

  emailSettings: "/system-settings/email-settings",
  emailTemplates: "/system-settings/email-templates",
  gdprCookies: "/system-settings/gdpr-cookies",
  smsSettings: "/system-settings/sms-settings",
  smsTemplate: "/system-settings/sms-template",
  otpSettings: "/system-settings/otp-settings",
  maintenanceMode: "/system-settings/maintenance-mode",

  socialAuthentication: "/website-settings/social-authentication",
  companySettings: "/website-settings/company-settings",
  language: "/website-settings/language",
  addLanguage: "/website-settings/add-language",
  languageWeb: "/website-settings/language-web",
  localization: "/website-settings/localization",


  //content routes
  pages: "/content/pages",
  countries: "countries",
  states: "/content/states",
  cities: "/content/cities",
  testimonials: "testimonials",
  faq: "faq",





  // blog
  blogs: "blogs",
  blogCategories: "blog-categories",
  blogComments: "blog-comments",
  blogTags: "blog-tags",

  //userManagement routes
  deleteRequest: "/user-management/delete-request",
  rolesPermissions: "/user-management/roles-permissions",
  manageusers: "/user-management/manage-users",
  permissions: "/user-management/permissions",

  //support routes
  contactMessages: "/support/contact-messages",
  tickets: "/tickets/ticket-list",
  ticketGrid: "/tickets/ticket-grid",
  ticketList: "/support/ticket-list",
  ticketDetails: "/tickets/ticket-details",

  // Performance

  performanceIndicator: "/performance/performance-indicator",
  performanceReview: "/performance/performance-review",
  performanceAppraisal: "/preformance/performance-appraisal",
  goalTracking: "/performance/goal-tracking",
  goalType: "/performance/goal-type",

  // Training

  trainingList: "/training/training-list",
  trainers: "/training/trainers",
  trainingType: "/training/training-type",

  // membership routes
  membershipplan: "/membership-plans",
  membershipAddon: "/membership-addons",
  membershipTransaction: "/membership-transactions",

  layoutDefault: "/layout-default",
  layoutMini: "/layout-mini",
  layoutRtl: "/layout-rtl",
  layoutBox: "/layout-box",
  layoutDark: "/layout-dark",
  Horizontal: "/layout-horizontal",
  Detached: "/layout-detached",
  Hovered: "/layout-hovered",
  Boxed: "/layout-box",
  Modern: "/layout-modern",
  TwoColumn: "/layout-twocolumn",
  HorizontalSingle: "/layout-horizontal-single",
  HorizontalOverlay: "/layout-horizontal-overlay",
  HorizontalBox: "/layout-horizontal-box",
  MenuAside: "/layout-horizontal-sidemenu",
  Transparent: "/layout-transparent",
  WithoutHeader: "/layout-without-header",
  RTL: "/layout-rtl",
  Dark: "/layout-dark",

  // finance & accounts routes
  accountsIncome: "/accounts/accounts-income",
  accountsInvoices: "/accounts/accounts-invoices",
  accountsTransactions: "/accounts/accounts-transactions",
  expense: "/accounts/expense",
  expenseCategory: "/accounts/expense-category",
  
  addInvoice: "/accounts/add-invoice",
  editInvoice: "/accounts/edit-invoice",
  categories: "/accounting/categories",
  budgets: "/accounting/budgets",
  budgetexpenses: "/accounting/budgets-expenses",
  budgetrevenues: "accounting/budget-revenues",




  //crm

  clientgrid: "/clients-grid",
  clientlist: "/clients",
  clientdetils: "/clients-details",
  project: "/projects-grid",
  // projectlist: "/projects",
  projectdetails: "/projects-details",
  tasks: "/tasks",
  tasksdetails: "/task-details",
  taskboard: "/task-board",
  contactGrid: "/contact-grid",
  contactList: "/contact-list",
  contactDetails: "/contact-details",
  companiesGrid: "/companies-grid",
  companiesList: "/companies-list",
  companiesDetails: "/companies-details",
  dealsGrid: "/deals-grid",
  dealsList: "/deals-list",
  dealsDetails: "/deals-details",
  leadsList: "/leads-list",
  leadsGrid: "/leads-grid",
  leadsDetails: "/leads-details",
  pipeline: "/pipeline",
  analytics: "/analytics",
  activities: "/",


  //HRM
  employeeList: "/employees",
  employeeGrid: "/employees-grid",
  departments: "/departments",
  // designations: "/designations",
  policy: "/policy",
  holidays: "/hrm/holidays",
  leaveadmin: "/leaves",
  leaveemployee: "/leaves-employee",
  leavesettings: "/leave-settings",
  attendanceadmin: "/attendance-admin",
  attendanceemployee: "hr/attendance-employee",
  timesheet: "/timesheets",
  scheduletiming: "/schedule-timing",
  overtime: "/overtime",
  promotion: "/promotion",
  resignation: "/resignation",
  termination: "/termination",
  // RECRUITMENT
  jobgrid: "/job-grid",
  joblist: "/job-list",
  candidatesGrid: "/candidates-grid",
  candidateslist: "/candidates",
  candidateskanban: "/candidates-kanban",
  refferal: "/refferals",
  //FINANCE & ACCOUNTS
  estimate: "/estimates",
  invoices:"/invoices",
  addinvoice:"/add-invoices",
  editinvoice:"/edit-invoices",
  invoicesdetails:"/invoice-details",
  payments: "/payments",
  // expenses: "/expenses",
  providentfund: "/provident-fund",
  taxes: "/taxes",
  invoiceDetails: "/invoice-details",
  // employeesalary: "/employee-salary",
  // payslip: "/payslip",
  // payrollAddition: "/payroll",
  // payrollOvertime: "/payroll-overtime",
  // payrollDeduction: "/payroll-deduction",
  //ADMINISTRATION
  // knowledgebase: "/knowledgebase",
  activity: "/activity",
  users: "/users",
  rolePermission: "/roles-permissions",
  permissionpage: "/permission",
  assetCategories: "/asset-categories",
  assetList: "/assets",
  //Report
  expensesreport: "/expenses-report",
  invoicereport: "/invoice-report",
  paymentreport: "/payment-report",
  projectreport: "/project-report",
  taskreport: "/task-report",
  userreport: "/user-report",
  employeereport: "/employee-report",
  employeedetails: "/employee-details",
  payslipreport: "/payslip-report",
  attendancereport: "/attendance-report",
  leavereport: "/leave-report",
  dailyreport: "/daily-report",





};
