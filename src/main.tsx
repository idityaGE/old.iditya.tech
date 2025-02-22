import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import { ThemeProvider } from '@/components/theme-provider.tsx'

import Layout from '@/Layout.tsx'
import Home from '@/pages/Home.tsx'
const About = lazy(() => import('@/pages/About.tsx'))
const Projects = lazy(() => import('@/pages/Projects.tsx'))
const ProjectPage = lazy(() => import('@/pages/ProjectPage'))
const NotFound = lazy(() => import('@/NotFound'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white" />
  </div>
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        } />
        <Route path="projects" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
        } />
      </Route>
      <Route path='/projects/:slug' element={
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectPage />
        </Suspense>
      } />
      <Route path="*" element={
        <Suspense fallback={<LoadingSpinner />}>
          <NotFound />
        </Suspense>
      } />
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      defaultTheme='dark'
      storageKey='theme'
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
