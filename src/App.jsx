import { Navigate, Route, Routes } from "react-router-dom";
import AdminAddCategoryPage from "./pages/adminpages/AdminAddCategoryPage";
import AdminAddCompanyPage from "./pages/adminpages/AdminAddCompanyPage";
import AdminAddServicePage from "./pages/adminpages/AdminAddServicePage";
import AdminAdvertisementsPage from "./pages/adminpages/AdminAdvertisementsPage";
import AdminCompaniesPage from "./pages/adminpages/AdminCompaniesPage";
import AdminCompanyProfilePage from "./pages/adminpages/AdminCompanyProfilePage";
import AdminComplaintsPage from "./pages/adminpages/AdminComplaintsPage";
import AdminDashboardPage from "./pages/adminpages/AdminDashboardPage";
import AdminEditCompanyPage from "./pages/adminpages/AdminEditCompanyPage";
import AdminEditProviderPage from "./pages/adminpages/AdminEditProviderPage";
import AdminEditUserPage from "./pages/adminpages/AdminEditUserPage";
import AdminLoginPage from "./pages/adminpages/AdminLoginPage";
import AdminOrderHistoryPage from "./pages/adminpages/AdminOrderHistoryPage";
import AdminOrdersPage from "./pages/adminpages/AdminOrdersPage";
import AdminOrderTimelinePage from "./pages/adminpages/AdminOrderTimelinePage";
import AdminProviderProfilePage from "./pages/adminpages/AdminProviderProfilePage";
import AdminProvidersPage from "./pages/adminpages/AdminProvidersPage";
import AdminProviderRequestsPage from "./pages/adminpages/AdminProviderRequestsPage";
import AdminProviderSubscriptionsPage from "./pages/adminpages/AdminProviderSubscriptionsPage";
import AdminRoleManagementPage from "./pages/adminpages/AdminRoleManagementPage";
import AdminRewardsPage from "./pages/adminpages/AdminRewardsPage";
import AdminServicesManagementPage from "./pages/adminpages/AdminServicesManagementPage";
import AdminSubscriptionsPage from "./pages/adminpages/AdminSubscriptionsPage";
import AdminSystemSettingsPage from "./pages/adminpages/AdminSystemSettingsPage";
import AdminUserProfilePage from "./pages/adminpages/AdminUserProfilePage";
import AdminUsersPage from "./pages/adminpages/AdminUsersPage";
import CompanyAssignTaskPage from "./pages/companypages/CompanyAssignTaskPage";
import CompanyAvailableEmployeesPage from "./pages/companypages/CompanyAvailableEmployeesPage";
import CompanyAddEmployeePage from "./pages/companypages/CompanyAddEmployeePage";
import CompanyDashboardPage from "./pages/companypages/CompanyDashboardPage";
import CompanyDistributionLogsPage from "./pages/companypages/CompanyDistributionLogsPage";
import CompanyEditEmployeePage from "./pages/companypages/CompanyEditEmployeePage";
import CompanyEmployeeProfilePage from "./pages/companypages/CompanyEmployeeProfilePage";
import CompanyEmployeesPage from "./pages/companypages/CompanyEmployeesPage";
import CompanyEmployeeStatisticsPage from "./pages/companypages/CompanyEmployeeStatisticsPage";
import CompanyLoginPage from "./pages/companypages/CompanyLoginPage";
import CompanyOrdersPage from "./pages/companypages/CompanyOrdersPage";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register/company" element={<CompanyRegistrationPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/providers" element={<AdminProvidersPage />} />
      <Route path="/admin/roles" element={<AdminRoleManagementPage />} />
      <Route path="/admin/providers/profile" element={<AdminProviderProfilePage />} />
      <Route path="/admin/providers/edit" element={<AdminEditProviderPage />} />
      <Route path="/admin/providers/requests" element={<AdminProviderRequestsPage />} />
      <Route
        path="/admin/provider-subscriptions"
        element={<AdminProviderSubscriptionsPage />}
      />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="/admin/orders/history" element={<AdminOrderHistoryPage />} />
      <Route path="/admin/orders/timeline" element={<AdminOrderTimelinePage />} />
      <Route path="/admin/services" element={<AdminServicesManagementPage />} />
      <Route path="/admin/services/add" element={<AdminAddServicePage />} />
      <Route
        path="/admin/services/categories/add"
        element={<AdminAddCategoryPage />}
      />
      <Route path="/admin/complaints" element={<AdminComplaintsPage />} />
      <Route path="/admin/subscriptions" element={<AdminSubscriptionsPage />} />
      <Route path="/admin/rewards" element={<AdminRewardsPage />} />
      <Route path="/admin/advertisements" element={<AdminAdvertisementsPage />} />
      <Route path="/admin/settings" element={<AdminSystemSettingsPage />} />
      <Route path="/admin/companies" element={<AdminCompaniesPage />} />
      <Route path="/admin/companies/add" element={<AdminAddCompanyPage />} />
      <Route path="/admin/companies/profile" element={<AdminCompanyProfilePage />} />
      <Route path="/admin/companies/edit" element={<AdminEditCompanyPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/users/profile" element={<AdminUserProfilePage />} />
      <Route path="/admin/users/edit" element={<AdminEditUserPage />} />
      <Route path="/company/login" element={<CompanyLoginPage />} />
      <Route path="/company" element={<CompanyDashboardPage />} />
      <Route path="/company/employees/add" element={<CompanyAddEmployeePage />} />
      <Route
        path="/company/employees/profile"
        element={<CompanyEmployeeProfilePage />}
      />
      <Route path="/company/employees" element={<CompanyEmployeesPage />} />
      <Route path="/company/employees/edit" element={<CompanyEditEmployeePage />} />
      <Route path="/company/employees/assign-task" element={<CompanyAssignTaskPage />} />
      <Route
        path="/company/employees/statistics"
        element={<CompanyEmployeeStatisticsPage />}
      />
      <Route path="/company/orders" element={<CompanyOrdersPage />} />
      <Route path="/company/available" element={<CompanyAvailableEmployeesPage />} />
      <Route path="/company/logs" element={<CompanyDistributionLogsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

