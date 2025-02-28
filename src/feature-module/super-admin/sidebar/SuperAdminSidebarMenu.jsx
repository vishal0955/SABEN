import { useLocation } from "react-router";
import { all_routes } from "../../../feature-module/router/all_routes";
import { route } from "../../../core/common/selectoption/selectoption";

const routes = all_routes;



export const SuperAdminSidebarMenu = [


  {
    tittle: 'Main Menu',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
        {
            label: 'Super Admin',
            link: 'index',
            submenu: true,
            showSubRoute: false,
            icon: 'user-star',
            base: 'super-admin',
            materialicons: '',
            submenuItems: [
              {
                label: 'Dashboard',
                link: routes.superAdminDashboard,
                base: 'super-admin-dashboard',
              },
              {
                label: 'Companies',
                link: routes.superAdminCompanies,
                base: 'companies',
              },
              {
                label: 'Subscriptions',
                link: routes.superAdminSubscriptions,
                base: 'subscriptions',
              },
              {
                label: 'Packages',
                link: routes.superAdminPackages,
                base: 'packages',
                base2: 'packages-grid',
              },
              {
                label: 'Domain',
                link: routes.superAdminDomain,
                base: 'domain',
              },
              {
                label: 'Purchase Transaction',
                link: routes.superAdminPurchaseTransaction,
                base: 'purchase-transaction',
              },
            ],
          },


    ],
    },
]

