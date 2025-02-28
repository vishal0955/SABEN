import { useLocation } from "react-router";
import { all_routes } from "../../../feature-module/router/all_routes";
import { route } from "../../common/selectoption/selectoption";

const routes = all_routes;



export const SidebarDataTest = [


  {
    tittle: 'Main Menu',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      // {
      //   label: 'Home',
      //   link: 'index',
      //   submenu: false,
      //   showSubRoute: false,
      //   base: 'dashboard',
      //   materialicons: 'start',
      //   dot: true,
      // },
        // submenuItems: [
        //   { label: "Admin Dashboard", link: routes.adminDashboard },
        //   { label: "Employee Dashboard", link: routes.employeeDashboard },
        //   { label: "Deals Dashboard", link: routes.dealsDashboard },
        //   { label: "Leads Dashboard", link: routes.leadsDashboard },

        // ],
        {
          label: 'Home',
          link: 'index',
         
          submenu: true,
          showSubRoute: false,
          icon: 'smart-home',
          base: 'homedashboard',
          materialicons: 'start',
          customSubmenuTwo: false,
          submenuItems: [
            {
              label: 'Dashboard',
              link: routes.homedashboard,
              base: 'homedashboard',
              materialicons: 'start',
            },
            {
              label: 'Calendar',
              link: routes.calendar,
              base: 'calendar',
              materialicons: 'confirmation_number',
            },
            
            // {
  
            //   label: 'Booking Link',
            // },
            {

              label: 'To Do',
              link: routes.todo,
              base: 'home',
              materialicons: 'confirmation_number',
            },
            {

              label: 'Notes',
              link: routes.notes,
              base: 'home',
              materialicons: 'confirmation_number',
            },
  // customSubmenuTwo: false,
          ],  
        },
        {
          label: 'Projects',
          link: routes.projectdashboard,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
          base: 'projectdashboard',
          materialicons: 'topic',
          submenuItems: [
            {
              label: 'Dashboard',
              link:routes.projectdashboard,
              base: 'project-grid',
              base2: 'project-list',
              base3: 'project-details',
            },
            { label: 'All Projects',
               link: routes.allprojectscheduling,
                base: 'tasks'
               },
            {
              label: 'Scheduling',
              link: routes.scheduletimeline,
              base: 'project',
            },
            {
              label: 'Workload',
              link: routes.workload,
              base: 'project',
            },
          ],
        },

        {
          label: 'HR',
          link: routes.hrdashboard,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
          base: 'homedashboard',
          // materialicons: 'topic',
          submenuItems: [
            {
              label: 'Employee Setup',
              link: routes.hrorgdashboard,
            },
            {
              label: "Department",
              link: routes.departmentlist,
            },
            {
              label:"Designation",
              link: routes.designations,
            },
            {
              label: 'Payroll',
              base: 'hrorgdashboard',
              submenu: true,
              showSubRoute: false,
              icon: 'cash',
              submenuItems: [
                {
                  label: 'Employee Salary',
                  link: routes.employeesalary,
                  base: 'employeesalary',
                },
                {
                  label: 'Payslip',
                  link: routes.payslip,
                  base: 'payslip',
                },
                {
                  label: 'Payroll Items',
                  link: routes.payrollAddition,
                  base: 'payroll-items',
                },
                {
                  label: 'Admin Attendance',
                  link: routes.attendanceadmin,
                  base: 'attendanceadmin',
                },

              ],
            },
            {
              label: 'Attendence',
              base: 'hrorgdashboard',
              submenu: true,
              showSubRoute: false,
              icon: 'cash',
              submenuItems: [
                {
                  label: ' Attendance',
                  link: routes.attendanceadmin,
                  base: 'attendanceadmin',
                },
                {
                  label: 'Leave  ',
                  link: routes.employeecalendar,
                  base: 'attendanceadmin',
                },


              ]


            },
        //  PRoject Manager Dashborad as in miro
            // {
            //   label: 'Dashboard',
            //   link: routes.hrdashboard ,
            // },
            // { label: 'My Profile',
            //    link: routes.hrmyprofile,
            //  },
            //  {
            //   label: 'People',
            //    link: routes.employeecalendar,
            // },
            {
              label: 'Performance',
              link: routes.performance,
         
            },
            {
              label: 'Recruitment',
              link: routes.recruitment,
            },
            // {
            //   label: 'Company',
            //   link: routes.organization,
            // },
          
        

          ],
        },
        {
          label: 'Finance',
          link: routes.accountspayable,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
          base: 'homedashboard',
          // materialicons: 'topic',
          submenuItems: [
           
            {
              label: 'Accounts Payable',
              link: routes.accountspayable,
              submenu: false,
              showSubRoute: false,
              base: 'Sales Finance',
            },
            {
              label: 'Accounts Receivable',
              link: routes.homeincoming,
              submenu: false,
              showSubRoute: false,
              base: 'Sales overview',
            },
            {
               label: 'Products',
               link: routes.allproducts,
            },
          //   {
          //     label: 'Customers',
          //     link: routes.companies,
          //   },
          //   {
          //     label: 'Suppliers',
          //     link: routes.companies,
          //  },
          ],
        },

        {
          label: 'CRM',
          link: routes.homedashboard,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
          base: 'homedashboard',
          // materialicons: 'topic',
          submenuItems: [
            {
              label: 'Dashboard',
              link: routes.homedashboard,
            },
            { label: 'Contacts',
               link: routes.contactlists,
             },
            {
              label: 'Companies',
              link: routes.companies,
              
            },
            {
              label: 'Deals',
              link: routes.dealskanban,
            },
            {
              label: 'Quotes',
              link: routes.allquotes,
              base:'crm',
            },          
            {
              label: 'Analytics',
              link: routes.crmanalytics,
            },
          ],
        },

        {
          label: 'Support Desk',
              link: routes.supportdashboard,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
           base: 'support',
           materialicons: 'topic',
          submenuItems: [
            {
              //Dashboard  not working fine bar graph issue
              label: 'My Dashboard',
              link: routes.supportdashboard,
            },
            { label: 'Analytics',
               link: routes.supportanalytics,
             },
            {
              label: 'All Tickets',
              link: routes.alltickets,
            },
           
            {
              label: 'Settings',
              link: routes.settings,
            }
          ],
        },

        {
          label: 'BPAV Social',
          link: routes.socialFeed,
          // submenu: true,
          showSubRoute: false,
          icon: 'box',
          base: 'homedashboard',
          // materialicons: 'topic',
      
        },
        {
          label: 'Files',
          link: routes.fileManager,
          icon: 'file',
          showSubRoute: false,
          base: 'homedashboard',
          customSubmenuTwo: false,
         
        },

        {
          label: 'Inventory',
          link: routes.inventorydashboard,
          submenu: true,
          showSubRoute: false,
          icon: 'box',
           base: 'support',
          // materialicons: 'topic',
          submenuItems: [
            {
              //Dashboard  not working fine bar graph issue
              label: 'Dashboard',
              link: routes.inventorydashboard,
            },
            { label: 'Calender',
               link: routes.invcalendar,
             },
            {
              label: 'Orders',
              link: routes.inventoryorders,
            },
            {
              label: 'Customers',
              link: routes.inventorycustomers,
            },
            {
              label: 'Inventory',
              link: routes.inventorylist,
            },

            {
              label: 'Assets',
             
            },
          ],
        },

        // {
        //   label: 'AI Meeting',
        //   link: routes.inventorydashboard,
        //   submenu: true,
        //   showSubRoute: false,
        //   icon: 'box',
        //    base: 'support',
        //   // materialicons: 'topic',
        //   submenuItems: [
        //     {
        //       //Dashboard  not working fine bar graph issue
        //       label: 'Home',
        //       link: routes.inventorydashboard,
        //     },
        //     { label: 'Calender',
        //        link: routes.invcalendar,
        //      },
        //     {
        //       label: 'Orders',
        //       link: routes.inventoryorders,
        //     },
        //     {
        //       label: 'Customers',
        //       link: routes.inventorycustomers,
        //     },
        //     {
        //       label: 'Inventory',
        //       link: routes.inventorylist,
        //     },

        //     {
        //       label: 'Assets',
             
        //     },
        //   ],
        // },
        
      ],
    },
  ]


      // {
      //   label: 'Calendar',
      //   link: routes.calendar,
      //   base: 'calendar',
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'calendar-event',
      //   materialicons: 'confirmation_number',
      //   customSubmenuTwo: false,
      //   submenuItems: [
      //     {

      //       label: 'Calendar',
      //       link: routes.calendar,
      //       base: 'calendar',
      //       icon: 'calendar-event',
      //       materialicons: 'confirmation_number',
      //     },
      //     {

      //       label: 'Calendar notes',
      //         link: routes.calendarnote,
      //         base: 'calendarnote',
      //     }
      //       // customSubmenuTwo: false,
      //   ],
        
      // },
      // {
      //   label: 'To Do',
      //   icon: 'ticket',
      //   submenu: true,
      //   showSubRoute: false,
      //   link: routes.todo,
      //   customSubmenuTwo: false,
      //   base: 'todo',
      //   submenuItems: [
      //     {

      //       label: 'To Do',
      //       link: routes.todo,
      //       base: 'calendar',
      //       icon: 'calendar-event',
      //       materialicons: 'confirmation_number',
      //     }, 
      //     {
      //       label : ' To Do Kanban',
      //       link: routes.todokanban,
      //       base: 'todo',
      //       icon:'ticket',
      //     },
      //   ],
      // },
      // {
      //   label: 'Notes',
      //   showSubRoute: false,
      //   icon: 'edit',
      //   link: routes.notes,
      //   customSubmenuTwo: false,
      //   base: 'notes',
      // },
       
     

      //HR Deepanshu
      

      //Finance 
      //Rotes to need to done ,pages to add
      
      
