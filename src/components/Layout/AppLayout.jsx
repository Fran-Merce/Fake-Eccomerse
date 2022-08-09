import React from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { AppLayoutWrapper } from './AppLayoutWrapper';

export const AppLayout = ({ children }) => (
  <AppLayoutWrapper>
    <Navbar />
    {children}
    <Footer />
  </AppLayoutWrapper>
);
