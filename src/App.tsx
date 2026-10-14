/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SplashPage } from './components/SplashPage.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { UserRole } from './components/RoleWorkspace.tsx';
import { DirectorCommandCenter } from './components/DirectorCommandCenter.tsx';
import { DocenteTutorialPage } from './components/DocenteTutorialPage.tsx';
import { EstudianteTutorialPage } from './components/EstudianteTutorialPage.tsx';
import { GlobalTutorialPage } from './components/GlobalTutorialPage.tsx';
import { AurixTutorialPage } from './components/AurixTutorialPage.tsx';
import { ToeflTutorialPage } from './components/ToeflTutorialPage.tsx';

type AppView = 'splash' | 'landing' | 'workspace' | 'aurix' | 'toefl';

export default function App() {
  const [view, setView] = useState<AppView>('splash');
  const [activeRole, setActiveRole] = useState<UserRole>('DIRECTOR');

  // Handle profile selection
  const handleLogin = (role: UserRole) => {
    setActiveRole(role);
    setView('workspace');
  };

  // Re-run splash page
  const handleReplaySplash = () => {
    setView('splash');
  };

  // Return to landing page from workspace or tools
  const handleBackToLanding = () => {
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-[#061a1a] text-[#F8FAFC]">
      {view === 'splash' && (
        <SplashPage onComplete={() => setView('landing')} />
      )}

      {view === 'landing' && (
        <LandingPage
          onSelectRole={handleLogin}
          onReplaySplash={handleReplaySplash}
          onOpenAurix={() => setView('aurix')}
          onOpenToefl={() => setView('toefl')}
        />
      )}

      {/* Tutoriales de Herramientas Estrella */}
      {view === 'aurix' && (
        <AurixTutorialPage onBack={handleBackToLanding} />
      )}

      {view === 'toefl' && (
        <ToeflTutorialPage onBack={handleBackToLanding} />
      )}

      {/* Tutoriales por Perfil */}
      {view === 'workspace' && activeRole === 'DIRECTOR' && (
        <DirectorCommandCenter onBack={handleBackToLanding} />
      )}

      {view === 'workspace' && activeRole === 'DOCENTE' && (
        <DocenteTutorialPage onBack={handleBackToLanding} />
      )}

      {view === 'workspace' && activeRole === 'ESTUDIANTE' && (
        <EstudianteTutorialPage onBack={handleBackToLanding} />
      )}

      {view === 'workspace' && activeRole === 'GLOBAL' && (
        <GlobalTutorialPage onBack={handleBackToLanding} />
      )}
    </div>
  );
}
