import { Outlet, Link, useLocation } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, SignUpButton, UserButton, SignInButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  const location = useLocation();
  const isChatPage = location.pathname.startsWith('/dashboard/chats/');

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className={`rootLayout ${isChatPage ? 'chatpage-bg' : ''}`}>
        <header>
          {/* Left Section */}
          <div className="left">
            <Link to="/" className="logo">
              <img src="/bot.png" alt="logo" />
              <span className="asktext">ASKGEM</span>
            </Link>
          </div>

          {/* Middle Section */}
          <div className="middle">
            <button className="navbtn active">Tools</button>
            <button className="navbtn">Assistants</button>
            <button className="navbtn">History</button>
          </div>

          {/* Right Section */}
          <div className="right">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="humanpfp">
              <img src="/human2.jpeg" alt="pfp" />
            </div>
            <p className='txt'>Robin</p>
            <div className="notif">
              <span className="notificon">🔔</span>
              <span className="notifcount">3</span>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
