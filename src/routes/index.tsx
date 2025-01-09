import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import AppLayout from "../layout";
import { Routes } from "./baseRoutes";
import IncomeAndExpenses from "../pages/IncomeAndExpenses/IncomeAndExpenses";
import CanopyGrow from "../pages/CanopyGrow";
import Offers from "../pages/Offers";
import DashboardIndex from "../pages";
import Settings from "../components/SettingsCmp";
import AccountSettings from "../components/SettingsCmp/SettingModals/Account";
import SubscriptionSettings from "../components/SettingsCmp/SettingModals/Subscription";
import Help from "../components/SettingsCmp/SettingModals/Help";
import BankSettings from "../components/SettingsCmp/SettingModals/Bank";
import PublicRentSettings from "../components/SettingsCmp/SettingModals/PublicRent";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: <DashboardIndex />,
  },
  {
    path: Routes.account,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
      {
        path: Routes.settings,
        element: <AccountSettings />,
      },
      {
        path: Routes.subscription,
        element: <SubscriptionSettings />,
      },
      {
        path: Routes.help,
        element: <Help />,
      },
      {
        path: Routes.bank,
        element: <BankSettings />,
      },
      {
        path: Routes.url,
        element: <PublicRentSettings />,
      },
    ],
  },
  {
    path: Routes.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Routes.incomeAndExpenses,
        element: <IncomeAndExpenses />,
      },
      {
        path: Routes.transactions,
        element: <CanopyGrow />,
      },
      {
        path: Routes.insights,
        element: <Offers />,
      },
    ],
  },
]);

export default router;
