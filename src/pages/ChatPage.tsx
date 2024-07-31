// ChatPage.tsx
import DefaultLayout from '@/layout/DefaultLayout';
import { userData, loggedInUserData, UserData, Message } from '@/app/data';
import React from 'react';
import { ChatLayout } from '@/components/Chat/chat-layout';

const ChatPage = () => {

  return (
    <>
      <DefaultLayout>
        <ChatLayout 
          defaultLayout={[320, 480]} 
          defaultCollapsed={false} 
          navCollapsedSize={50} 
        />
      </DefaultLayout>
    </>
  );
};

export default ChatPage;
