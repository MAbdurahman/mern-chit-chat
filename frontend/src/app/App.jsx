
import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import AuthPage from '@/pages/auth/AuthPage.jsx';
import ChatPage from '@/pages/chat/ChatPage.jsx';
import ProfilePage from '@/pages/profile/ProfilePage.jsx';

export default function App() {

   return (
         <Routes>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
         </Routes>

   );
}