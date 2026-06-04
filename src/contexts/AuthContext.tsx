import { createContext, useContext, type ReactNode } from 'react';

/**
 * Phase 2: Auth Context
 *
 * Wire Supabase Auth here:
 * 1. npm install @supabase/supabase-js
 * 2. Initialize client with your project URL and anon key
 * 3. Implement signIn, signOut, and session listener
 * 4. Swap storage adapter to SupabaseAdapter when user is authenticated
 */

interface AuthContextValue {
  user: null; // Phase 2: Supabase User type
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: async () => { console.warn('Auth not implemented — Phase 2'); },
  signOut: async () => { console.warn('Auth not implemented — Phase 2'); },
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{
      user: null,
      signIn: async () => { console.warn('Auth not implemented — Phase 2'); },
      signOut: async () => { console.warn('Auth not implemented — Phase 2'); },
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
