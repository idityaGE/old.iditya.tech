import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import { ThemeProvider } from '@/components/theme-provider.tsx'

import Layout from '@/Layout.tsx'
import Home from '@/pages/Home.tsx'
import About from '@/pages/About.tsx'
import Projects from '@/pages/Projects.tsx'
import StatsPage from '@/pages/stats'
import ProjectPage from './pages/ProjectPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="stats" element={<StatsPage />} />
      <Route path='/projects/:slug' element={<ProjectPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      defaultTheme='light'
      storageKey='theme'
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
