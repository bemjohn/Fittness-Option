import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { MembershipPage } from './pages/MembershipPage.tsx';
import { BenefitsPage } from './pages/BenefitsPage.tsx';
import { CorporatePage } from './pages/CorporatePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { JoinModal } from './components/JoinModal.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { TrainerModal } from './components/TrainerModal.tsx';
import { CorporateModal } from './components/CorporateModal.tsx';
import { GymClass, Trainer } from './types.ts';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [initialPlanId, setInitialPlanId] = useState<string | undefined>(undefined);
  const [bookingClass, setBookingClass] = useState<GymClass | null>(null);
  const [consultTrainer, setConsultTrainer] = useState<Trainer | null>(null);

  const handleOpenJoin = (planId?: string) => {
    setInitialPlanId(planId);
    setIsJoinOpen(true);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#07080c] text-[#e8e9ec] antialiased selection:bg-[#EF4444] selection:text-white flex flex-col justify-between">
        <ScrollToTop />

        {/* Global Navigation Bar with 5 Dedicated Pages */}
        <Navbar
          onOpenJoin={() => handleOpenJoin()}
          onOpenCorporate={() => setIsCorporateOpen(true)}
        />

        {/* Dedicated Pages Routing */}
        <main className="flex-grow">
          <Routes>
            {/* Page 1: Home */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenJoin={(planId) => handleOpenJoin(planId)}
                  onBookClass={(cls) => setBookingClass(cls)}
                  onConsultTrainer={(trainer) => setConsultTrainer(trainer)}
                />
              }
            />

            {/* Page 2: Membership */}
            <Route
              path="/membership"
              element={
                <MembershipPage
                  onOpenJoin={(planId) => handleOpenJoin(planId)}
                />
              }
            />

            {/* Page 3: Member Benefits */}
            <Route
              path="/benefits"
              element={
                <BenefitsPage
                  onOpenJoin={() => handleOpenJoin()}
                />
              }
            />

            {/* Page 4: Corporate */}
            <Route
              path="/corporate"
              element={
                <CorporatePage
                  onOpenCorporateModal={() => setIsCorporateOpen(true)}
                />
              }
            />

            {/* Page 5: About Us */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenJoin={() => handleOpenJoin()}
                  onBookClass={(cls) => setBookingClass(cls)}
                  onConsultTrainer={(trainer) => setConsultTrainer(trainer)}
                />
              }
            />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer
          onOpenJoin={() => handleOpenJoin()}
          onOpenCorporate={() => setIsCorporateOpen(true)}
        />

        {/* Interactive Modals */}
        <JoinModal
          isOpen={isJoinOpen}
          onClose={() => setIsJoinOpen(false)}
          initialPlanId={initialPlanId}
        />

        <CorporateModal
          isOpen={isCorporateOpen}
          onClose={() => setIsCorporateOpen(false)}
        />

        <BookingModal
          gymClass={bookingClass}
          onClose={() => setBookingClass(null)}
        />

        <TrainerModal
          trainer={consultTrainer}
          onClose={() => setConsultTrainer(null)}
        />
      </div>
    </HashRouter>
  );
}