// CRM BPAV

//Support HUB BPAV
// {
//   label: 'Support Hub',
//   link: routes.crmdashboard,
//   submenu: true,
//   showSubRoute: false,
//   icon: 'box',
//    base: 'support',
//   // materialicons: 'topic',
//   submenuItems: [
//     {
//       //Dashboard  not working fine bar graph issue
//       label: 'Dashboard',
//       link: routes.supportdashboard,
//     },
//     { label: 'Analytics',
//        link: routes.payment,
//      },
//     {
//       label: 'All Tickets',
//       link: routes.allquotes,
//     },
//     {
//       label: 'Sales',
//       link: routes.allpayments,
//     },
//   ],
// },
      
      // {
      //   label: 'HR',
      //   link: routes.hrdashboard,
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'box',
      //   base: 'projects',
      //   materialicons: 'topic',
      //   submenuItems: [
      //     {
      //       label: 'Hr Dashboard',
      //       link:routes.hrdashboard ,
      //       base: 'hr',
        
      //     },
      //     { label: 'All Projects',
      //        link: 'tasks',
      //         base: 'tasks' },
      //     {
      //       label: 'Scheduling',
      //       link: routes.taskboard,
      //       base: 'task-board',
      //     },
      //     {
      //       label: 'Workload',
      //       link: routes.taskboard,
      //       base: 'task-board',
      //     },
      //   ],
      // },
    
      //     {
      //   label: 'To Do',
      //   link: 'index',
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'user-star',
      //   base: 'To Do',
      //   materialicons: '',
      //   submenuItems: [
      //     {
      //       label: 'To Do',
      //       icon: 'ticket',
      //       showSubRoute: false,
      //       link: routes.todo,
      //       customSubmenuTwo: false,
      //       base: 'todo',
      //     },
      //     {
      //       label: 'To-Do Kanban',
      //       link: routes.superAdminCompanies,
      //       base: 'companies',
      //     },
      //     {
      //       label: 'Subscriptions',
      //       link: routes.superAdminSubscriptions,
      //       base: 'subscriptions',
      //     },
      //     // {
      //     //   label: 'Packages',
      //     //   link: routes.superAdminPackages,
      //     //   base: 'packages',
      //     //   base2: 'packages-grid',
      //     // },
      //     // {
      //     //   label: 'Domain',
      //     //   link: routes.superAdminDomain,
      //     //   base: 'domain',
      //     // },
      //     // {
      //     //   label: 'Purchase Transaction',
      //     //   link: routes.superAdminPurchaseTransaction,
      //     //   base: 'purchase-transaction',
      //     // },
      //   ],
      // },
      
      // {
      //   label: 'File Manager',
      //   link: routes.fileManager,
      //   base: 'file-manager',
      //   submenu: false,
      //   showSubRoute: false,
      //   icon: 'layout-grid-add',
      //   materialicons: 'confirmation_number',
      //   submenuItems: [],
      //   customSubmenuTwo: false,
      // },
      // {
      //   label: 'Social Feed',
      //   link: routes.socialFeed,
      //   base: 'social-feed',
      //   submenu: false,
      //   showSubRoute: false,
      //   icon: 'calendar-event',
      //   materialicons: 'confirmation_number',
      //   submenuItems: [],
      //   customSubmenuTwo: false,
      // },
      // {
      //   label: 'Projects',
      //   link: routes.project,
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'box',
      //   base: 'projects',
      //   materialicons: 'topic',
      //   submenuItems: [
      //     {
      //       label: 'Projects',
      //       link: routes.project,
      //       base: 'project-grid',
      //       base2: 'project-list',
      //       base3: 'project-details',
      //     },
      //     { label: 'Tasks', link: 'tasks', base: 'tasks' },
      //     {
      //       label: 'Task Board',
      //       link: routes.taskboard,
      //       base: 'task-board',
      //     },
      //   ],
      // },

      // {
      //   label: 'Applications',
      //   link: 'apps',
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'layout-grid-add',
      //   base: 'application',
      //   materialicons: 'dashboard',
      //   submenuItems: [
      //     {
      //       label: 'Chat',
      //       link: routes.chat,
      //       base: 'chats',
      //       customSubmenuTwo: false,
      //     },
      //     {
      //       label: 'Calls',
      //       customSubmenuTwo: true,
      //       submenu: true,
      //       showSubRoute: false,
      //       link: routes.voiceCall,
      //       page1: 'voice-call',
      //       page2: 'videocall',
      //       base: 'calls',
      //       submenuItems: [
      //         {
      //           label: 'Voice Call',
      //           link: routes.voiceCall,
      //           submenu: false,
      //           showSubRoute: false,
      //           base: 'voice-call',
      //         },
      //         {
      //           label: 'Video Call',
      //           link: routes.videoCall,
      //           submenu: false,
      //           showSubRoute: false,
      //           base: 'video-call',
      //         },
      //         {
      //           label: 'Outgoing Call',
      //           link: routes.outgoingCall,
      //           submenu: false,
      //           showSubRoute: false,
      //           base: 'outgoing-call',
      //         },
      //         {
      //           label: 'Incoming Call',
      //           link: routes.incomingCall,
      //           submenu: false,
      //           showSubRoute: false,
      //           base: 'incoming-call',
      //         },
      //         {
      //           label: 'Call History',
      //           link: routes.callHistory,
      //           submenu: false,
      //           showSubRoute: false,
      //           base: 'call-history',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Calendar',
      //       showSubRoute: false,
      //       link: routes.calendar,
      //       customSubmenuTwo: false,
      //       base: 'calendar',
      //     },

      //     {
      //       label: 'Email',
      //       showSubRoute: false,
      //       link: routes.email,
      //       customSubmenuTwo: false,
      //       base: 'email',
      //     },
      //     {
      //       label: 'To Do',
      //       showSubRoute: false,
      //       link: routes.todo,
      //       customSubmenuTwo: false,
      //       base: 'todo',
      //     },
      //     // {
      //     //   label: 'To Do Table',
      //     //   showSubRoute: false,
      //     //   link: routes.todoTable,
      //     //   customSubmenuTwo: false,
      //     //   base: 'todoTable',
      //     // },
      //     {
      //       label: 'Notes',
      //       showSubRoute: false,
      //       link: routes.notes,
      //       customSubmenuTwo: false,
      //       base: 'notes',
      //     },
      //     {
      //       label: 'Social Feed',
      //       showSubRoute: false,
      //       link: routes.socialFeed,
      //       customSubmenuTwo: false,
      //       base: 'social-feed',
      //     },
      //     {
      //       label: 'File Manager',
      //       showSubRoute: false,
      //       link: routes.fileManager,
      //       customSubmenuTwo: false,
      //       base: 'file-manager',
      //     },
      //     {
      //       label: 'Kanban',
      //       showSubRoute: false,
      //       link: routes.kanbanView,
      //       customSubmenuTwo: false,
      //       base: 'kanban',
      //     },
      //     {
      //       label: 'Invoices',
      //       showSubRoute: false,
      //       link: routes.invoice,
      //       customSubmenuTwo: false,
      //       base: 'invoices',
      //     },
      //   ],
      // },
      // {
      //   label: 'Super Admin',
      //   link: 'index',
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'user-star',
      //   base: 'super-admin',
      //   materialicons: '',
      //   submenuItems: [
      //     {
      //       label: 'Dashboard',
      //       link: routes.superAdminDashboard,
      //       base: 'super-admin-dashboard',
      //     },
      //     {
      //       label: 'Companies',
      //       link: routes.superAdminCompanies,
      //       base: 'companies',
      //     },
      //     {
      //       label: 'Subscriptions',
      //       link: routes.superAdminSubscriptions,
      //       base: 'subscriptions',
      //     },
      //     {
      //       label: 'Packages',
      //       link: routes.superAdminPackages,
      //       base: 'packages',
      //       base2: 'packages-grid',
      //     },
      //     {
      //       label: 'Domain',
      //       link: routes.superAdminDomain,
      //       base: 'domain',
      //     },
      //     {
      //       label: 'Purchase Transaction',
      //       link: routes.superAdminPurchaseTransaction,
      //       base: 'purchase-transaction',
      //     },
      //   ],
      // },
 
  // {
  //   tittle: 'LAYOUT',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Horizontal',
  //       link: routes.Horizontal,
  //       submenu: false,
  //       showSubRoute: false,
  //       base: 'layout-horizontal',
  //       icon: 'layout-navbar',
  //       materialicons: 'confirmation_number',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Detached',
  //       link: routes.Detached,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'details',
  //       base: 'layout-detached',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Modern',
  //       link: routes.Modern,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-board-split',
  //       base: 'layout-modern',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Two Column',
  //       link: routes.TwoColumn,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'columns-2',
  //       base: 'layout-twocolumn',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Hovered',
  //       link: routes.Hovered,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'column-insert-left',
  //       base: 'layout-hovered',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Boxed',
  //       link: routes.Boxed,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-align-middle',
  //       base: 'layout-boxed',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Horizontal Single',
  //       link: routes.HorizontalSingle,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-navbar-inactive',
  //       base: 'layout-horizontal-single',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Horizontal Overlay',
  //       link: routes.HorizontalOverlay,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-collage',
  //       base: 'layout-horizontal-overlay',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Horizontal Box',
  //       link: routes.HorizontalBox,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-board',
  //       base: 'layout-horizontal-box',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Menu Aside',
  //       link: routes.MenuAside,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'table',
  //       base: 'layout-horizontal-sidemenu',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Transparent',
  //       link: routes.Transparent,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout',
  //       base: 'layout-transparent',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Without Header',
  //       link: routes.WithoutHeader,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-sidebar',
  //       base: 'layout-without-header',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'RTL',
  //       link: routes.RTL,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'text-direction-rtl',
  //       base: 'layout-rtl',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Dark',
  //       link: routes.Dark,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'moon',
  //       base: 'layout-dark',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //   ],
  // },

  // {
  //   tittle: 'PROJECTS',
  //   icon: 'layers',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Clients',
  //       link: routes.clientgrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'users-group',
  //       base: 'client',
  //       materialicons: 'person',
  //       submenuItems: [],
  //     },

  //     // {
  //     //   label: 'Projects',
  //     //   link: routes.project,
  //     //   submenu: true,
  //     //   showSubRoute: false,
  //     //   icon: 'box',
  //     //   base: 'projects',
  //     //   materialicons: 'topic',
  //     //   submenuItems: [
  //     //     {
  //     //       label: 'Projects',
  //     //       link: routes.project,
  //     //       base: 'project-grid',
  //     //       base2: 'project-list',
  //     //       base3: 'project-details',
  //     //     },
  //     //     { label: 'Tasks', link: 'tasks', base: 'tasks' },
  //     //     {
  //     //       label: 'Task Board',
  //     //       link: routes.taskboard,
  //     //       base: 'task-board',
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   tittle: 'CRM',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Contacts',
  //       link: routes.contactGrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'user-shield',
  //       base: 'contact',
  //       materialicons: 'confirmation_number',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Companies',
  //       link: routes.companiesGrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'building',
  //       base: 'company',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Deals',
  //       link: routes.dealsGrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'heart-handshake',
  //       base: 'deals',
  //       materialicons: 'account_balance_wallet',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Leads',
  //       link: routes.leadsGrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'user-check',
  //       base: 'leads',
  //       materialicons: 'request_quote',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Pipeline',
  //       link: routes.pipeline,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'timeline-event-text',
  //       base: 'pipeline',
  //       materialicons: 'verified_user',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Analytics',
  //       link: routes.analytics,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'graph',
  //       base: 'analytics',
  //       materialicons: 'report_gmailerrorred',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Activities',
  //       link: routes.activity,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'activity',
  //       base: 'activity',
  //       materialicons: 'shutter_speed',
  //       submenuItems: [],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'HRM',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Employees',
  //       link: routes.employeeList,
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'users',
  //       base: 'employees',
  //       materialicons: 'people',
  //       submenuItems: [
  //         {
  //           label: 'Employees List',
  //           link: routes.employeeList,
  //           base: 'employees',
  //           base2: 'employee-list',
  //         },
  //         {
  //           label: 'Employees Grid',
  //           link: routes.employeeGrid,
  //           base: 'employees',
  //           base2: 'employee-grid',
  //         },
  //         {
  //           label: 'Employees Details',
  //           link: routes.employeedetails,
  //           base: 'employees',
  //           base2: 'employee-details',
  //         },
  //         {
  //           label: 'Departments',
  //           link: routes.departments,
  //           base: 'departments',
  //         },
  //         {
  //           label: 'Designations',
  //           link: routes.designations,
  //           base: 'designations',
  //         },
  //         {
  //           label: 'Policies',
  //           link: routes.policy,
  //           base: 'employees',
  //           base2: 'policy',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Tickets',
  //       link: 'ticketList',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'ticket',
  //       base: 'tickets',
  //       materialicons: 'leaderboard',
  //       submenuItems: [
  //         {
  //           label: 'Tickets',
  //           link: routes.tickets,
  //           base: 'ticket-list',
  //         },
  //         {
  //           label: 'Tickets Detail',
  //           link: routes.ticketDetails,
  //           base: 'ticket-details',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Holidays',
  //       link: routes.holidays,
  //       base: 'holidays',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'calendar-event',
  //       materialicons: 'confirmation_number',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Attendance',
  //       link: 'sales',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'file-time',
  //       base: 'sales',
  //       materialicons: 'track_changes',
  //       submenuItems: [
  //         {
  //           label: 'Leaves',
  //           customSubmenuTwo: true,
  //           submenu: true,
  //           showSubRoute: false,
  //           link: routes.leaveadmin,
  //           base: 'leaves',
  //           submenuItems: [
  //             {
  //               label: 'Leaves (Admin)',
  //               link: routes.leaveadmin,
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //             {
  //               label: 'Leaves (Employee)',
  //               link: routes.leaveemployee,
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //             {
  //               label: 'Leave Settings',
  //               link: routes.leavesettings,
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //           ],
  //         },

  //         {
  //           label: 'Attendance (Admin)',
  //           link: routes.attendanceadmin,
  //           base: 'attendance-admin',
  //           customSubmenuTwo: false,
  //         },
  //         {
  //           label: 'Attendance (Employee)',
  //           link: routes.attendanceemployee,
  //           base: 'attendance-employee',
  //           customSubmenuTwo: false,
  //         },

  //         {
  //           label: 'Timesheet',
  //           link: routes.timesheet,
  //           base: 'timesheet',
  //           customSubmenuTwo: false,
  //         },
  //         {
  //           label: 'Shift & Schedule',
  //           link: routes.scheduletiming,
  //           base: 'shift-schedule',
  //           customSubmenuTwo: false,
  //         },
  //         {
  //           label: 'Overtime',
  //           link: routes.overtime,
  //           base: 'overtime',
  //           customSubmenuTwo: false,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Performance',
  //       link: 'performanceIndicator',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'school',
  //       base: 'performance',
  //       materialicons: 'work_outline',
  //       submenuItems: [
  //         {
  //           label: 'Performance Indicator',
  //           link: routes.performanceIndicator,
  //           base: 'indicator',
  //         },
  //         {
  //           label: 'Performance Review',
  //           link: routes.performanceReview,
  //           base: 'review',
  //         },
  //         {
  //           label: 'Performance Appraisal',
  //           link: routes.performanceAppraisal,
  //           base: 'appraisal',
  //         },
  //         {
  //           label: 'Goal List',
  //           link: routes.goalTracking,
  //           base: 'appraisal',
  //         },
  //         {
  //           label: 'Goal Type',
  //           link: routes.goalType,
  //           base: 'appraisal',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Training',
  //       link: 'trainingLists',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'edit',
  //       base: 'training',
  //       materialicons: 'toggle_off',
  //       submenuItems: [
  //         { label: 'Training List', link: routes.trainingList, base: 'lists' },
  //         { label: 'Trainers', link: routes.trainers, base: 'trainer' },
  //         { label: 'Training Type', link: routes.trainingType, base: 'types' },
  //       ],
  //     },
  //     {
  //       label: 'Promotion',
  //       link: routes.promotion,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'speakerphone',
  //       base: 'promotion',
  //       materialicons: 'group_add',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Resignation',
  //       link: routes.resignation,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'external-link',
  //       base: 'resignation',
  //       materialicons: 'settings',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Termination',
  //       link: routes.termination,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'circle-x',
  //       base: 'termination',
  //       materialicons: 'manage_accounts',
  //       submenuItems: [],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'RECRUITMENT',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Jobs',
  //       link: routes.jobgrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'timeline',
  //       base: 'jobs',
  //       materialicons: 'confirmation_number',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Candidates',
  //       link: routes.candidatesGrid,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'user-shield',
  //       base: 'candidates',
  //       materialicons: 'shopping_bag',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Refferals',
  //       link: routes.refferal,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'ux-circle',
  //       base: 'refferals',
  //       materialicons: 'account_balance_wallet',
  //       submenuItems: [],
  //     },

  //   ],
  // },
  // {
  //   tittle: 'Finance & Accounts',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Sales',
  //       base: 'sales',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'shopping-cart-dollar',
  //       submenuItems: [
  //         {
  //           label: 'Estimates',
  //           link: routes.estimate,
  //           base: 'estimates',
  //         },
  //         {
  //           label: 'Invoices',
  //           link: routes.invoices,
  //           base: 'invoices',
  //         },
  //         {
  //           label: 'Payments',
  //           link: routes.payments,
  //           base: 'payments',
  //         },
  //         {
  //           label: 'Expenses',
  //           link: routes.expenses,
  //           base: 'expenses',
  //         },
  //         {
  //           label: 'Provident Fund',
  //           link: routes.providentfund,
  //           base: 'provident-fund',
  //         },
  //         {
  //           label: 'Taxes',
  //           link: routes.taxes,
  //           base: 'taxes',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Accounting',
  //       base: 'accounting',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'file-dollar',
  //       submenuItems: [
  //         {
  //           label: 'Categories',
  //           link: routes.categories,
  //           base: 'categories',
  //         },
  //         {
  //           label: 'Budgets',
  //           link: routes.budgets,
  //           base: 'budgets',
  //         },
  //         {
  //           label: 'Budget Expenses',
  //           link: routes.budgetexpenses,
  //           base: 'budget-expenses',
  //         },
  //         {
  //           label: 'Budget Revenues',
  //           link: routes.budgetrevenues,
  //           base: 'budget-revenues',
  //         },
  //       ],
  //     },
      // {
      //   label: 'Payroll',
      //   base: 'payroll',
      //   submenu: true,
      //   showSubRoute: false,
      //   icon: 'cash',
      //   submenuItems: [
      //     {
      //       label: 'Employee Salary',
      //       link: routes.employeesalary,
      //       base: 'employee-salary',
      //     },
      //     {
      //       label: 'Payslip',
      //       link: routes.payslip,
      //       base: 'payslip',
      //     },
      //     {
      //       label: 'Payroll Items',
      //       link: routes.payrollAddition,
      //       base: 'payroll-items',
      //     },
      //   ],
      // },
  //   ],
  // },
  // {
  //   tittle: 'Administration',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Assets',
  //       base: 'assets',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'cash',
  //       submenuItems: [
  //         {
  //           label: 'Assets',
  //           link: routes.assetList,
  //           base: 'asset-list',
  //         },
  //         {
  //           label: 'Asset Categories',
  //           link: routes.assetCategories,
  //           base: 'asset-categories',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Help & Supports',
  //       base: 'supports',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'headset',
  //       submenuItems: [
  //         {
  //           label: 'Knowledge Base',
  //           link: routes.knowledgebase,
  //           base: 'knowledgebase',
  //           base2: 'knowledgebase-view',
  //           base3: 'knowledgebase-details',
  //         },
  //         {
  //           label: 'Activities',
  //           link: routes.activity,
  //           base: 'activities',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'User Management',
  //       base: 'user-management',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'user-star',
  //       submenuItems: [
  //         {
  //           label: 'Users',
  //           link: routes.users,
  //           base: 'users',
  //         },
  //         {
  //           label: 'Roles & Permissions',
  //           link: routes.rolePermission,
  //           base: 'roles-permissions',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Reports',
  //       base: 'reports',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'user-star',
  //       submenuItems: [
  //         {
  //           label: 'Expense Report',
  //           link: routes.expensesreport,
  //           base: 'expenses-report',
  //         },
  //         {
  //           label: 'Invoice Report',
  //           link: routes.invoicereport,
  //           base: 'invoice-report',
  //         },
  //         {
  //           label: 'Payment Report',
  //           link: routes.paymentreport,
  //           base: 'payment-report',
  //         },
  //         {
  //           label: 'Project Report',
  //           link: routes.projectreport,
  //           base: 'project-report',
  //         },
  //         {
  //           label: 'Task Report',
  //           link: routes.taskreport,
  //           base: 'task-report',
  //         },
  //         {
  //           label: 'User Report',
  //           link: routes.userreport,
  //           base: 'user-report',
  //         },
  //         {
  //           label: 'Employee Report',
  //           link: routes.employeereport,
  //           base: 'employee-report',
  //         },
  //         {
  //           label: 'Payslip Report',
  //           link: routes.payslipreport,
  //           base: 'payslip-report',
  //         },
  //         {
  //           label: 'Attendance Report',
  //           link: routes.attendancereport,
  //           base: 'attendance-report',
  //         },
  //         {
  //           label: 'Leave Report',
  //           link: routes.leavereport,
  //           base: 'leave-report',
  //         },
  //         {
  //           label: 'Daily Report',
  //           link: routes.dailyreport,
  //           base: 'daily-report',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Settings',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'settings',
  //       base: 'settings',
  //       submenuItems: [
  //         {
  //           label: 'General Settings',
  //           customSubmenuTwo: true,
  //           base: 'general-settings',
  //           submenuItems: [
  //             {
  //               label: 'Profile',
  //               link: routes.profilesettings,
  //               base: 'profile-settings',
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //             {
  //               label: 'Security',
  //               link: routes.securitysettings,
  //               base: 'security-settings',
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //             {
  //               label: 'Notifications',
  //               link: routes.notificationssettings,
  //               base: 'notification-settings',
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //             {
  //               label: 'Connected Apps',
  //               link: routes.connectedApps,
  //               base: 'connected-apps',
  //               submenu: false,
  //               showSubRoute: false,
  //             },
  //           ],
  //         },
  //         {
  //           label: 'Website Settings',
  //           customSubmenuTwo: true,
  //           base: 'website-settings',
  //           submenuItems: [
  //             {
  //               label: 'Business Settings',
  //               link: routes.bussinessSettings,
  //               base: 'bussiness-settings',
  //             },
  //             {
  //               label: 'SEO Settings',
  //               link: routes.seoSettings,
  //               base: 'seo-settings',
  //             },
  //             {
  //               label: 'Localization',
  //               link: routes.localizationSettings,
  //               base: 'localization-settings',
  //             },
  //             {
  //               label: 'Prefixes',
  //               link: routes.prefixes,
  //               base: 'prefixes',
  //             },
  //             {
  //               label: 'Preferences',
  //               link: routes.preference,
  //               base: 'preferences',
  //             },
  //             {
  //               label: 'Appearance',
  //               link: routes.appearance,
  //               base: 'appearance',
  //             },
  //             {
  //               label: 'Language',
  //               link: routes.language,
  //               base: 'language',
  //               base2: 'add-language',
  //             },
  //             {
  //               label: 'Authentication',
  //               link: routes.authenticationSettings,
  //               base: 'authentication-settings',
  //             },
  //             {
  //               label: 'AI Settings',
  //               link: routes.aiSettings,
  //               base: 'ai-settings',
  //             },
  //           ],
  //         },
  //         {
  //           label: 'App Settings',
  //           customSubmenuTwo: true,
  //           base: 'app-settings',
  //           submenuItems: [
  //             {
  //               label: 'Salary Settings',
  //               link: routes.salarySettings,
  //               base: 'salary-settings',
  //             },
  //             {
  //               label: 'Approval Settings',
  //               link: routes.approvalSettings,
  //               base: 'approval-settings',
  //             },
  //             {
  //               label: 'Invoice Settings',
  //               link: routes.invoiceSettings,
  //               base: 'invoice-settings',
  //             },
  //             {
  //               label: 'Leave Type',
  //               link: routes.leaveType,
  //               base: 'leave-type',
  //             },
  //             {
  //               label: 'Custom Fields',
  //               link: routes.customFields,
  //               base: 'custom-fields',
  //             },
  //           ],
  //         },
  //         {
  //           label: 'System Settings',
  //           customSubmenuTwo: true,
  //           base: 'system-settings',
  //           submenuItems: [
  //             {
  //               label: 'Email Settings',
  //               link: routes.emailSettings,
  //               base: 'email-settings',
  //             },
  //             {
  //               label: 'Email Templates',
  //               link: routes.emailTemplates,
  //               base: 'email-template',
  //             },
  //             {
  //               label: 'SMS Settings',
  //               link: routes.smsSettings,
  //               base: 'sms-settings',
  //             },
  //             {
  //               label: 'SMS Templates',
  //               link: routes.smsTemplate,
  //               base: 'sms-template',
  //             },
  //             {
  //               label: 'OTP',
  //               link: routes.otpSettings,
  //               base: 'otp-settings',
  //             },
  //             {
  //               label: 'GDPR Cookies',
  //               link: routes.gdprCookies,
  //               base: 'gdpr',
  //             },
  //             {
  //               label: 'Maintenance Mode',
  //               link: routes.maintenanceMode,
  //               base: 'maintenance-mode',
  //             },
  //           ],
  //         },
  //         {
  //           label: 'Financial Settings',
  //           customSubmenuTwo: true,
  //           base: 'financial-settings',
  //           submenuItems: [
  //             {
  //               label: 'Payment Gateways',
  //               link: routes.paymentGateways,
  //               base: 'payment-gateways',
  //             },
  //             {
  //               label: 'Tax Rate',
  //               link: routes.taxRates,
  //               base: 'tax-rates',
  //             },
  //             {
  //               label: 'Currencies',
  //               link: routes.currencies,
  //               base: 'currencies',
  //             },
  //           ],
  //         },
  //         {
  //           label: 'Other Settings',
  //           customSubmenuTwo: true,
  //           base: 'other-settings',
  //           submenuItems: [
  //             {
  //               label: 'Custom CSS',
  //               link: routes.customCss,
  //               base: 'custom-css',
  //             },
  //             {
  //               label: 'Custom JS',
  //               link: routes.customJs,
  //               base: 'custom-js',
  //             },
  //             {
  //               label: 'Cronjob',
  //               link: routes.cronjob,
  //               base: 'cronjob',
  //             },
  //             {
  //               label: 'Storage',
  //               link: routes.storage,
  //               base: 'storage-settings',
  //             },
  //             {
  //               label: 'Ban IP Address',
  //               link: routes.banIpAddress,
  //               base: 'ban-ip-address',
  //             },
  //             {
  //               label: 'Backup',
  //               link: routes.backup,
  //               base: 'backup',
  //             },
  //             {
  //               label: 'Clear Cache',
  //               link: routes.clearcache,
  //               base: 'clear-cache',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'Content',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Pages',
  //       link: routes.pages,
  //       base: 'pages',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'box-multiple',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Blogs',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'brand-blogger',
  //       base: 'blogs',
  //       submenuItems: [
  //         {
  //           label: 'All Blogs',
  //           link: routes.blogs,
  //           base2: 'All Blogs',
  //         },
  //         {
  //           label: 'Categories',
  //           link: routes.blogCategories,
  //           base: '/blog-categories',
  //         },
  //         {
  //           label: 'Comments',
  //           link: routes.blogComments,
  //           base: '/blog-comments',
  //         },
  //         {
  //           label: 'Blog Tags',
  //           link: routes.blogTags,
  //           base: '/blog-tags',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Locations',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'map-pin-check',
  //       base: 'location',
  //       submenuItems: [
  //         {
  //           label: 'Countries',
  //           link: routes.countries,
  //           base: 'countries',
  //         },
  //         {
  //           label: 'States',
  //           link: routes.states,
  //           base: 'states',
  //         },
  //         {
  //           label: 'Cities',
  //           link: routes.cities,
  //           base: 'cities',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Testimonials',
  //       link: routes.testimonials,
  //       base: 'testimonials',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'message-2',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'FAQ’S',
  //       link: routes.faq,
  //       base: 'faq',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'question-mark',
  //       submenuItems: [],
  //     },
  //   ],
  // },



  // {
  //   tittle: 'Pages',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Starter',
  //       link: routes.starter,
  //       base: 'starter',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'layout-sidebar',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Profile',
  //       link: routes.profile,
  //       base: 'profile',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'user-circle',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Gallery',
  //       link: routes.gallery,
  //       base: 'gallery',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'photo',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Search Results',
  //       link: routes.searchresult,
  //       base: 'search-result',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'list-search',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Timeline',
  //       link: routes.timeline,
  //       base: 'timeline',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'timeline',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Pricing',
  //       link: routes.pricing,
  //       base: 'pricing',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'file-dollar',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Coming Soon',
  //       link: routes.comingSoon,
  //       base: 'coming-soon',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'progress-bolt',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Under Maintenance',
  //       link: routes.underMaintenance,
  //       base: 'under-maintenance',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'alert-octagon',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Under Construction',
  //       link: routes.underConstruction,
  //       base: 'under-construction',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'barrier-block',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'API Keys',
  //       link: routes.apikey,
  //       base: 'api-keys',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'api',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Privacy Policy',
  //       link: routes.privacyPolicy,
  //       base: 'privacy-policy',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'file-description',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Terms & Conditions',
  //       link: routes.termscondition,
  //       base: 'terms-condition',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'file-check',
  //       submenuItems: [],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'Authentication',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Login',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'login',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.login,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.login2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.login3,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Register',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'forms',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.register,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.register2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.register3,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Forgot Password',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'help-triangle',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.forgotPassword,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.forgotPassword2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.forgotPassword3,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Reset Password',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'restore',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.resetPassword,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.resetPassword2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.resetPassword3,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Email Verification',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'mail-exclamation',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.emailVerification,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.emailVerification2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.emailVerification3,
  //         },
  //       ],
  //     },
  //     {
  //       label: '2 Step Verification',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'password',
  //       submenuItems: [
  //         {
  //           label: 'Cover',
  //           link: routes.twoStepVerification,
  //         },
  //         {
  //           label: 'Illustration',
  //           link: routes.twoStepVerification2,
  //         },
  //         {
  //           label: 'Basic',
  //           link: routes.twoStepVerification3,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Lock Screen',
  //       link: routes.lockScreen,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'lock-square',
  //       submenuItems: [],
  //     },
  //     {
  //       label: '404 Error',
  //       link: routes.error404,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'error-404',
  //       submenuItems: [],
  //     },
  //     {
  //       label: '500 Error',
  //       link: routes.error500,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'server',
  //       submenuItems: [],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'UI Interface',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Base UI',
  //       link: 'index',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'hierarchy-2',
  //       base: 'base-ui',
  //       materialicons: 'description',
  //       submenuItems: [
  //         {
  //           label: 'Alerts',
  //           link: routes.alert,
  //           base: 'ui-alerts',
  //         },
  //         {
  //           label: 'Accordions',
  //           link: routes.accordion,
  //           base: 'ui-accordion',
  //         },
  //         { label: 'Avatar', link: routes.avatar, base: 'ui-avatar' },
  //         { label: 'Badges', link: routes.badges, base: 'ui-badges' },
  //         { label: 'Borders', link: routes.border, base: 'ui-borders' },
  //         {
  //           label: 'Buttons',
  //           link: routes.button,
  //           base: 'ui-buttons',
  //         },
  //         {
  //           label: 'Button Group',
  //           link: routes.buttonGroup,
  //           base: 'ui-buttons-group',
  //         },
  //         {
  //           label: 'Breadcrumb',
  //           link: routes.breadcrums,
  //           base: 'ui-breadcrumb',
  //         },
  //         { label: 'Cards', link: routes.cards, base: 'ui-cards' },
  //         {
  //           label: 'Carousel',
  //           link: routes.carousel,
  //           base: 'ui-carousel',
  //         },
  //         {
  //           label: 'Colors',
  //           link: routes.colors,
  //           base: 'ui-colors',
  //         },
  //         {
  //           label: 'Dropdowns',
  //           link: routes.dropdowns,
  //           base: 'ui-dropdowns',
  //         },
  //         { label: 'Grid', link: routes.grid, base: 'ui-grid' },
  //         { label: 'Images', link: routes.images, base: 'ui-images' },
  //         {
  //           label: 'Lightbox',
  //           link: routes.lightbox,
  //           base: 'ui-lightbox',
  //         },
  //         { label: 'Media', link: routes.media, base: 'ui-media' },
  //         { label: 'Modals', link: routes.modals, base: 'ui-modals' },
  //         {
  //           label: 'Offcanvas',
  //           link: routes.offcanvas,
  //           base: 'ui-offcanvas',
  //         },
  //         {
  //           label: 'Pagination',
  //           link: routes.pagination,
  //           base: 'ui-pagination',
  //         },

  //         {
  //           label: 'Progress Bars',
  //           link: routes.progress,
  //           base: 'ui-progress',
  //         },
  //         {
  //           label: 'Placeholders',
  //           link: routes.placeholder,
  //           base: 'ui-placeholders',
  //         },

  //         {
  //           label: 'Spinner',
  //           link: routes.spinner,
  //           base: 'ui-spinner',
  //         },
  //         {
  //           label: 'Range Slider',
  //           link: routes.rangeSlider,
  //           base: 'ui-rangeslider',
  //         },

  //         { label: 'Toasts', link: routes.toasts, base: 'ui-toasts' },
  //         {
  //           label: 'Tooltip',
  //           link: routes.tooltip,
  //           base: 'ui-tooltips',
  //         },
  //         {
  //           label: 'Typography',
  //           link: routes.typography,
  //           base: 'ui-typography',
  //         },
  //         { label: 'Videos', link: routes.video, base: 'ui-video' },
  //         { label: 'Sortable', link: routes.sortable, base: 'ui-sortable' },
  //         { label: 'SwiperJs', link: routes.swiperjs, base: 'ui-swiperjs' },
  //       ],
  //     },
  //     {
  //       label: 'Advanced Ui',
  //       submenu: true,
  //       showSubRoute: false,
  //       base: 'advancedUi',
  //       icon: 'hierarchy-3',
  //       materialicons: 'sync_alt',
  //       submenuItems: [
  //         { label: 'Ribbon', link: routes.ribbon, base: 'ui-ribbon' },
  //         {
  //           label: 'Clipboard',
  //           link: routes.clipboard,
  //           base: 'ui-clipboard',
  //         },
  //         {
  //           label: 'Drag & Drop',
  //           link: routes.dragandDrop,
  //           base: 'ui-drag-drop',
  //         },
  //         {
  //           label: 'Rating',
  //           link: routes.rating,
  //           base: 'ui-rating',
  //         },
  //         {
  //           label: 'Text Editor',
  //           link: routes.textEditor,
  //           base: 'ui-text-editor',
  //         },
  //         {
  //           label: 'Counter',
  //           link: routes.counter,
  //           base: 'ui-counter',
  //         },
  //         {
  //           label: 'Scrollbar',
  //           link: routes.scrollBar,
  //           base: 'ui-scrollbar',
  //         },
  //         {
  //           label: 'Timeline',
  //           link: routes.timeLine,
  //           base: 'ui-timeline',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Charts',
  //       submenu: true,
  //       showSubRoute: false,
  //       base: 'charts',
  //       icon: 'chart-line',
  //       materialicons: 'library_add_check',
  //       submenuItems: [
  //         {
  //           label: 'Apex Charts',
  //           link: routes.apexChart,
  //           base: 'apex-charts',
  //         },
  //         {
  //           label: 'Prime Charts',
  //           link: routes.primeChart,
  //           base: 'prime-charts',
  //         },
  //         {
  //           label: 'Chart JS',
  //           link: routes.chartJs,
  //           base: 'chart-js',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Icons',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'icons',
  //       base: 'icon',
  //       materialicons: 'people',
  //       submenuItems: [
  //         {
  //           label: 'Fontawesome Icons',
  //           link: routes.fontawesome,
  //           base: 'icon-fontawesome',
  //         },
  //         {
  //           label: 'Bootstrap Icons',
  //           link: routes.bootstrapIcons,
  //           base: 'icon-bootstrap',
  //         },
  //         {
  //           label: 'Remix Icons',
  //           link: routes.RemixIcons,
  //           base: 'icon-remix',
  //         },
  //         {
  //           label: 'Feather Icons',
  //           link: routes.featherIcons,
  //           base: 'icon-feather',
  //         },
  //         {
  //           label: 'Ionic Icons',
  //           link: routes.iconicIcon,
  //           base: 'icon-ionic',
  //         },
  //         {
  //           label: 'Material Icons',
  //           link: routes.materialIcon,
  //           base: 'icon-material',
  //         },
  //         { label: 'pe7 Icons', link: routes.pe7icon, base: 'icon-pe7' },
  //         {
  //           label: 'Simpleline Icons',
  //           link: routes.simpleLineIcon,
  //           base: 'icon-simple-line',
  //         },
  //         {
  //           label: 'Themify Icons',
  //           link: routes.themifyIcon,
  //           base: 'icon-themify',
  //         },
  //         {
  //           label: 'Weather Icons',
  //           link: routes.weatherIcon,
  //           base: 'icon-weather',
  //         },
  //         {
  //           label: 'Typicon Icons',
  //           link: routes.typicon,
  //           base: 'icon-typicon',
  //         },
  //         { label: 'Flag Icons', link: routes.FlagIcons, base: 'icon-flag' },
  //       ],
  //     },
  //     {
  //       label: 'Forms',
  //       icon: 'input-search',
  //       base: 'forms',
  //       submenu: true,
  //       showSubRoute: false,
  //       materialicons: 'view_day',
  //       submenuItems: [
  //         {
  //           label: 'Form Elements',
  //           base: 'form-elements',
  //           customSubmenuTwo: true,
  //           submenu: true,
  //           showSubRoute: false,
  //           submenuItems: [
  //             {
  //               label: 'Basic Inputs',
  //               link: routes.basicInput,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-basic-inputs',
  //             },
  //             {
  //               label: 'Checkbox & Radios',
  //               link: routes.checkboxandRadion,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-checkbox-radios',

  //             },
  //             {
  //               label: 'Input Groups',
  //               link: routes.inputGroup,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-input-groups',

  //             },
  //             {
  //               label: 'Grid & Gutters',
  //               link: routes.gridandGutters,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-grid-gutters',
  //             },
  //             {
  //               label: 'Form Select',
  //               link: routes.formSelect,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-select',

  //             },
  //             {
  //               label: 'Input Masks',
  //               link: routes.formMask,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-mask',
  //             },
  //             {
  //               label: 'File Uploads',
  //               link: routes.fileUpload,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-fileupload',
  //             },
  //           ],
  //         },
  //         {
  //           label: 'Layouts',
  //           customSubmenuTwo: true,
  //           base: 'layouts',
  //           submenu: true,
  //           showSubRoute: false,
  //           submenuItems: [
  //             {
  //               label: 'Horizontal Form',
  //               link: routes.horizontalForm,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-horizontal'
  //             },
  //             {
  //               label: 'Vertical Form',
  //               link: routes.verticalForm,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-vertical',
  //             },
  //             {
  //               label: 'Floating Labels',
  //               link: routes.floatingLable,
  //               submenu: false,
  //               showSubRoute: false,
  //               base: 'form-floating-labels',

  //             },
  //           ],
  //         },
  //         {
  //           label: 'Form Validation',
  //           link: routes.formValidation,
  //           submenu: false,
  //           showSubRoute: false,
  //           customSubmenuTwo: false,
  //           base: 'form-validation',
  //         },
  //         {
  //           label: 'Form Wizard',
  //           link: routes.formWizard,
  //           submenu: false,
  //           showSubRoute: false,
  //           customSubmenuTwo: false,
  //           base: 'form-wizard',
  //         },
  //         {
  //           label: 'Form Picker',
  //           link: routes.formPicker,
  //           submenu: false,
  //           showSubRoute: false,
  //           customSubmenuTwo: false,
  //           base: 'form-picker',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Tables',
  //       link: 'tables',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'table',
  //       base: 'tables',
  //       materialicons: 'table_rows',
  //       submenuItems: [
  //         {
  //           label: 'Basic Tables',
  //           link: routes.tablesBasic,
  //           base: 'tables-basic',
  //         },
  //         {
  //           label: 'Data Tables',
  //           link: routes.dataTables,
  //           base: 'data-basic',
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Maps',
  //       submenu: true,
  //       showSubRoute: false,
  //       icon: 'table-plus',
  //       base: 'maps',
  //       materialicons: 'people',
  //       submenuItems: [
  //         {
  //           label: 'Leaflets',
  //           link: routes.mapLeaflet,
  //           base: 'leaflets',
  //         },

  //       ],
  //     },
  //   ],
  // },
  // {
  //   tittle: 'Extras',
  //   icon: 'file',
  //   showAsTab: false,
  //   separateRoute: false,
  //   submenuItems: [
  //     {
  //       label: 'Documentation',
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'file-text',
  //       base: '1',
  //       materialicons: 'description',
  //       submenuItems: [],
  //     },
  //     {
  //       label: 'Change Log',
  //       changeLogVersion: true,
  //       submenu: false,
  //       showSubRoute: false,
  //       icon: 'exchange',
  //       base: '1',
  //       materialicons: 'sync_alt',
  //       submenuItems: [],
  //     },
  //   ],
  // },
