import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import SubCategoriesPage from "./pages/SubCategoriesPage";
import PromptLessonPage from "./pages/PromptLessonPage";
import HistoryPage from "./pages/HistoryPage";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import AllUsersPage from "./pages/AllUsersPage";
import AllPromptsPage from "./pages/AllPromptsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CreateCategoryPage from "./pages/CreateCategoryPage";
import CreateSubCategoryPage from "./pages/CreateSubCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User */}
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/categories/:categoryId" element={<SubCategoriesPage />} />
        <Route path="/lesson/:subCategoryId" element={<PromptLessonPage />} />
        <Route path="/history" element={<HistoryPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<AllUsersPage />} />
        <Route path="/admin/prompts" element={<AllPromptsPage />} />
        <Route path="/admin/categories" element={<CategoriesPage />} />
        <Route path="/admin/create-category" element={<CreateCategoryPage />} />
        <Route path="/admin/create-subcategory" element={<CreateSubCategoryPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;